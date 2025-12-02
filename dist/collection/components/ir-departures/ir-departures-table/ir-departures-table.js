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
        return (h(Host, { key: '9c00c1de05bd81bf910002dbdd13e474f31287d3' }, h("div", { key: 'f36b535ea59486fc5314e7178c29361c1fda32a0', class: "table--container" }, h("table", { key: 'be6e3c321552790e7ceed8dd3890044ecc37299e', class: "table data-table" }, h("thead", { key: 'c3d2bb8e4813c3128cadff9cb92b58564bbe15d6' }, h("tr", { key: '5463909845360def693f24a872b86a930582271f' }, h("th", { key: '24171bd466aa2fba1af23552f3b8c36d6e6c600c' }, h("span", { key: 'eea6c328a35a16bf61c02311f296476f261070b2', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: 'bfb044451c8deafdb50b0f6629d18ac91f4a6550' }, h("div", { key: '93a80f4bd4351aca7adfeb433044a99e68b74b0c' }, h("p", { key: 'aae96d218353901ca7ef8604e092fc24cb8cd43d' }, "Booked by"))), h("th", { key: 'be621b1f8ffb1e4d4c1d19c94b4097f51c753804' }, "Guest name"), h("th", { key: '4c91079957d255727a976f2c1f42818d22ef3101' }, "Unit"), h("th", { key: '50f4f56675f754bf7b384cb5a3b82153cfc95135' }, "Dates"), h("th", { key: '9f78697c12b10dc992abde9b0f994f254073f5f0', class: "text-right" }, "Balance"), h("th", { key: 'f33d4a95fa854870dfeecbdc800c7bc75ea27756' }))), h("tbody", { key: 'c8183065103397cf0473821bcb442155d1dd6138' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '4c3236f1159fa0ee1888cc3c989a5a4dd27c9c71' }, h("td", { key: 'a20f8a8fef81363f102d3ff7b993656b62430616', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
