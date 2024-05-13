import { BookingListingService } from "../../../services/api/booking_listing.service";
import { CommonService } from "../../../services/api/common.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import { formatAmount } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import axios from "axios";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingListing {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.isLoading = false;
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTY0NzAzMjYsIkNMQUlNLTAxIjoiZE1TL0hDV21NdW89IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThITHBnTWQvOWV5aSJ9.9hKPGjcvmTuRMAOE8BmXUY1NT3DDqSYDKgEokUV2N6U';
        this.bookings = [];
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        if (this.token) {
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                app_store.app_data.token = token;
            }
        }
    }
    initializeServices() {
        this.bookingListingService.setToken(this.token);
        this.propertyService.setToken(this.token);
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            const [bookings] = await Promise.all([
                this.bookingListingService.getExposedGuestToken(this.propertyid),
                this.propertyService.getExposedProperty({ id: this.propertyid, language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en' }),
            ]);
            this.bookings = bookings;
            console.log(this.bookings);
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
    render() {
        var _a, _b, _c, _d;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false, onAuthFinish: this.handleAuthFinish.bind(this) })))));
        }
        return (h(Host, null, this.headerShown && h("ir-nav", { isBookingListing: true, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo }), h("main", { class: ' p-4' }, h("div", { class: "table-container mx-auto max-w-6xl overflow-x-hidden shadow-md" }, h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, h("h3", null, "Bookings")), h("div", { class: "max-w-full overflow-x-auto " }, h("table", { class: "table" }, h("thead", null, h("tr", { class: "table-header" }, h("th", { class: "table-head" }, "Status"), h("th", { class: "table-head" }, "Booking reference"), h("th", { class: "table-head" }, "Booking date"), h("th", { class: "table-head" }, "Check-in"), h("th", { class: "table-head" }, "Duration"), h("th", { class: "table-head" }, "Total price"), h("th", { class: "table-head sr-only" }, "pay now"))), h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            return (h("tr", { class: "table-row", key: booking.booking_nbr }, h("td", { class: "table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "table-cell" }, booking.booking_nbr), h("td", { class: "table-cell" }, format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "table-cell" }, format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), h("td", { class: "table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "table-cell" })));
        })))))), this.footerShown && h("ir-footer", null)));
    }
    static get is() { return "ir-booking-listing"; }
    static get encapsulation() { return "shadow"; }
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
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {},
            "bookings": {}
        };
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
