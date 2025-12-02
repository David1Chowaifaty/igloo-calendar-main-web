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
        return (h(Host, { key: 'a7a8d334274bc1ecf74bd712cb0c20693de7650d' }, h("div", { key: 'b2bb63b5d0f715bdd8f697f802cd16f850dfc443', class: "table--container" }, h("table", { key: 'a0c5788413344cd52e0369f5141daaecbc913bdf', class: "table data-table" }, h("thead", { key: 'd7bfb046791f440ad6173e1c24efb0895fd0ffd1' }, h("tr", { key: 'fb4d56362a51470f70d2239f83edb4a4ede1af26' }, h("th", { key: '62f9c5e8c52227b5cef5d352ca356fbbdaf8571f' }, h("span", { key: 'e93ac8c20ecd2ef1c1c8a6733bfcd95c8c1c1e06', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '3c771ea28419a9396b9b2c350924f88225a9e0a8' }, h("div", { key: '634adaf08e4f6a4439228c7c1603f4dae8d26356' }, h("p", { key: '2e16d29e5c6f3e845d0e487c6dc3a56f19792b86' }, "Booked by"))), h("th", { key: '4472735bb3c95ac7f2d63abe23f9155c96179881' }, "Guest name"), h("th", { key: 'aa4bbc86a6a248413b28908e12b46737d3359e45' }, "Unit"), h("th", { key: 'a44d818e4dd1bdd92cda43dad644509485654fe4' }, "Dates"), h("th", { key: 'd28e74ca64265b221b1b7a1976eb78bab1f24812', class: "text-right" }, "Balance"), h("th", { key: '9232bd6f31d369ad8f663c72a3fb9b51807cc7bb' }))), h("tbody", { key: 'a5ad5ed3a404311c71f1b7417dce2c67b9e3885b' }, this.renderSection(needsCheckInBookings, true), this.renderSection(inHouseBookings), !needsCheckInBookings.length && !inHouseBookings.length && (h("tr", { key: 'a40cad74d61eb0000953e1dbe83d3d7c89f87fdd' }, h("td", { key: '991798d66385ad0a0faad054560d72a125bd1e67', colSpan: 7, class: "empty-row" }, "No arrivals found."))))))));
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
