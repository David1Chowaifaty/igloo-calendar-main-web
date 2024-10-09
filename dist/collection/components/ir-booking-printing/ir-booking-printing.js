import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { _formatTime } from "../ir-booking-details/functions";
import { calculateDaysBetweenDates } from "../../utils/booking";
import BeLogoFooter from "../../assets/be_logo_footer";
import { BookingService } from "../../services/booking.service";
import { RoomService } from "../../services/room.service";
import axios from "axios";
import locales from "../../stores/locales.store";
import { formatAmount } from "../../utils/utils";
export class IrBookingPrinting {
    constructor() {
        // @State() token: string;
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.token = '';
        this.bookingNumber = '';
        this.baseurl = 'https://gateway.igloorooms.com/IR';
        this.language = 'en';
        this.propertyid = undefined;
        this.mode = 'default';
        this.countries = undefined;
        this.booking = undefined;
        this.property = undefined;
        this.guestCountryName = undefined;
        this.isLoading = undefined;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
        document.body.style.background = 'white';
        if (this.token) {
            this.init();
        }
    }
    async ticketChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.init();
        }
    }
    applyTokenToServices() {
        this.bookingService.setToken(this.token);
        this.roomService.setToken(this.token);
    }
    init() {
        this.applyTokenToServices();
        this.initializeRequests();
    }
    async initializeRequests() {
        var _a, _b;
        try {
            this.isLoading = true;
            // if (!this.bookingNumber) {
            //   throw new Error('Missing booking number');
            // }
            let countries;
            const [property, languageTexts, booking, fetchedCountries] = await Promise.all([
                this.roomService.fetchData(this.propertyid, this.language),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getCountries(this.language),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.property = property['My_Result'];
            // this.booking = booking;
            countries = fetchedCountries;
            this.booking = booking;
            this.setUserCountry(countries, this.booking.guest.country_id);
            this.currency = this.booking.currency.symbol;
            this.totalPersons = ((_a = this.booking) === null || _a === void 0 ? void 0 : _a.occupancy.adult_nbr) + ((_b = this.booking) === null || _b === void 0 ? void 0 : _b.occupancy.children_nbr);
            this.totalNights = calculateDaysBetweenDates(this.booking.from_date, this.booking.to_date);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    formatGuestName({ first_name, last_name }) {
        if (!last_name) {
            return first_name;
        }
        return `${first_name} ${last_name}`;
    }
    formatPhoneNumber({ mobile, country_phone_prefix }, is_direct) {
        if (!is_direct) {
            return mobile;
        }
        if (!country_phone_prefix) {
            return mobile;
        }
        return `+${country_phone_prefix.replace('+', '')}-${mobile}`;
    }
    formatBookingDates(date) {
        return moment(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    setUserCountry(countries, country_id) {
        const country = countries.find(country => country.id === country_id);
        this.guestCountryName = country === null || country === void 0 ? void 0 : country.name;
    }
    formatDate(date) {
        const dayMonth = date.format('DD/MM');
        let dayOfWeekAbbr = date.format('ddd');
        if (['Thu', 'Sun', 'Sat'].includes(dayOfWeekAbbr)) {
            dayOfWeekAbbr = dayOfWeekAbbr.slice(0, 2);
        }
        else {
            dayOfWeekAbbr = dayOfWeekAbbr.charAt(0);
        }
        return `${dayMonth} ${dayOfWeekAbbr}`;
    }
    renderBookingDetails() {
        return (h(Fragment, null, h("p", { class: "booking-number" }, "Booking#", this.booking.booking_nbr), h("div", { class: 'reservation-details' }, h("p", { class: "booked_on_date" }, moment(this.booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), ' ', _formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString()), " |"), h("img", { src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }))));
    }
    renderPrintingHeader() {
        var _a, _b, _c, _d;
        if (this.mode === 'invoice') {
            return (h(Fragment, null, h("div", null, h("p", null, "Address:", h("span", null, " ", (_a = this.property) === null || _a === void 0 ? void 0 :
                _a.address)), h("p", null, "Phone:", h("span", null, ' ', "+", ((_c = (_b = this.property) === null || _b === void 0 ? void 0 : _b.country) === null || _c === void 0 ? void 0 : _c.phone_prefix.replace('+', '')) + '-' || '', (_d = this.property) === null || _d === void 0 ? void 0 :
                _d.phone)), h("p", null, "Tax ID:", h("span", null, this.property.tax_nbr)), h("p", { class: "property_name" }, this.property.name)), h("div", null, this.renderBookingDetails(), h("p", { class: 'invoice_reference' }, "Invoice Reference:", this.booking.financial.invoice_nbr))));
        }
        return (h(Fragment, null, h("div", null, h(BeLogoFooter, { width: 120, height: 30 }), h("p", { class: "property_name" }, this.property.name)), h("div", null, this.renderBookingDetails())));
    }
    getTaxAmount(room) {
        var _a, _b;
        if (!this.booking.is_direct) {
            const filtered_data = room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map((d, index) => {
                return (h(Fragment, null, h("p", { class: "label-title" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", null, d.currency.symbol, d.amount), index < filtered_data.length - 1 && h("span", null, "-")));
            });
        }
        const filtered_data = (_b = (_a = this.property) === null || _a === void 0 ? void 0 : _a.taxes) === null || _b === void 0 ? void 0 : _b.filter(tx => tx.pct > 0);
        return filtered_data === null || filtered_data === void 0 ? void 0 : filtered_data.map((d, index) => {
            const amount = (room.total * d.pct) / 100;
            return (h(Fragment, null, h("p", { class: "label-title" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", null, d.pct, "%: ", formatAmount(this.currency, amount)), index < filtered_data.length - 1 && h("span", null, "-")));
        });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (this.isLoading || (!this.isLoading && (!this.booking || !this.property))) {
            return null;
        }
        console.log(this.booking.pickup_info);
        return (h("div", { class: "main-container" }, h("section", { class: "header" }, this.renderPrintingHeader()), h("section", null, h("section", { class: "booking-details" }, h("p", { class: "label-title" }, "Booked by:", h("span", { class: "label-value" }, this.formatGuestName((_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest), " - ", this.totalPersons, " ", this.totalPersons > 1 ? 'persons' : 'person')), h("p", { class: "label-title" }, "Phone:", h("span", { class: "label-value" }, this.formatPhoneNumber((_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest, (_c = this.booking) === null || _c === void 0 ? void 0 : _c.is_direct))), h("p", { class: "label-title" }, "Email:", h("span", { class: "label-value" }, (_e = (_d = this.booking) === null || _d === void 0 ? void 0 : _d.guest) === null || _e === void 0 ? void 0 : _e.email)), this.guestCountryName && (h("p", { class: "label-title" }, "Country:", h("span", { class: "label-value" }, this.guestCountryName))), this.booking.guest.city && (h("p", { class: "label-title" }, "City:", h("span", { class: "label-value" }, (_g = (_f = this.booking) === null || _f === void 0 ? void 0 : _f.guest) === null || _g === void 0 ? void 0 : _g.city))), h("p", { class: "label-title" }, "Arrival Time:", h("span", { class: "label-value" }, (_j = (_h = this.booking) === null || _h === void 0 ? void 0 : _h.arrival) === null || _j === void 0 ? void 0 : _j.description))), h("section", null, h("div", { class: "accommodation-summary" }, h("p", { class: "accommodation-title" }, "ACCOMMODATION"), h("p", { class: "booking-dates" }, this.formatBookingDates((_k = this.booking) === null || _k === void 0 ? void 0 : _k.from_date)), h("p", { class: "booking-dates" }, this.formatBookingDates((_l = this.booking) === null || _l === void 0 ? void 0 : _l.to_date)), h("p", { class: "number-of-nights" }, this.totalNights, " ", this.totalNights === 1 ? 'night' : 'nights'), h("p", { class: "vat-exclusion" }, h("i", null, this.property.tax_statement))), h("div", null, (_o = (_m = this.booking) === null || _m === void 0 ? void 0 : _m.rooms) === null || _o === void 0 ? void 0 : _o.map(room => {
            var _a;
            return (h(Fragment, null, h("table", null, h("tr", { class: 'roomtype-title' }, h("td", null, room.roomtype.name), h("td", null, room.rateplan.name)), h("tr", null, h("td", { colSpan: 12 }, h("p", { class: "label-title" }, "Guest name:", h("span", { class: "label-value" }, this.formatGuestName(room === null || room === void 0 ? void 0 : room.guest)))))), h("div", { class: "policies-container" }, h("p", { class: "policies", innerHTML: room.rateplan.cancelation }), h("p", { class: "policies", innerHTML: room.rateplan.guarantee })), h("div", { class: "pricing-summary" }, h("div", { class: 'pricing-breakdown' }, h("p", { class: "label-title" }, "Total:", h("span", { class: "label-value" }, formatAmount(this.currency, room.total))), h("span", null, "-"), this.getTaxAmount(room)), h("p", { class: "label-title" }, "Grand total:", h("span", { class: "label-value" }, formatAmount(this.currency, room.gross_total))), h("p", { class: "label-title" }, "Due upon booking:", h("span", { class: "label-value" }, formatAmount(this.currency, room.gross_guarantee)))), h("div", { class: 'room_amount_main_container' }, (_a = room.days) === null || _a === void 0 ? void 0 : _a.map(d => (h("div", { class: 'room_amount_container' }, h("p", { class: "room_amount date" }, this.formatDate(moment(d.date, 'YYYY-MM-DD'))), h("p", { class: "room_amount amount" }, formatAmount(this.currency, d.amount))))))));
        })))), this.booking.pickup_info && (h("section", { class: "pickup-container" }, h("p", { class: "pickup_title" }, "PICKUP Yes,from ", this.booking.pickup_info.selected_option.location.description), h("div", { class: 'pickup-details' }, h("p", { class: "label-title" }, "Arrival date:", h("span", { class: "label-value" }, moment((_p = this.booking) === null || _p === void 0 ? void 0 : _p.pickup_info.date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))), h("p", { class: "label-title" }, "Time:", h("span", { class: "label-value" }, _formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString()))), h("p", { class: "label-title" }, "Fight details:", h("span", { class: "label-value" }, (_q = this.booking) === null || _q === void 0 ? void 0 : _q.pickup_info.details)), h("p", { class: "car_name" }, this.booking.pickup_info.selected_option.vehicle.description, h("span", null, " - "), formatAmount(this.booking.pickup_info.selected_option.currency.code, this.booking.pickup_info.selected_option.amount)), h("p", { class: "label-title" }, "No. of Vehicles:", h("span", { class: "label-value" }, (_r = this.booking) === null || _r === void 0 ? void 0 : _r.pickup_info.nbr_of_units)), h("p", { class: "label-title" }, "Due upon booking:", h("span", { class: "label-value" }, formatAmount(this.booking.pickup_info.currency.code, (_s = this.booking) === null || _s === void 0 ? void 0 : _s.pickup_info.total)))))), ((_t = this.booking.financial) === null || _t === void 0 ? void 0 : _t.payments) && (h("section", null, h("table", { class: "billing_table" }, h("caption", null, "Billing"), h("thead", null, h("th", { class: "billing_header" }, "Date"), h("th", { class: "billing_header" }, "Amount"), h("th", { class: "billing_header" }, "Designation")), h("tbody", null, (_v = (_u = this.booking.financial) === null || _u === void 0 ? void 0 : _u.payments) === null || _v === void 0 ? void 0 : _v.map(p => (h(Fragment, null, h("tr", { key: p.id }, h("td", { class: "billing_cell" }, moment(p.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("td", { class: "billing_cell" }, formatAmount(p.currency.code, p.amount)), h("td", { class: "billing_cell" }, p.designation || '_')), p.reference && (h("tr", null, h("td", { colSpan: 3 }, "Ref:", p.reference))))))))))));
    }
    static get is() { return "ir-booking-printing"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-printing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-printing.css"]
        };
    }
    static get properties() {
        return {
            "token": {
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
                "attribute": "token",
                "reflect": false,
                "defaultValue": "''"
            },
            "bookingNumber": {
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
                "attribute": "booking-number",
                "reflect": false,
                "defaultValue": "''"
            },
            "baseurl": {
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
                "attribute": "baseurl",
                "reflect": false,
                "defaultValue": "'https://gateway.igloorooms.com/IR'"
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
            "propertyid": {
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
                "attribute": "propertyid",
                "reflect": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'invoice' | 'default'",
                    "resolved": "\"default\" | \"invoice\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "countries": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "countries",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "booking": {},
            "property": {},
            "guestCountryName": {},
            "isLoading": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "token",
                "methodName": "ticketChanged"
            }];
    }
}
//# sourceMappingURL=ir-booking-printing.js.map
