import { departuresStore } from "../../../stores/departures.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrDeparturesTable {
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
    renderRow(booking, room, index, showAction) {
        const rowKey = `${booking.booking_nbr}-${room?.identifier ?? index}`;
        const isOverdueCheckout = moment(room.to_date, 'YYYY-MM-DD').startOf('day').isBefore(moment().startOf('day'));
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-source-cell", { origin: booking.origin, guest: booking.guest, source: booking.source })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departuresStore;
        return (h(Host, { key: '512018d685f1bc0e8836067f29e992ccc01e5b7a' }, h("div", { key: 'f8d76b20d731dbfb68e74201c243cb57bb4f1f0c', class: "table--container" }, h("table", { key: '09a7f13b72d0e63f58e5365086a74eced2e980b4', class: "table data-table" }, h("thead", { key: 'b6b920101601a4ac9a69d144fc0564a07704e7bb' }, h("tr", { key: '598405b61ac9b6c707feade50b897c44df504075' }, h("th", { key: '78ec5335df3355739e6c6fce7200d7f4b94a2f82' }, h("span", { key: '587f1163d278613d2ebd59f6d2c64b3734259131', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '45ad1fc0dc65e1d2212cc29013c2aa7943287a5a' }, h("div", { key: '4b9a0e50e288546098e57052ec7d7d54a9f5bee8' }, h("p", { key: 'ef9c3e5355a8c1f149e9cedadac975a52667841c' }, "Booked by / Source"))), h("th", { key: '03079288de13a8df64dce551bd3c1b442a8b3f9b' }, "Guest name"), h("th", { key: '39713ead8df5c65b60bea92b3d733d0880c272c4' }, "Unit"), h("th", { key: '09e63edb8804c53a805cbd9eb37deb6f98e01c4f' }, "Dates"), h("th", { key: 'b02aa7ddc58e05f39b893577c3e827eb9a8c1527', class: "text-right" }, "Balance"), h("th", { key: '16363ead8d6e7282e7a0948c8ae1e46663b25efe' }))), h("tbody", { key: 'a0dfc5b45b72e027646ec07d753ab283dd8fe98d' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '51e6e165a9cb71e53349bf3dc014cf27c334d86e' }, h("td", { key: 'e836bf8bccf8b0578eb1e3b4fc42081cd0840bf6', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
}
//# sourceMappingURL=ir-departures-table.js.map
