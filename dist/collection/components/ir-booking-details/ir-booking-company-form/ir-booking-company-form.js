import { h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
export class IrBookingCompanyForm {
    booking;
    open;
    isLoading;
    formData;
    resetBookingEvt;
    companyFormClosed;
    bookingService = new BookingService();
    componentWillLoad() {
        this.formData = { company_name: this.booking.company_name, company_tax_nbr: this.booking.company_tax_nbr };
    }
    async openCompanyForm() {
        this.open = true;
    }
    updateGuest(params) {
        this.formData = { ...this.formData, ...params };
    }
    async saveCompany() {
        try {
            this.isLoading = true;
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.formData,
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(booking);
            this.resetBookingEvt.emit({ ...this.booking, ...this.formData });
            this.open = false;
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h("ir-dialog", { key: '60b493a2cef1bcb64512f6fd30a25f3ce35b12fb', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.open = false;
                this.companyFormClosed.emit();
            }, label: "Company", id: "dialog-overview" }, h("div", { key: 'ca43e7bcadcc4c7a85faaaaf87bf4ffae368ca37', class: "d-flex  flex-column", style: { gap: '1rem' } }, h("ir-custom-input", { key: 'f97253a7795d6d52a97667b36e290267e230fdda', "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), h("ir-custom-input", { key: '29f02c1e4e2433f01eb2700f3b6b5bc1f13b84bd', "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })), h("div", { key: '198659b086a64198e2247e98b18dca9706ab0468', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6e34dbd9920ebe5c4e26ce8f92a775f2c6c9ab9e', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'de4129fde25d668d70c55510229e94139a310434', loading: this.isLoading, size: "medium", variant: "brand", onClickHandler: () => this.saveCompany() }, "Save"))));
    }
    static get is() { return "ir-booking-company-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-company-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-company-form.css"]
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
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "isLoading": {},
            "formData": {}
        };
    }
    static get events() {
        return [{
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
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                }
            }, {
                "method": "companyFormClosed",
                "name": "companyFormClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openCompanyForm": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-booking-company-form.js.map
