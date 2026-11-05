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
        return (h(Host, { key: 'b8bec3310d0bd66e74c2d256a093d471dad11113' }, h("div", { key: 'ae91d0a5a0b510833ce7babb88a6a774e56266e1', class: "table--container" }, h("table", { key: 'e8a1a268a90e88d8ab03fea105909e5d2568ac22', class: "table data-table" }, h("thead", { key: '5cf8c9c5c59ef16a7d4073b56514a3ae994c100a' }, h("tr", { key: '6e7b29578fcdbc4f0a6b3bc089f4dafbf981beb5' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: '787de1fb578d9749dcc757eb95ddc5d1671146ca', class: "ir-text-start" }, t('Lcz_Property', { fallback: 'Property' })), h("th", { key: '048343b44459e553a146b5dcce6a8c492824d46a' }, h("span", { key: '4da14db672fceb775e99c98f2ca98e62d862760e', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: 'e22b2cf6d818998c300e12692bbc86c1226c25dd' }, t('Lcz_BookedOn', { fallback: 'Booked on' })), h("th", { key: '60fda93c060d2047473e49571c847665321eccb1' }, h("div", { key: 'b9711e1846e39a36e6c32da6ca8fd5b23d4c4ee2' }, h("p", { key: '4aa6dbf01a4ac33497601e946588c7339e54dddf' }, t('Lcz_BookedBy', { fallback: 'Booked by' })))), h("th", { key: '4ac42e6315dbca174c3eeb69b790b28cc9ea3e1c' }, t('Lcz_Dates', { fallback: 'Dates' })), booking_listing.userSelection?.filter_type === '2' && h("th", { key: 'b8afe6b44eb5f20dac04f6c32f3507aa78f716f6' }, t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), h("th", { key: '70ec60e096a5bb85498f0f3d2e211dd7fcf3ca7d' }, t('Lcz_Services', { fallback: 'Services' })), h("th", { key: 'ef03e487f173cb4a3ca24060d59f37adc470eb9e', class: "text-center" }, h("p", { key: '8558ec2ddcdb5e843af5919a0ddc9538205e1068' }, t('Lcz_Amount', { fallback: 'Amount' }), " "), h("wa-tooltip", { key: '4699bcf16988f703f377644fcc09c4db1290f34e', for: "balance-info" }, t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), h("div", { key: '347f1543a02703b1ff3d4a67e735690f1b080216', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '9bd802cb4a0122fe69c01dfb78c50f8cedebfb46', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), h("th", { key: '115766981919acd15ffad8ec63253d3e7a599787', class: "text-center" }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '68f86223a4db7ef4f86382ded461d1c8d92019ef' }))), h("tbody", { key: '8f4e747402d7269fcfc08f9921af2ccdedeeeda5' }, booking_listing.bookings.length === 0 && (h("tr", { key: '7945199883af3069f5268b4aa9fd607da42f6779' }, h("td", { key: 'c7a2a6e533a6cf593785de09ca4e23047286da1b', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: 'b5923dcec77b468b189916bc531eb24456ddd50c', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: '2daf89a86a874288cfd8fc314bc5350e0736f1e3', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: '289d6c3da3ec8380649bea2a3b523e15aa3557fb', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-dialog", { key: 'f34b7f156779d6237eb9130d6ed89869c1843d5d', label: t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '2ce293cb3e109a2b685f9c6f115604452d89adc9' }, t('Lcz_SureYouWantToDeleteBookingNbr') + formatBookingNumber(this.booking_nbr)), h("div", { key: 'c233f01d9c439cbf41c1aae7e9c1cc388df3dfcd', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'a5c407b036bdc73a77e8a18bcffbd4d861932957', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ba27ea60132b30f74c2b0945e7e0f7ec44d38b9b', onClickHandler: e => {
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
