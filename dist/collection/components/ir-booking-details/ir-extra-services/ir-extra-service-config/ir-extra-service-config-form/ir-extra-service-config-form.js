import { isAgentMode } from "../../../functions";
import { ExtraServiceSchema } from "../../../../../models/booking.dto";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import { taxationModes } from "../../../../../services/property.service";
import calendar_data from "../../../../../stores/calendar-data";
import locales from "../../../../../stores/locales.store";
import { h } from "@stencil/core";
import { ZodError } from "zod";
export class IrExtraServiceConfigForm {
    booking;
    agent;
    service;
    svcCategories = [];
    language;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    assignee = 'guest';
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
            if (!this.service.agent) {
                this.assignee = 'guest';
            }
        }
    }
    get categories() {
        const notApplicableCodes = new Set(calendar_data.property.tax_categories.filter(c => c.taxation_mode?.code === taxationModes.NOT_APPLICABLE).map(c => c.category.code));
        const taxPctByCode = Object.fromEntries(calendar_data.property.tax_categories.map(c => [c.category.code, c.pct || 0]));
        return this.svcCategories.map(cat => ({ ...cat, pct: taxPctByCode[cat.CODE_NAME], isNotApplicable: notApplicableCodes.has(cat.CODE_NAME) }));
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            const service = { ...(this.s_service ?? {}), agent: this.assignee === 'agent' ? this.booking.agent : null };
            ExtraServiceSchema.parse(service);
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
        return (h("form", { key: 'cf71dae7814dd35f9f4489296f3288f96e114249', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, this.categories.length > 0 && (h("ir-validator", { key: 'fa8645d005485bf617e91342cf563af0a5c78227', value: this.s_service?.category, schema: ExtraServiceSchema.shape.category }, h("wa-select", { key: 'd84680dd84ca7e8e1533aa5d8d6818da1baf7dbc', size: "s", label: "Service category", value: this.s_service?.category?.code ?? '', defaultValue: this.s_service?.category?.code ?? '', onchange: (e) => {
                this.updateService({ category: { code: e.target.value } });
            }, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, this.categories?.map(category => {
            const langKey = `CODE_VALUE_${(this.language ?? 'en').toUpperCase()}`;
            const vatSuffix = category.isNotApplicable ? 'VAT - Not applicable' : `VAT ${category.pct}%`;
            const label = (category[langKey] ?? category.CODE_VALUE_EN ?? '') + ` (${vatSuffix})`;
            return (h("wa-option", { value: category.CODE_NAME, label: label }, label));
        })))), h("ir-validator", { key: 'f7bdff098a903827faa07bf5701e686b6c83f4df', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: '1036a1882fd17bbdbf6255ee7518f3001189c359', size: "s", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), h("ir-validator", { key: '802a0d6f797073a7ca610cbf25e2417443db09c7', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-date-select", { key: '0caedd8c0089a43d1967814c63490310d9058bca', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) })), h("ir-date-select", { key: '1cc33babd31105b130271f59662708ff60569e92', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), h("ir-validator", { key: 'd6bc60128d066d01a5c3aae9ff6a9fe9583d485a', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: 'dcc1b617fa0e18fa2a84bc6e1623c065efd8c6a1', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: `${locales.entries.Lcz_Price} (including tax)` }, h("span", { key: 'e4020e0446a8eda5b36421383b7272f6751d85a6', slot: "start" }, this.booking.currency.symbol))), h("ir-validator", { key: 'f58be532a533831d94ecec924bee0a86eebe385b', value: this.s_service?.cost ?? null, schema: ExtraServiceSchema.shape.cost }, h("ir-input", { key: '99431b66dbb0beabcb6eb4f1d9e2a57553f41bb4', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: `${locales.entries.Lcz_Cost} (optional)` }, h("span", { key: '283b17d56c58aa5cd45fd3a51b787d086d800666', slot: "start" }, this.booking.currency.symbol))), isAgentMode(this.agent) && (h("ir-service-assignee-select", { key: '967d0a0a5e49b3f25ce9a5b8a289ee24f74a4f61', assigneeType: this.assignee, onAssignmentChange: e => this.assignmentChanged(e), agent: this.booking.agent }))));
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
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ description?: string; currency_id?: number; agent?: { name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }; system_id?: number; booking_system_id?: number; cost?: number; end_date?: string; start_date?: string; price?: number; category?: { code?: string; }; charges?: { city_tax_amount?: number; city_tax_percent?: number; net_amount?: number; service_charge_amount?: number; service_charge_percent?: number; tax_amount?: number; total_amount?: number; vat_amount?: number; vat_percent?: number; }; }",
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
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IEntries",
                            "referenceLocation": "IEntries"
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
            "assignee": {}
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
