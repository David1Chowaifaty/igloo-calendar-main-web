import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    render() {
        return (h(Host, { key: '15bd615a8f983c6b24a10b21665b57b35fcf7d68' }, h("wa-card", { key: '3419e1f44520424382f6a32c9427c3e100f2827c' }, h("p", { key: '11acaa222250b182a5404ded9381d3e13793f950', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'de38ecc295ddfa142a1a410fa60caf8a5f2e3275', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'ca3ef53225802dc1030aae80e41225578f35792d', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '40a060127e84beee6d024e38e28fb3effd710427', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: 'c5c80ab3ce0160faec75821e9e6c7426d1339214' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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
