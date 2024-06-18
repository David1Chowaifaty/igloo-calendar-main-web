import { BookingListingService } from "../../../services/api/booking_listing.service";
import { CommonService } from "../../../services/api/common.service";
import { PropertyService } from "../../../services/api/property.service";
import { BookingListingAppService } from "../../../services/app/booking-listing.service";
import app_store from "../../../stores/app.store";
import { formatAmount, getUserPrefernce } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingListing {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.bookingListingAppService = new BookingListingAppService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.perma_link = null;
        this.aName = null;
        this.isLoading = false;
        this.token = undefined;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
        this.bookingNumber = null;
        this.page_mode = 'multi';
        this.activeLink = 'single_booking';
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        getUserPrefernce();
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.bookingNumber = isAuthenticated.params ? isAuthenticated.params.booking_nbr : null;
            this.token = isAuthenticated.token;
            this.page_mode = isAuthenticated.params ? 'single' : 'multi';
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
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
            let requests = [
                this.propertyService.getExposedProperty({
                    id: this.propertyid,
                    language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                    aname: this.aName,
                    perma_link: this.perma_link,
                }),
                this.commonService.getExposedLanguage(),
                this.propertyService.getExposedGuest(),
            ];
            if (this.bookingNumber && this.page_mode === 'single') {
                requests.unshift(this.propertyService.getExposedBooking({ booking_nbr: this.bookingNumber, language: this.language }, false));
            }
            else if (this.page_mode === 'multi') {
                requests.unshift(this.getBookings());
            }
            const [bookings] = await Promise.all(requests);
            this.booking = this.page_mode === 'single' ? bookings : undefined;
            this.bookings = this.page_mode === 'single' ? [bookings] : bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getBookings() {
        try {
            this.isLoading = true;
            const start_row = this.currentPage === 1 ? 0 : this.currentPage * this.maxPages;
            const end_row = start_row + this.maxPages;
            const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({ property_id: this.propertyid, start_row, end_row, total_count: 0 });
            this.total_count = total_count;
            return bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { token, state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.bookingNumber = payload.booking_nbr;
            }
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
        this.bookings = await this.getBookings();
    }
    async handleLinkChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeLink = e.detail;
        if (this.activeLink === 'all_booking') {
            this.page_mode = 'multi';
            this.bookings = await this.getBookings();
        }
        else {
            if (this.booking) {
                this.page_mode = 'single';
                this.bookings = [this.booking];
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false })))));
        }
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, h("main", { class: 'flex min-h-screen flex-col gap-4 md:px-4 lg:px-6 xl:px-0' }, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("div", { class: "ir-table-container mx-auto hidden max-w-6xl flex-1 overflow-x-hidden px-4  shadow-md md:block" }, h("ir-booking-header", { bookingNumber: this.bookingNumber, activeLink: this.activeLink, mode: this.bookingNumber ? 'multi' : 'single' }), h("div", { class: "max-w-full overflow-x-auto" }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head" }, "Status"), h("th", { class: "ir-table-head" }, "Booking reference"), h("th", { class: "ir-table-head md:hidden lg:table-cell" }, "Booking date"), h("th", { class: "ir-table-head" }, "Check-in"), h("th", { class: "ir-table-head" }, "Duration"), h("th", { class: "ir-table-head" }, "Total price"), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            const { cancel, payment } = this.bookingListingAppService.getBookingActions(booking);
            return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", { class: "ir-table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell" }, booking.booking_nbr), h("td", { class: "ir-table-cell md:hidden lg:table-cell" }, format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, format(new Date(booking.from_date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "ir-table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell" }, (payment || cancel) && (h("div", { class: "flex items-center justify-end gap-2.5" }, cancel && h("ir-button", { class: "w-full", variants: "outline", label: "Cancel" }), payment && h("ir-button", { label: `Pay ${formatAmount(booking.financial.due_amount || 0, booking.currency.code)} to guarentee` }))))));
        })))), this.page_mode === 'multi' && (h("div", { class: "px-[20px] py-[16px] " }, h("ir-pagination", { total: totalPages, current: this.currentPage })))), h("section", { class: 'flex-1 space-y-4 px-4 md:hidden' }, h("ir-booking-header", { bookingNumber: this.bookingNumber, mode: this.bookingNumber ? 'multi' : 'single' }), (_e = this.bookings) === null || _e === void 0 ? void 0 :
            _e.map(booking => h("ir-booking-card", { booking: booking, key: booking.booking_nbr })), this.page_mode === 'multi' && h("ir-pagination", { total: totalPages, current: this.currentPage })), this.footerShown && h("ir-footer", null))));
    }
    static get is() { return "ir-booking-listing"; }
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
            },
            "perma_link": {
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
                "attribute": "perma_link",
                "reflect": false,
                "defaultValue": "null"
            },
            "aName": {
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
                "attribute": "a-name",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {},
            "bookings": {},
            "currentPage": {},
            "total_count": {},
            "bookingNumber": {},
            "page_mode": {},
            "activeLink": {}
        };
    }
    static get listeners() {
        return [{
                "name": "authFinish",
                "method": "handleAuthFinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "pageChange",
                "method": "handlePageChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "linkChanged",
                "method": "handleLinkChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
