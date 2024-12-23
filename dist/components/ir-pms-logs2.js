import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { a as _formatTime } from './functions.js';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}";
const IrPmsLogsStyle0 = irPmsLogsCss;

const IrPmsLogs = /*@__PURE__*/ proxyCustomElement(class IrPmsLogs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: 'a757d6d355a64edab1aba9ef95982f6259542aa8', class: "p-1" }, h("h3", { key: '995ad37707fc079544a1bdd274921c3cc23debf4', class: " text-left mb-1 dialog-title " }, locales.entries.Lcz_PMS_Logs), isRequestPending('/Get_Exposed_PMS_Logs') ? (h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, h("ir-spinner", null))) : (h(Fragment, null, h("div", { class: "d-flex align-items-center dialog-container-height" }, h("p", { class: "list-title" }, locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
            _b.sent_date, " ", _formatTime((_c = this.pmsLogs) === null || _c === void 0 ? void 0 : _c.sent_hour.toString(), (_d = this.pmsLogs) === null || _d === void 0 ? void 0 : _d.sent_minute.toString()))) : (h("p", { class: `list-item ${((_e = this.pmsLogs) === null || _e === void 0 ? void 0 : _e.sent_date) ? 'green' : 'red'}` }, ((_f = this.pmsLogs) === null || _f === void 0 ? void 0 : _f.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))), h("div", { class: "d-flex align-items-center" }, h("h4", { class: "list-title" }, locales.entries.Lcz_Acknowledged), h("p", { class: `list-item ${((_g = this.pmsLogs) === null || _g === void 0 ? void 0 : _g.is_acknowledged) ? 'green' : 'red'}` }, ((_h = this.pmsLogs) === null || _h === void 0 ? void 0 : _h.is_acknowledged) ? locales.entries.Lcz_YES : locales.entries.Lcz_NO))))));
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