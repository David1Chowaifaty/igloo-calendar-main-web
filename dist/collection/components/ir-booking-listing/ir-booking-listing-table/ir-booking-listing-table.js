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
        return (h(Host, { key: '0df85c48ef552d5fa7315a63a410b2f947ca6d3c' }, h("div", { key: '92fff576da15f6b829ad45dbc76c8652bd3892ff', class: "table--container" }, h("table", { key: 'e3f5bfc73de99b9493077878d68274a7fef3b0f1', class: "table data-table" }, h("thead", { key: '79c40b63fe9f9824ea06ad8b4342ff65772b1ee0' }, h("tr", { key: 'a42b43b247b6cc8575aacc43a3339b67cbfda279' }, h("th", { key: 'a2fdc10f4fcf110b2b848b215ff7587900633a78' }, h("span", { key: '307dbc5c65ce2639a286bb473fe46a5b499644e8', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '5ad4b1c5bcdef3e5ca3dbd6b0bd4ef5a3e03e7e9' }, "Booked on"), h("th", { key: 'e4fa19f59e86dc7cc8dde76b612ee440de59be61' }, h("div", { key: '95d84bde6e9924ac68f91146bbff3b588362e683' }, h("p", { key: 'a3155a8f80c4c6c5b18e51c23dd2661a803cd075' }, "Booked by"))), h("th", { key: '45ec827ec0bb96801b1e584b3baedc9d04a3b6b0' }, "Dates"), h("th", { key: '9af8ffe42905d8e558cacadca2750d98eac0b041' }, "Services"), h("th", { key: '202b689bcdb77451bb3fbba5abc4d27663fd0107', class: "text-center" }, h("p", { key: 'c06c1f3ab6db03afbbba19c2a410d9ba76bf436f' }, "Amount "), h("wa-tooltip", { key: '9d495053cf94e45a0d501fe6dc396b46a94fa791', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: '9d8dcbaee97f23842efae8eb56628d8a8bd717eb', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '8467e779c5db9e4bfa022a612550c10d9f0f86e2', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '777c85f045b9afcb1944b6940cb7217f0fa0e8cb', class: "text-center" }, "Status"), h("th", { key: 'd275626d27079250584ee7d23eca05989ce6bbcd' }))), h("tbody", { key: 'c12e6bbb8aa2be20685ed0fd55fc188317ea01ad' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'c30f5048862fae5bf3297b8a9fc3cf88044d3b80' }, h("td", { key: '0895af1d201b841d4b2fd7d7d2dc400c6a416964', colSpan: 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: '648b687d7df86141cbc9c9a0c1a9d9c69288ab8b', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: '7c27570347673d1436da547dcf7f7143ceb3b42a', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), h("ir-dialog", { key: '2092c8701d5412e1b2f37d266b250f148a3cfeb1', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: 'ea82543602454c2319b7a648a75626a77e5a762a' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: '755c87878dd3fa5db45507987eb1946d751315bd', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '99700fbefe2faa30e40104ad324fe197c0c86f30', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '0a92aa4485a5034da8b49a08a1b2cdb763ea4de6', onClickHandler: e => {
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
