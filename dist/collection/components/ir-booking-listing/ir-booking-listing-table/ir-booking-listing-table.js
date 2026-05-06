import booking_listing from "../../../stores/booking_listing.store";
import locales from "../../../stores/locales.store";
import { getPrivateNote } from "../../../utils/booking";
import { Host, h } from "@stencil/core";
import { BookingListingService } from "../../../services/booking_listing.service";
import { isPrivilegedUser } from "../../../utils/utils";
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
            await this.bookingListingsService.removeExposedBooking(this.booking_nbr, true);
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("td", null, booking.property.name), h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), booking_listing.userSelection?.filter_type === '2' && (h("td", null, h("ir-arrival-time-cell", { arrival: booking.arrival }))), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { showDeparture: booking_listing?.userSelection?.filter_type === '3', key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, locales.entries.Lcz_ExtraServices))), h("td", { class: "text-center" }, h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        const canLoadMore = booking_listing.bookings.length > 0 && booking_listing.bookings.length < pagination.totalRecords;
        return (h(Host, { key: '272fd3f97bcb86727678e461b255b47d5ab231a4' }, h("div", { key: '609eea204ddfd96fc98b8d486c505b846619cb9b', class: "table--container" }, h("table", { key: '954523e09106073f33122cde3a761efa4f2aba2d', class: "table data-table" }, h("thead", { key: '700368dbf966de53ae4380e40b7dba5a4fefc33b' }, h("tr", { key: '79af6b1b267e8af50f264a9d4ca4e8e1105267a0' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: '718ec1a2c6a2671670cc63366d8c322ca2b3fb7d', class: "text-left" }, "Property"), h("th", { key: 'a89147c9f5f5a7cf945e0209915174cb988828fb' }, h("span", { key: '6e860c194869dcc5a81be2f60a7b21c4e2d2670f', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '126452756fc87c22d9927ed2d372001ab6a5d861' }, "Booked on"), h("th", { key: '139a7f4c89f1f9607c0d629c8dc6ddca407310d6' }, h("div", { key: '9d90a1704de60fb8ba30c169e8ff87578c31fc75' }, h("p", { key: '4f6a82d35f02558f23caf795c4e3d9d1def466ff' }, "Booked by"))), h("th", { key: '44717db054170ac7118414a5d4c14e99d731276c' }, "Dates"), booking_listing.userSelection?.filter_type === '2' && h("th", { key: '01e1af34ea7f40f98da96ff80d23b0db687d1354' }, "Arrival time"), h("th", { key: 'f33e159667b3597b3d0dd5ad13550708d9525432' }, "Services"), h("th", { key: 'fe5600462d75829ebe5fdb0d4e9d6ec007e0fe3c', class: "text-center" }, h("p", { key: '92b8f9789f3a5c1a36224fcfc368c54edb264916' }, "Amount "), h("wa-tooltip", { key: 'a2351027e0630e0565400fe221a2502231253478', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: '7d372142a3e4b1c4966261422c0998b6bf8bf681', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: 'dbb4092843580ff960a135d42d3a456709f93504', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '34def84a3769b3a9948fc5e7e0512242e55e8bcd', class: "text-center" }, "Status"), h("th", { key: '488dcba0240985085e5231f342c35a045f3cfb42' }))), h("tbody", { key: '3c47f2d0aad4f85771d3c294a420deac531d8100' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'a1a23eb8566033503343bbcb25e4d46b50d65137' }, h("td", { key: 'c8220ab2b1803a9cd56f51228cbaa55c615831d4', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: 'ac2b44f5a11d6c357cce03972e6c50b29b942f6a', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: '7b57ad02becdfc3950535a6192dbf1b74dd43a4c', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: 'edd8635baa67f9b912fa58fbd6f6fcf13998e153', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, "Load more")), h("ir-dialog", { key: 'beca416ba265ec59062ded9de9dbf0ead840b130', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '920768ba1bafd3c17ed5c245ae9647893be1bf94' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: 'e1d1d83dbbe50f2a58dbb8e43448262965f3da48', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '325a3637ea525b601255a3046d14a2bcd6d11c20', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '7464217d0c3c2a1ec43e8243e31d98e53c78bf61', onClickHandler: e => {
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
