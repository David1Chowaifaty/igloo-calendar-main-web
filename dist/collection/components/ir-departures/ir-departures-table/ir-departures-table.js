import { departuresStore } from "../../../stores/departures.store";
import calendar_data from "../../../stores/calendar-data";
import { Host, h } from "@stencil/core";
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
        // Overdue relative to the store's day (the dashboard's selected day), not the real today.
        const isOverdueCheckout = !this.pmsDisabled && room.to_date < departuresStore.today;
        // Automatic properties still list rooms awaiting check-out, but the system checks them out, so no button.
        const isAutomaticCheckOut = !!calendar_data.property?.is_automatic_check_in_out;
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest }), !this.compareGuests(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "ir-text-end" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial, removeBalance: true, paymentDate: departuresStore.today })), !this.pmsDisabled && (h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction && !isAutomaticCheckOut ? (h("ir-actions-cell", { onIrAction: e => {
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
        return (h(Host, { key: '4c8987fc659ab7b64fbae29d600394be96324b9c' }, h("div", { key: '286cae4cb0d5671557c454603ad567fcb76d59b6', class: "table--container" }, h("table", { key: 'f7d30ba58fec4cecbca2e09d963bd3fc29319903', class: "table data-table" }, h("thead", { key: 'ff8e9f545a8047ca31991628c9250c541f01f9c8' }, h("tr", { key: '0d0ef76ab54a6866489a62c772ed0b33de2fc790' }, h("th", { key: 'ba727c719e3903aeb3e4b77932525ceab08c493d' }, h("span", { key: '8065e14cea36f234f98a3a7ff72689767f9374cc', class: 'departures-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '3f40b3d0067f3c23ae1724d8fcafd906d3681ba4' }, h("div", { key: 'cdad90ebb5239e1b7ca46e625c658fd4b8ebcd4a' }, h("p", { key: 'd3746d4240e7e362966b6f19bac4e2abafb0c6ac' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' })), h("p", { key: '6ee3b8c1ed20d6cb65c4d92b65591bc20bb0f7bc' }, t('Lcz_GuestName', { fallback: 'Guest name' })))), h("th", { key: 'd76e8b5f40549ad81312195059028667f4fbe766' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'd6137342bc487e4b9a7e5824806e8a69642dafec' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '3b0343b49ebc227ff5b02b77707eea419c375718', class: "text-center" }, t('Lcz_Balance', { fallback: 'Balance' }), h("div", { key: '4b8c6d9d6f201e21b7c416dd29eb6d8e2d1094b2', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '6c48ac3b029210fe2a11d821f9487fde05cb0926', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_ClickToCollect', { fallback: 'Click to collect' })))), !this.pmsDisabled && h("th", { key: 'f9d37448b0b22ada165bc1c873218f28b22103f1' }))), h("tbody", { key: '6551cf4e0d420541dce5fdc54fcc3f8f048117e2' }, this.renderBody()))), !this.hidePagination && (needsCheckOutBookings.length > 0 || outBookings.length > 0 || futureRooms.length > 0) && (h("ir-pagination", { key: 'cbd531500589df041086ebbf8eb132e5dc39b94a', class: "data-table--pagination", showing: pagination.showing, total: pagination.total, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'Bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
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
