import booking_listing from "../../../stores/booking_listing.store";
import { getPrivateNote } from "../../../utils/booking";
import { Host, h } from "@stencil/core";
import { BookingListingService } from "../../../services/booking-listing/index";
import { isBookingModified, isPrivilegedUser } from "../../../utils/utils";
import { formatBookingNumber } from "../../../utils/number";
import { t } from "../../../services/locale/t";
export class IrBookingListingTable {
    booking_nbr;
    isLoading;
    isLoadMoreLoading = false;
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
            await this.bookingListingsService.removeExposedBooking({ booking_nbr: this.booking_nbr, is_to_revover: true });
            booking_listing.bookings = [...booking_listing.bookings.filter(b => b.booking_nbr?.toString() !== this.booking_nbr)];
            this.booking_nbr = null;
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
        return booking.rooms?.reduce((prev, cur) => {
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
    async loadMoreBookings() {
        if (this.isLoadMoreLoading) {
            return;
        }
        const totalRecords = booking_listing.pagination.totalRecords;
        const currentCount = booking_listing.bookings.length;
        if (!totalRecords || currentCount >= totalRecords) {
            return;
        }
        const pageSize = booking_listing.pagination.pageSize || booking_listing.rowCount || 20;
        const nextStartRow = Math.ceil(currentCount / pageSize) * pageSize;
        const nextEndRow = Math.min(nextStartRow + pageSize, totalRecords);
        this.isLoadMoreLoading = true;
        try {
            await this.bookingListingsService.getExposedBookings({
                ...booking_listing.userSelection,
                start_row: nextStartRow,
                end_row: nextEndRow,
                is_to_export: false,
            }, { append: true });
        }
        catch (error) {
            console.error('Failed to load more bookings', error);
        }
        finally {
            this.isLoadMoreLoading = false;
        }
    }
    renderRow(booking) {
        const rowKey = `${booking.booking_nbr}`;
        const totalPersons = this.calculateTotalPersons(booking);
        const { lastManipulation, modified } = isBookingModified(booking);
        return (h("tr", { class: "ir-table-row", key: rowKey }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("td", null, booking.property.name), h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: booking.agent === null, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), booking_listing.userSelection?.filter_type === '2' && (h("td", null, h("ir-arrival-time-cell", { arrival: booking.arrival }))), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { showDeparture: booking_listing?.userSelection?.filter_type === '3', key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })))), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: modified, status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        const canLoadMore = booking_listing.bookings.length > 0 && booking_listing.bookings.length < pagination.totalRecords;
        return (h(Host, { key: 'fd40aa948c97628d1d6d32ed25afec0ace655bec' }, h("div", { key: 'c5f4f27f2cf3b9d160b210ff9e678403b2c1b59d', class: "table--container" }, h("table", { key: '2b2432a64d2a8c10cfd6d2a62f4f1e66f77b6a77', class: "table data-table" }, h("thead", { key: '32e5f496889203e078bf9cb41d48f3f9ff1a3385' }, h("tr", { key: 'e68775ed3368ca9eead00a579054372ffd2603a3' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: '095243030f4aed9498ccf54cd0d5b95dcf3efdc9', class: "ir-text-start" }, t('Lcz_Property', { fallback: 'Property' })), h("th", { key: 'a594ff0552b4954227afd37e44f9c84e48b08275' }, h("span", { key: 'bc06b1ecdc838b72f5a524be12418dd67b3b6d6d', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '53f04e153e0495c776912d9b02347c2fa92e2e4c' }, t('Lcz_BookedOn', { fallback: 'Booked on' })), h("th", { key: '64e3a6571cbf7526950f9c33c4ce2fd6f7a62130' }, h("div", { key: '47f8c529898dbcb1b32e6578f064d7aec3214716' }, h("p", { key: '4589e6f4bc17caf77441a22f08628f8c7fecf37b' }, t('Lcz_BookedBy', { fallback: 'Booked by' })))), h("th", { key: '462391223704907378f35cdadd8c6f73dffc9ec4' }, t('Lcz_Dates', { fallback: 'Dates' })), booking_listing.userSelection?.filter_type === '2' && h("th", { key: '2ad274a97c2783c06438bc909e992f710576a9c9' }, t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), h("th", { key: '4b75bb3db2ace5ffbc4f588f9a783082661be559' }, t('Lcz_Services', { fallback: 'Services' })), h("th", { key: '738683d0f652379e411f1d2be0c72d8431da3bc6', class: "text-center" }, h("p", { key: '3c841fef9feecfc0365f57dbc0df691a443a0758' }, t('Lcz_Amount', { fallback: 'Amount' }), " "), h("wa-tooltip", { key: 'fcb6af3dfc9c0eb865d43db33a8b18b7982d84b6', for: "balance-info" }, t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), h("div", { key: '8c5542ba21dc2a389fef37ed22ef56cb848d370a', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: 'a7c5d95cb110a95841e2f34c67002039304d9f3c', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), h("th", { key: 'c45ea22103c30acce7f54591331e8fe1edfd5c8f', class: "text-center" }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '1652ee00051d45380d965273e0d65cb413cfbf36' }))), h("tbody", { key: '844277236c275b36d85a9233426f622ef4e703f8' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'a5f63c135bc52ba0716a51c48bbabc9f71510300' }, h("td", { key: 'a6b574f0c9fb8f20ac5f51f7417b4c6bb884c9c3', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: 'b49bf5f021718bfb48b6861bcccf784c71f9910f', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: 'c3880a3db7250a6d6bbf027375b56269d8f4f81d', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: 'edb2c060b7041d426e26f4c42e39d58eee0f70e6', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-dialog", { key: '06cc41e804e9ad7199c8ad9035bb78138502f268', label: t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: 'd7f8adf1e853f9c31fab34f3cbc0f5ac9fb7544b' }, t('Lcz_SureYouWantToDeleteBookingNbr') + formatBookingNumber(this.booking_nbr)), h("div", { key: '3cb82f14636629aaee21d59a691c94ec1d5cb3fd', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'bc6e426fe228c0b935a606f40355d8d0ddbbe7c0', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '903bb0981eeb82c4e315e4df817f7d58069586a6', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "m", variant: "danger" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
            "isLoading": {},
            "isLoadMoreLoading": {}
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
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent",
                            "referenceLocation": "PaginationChangeEvent"
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
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent",
                            "referenceLocation": "PaginationChangeEvent"
                        }
                    }
                }
            }];
    }
}
