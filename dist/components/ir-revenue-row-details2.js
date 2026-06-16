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
        return (h(Host, { key: 'fc982aa1da4cb8b50eab15bb8b8d67effabb27b3' }, h("div", { key: '8e91a58369695cae0e33158282a3e802afec79a9', class: "ir-revenue-row-detail" }, h("div", { key: '8d060af44ba513d154cc4f9d93abf6b114eaef04', class: "ir-revenue-row-detail__info" }, h("div", { key: '1ce87edf6d45f7d2404da35f47b55d274f3265e7', class: "ir-revenue-row-detail__time" }, h("span", { key: '0f4566a309672e2fc3d8517bffc030a5bfec3247', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '31c8b6c349bca25c4da09fbf2312a204697fa4e8', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3ca108ebad5547c096f2644bec8bd11c9b53b04d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c1fcb6b403e83e3a5363b0f913a534a5dfdb34e8', class: "ir-revenue-row-detail__meta" }, h("div", { key: '801b620f9de8e72b6cdbf30a686cc2c61765e285', class: "ir-revenue-row-detail__user" }, h("span", { key: '5d361be7951155cb3b3904abc0b5fa668a6c10d1', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '5201f72811041855a979c36e4e9c76cfe27e3397', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '626a079363afcc3d087cc80e04d95485fd30c01f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '169e68bfd21ecbc941825a05f74a8bd5b920c4ec', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '933341beba73112217d31f6946c0ca7d838e5d31', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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