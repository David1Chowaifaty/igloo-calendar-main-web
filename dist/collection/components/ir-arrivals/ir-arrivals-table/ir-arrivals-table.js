import { arrivalsStore } from "../../../stores/arrivals.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrArrivalsTable {
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
        const isOverdueCheckIn = moment(room.from_date, 'YYYY-MM-DD').isBefore(moment());
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { source: booking.source, origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckInBookings, inHouseBookings } = arrivalsStore;
        return (h(Host, { key: 'b47b44dee2e2fdfa7f5530421ca4df096fbe84e5' }, h("div", { key: '27b311f4006fc73777e994c7a6959603e748a781', class: "table--container" }, h("table", { key: '8df35c17d9d6403a7c337594ef5d4263f6578ee5', class: "table data-table" }, h("thead", { key: '156667fa05d36afc7d9ff4fa37493fbd814a64f2' }, h("tr", { key: '9c83127f4bed0bd8876e72b93cf0b5c4ba7a8890' }, h("th", { key: 'c1b4109320e34f923ae4361e71c208b987d61ad4' }, h("span", { key: '38522e8aa7dd133df0f9abd5e136d25ac8da99fc', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: 'a292e5fac7fb0b39efdd9b1a9e8483993e76e3c8' }, h("div", { key: 'ebd2b0ba7e8d34f4a749e25785d6597a077b6171' }, h("p", { key: 'b3d8ca4d7d73f2964a64d9a7e7f3212f853063aa' }, "Booked by"))), h("th", { key: 'fcfd866ec0f87b711e57e14578e0bbf9e9997de1' }, "Guest name"), h("th", { key: 'c4625fa3987647f30b433e4610aaaa18d601f9ad' }, "Unit"), h("th", { key: '7b0bca14e63c6a7e8fd48764e12b1cb5a2ce9fa6' }, "Dates"), h("th", { key: '151d32575a1f7230ad3ca08eb16dad469b1e35b4', class: "text-right" }, "Balance"), h("th", { key: '343d10114d126b08948ea1957481fc354d290380' }))), h("tbody", { key: 'f92fdcc3530ab005879a1e5e831fa13726d19410' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'f3c2d715ffc672471ebd905ef32ecd9e93bd6be8' }, h("td", { key: 'fe6254203ca4410be838b1a3415caeb56e104484', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
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
}
//# sourceMappingURL=ir-arrivals-table.js.map
