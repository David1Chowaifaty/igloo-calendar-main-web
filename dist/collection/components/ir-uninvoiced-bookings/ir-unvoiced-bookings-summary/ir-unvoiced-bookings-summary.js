import { Host, h } from "@stencil/core";
export class IrUnvoicedBookingsSummary {
    render() {
        return (h(Host, { key: 'f316174cffa12ffe6e3fe59cf85024ecae1e811d' }, h("slot", { key: '2febdc54babdea8bd955bc9809f68154086335ab' })));
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
