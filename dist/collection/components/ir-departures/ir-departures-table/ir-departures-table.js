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
        return (h(Host, { key: '459a1f2aba36455da6e7d8bba4adcbfe9c481a84' }, h("div", { key: 'd1319f8c94958e38ec3fcbf91c37b4bebc605e3c', class: "table--container" }, h("table", { key: '7995ff4b5dab6f1be1e1ecb1f2eac9ab7f4523de', class: "table data-table" }, h("thead", { key: 'a9a0f887309c74a3580d26b1b75db9f4a4235853' }, h("tr", { key: '932267953535cba8d47263d86b024a35abc1b9b1' }, h("th", { key: 'a878df9117e2e0015598e23c5988f55acec8b9d4' }, h("span", { key: '9636453fb16a32731d2192a8ed07674896def412', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: 'd2d1fb783b88b71be898646be019e417843cba29' }, h("div", { key: 'fcad1f3b0b609b7276f295b0247d1737271bf5a8' }, h("p", { key: '9d97d15c48716ff0c5f64c507bd6b514fa5e79dc' }, "Booked by / Source"))), h("th", { key: '375e0ca34f1a51922ca5bc52b91b12cd18cb4ac9' }, "Guest name"), h("th", { key: '451b2c77ca712f057172eb6f3e3943af7246421e' }, "Unit"), h("th", { key: '9b7304a37cd997e6b56dee301f8800177c56c6bd' }, "Dates"), h("th", { key: '68eb3edf16cadb26fb245f2f8d8a699e0e87610f', class: "text-right" }, "Balance"), h("th", { key: '737de2376caa9b5437be586894ca793c60a175ba' }))), h("tbody", { key: 'bfd3c2124c2d1ca8ef961428d3a2f78287105c57' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '5b6285e8017e31e2b3c9d4304318dc37b2fad43a' }, h("td", { key: '18c9952799fd0d2e9f579c2b54534f34dba7352d', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
