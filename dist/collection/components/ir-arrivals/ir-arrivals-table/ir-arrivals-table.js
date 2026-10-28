import { arrivalsStore } from "../../../stores/arrivals.store";
import calendar_data from "../../../stores/calendar-data";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrArrivalsTable {
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
    /**
     * For properties without front desk (PMS): check-in status isn't tracked, so every room arriving on the store's day is
     * listed in one list, without overdue marks or the actions column.
     */
    pmsDisabled = false;
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
        // Overdue relative to the store's day (the dashboard's selected day), not the real today.
        const isOverdueCheckIn = !this.pmsDisabled && room.from_date < arrivalsStore.today;
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true, paymentDate: arrivalsStore.today })), !this.pmsDisabled && this.renderActionsCell(booking, room, isOverdueCheckIn, showAction)));
    }
    renderActionsCell(booking, room, isOverdueCheckIn, showAction) {
        // Automatic properties still list rooms awaiting check-in, but the system checks them in, so no button.
        const isAutomaticCheckIn = !!calendar_data.property?.is_automatic_check_in_out;
        return (h("td", null, h("div", { class: "arrivals-table__actions-cell" }, !room.unit ? (h("span", { style: { color: 'var(--wa-color-danger-fill-loud)' } }, t('Lcz_NotAssigned', { fallback: 'Not assigned' }))) : showAction && !isAutomaticCheckIn ? (h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'], onIrAction: e => {
                this.selectedBooking = booking;
                this.handleActionsClicked(e);
            } })) : room.in_out.code === '001' ? (t('Lcz_InHouse', { fallback: 'In-house' })) : (''))));
    }
    /** Non-PMS rows: every room arriving on the store's day, in the store's order. */
    renderArrivingRooms() {
        const { filteredBookings, today } = arrivalsStore;
        const arriving = filteredBookings.flatMap(booking => (booking.rooms ?? []).filter(room => room.from_date === today).map(room => ({ booking, room })));
        return arriving.map(({ booking, room }, index) => this.renderRow(booking, room, index, false));
    }
    renderBody() {
        const { needsCheckInBookings, inHouseBookings, futureBookings } = arrivalsStore;
        const columnCount = this.pmsDisabled ? 5 : 6;
        const rows = this.pmsDisabled
            ? this.renderArrivingRooms()
            : [...(this.renderSection(futureBookings) ?? []), ...(this.renderSection(needsCheckInBookings, true) ?? []), ...(this.renderSection(inHouseBookings) ?? [])];
        const isEmpty = this.pmsDisabled ? !rows.length : !needsCheckInBookings.length && !inHouseBookings.length;
        return [
            ...rows,
            isEmpty && (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", null)))),
        ];
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
        const { pagination } = arrivalsStore;
        return (h(Host, { key: '2de4864ef7a199ad3c0a48634b7062372e746429' }, h("div", { key: '9d46ad8285801441fd4f32626cb1c555c854441c', class: "table--container" }, h("table", { key: '88a3bac937c357898a49c90f6c9db46f7a1b1fb1', class: "table data-table" }, h("thead", { key: 'fb03787eca98893533baa2ec8b4ecb7c929f0e03' }, h("tr", { key: '823a16e7f7f0f22ad3e8f8d6fbfbad714b21f474' }, h("th", { key: 'c38f4315a6c2d5d029840fd6b1ccebbc1696852f' }, h("span", { key: 'd1669d15ccfdb6e7dbc85ebb901fb41c8aff005b', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '570d9c2c8f281df0208ef5322beda577bb2c20e3' }, h("div", { key: 'cd4aa5ee9e64d155da55c7ed9e8eaa2fbd7f7d40' }, h("p", { key: '8bf807a148d2793e85ac06f7374e835a9a47e580' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: '35e35d65f3d0c72a718eed6784caebe70493751d' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: '6799b4df111456acf788a3562d37e449806314c3' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '623c409989aa93a79b0288016bf7b09a245e49ae' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '6776f621b4e4e62eae0e4230b332a4be701c1163', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '218b99f80d9bce0103d2a6d51de9ac10ed64f95d', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: 'ab4e9490beec8970ca04a93679f255597a4cdbf9', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && h("th", { key: '913fb697479727d6e1c1bef4cdef958b2b85056b' }))), h("tbody", { key: 'f9137c023997df62bb5a26447e6c27dfba60c23e' }, this.renderBody()))), !this.hidePagination && (h("ir-pagination", { key: 'a056e00f4cba7a405ae571e5d5a84e72a52f4522', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
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
            },
            "pmsDisabled": {
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
                    "text": "For properties without front desk (PMS): check-in status isn't tracked, so every room arriving on the store's day is\nlisted in one list, without overdue marks or the actions column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pms-disabled",
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
