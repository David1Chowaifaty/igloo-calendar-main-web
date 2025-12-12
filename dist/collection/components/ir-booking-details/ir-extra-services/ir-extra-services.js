import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    render() {
        return (h(Host, { key: '5cfe6357f160ae767179e3e8427e73e1977632c1' }, h("wa-card", { key: '5839cbdccefda272aeb50795743a37607af4bca6' }, h("p", { key: '2eff6df672b2a6972ffc9679efc5a7957ff883b9', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'ed45783509f2b434326fe49561c4b5ffedbbc725', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: '1dba162268d18a3e7b257cb63cd1e848c3d130a5', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'b223df1af262afd7940d29174e4db85705a8adee', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && (h("div", { key: '953732be6633ca4a90e9c0c528c5032aa071667a', class: "text-center p-1" }, h("p", { key: '6901b1df790e527932383becf3b1387f8f831b98', class: "text-muted" }, "No extra service recorded yet"))), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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
