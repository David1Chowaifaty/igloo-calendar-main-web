import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../../services/booking.service";
export class IrEventsLog {
    constructor() {
        this.bookingService = new BookingService();
        this.bookingNumber = undefined;
        this.bookingEvents = undefined;
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
        return (h("div", { key: 'b9e3d9a81c1e6a2bbed31c2eb4cfcbd4cc5ac8da', class: "p-1" }, h("div", { key: '22db7183144902e6fc23754068381227e5121e5c', class: "d-flex  align-items-center", style: { gap: '0.5rem' } }, h("h3", { key: 'af7092d84f018778990bc5bf04e9a876dc192c9d', class: " text-left p-0 m-0  dialog-title " }, "Events log"), h("span", { key: '4ad0121f70c528bfd0167eb900b05aaa9e0a3431', class: "m-0 beta" }, "Beta")), isRequestPending('/Get_Exposed_Booking_Events') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("table", { class: " dialog-container-height" }, h("thead", { style: { opacity: '0' } }, h("tr", null, h("th", null, "date"), h("th", null, "time"), h("th", null, "user"), h("th", null, "status"))), h("tbody", null, (_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.map(e => (h("tr", { key: e.id, class: "pb-1" }, h("td", { class: "pb-1" }, e.date), h("td", { class: " pb-1 pl-1" }, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0')), h("td", { class: "pl-1 pb-1 " }, e.user), h("td", { class: "pl-3 pb-1 " }, e.type))))))))));
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
