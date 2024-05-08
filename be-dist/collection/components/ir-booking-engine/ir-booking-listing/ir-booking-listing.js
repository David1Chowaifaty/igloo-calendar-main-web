import { BookingListingService } from "../../../services/api/booking_listing.service";
import booking_listing from "../../../stores/booking_listing.store";
import { Host, h } from "@stencil/core";
export class IrBookingListing {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.propertid = undefined;
        this.isLoading = false;
        this.token = undefined;
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            // await Promise.all([this.bookingListingService.getExposedBookingsCriteria(this.propertyid), this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT'])]);
            await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false }));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.token) {
            return (h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false }))));
        }
        return (h(Host, null, h("div", { class: 'p-4' }, h("div", { class: "table-container overflow-x-hidden shadow-md" }, h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, h("h3", null, "Bookings"), h("input", { type: "text", placeholder: "Search...", class: "w-full max-w-sm rounded-md border border-solid border-gray-300 px-4 py-1.5 " })), h("div", { class: "max-w-full overflow-x-auto " }, h("table", { class: "table" }, h("thead", null, h("tr", { class: "table-header" }, h("th", { class: "table-head" }, "Status"), h("th", { class: "table-head" }, "Booking reference"), h("th", { class: "table-head" }, "Booking date"), h("th", { class: "table-head" }, "Check-in"), h("th", { class: "table-head" }, "Duration"), h("th", { class: "table-head" }, "Total price"), h("th", { class: "table-head sr-only" }, "pay now"))), h("tbody", null, [...new Array(10)].map((_, i) => (h("tr", { class: "table-row" }, h("td", { class: "table-cell" }, h("ir-badge", { label: "Pending", variant: "pending" })), h("td", { class: "table-cell" }, i), h("td", { class: "table-cell" }, "Name ", i), h("td", { class: "table-cell" }, "email", i, "@example.com"), h("td", { class: "table-cell" }, "City ", i), h("td", { class: "table-cell" }, "Country ", i), h("td", { class: "table-cell" }, "Zip", i))))))), h("div", { class: "flex items-center justify-between px-[20px] py-[16px] " }, h("ir-button", { variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("ir-button", { variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { name: "arrow_right", slot: "right-icon", svgClassName: "size-3" })))))));
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
            "propertid": {
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
                "attribute": "propertid",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "token": {}
        };
    }
}
//# sourceMappingURL=ir-booking-listing.js.map
