import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irRevisionsCss = ".sc-ir-revisions-h{display:block}.beta.sc-ir-revisions{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}";
const IrRevisionsStyle0 = irRevisionsCss;

const IrRevisions = /*@__PURE__*/ proxyCustomElement(class IrRevisions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return IrRevisionsStyle0; }
}, [2, "ir-revisions", {
        "bookingNumber": [1, "booking-number"],
        "bookingEvents": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revisions", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revisions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevisions);
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevisions as I, defineCustomElement as d };

//# sourceMappingURL=ir-revisions2.js.map