import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { _ as _formatTime } from './functions.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irRevenueRowDetailsCss = ".sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.25rem;flex-direction:column}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{background:#f4f5fa}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--ir-muted, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--ir-danger, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}@media (min-width: 1024px){.ir-revenue-row-detail__info.sc-ir-revenue-row-details{width:calc(40vw + 1.375rem - 0.25rem)}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{justify-content:flex-start}}";
const IrRevenueRowDetailsStyle0 = irRevenueRowDetailsCss;

const IrRevenueRowDetails = /*@__PURE__*/ proxyCustomElement(class IrRevenueRowDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.revenueOpenSidebar = createEvent(this, "revenueOpenSidebar", 7);
    }
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'c1e57aba5130f2390d42adbcbb787cab9aaee1a3' }, h("div", { key: 'ff144642ea39c915c18fdfccd59cfc2a25265824', class: "ir-revenue-row-detail" }, h("div", { key: '2b711cb86930f54e4ad14913a4682ce4ccd160fe', class: "ir-revenue-row-detail__info" }, h("div", { key: 'c479621971e581b4aed2455fc10d9adde494e100', class: "ir-revenue-row-detail__time" }, h("span", { key: 'a170ea23dd65ce719174c1e723f5c96959cbf7c8', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'c24b6b5be0acdee1a00fbf65dfb9f3433bfad53a', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '1b36c212828010f29a8bc116e6a167ebae91e507', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'e65257c8f0c8859969ca457d64f68c6ae2f36514', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'ad412c91cbebf78fe0badf516120755248073898', class: "ir-revenue-row-detail__user" }, h("span", { key: '3474e3dfea596eaa9a300052b8f4f734258843ce', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8092d9b9702bbe3088cf7dc4f2e587c2be5ffdc6', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'a61e396e72fc4e090cd1eba3a1a71729f025f390', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '123315d2afe96f830b65539e48456d7461f4da4c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'b8df9a45258a41d4f83f718d4e9121b0fed53a74', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
    }
    static get style() { return IrRevenueRowDetailsStyle0; }
}, [2, "ir-revenue-row-details", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-row-details", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueRowDetails);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueRowDetails as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-row-details2.js.map