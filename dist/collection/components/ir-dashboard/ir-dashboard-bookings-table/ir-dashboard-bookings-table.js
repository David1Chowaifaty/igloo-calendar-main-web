import { t } from "../../../services/locale/t";
import { Host, h } from "@stencil/core";
/**
 * Read-only booking list used by the dashboard's In-house, Bookings and Cancellations panels, built from the shared
 * booking table cells. In-house lists one row per occupied room; Bookings and Cancellations list one row per booking,
 * with its rooms' units stacked in the Unit cell.
 */
export class IrDashboardBookingsTable {
    bookings = [];
    /** Adds the variant-specific column: booked-on date for new bookings, status for cancellations. */
    variant = 'inHouse';
    emptyMessage;
    isSameGuest(booking, room) {
        const normalize = (g) => `${g?.first_name ?? ''}${g?.last_name ?? ''}`.replace(/\s+/g, '').toLowerCase();
        return !room?.guest || normalize(booking.guest) === normalize(room.guest);
    }
    renderExtraHeader() {
        switch (this.variant) {
            case 'newBookings':
                return h("th", null, t('Lcz_BookedOn', { fallback: 'Booked on' }));
            case 'cancellations':
                return h("th", null, t('Lcz_Status', { fallback: 'Status' }));
            default:
                return null;
        }
    }
    renderExtraCell(booking) {
        switch (this.variant) {
            case 'newBookings':
                return (h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })));
            case 'cancellations':
                return (h("td", null, h("ir-status-activity-cell", { status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })));
            default:
                return null;
        }
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
        return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: booking.booking_nbr })), h("td", null, h("div", { class: "units-cell" }, (booking.rooms ?? []).map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))))), h("td", null, h("ir-dates-cell", { checkIn: from, checkOut: to })), h("td", null, this.renderBalance(booking)), this.renderExtraCell(booking)));
    }
    renderBalance(booking) {
        return (h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial }));
    }
    renderRoomRow(booking, room, index) {
        return (h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index}` }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), h("td", null, this.renderBalance(booking)), this.renderExtraCell(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = this.variant === 'inHouse'
            ? bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRoomRow(booking, room, index)))
            : bookings.map(booking => this.renderBookingRow(booking));
        const columnCount = this.variant === 'inHouse' ? 5 : 6;
        return (h(Host, { key: 'b5ead85f10e0c51443d2ad7b819d1d19904a1109' }, h("div", { key: '2951884ae4c3991eaa796dcb777cc29c3a97237e', class: "table--container" }, h("table", { key: 'c5ac76812bdf7e051ddab445f4c360b54e45ccdc', class: "table data-table" }, h("thead", { key: '7ecd3af06923c7264a4452c8f20b1d26f08da7f2' }, h("tr", { key: '54d5aff57986855d9af874bc7a14f499ca7b8881' }, h("th", { key: 'c902f4489860fd29b7c77fd9f80a9a7226abb11d' }, h("bdi", { key: 'f892ac83a5d1fa343a61ceab5e57c537c10078f2' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'f7af0e7f2a700f0cde8605d5308702b2377f1721' }, h("p", { key: '2b1e6e8f5f1fae48d9d27c23469fa5cac124ce93' }, h("bdi", { key: '819a8044e236ebb2297e770920803c92eb49e278' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '4153abfa791a017b2fbc18b01305e9bc9ea74ab4' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: 'ceca24fa2cb358142fa7fac240b701bbe3bc3cba' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '52697a8e8c6a10daed3052a5f5fc6dfa300ebc12' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: '96d7195cbdf7c5cb9aa38e848ebef826ae8ed9b2' }, t('Lcz_Balance', { fallback: 'Balance' })), this.renderExtraHeader())), h("tbody", { key: 'a1584bc5f029dcbb7bbaad160baed0ce81805846' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
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
                    "text": "Adds the variant-specific column: booked-on date for new bookings, status for cancellations."
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
