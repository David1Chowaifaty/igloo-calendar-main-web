import { arrivalsStore } from "../../../stores/arrivals.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
export class IrArrivalsTable {
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, t('Lcz_NotAssigned', { fallback: 'Not assigned' }))) : showAction ? (h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
                this.selectedBooking = booking;
                this.handleActionsClicked(e);
            } })) : room.in_out.code === '001' ? (t('Lcz_InHouse', { fallback: 'In-house' })) : ('')))));
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
        return (h(Host, { key: 'c0b5f6629958b7905cebe8d476e59e537b4d6403' }, h("div", { key: 'df7bf0dbfcdfc19a3630a7644499efe43de0b13e', class: "table--container" }, h("table", { key: '999e7b24221a5d86dfd901261e58e42c2c72e4b6', class: "table data-table" }, h("thead", { key: 'ae8af9d764b79bb61b185283fde7447465539651' }, h("tr", { key: '068a5f4d291a1eb9c0e4bf7c7bc0694d25d08bea' }, h("th", { key: 'bd03aa8ec5f3b7a9af7968a99c1310e5c1fd0ac1' }, h("span", { key: '5fb6e176a23b364c98bf297f303a48505c0ce33f', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '9dc741abd435a5aa18f92d06cd198718c24179c3' }, h("div", { key: '545e9f49b9b370a8c4d46e0fb03d2a0cb142a465' }, h("p", { key: 'd52d6bd2013b7d06ca76d907d915db0199d3963e' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: 'bc0fc38da39c750f8c6083301d526e4f17f358ad' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: '285631a10a07b7e173bcc288c87d85683eb94837' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '78c0c31687e09f2e8158db25d473b6ba446dc7c6' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: 'deb7f0e4c1ce725818e3dbff69bf05d28447e641', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '50b96b2599c329846aa3b8b13a02e02a41b56bc7', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: 'd270f7c168a31b6a34852cd4d4bfe3b2e0e7f22e', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), h("th", { key: 'ff8a6a77181aa353a19f80ce7a9ebdb3cd092a3f' }))), h("tbody", { key: '4e984459ad3835bf9121d00c991f5c87b373bc89' }, this.renderSection(futureBookings), this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: '93814c88ace33303bbc9b4c793d2ec6d3b469996' }, h("td", { key: '9861ac708e1e8fb46e1f7618014f43de406fc418', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '63ccbd5abb5b12b1c199cebe63788d1087422a5c' }))))))), !this.hidePagination && (h("ir-pagination", { key: '6e0717a0ef43954cd82b5af21402daf16b3ec541', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
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
    static get properties() {
        return {
            "hidePagination": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hides the pagination footer, for hosts that load the whole day in one page (the dashboard)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide-pagination",
                "defaultValue": "false"
            }
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
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent",
                            "referenceLocation": "PaginationChangeEvent"
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
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent",
                            "referenceLocation": "PaginationChangeEvent"
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
                    "resolved": "{ roomName: string; roomType?: string; sharing_persons: SharedPerson[]; totalGuests: number; checkin: boolean; identifier: string; booking_nbr?: string | number; }",
                    "references": {
                        "RoomGuestsPayload": {
                            "location": "import",
                            "path": "@/components/ir-booking-details/types",
                            "id": "src/components/ir-booking-details/types.ts::RoomGuestsPayload",
                            "referenceLocation": "RoomGuestsPayload"
                        }
                    }
                }
            }];
    }
}
