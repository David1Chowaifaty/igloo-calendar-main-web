import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    render() {
        return (h(Host, { key: '2fff9df49988e98c3ea60c68a48733c9b82a9d8b' }, h("wa-card", { key: '0baec271a3decbe82cb2a1ca9fb6d0ebc5610e72' }, h("p", { key: '67834b36b886ccf06151533d4872a504efdff531', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: '9420a1369c1868c99f07a7cc7f4698ee331b4505', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'dc0348d3cf1a5a408fca5ba279dbd5d9c36dd0aa', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '9d87276f99a2d7adae23e17d2041e64be47ed98b', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && (h("div", { key: '3142e72ee972929d5d468f5913bbca019c96ec7b', class: "text-center p-1" }, h("p", { key: '01f0d179d9e1cc517b2a297c4ccc3f824dd64e9c', class: "text-muted" }, "No extra service recorded yet"))), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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
