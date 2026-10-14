import { Host, h } from "@stencil/core";
export class IrUnvoicedBookingsSummary {
    render() {
        return (h(Host, { key: '12a9bc9f6313f160af52873b87077a72091d2f8d' }, h("slot", { key: '2bbf8688ebdcd5f16c17bf42b87fbc0ba386810a' })));
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
