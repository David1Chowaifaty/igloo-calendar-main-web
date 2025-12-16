'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const arrivals_store = require('./arrivals.store-0d4d41f7.js');
const locales_store = require('./locales.store-4eb57996.js');
const moment = require('./moment-1780b03a.js');
require('./utils-9892967b.js');
require('./index-8bb117a0.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./axios-6e678d52.js');

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-arrivals-table{flex:1 1 0%}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}";
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
        const normalize = (value) => value?.trim().toLowerCase() ?? '';
        return normalize(roomGuest.first_name) === normalize(bookingGuest.first_name) && normalize(roomGuest.last_name) === normalize(bookingGuest.last_name);
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
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", { class: "sticky-column" }, index.h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && index.h("ir-guest-name-cell", { name: room.guest })), index.h("td", null, index.h("ir-unit-cell", { room: room })), index.h("td", null, index.h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), index.h("td", null, index.h("div", { class: "arrivals-table__actions-cell" }, showAction ? (index.h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
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
        return (index.h(index.Host, { key: '4a0e4188376186cffdc770643a201f171ee783d9' }, index.h("div", { key: '10b35e69a19edcb303c70110612706aba2909537', class: "table--container" }, index.h("table", { key: '8d025ce996490980362aa34ea317784fd663611e', class: "table data-table" }, index.h("thead", { key: '6974071e0c0207c46a325530116435cd0349e934' }, index.h("tr", { key: '0313777e0c9b4cab7ecca4e4b79d2c0a6af46877' }, index.h("th", { key: 'abd855a0afaf11e3a0da57b033f348710ae3c87b' }, index.h("span", { key: 'd6b786351db6f6944420840fab39fc627265a68b', class: 'arrivals-table__departure__cell' }, "Booking#")), index.h("th", { key: '2b16a9eaf8dd408d55273ac52fe408df93c4fc91' }, index.h("div", { key: '9ee210359acb097ef747be0b44e0b351192567ce' }, index.h("p", { key: '76ba1b3a57df97e78e901e502f418218358db00a' }, "Booked by /"), index.h("p", { key: 'd7bbcc02dda319d93bf91be1c1e529a2be2747db' }, "Guest name"))), index.h("th", { key: '4127108d777f0c2bfc33d800be460f0f0c830327' }, "Unit"), index.h("th", { key: '89ef28d58c33c7e42f55d60118c3c80bd6e58202' }, "Dates"), index.h("th", { key: 'fd1f93d2bd71b191070a42494a2d6301c1b0b147', class: "text-center" }, "Balance", index.h("div", { key: '7126006d93a34ca86ac93e6a9db903112096389d', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, index.h("ir-custom-button", { key: '81cdbf11fe4ad9bbe3783fd7f4758bd4ed2c162c', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Click to collect"))), index.h("th", { key: '1e9f91c0bf4ba6e07e09009687cb282a85f7bfac' }))), index.h("tbody", { key: '6aedbfc68f5d8212b2b425ce1119aa15a84e8fbc' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (index.h("tr", { key: 'ea316601d1e0d191abaac020a515351d9c7040b1' }, index.h("td", { key: '6ec61da723ff2e1b665b07d24c425b5dcf848c6e', colSpan: 6, class: "empty-row" }, index.h("ir-empty-state", { key: 'ebcb3b621faf7defb5860b537a5f3f2ccbf4c3ba' }))))))), index.h("ir-pagination", { key: '2c78101f149c885ef562cb697c7523ac83ae1ad3', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales_store.locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })));
    }
};
IrArrivalsTable.style = IrArrivalsTableStyle0 + IrArrivalsTableStyle1;

exports.ir_arrivals_table = IrArrivalsTable;

//# sourceMappingURL=ir-arrivals-table.cjs.entry.js.map