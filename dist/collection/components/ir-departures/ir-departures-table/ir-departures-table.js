import { departuresStore } from "../../../stores/departures.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
export class IrDeparturesTable {
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
    /**
     * For properties without front desk (PMS): check-out status isn't tracked, so every room departing on the store's day is
     * listed in one list, without overdue marks or the actions column.
     */
    pmsDisabled = false;
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
        const isOverdueCheckout = !this.pmsDisabled && moment(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(moment().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "ir-text-end" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), !this.pmsDisabled && (h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? (h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutRoom.emit({
                    booking: booking,
                    identifier: room.identifier,
                });
            }, buttons: isOverdueCheckout ? ['overdue_check_out'] : ['check_out'] })) : isFuture ? ('') : (t('Lcz_InHouse', { fallback: 'In-house' })))))));
    }
    /** Non-PMS rows: every room departing on the store's day, in the store's order. */
    renderDepartingRooms() {
        const { filteredBookings, today } = departuresStore;
        const departing = filteredBookings.flatMap(booking => (booking.rooms ?? []).filter(room => room.to_date === today).map(room => ({ booking, room })));
        return departing.map(({ booking, room }, index) => this.renderRow(booking, room, index, false, false));
    }
    renderBody() {
        const { needsCheckOutBookings, futureRooms, outBookings } = departuresStore;
        const columnCount = this.pmsDisabled ? 5 : 6;
        const rows = this.pmsDisabled
            ? this.renderDepartingRooms()
            : [
                ...(this.renderSection({ bookings: futureRooms, isFuture: true }) ?? []),
                ...(this.renderSection({ bookings: needsCheckOutBookings, showAction: true }) ?? []),
                ...(this.renderSection({ bookings: outBookings }) ?? []),
            ];
        const isEmpty = this.pmsDisabled ? !rows.length : !needsCheckOutBookings.length && !outBookings.length;
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
        const { needsCheckOutBookings, futureRooms, outBookings, pagination } = departuresStore;
        return (h(Host, { key: 'c7e33f532878e2c57fe8eeccc51b18135387f4b7' }, h("div", { key: 'a9bda198b891c95c330b932104941b2f60847b47', class: "table--container" }, h("table", { key: '42091cbda281709b84ae5856deec5a4a276e3beb', class: "table data-table" }, h("thead", { key: 'a46abdc948af5ff6a2e250e5a97a8425f6efe363' }, h("tr", { key: '02962fab1eb7dfdb398b3699a7e59dd6cb08be19' }, h("th", { key: '59c9e3952f51d3f4d135747f4ee22f9821f36b71' }, h("span", { key: '790db3de78f963879f6ff5cd7f5f8d5bf9ba54e4', class: 'departures-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '80c25dc81a572c9c6362fc896b18441c705d2eba' }, h("div", { key: 'd430dc66a73fd47d8aa171855982d6fd02750d52' }, h("p", { key: 'c506c8747ce7f56683c8073b0dfac53d79ba883e' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: 'd2a14b2f67bc31c240cd2b8b992a800ba02d19a5' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: '20aec3702f1ded33d2b29dc4223e3cf2cd2790f0' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'd76178003b0125e4043728ad1637c6bba44f040b' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: 'e06388c6ade66d502906f7f92a2dd447d9704a3a', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: 'eb6d8f6ba30c2d722efcff1b58a570e0a2f3b1aa', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '4d6e6c6fcb44a06018a33454943faa7e0fe0b494', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && h("th", { key: 'e098b7747be4c38d045b1b7930853cb9651ff4a1' }))), h("tbody", { key: '573f14671b142048d8ab7d0a09ae32c057b92e29' }, this.renderBody()))), !this.hidePagination && (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: 'be32e3a841236cab53499c6375a5f60d7eec4ec4', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
    static get is() { return "ir-departures-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-departures-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-departures-table.css", "../../../common/table.css"]
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
                    "text": "For properties without front desk (PMS): check-out status isn't tracked, so every room departing on the store's day is\nlisted in one list, without overdue marks or the actions column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pms-disabled",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkoutRoom",
                "name": "checkoutRoom",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CheckoutRoomEvent",
                    "resolved": "{ booking: Booking; identifier: string; }",
                    "references": {
                        "CheckoutRoomEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-departures/ir-departures-table/ir-departures-table.tsx",
                            "id": "src/components/ir-departures/ir-departures-table/ir-departures-table.tsx::CheckoutRoomEvent"
                        }
                    }
                }
            }, {
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
            }];
    }
}
