import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as arrivalsStore } from './arrivals.store.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$c } from './ir-actions-cell2.js';
import { d as defineCustomElement$b } from './ir-balance-cell2.js';
import { d as defineCustomElement$a } from './ir-booked-by-cell2.js';
import { d as defineCustomElement$9 } from './ir-booking-number-cell2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-dates-cell2.js';
import { d as defineCustomElement$6 } from './ir-empty-state2.js';
import { d as defineCustomElement$5 } from './ir-guest-name-cell2.js';
import { d as defineCustomElement$4 } from './ir-pagination2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-unit-cell2.js';
import { d as defineCustomElement$1 } from './ir-unit-tag2.js';

const irArrivalsTableCss = ".sc-ir-arrivals-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-arrivals-table-h{box-sizing:border-box !important}.sc-ir-arrivals-table-h *.sc-ir-arrivals-table,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::before,.sc-ir-arrivals-table-h *.sc-ir-arrivals-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals-table{display:none !important}.arrivals-table__actions-cell.sc-ir-arrivals-table{display:flex;min-width:100px;justify-content:flex-end}@media (min-width: 1024px){.arrivals-table__actions-cell.sc-ir-arrivals-table{min-width:150px}}";
const IrArrivalsTableStyle0 = irArrivalsTableCss;

const tableCss = ".ir-table-row.sc-ir-arrivals-table td.sc-ir-arrivals-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-arrivals-table{overflow-x:auto}.table.sc-ir-arrivals-table td.sc-ir-arrivals-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-arrivals-table tbody.sc-ir-arrivals-table tr.sc-ir-arrivals-table:last-child>td.sc-ir-arrivals-table{border-bottom:0 !important}.table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-arrivals-table thead.sc-ir-arrivals-table th.sc-ir-arrivals-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-arrivals-table .empty-row.sc-ir-arrivals-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-arrivals-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{background:#e3f3fa !important}.selected.sc-ir-arrivals-table td.sc-ir-arrivals-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table,.ir-table-row.sc-ir-arrivals-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-arrivals-table{text-transform:capitalize}.sortable.sc-ir-arrivals-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-arrivals-table:hover td.sc-ir-arrivals-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-arrivals-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-arrivals-table svg.sc-ir-arrivals-table{color:var(--blue)}.sticky-column.sc-ir-arrivals-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-arrivals-table,.data-table.sc-ir-arrivals-table{height:100%}";
const IrArrivalsTableStyle1 = tableCss;

const IrArrivalsTable = /*@__PURE__*/ proxyCustomElement(class IrArrivalsTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.requestPageChange = createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange", 7);
        this.checkInRoom = createEvent(this, "checkInRoom", 7);
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, "Not assigned")) : showAction ? (h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
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
        return (h(Host, { key: '3ba0c19c302f96f37042c06d0a3d69b3a38804af' }, h("div", { key: 'cefcccfa0f584bfd6c47b3366bf9e77b14f87c49', class: "table--container" }, h("table", { key: 'edfea238d19966ae61cde753f4a4a415d5c383a5', class: "table data-table" }, h("thead", { key: '50f346b61a231eae1d3e3575a7732fb7c3219bec' }, h("tr", { key: '6996e8d37a6777e7e96e29e50eecbd19dbeea5c9' }, h("th", { key: 'f8cc725d12c7ed1cb39297026b50938b051b8242' }, h("span", { key: 'f14cb9fa3f27e73873a2d8e9c42507560cbc6db1', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '80619bf3217fc456e65150855513f1abac71b604' }, h("div", { key: '8bbf49317ebf3f90acafd411f46b7c3bd7045f6a' }, h("p", { key: '1035d8cb1c56f1f76b5255257315c1c57f4278ec' }, "Booked by /"), h("p", { key: '844a709fe7d62929c6cb35785ac8576325025631' }, "Guest name"))), h("th", { key: 'da5a34ea14dd74d451dd810dfffa9b3dd8f07f33' }, "Unit"), h("th", { key: 'e66c4999eb3324458858bd337ae7856318ad63fa' }, "Dates"), h("th", { key: '3c7a3dbdcef7f742fa9ce869107d876afb15a605', class: "text-center" }, "Balance", h("div", { key: '1624f3dcdf533dffcb8f76a283eed31d35475958', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '497eee12418965ef436dc1fcc8a772178fdc0fb1', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: 'a6b2d68a26a4eaa5f1dbaa20447e5de655abac13' }))), h("tbody", { key: '54f7123f97015a909c0b2a689c03b043f61a6925' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'aba9eab2f333f11f46b300e527bbac4a4e954e90' }, h("td", { key: '2c412730769c860ca65b31b2fd00481152f59129', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '6ff58634eada8e3860cf05ce63c0afe31e380870' }))))))), h("ir-pagination", { key: 'f65c58cdb7b7db8f8a9bbd04cbf83e54600a3694', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })));
    }
    static get style() { return IrArrivalsTableStyle0 + IrArrivalsTableStyle1; }
}, [2, "ir-arrivals-table", {
        "selectedBooking": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals-table", "ir-actions-cell", "ir-balance-cell", "ir-booked-by-cell", "ir-booking-number-cell", "ir-custom-button", "ir-dates-cell", "ir-empty-state", "ir-guest-name-cell", "ir-pagination", "ir-select", "ir-unit-cell", "ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrivals-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalsTable);
            }
            break;
        case "ir-actions-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-balance-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-booking-number-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-dates-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-guest-name-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
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