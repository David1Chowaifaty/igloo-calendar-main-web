import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    render() {
        return (h(Host, { key: '44722d4f9ad4098ef4c3156a91d33803093a9db2' }, h("wa-card", { key: 'cc784fc9789af3ea94da0ba8800c3f91ed1f46cd' }, h("p", { key: '860b54279bc03750f2a3ef9502db184bbc095357', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: '61876e77ac9c9a3a844e52effb09cd83db14611c', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'cfe0d04133911b81e09170266f7663f1ff34686e', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'deeae04807a6d4cdf2b961c3f6684d4adb6c147b', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: '634d54a186a0ff25d1867b16570d3c12aa729442' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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
                    "resolved": "{ currency: Currency; booking_nbr: string; extra_services: { system_id?: number; cost?: number; description?: string; booking_system_id?: number; currency_id?: number; end_date?: string; start_date?: string; price?: number; }[]; }",
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
