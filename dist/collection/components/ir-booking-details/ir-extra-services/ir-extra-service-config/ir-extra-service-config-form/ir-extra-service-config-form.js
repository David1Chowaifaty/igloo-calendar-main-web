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
        return (h("form", { key: '34733b647a6d0618ee7a67b1cf579300e4f799e9', id: "extra-service-config-form", onSubmit: async (e) => {
                e.preventDefault();
                this.saveAmenity();
            }, class: 'extra-service-config__container' }, h("ir-validator", { key: '2ddf5e6ea011a7259adc8fe08286a0334bb2779e', id: "amenity description-validator", schema: ExtraServiceSchema.shape.description }, h("wa-textarea", { key: 'df1e8b20089d91730fc697cedbc29b5f8230a4e8', size: "small", defaultValue: this.s_service?.description, value: this.s_service?.description, onchange: e => this.updateService({ description: e.target.value }), id: "amenity-description", "aria-label": "Amenity description", maxlength: 250, label: locales.entries.Lcz_Description })), h("ir-validator", { key: '0e09f5c8b674e5687c86d91a13d07f9074cdc385', value: this.s_service?.start_date ?? null, schema: ExtraServiceSchema.shape.start_date }, h("ir-custom-date-picker", { key: '4eff9468c169726164a4aa7557af0dac61346bf8', placeholder: "Select date", withClear: true, label: "Dates on", emitEmptyDate: true, date: this.s_service?.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => this.updateService({ start_date: e.detail.start?.format('YYYY-MM-DD') }) })), h("ir-custom-date-picker", { key: 'da3e37715c60ba450c7937d4827ad7510d4b4a2c', withClear: true, emitEmptyDate: true, placeholder: "Select date", date: this.s_service?.end_date, minDate: this.s_service?.start_date ?? this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: e.detail.start?.format('YYYY-MM-DD') });
            }, label: "Till and including" }), h("ir-validator", { key: '80b2b3430258a791fd5945feef1bfcfc56dcf3aa', value: this.s_service?.price ?? null, schema: ExtraServiceSchema.shape.price }, h("ir-input", { key: '77ed54a3f29dcec4fcf3e28cda6a9f3b9e6311a3', "onText-change": e => {
                this.updateService({ price: Number(e.detail) });
            }, defaultValue: this.s_service?.price?.toString(), value: this.s_service?.price?.toString(), mask: 'price', type: "text", label: locales.entries.Lcz_Price }, h("span", { key: 'efd14c73566d95e713097ec89c0240abe5f9b577', slot: "start" }, this.booking.currency.symbol))), h("ir-validator", { key: '82f95903d90205ce850b8a854605e989af63cb37', value: this.s_service?.cost ?? null, schema: ExtraServiceSchema.shape.cost }, h("ir-input", { key: '1681583c4b5337c664b68e4db2fac7be1dfaa76f', defaultValue: this.s_service?.cost?.toString(), "onText-change": e => this.updateService({ cost: Number(e.detail) }), value: this.s_service?.cost?.toString(), mask: 'price', label: locales.entries.Lcz_Cost }, h("span", { key: '78b0e5674010ace27ad49882634a68e8f4c5f6aa', slot: "start" }, this.booking.currency.symbol)))));
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
                    "resolved": "{ system_id?: number; cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }",
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
