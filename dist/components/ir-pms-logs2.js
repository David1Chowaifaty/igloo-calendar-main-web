import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { _ as _formatTime } from './functions.js';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-weight:600;white-space:nowrap;display:inline}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:#629a4c;font-weight:600}.list-item.red.sc-ir-pms-logs{color:#ff4961;font-weight:600}";
const IrPmsLogsStyle0 = irPmsLogsCss;

const IrPmsLogs = /*@__PURE__*/ proxyCustomElement(class IrPmsLogs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
        return (h("div", { key: '730bdde98312d802231f6b07e1edea6becc97956', class: "" }, isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_SentAt, ":"), this.pmsLogs?.sent_date ? (h("p", { class: "list-item" }, this.pmsLogs?.sent_date, " ", _formatTime(this.pmsLogs?.sent_hour.toString(), this.pmsLogs?.sent_minute.toString()))) : (h("p", { class: `list-item ${this.pmsLogs?.sent_date ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item  ${this.pmsLogs?.is_acknowledged ? 'green' : 'red'}` }, this.pmsLogs?.is_acknowledged ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))));
    }
    static get style() { return IrPmsLogsStyle0; }
}, [2, "ir-pms-logs", {
        "bookingNumber": [1, "booking-number"],
        "pmsLogs": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pms-logs", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsLogs);
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPmsLogs as I, defineCustomElement as d };

//# sourceMappingURL=ir-pms-logs2.js.map