import { Host, h } from "@stencil/core";
export class IrUnvoicedBookingsSummary {
    render() {
        return (h(Host, { key: '1a0fa7600ad780e0ea34f924e31954688e5e6ec9' }, h("slot", { key: 'c3b4bc032e300acffddeaa0be33f15b60e3cb40f' })));
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
