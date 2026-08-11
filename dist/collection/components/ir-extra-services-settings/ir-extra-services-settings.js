import Token from "../../models/Token";
import { h } from "@stencil/core";
import { BookingService } from "../../services/booking-service/booking.service";
import { PropertyService } from "../../services/property.service";
import { taxationModes } from "../../services/property/types";
import { getAccTaxPayloadFields, findAccTax, toAccChargeRule } from "../../services/property/acc-tax.helpers";
import { getExtraServiceDefaultPrice, getDayUseBlockState } from "../../stores/calendar-data";
import { getEntryValue, showToast } from "../../utils/utils";
import { groupSvcCategoriesByParent } from "../../utils/svc-category.utils";
/** `_SVC_CATEGORY` short code for Day Use — only used to place the Block Night switch, not for grouping. */
const DAY_USE_CATEGORY_CODE = 'DUZ';
export class IrExtraServicesSettings {
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    setupEntries;
    priceCategoryRules = new Map();
    autoValidate;
    dayUseBlockNight = false;
    tokenService = new Token();
    bookingService = new BookingService();
    propertyService = new PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    reinit() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    async init() {
        this.isLoading = true;
        try {
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY']),
            ]);
            this.setupEntries = this.bookingService.groupEntryTablesResult(tableEntries);
            this.priceCategoryRules = this.buildInitialRules();
            this.dayUseBlockNight = getDayUseBlockState() === '1';
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /** `svc_category` entries grouped by their `NOTES`-referenced parent code. See `groupSvcCategoriesByParent`. */
    get serviceGroups() {
        return Array.from(groupSvcCategoriesByParent(this.setupEntries?.svc_category ?? [], this.language).values());
    }
    /** All grouped categories flattened, for building the price-rules map and the save payload. */
    get categories() {
        return this.serviceGroups.flatMap(group => group.categories);
    }
    /**
     * The property's VAT setup. Every grouped extra service shares this one rate and is always
     * marked Inclusive — there's no per-category tax mode to configure anymore, so this single
     * value both drives the card-header summary and is what gets saved for every category.
     */
    get vatSummary() {
        return toAccChargeRule(findAccTax('vat'));
    }
    /** Formats a charge rule as e.g. "15% Inclusive" or "Not Applicable". */
    formatAccChargeRule(rule) {
        if (rule.mode === taxationModes.NOT_APPLICABLE)
            return 'Not Applicable';
        return `${rule.value ?? 0}% ${rule.mode === taxationModes.INCLUSIVE ? 'Inclusive' : 'Exclusive'}`;
    }
    /** Builds the initial price rules map from `extra_info`'s `SVC_DEFAULT_PRICE_<code>` entries. Mode is always Inclusive — see `vatSummary`. */
    buildInitialRules() {
        const rules = new Map();
        this.categories.forEach(c => {
            const defaultPrice = getExtraServiceDefaultPrice(c.CODE_NAME);
            rules.set(c.CODE_NAME, { mode: taxationModes.INCLUSIVE, value: defaultPrice !== undefined ? Number(defaultPrice) : null });
        });
        return rules;
    }
    handlePriceRuleChange(categoryCode, nextRule) {
        const next = new Map(this.priceCategoryRules);
        next.set(categoryCode, nextRule);
        this.priceCategoryRules = next;
    }
    /** Assembles the API payload from the current price rules state. Every category shares the property's VAT rate and is Inclusive. */
    buildPayload() {
        const vat = this.vatSummary;
        const inclusiveEntry = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === taxationModes.INCLUSIVE);
        const tax_categories = this.categories.map(category => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: taxationModes.INCLUSIVE, description: inclusiveEntry?.CODE_VALUE_EN ?? 'Inclusive' },
                pct: vat.mode === taxationModes.NOT_APPLICABLE ? 0 : (vat.value ?? 0),
                default_price: rule?.value ?? null,
            };
        });
        return {
            property_id: this.propertyid,
            ...getAccTaxPayloadFields(),
            tax_categories,
            DAY_USE_BLOCK: this.dayUseBlockNight ? '1' : '0',
        };
    }
    /** Validates and submits the extra-service price configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            showToast({
                title: 'Saved Successfully',
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { label: "Extra Services", description: "Define pricing and options for the extra services offered on this property.", "data-testid": "ir-extra-services-settings" }, h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "extra-services-settings__form", style: { width: '100px' }, variant: "brand" }, "Save"), h("form", { id: "extra-services-settings__form", onSubmit: e => this.handleSubmit(e), class: "extra-services-settings__groups" }, this.serviceGroups.length === 0 && (h("ir-empty-state", { message: "No extra-service groups are set up yet. Add a service category whose CODE_NAME is referenced by other categories' NOTES to group them here." })), this.serviceGroups.map(group => (h("wa-card", { appearance: "plain", class: "extra-services-settings__card" }, h("div", { slot: "header", class: "extra-services-settings__header" }, h("span", null, group.label), h("span", { class: "extra-services-settings__tax-chip" }, h("span", { class: "extra-services-settings__tax-chip-label" }, "VAT"), h("span", null, this.formatAccChargeRule(this.vatSummary)))), h("div", { class: "extra-services-grid" }, group.categories.map((category, idx) => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            const isDayUse = category.CODE_NAME === DAY_USE_CATEGORY_CODE;
            return [
                idx > 0 && (h("div", { class: "extra-services-grid__divider" }, h("wa-divider", null))),
                h("div", { class: "extra-services-grid__row" }, h("div", { class: "extra-services-grid__name" }, h("p", { class: "extra-services-grid__title" }, getEntryValue({ entry: category, language: this.language }))), h("div", { class: "extra-services-grid__controls" }, h("div", { class: "extra-services-grid__cell" }, h("ir-extra-service-price-input", { autoValidate: this.autoValidate, onPriceChange: e => this.handlePriceRuleChange(category.CODE_NAME, e.detail), chargeRule: rule })), h("div", { class: "extra-services-grid__cell" }, isDayUse && (h("wa-switch", { checked: this.dayUseBlockNight, defaultChecked: this.dayUseBlockNight, onchange: e => (this.dayUseBlockNight = e.target.checked) }, "Block night"))))),
            ];
        }))))))));
    }
    static get is() { return "ir-extra-services-settings"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-services-settings.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-services-settings.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                "attribute": "ticket"
            },
            "p": {
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
                "attribute": "p"
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
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "propertyid"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isSaving": {},
            "setupEntries": {},
            "priceCategoryRules": {},
            "autoValidate": {},
            "dayUseBlockNight": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "p",
                "methodName": "handlePChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
