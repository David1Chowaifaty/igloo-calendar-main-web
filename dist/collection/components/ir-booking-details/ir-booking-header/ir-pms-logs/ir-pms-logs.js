import { h } from "@stencil/core";
import { _formatTime } from "../../functions";
import { isRequestPending } from "../../../../stores/ir-interceptor.store";
import { BookingService } from "../../../../services/booking-service/booking.service";
import { t } from "../../../../services/locale/t";
export class IrPmsLogs {
    bookingNumber;
    pmsLogs;
    error;
    bookingService = new BookingService();
    userTypeCode;
    componentWillLoad() {
        this.init();
        const UserInfo_b = JSON.parse(localStorage.getItem('UserInfo_b'));
        if (UserInfo_b) {
            this.userTypeCode = UserInfo_b.USER_TYPE_CODE;
        }
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
        return (h("div", { key: 'e2be9c0123c4e7f78717257b7c393ffe8fed98ef', class: "" }, isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, t('Lcz_SentAt'), ":"), this.pmsLogs?.sent_date ? (h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", _formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t('Lcz_YES') : t('Lcz_NO', { fallback: 'NO' })))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("p", { class: "list-title p-0 m-0" }, t('Lcz_Acknowledged')), h("div", { class: "d-flex align-items-center", style: { gap: '1rem' } }, h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? t('Lcz_YES') : t('Lcz_NO', { fallback: 'NO' })), !this.pmsLogs?.is_acknowledged && this.pmsLogs?.revision_id && this.userTypeCode === '1' && (h("ir-custom-button", { variant: "brand", loading: isRequestPending('/Ack_Exposed_Revision'), onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const data = await this.bookingService.ackExposedRevision({
                    revision_id: this.pmsLogs?.revision_id,
                });
                this.error = data.ExceptionMsg;
            } }, t('Lcz_Acknowledge', { fallback: 'Acknowledge' }))))), this.error && (h("wa-callout", { size: "s", appearance: "filled-outlined", variant: "danger" }, this.error))))));
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
                "reflect": false,
                "attribute": "booking-number"
            }
        };
    }
    static get states() {
        return {
            "pmsLogs": {},
            "error": {}
        };
    }
}
