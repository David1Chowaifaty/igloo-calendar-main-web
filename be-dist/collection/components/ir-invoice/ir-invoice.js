import { Host, h } from "@stencil/core";
import { format } from "date-fns";
import { formatAmount, getDateDifference } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { PropertyService } from "../../services/api/property.service";
import { CommonService } from "../../services/api/common.service";
import axios from "axios";
import { AuthService } from "../../services/api/auth.service";
export class IrInvoice {
    constructor() {
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.authService = new AuthService();
        this.email = undefined;
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.language = 'en';
        this.bookingNbr = undefined;
        this.status = 1;
        this.booking = undefined;
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTgxNzk5NzYsIkNMQUlNLTAxIjoiOGJpaUdjK21FQVE9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoicUxHWllZcVA3SzB5aENrRTFaY0tENm5TeFowNkEvQ2lPc1JrWUpYTHFhTEF5M3N0akltbU9CWkdDb080dDRyNVRiWjkxYnZQelFIQ2c1YlBGU2J3cm5HdjNsNjVVcjVLT3RnMmZQVWFnNHNEYmE3WTJkMDF4RGpDWUs2SFlGREhkcTFYTzBLdTVtd0NKeU5rWDFSeWZmSnhJdWdtZFBUeTZPWjk0RUVjYTJleWVSVzZFa0pYMnhCZzFNdnJ3aFRKRHF1cUxzaUxvZ3I0UFU5Y2x0MjdnQ2tJZlJzZ2lZbnpOK2szclZnTUdsQTUvWjRHekJWcHl3a0dqcWlpa0M5T0owWFUrdWJJM1dzNmNvSWEwSks4SWRqVjVaQ1VaZjZ1OGhBMytCUlpsUWlyWmFZVWZlVmpzU1FETFNwWFowYjVQY0FncE1EWVpmRGtWbGFscjRzZ1pRNVkwODkwcEp6dE16T0s2VTR5Z1FMQkdQbTlTSmRLY01rT01VdXVnc0xTOUVYdHMwekRnOFR6LzJxZlhLeXdBN0RvbjdBOUlzVnFIOHM5ZlQzMDRPYVh6amtGU3JrUHduWGtvVDZOMXpHVWRUQUpDTTNOek94S1d0eGEvZEVzMTJ4VHhtR2dtaFlWIiwiQ0xBSU0tMDUiOiIvZzFwTzBhWU1wS2h1RTlOVDYzc0JFS1lXS21nS0oySFI3anFRbjFNNzlyTnhDOE55N0FpeDNWcTJ5NFpOKzRUMXR4ZHFpZ0lXTHI2MXBJRTFGcjYweTVtcVMySmVlQjQ2Wm9JbVVvTkhRejFSeFNINis5NjM2RkxCMHRSTitSOU4zL1kxSTJuTURBOEQreU5MM1VMY0dnU3hnRjF0SHF1In0.9x2Xe2jBiovlMnQt0h4v_Lb7QS_KFw4ADUWNFsg8KhA';
    }
    componentWillLoad() {
        if (!this.baseUrl) {
            throw new Error('Missing base url');
        }
        axios.defaults.baseURL = this.baseUrl;
        axios.defaults.withCredentials = true;
        if (!this.token) {
            return;
        }
        this.init();
    }
    handleTokenChange() {
        this.init();
    }
    async handleBookingNumberChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.booking = await this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language });
        }
    }
    async init() {
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
        this.authService.setToken(this.token);
        await this.fetchData();
    }
    async fetchData() {
        this.token = await this.authService.login({ option: 'direct', params: { email: this.email, booking_nbr: this.bookingNbr } }, true);
        this.init();
        const [booking] = await Promise.all([
            this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language }),
            this.commonService.getExposedLanguage(),
            this.propertyService.getExposedProperty({ id: this.propertyId, language: this.language }),
        ]);
        this.booking = booking;
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        if (!this.booking) {
            return null;
        }
        return (h(Host, null, h("ir-interceptor", null), h("main", { class: "relative flex w-full flex-col space-y-5 " }, h("section", { class: "sticky top-0 z-50 w-full" }, h("ir-nav", { website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("section", { class: "flex-1 px-4 lg:px-6" }, h("div", { class: "mx-auto flex max-w-6xl gap-16" }, h("div", { class: "invoice-container" }, h("section", { class: "booking-info" }, h("p", { class: "booking-info-text" }, "Booking reference: ", h("span", null, this.booking.booking_nbr)), h("p", { class: "booking-info-text" }, "Booked by:", ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, "Check-in: ", h("span", null, format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_d = app_store.property) === null || _d === void 0 ? void 0 :
            _d.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, "Check-out: ", h("span", null, format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, "Arrival time: ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, this.booking.remark)))), h("section", { class: "booking-details space-y-2" }, h("div", { class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", null, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.tax_statement)), h("div", null, (_g = this.booking.rooms) === null || _g === void 0 ? void 0 : _g.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-500" }, " ", formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, "Guest name:", ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, "Meal plan:", ' ', h("span", null, room.rateplan.name)), h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee })))))), h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "credit_card" }), h("h3", null, "Payment details")), h("p", { class: "total-payment" }, "Total: ", h("span", { class: "text-green-500" }, formatAmount(this.booking.financial.gross_total, this.booking.currency.code)))), h("section", { class: "space-y-2" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger" }), h("h3", null, "Important information")), h("p", null, app_store.property.description.important_info)), h("section", { class: 'space-y-2' }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "car" }), h("p", null, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "pets" }), h("p", null, (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title)), h("div", { class: "flex items-center gap-4 " }, h("ir-icons", { name: "bed" }), h("p", null, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.baby_cot_offering.title)))), h("div", { class: "property_info sticky top-[20%]" }, ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.space_theme.background_image) && (h("div", { class: "aspect-[1/1] max-h-32 w-full lg:aspect-[16/9]" }, h("img", { class: "property_img h-full w-full object-cover", src: (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.space_theme.background_image, alt: "" }))), h("a", { class: "mapLink", target: "_blank", href: `http://maps.google.com/maps?q=${app_store.property.location.latitude},${app_store.property.location.longitude}` }, h("img", { src: `https://maps.googleapis.com/maps/api/staticmap?center=${((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.location.latitude) || 34.022},${((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.location.longitude) || 35.628}&zoom=15&size=1024x768&maptype=roadmap&markers=color:red%7Clabel:${app_store.property.name}%7C34.022,35.628&key=AIzaSyCrNcuQfXO55D0I5CLaWAx7U6pBCvru8rk`, loading: "lazy" })), h("div", { class: "contact-info" }, h("span", null, h("label", null, "Phone:")), h("a", { class: "contact-link", href: `tel:${(_r = app_store.property) === null || _r === void 0 ? void 0 : _r.phone}` }, ((_t = (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.country) === null || _t === void 0 ? void 0 : _t.phone_prefix) || '', " ", (_u = app_store.property) === null || _u === void 0 ? void 0 :
            _u.phone))))), h("ir-footer", null))));
    }
    static get is() { return "ir-invoice"; }
    static get encapsulation() { return "scoped"; }
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
    static get properties() {
        return {
            "email": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "email",
                "reflect": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property-id",
                "reflect": false
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "base-url",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "bookingNbr": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking-nbr",
                "reflect": false
            },
            "status": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "0 | 1",
                    "resolved": "0 | 1",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "status",
                "reflect": false,
                "defaultValue": "1"
            }
        };
    }
    static get states() {
        return {
            "booking": {},
            "token": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "token",
                "methodName": "handleTokenChange"
            }, {
                "propName": "bookingNbr",
                "methodName": "handleBookingNumberChange"
            }];
    }
}
//# sourceMappingURL=ir-invoice.js.map