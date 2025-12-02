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
        return (h("tr", { class: "ir-table-row", key: rowKey }, h("td", null, h("ir-booking-number-cell", { channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-source-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, origin: booking.origin, guest: booking.guest, source: booking.source, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))), booking.extra_services && h("p", null, locales.entries.Lcz_ExtraServices))), h("td", { class: "text-center" }, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), h("td", { class: "text-center" }, h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        return (h(Host, { key: '622ada91df33db2741c90e4402ba8755997daa33' }, h("div", { key: '2b10360a4259e3bfda147eeb1adc64fc9a6d4fa5', class: "table--container" }, h("table", { key: 'c2acb39272eb7f34db57099f200d5b23aac45c6c', class: "table data-table" }, h("thead", { key: '0b3dbebfa37cd1258db229c7c7bba50d460a092a' }, h("tr", { key: 'd6ec652326fd5cc99e1bf1e7d808f290aef3947b' }, h("th", { key: '5b96739f68c021af3e22b2cc905a009d5fc29050' }, h("span", { key: 'd9aa6e4e152a9dd837e65b0292d2ad621cd1a294', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '22d050569836185b690d2323ac2a7cbe40dd07a6', class: "text-center" }, "Booked on"), h("th", { key: '16e88d1abce80f12d081915c07651089192416d8' }, h("div", { key: '45e895e065ee5d7a2e4d5a3aeef33768734d3c3c' }, h("p", { key: '1430851bcd7f7ecccc2631389f8fa8f3b7a38e28' }, "Booked by / Source"))), h("th", { key: 'b995eb27538c4ea7e433e39fd310245a69802cf4' }, "Services"), h("th", { key: '62377bc639c1af2dc37cad33841a09911a798e9d', class: "text-center" }, "Dates"), h("th", { key: '04c267ef033b1f8c275331cf9e133c47cc446d82', class: "text-center" }, h("p", { key: '35987364e7e150f348947ec2e7369ee8365adb19' }, "Amount "), h("wa-tooltip", { key: 'ee8666bb1de65e613cbfe9e8da940e6f8dc1295c', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: 'f5d32ff58266d519bfcce050e303fb75dba7a756', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '649a823e5d1a8e0e65ca8c473dbc7697c70cce4b', id: "balance-info", style: { '--ir-c-btn-height': '1.3125rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '938061daee60990c0c0c3a829acc995a661a93ba', class: "text-center" }, "Status"), h("th", { key: '72dc9aa999906628a1827ab52a7447767cdd1e75' }))), h("tbody", { key: '0861ea118174234ad6609983342c3a13efe14059' }, booking_listing.bookings.length === 0 && (h("tr", { key: '98e9836b9f6c1eab64d7a94e55db348a71302855' }, h("td", { key: 'c91839ac95a0160855a2f88809439d916e0135b0', colSpan: 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), pagination.totalRecords > 0 && (h("ir-pagination", { key: 'c3f819e972c05c63103a6da8e0fcc3741ece4bab', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), h("ir-dialog", { key: 'd5cd629c2dd938262671677f55099874be1a00a9', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '1a762fae722c92540b18829bbcf907591bcbc312' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: 'bcf658380ae3d7e071ddcd239a8370d698d8d8d8', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '2bad0dee6fd729a1ea20dcf83bffc468712a4ed0', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'eeb98c367e333b0109a09ab82e4de4a82fc70516', onClickHandler: e => {
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
