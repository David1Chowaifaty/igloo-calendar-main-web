import { r as registerInstance, c as createEvent, h, H as Host } from './index-BvoylR5O.js';
import { a as arrivalsStore } from './arrivals.store-BvjbP4Ty.js';
import { l as locales } from './locales.store-BZFQn8-s.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './utils-BDVP7IDp.js';
import './index-DeW5X45W.js';
import './calendar-data-Cnv5ncgJ.js';
import './index-U7zaiBri.js';
import './type-D7rOPtKA.js';

const irArrivalsTableCss = () => `.sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}`;

const tableCss = () => `.sc-ir-arrivals-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table--container.sc-ir-arrivals-table,.data-table.sc-ir-arrivals-table{height:100%}.ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sortable.sc-ir-arrivals-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-arrivals-table:active td.sc-ir-arrivals-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}`;

const IrArrivalsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
        this.checkInRoom = createEvent(this, "checkInRoom");
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
    renderRow(booking, room, index, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckIn = hooks(room.from_date, 'YYYY-MM-DD').startOf('day').isBefore(hooks().startOf('day'), 'dates');
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, "Not assigned")) : showAction ? (h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
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
        const { needsCheckInBookings, inHouseBookings, futureBookings, pagination } = arrivalsStore;
        return (h(Host, { key: '24bc91afa60213e409bf85bdde16ceff7deac4ff' }, h("div", { key: '0c946e1a7263b1cb1110adad1fa3b8a36671034d', class: "table--container" }, h("table", { key: 'fbc8727303db90aa11a319191106b822e64e6c75', class: "table data-table" }, h("thead", { key: 'da1c7b3da4257a799313a171ad5fda25066f1677' }, h("tr", { key: 'a2787fe74f90f46a265a779c0f98641556883203' }, h("th", { key: '8a7e28cefa68db5539e544cd2765b57ddfec82e0' }, h("span", { key: 'f4d50c274af0e0ab304e96077c4141f1623b0c36', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: 'a03c988331e87898e501901ebc45d526c09f6286' }, h("div", { key: 'ec0875569e303c330730cf47b6e8874bb2c0b570' }, h("p", { key: 'e325a2106e41ab8322f08f2fb61d46710c82d035' }, "Booked by /"), h("p", { key: 'c09ab9fed76baf8213e32eb2c62ab66572e1b038' }, "Guest name"))), h("th", { key: 'a3fea2ea3b30b75a75073ac5641f4800d2a39107' }, "Unit"), h("th", { key: '1461a8dac0d72bed3a8c1ed2f76d57faf01ff696' }, "Dates"), h("th", { key: '4a2c8b74327523c4d9bb89d0251cc2c2d1c2721b', class: "text-center" }, "Balance", h("div", { key: '7c7b2ff6f2fc257e3e77870ec0e1deca29ca691e', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: 'b762a90199ae2b02ec9df117c9954ffdf4693fe5', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: '5b94fa6aae42c39a3fc5f38c5c4cd6d1caae6d2a' }))), h("tbody", { key: '158a6b4fdca4ea4b5f320953ec0ae3dd3a927dd3' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: '4b8914f16729cea7ba99743c32e6c9c67cab45a2' }, h("td", { key: 'e9a6f12fb52704d82ed6f5d9d6d966d3fc7b3dff', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '1a5577abe03765502b2caf238768542d8ede6f42' }))))))), h("ir-pagination", { key: '752101d4922416d5c5f09b70fa7922ac76502e2b', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })));
    }
};
IrArrivalsTable.style = irArrivalsTableCss() + tableCss();

export { IrArrivalsTable as ir_arrivals_table };
