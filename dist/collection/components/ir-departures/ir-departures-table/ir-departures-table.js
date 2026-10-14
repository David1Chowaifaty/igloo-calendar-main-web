import { departuresStore } from "../../../stores/departures.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
export class IrDeparturesTable {
    /** Hides the pagination footer, for hosts that load the whole day in one page (the dashboard). */
    hidePagination = false;
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
        const isOverdueCheckout = moment(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(moment().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "ir-text-end" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? (h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutRoom.emit({
                    booking: booking,
                    identifier: room.identifier,
                });
            }, buttons: isOverdueCheckout ? ['overdue_check_out'] : ['check_out'] })) : isFuture ? ('') : (t('Lcz_InHouse', { fallback: 'In-house' }))))));
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
        return (h(Host, { key: '5fd1dac44f9fe75c6f96fbdea742816978327c4b' }, h("div", { key: '31484ecff181aaa0f78973a9fa03427c027c93d3', class: "table--container" }, h("table", { key: '611c5c54dcdf23b600fc84ac832e32b547843c0b', class: "table data-table" }, h("thead", { key: '02f1cfb8acc530cb32b0806fd9cd53f5df2d8c4e' }, h("tr", { key: '3ab837ec562ca804bd5f9469fdee73a25122797e' }, h("th", { key: '300d48274d73d3ff849515829d21da2b35b49778' }, h("span", { key: '18b34d5e88158c6898edf929d09484971e4421a5', class: 'departures-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '5f903bd950b8eaca0cc9f585dda89f2a32a0c8d1' }, h("div", { key: '6bb67e072e9371b91aab74afb09407eab82f5d07' }, h("p", { key: 'c52669dea74d9e532122a580132a94e35e4d3252' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: '25a716a456b836a7bc86cd505303e3600dcb9c25' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: '9a23ff4b3ca50a22312d5fe8c3fb83ac1a6d964e' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '72d5e6c1311960f4da6c6aebaaf1574c9c8fe632' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '15e87b93d5b35db66f66e1c3afdd4c8917535370', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '8afef36b64f1f2b133b33677986e1aac16b1d42e', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: 'c023bd961a8eeb0acfb5d3a924483432533283d4', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), h("th", { key: '36ab78002cd833ac8d0771db41684e2c8f91cb7c' }))), h("tbody", { key: 'c0b0836ce66715da7619e692aa0bc0beba6fc587' }, this.renderSection({ bookings: futureRooms, isFuture: true }), this.renderSection({ bookings: needsCheckOutBookings, showAction: true }), this.renderSection({ bookings: outBookings }), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '1b2bf32c3bba39aed3bf08eeea50d2e8ee5b3120' }, h("td", { key: '8ecd8ab8b5d31b8fb88c4cf6fb81aa78d1371a89', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '085ca57ad20084ee8bd94e88414ddf63c3c90163' }))))))), !this.hidePagination && (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: '0082d98bf21ad22f9d3be16df0980bcf85e96b3a', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
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
