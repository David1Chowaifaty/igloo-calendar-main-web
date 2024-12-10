import { h } from "@stencil/core";
import app_store from "../../../../stores/app.store";
import localizedWords from "../../../../stores/localization.store";
import { format } from "date-fns";
import { formatAmount, getDateDifference } from "../../../../utils/utils";
import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
export class IrBookingDetailsView {
    constructor() {
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = null;
    }
    componentWillLoad() {
        var _a, _b;
        const { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        this.email = email;
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    renderLocation() {
        var _a, _b;
        const { city, country, area, address } = app_store.property;
        return [address !== null && address !== void 0 ? address : null, area !== null && area !== void 0 ? area : null, (_a = city.name) !== null && _a !== void 0 ? _a : null, (_b = country.name) !== null && _b !== void 0 ? _b : null].filter(f => f !== null).join(', ');
    }
    renderPropertyEmail() {
        if (!this.email) {
            return null;
        }
        return (h("div", { class: "booking-info-text" }, "Email:", h("span", null, h("a", { href: `mailto:${this.email}`, class: "contact-link" }, this.email))));
    }
    formatGuest() {
        var _a, _b, _c, _d;
        const values = [this.email, `${((_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.country) === null || _b === void 0 ? void 0 : _b.phone_prefix) || ''} ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}`];
        return (_d = localizedWords.entries.Lcz_GuestService_ContactUs) === null || _d === void 0 ? void 0 : _d.replace(/{(\d+)}/g, (match, number) => {
            return typeof values[number] !== 'undefined' ? values[number] : match;
        });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!this.booking) {
            return null;
        }
        const { cancel } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "booking-details-container text-sm" }, h("div", { class: "header" }, h("div", { class: "header-left" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.bl_routing.emit({ route: 'booking' });
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "header-title" }, localizedWords.entries.Lcz_MyBookings)), cancel && h("ir-button", { label: "Cancel Request", class: "cancel-button", onButtonClick: () => this.bookingCancelation.openDialog() })), h("h2", { class: "section-title" }, localizedWords.entries.Lcz_BookingReference, " ", this.booking.booking_nbr, " - ", app_store.property.name), h("section", { class: "detail-container" }, h("div", { class: "details-section" }, h("div", null, h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookedBy, ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckIn, ": ", h("span", null, format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckOut, ": ", h("span", null, format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_ArrivalTime, " ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, this.booking.remark)))), h("div", null, h("p", { class: "booking-info-text" }, "Address:", h("span", null, " ", this.renderLocation())), h("p", { class: "booking-info-text" }, "GPS:", h("span", null, ' ', "Latitude ", app_store.property.location.latitude, ", Longitude ", app_store.property.location.longitude)), h("p", { class: "booking-info-text" }, "Phone:", ' ', h("span", null, ' ', h("a", { class: "contact-link", href: `tel:${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}` }, ((_e = (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.country) === null || _e === void 0 ? void 0 : _e.phone_prefix) || '', " ", (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.phone))), this.renderPropertyEmail())), h("div", { class: "booking-details" }, h("div", { class: "booking-header" }, h("div", { class: "header-left" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-header-title" }, this.renderBookingDetailHeader())), h("p", null, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.tax_statement)), h("div", null, (_h = this.booking.rooms) === null || _h === void 0 ? void 0 : _h.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "room-header" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "room-price" }, formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_GuestName, ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_MealPlan, " ", h("span", null, room.rateplan.name)), h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee }))))))), h("section", { class: "hotel-policies" }, h("h2", { class: "section-title" }, "Hotel Policies"), h("ir-facilities", null)), h("section", { class: "payment-details" }, h("h2", { class: "section-title" }, "Payment Details"), h("div", { class: "detail-container" }, h("p", null, localizedWords.entries.Lcz_YourBookingIsGuaranteed), h("p", null, localizedWords.entries.Lcz_YourBookingIsNotGuaranteed))), h("section", { class: "guest-service" }, h("h2", { class: "section-title" }, "Guest Service"), h("p", { class: "detail-container", innerHTML: this.formatGuest() })), h("ir-booking-cancellation", { ref: el => (this.bookingCancelation = el), booking_nbr: (_j = this.booking) === null || _j === void 0 ? void 0 : _j.booking_nbr, cancellation: (_k = this.booking) === null || _k === void 0 ? void 0 : _k.rooms[0].rateplan.cancelation, onCancellationResult: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { state } = e.detail;
                if (state === 'success') {
                    this.booking = Object.assign(Object.assign({}, this.booking), { status: { code: '003', description: 'Cancelled' } });
                }
            } })));
    }
    static get is() { return "ir-booking-details-view"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-details-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-details-view.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Booking | null",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            }
        };
    }
    static get events() {
        return [{
                "method": "bl_routing",
                "name": "bl_routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\r\n    route: 'booking' | 'booking-details';\r\n    params?: unknown;\r\n  }",
                    "resolved": "{ route: \"booking\" | \"booking-details\"; params?: unknown; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-details-view.js.map
