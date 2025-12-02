import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as arrivalsStore } from './arrivals.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$9 } from './ir-actions-cell2.js';
import { d as defineCustomElement$8 } from './ir-balance-cell2.js';
import { d as defineCustomElement$7 } from './ir-booked-by-source-cell2.js';
import { d as defineCustomElement$6 } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dates-cell2.js';
import { d as defineCustomElement$3 } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$2 } from './ir-unit-cell2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;background-color:white;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.table--container.sc-ir-arrivals-table{flex:1 1 0%}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:250px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-gray-80);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}";
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-source-cell", { origin: booking.origin, guest: booking.guest, source: booking.source })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckInBookings, inHouseBookings } = arrivalsStore;
        return (h(Host, { key: 'bd64ba4710409c596b40e25582cac9e3ca2f8269' }, h("div", { key: '855da37aee22f15aa8d04cbbd64d83f37fd7149b', class: "table--container" }, h("table", { key: '58fb521f74eb61c1ecff2663f8df02a931167052', class: "table data-table" }, h("thead", { key: 'cf1eedb8e956c5e31302136122ebb8e919692f45' }, h("tr", { key: '4287e74c4d685c43cfa33c2a20bc9ee23dc6f179' }, h("th", { key: 'd009fc8d89d504251e473c90aa921a4c5f977ce6' }, h("span", { key: '79189588559ca917ac01af4e34434b74289049ef', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '8432b57d0dfac80f9d320cef2161804b0fc66da3' }, h("div", { key: '2d260c1c32a5f512adfda5ddfeaeef82d760d15f' }, h("p", { key: '3962f17d6985e3763a92bbc94ffa4bcec289a01e' }, "Booked by / Source"))), h("th", { key: 'c3517529ecf54d242b4c9b913177e40509aca24e' }, "Guest name"), h("th", { key: 'fcfd866ec0f87b711e57e14578e0bbf9e9997de1' }, "Unit"), h("th", { key: '8dc6dc7590247999309642bcd66b4d3298dcb458' }, "Dates"), h("th", { key: '2d3192e70a76fb2d4b215058addc108b1d370408', class: "text-right" }, "Balance"), h("th", { key: '2d72a19f48d134387e3bdc1ad6c42ce48628e5cf' }))), h("tbody", { key: 'e458d7d940a026d6454efd3cf99800b38e7ddbca' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'b3d2537ca4e20c12f2f2cc3d8cdb1502adece598' }, h("td", { key: 'cdb6cf7b8549c4c72d53d339953e7774ffbedde5', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
    }
    static get style() { return IrArrivalsTableStyle0 + IrArrivalsTableStyle1; }
}, [2, "ir-arrivals-table"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals-table", "ir-actions-cell", "ir-balance-cell", "ir-booked-by-source-cell", "ir-booking-number-cell", "ir-custom-button", "ir-dates-cell", "ir-guest-name-cell", "ir-unit-cell", "ir-unit-tag"];
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
        case "ir-booked-by-source-cell":
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