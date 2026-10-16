import { h } from "@stencil/core";
import Token from "../../models/Token";
import { RoomService } from "../../services/room.service";
import { PropertyService } from "../../services/property.service";
import locales from "../../stores/locales.store";
import uninvoiced_bookings, { setUninvoicedBookingsCriteria } from "../../stores/uninvoiced_bookings.store";
import { mapBookingToUninvoicedRow } from "./types";
import { BookingListingService } from "../../services/booking_listing.service";
export class IrUninvoicedBookings {
    el;
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isPageLoading = true;
    activeBookingNbr = null;
    activeGuestBookingNbr = null;
    token = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    bookingListingService = new BookingListingService();
    propertyId;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async handleFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings.tablePagination, currentPage: 1 };
        await this.fetchUninvoicedBookings();
    }
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUninvoicedBookings();
    }
    handleOpenBookingDetails(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeBookingNbr = e.detail;
    }
    handleGuestSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeGuestBookingNbr = e.detail;
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.propertyId = propertyId;
            // Bookings don't depend on language/criteria, so fetch all three concurrently.
            const [languageTexts, criteria] = await Promise.all([
                this.roomService.fetchLanguage(this.language),
                this.bookingListingService.getExposedBookingsCriteria(propertyId),
                this.fetchUninvoicedBookings(),
            ]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            setUninvoicedBookingsCriteria(criteria);
        }
        catch (error) {
            console.error('Error initializing uninvoiced bookings:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchUninvoicedBookings() {
        uninvoiced_bookings.isLoading = true;
        try {
            const { currentPage, pageSize } = uninvoiced_bookings.tablePagination;
            const start_row = (currentPage - 1) * pageSize;
            const { bookings, total_count } = await this.propertyService.getExposedBookingsByInvoicedStatus({
                property_id: this.propertyId,
                booking_nbr: '',
                from_date: uninvoiced_bookings.filters.from,
                to_date: uninvoiced_bookings.filters.to,
                source: uninvoiced_bookings.filters.source,
                is_totally_invoiced: false,
                start_row,
                end_row: start_row + pageSize,
            });
            uninvoiced_bookings.rows = bookings.map(mapBookingToUninvoicedRow);
            uninvoiced_bookings.totalCount = total_count;
        }
        catch (error) {
            console.error('Error fetching uninvoiced bookings:', error);
        }
        finally {
            uninvoiced_bookings.isLoading = false;
        }
    }
    findRow(bookingNbr) {
        if (!bookingNbr) {
            return undefined;
        }
        return uninvoiced_bookings.rows.find(row => row.booking_nbr === bookingNbr);
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { description: "List of ended bookings with some services that have not been invoiced yet.", label: "Uninvoiced Past Bookings", class: "uninvoiced-bookings__page" }, h("ir-unvoiced-bookings-filters", null), h("ir-unvoiced-bookings-table", null), h("ir-booking-details-drawer", { open: !!this.activeBookingNbr, propertyId: this.propertyId, bookingNumber: this.activeBookingNbr, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.activeBookingNbr = null) }), h("ir-guest-info-drawer", { open: !!this.activeGuestBookingNbr, booking_nbr: this.activeGuestBookingNbr, email: this.findRow(this.activeGuestBookingNbr)?.raw.guest.email, language: this.language, onGuestInfoDrawerClosed: () => (this.activeGuestBookingNbr = null) })));
    }
    static get is() { return "ir-uninvoiced-bookings"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-uninvoiced-bookings.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-uninvoiced-bookings.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false,
                "attribute": "language",
                "defaultValue": "''"
            },
            "ticket": {
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
                "reflect": false,
                "attribute": "ticket",
                "defaultValue": "''"
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
                "reflect": false,
                "attribute": "propertyid"
            },
            "p": {
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
                "reflect": false,
                "attribute": "p"
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "base-url"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "activeBookingNbr": {},
            "activeGuestBookingNbr": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "uninvoicedBookingsFiltersChange",
                "method": "handleFiltersChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "uninvoicedBookingsPageChange",
                "method": "handlePageChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "openBookingDetails",
                "method": "handleOpenBookingDetails",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "guestSelected",
                "method": "handleGuestSelected",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
