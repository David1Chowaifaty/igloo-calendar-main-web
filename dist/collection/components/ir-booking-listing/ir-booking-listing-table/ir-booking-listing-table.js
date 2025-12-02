import booking_listing from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { getPrivateNote } from "../../../utils/booking";
import { Host, h } from "@stencil/core";
import { BookingListingService } from "../../../services/booking_listing.service";
export class IrBookingListingTable {
    booking_nbr;
    isLoading;
    openBookingDetails;
    requestPageChange;
    requestPageSizeChange;
    bookingListingsService = new BookingListingService();
    async deleteBooking() {
        if (!this.booking_nbr) {
            return;
        }
        try {
            this.isLoading = true;
            await this.bookingListingsService.removeExposedBooking(this.booking_nbr, true);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    calculateTotalPersons(booking) {
        const sumOfOccupancy = ({ adult_nbr, children_nbr, infant_nbr }) => {
            return (adult_nbr ?? 0) + (children_nbr ?? 0) + (infant_nbr ?? 0);
        };
        return booking.rooms.reduce((prev, cur) => {
            return sumOfOccupancy(cur.occupancy) + prev;
        }, 0);
    }
    handleIrActions({ action, booking }) {
        switch (action) {
            case 'edit':
                this.openBookingDetails.emit(booking.booking_nbr);
                break;
            case 'delete':
                this.booking_nbr = booking.booking_nbr;
                break;
            default:
                console.warn(`${action} not handled`);
        }
    }
    handlePageChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageChange.emit(event.detail);
    }
    handlePageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageSizeChange.emit(event.detail);
    }
    renderRow(booking) {
        const rowKey = `${booking.booking_nbr}`;
        const totalPersons = this.calculateTotalPersons(booking);
        const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, locales.entries.Lcz_ExtraServices))), h("td", { class: "text-center" }, h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        return (h(Host, { key: '89eeb829b1b125b33215d0f4057d1f82d952957e' }, h("div", { key: 'fc844f92a98d708d1f60ae5c12bf567c785b887f', class: "table--container" }, h("table", { key: 'f623825ce2b15abfa9281cf4b189a1a632e2c16e', class: "table data-table" }, h("thead", { key: '689c87c214cefe6967a8145da93d393aa933b17d' }, h("tr", { key: '86df427f700817591af8d19373e8615cd233ef78' }, h("th", { key: 'ae2483147114b595aa6e2353ccf6c946c9c6ac4c' }, h("span", { key: '3a18f04f3e2e0e544ba4d592335646089877e814', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '7c2d1d2abb85eb7c79d1afe4e3adec05566cecfb' }, "Booked on"), h("th", { key: '58e672f89ae779a08de9d5df37ef7d2abf3e8dd5' }, h("div", { key: '35bf16893dc2271a7fbabf201f2953f19026a8dc' }, h("p", { key: 'fcfec7ec79c5e999d81674d4b9d70cfd5c4ae055' }, "Booked by"))), h("th", { key: 'e89225c9eb6e622c9fca8e3f7a9446b0dfd24889' }, "Dates"), h("th", { key: '0cf0fa3bf1b8685b5de541ac4e4ac13265760d12' }, "Services"), h("th", { key: '043a7a0268e46efce4864c521c45e63ce93adaba', class: "text-center" }, h("p", { key: '19495a5d43a95ba1c834199cb2718857cbdefa77' }, "Amount "), h("wa-tooltip", { key: 'e3c2ceb88acdf5c8358c26a9be8b7f05eb9d6350', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: '5d9940a73c210b940f2ab3d8f700dba1c0ea0133', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '081369b91c2d4a1fecbfef445159d137af1ef3f5', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '20183f8332f18b0da8031aaff67408ad8d39d797', class: "text-center" }, "Status"), h("th", { key: '4e2c60fe3e1b2ef02f18a3780feaca37f5879282' }))), h("tbody", { key: '869c1341e12773dfbe66cf9ff85e0bfa588d0bcd' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'c0038e5834463abf8a9f9588a2633e7b4416822c' }, h("td", { key: 'fdc87ce003feedccc6ad11d295ae229c07ed888c', colSpan: 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), pagination.totalRecords > 0 && (h("ir-pagination", { key: '2744dc3758772e0aa5e71d855fb655b8bb8f643d', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), h("ir-dialog", { key: 'f3bc77b5cc42013c3d2336172ad6d06c64f515c9', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: 'ae991f96871041c18101386411097d3db9d291e0' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: 'a5e6162791f5ac92288eff33d9149f4418a36668', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '1ea58c127712134a282fe75a0abfc4fb31daa7a4', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '66ff13f6cb4a503c0565035b24aff777d708c598', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "medium", variant: "danger" }, "Confirm")))));
    }
    static get is() { return "ir-booking-listing-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-listing-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-listing-table.css", "../../../common/table.css"]
        };
    }
    static get states() {
        return {
            "booking_nbr": {},
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "openBookingDetails",
                "name": "openBookingDetails",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "requestPageChange",
                "name": "requestPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "import",
                            "path": "@/components/ir-pagination/ir-pagination",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "requestPageSizeChange",
                "name": "requestPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "import",
                            "path": "@/components/ir-pagination/ir-pagination",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-listing-table.js.map
