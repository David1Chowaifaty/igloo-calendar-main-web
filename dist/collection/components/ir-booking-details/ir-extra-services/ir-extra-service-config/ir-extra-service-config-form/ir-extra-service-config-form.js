import { ExtraServiceSchema } from "../../../../../models/booking.dto";
import { BookingService } from "../../../../../services/booking-service/booking.service";
import locales from "../../../../../stores/locales.store";
import { h } from "@stencil/core";
import { ZodError } from "zod";
export class IrExtraServiceConfigForm {
    booking;
    service;
    s_service;
    error;
    fromDateClicked;
    toDateClicked;
    autoValidate;
    closeModal;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        if (this.service) {
            this.s_service = { ...this.service };
        }
    }
    handleServiceChange() {
        if (this.service) {
            this.s_service = { ...this.service };
        }
    }
    async saveAmenity() {
        try {
            this.autoValidate = true;
            ExtraServiceSchema.parse(this.s_service ?? {});
            await this.bookingService.doBookingExtraService({
                service: this.s_service,
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
    render() {
        return (h("form", { key: '3bf745c3f38d2306fe9ed07349e1ff18a7923499', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, h("ir-validator", { key: 'da72daafcc8e7b820611683fddc21a6472747c4f', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: 'c0e525a92bf2f16dcbadcdd2dba6a431b9ac70b4', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), h("ir-custom-date-picker", { key: '5ba349d5e0e28458c57760b402d5079e64b2796e', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) }), h("ir-custom-date-picker", { key: '99b3baac69bd975cb414642cb62087a236465313', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), h("ir-validator", { key: 'e338f7440f4a5b0efdbb20c5300b178f3ee950b2', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-custom-input", { key: 'e7212af6d67c9847d3f172c0fd95b53b9d7e2fa1', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: locales.entries.Lcz_Price }, h("span", { key: '5bf70d882a1165c8d260512a2ead6cf022877792', slot: "start" }, this.booking.currency.symbol))), h("ir-validator", { key: 'fb713e271023fcf41906a79f5fe478b587b098e2', value: this.s_service?.cost ?? null, schema: ExtraServiceSchema.shape.cost }, h("ir-custom-input", { key: '25148f3449966f0a7078d4dfa63dcbac2c11b393', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: locales.entries.Lcz_Cost }, h("span", { key: '0fc423e8bd967c8f6ff6aa7bc55cb245b7d14d3a', slot: "start" }, this.booking.currency.symbol)))));
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
                    "original": "Pick<Booking, 'from_date' | 'to_date' | 'currency' | 'booking_nbr'>",
                    "resolved": "{ currency: Currency; from_date: string; to_date: string; booking_nbr: string; }",
                    "references": {
                        "Pick": {
                            "location": "global",
                            "id": "global::Pick"
                        },
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
                    "resolved": "{ cost?: number; system_id?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }",
                    "references": {
                        "ExtraService": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::ExtraService"
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
            }
        };
    }
    static get states() {
        return {
            "s_service": {},
            "error": {},
            "fromDateClicked": {},
            "toDateClicked": {},
            "autoValidate": {}
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
//# sourceMappingURL=ir-extra-service-config-form.js.map
