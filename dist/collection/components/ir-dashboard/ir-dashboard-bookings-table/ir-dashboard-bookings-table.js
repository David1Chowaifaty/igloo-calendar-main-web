import { t } from "../../../services/locale/t";
import { Host, h } from "@stencil/core";
/**
 * Read-only booking list used by the dashboard's In-house, Bookings and Cancellations panels, built from the shared
 * booking table cells. In-house lists one row per occupied room; Bookings and Cancellations list one row per booking,
 * with its rooms' units stacked in the Unit cell.
 */
export class IrDashboardBookingsTable {
    bookings = [];
    /** In-house drops the Balance and Status columns that Bookings and Cancellations end with. */
    variant = 'inHouse';
    emptyMessage;
    /** The dashboard's selected day: balance payments (e.g. a cancellation's charge or refund) are recorded on it rather than on today. */
    date;
    isSameGuest(booking, room) {
        const normalize = (g) => `${g?.first_name ?? ''}${g?.last_name ?? ''}`.replace(/\s+/g, '').toLowerCase();
        return !room?.guest || normalize(booking.guest) === normalize(room.guest);
    }
    /** In-house rows end at Dates; Bookings and Cancellations add Balance, then Status. */
    get hasBalanceAndStatus() {
        return this.variant !== 'inHouse';
    }
    /** The booking's stay, or the span of its rooms' stays when the booking omits it. */
    stayOf(booking) {
        const rooms = booking.rooms ?? [];
        const from = booking.from_date ?? rooms.map(r => r.from_date).sort()[0];
        const to = booking.to_date ??
            rooms
                .map(r => r.to_date)
                .sort()
                .at(-1);
        return { from, to };
    }
    renderBookingRow(booking) {
        const { from, to } = this.stayOf(booking);
        return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: booking.booking_nbr })), h("td", null, h("div", { class: "units-cell" }, (booking.rooms ?? []).map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))))), h("td", null, h("ir-dates-cell", { checkIn: from, checkOut: to })), this.renderTrailingCells(booking)));
    }
    renderTrailingCells(booking) {
        if (!this.hasBalanceAndStatus) {
            return null;
        }
        return [
            h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial, paymentDate: this.date })),
            h("td", null, h("ir-status-activity-cell", { status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })),
        ];
    }
    renderRoomRow(booking, room, index) {
        return (h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index}` }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), this.renderTrailingCells(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = this.variant === 'inHouse'
            ? bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRoomRow(booking, room, index)))
            : bookings.map(booking => this.renderBookingRow(booking));
        const columnCount = this.hasBalanceAndStatus ? 6 : 4;
        return (h(Host, { key: '6bf303a414538fdf22fb223a00951b93ce4fb98c' }, h("div", { key: '4a1f8a413803fee47822dbbc5c45f2ded0c3feaf', class: "table--container" }, h("table", { key: 'de0503c98a14f251ddfa22c8068c73dfc4f75e62', class: "table data-table" }, h("thead", { key: '34b773e1c054200299024e4ee4a925bb92007a5f' }, h("tr", { key: '37925e04a1c41ffaf98e7ebd28fb2e5a8f30799a' }, h("th", { key: 'ffea1f0d1f86d560f882efcc2852b278bf25bebb' }, h("bdi", { key: '29fad332c2e38823360f447355e84bd46b4412c3' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'b05b4bf8163e975fc3561301d1328dcb408e0d48' }, h("p", { key: '673bf886c93f48e9f5b60ad36a1c6b304e7aa118' }, h("bdi", { key: 'bb6320c74dc435b7d41b0be63acdda7c9b57312e' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '4d76c98dd28ae8c367fa8bdd701ca4ece9e5e220' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: '51c9c20fae5227bbec5c580b623360365f2f3b86' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: 'a79b998620d759d3eaf572a7a20960d62e135e37' }, t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && h("th", { key: '82d87485a17ed330ba65c78b365007ee4426a695' }, t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && h("th", { key: 'c6746d6dd32d4286badbbab57db0b0b060240675' }, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", { key: '30065983f6423f81783c6b95fc7b3fd3e43278e0' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
    }
    static get is() { return "ir-dashboard-bookings-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../../common/table.css", "ir-dashboard-bookings-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../../common/table.css", "ir-dashboard-bookings-table.css"]
        };
    }
    static get properties() {
        return {
            "bookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking[]",
                    "resolved": "Booking[]",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DashboardBookingsTableVariant",
                    "resolved": "\"cancellations\" | \"inHouse\" | \"newBookings\"",
                    "references": {
                        "DashboardBookingsTableVariant": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-dashboard/ir-dashboard-bookings-table/ir-dashboard-bookings-table.tsx",
                            "id": "src/components/ir-dashboard/ir-dashboard-bookings-table/ir-dashboard-bookings-table.tsx::DashboardBookingsTableVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "In-house drops the Balance and Status columns that Bookings and Cancellations end with."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'inHouse'"
            },
            "emptyMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-message"
            },
            "date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ISODate",
                    "resolved": "string",
                    "references": {
                        "ISODate": {
                            "location": "import",
                            "path": "@/utils/calendar-dates",
                            "id": "src/utils/calendar-dates.ts::ISODate",
                            "referenceLocation": "ISODate"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The dashboard's selected day: balance payments (e.g. a cancellation's charge or refund) are recorded on it rather than on today."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date"
            }
        };
    }
}
