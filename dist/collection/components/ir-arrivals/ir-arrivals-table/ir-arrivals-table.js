import { arrivalsStore } from "../../../stores/arrivals.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrArrivalsTable {
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
        const isOverdueCheckIn = moment(room.from_date, 'YYYY-MM-DD').startOf('day').isBefore(moment().startOf('day'), 'dates');
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
        return (h(Host, { key: '22ca8fb090a9ec2a27e21b2285e74fac2a5bbe68' }, h("div", { key: '53d5e7bc2cf4f2707d723ca99ccfe9cfb80789b7', class: "table--container" }, h("table", { key: '113ad8cdafd181371fc2b6a6bfea2cde69f4c5b3', class: "table data-table" }, h("thead", { key: 'b0df1b2d6e518f44680452940ad2513166ad0621' }, h("tr", { key: '99522491a64a0f8480cf6c4c53c3c3c7987109fd' }, h("th", { key: '2d915ca92f9827b8c2535589deaf39a487a36ce5' }, h("span", { key: '709cde0404143a792b683c07f9b7e8a295dc328a', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: 'df52b46c5127793a99956c12b44c4ef6f2330943' }, h("div", { key: '35d9bb02ddc0b4981b7f3389af77641a2cdef93e' }, h("p", { key: 'cce0a8f6d518928346b402ccbf3961682cfb856f' }, "Booked by /"), h("p", { key: '204524cce6a232581f542fdc88de97f38f6fc012' }, "Guest name"))), h("th", { key: '47f17b306d994f8f58b5be2c71c76b22ec6769b3' }, "Unit"), h("th", { key: '70ad96753577a5f9c208e511351ac9430c495cc7' }, "Dates"), h("th", { key: '582dbe463029e6f7366e4e574ef18034626d3dba', class: "text-center" }, "Balance", h("div", { key: 'ec5c741f84ed67f82eeb74906d5796229fdb136d', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '2b36c51d000ef557f23f3be0239d6c7685842100', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Click to collect"))), h("th", { key: 'f4f82e83f7af77fa5478a7b7e9732b8d8257b2ac' }))), h("tbody", { key: 'a3f29feb2f5c63f23296c397739b935915a8c947' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'f7d4902d47027bab8d213f357f1c8b405d911a14' }, h("td", { key: 'b0f2d706d77170046477a597b87bdaa8ab5fd7a9', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '613a6d622d01d0001417b603459533d2f94d67d1' }))))))), h("ir-pagination", { key: 'd47d876b2421c838a95a2fe8e05305933e994252', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'Bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })));
    }
    static get is() { return "ir-arrivals-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrivals-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrivals-table.css", "../../../common/table.css"]
        };
    }
    static get states() {
        return {
            "selectedBooking": {}
        };
    }
    static get events() {
        return [{
                "method": "requestPageChange",
                "name": "requestPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "import",
                            "path": "@/components/ir-pagination/ir-pagination",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "requestPageSizeChange",
                "name": "requestPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "import",
                            "path": "@/components/ir-pagination/ir-pagination",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "checkInRoom",
                "name": "checkInRoom",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "RoomGuestsPayload",
                    "resolved": "{ roomName: string; sharing_persons: SharedPerson[]; totalGuests: number; checkin: boolean; identifier: string; booking_nbr?: string | number; }",
                    "references": {
                        "RoomGuestsPayload": {
                            "location": "import",
                            "path": "@/components/ir-booking-details/types",
                            "id": "src/components/ir-booking-details/types.ts::RoomGuestsPayload"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-arrivals-table.js.map
