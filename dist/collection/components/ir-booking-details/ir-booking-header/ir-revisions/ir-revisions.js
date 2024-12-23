import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../../services/booking.service";
export class IrRevisions {
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
        var _a, _b;
        return (h("div", { key: 'd3b440b178ba1108df346ae4f9320c429b8a1cef', class: "p-1" }, h("div", { key: '8ec99b29d9a7cd7678f72058c17d8fd0fc266590', class: "d-flex mb-1 align-items-center", style: { gap: '0.5rem' } }, h("h3", { key: 'e234f3f63705285dedcdda40287244237d49566d', class: " text-left p-0 m-0  dialog-title " }, "Revisions"), h("span", { key: '621c65918772ca85431c13d9e15fdca799ec9519', class: "m-0 beta" }, "Beta")), isRequestPending('/Get_Exposed_Booking_Events') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("div", { class: " dialog-container-height" }, ((_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.length) === 0 && h("p", null, "No Revisions Found"), (_b = this.bookingEvents) === null || _b === void 0 ? void 0 :
            _b.map(e => (h("div", { key: e.id, class: 'd-flex align-items-center justify-content-between' }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", null, e.date), h("p", { class: "ml-1" }, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), h("p", null, e.type)))))))));
    }
    static get is() { return "ir-revisions"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revisions.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revisions.css"]
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
//# sourceMappingURL=ir-revisions.js.map
