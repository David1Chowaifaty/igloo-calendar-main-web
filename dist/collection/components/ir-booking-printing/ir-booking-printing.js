import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { _formatTime } from "../ir-booking-details/functions";
import { calculateDaysBetweenDates } from "../../utils/booking";
import BeLogoFooter from "../../assets/be_logo_footer";
import { BookingService } from "../../services/booking.service";
import { RoomService } from "../../services/room.service";
import locales from "../../stores/locales.store";
import { formatAmount } from "../../utils/utils";
export class IrBookingPrinting {
    token = '';
    bookingNumber = '';
    language = 'en';
    propertyid;
    mode = 'default';
    countries;
    booking;
    property;
    guestCountryName;
    isLoading;
    // @State() token: string;
    bookingService = new BookingService();
    roomService = new RoomService();
    currency;
    totalNights;
    totalPersons;
    componentWillLoad() {
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
    init() {
        this.initializeRequests();
    }
    async initializeRequests() {
        try {
            this.isLoading = true;
            // if (!this.bookingNumber) {
            //   throw new Error('Missing booking number');
            // }
            let countries;
            const [property, languageTexts, booking, fetchedCountries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: this.language, is_backend: true }),
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
            this.totalPersons = this.booking?.occupancy.adult_nbr + this.booking?.occupancy.children_nbr;
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
        this.guestCountryName = country?.name;
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
        if (this.mode === 'invoice') {
            return (h(Fragment, null, h("div", null, h("p", null, "Address:", h("span", null, " ", this.property?.address)), h("p", null, "Phone:", h("span", null, ' ', "+", this.property?.country?.phone_prefix.replace('+', '') + '-' || '', this.property?.phone)), h("p", null, "Tax ID:", h("span", null, this.property.tax_nbr)), h("p", { class: "property_name" }, this.property.name)), h("div", null, this.renderBookingDetails(), h("p", { class: 'invoice_reference' }, "Invoice Reference:", this.booking.financial.invoice_nbr))));
        }
        return (h(Fragment, null, h("div", null, h(BeLogoFooter, { width: 120, height: 30 }), h("p", { class: "property_name" }, this.property.name)), h("div", null, this.renderBookingDetails())));
    }
    getTaxAmount(room) {
        if (!this.booking.is_direct) {
            const filtered_data = room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map((d, index) => {
                return (h(Fragment, null, h("p", { class: "label-title" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", null, d.currency.symbol, d.amount), index < filtered_data.length - 1 && h("span", null, "-")));
            });
        }
        const filtered_data = this.property?.taxes?.filter(tx => tx.pct > 0);
        return filtered_data?.map((d, index) => {
            const amount = (room.total * d.pct) / 100;
            return (h(Fragment, null, h("p", { class: "label-title" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", null, d.pct, "%: ", formatAmount(this.currency, amount)), index < filtered_data.length - 1 && h("span", null, "-")));
        });
    }
    render() {
        if (this.isLoading || (!this.isLoading && (!this.booking || !this.property))) {
            return null;
        }
        console.log(this.booking.pickup_info);
        return (h("div", { class: "main-container" }, h("section", { class: "header" }, this.renderPrintingHeader()), h("section", null, h("section", { class: "booking-details" }, h("p", { class: "label-title" }, "Booked by:", h("span", { class: "label-value" }, this.formatGuestName(this.booking?.guest), " - ", this.totalPersons, " ", this.totalPersons > 1 ? 'persons' : 'person')), h("p", { class: "label-title" }, "Phone:", h("span", { class: "label-value" }, this.formatPhoneNumber(this.booking?.guest, this.booking?.is_direct))), h("p", { class: "label-title" }, "Email:", h("span", { class: "label-value" }, this.booking?.guest?.email)), this.guestCountryName && (h("p", { class: "label-title" }, "Country:", h("span", { class: "label-value" }, this.guestCountryName))), this.booking.guest.city && (h("p", { class: "label-title" }, "City:", h("span", { class: "label-value" }, this.booking?.guest?.city))), h("p", { class: "label-title" }, "Arrival Time:", h("span", { class: "label-value" }, this.booking?.arrival?.description))), h("section", null, h("div", { class: "accommodation-summary" }, h("p", { class: "accommodation-title" }, "ACCOMMODATION"), h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.from_date)), h("p", { class: "booking-dates" }, this.formatBookingDates(this.booking?.to_date)), h("p", { class: "number-of-nights" }, this.totalNights, " ", this.totalNights === 1 ? 'night' : 'nights'), h("p", { class: "vat-exclusion" }, h("i", null, this.property.tax_statement))), h("div", null, this.booking?.rooms?.map(room => (h(Fragment, null, h("table", null, h("tr", { class: 'roomtype-title' }, h("td", null, room.roomtype.name), h("td", null, room.rateplan.name)), h("tr", null, h("td", { colSpan: 12 }, h("p", { class: "label-title" }, "Guest name:", h("span", { class: "label-value" }, this.formatGuestName(room?.guest)))))), h("div", { class: "policies-container" }, h("p", { class: "policies", innerHTML: room.rateplan.cancelation }), h("p", { class: "policies", innerHTML: room.rateplan.guarantee })), h("div", { class: "pricing-summary" }, h("div", { class: 'pricing-breakdown' }, h("p", { class: "label-title" }, "Total:", h("span", { class: "label-value" }, formatAmount(this.currency, room.total))), h("span", null, "-"), this.getTaxAmount(room)), h("p", { class: "label-title" }, "Grand total:", h("span", { class: "label-value" }, formatAmount(this.currency, room.gross_total))), h("p", { class: "label-title" }, "Due upon booking:", h("span", { class: "label-value" }, formatAmount(this.currency, room.gross_guarantee)))), h("div", { class: 'room_amount_main_container' }, room.days?.map(d => (h("div", { class: 'room_amount_container' }, h("p", { class: "room_amount date" }, this.formatDate(moment(d.date, 'YYYY-MM-DD'))), h("p", { class: "room_amount amount" }, formatAmount(this.currency, d.amount)))))))))))), this.booking.pickup_info && (h("section", { class: "pickup-container" }, h("p", { class: "pickup_title" }, "PICKUP Yes,from ", this.booking.pickup_info.selected_option.location.description), h("div", { class: 'pickup-details' }, h("p", { class: "label-title" }, "Arrival date:", h("span", { class: "label-value" }, moment(this.booking?.pickup_info.date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))), h("p", { class: "label-title" }, "Time:", h("span", { class: "label-value" }, _formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString()))), h("p", { class: "label-title" }, "Fight details:", h("span", { class: "label-value" }, this.booking?.pickup_info.details)), h("p", { class: "car_name" }, this.booking.pickup_info.selected_option.vehicle.description, h("span", null, " - "), formatAmount(this.booking.pickup_info.selected_option.currency.code, this.booking.pickup_info.selected_option.amount)), h("p", { class: "label-title" }, "No. of Vehicles:", h("span", { class: "label-value" }, this.booking?.pickup_info.nbr_of_units)), h("p", { class: "label-title" }, "Due upon booking:", h("span", { class: "label-value" }, formatAmount(this.booking.pickup_info.currency.code, this.booking?.pickup_info.total)))))), this.booking.financial?.payments && (h("section", null, h("table", { class: "billing_table" }, h("caption", null, "Billing"), h("thead", null, h("th", { class: "billing_header" }, "Date"), h("th", { class: "billing_header" }, "Amount"), h("th", { class: "billing_header" }, "Designation")), h("tbody", null, this.booking.financial?.payments?.map(p => (h(Fragment, null, h("tr", { key: p.id }, h("td", { class: "billing_cell" }, moment(p.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), h("td", { class: "billing_cell" }, formatAmount(p.currency.code, p.amount)), h("td", { class: "billing_cell" }, p.designation || '_')), p.reference && (h("tr", null, h("td", { colSpan: 3 }, "Ref:", p.reference))))))))))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "booking-number",
                "reflect": false,
                "defaultValue": "''"
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
