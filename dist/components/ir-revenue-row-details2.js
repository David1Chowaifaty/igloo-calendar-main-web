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
        return (h(Host, { key: '2d4e2f78befba4d3cef9c26b6f3d09cc985d9315' }, h("div", { key: '37df329dd707d3e8c2e07baff33df6edbac16815', class: "ir-revenue-row-detail" }, h("div", { key: '89bad26581be7de461d7e1ff38f007dd4f132a81', class: "ir-revenue-row-detail__info" }, h("div", { key: '3bfd5af9bde5f9928b155b06aaa6e4311234a589', class: "ir-revenue-row-detail__time" }, h("span", { key: '53cd7eaebfcb9569ab4c04fd80584c3940f5392a', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '4318a345c6e0d8607f1cedbf1946f342fa535ced', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'e42548c5cfc3d8f029b5dff9dd1a927e6cca7aad', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ccc1ce5a1ab6f6a305eb8b38311ae814bbe109de', class: "ir-revenue-row-detail__meta" }, h("div", { key: '928a0831518a2c18e3f7e59a92b0641525519a48', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd43833b782dc58546d366895322c331d23439d31', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '681c20c463051679da4007387aeff4b7f0c3bd6e', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '96c04554b30ce5a00f4b4d00d75ca2e3a2dc6b1a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '255cc5ea6685e47f682cc62528fc3d0f0de5d8cb', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '6b39fdeaa93162819ee01848f7f77adcfe1cfe8c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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