import { h } from "@stencil/core";
import { _formatTime } from "../../functions";
import locales from "../../../../stores/locales.store";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { BookingService } from "../../../../services/booking-service/booking.service";
export class IrPmsLogs {
    bookingNumber;
    pmsLogs;
    bookingService = new BookingService();
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
        return (h("div", { key: 'b0d8893bcd59e1cf1b6e8b123a91df019b7ecde1', class: "" }, isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_SentAt, ":"), this.pmsLogs?.sent_date ? (h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", _formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))));
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
                "getter": false,
                "setter": false,
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
