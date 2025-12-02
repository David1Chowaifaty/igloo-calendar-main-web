import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { s as setDeparturesSearchTerm, d as departuresStore } from './departures.store-2082dcf1.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-a124d225.js';
import './_data-08a5cb9d.js';

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '6b104cc60951d93fd6552d0e8403780f276722bd', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'a69624c076aa85bc6180493a86870d08f22821a1', class: "departures-filters__date-picker" }, h("wa-icon", { key: '216271031ef9c5643ce80eb4a490e7a77e93ab6e', name: "calendar", slot: "start" }), h("wa-spinner", { key: '42d778d8cb68a52f54a221410c5b666b669e287d', slot: "end" })), h("ir-custom-input", { key: 'bbbaa474810da46b072f70ddb87400b2e0834481', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '0334b228fe92020e22d78868c03d1820ba3055dd', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

const irDeparturesTableCss = ".sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.table--container.sc-ir-departures-table{flex:1 1 0%}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:250px}}";
const IrDeparturesTableStyle0 = irDeparturesTableCss;

const tableCss = ".ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:#e3f3fa !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize}.sortable.sc-ir-departures-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--blue)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}";
const IrDeparturesTableStyle1 = tableCss;

const IrDeparturesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departuresStore;
        return (h(Host, { key: '9c00c1de05bd81bf910002dbdd13e474f31287d3' }, h("div", { key: 'f36b535ea59486fc5314e7178c29361c1fda32a0', class: "table--container" }, h("table", { key: 'be6e3c321552790e7ceed8dd3890044ecc37299e', class: "table data-table" }, h("thead", { key: 'c3d2bb8e4813c3128cadff9cb92b58564bbe15d6' }, h("tr", { key: '5463909845360def693f24a872b86a930582271f' }, h("th", { key: '24171bd466aa2fba1af23552f3b8c36d6e6c600c' }, h("span", { key: 'eea6c328a35a16bf61c02311f296476f261070b2', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: 'bfb044451c8deafdb50b0f6629d18ac91f4a6550' }, h("div", { key: '93a80f4bd4351aca7adfeb433044a99e68b74b0c' }, h("p", { key: 'aae96d218353901ca7ef8604e092fc24cb8cd43d' }, "Booked by"))), h("th", { key: 'be621b1f8ffb1e4d4c1d19c94b4097f51c753804' }, "Guest name"), h("th", { key: '4c91079957d255727a976f2c1f42818d22ef3101' }, "Unit"), h("th", { key: '50f4f56675f754bf7b384cb5a3b82153cfc95135' }, "Dates"), h("th", { key: '9f78697c12b10dc992abde9b0f994f254073f5f0', class: "text-right" }, "Balance"), h("th", { key: 'f33d4a95fa854870dfeecbdc800c7bc75ea27756' }))), h("tbody", { key: 'c8183065103397cf0473821bcb442155d1dd6138' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '4c3236f1159fa0ee1888cc3c989a5a4dd27c9c71' }, h("td", { key: 'a20f8a8fef81363f102d3ff7b993656b62430616', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
    }
};
IrDeparturesTable.style = IrDeparturesTableStyle0 + IrDeparturesTableStyle1;

export { IrDeparturesFilter as ir_departures_filter, IrDeparturesTable as ir_departures_table };

//# sourceMappingURL=ir-departures-filter_2.entry.js.map