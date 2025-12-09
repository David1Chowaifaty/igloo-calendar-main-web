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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", { class: "sticky-column" }, h("ir-booking-number-cell", { origin: booking.origin, channelBookingNumber: booking.channel_booking_nbr, source: booking.source, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-by-cell", { guest: booking.guest })), h("td", null, h("ir-guest-name-cell", { name: room.guest })), h("td", null, h("ir-unit-cell", { room: room })), h("td", null, h("ir-dates-cell", { overdueCheckout: isOverdueCheckout, checkIn: room.from_date, checkOut: room.to_date })), h("td", { class: "text-right" }, h("ir-balance-cell", { bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", null, h("div", { class: "departures-table__actions-cell" }, showAction ? h("ir-actions-cell", { buttons: isOverdueCheckout ? ['overdue_check_in'] : ['check_in'] }) : 'In-house'))));
    }
    render() {
        const { needsCheckOutBookings, outBookings } = departuresStore;
        return (h(Host, { key: '746077793fc85981d7971e50b83d6feaf3eda004' }, h("div", { key: 'c6977a71c6b0348fdf7310f4958f78ac0548f5d9', class: "table--container" }, h("table", { key: 'fab239bf86ad0b2144eb45d6b4d3499e296dcab4', class: "table data-table" }, h("thead", { key: '939738ace393316acf2ca81df3bd8786acb42383' }, h("tr", { key: 'd6c75ffb1e36f85bb5c57a4834ac0369a22d02e0' }, h("th", { key: 'ebcbe54b2ed9f1448af76d2924e7d5fbda4ffff9' }, h("span", { key: 'b95212c3cced54de043fb066fb805fccd04bab45', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: 'a2a3363c98eb452cd163acd901e7bb277a53bd56' }, h("div", { key: '5ec9cb22a6ede7d06da0a8d7324546501b35fe16' }, h("p", { key: '91b842bf30c1363cc7f626125b0cc3b5bf28a474' }, "Booked by"))), h("th", { key: '051b95c510b6b8beb91758320606b0718269779c' }, "Guest name"), h("th", { key: 'e8407b6b0f7be4da15559baf0115a611d6713009' }, "Unit"), h("th", { key: '9d89564cd15d996fe95f55848e1613b59fe16d4d' }, "Dates"), h("th", { key: '1e54f11690939affb1593197ad3da2729c83370b', class: "text-right" }, "Balance"), h("th", { key: 'b51449862a91f99729c9603771277b7e575788f6' }))), h("tbody", { key: 'e35525e7ab0b1fddb966a84d8354f235fa5af084' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: 'd69c3eef832658da9d6b9df477be5662bff4e55a' }, h("td", { key: 'de4b1449cf4eed83b65915e0be5cab97f247507d', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
