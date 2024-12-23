import { h } from "@stencil/core";
import { _formatTime } from "../../functions";
import locales from "../../../../stores/locales.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { BookingService } from "../../../../services/booking.service";
export class IrPmsLogs {
    constructor() {
        this.bookingService = new BookingService();
        this.bookingNumber = undefined;
        this.pmsLogs = undefined;
    }
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.pmsLogs = await this.bookingService.fetchPMSLogs(this.bookingNumber);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h("div", { key: '1ffbd5d96e3cefa208b2cbad96962b7743ac2b29', class: "p-1" }, h("h3", { key: 'f998de1fae3f5513e17ef8f46e559fd75dae184b', class: " text-left mb-1 dialog-title " }, locales.entries.Lcz_PMS_Logs), isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center pb-1" }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
            _b.sent_date, " ", _formatTime((_c = this.pmsLogs) === null || _c === void 0 ? void 0 : _c.sent_hour.toString(), (_d = this.pmsLogs) === null || _d === void 0 ? void 0 : _d.sent_minute.toString()))) : (h("p", { class: `list-item ${((_e = this.pmsLogs) === null || _e === void 0 ? void 0 : _e.sent_date) ? 'green' : 'red'}` }, ((_f = this.pmsLogs) === null || _f === void 0 ? void 0 : _f.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("h4", { class: "list-title p-0 m-0" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item  ${((_g = this.pmsLogs) === null || _g === void 0 ? void 0 : _g.is_acknowledged) ? 'green' : 'red'}` }, ((_h = this.pmsLogs) === null || _h === void 0 ? void 0 : _h.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))));
    }
    static get is() { return "ir-pms-logs"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pms-logs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pms-logs.css"]
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
            "pmsLogs": {}
        };
    }
}
//# sourceMappingURL=ir-pms-logs.js.map
