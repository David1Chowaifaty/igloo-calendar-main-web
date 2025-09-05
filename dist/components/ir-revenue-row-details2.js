import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { a as _formatTime } from './functions.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irRevenueRowDetailsCss = ".sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.5rem 0;flex-direction:column}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{background:#f4f5fa}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--ir-muted, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--ir-danger, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}";
const IrRevenueRowDetailsStyle0 = irRevenueRowDetailsCss;

const IrRevenueRowDetails = /*@__PURE__*/ proxyCustomElement(class IrRevenueRowDetails extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.revenueOpenSidebar = createEvent(this, "revenueOpenSidebar", 7);
    }
    render() {
        return (h(Host, { key: '60f8f7be510da3bc8c931616d62a459ea263393f' }, h("div", { key: 'f1a067c53db6ee624e021488c0611b95e576d0c8', class: "ir-revenue-row-detail" }, h("div", { key: 'e8a4d0d1f06b529110af30321b0b8b4bdaa1b432', class: "ir-revenue-row-detail__time" }, h("span", { key: '1164fa99b832092d08eebb77cc9dd389e9c95604', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '35f12be860920940f130fce96a8c30759827bb7d', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '2146c3c96deab0c7cce967775ac7936c36210457', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd477b15299fe90e3dff9c509e05d2c67e636429d', class: "ir-revenue-row-detail__meta" }, h("div", { key: '4bf69431f972098991ab656e96f721c1cf7ce5bc', class: "ir-revenue-row-detail__user" }, h("span", { key: '1b52c66430818bc37f2045e0b8d2aea16c97ae44', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '7032fdadaa076123c5cc6657a59bc5411e5a529d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'fbd108b7345794c6f7fac5e6b27ff64d4e167965', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e55ee325d8403c653bf12acdaafd6abc7073ba94', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: 'bb0befe19bf3e935d75e3f87e2286b8e265500dc', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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