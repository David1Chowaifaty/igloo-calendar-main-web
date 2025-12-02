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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-source-cell", { origin: booking.origin, guest: booking.guest, source: booking.source })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckin: isOverdueCheckIn, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "arrivals-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckIn ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckInBookings, inHouseBookings } = arrivalsStore;
        return (h(Host, { key: 'bd64ba4710409c596b40e25582cac9e3ca2f8269' }, h("div", { key: '855da37aee22f15aa8d04cbbd64d83f37fd7149b', class: "table--container" }, h("table", { key: '58fb521f74eb61c1ecff2663f8df02a931167052', class: "table data-table" }, h("thead", { key: 'cf1eedb8e956c5e31302136122ebb8e919692f45' }, h("tr", { key: '4287e74c4d685c43cfa33c2a20bc9ee23dc6f179' }, h("th", { key: 'd009fc8d89d504251e473c90aa921a4c5f977ce6' }, h("span", { key: '79189588559ca917ac01af4e34434b74289049ef', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '8432b57d0dfac80f9d320cef2161804b0fc66da3' }, h("div", { key: '2d260c1c32a5f512adfda5ddfeaeef82d760d15f' }, h("p", { key: '3962f17d6985e3763a92bbc94ffa4bcec289a01e' }, "Booked by / Source"))), h("th", { key: 'c3517529ecf54d242b4c9b913177e40509aca24e' }, "Guest name"), h("th", { key: 'fcfd866ec0f87b711e57e14578e0bbf9e9997de1' }, "Unit"), h("th", { key: '8dc6dc7590247999309642bcd66b4d3298dcb458' }, "Dates"), h("th", { key: '2d3192e70a76fb2d4b215058addc108b1d370408', class: "text-right" }, "Balance"), h("th", { key: '2d72a19f48d134387e3bdc1ad6c42ce48628e5cf' }))), h("tbody", { key: 'e458d7d940a026d6454efd3cf99800b38e7ddbca' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'b3d2537ca4e20c12f2f2cc3d8cdb1502adece598' }, h("td", { key: 'cdb6cf7b8549c4c72d53d339953e7774ffbedde5', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
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
