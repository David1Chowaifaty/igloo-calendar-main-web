import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as _formatTime } from './functions.js';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:#629a4c;font-weight:600}.list-item.red.sc-ir-pms-logs{color:#ff4961;font-weight:600}";
const IrPmsLogsStyle0 = irPmsLogsCss;

const IrPmsLogs = /*@__PURE__*/ proxyCustomElement(class IrPmsLogs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bookingService = new BookingService();
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
        return (h("div", { key: '12908045eaeea25725c64d405467ee52060c2937', class: "p-1" }, h("h3", { key: '9e70c68559f523f35a0f3658ef634a998dde8dfa', class: " text-left mb-1 dialog-title " }, locales.entries.Lcz_PMS_Logs), isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h("div", { class: 'dialog-container-height' }, h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, h("p", { class: "list-title p-0 m-0" }, locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
            _b.sent_date, " ", _formatTime((_c = this.pmsLogs) === null || _c === void 0 ? void 0 : _c.sent_hour.toString(), (_d = this.pmsLogs) === null || _d === void 0 ? void 0 : _d.sent_minute.toString()))) : (h("p", { class: `list-item ${((_e = this.pmsLogs) === null || _e === void 0 ? void 0 : _e.sent_date) ? 'green' : 'red'}` }, ((_f = this.pmsLogs) === null || _f === void 0 ? void 0 : _f.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center p-0 m-0" }, h("h4", { class: "list-title p-0 m-0" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item  ${((_g = this.pmsLogs) === null || _g === void 0 ? void 0 : _g.is_acknowledged) ? 'green' : 'red'}` }, ((_h = this.pmsLogs) === null || _h === void 0 ? void 0 : _h.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))));
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