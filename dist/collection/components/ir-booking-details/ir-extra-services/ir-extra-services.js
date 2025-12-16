import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    render() {
        return (h(Host, { key: '742be7aee3dcd215884b1f85ac6f6f8589c44a51' }, h("wa-card", { key: '34bb0bf51640a0e1e33d7255487bc064440d1a39' }, h("p", { key: '611b757654213c592475c948c353d3bc70fbdfce', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'cff42dd99e0e418f6d5b9ab4ef990fe7d4b1b0e2', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'bc2fce2917ef82705bd7bfb9f57c4ce2b8961419', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '3f116f4d1110c1743d31e736c5f2612c3893f6ed', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: '544b058420d651f9eabc58c1124b619105a3ff05' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
    }
    static get is() { return "ir-extra-services"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-services.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-services.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Pick<Booking, 'currency' | 'extra_services' | 'booking_nbr'>",
                    "resolved": "{ currency: Currency; booking_nbr: string; extra_services: { cost?: number; system_id?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }[]; }",
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
            }
        };
    }
}
//# sourceMappingURL=ir-extra-services.js.map
