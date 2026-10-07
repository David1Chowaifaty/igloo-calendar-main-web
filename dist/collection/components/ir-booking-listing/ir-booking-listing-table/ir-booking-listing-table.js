import booking_listing from "../../../stores/booking_listing.store";
import { getPrivateNote } from "../../../utils/booking";
import { Host, h } from "@stencil/core";
import { BookingListingService } from "../../../services/booking-listing/index";
import { isPrivilegedUser } from "../../../utils/utils";
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
        const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
        return (h("tr", { class: "ir-table-row", key: rowKey }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("td", null, booking.property.name), h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showContactIcons: booking.agent === null, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), booking_listing.userSelection?.filter_type === '2' && (h("td", null, h("ir-arrival-time-cell", { arrival: booking.arrival }))), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { showDeparture: booking_listing?.userSelection?.filter_type === '3', key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })))), h("td", { class: "text-center" }, h("ir-balance-cell", { guestFinancial: booking.guest_financial, "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        const canLoadMore = booking_listing.bookings.length > 0 && booking_listing.bookings.length < pagination.totalRecords;
        return (h(Host, { key: '48a9e8d23255a0b8507f76262eef7eeef27eb278' }, h("div", { key: '92c9434d2d663a3bb347bb617c1540cd435949f8', class: "table--container" }, h("table", { key: 'f868a40d78d744618d5921259c44085601f55ff0', class: "table data-table" }, h("thead", { key: 'd38dfa6a34d47fce969a6bab08fc5aceaa570952' }, h("tr", { key: '1574e7b540910a0ca620b645e7d703975f658246' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: '03d0844174bf730d2be4e6fc33dace7b9b54ce65', class: "ir-text-start" }, t('Lcz_Property', { fallback: 'Property' })), h("th", { key: '87863a8f96bcce67d4d61ef497763eca9f550bea' }, h("span", { key: 'fa567a121df6abc96f5602c24fd891c869de673f', class: 'arrivals-table__departure__cell' }, t('Lcz_BookingHash', { fallback: 'Booking#' }))), h("th", { key: '838e196f8561bf82002a6812fd402d7467d32ab7' }, t('Lcz_BookedOn', { fallback: 'Booked on' })), h("th", { key: '63d7a45e5834465013935e44348bbfa86018cae1' }, h("div", { key: '8ea97f6ba01158b01b92412f7a818653a6fa063e' }, h("p", { key: '0e23f8fc6f90dfef38a10f5f834db3612e937793' }, t('Lcz_BookedBy', { fallback: 'Booked by' })))), h("th", { key: 'b8728abb7de388b3188c0f25dedb633d6ff650ba' }, t('Lcz_Dates', { fallback: 'Dates' })), booking_listing.userSelection?.filter_type === '2' && h("th", { key: 'f2c4ad51d09ff51f74245682947df2da04bf36ec' }, t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), h("th", { key: '868493f5c1e87d50080cb352f3623eb2b2984d9e' }, t('Lcz_Services', { fallback: 'Services' })), h("th", { key: '8c6290cf4840cc795d144d4366b180d30c9676c8', class: "text-center" }, h("p", { key: '5c2dc4c1fae8366c35e1439a9ff08c015d2ebc91' }, t('Lcz_Amount', { fallback: 'Amount' }), " "), h("wa-tooltip", { key: '4c82516520cec1de6a5abf70f739aea15065e201', for: "balance-info" }, t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), h("div", { key: '56da975e733ce3e2251ff5239dbd8ee4ad50c828', style: { width: 'fit-content', marginInline: 'auto' } }, h("ir-custom-button", { key: '69e877fea9bf25bb3af275febfba60a01d85b41c', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), h("th", { key: '93e047925a868e2744089fd7de5c2a66bd76b4af', class: "text-center" }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: 'c273e5a18ab98976499f15dd86945afd1b97b066' }))), h("tbody", { key: 'add9bbdf28a95098b12c83af086fe840bc55a11d' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'fa4ccc9d832be5907a550d23b528a7e507639ae5' }, h("td", { key: '1f7dbba4ec2ec8fc2465ab1e7c60b1f897cacf11', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: 'fd1dc8758e88c4121433583378bcaa197ef570a2', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: 'dadfcef79fb34ff7fd5b95a8c3062917cc66775f', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: '205ba704a06f04d7f618987d4affeefedfe8b131', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-dialog", { key: 'a3732798f6201e9942bc4bcdbb26f4bffa362e32', label: t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '06764a72d2416da7cf1bd65e69f3c37032f394cf' }, t('Lcz_SureYouWantToDeleteBookingNbr') + formatBookingNumber(this.booking_nbr)), h("div", { key: 'a7d19c65ee20213bbf6f9879e02f2a5c00e41b32', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '06e8517a9b2f825a877a9c8b51f03d4651d6ece3', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'e0616d4d9697db60ba8477de984d90dea30b2c44', onClickHandler: e => {
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
