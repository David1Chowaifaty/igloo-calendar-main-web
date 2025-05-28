import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../../services/booking.service";
import locales from "../../../../stores/locales.store";
export class IrEventsLog {
    constructor() {
        this.bookingService = new BookingService();
    }
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.bookingEvents = await this.bookingService.getExposedBookingEvents(this.bookingNumber);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (h("div", { key: '07239b566f43a474494b6629ea59403d89ef542e', class: "p-1" }, h("div", { key: '56d23cf175873d66ab3e6c54ed2ca15357b57fca', class: "d-flex  align-items-center", style: { gap: '0.5rem' } }, h("h3", { key: '86bd4a46a25ef5da557633f8a021800a4a39c2d6', class: " text-left p-0 m-0  dialog-title " }, locales.entries.Lcz_EventsLog)), isRequestPending('/Get_Exposed_Booking_Events') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("table", { class: " dialog-container-height" }, h("thead", { style: { opacity: '0' } }, h("tr", null, h("th", null, "date"), h("th", null, "user"), h("th", null, "status"))), h("tbody", null, (_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.map(e => (h("tr", { key: e.id, class: "pb-1" }, h("td", { class: "event-row dates-row" }, h("span", null, e.date), h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), h("td", { class: "pl-3 event-row " }, e.type), h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
    static get is() { return "ir-events-log"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-events-log.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-events-log.css"]
        };
    }
    static get properties() {
        return {
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "bookingEvents": {}
        };
    }
}
//# sourceMappingURL=ir-events-log.js.map
