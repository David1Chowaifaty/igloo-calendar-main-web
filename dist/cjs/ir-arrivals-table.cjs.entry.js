'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const arrivals_store = require('./arrivals.store-dfcb1b52.js');
const locales_store = require('./locales.store-32782582.js');
const moment = require('./moment-1780b03a.js');
require('./utils-2cdf6642.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-arrivals-table,.data-table.sc-ir-arrivals-table{height:100%}";
const IrArrivalsTableStyle1 = tableCss;

const IrArrivalsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.requestPageChange = index.createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange", 7);
        this.checkInRoom = index.createEvent(this, "checkInRoom", 7);
    }
    selectedBooking;
    requestPageChange;
    requestPageSizeChange;
    checkInRoom;
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
    compareGuests(booking, room) {
        const roomGuest = room?.guest;
        const bookingGuest = booking?.guest;
        if (!roomGuest || !bookingGuest) {
            return false;
        }
        const normalizeGuest = (guest) => {
            const firstName = guest.first_name?.replace(/\s+/g, '').toLowerCase() || '';
            const lastName = guest.last_name?.replace(/\s+/g, '').toLowerCase() || '';
            return `${firstName}${lastName}`;
        };
        return normalizeGuest(bookingGuest) === normalizeGuest(roomGuest);
    }
    async handleActionsClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        switch (e.detail.action) {
            case 'check_in':
            case 'overdue_check_in':
                const room = this.selectedBooking.rooms[0];
                const { adult_nbr, children_nbr, infant_nbr } = room.occupancy;
                this.checkInRoom.emit({
                    identifier: room.identifier,
                    sharing_persons: room.sharing_persons,
                    booking_nbr: this.selectedBooking.booking_nbr,
                    checkin: true,
                    roomName: room.unit?.name,
                    totalGuests: adult_nbr + children_nbr + infant_nbr,
                });
                return;
            default:
                console.warn(e.detail.action + ' not handled');
        }
    }
    renderRow(booking, room, index$1, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index$1}`;
        const isOverdueCheckIn = moment.hooks(room.from_date, 'YYYY-MM-DD').startOf('day').isBefore(moment.hooks().startOf('day'), 'dates');
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), index.h("td", null, index.h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (index.h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, "Not assigned")) : showAction ? (index.h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
                this.selectedBooking = booking;
                this.handleActionsClicked(e);
            } })) : room.in_out.code === '001' ? ('In-house') : ('')))));
    }
    handlePageChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageChange.emit(event.detail);
    }
    handlePageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageSizeChange.emit(event.detail);
    }
    render() {
        const { needsCheckInBookings, inHouseBookings, futureBookings, pagination } = arrivals_store.arrivalsStore;
        return (index.h(index.Host, { key: 'ff49e2547a01ca5ea9e1e50bbc2b4507166eef90' }, index.h("div", { key: 'ae038853954bece1809d5d8181fad3763b5e5b86', class: "table--container" }, index.h("table", { key: 'f0446f78e2f512ada60c3ece3f45ac62f93c7a21', class: "table data-table" }, index.h("thead", { key: '0ccefd5846ade0af2b50aa0c99e71ab3406d98bc' }, index.h("tr", { key: 'a5c936529edcdb35d0707ec8ebe0aad2024d7693' }, index.h("th", { key: '5df0205512696b0187321e9afe0560418d49250a' }, index.h("span", { key: '4fdd593829c793ebe896f06b61314dca077d7dfd', class: 'arrivals-table__departure__cell' }, "Booking#")), index.h("th", { key: 'e8f0d24eadee1bd66757e49f8fe3778fe8c3acf9' }, index.h("div", { key: '2ae864618c67f7610c7386b4910db100e345b8ba' }, index.h("p", { key: 'ae9411db8a0a718926ed4e8dfb53705aa56e4a0f' }, "Booked by /"), index.h("p", { key: '6d9d8848730b0f2dc4c2757aff196a6f78922ce7' }, "Guest name"))), index.h("th", { key: '04725020fdf47d2f74518cb34544d77b12447af1' }, "Unit"), index.h("th", { key: '65561fc1a7d7326ddec60ff1f7ddba48d5555e1b' }, "Dates"), index.h("th", { key: '55be39066e062e133fae3644ec02ea9dc1db9851', class: "text-center" }, "Balance", index.h("div", { key: 'c56b3d05e3068a7acc6b19afd08b47171b498be4', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, index.h("ir-custom-button", { key: '7e4ee87ed689cf3eaca1af2cc25bf36e97593621', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Click to collect"))), index.h("th", { key: '1f50261ce44478b6e48eac2ecb550c20dd0f86e8' }))), index.h("tbody", { key: '371f16fac1c6b1d87adf9a6bf452637375002e5b' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (index.h("tr", { key: 'ac5da18d0acd154b589e40ce251a5b0a85fba94d' }, index.h("td", { key: '6655becf5cf0df6bc741ed6c757dc36cadff1aa8', colSpan: 6, class: "empty-row" }, index.h("ir-empty-state", { key: 'a99d7369fffd308672287f7f35c4e168fa61e7ca' }))))))), index.h("ir-pagination", { key: '571484d95af57004a54faf4231a797e8de3c8742', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales_store.locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })));
    }
};
IrArrivalsTable.style = IrArrivalsTableStyle0 + IrArrivalsTableStyle1;

exports.ir_arrivals_table = IrArrivalsTable;

//# sourceMappingURL=ir-arrivals-table.cjs.entry.js.map