import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { h as formatAmount } from './utils-7eaed9ad.js';
import { c as calendar_data } from './calendar-data-cdc01d0d.js';
import { _ as _formatTime } from './functions-14871918.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './locales.store-daef23cc.js';
import './index-17663a35.js';

const irRevenueRowDetailsCss = ".sc-ir-revenue-row-details-h{border-bottom:1px solid var(--ir-border, #e5e7eb);font-size:0.875rem}.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{display:flex;gap:0.5rem;padding:0.25rem;flex-direction:column}.ir-revenue-row-detail.sc-ir-revenue-row-details:hover{background:#f4f5fa}.ir-revenue-row-detail__booking.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail__booking-btn.sc-ir-revenue-row-details{display:inline-flex}.ir-revenue-row-detail.sc-ir-revenue-row-details:last-child{border-bottom:none}.ir-revenue-row-detail__label.sc-ir-revenue-row-details{font-weight:500;color:var(--ir-muted, #6b7280);margin-right:0.25rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{font-weight:600;text-align:right;white-space:nowrap;flex:1 1 0%}.ir-revenue-row-detail__amount.negative.sc-ir-revenue-row-details{color:var(--ir-danger, #dc2626)}.ir-revenue-row-detail__meta.sc-ir-revenue-row-details{display:flex;align-items:center}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}.ir-revenue-row-detail__time.sc-ir-revenue-row-details{display:flex;gap:0.5rem}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:flex;flex:1 1 0%;justify-content:end}@media (min-width: 640px){.ir-revenue-row-detail.sc-ir-revenue-row-details,.ir-revenue-row-detail__info.sc-ir-revenue-row-details{flex-direction:row;align-items:center;gap:1rem}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:inline-flex;justify-content:flex-end}.ir-revenue-row-detail__time.sc-ir-revenue-row-details .ir-revenue-row-detail__amount.sc-ir-revenue-row-details{display:none}}@media (min-width: 1024px){.ir-revenue-row-detail__info.sc-ir-revenue-row-details{width:calc(40vw + 1.375rem - 0.25rem)}.ir-revenue-row-detail__amount.sc-ir-revenue-row-details{justify-content:flex-start}}";

const IrRevenueRowDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.revenueOpenSidebar = createEvent(this, "revenueOpenSidebar", 7);
    }
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '41d27ecd8f27595a5d450c83a3a0e1d0037f325c' }, h("div", { key: '8f5df2c8b6c39011284e354e3d0aadb8fb392f3e', class: "ir-revenue-row-detail" }, h("div", { key: 'ce9dbbba26066f0dbeade0b27ee95feac9ccd6bc', class: "ir-revenue-row-detail__info" }, h("div", { key: '128a8771c1b944f4ef329d90e8855fa0e52db020', class: "ir-revenue-row-detail__time" }, h("span", { key: '183283a9a50b3f758985de9cb37e3cb958ecdf5e', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '78676f39a3fb4798c125a2af2c87731328e174a0', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'a4c459cc11f1b766720b336c362657a00736042f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '53d7722b0c8d3f7fec2adf82d58c22bc2435aabc', class: "ir-revenue-row-detail__meta" }, h("div", { key: '826e80a24e0fc5dc3746b4f305099da20e533d0a', class: "ir-revenue-row-detail__user" }, h("span", { key: '92535d67ece4242c0a2021df5fea83adb9bc1617', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '3d2fe4bd0fb5b08bdcf78beb5b3bd7176bff2a1d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '8861cd05080cacc621674e7ecb14208d44e7481a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5771f9665f70d0a6982f116391f29800fa8c1ec9', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'd2e250298f03b1a598b5e2409962aa0d9bc08287', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
    }
};
IrRevenueRowDetails.style = irRevenueRowDetailsCss;

export { IrRevenueRowDetails as ir_revenue_row_details };

//# sourceMappingURL=ir-revenue-row-details.entry.js.map