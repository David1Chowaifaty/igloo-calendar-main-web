import { isAgentMode } from "../../../functions";
import { ExtraServiceSchema } from "../../../../../models/booking.dto";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { taxationModes } from "../../../../../services/property/types";
import { findAccTax, toAccChargeRule } from "../../../../../services/property/acc-tax.helpers";
import calendar_data, { getExtraServiceDefaultPrice, getBabyCotPricingModel } from "../../../../../stores/calendar-data";
import { getTopLevelSvcCategories, groupSvcCategoriesByParent } from "../../../../../utils/svc-category.utils";
import { calculateDaysBetweenDates, formatName } from "../../../../../utils/booking";
import { h } from "@stencil/core";
import { z, ZodError } from "zod";
import { SvcCategory } from "../../../../../types/enums";
import { t } from "../../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../../services/setup/index";
import { formatCount } from "../../../../../utils/number";
/** Group code for accommodation-linked extra services (Breakfast, Minibar, ...) — see `KNOWN_GROUP_LABELS` in svc-category.utils. */
const ACCOMMODATION_GROUP_CODE = SvcCategory.Accommodation;
/** Early Check-In / Late Check-Out aren't selectable as an accommodation sub-category here — they're handled elsewhere in the booking flow. */
const ACCOMMODATION_EXCLUDED_CODES = new Set(['ECI', 'LCO']);
/** `_SVC_CATEGORY` short code for Baby Cot — its default price is per-stay or per-night depending on BABY_COT_PRICING_MODEL. */
const BABY_COT_CATEGORY_CODE = 'BCT';
export class IrExtraServiceConfigForm {
    booking;
    agent;
    service;
    svcCategories = [];
    language;
    /** Pre-selected room identifier to link a new service to, e.g. when added from ir-room's quick-add action. */
    defaultIdentifier = null;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
    /** Group (e.g. Accommodation) the currently selected top-level category belongs to, when it has sub-categories to pick from. */
    selectedGroupCode = null;
    /** True once the price field has been set by user input (typed, or loaded from an existing saved service) — freezes it against further auto-recalculation. */
    priceManuallyEdited = false;
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (isAgentMode(this.agent)) {
            this.assignee = 'agent';
        }
        this.assignService();
    }
    handleServiceChange() {
        this.assignService();
    }
    assignService() {
        if (this.service) {
            this.s_service = { ...this.service };
            this.selectedGroupCode = this.groupCodeForCategoryCode(this.service.category?.code);
            // An existing service already carries its saved price — don't let a subsequent date-range edit silently recompute it.
            this.priceManuallyEdited = true;
            if (!this.service.agent) {
                this.assignee = 'guest';
            }
        }
        else {
            this.selectedGroupCode = null;
            this.priceManuallyEdited = false;
            if (this.effectiveRoomIdentifier != null) {
                this.s_service = {
                    cost: null,
                    description: null,
                    end_date: null,
                    start_date: null,
                    price: null,
                    currency_id: this.booking.currency.id,
                    room_identifier: this.effectiveRoomIdentifier,
                };
            }
        }
    }
    /** Which group (e.g. `Accommodation`) a leaf category code belongs to, if any — used to re-derive the group selection when editing an existing service. */
    groupCodeForCategoryCode(code) {
        if (!code)
            return null;
        for (const group of this.svcGroups.values()) {
            if (group.categories.some(c => c.CODE_NAME === code)) {
                return group.code;
            }
        }
        return null;
    }
    get taxCategoryLookup() {
        const notApplicableCodes = new Set(calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code === taxationModes.NOT_APPLICABLE).map(c => c.category.code));
        const taxPctByCode = Object.fromEntries(calendar_data.property.tax_categories.map(c => [c.category.code, c.pct || 0]));
        const realCodes = new Set(this.svcCategories.map(c => c.CODE_NAME));
        const accVat = toAccChargeRule(findAccTax('vat'));
        return { notApplicableCodes, taxPctByCode, realCodes, accVat };
    }
    toCategoryOption(cat) {
        const { notApplicableCodes, taxPctByCode, realCodes, accVat } = this.taxCategoryLookup;
        // Synthesized parent-group placeholders (e.g. Accommodation) have no `tax_categories` row of their
        // own — their rate mirrors the property's accommodation VAT, same as it does on the Extra Services page.
        if (!realCodes.has(cat.CODE_NAME)) {
            return { ...cat, pct: accVat.mode === taxationModes.NOT_APPLICABLE ? 0 : (accVat.value ?? 0), isNotApplicable: accVat.mode === taxationModes.NOT_APPLICABLE };
        }
        return { ...cat, pct: taxPctByCode[cat.CODE_NAME] ?? 0, isNotApplicable: notApplicableCodes.has(cat.CODE_NAME) };
    }
    sortByLabel(entries) {
        return entries.sort((a, b) => getSetupEntryLabel(a, this.language).localeCompare(getSetupEntryLabel(b, this.language)));
    }
    get categories() {
        return this.sortByLabel(getTopLevelSvcCategories(this.svcCategories).map(cat => this.toCategoryOption(cat)));
    }
    get svcGroups() {
        return groupSvcCategoriesByParent(this.svcCategories, this.language ?? 'en');
    }
    /** Sub-categories of the currently selected top-level group (e.g. Breakfast/Minibar under Accommodation), when there are any. */
    get subCategories() {
        if (!this.selectedGroupCode)
            return [];
        const group = this.svcGroups.get(this.selectedGroupCode);
        if (!group)
            return [];
        const categories = this.selectedGroupCode === ACCOMMODATION_GROUP_CODE ? group.categories.filter(cat => !ACCOMMODATION_EXCLUDED_CODES.has(cat.CODE_NAME)) : group.categories;
        return categories.filter(cat => cat.CODE_NAME !== SvcCategory.DayUse).map(cat => this.toCategoryOption(cat));
    }
    /** The unit-link select becomes mandatory once the chosen extra service is an accommodation sub-category (Breakfast, Minibar, ...). */
    get isUnitRequired() {
        return this.selectedGroupCode === ACCOMMODATION_GROUP_CODE;
    }
    /** One option per booked room, keyed by `room.identifier`. Assigned rooms show their unit name; unassigned ones show the room guest's name instead so they can still be told apart. */
    get unitOptions() {
        return (this.booking?.rooms ?? []).map(room => {
            const isAssigned = !!room.unit && typeof room.unit === 'object';
            const suffix = isAssigned ? room.unit.name : formatName(room.guest?.first_name ?? null, room.guest?.last_name ?? null);
            return { identifier: room.identifier, label: `${room.roomtype?.name ?? ''} ${suffix ?? ''}`.trim() };
        });
    }
    get showUnitLink() {
        return (this.booking?.rooms?.length ?? 0) > 1;
    }
    /** The room identifier to link a new service to: an explicit default (e.g. from ir-room's quick-add, given as a room identifier), or the booking's single room when there's no choice to make. */
    get effectiveRoomIdentifier() {
        if (this.defaultIdentifier != null) {
            return this.unitOptions.find(option => option.identifier === this.defaultIdentifier)?.identifier ?? null;
        }
        return this.unitOptions.length === 1 ? this.unitOptions[0].identifier : null;
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            const service = { ...(this.s_service ?? {}), agent: this.assignee === 'agent' ? this.booking.agent : null };
            if (this.selectedGroupCode && !service.category?.code) {
                // A group (e.g. Accommodation) was picked but its sub-category select hasn't been resolved yet.
                this.error = true;
                return;
            }
            const schema = this.isUnitRequired
                ? ExtraServiceSchema.extend({
                    room_identifier: z
                        .string({ required_error: t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) })
                        .nonempty(t('Lcz_UnitIsRequired', { fallback: 'Unit is required' })),
                })
                : ExtraServiceSchema;
            schema.parse(service);
            await this.bookingService.doBookingExtraService({
                service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingEvt.emit(null);
            this.closeDialog();
        }
        catch (error) {
            if (error instanceof ZodError) {
                this.error = true;
            }
            console.error(error);
        }
    }
    closeDialog() {
        this.closeModal.emit();
    }
    /**
     * Sets the chosen leaf category and, when the property has a configured default price for it,
     * overwrites the price field to match. Re-arms auto-recalculation (see `priceManuallyEdited`) —
     * a fresh category selection always gets its default, even over a previously typed price.
     */
    selectCategory(code) {
        this.priceManuallyEdited = false;
        const defaultPrice = this.resolveDefaultPrice(code);
        this.updateService({ category: { code }, price: defaultPrice !== null ? defaultPrice : (this.s_service?.price ?? null) });
    }
    /**
     * Resolves the property's configured default price for `code`. For every category except Baby
     * Cot this is just the flat `SVC_DEFAULT_PRICE_<code>` rate. Baby Cot's rate is charged once per
     * stay or once per night depending on `BABY_COT_PRICING_MODEL` (set on the Extra Services
     * settings page) — when it's per night, the rate is multiplied by the number of nights in the
     * currently selected date range (falling back to the full booking stay when no range is picked
     * yet), so the field always reflects "rate × nights" until the user overrides it by typing.
     */
    resolveDefaultPrice(code) {
        const rate = getExtraServiceDefaultPrice(code);
        if (rate === undefined) {
            return null;
        }
        const rateNum = Number(rate);
        if (code !== BABY_COT_CATEGORY_CODE || getBabyCotPricingModel() !== 'Night') {
            return rateNum;
        }
        const start = this.s_service?.start_date ?? this.booking.from_date;
        const end = this.s_service?.end_date ?? this.booking.to_date;
        return rateNum * calculateDaysBetweenDates(start, end);
    }
    /** Keeps Baby Cot's per-night price in sync with the selected date range, unless the user has already typed a price of their own. */
    syncBabyCotPriceWithDateRange() {
        if (this.priceManuallyEdited || this.s_service?.category?.code !== BABY_COT_CATEGORY_CODE || getBabyCotPricingModel() !== 'Night') {
            return;
        }
        const price = this.resolveDefaultPrice(BABY_COT_CATEGORY_CODE);
        if (price !== null) {
            this.updateService({ price });
        }
    }
    updateService(params) {
        let prevService = this.s_service;
        if (!prevService) {
            prevService = {
                cost: null,
                description: null,
                end_date: null,
                start_date: null,
                price: null,
                currency_id: this.booking.currency.id,
                room_identifier: this.effectiveRoomIdentifier,
            };
        }
        this.s_service = { ...prevService, ...params };
    }
    assignmentChanged(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.assignee = event.detail;
    }
    render() {
        return (h("form", { key: '008e125b7b8bdc9b3fc1ad85600c9294f393254d', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (h("ir-validator", { key: '6ef8d9f441353cf2825595aee55c46d0e8b42251', value: this.s_service?.category, schema: ExtraServiceSchema.shape.category }, h("wa-select", { key: '316e5a38466b3f0773d8476399e9a00c6a9a031c', size: "s", label: t('Lcz_ServiceCategory', { fallback: 'Service category' }), value: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', defaultValue: this.selectedGroupCode ?? this.s_service?.category?.code ?? '', onchange: (e) => {
                const code = e.target.value;
                const group = this.svcGroups.get(code);
                if (group && group.categories.length > 0) {
                    this.selectedGroupCode = code;
                    this.updateService({ category: null });
                }
                else {
                    this.selectedGroupCode = null;
                    this.selectCategory(code);
                }
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.categories?.map(category => {
            const vatSuffix = category.isNotApplicable
                ? t('Lcz_VatNotApplicable', { fallback: 'VAT - Not applicable' })
                : t('Lcz_VatPercent', { fallback: 'VAT %1%', params: [formatCount(category.pct)] });
            const label = getSetupEntryLabel(category, this.language) + ` (${vatSuffix})`;
            if (this.booking.is_room_less && category.CODE_NAME === SvcCategory.Accommodation) {
                return null;
            }
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), this.selectedGroupCode && this.subCategories.length > 0 && (h("ir-validator", { key: 'aa54cbf1bea8da5d6f5b7e25fc483250012024f4', value: this.s_service?.category?.code ?? null, schema: z
                .string({ required_error: t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' }) })
                .nonempty(t('Lcz_SubcategoryIsRequired', { fallback: 'Subcategory is required' })) }, h("wa-select", { key: 'bdfff15bd5115786965a7216bc5958a5c44c1209', size: "s", label: t('Lcz_Subcategory', { fallback: 'Subcategory' }), required: true, value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.selectCategory(e.target.value);
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.subCategories.map(category => {
            const label = getSetupEntryLabel(category, this.language);
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label, category.CODE_NAME === BABY_COT_CATEGORY_CODE && getBabyCotPricingModel() && h("span", null, " (/", getBabyCotPricingModel().toLowerCase(), ")"), category.CODE_NAME === 'EXB' && h("span", null, t('Lcz_ExtraBedPerNightSuffix', { fallback: ' (/night)' }))));
        })))), h("ir-validator", { key: '2239d823a624a7b4615071dcbe1e12d68cf554fa', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: '4e3e404f3e4b4ce30b96c86e1b65463ab21f3988', size: "s", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": t('Lcz_AmenityDescriptionAriaLabel', { fallback: 'Amenity description' }), maxlength: 250, label: t('Lcz_Description', { fallback: 'Description' }) })), this.showUnitLink && (h("ir-validator", { key: 'deb180ef1f9c432171287a2f654bc1e3415afedf', value: this.s_service?.room_identifier ?? null, schema: this.isUnitRequired
                ? z.string({ required_error: t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }) }).nonempty(t('Lcz_UnitIsRequired', { fallback: 'Unit is required' }))
                : ExtraServiceSchema.shape.room_identifier }, h("wa-select", { key: 'b2b0a9d2d34646e6ac32594944d1140f6857052d', size: "s", label: this.isUnitRequired ? t('Lcz_LinkToUnit', { fallback: 'Link to unit' }) : t('Lcz_LinkToUnitOptional', { fallback: 'Link to unit (optional)' }), required: this.isUnitRequired, value: this.s_service?.room_identifier ?? '', defaultValue: this.s_service?.room_identifier ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateService({ room_identifier: value || null });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, !this.isUnitRequired && h("wa-option", { key: '41dbe08c3c2b136c4cbbca7bb98bdfd8a9153049', value: "" }, t('Lcz_NotLinkedToSpecificUnit', { fallback: 'Not linked to a specific unit' })), this.unitOptions.map(option => (h("wa-option", { value: option.identifier, label: option.label }, option.label)))))), h("ir-validator", { key: 'e8ee8705cb4b03c406b25ebf2f9907119d7677fd', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-date-select", { key: '1f1065351319fe1d635c470d6733b0acdc28996b', placeholder: t('Lcz_SelectDate', { fallback: 'Select date' }), withClear: true, label: t('Lcz_DatesOn', { fallback: 'Dates on' }), emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            } })), h("ir-date-select", { key: 'd910c3293045a83ad96b585ab5dba48ad01135d4', withClear: true, emitEmptyDate: true, placeholder: t('Lcz_SelectDate', { fallback: 'Select date' }), date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
                this.syncBabyCotPriceWithDateRange();
            }, label: t('Lcz_TillAndIncluding', { fallback: 'Till and including' }) }), h("ir-validator", { key: '9771f248a341d0a2e2b2136eba3172116c7b165e', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '40742178b7c38abdd2640c2f9626ed5b6b90c33b', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", onChange: () => {
                this.priceManuallyEdited = true;
            }, label: `${t('Lcz_Price')} ${t('Lcz_IncludingTaxSuffix', { fallback: '(including tax)' })}` }, h("span", { key: '9173dd4a4de0b3be85bc9a8e496bd65643e5150b', slot: "start" }, this.booking.currency.symbol))), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: 'b95e518043a478b104b792aff3c7dc1fc980c331', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
    }
    static get is() { return "ir-extra-service-config-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-config-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-config-form.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "service": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ExtraService",
                    "resolved": "{ description?: string; currency_id?: number; agent?: { code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; pr_id?: number; }; system_id?: number; charges?: { total_amount?: number; city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; vat_amount?: number; vat_percent?: number; }; cost?: number; room_identifier?: string; category?: { code?: string; }; booking_system_id?: number; end_date?: string; start_date?: string; price?: number; pr_id?: number; from_time?: string; to_time?: string; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService",
                            "referenceLocation": "ExtraService"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "svcCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language"
            },
            "defaultIdentifier": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Pre-selected room identifier to link a new service to, e.g. when added from ir-room's quick-add action."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default-identifier",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "s_service": {},
            "error": {},
            "fromDateClicked": {},
            "toDateClicked": {},
            "autoValidate": {},
            "assignee": {},
            "selectedGroupCode": {},
            "priceManuallyEdited": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "service",
                "methodName": "handleServiceChange"
            }];
    }
}
