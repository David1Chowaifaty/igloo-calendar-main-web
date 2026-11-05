import { Host, h } from "@stencil/core";
export class IrUnvoicedBookingsSummary {
    render() {
        return (h(Host, { key: '8b35f20967b827dc003a534575f7ee36e4fee6f4' }, h("slot", { key: '5f2ba37c1ce3cafd4352e11c74d230381992b993' })));
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
