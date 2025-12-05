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
        return (h(Host, { key: '0e5fea6eac8ece250144d45fbb9d0119877fc9e6' }, h("div", { key: '9a9d00b8aa701a6ad898b2ee050e43295617961a', class: "table--container" }, h("table", { key: '6354b4f213cbde1349260c37b0b3dfdcb102b54c', class: "table data-table" }, h("thead", { key: 'eae6ca30959fdb1a5e7b2eb307e77d9c5e822e90' }, h("tr", { key: '2dae3d7186089526c9a1b3fac9b6e30ef8839bdb' }, h("th", { key: '5b6d575152d5126b196791a38601ee7e728a70fd' }, h("span", { key: 'b77e29211a90df9fc47977ddec65a643853d2bd3', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '4efb722fade2c37ea8883b6c9ff921c3bf0ea320' }, h("div", { key: 'd7098654e3f1d34c71c2915350118d0aee8a2a65' }, h("p", { key: 'e5b0261740d67e4fdb747f6af6f03bd98aa3cd63' }, "Booked by"))), h("th", { key: '73239f58185a807bd70a09a297095a810f942d81' }, "Guest name"), h("th", { key: 'c487ad318da8f576f81b5ddfa6efaade41606017' }, "Unit"), h("th", { key: 'c1a6353e18df7a68d5254c78fb13e0c11df0689b' }, "Dates"), h("th", { key: '270348630c31e8ba545ae436b5823a7b840c7095', class: "text-right" }, "Balance"), h("th", { key: '6354e17a16820c98bd1730f0fc8750a2da02b426' }))), h("tbody", { key: '4c92b7a15a201424a3bb7328c3fd16c33334af17' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '327064a41046c9a73ae4f9fbfc99e29e25715d21' }, h("td", { key: '67da2d5f991b32b4bf20fed9930a53176ba6af06', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
