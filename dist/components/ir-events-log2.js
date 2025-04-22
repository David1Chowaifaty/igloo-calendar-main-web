import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irEventsLogCss = ".sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}";
const IrEventsLogStyle0 = irEventsLogCss;

const IrEventsLog = /*@__PURE__*/ proxyCustomElement(class IrEventsLog extends HTMLElement {
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
    static get style() { return IrEventsLogStyle0; }
}, [2, "ir-events-log", {
        "bookingNumber": [1, "booking-number"],
        "bookingEvents": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-events-log", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrEventsLog);
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrEventsLog as I, defineCustomElement as d };

//# sourceMappingURL=ir-events-log2.js.map