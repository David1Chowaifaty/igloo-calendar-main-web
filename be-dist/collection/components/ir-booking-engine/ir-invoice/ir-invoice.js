import { Host, h } from "@stencil/core";
import { booking } from "./dummy-data";
import { format } from "date-fns";
import { formatAmount, getDateDifference } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
import app_store from "../../../stores/app.store";
import booking_store from "../../../stores/booking";
export class IrInvoice {
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(booking.from_date), new Date(booking.to_date));
        const nbr_of_persons = booking.occupancy.adult_nbr + booking.occupancy.children_nbr;
        const total_rooms = booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const booking = booking_store.booking;
        return (h(Host, { key: '31c5124f91b008aeaaf1d70ff72c372b797362d4' }, h("div", { key: 'ef4cea0895f74e4bcf5b61abe80d946b4b12ec1d' }, h("section", { key: 'af91fa7c11800e125d683b109cc76da55016476f', class: "booking-info " }, h("p", { key: '8070fdbd4c06bb0e1080bb3e3441e5f2a2f4bed9', class: "booking-info-text" }, "Booking reference: ", h("span", { key: 'eec6638afae5121a5e630464b1d5e6bf0ff0ba84' }, booking.booking_nbr)), h("p", { key: 'a2770cd184d59cf261f7349a2687597899790587', class: "booking-info-text" }, "Booked by:", ' ', h("span", { key: '442d9b6e2aee81ac64888f40e6416f10135b61dc' }, booking.guest.first_name, " ", booking.guest.last_name)), h("p", { key: '9a48d57e13602e97a9a903b901c35a4ca90513e5', class: "booking-info-text" }, "Check-in: ", h("span", { key: '6a9c6f17557346a89d29f459bf181123935d7217' }, format(booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", { key: '190643c249100fc29adbe969c2d6297886271653' }, localizedWords.entries.Lcz_From, " ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from)), h("p", { key: 'd8fd87688d132938a4a35d307e31b698bd9361ed', class: "booking-info-text" }, "Check-out: ", h("span", { key: 'c78016d6f8ea227b0aa60b997fa6340d0d0f6987' }, format(booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", { key: 'e516b4a66db13636d650047ed453fba5e4329446' }, localizedWords.entries.Lcz_Before, " ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_out_till)), h("p", { key: '984c71c8dd043f7340ab0b7765212bbb2128aaa1', class: "booking-info-text" }, "Arrival time: ", h("span", { key: '23ff2aa9cfb56a13a112b69e61f55ef9b16de8d0' }, booking.arrival.description)), booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, booking.remark)))), h("section", { key: '763d68d1bcebaad1be4310ac66fdcb1e276ec4ec', class: "booking-details space-y-2" }, h("div", { key: 'd6abd69119fc339693a688264e714f85da3dcc7e', class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { key: '147dee4a31a5c56f747fa9b696ba5fa88aef18b5', class: "flex items-center gap-4" }, h("ir-icons", { key: '088767b856f022d6ea6e3d94597c5a538aa81660', name: "bed" }), h("h3", { key: 'f81f1512f3357da9690b0e8159f5011656fb5b31', class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", { key: '38a10ae8c2c39fa4fc0064c2b6766f86b432a626' }, (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.tax_statement)), (_d = booking.rooms) === null || _d === void 0 ? void 0 :
            _d.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-500" }, " ", formatAmount(room.gross_total, booking.currency.code))), h("p", { class: "room-info-text" }, "Guest name:", ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, "Meal plan:", ' ', h("span", null, room.rateplan.name)), h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee }))))), h("section", { key: '9676a8655565314fa6edc80c4334c79f39773f34', class: "space-y-2" }, h("div", { key: '6e68a48b802c2630c9c750ab0b4d716a230277d3', class: 'flex items-center gap-4' }, h("ir-icons", { key: 'e05b06e7bc9fb866486b3df124a7f6b45d691ea8', name: "credit_card" }), h("h3", { key: '4650b449958aab811af53c946384488f7db75843' }, "Payment details")), h("p", { key: '5ea045542b17f896fca9804446a55b0f4f310b05', class: "total-payment" }, "Total: ", h("span", { key: '47e4b94e7a4e6d33716e0d2eb98b19c3c399c6dc', class: "text-green-500" }, formatAmount(booking.financial.gross_total, booking.currency.code)))), h("section", { key: '8635c8ebd5ac413dbe149cec51abf8f5e12c441e', class: "space-y-2" }, h("div", { key: '8244a04eaf591ac25d8ffdd0c31ad89ed9e3726c', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd3295637573bc9078a0c43d12ca09f0886ee986e', name: "danger" }), h("h3", { key: '51ee1bea4b71621cd555315ebcd5919e838f037a' }, "Important information")), h("p", { key: '88c5310bfbe6894c746ccca78156084772a501c9' }, app_store.property.description.important_info)), h("section", { key: '0168e71fe0ad6c72bf4d4296eb6a8b5ed42735fc', class: 'space-y-2' }, h("div", { key: '906964ca7ea686c8859fa917a9bb8087f69af2e7', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b4875a8363f4198637687dbc84c6cc0d1bb0d06b', name: "car" }), h("p", { key: '04d2d066e55115d1ef502d10a1ce0d1d1e458e3b' }, (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '810ac35f06b38c9dd6a82a88406a27b6caa230c2', class: "flex items-center gap-4" }, h("ir-icons", { key: '12d5d91fb6ea8ba62d8a0ef7b9e075b5821c0499', name: "pets" }), h("p", { key: '0e38166771ebf811af1da13f1f474865fa6adac7' }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.pets_acceptance.title)), h("div", { key: '59412639b9660381de7ba060241825b6adbdb273', class: "flex items-center gap-4 " }, h("ir-icons", { key: '7affea0bbde67769e8a252ef5a33c6b38b2be1bf', name: "bed" }), h("p", { key: 'f4cd6f972a20d3fc77d79a451acbc21b1dd0dc04' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.baby_cot_offering.title))))));
    }
    static get is() { return "ir-invoice"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
}
//# sourceMappingURL=ir-invoice.js.map
