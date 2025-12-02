import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as arrivalsStore } from './arrivals.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$9 } from './ir-actions-cell2.js';
import { d as defineCustomElement$8 } from './ir-balance-cell2.js';
import { d as defineCustomElement$7 } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$6 } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dates-cell2.js';
import { d as defineCustomElement$3 } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$2 } from './ir-unit-cell2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;background-color:white;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.table--container.sc-ir-arrivals-table{flex:1 1 0%}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:250px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}";
const IrArrivalsTableStyle1 = tableCss;

const IrArrivalsTable = /*@__PURE__*/ proxyCustomElement(class IrArrivalsTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    renderSection(bookings, showAction = false) {
        if (!bookings?.length) {
            return null;
        }
        const rows = bookings.flatMap(booking => this.renderBookingRows(booking, showAction));
        return [...rows];
    }
    renderBookingRows(booking, showAction) {
        return (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index, showAction));
    }
    renderRow(booking, room, index, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckIn = hooks(room.from_date, 'YYYY-MM-DD').isBefore(hooks());
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckInBookings, inHouseBookings } = arrivalsStore;
        return (h(Host, { key: 'a7a8d334274bc1ecf74bd712cb0c20693de7650d' }, h("div", { key: 'b2bb63b5d0f715bdd8f697f802cd16f850dfc443', class: "table--container" }, h("table", { key: 'a0c5788413344cd52e0369f5141daaecbc913bdf', class: "table data-table" }, h("thead", { key: 'd7bfb046791f440ad6173e1c24efb0895fd0ffd1' }, h("tr", { key: 'fb4d56362a51470f70d2239f83edb4a4ede1af26' }, h("th", { key: '62f9c5e8c52227b5cef5d352ca356fbbdaf8571f' }, h("span", { key: 'e93ac8c20ecd2ef1c1c8a6733bfcd95c8c1c1e06', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '3c771ea28419a9396b9b2c350924f88225a9e0a8' }, h("div", { key: '634adaf08e4f6a4439228c7c1603f4dae8d26356' }, h("p", { key: '2e16d29e5c6f3e845d0e487c6dc3a56f19792b86' }, "Booked by"))), h("th", { key: '4472735bb3c95ac7f2d63abe23f9155c96179881' }, "Guest name"), h("th", { key: 'aa4bbc86a6a248413b28908e12b46737d3359e45' }, "Unit"), h("th", { key: 'a44d818e4dd1bdd92cda43dad644509485654fe4' }, "Dates"), h("th", { key: 'd28e74ca64265b221b1b7a1976eb78bab1f24812', class: "text-right" }, "Balance"), h("th", { key: '9232bd6f31d369ad8f663c72a3fb9b51807cc7bb' }))), h("tbody", { key: 'a5ad5ed3a404311c71f1b7417dce2c67b9e3885b' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'a40cad74d61eb0000953e1dbe83d3d7c89f87fdd' }, h("td", { key: '991798d66385ad0a0faad054560d72a125bd1e67', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
    }
    static get style() { return IrArrivalsTableStyle0 + IrArrivalsTableStyle1; }
}, [2, "ir-arrivals-table"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals-table", "ir-actions-cell", "ir-balance-cell", "ir-booked-by-cell", "ir-booking-number-cell", "ir-custom-button", "ir-dates-cell", "ir-guest-name-cell", "ir-unit-cell", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrivals-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalsTable);
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-unit-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrArrivalsTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-arrivals-table2.js.map