import { Host, h } from "@stencil/core";
import { BookingListingService } from "../../../../services/api/booking_listing.service";
import { CommonService } from "../../../../services/api/common.service";
import { PropertyService } from "../../../../services/api/property.service";
import { BookingListingAppService } from "../../../../services/app/booking-listing.service";
import { cn, formatAmount } from "../../../../utils/utils";
import { differenceInCalendarDays, format } from "date-fns";
export class IrBookingOverview {
    constructor() {
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.bookingListingAppService = new BookingListingAppService();
        this.token = undefined;
        this.propertyid = undefined;
        this.language = undefined;
        this.maxPages = 10;
        this.showAllBookings = true;
        this.be = false;
        this.isLoading = false;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
        this.bookingNumber = null;
        this.page_mode = 'multi';
        this.activeLink = 'single_booking';
        this.selectedBooking = undefined;
        this.selectedMenuIds = {};
    }
    async componentWillLoad() {
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        this.initializeServices();
        this.initializeApp();
    }
    initializeServices() {
        this.bookingListingService.setToken(this.token);
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
        if (!this.showAllBookings) {
            this.page_mode = 'multi';
        }
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let requests = [];
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
            const start_row = (this.currentPage - 1) * this.maxPages;
            const end_row = start_row + this.maxPages;
            const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({ property_id: this.propertyid, start_row, end_row, total_count: 0 });
            this.total_count = total_count;
            const newIds = {};
            bookings.forEach(b => {
                newIds[b.booking_nbr] = 1;
            });
            this.selectedMenuIds = Object.assign({}, newIds);
            return bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    modifyCancelBooking(booking_nbr) {
        const bookings = [...this.bookings];
        const selectedBookingIdx = bookings.findIndex(b => b.booking_nbr === booking_nbr);
        if (selectedBookingIdx === -1) {
            return;
        }
        bookings[selectedBookingIdx] = Object.assign(Object.assign({}, bookings[selectedBookingIdx]), { status: {
                code: '003',
                description: 'Cancelled',
            } });
        this.bookings = [...bookings];
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
    handleBookingCancelation() {
        this.bookingCancelation.openDialog();
    }
    handleMenuItemChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const v = e.detail;
        this.handleBlEvents(v);
        this.selectedMenuIds[this.selectedBooking.booking_nbr] = v;
    }
    handleBlEvents(id) {
        switch (id) {
            case 1:
                return this.bl_routing.emit({ route: 'booking-details', params: { booking: this.selectedBooking } });
            case 2:
                return;
            case 3:
                return this.handleBookingCancelation();
            default:
                return null;
        }
    }
    renderMenuTrigger() {
        return (h("div", { slot: "menu-trigger", class: "ct-menu-trigger" }, ' ', h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
    }
    // private handlePayment() {
    // }
    render() {
        var _a, _b, _c, _d;
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, h("section", { class: `main-container ${!this.be ? 'main-container-padding' : ''}` }, h("div", { class: "ir-table-container mx-auto hidden max-w-6xl flex-1 overflow-x-hidden p-4 shadow-md md:block" }, this.showAllBookings && (h("ir-booking-header", { bookingNumber: this.bookingNumber, activeLink: this.activeLink, mode: this.bookingNumber ? 'multi' : 'single' })), h("div", { class: "max-w-full overflow-x-auto" }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head" }, "Status"), h("th", { class: "ir-table-head" }, "Booking reference"), h("th", { class: "ir-table-head md:hidden lg:table-cell" }, "Booking date"), h("th", { class: "ir-table-head" }, "Check-in"), h("th", { class: "ir-table-head" }, "Duration"), h("th", { class: "ir-table-head" }, "Total price"), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", { class: " " }, (_a = this.bookings) === null || _a === void 0 ? void 0 : _a.map(booking => {
            var _a;
            const totalNights = differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            const { cancel, payment, view } = this.bookingListingAppService.getBookingActions(booking);
            const menuItems = [];
            if (payment) {
                menuItems.push({ id: 2, item: `Pay ${formatAmount(booking.financial.due_amount || 0, booking.currency.code)} to guarentee` });
            }
            if (cancel) {
                menuItems.push({ id: 3, item: `Cancel booking` });
            }
            if (view) {
                menuItems.push({ id: 1, item: 'Booking details' });
            }
            return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", { class: "ir-table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell" }, booking.booking_nbr), h("td", { class: "ir-table-cell md:hidden lg:table-cell" }, format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, format(new Date(booking.from_date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "ir-table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell" }, payment || cancel ? (h("div", { class: 'ct-menu-container' }, h("button", { onClick: () => {
                    var _a;
                    this.selectedBooking = booking;
                    this.handleBlEvents((_a = this.selectedMenuIds[booking.booking_nbr]) !== null && _a !== void 0 ? _a : 1);
                }, class: "ct-menu-button" }, (_a = menuItems.find(p => { var _a; return (_a = p.id === this.selectedMenuIds[booking.booking_nbr]) !== null && _a !== void 0 ? _a : 1; })) === null || _a === void 0 ? void 0 : _a.item), h("ir-menu", { onMenuItemClick: e => {
                    this.selectedBooking = booking;
                    this.handleMenuItemChange(e);
                }, data: menuItems }, this.renderMenuTrigger()))) : (view && (h("ir-button", { variants: "outline", label: "Booking details", onButtonClick: () => {
                    this.bl_routing.emit({
                        route: 'booking-details',
                        params: {
                            booking,
                        },
                    });
                } }))))));
        })))), this.page_mode === 'multi' && (h("div", { class: "px-[1.25rem] pt-[1rem] " }, h("ir-pagination", { total: totalPages, current: this.currentPage })))), h("section", { class: cn('flex-1 space-y-4  md:hidden', {
                'px-4': !this.be,
            }) }, this.showAllBookings && h("ir-booking-header", { bookingNumber: this.bookingNumber, mode: this.bookingNumber ? 'multi' : 'single' }), (_b = this.bookings) === null || _b === void 0 ? void 0 :
            _b.map(booking => (h("ir-booking-card", { booking: booking, key: booking.booking_nbr, onOptionClicked: (e) => {
                    this.selectedBooking = booking;
                    const { id } = e.detail;
                    console.log(id);
                    this.handleBlEvents(id);
                } }))), this.page_mode === 'multi' && h("ir-pagination", { total: totalPages, current: this.currentPage })), h("ir-booking-cancelation", { ref: el => (this.bookingCancelation = el), booking_nbr: (_c = this.selectedBooking) === null || _c === void 0 ? void 0 : _c.booking_nbr, cancelation: (_d = this.selectedBooking) === null || _d === void 0 ? void 0 : _d.rooms[0].rateplan.cancelation, onCancelationResult: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { state, booking_nbr } = e.detail;
                if (state === 'success') {
                    this.modifyCancelBooking(booking_nbr);
                }
            } }))));
    }
    static get is() { return "ir-booking-overview"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-overview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-overview.css"]
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
                "reflect": false
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
            "showAllBookings": {
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
                "attribute": "show-all-bookings",
                "reflect": false,
                "defaultValue": "true"
            },
            "be": {
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
                "attribute": "be",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "bookings": {},
            "currentPage": {},
            "total_count": {},
            "bookingNumber": {},
            "page_mode": {},
            "activeLink": {},
            "selectedBooking": {},
            "selectedMenuIds": {}
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
                    "original": "{\n    route: 'booking' | 'booking-details';\n    params?: unknown;\n  }",
                    "resolved": "{ route: \"booking\" | \"booking-details\"; params?: unknown; }",
                    "references": {}
                }
            }];
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
//# sourceMappingURL=ir-booking-overview.js.map
