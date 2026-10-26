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
        return (h(Host, { key: '324da07c76d994e837071e0748d3d1e66ef16aff' }, h("div", { key: '4a628798a95becd5bdf0f79455fdf49c1cb8320a', class: "table--container" }, h("table", { key: '61df91a6e70b736510619a03f28c52a1d96e4005', class: "table data-table" }, h("thead", { key: '862555e6c7f5b659d4ca395fbacf979c22fad39d' }, h("tr", { key: 'cf9c257e558ba64f2c0627e9886619d38fd7809f' }, h("th", { key: 'c16aac6487386212fbc74b88ef3f9e2a3ae68fd9' }, h("bdi", { key: 'e34759881ed42a7c5d3862d08a47d96be105aefc' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '91f5448819fd751108b3142386c92fd1314d632a' }, h("p", { key: 'd02db0cfc8f1a5e55b322caed12162715ba20ba8' }, h("bdi", { key: 'edffa47d445bd5ec6871190adc4a76346a4992fe' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '9dd13695968bbf63180b164fac6ff0b72ed8e672' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: 'e009d20dcc0dcd7ab8dc331a7aa7a0e77463b106' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '55f38ef4a18ad8b9fc6eb68bf5b16c3e865561a3' }, t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && h("th", { key: 'f7a186779b600f50c85418027db50f606f9cb164' }, t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && h("th", { key: 'c03f6a6726b711648a18a97783a47bdbe66fc41c' }, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", { key: 'aa71398225266adf93b3ad70c5097cc122bf3267' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
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
