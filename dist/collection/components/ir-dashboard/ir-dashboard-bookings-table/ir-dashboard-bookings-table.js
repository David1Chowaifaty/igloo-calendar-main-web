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
            h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial })),
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
        return (h(Host, { key: 'ea2300f37614c9dcac8a05005725796b19bcab53' }, h("div", { key: '108f74bcdd4db72ca2aa7aebd8d6cab9ad4c00e6', class: "table--container" }, h("table", { key: '94db5626e4f10ec2b9db0a274aea04be596aabcd', class: "table data-table" }, h("thead", { key: 'ccfb1db0df301bee97065a9c935662638ed74c25' }, h("tr", { key: '70a132be019a35bf2145e9e915165c63ff2b0b05' }, h("th", { key: 'be163bf8131f700ddd4a92d0d0b127c0d4204f93' }, h("bdi", { key: '23e7ee65e574046ce62944a7e8aaeac47813841c' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '605e66b023a60f05b122455c5aa4b7c97357f76c' }, h("p", { key: 'dd15f7cc61ab86b9c2ddb20e84a995c521d3e418' }, h("bdi", { key: '13cf2e7fc8a85aa2e7f9e1ad05c9bc38ad6ed898' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '55ede652ef2ff968ffc2fdc33076bf2398c472be' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: 'fb97ef5d9dcd6ec1c1851c5d2f2ad9c9b337e540' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '91331cd2279e30ab3ac1f31709573cb9ab5d92fd' }, t('Lcz_Dates', { fallback: 'Dates' })), this.hasBalanceAndStatus && h("th", { key: '3a3413cd9b17370818aa94cbfd654f056784fd98' }, t('Lcz_Balance', { fallback: 'Balance' })), this.hasBalanceAndStatus && h("th", { key: 'a25009a1b8404ebf5bdbd4eb1746229bc021cb22' }, t('Lcz_Status', { fallback: 'Status' })))), h("tbody", { key: 'c1621911f65c4d282dccb671db5a46a5c5ed5060' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
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
            }
        };
    }
}
