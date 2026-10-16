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
        return (h(Host, { key: 'a3c6af89eb39548d8ec61144db6e0c40060ddf97' }, h("div", { key: 'a847f8ea9f88d1e0dd6f4709e6ad090532bb07ae', class: "table--container" }, h("table", { key: '6339c106025b90fe417c42a86c816e2d8c35d2bf', class: "table data-table" }, h("thead", { key: 'a3d27a41d44ca9a2aecc9e73e2d3dafc023c2a3b' }, h("tr", { key: '480ba043fc85db1f71f287cbb34f18a857e94c69' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: '4ee94ea34f07ac0b8b0fd11a61274b74de100e8a', class: "ir-text-start" }, t('Lcz_Property', { fallback: 'Property' })), h("th", { key: 'a6ffba6079369a95f2d893710623d680be629b6f' }, h("span", { key: '7eb6bd89d6953cf04801cba1b051de51fcbff571', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'ee1cbade91e317621847924a70138536ccc17e8a' }, t('Lcz_BookedOn', { fallback: 'Booked on' })), h("th", { key: '56045fd3bef2ffa4826770fdfb5853b821607399' }, h("div", { key: '5025b00a36db711f0f26045a04af633822c2b84d' }, h("p", { key: '242a8599e3be0fe3dac158fcbf24884cdca327f6' }, t('Lcz_BookedBy', { fallback: 'Booked by' })))), h("th", { key: '5723d1eb814ae9c4ab0914981701de25209be386' }, t('Lcz_Dates', { fallback: 'Dates' })), booking_listing.userSelection?.filter_type === '2' && h("th", { key: 'df9c88f5c93e10c09ef68279111fc2d5aa3d4187' }, t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), h("th", { key: '730d8d7e3eda25d8b0f032a0e8dc5f8a85601de2' }, t('Lcz_Services', { fallback: 'Services' })), h("th", { key: '8e948a33f60a5977ef5c68162341d83966e31885', class: "text-center" }, h("p", { key: 'f29316c471f7ecdcec35b4268f395f5c5c3b5d7b' }, t('Lcz_Amount', { fallback: 'Amount' }), " "), h("wa-tooltip", { key: 'ae2357ca1b599d311b303e8c23846fade9b421fb', for: "balance-info" }, t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), h("div", { key: '636e83e67daf6fd3b494482b20d0baefc4e4541b', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '972a8fc688e0901ebf7d39e780e8f03501e7da27', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), h("th", { key: 'd9bcd738933e0944df29af4c26ea7014b177f21f', class: "text-center" }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '3a4f6088a37a290cb0ac744e660bb8df7d0ff510' }))), h("tbody", { key: '95bf9154899fed86f77f7938b709270633e08751' }, booking_listing.bookings.length === 0 && (h("tr", { key: '434f4833e62a4ccb5966136189e949562045b34f' }, h("td", { key: '9869a2cb256cbff293f67cb1eb542af8398286df', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: '265bc597c5a48b77c3c4a036e4c20a48a8c50e67', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: 'bc8897c8bc3e8f48d417b5e6a91fc4d30ff57db4', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: 'fdd5579e72535c28887b32c2ae72efb5413bbb35', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-dialog", { key: '6ad13e11ee5f237ccdf0ef280b815579dda443ac', label: t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '0c0bc3488357f001e55476a85fc707d6ca96d2d7' }, t('Lcz_SureYouWantToDeleteBookingNbr') + formatBookingNumber(this.booking_nbr)), h("div", { key: '42265c600de5a6ad911b9fbe325bbe8ad78efad2', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '84095d5134d4365b5899fbc55d7cfe2b465b894f', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '730d53b705c84f9ff7bce0fe567452a7f94466ba', onClickHandler: e => {
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
