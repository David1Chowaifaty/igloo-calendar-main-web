import { BookingListingService } from "../../../services/api/booking_listing.service";
import { CommonService } from "../../../services/api/common.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import { formatAmount, getUserPrefernce } from "../../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import axios from "axios";
import { differenceInCalendarDays, format, isBefore } from "date-fns";
export class IrBookingListing {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.isLoading = false;
        this.token = undefined;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        getUserPrefernce();
        if (this.token) {
            console.log('token');
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
            console.log(token);
            if (token) {
                app_store.app_data.token = token;
            }
            // this.initializeServices();
            // this.initializeApp();
        }
    }
    initializeServices() {
        this.bookingListingService.setToken(this.token);
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            await Promise.all([
                this.propertyService.getExposedProperty({
                    id: this.propertyid,
                    language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                    aname: '',
                    perma_link: '',
                }),
                this.getBookings(),
                this.commonService.getExposedLanguage(),
            ]);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getBookings() {
        const start_row = this.currentPage === 1 ? 0 : this.currentPage * this.maxPages;
        const end_row = start_row + this.maxPages;
        const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({ property_id: this.propertyid, start_row, end_row, total_count: 0 });
        this.bookings = bookings;
        this.total_count = total_count;
        return bookings;
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { token, state } = e.detail;
        console.log(token, state);
        if (state === 'success') {
            this.token = token;
            this.initializeServices();
            this.initializeApp();
        }
    }
    getBadgeVariant(code) {
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentPage = e.detail;
        this.getBookings();
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false, onAuthFinish: this.handleAuthFinish.bind(this) })))));
        }
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, this.headerShown && h("ir-nav", { isBookingListing: true, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo }), h("main", { class: 'p-4' }, h("div", { class: "ir-table-container mx-auto hidden max-w-6xl overflow-x-hidden shadow-md md:block" }, h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, h("h2", { class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings")), h("div", { class: "max-w-full overflow-x-auto " }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head" }, "Status"), h("th", { class: "ir-table-head" }, "Booking reference"), h("th", { class: "ir-table-head" }, "Booking date"), h("th", { class: "ir-table-head" }, "Check-in"), h("th", { class: "ir-table-head" }, "Duration"), h("th", { class: "ir-table-head" }, "Total price"), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", { class: "ir-table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell" }, booking.booking_nbr), h("td", { class: "ir-table-cell" }, format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), h("td", { class: "ir-table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "ir-table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell" }, h("ir-menu", { data: [
                    { id: 1, item: 'Cancel Booking' },
                    { id: 2, item: 'Pay $50 to guarentee' },
                ] }, h("ir-button", { slot: "menu-trigger", variants: "icon", iconHeight: 16, iconWidth: 16, removeIconClassName: true, iconName: "elipse_vertical" })))));
        })))), h("div", { class: "px-[20px] py-[16px] " }, h("ir-pagination", { total: totalPages, current: this.currentPage }))), h("section", { class: 'space-y-4 md:hidden' }, h("h2", { class: "pb-2 text-lg font-semibold leading-none tracking-tight" }, "Bookings"), (_e = this.bookings) === null || _e === void 0 ? void 0 :
            _e.map(booking => {
                const totalNights = differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
                return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: booking.booking_nbr }, h("ir-menu", { class: "absolute right-2 top-2", data: [
                        { id: 1, item: 'Cancel Booking' },
                        { id: 2, item: 'Pay $50 to guarentee' },
                    ] }, h("ir-button", { slot: "menu-trigger", variants: "icon", iconHeight: 16, iconWidth: 16, removeIconClassName: true, iconName: "elipse_vertical" })), h("div", { class: "flex items-center justify-between text-base" }, h("h3", { class: " font-semibold leading-none tracking-tight" }, "Booking number: #", booking.booking_nbr), h("p", null, formatAmount(booking.total, booking.currency.code))), h("p", null, h("span", { class: "font-medium" }, "Booked on: "), format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("p", null, h("span", { class: "font-medium" }, "Check-in: "), format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), h("p", null, h("span", { class: "font-medium" }, "Duration: "), totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("p", { class: "flex items-center" }, h("span", { class: "font-medium" }, "Status: "), h("ir-badge", { backgroundShown: false, label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("div", { class: "mt-2.5 flex items-center justify-end gap-4" }, isBefore(new Date(), new Date(booking.from_date)) && (h(Fragment, null, h("ir-button", { variants: "outline", label: "Cancel Booking" }), h("ir-button", { label: "Pay $40 to guarentee" }))))));
            }), h("ir-pagination", { total: totalPages, current: this.currentPage }))), this.footerShown && h("ir-footer", null)));
    }
    static get is() { return "ir-booking-listing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false
            },
            "headerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "header-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "footerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "footer-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "maxPages": {
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
                "attribute": "max-pages",
                "reflect": false,
                "defaultValue": "10"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {},
            "bookings": {},
            "currentPage": {},
            "total_count": {}
        };
    }
    static get listeners() {
        return [{
                "name": "pageChange",
                "method": "handlePageChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
