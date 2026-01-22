import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { d as departuresStore } from './departures.store-55545711.js';
import { l as locales } from './locales.store-cb784e95.js';
import { h as hooks } from './moment-ab846cee.js';
import './utils-d0dadf41.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';

const irDeparturesTableCss = ".sc-ir-departures-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.sc-ir-departures-table-h{box-sizing:border-box !important}.sc-ir-departures-table-h *.sc-ir-departures-table,.sc-ir-departures-table-h *.sc-ir-departures-table::before,.sc-ir-departures-table-h *.sc-ir-departures-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures-table{display:none !important}.sc-ir-departures-table-h{background:white}.departures-table__actions-cell.sc-ir-departures-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.departures-table__actions-cell.sc-ir-departures-table{min-width:150px}}";
const IrDeparturesTableStyle0 = irDeparturesTableCss;

const tableCss = ".ir-table-row.sc-ir-departures-table td.sc-ir-departures-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-departures-table{overflow-x:auto}.table.sc-ir-departures-table td.sc-ir-departures-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-departures-table tbody.sc-ir-departures-table tr.sc-ir-departures-table:last-child>td.sc-ir-departures-table{border-bottom:0 !important}.table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-departures-table thead.sc-ir-departures-table th.sc-ir-departures-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-departures-table .empty-row.sc-ir-departures-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-departures-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-departures-table td.sc-ir-departures-table{background:#e3f3fa !important}.selected.sc-ir-departures-table td.sc-ir-departures-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table,.ir-table-row.sc-ir-departures-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-departures-table{text-transform:capitalize}.sortable.sc-ir-departures-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-departures-table:hover td.sc-ir-departures-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-departures-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-departures-table svg.sc-ir-departures-table{color:var(--blue)}.sticky-column.sc-ir-departures-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-departures-table,.data-table.sc-ir-departures-table{height:100%}";
const IrDeparturesTableStyle1 = tableCss;

const IrDeparturesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkoutRoom = createEvent(this, "checkoutRoom", 7);
        this.requestPageChange = createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange", 7);
    }
    checkoutRoom;
    requestPageChange;
    requestPageSizeChange;
    renderSection({ bookings, showAction = false, isFuture = false }) {
        if (!bookings?.length) {
            return null;
        }
        const rows = bookings.flatMap(booking => this.renderBookingRows({ booking, showAction, isFuture }));
        return [...rows];
    }
    renderBookingRows({ booking, isFuture, showAction }) {
        return (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index, showAction, isFuture));
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
    renderRow(booking, room, index, showAction, isFuture) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckout = hooks(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(hooks().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? (h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutRoom.emit({
                    booking: booking,
                    identifier: room.identifier,
                });
            }, buttons: isOverdueCheckout ? ['overdue_check_out'] : ['check_out'] })) : isFuture ? ('') : ('In-house')))));
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
        const { needsCheckOutBookings, futureRooms, outBookings, pagination } = departuresStore;
        return (h(Host, { key: '28ba59bcf87a59854137af9b43a3fc4c97debdf1' }, h("div", { key: 'a0ec2ffa8d2cdb13291e0862cad76259015388d7', class: "table--container" }, h("table", { key: '448c7778f8f74387baf31cdfeca738d91429ed6e', class: "table data-table" }, h("thead", { key: '7069ff661ad8ec54554432e8c5025e653c2e4e73' }, h("tr", { key: 'c97aacfdeb6a97ba2ff1876a3eaf8e177bfb5374' }, h("th", { key: '35030df112d11eafafef74c4aef30f990654e963' }, h("span", { key: '467aef6295667d6ea5ae6381a4d470c6bf816127', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '4854ff905c24b75ae4c0ee9da0bbe605ae7ebfdd' }, h("div", { key: '0995df413e514bfdf690b1f0c9d5a99c7b4df438' }, h("p", { key: '78b58d883bfc93695ed62a92b4bbade36f7e8e95' }, "Booked by /"), h("p", { key: '476e248871eaf0e9f31259242861da1334d8649a' }, "Guest name"))), h("th", { key: '43baf6ef423ed613c72dff84bcc37318a76bcf10' }, "Unit"), h("th", { key: 'fead17435ef9f83ad32a75a6d2434975d8b92a1f' }, "Dates"), h("th", { key: '2da5c6a452dba2f0ed83f0bcd7ccb907d56e8cb8', class: "text-center" }, "Balance", h("div", { key: '67044e9cfece4fb9ee927f4ae40fa343bf958120', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '52b11eeff1080aafa58c61608e40e5bfcdbde15a', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: '2af2a990ae199c0ecafcf90d0e262d28d8d12b9c' }))), h("tbody", { key: '79fa843026e56e32847b7249546f4850e864a402' }, this.renderSection({ bookings: futureRooms, isFuture: true }), this.renderSection({ bookings: needsCheckOutBookings, showAction: true }), this.renderSection({ bookings: outBookings }), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '57004b27d511581e1f1a2ecf124fd4bdeec943a9' }, h("td", { key: '73cba415650c697102a791d17d6ed33049aecc56', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'd0a87253c23a63c49aedba47cd242a23c4db60b7' }))))))), (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: '7e5d46522d244030fb3951e2c199dd19efe22772', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrDeparturesTable.style = IrDeparturesTableStyle0 + IrDeparturesTableStyle1;

export { IrDeparturesTable as ir_departures_table };

//# sourceMappingURL=ir-departures-table.entry.js.map