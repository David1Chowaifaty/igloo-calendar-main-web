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
        return (h(Host, { key: 'b0fc5855d490ce23ad91e44b615c2abf5f8654b5' }, h("div", { key: '5307107c1ff4dcae25b1cb71ad99ebef08acf51e', class: "table--container" }, h("table", { key: '6b3e7dcf1cb78423c8d3a76b783be03b135f4a66', class: "table data-table" }, h("thead", { key: '27e1a0d6e863b279d70b2207944b7a59250ce5ad' }, h("tr", { key: '23cf6d4a135172b15f8009e96019842324bba01f' }, h("th", { key: '678e43a9b330bdba83443f8372e2eada954a0dba' }, h("span", { key: '02411f10838e74d041aac450c48e47eae26f3396', class: 'departures-table__departure__cell' }, "Booking#")), h("th", { key: '3c36326a9589b6df0e918bad8321f4d64e881a16' }, h("div", { key: '7e0464bddaa374b9659ba44c68e49705fcbba651' }, h("p", { key: 'ff59ca6b24c26b820210bcbe24b70456a05d97a1' }, "Booked by"))), h("th", { key: '031bbfc5c9ac03c9d70f8afc43e12c670705ef2d' }, "Guest name"), h("th", { key: '2e4e554db625230628150707a035f50095799f56' }, "Unit"), h("th", { key: '0c9231edc89693902fb5853a55d97568403f7e7c' }, "Dates"), h("th", { key: '726f17e89a3610a7733c358181cd12ebcb15860c', class: "text-right" }, "Balance"), h("th", { key: '1658832101b99fb55e5adceee3153087f5b644f1' }))), h("tbody", { key: 'a4cbc520552d90901620a5bbb133f582e97c73c2' }, this.renderSection(needsCheckOutBookings, true), this.renderSection(outBookings), !needsCheckOutBookings.length && !outBookings.length && (h("tr", { key: '4b065b87b934c3d1e6d4f960deaa154b425c7a75' }, h("td", { key: '15ab45683bce4362ce87007f9d89487c1f8c2068', colSpan: 7, class: "empty-row" }, "No departures found."))))))));
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
