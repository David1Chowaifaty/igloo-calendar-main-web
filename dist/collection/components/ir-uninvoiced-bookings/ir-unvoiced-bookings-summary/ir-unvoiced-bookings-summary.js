import { Host, h } from "@stencil/core";
export class IrUnvoicedBookingsSummary {
    render() {
        return (h(Host, { key: '9d2476507ae32acc6199862b9992c5e8ab47193e' }, h("slot", { key: '9aa131e85c1196080baf26050c1369f7ffe58ef7' })));
    }
    static get is() { return "ir-unvoiced-bookings-summary"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-summary.css"]
        };
    }
}
