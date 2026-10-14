import { t } from "../../../services/locale/t";
import { Host, h } from "@stencil/core";
/**
 * Read-only booking list used by the dashboard's In-house, Bookings and Cancellations panels.
 * One row per room, built from the shared booking table cells.
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
    renderRow(booking, room, index) {
        return (h("tr", { class: "ir-table-row", key: `${booking.booking_nbr}-${room.identifier ?? index}` }, h("td", null, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest, identifier: room.identifier }), !this.isSameGuest(booking, room) && h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { checkIn: room.from_date, checkOut: room.to_date })), h("td", null, h("ir-balance-cell", { guestFinancial: booking.guest_financial, bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status?.code, currencySymbol: booking.currency?.symbol, financial: booking.financial })), this.renderExtraCell(booking)));
    }
    render() {
        const bookings = this.bookings ?? [];
        const rows = bookings.flatMap(booking => (booking.rooms ?? []).map((room, index) => this.renderRow(booking, room, index)));
        const columnCount = this.variant === 'inHouse' ? 5 : 6;
        return (h(Host, { key: '00d7d316a5aa28d0209fb76945f7565a3ec78ac4' }, h("div", { key: 'c65937a032f6ebc1eb87d5158762c792aebb330f', class: "table--container" }, h("table", { key: '794a5d50da85cd2aa2a916408b29a8fd7dba3c04', class: "table data-table" }, h("thead", { key: 'ae55ac26e603e904cf3aba2e19436d17940ba65a' }, h("tr", { key: 'c05ea7a5aea59ba2508c0fc3cecd442e9ec6dca6' }, h("th", { key: 'c5bfaceaa1e4b0bbda73bc6d43649b46922d96a7' }, h("bdi", { key: 'b118c4c146693588d5ee081d21de6bd2dbdc4a57' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '72a6a51dbf9f344418fb239b894745c2adf51d55' }, h("p", { key: 'b67d543fb53bade87c2c1982a7585d78e1d356d1' }, h("bdi", { key: 'c4ba454d5a29549ab279ceb368ab090ab134685d' }, t('Lcz_BookedBySlash', { fallback: 'Booked by /' }))), h("p", { key: '8c85b6b4a4e8be30ed4218a4eb00fa3e40a73d84' }, t('Lcz_GuestName', { fallback: 'Guest name' }))), h("th", { key: '4742d88303b47e8ead9f16e938edc2e42883085d' }, t('Lcz_Unit', { fallback: 'Unit' })), h("th", { key: '25ca8c0ca77111ee039a5f268e0fc60bf7dfcfe8' }, t('Lcz_Dates', { fallback: 'Dates' })), h("th", { key: 'f23ed8c189848f0099f25342db9528325793cf16' }, t('Lcz_Balance', { fallback: 'Balance' })), this.renderExtraHeader())), h("tbody", { key: 'a111774154739fc880f77fee5200ac0d038ea63f' }, rows.length ? (rows) : (h("tr", null, h("td", { colSpan: columnCount, class: "empty-row" }, h("ir-empty-state", { message: this.emptyMessage })))))))));
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
