import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as departuresStore } from './departures.store.js';
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

const irDeparturesTableCss = ".sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.table--container.sc-ir-departures-table{flex:1 1 0%}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:250px}}";
const IrDeparturesTableStyle0 = irDeparturesTableCss;

const tableCss = ".ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:#e3f3fa !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize}.sortable.sc-ir-departures-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--blue)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}";
const IrDeparturesTableStyle1 = tableCss;

const IrDeparturesTable = /*@__PURE__*/ proxyCustomElement(class IrDeparturesTable extends HTMLElement {
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
        const isOverdueCheckout = hooks(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(hooks().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-source-cell", { origin: booking.origin, guest: booking.guest, source: booking.source })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departuresStore;
        return (h(Host, { key: '459a1f2aba36455da6e7d8bba4adcbfe9c481a84' }, h("div", { key: 'd1319f8c94958e38ec3fcbf91c37b4bebc605e3c', class: "table--container" }, h("table", { key: '7995ff4b5dab6f1be1e1ecb1f2eac9ab7f4523de', class: "table data-table" }, h("thead", { key: 'a9a0f887309c74a3580d26b1b75db9f4a4235853' }, h("tr", { key: '932267953535cba8d47263d86b024a35abc1b9b1' }, h("th", { key: 'a878df9117e2e0015598e23c5988f55acec8b9d4' }, h("span", { key: '9636453fb16a32731d2192a8ed07674896def412', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: 'd2d1fb783b88b71be898646be019e417843cba29' }, h("div", { key: 'fcad1f3b0b609b7276f295b0247d1737271bf5a8' }, h("p", { key: '9d97d15c48716ff0c5f64c507bd6b514fa5e79dc' }, "Booked by / Source"))), h("th", { key: '375e0ca34f1a51922ca5bc52b91b12cd18cb4ac9' }, "Guest name"), h("th", { key: '451b2c77ca712f057172eb6f3e3943af7246421e' }, "Unit"), h("th", { key: '9b7304a37cd997e6b56dee301f8800177c56c6bd' }, "Dates"), h("th", { key: '68eb3edf16cadb26fb245f2f8d8a699e0e87610f', class: "text-right" }, "Balance"), h("th", { key: '737de2376caa9b5437be586894ca793c60a175ba' }))), h("tbody", { key: 'bfd3c2124c2d1ca8ef961428d3a2f78287105c57' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '5b6285e8017e31e2b3c9d4304318dc37b2fad43a' }, h("td", { key: '18c9952799fd0d2e9f579c2b54534f34dba7352d', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
    }
    static get style() { return IrDeparturesTableStyle0 + IrDeparturesTableStyle1; }
}, [2, "ir-departures-table"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-departures-table", "ir-actions-cell", "ir-balance-cell", "ir-booked-by-source-cell", "ir-booking-number-cell", "ir-custom-button", "ir-dates-cell", "ir-guest-name-cell", "ir-unit-cell", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-departures-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDeparturesTable);
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

export { IrDeparturesTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-departures-table2.js.map