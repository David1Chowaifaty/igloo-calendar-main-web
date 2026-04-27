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
        return (h(Host, { key: 'd1d76d38c5a42aa6b24429c821ee91e212128203' }, h("div", { key: 'c6c800cb90f057d0c09635b672be9a07e5e795c2', class: "ir-revenue-row-detail" }, h("div", { key: '77267e268aac4646a1226e2631a1a471175581ea', class: "ir-revenue-row-detail__info" }, h("div", { key: 'df5c80de1df82b01c47df5e4b36df38a5b587145', class: "ir-revenue-row-detail__time" }, h("span", { key: '1ded6dccd32291db99c8972205b8d7e8fdac5183', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '134695e6ac7f6caa0035c9e7f8efde6fc2a32311', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '044d62bbd9435dfe8d4ace646daae0abcde066a9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '3baa651b630d269959ed90155474f245cb111ec0', class: "ir-revenue-row-detail__meta" }, h("div", { key: '56ab5a4289fddf2f02b7eecfee136f959dd81ae4', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e5e95866f980fb2b90ddb4f2c34dab1baec7c340', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'b760335ab538fe1076cff34ca8f4065113cb96af', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ad9fec4e1e300c20e0eeeede25869d3377318817', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5596b02faa2824d3dfe4f1eb1b995e667a115f3e', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'd49cf8eea8599afc00bd23c48dd112b844105ad0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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