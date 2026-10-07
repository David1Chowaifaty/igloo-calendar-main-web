import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { b as booking_listing, B as BookingListingService, u as updateUserSelection, i as initializeUserSelection } from './index-DxqxLIBw.js';
import { e as getPrivateNote } from './booking-DX6-b7gN.js';
import { t } from './t-BVYK64UG.js';
import { l as isPrivilegedUser, f as downloadFile } from './utils-VLa8HWRW.js';
import { a as formatBookingNumber } from './number-D2n6n8dr.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './locale-scope-CapRuPkM.js';
import './commonSchemas-BxK90Oim.js';
import './types-Clk7NCXk.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-data-Cdv5kmxH.js';
import './functions-8ZwUpUDk.js';
import './ir-date-NNCOayR_.js';
import './language-observer-CHgzsZkY.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './calendar-dates-D3hVfsrC.js';

const irBookingListingMobileCardCss = () => `.sc-ir-booking-listing-mobile-card-h{display:block}.mobile-card__header.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;justify-content:space-between;gap:0.75rem}.mobile-card__body.sc-ir-booking-listing-mobile-card{display:flex;flex-direction:column;gap:0.5rem}.mobile-card__text-center.sc-ir-booking-listing-mobile-card{text-align:center}.mobile-card__rooms.sc-ir-booking-listing-mobile-card{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.mobile-card__room.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;gap:0.25rem}.mobile-card__room-divider.sc-ir-booking-listing-mobile-card{font-size:0.93rem;line-height:1}.mobile-card__extra-services.sc-ir-booking-listing-mobile-card{font-size:0.93rem;margin:0}.mobile-card__dates.sc-ir-booking-listing-mobile-card{display:flex;align-items:center}.mobile-card__actions.sc-ir-booking-listing-mobile-card{display:flex;gap:0.5rem}.mobile-card__action-button.sc-ir-booking-listing-mobile-card{flex:1 1 0%}`;

const IrBookingListingMobileCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irBookingCardAction = createEvent(this, "irBookingCardAction");
    }
    booking;
    totalPersons;
    lastManipulation;
    extraServicesLabel;
    irBookingCardAction;
    emitAction(action) {
        if (!this.booking) {
            return;
        }
        this.irBookingCardAction.emit({ action, booking: this.booking });
    }
    renderRooms() {
        if (!this.booking?.rooms?.length) {
            return null;
        }
        return this.booking.rooms.map((room, idx) => (h("div", { class: "mobile-card__room", key: room.identifier ?? idx }, h("ir-unit-cell", { showDeparture: booking_listing.userSelection?.filter_type === '3', room: room }), idx < this.booking.rooms.length - 1 && h("span", { class: "mobile-card__room-divider" }, ","))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        const identifier = `${this.booking.booking_nbr}`;
        return (h("wa-card", null, h("div", { slot: "header", class: "mobile-card__header" }, h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), h("div", { class: "mobile-card__body" }, h("ir-booked-by-cell", { display: "inline", showContactIcons: this.booking.agent === null, class: "mobile-card__text-center", label: t('Lcz_BookedBy', { fallback: 'Booked by' }), clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), h("ir-booked-on-cell", { display: "inline", label: t('Lcz_BookedOn', { fallback: 'Booked on' }), bookedOn: this.booking.booked_on }), h("div", { class: "mobile-card__dates" }, h("ir-dates-cell", { display: "inline", checkInLabel: t('Lcz_CheckInLabel', { fallback: 'Check-in' }), checkoutLabel: t('Lcz_CheckOutLabel', { fallback: 'Check-out' }), checkIn: this.booking.from_date, checkOut: this.booking.to_date })), booking_listing.userSelection?.filter_type === '2' && (h("ir-arrival-time-cell", { display: "inline", arrival: this.booking.arrival, arrivalTimeLabel: t('Lcz_ArrivalTime', { fallback: 'Arrival time' }) })), h("ir-balance-cell", { guestFinancial: this.booking.guest_financial, display: "inline", label: t('Lcz_Amount', { fallback: 'Amount' }), bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), h("div", { slot: "footer", class: "mobile-card__actions" }, h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, t('Lcz_Edit', { fallback: 'Edit' })), h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' })))));
    }
};
IrBookingListingMobileCard.style = irBookingListingMobileCardCss();

const irBookingListingTableCss = () => `.sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}.ir-text-start.sc-ir-booking-listing-table{text-align:start}`;

const tableCss = () => `.sc-ir-booking-listing-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}.ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.cell--align-start.sc-ir-booking-listing-table{text-align:start !important}.cell--align-center.sc-ir-booking-listing-table{text-align:center !important}.cell--align-end.sc-ir-booking-listing-table{text-align:end !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrBookingListingTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openBookingDetails = createEvent(this, "openBookingDetails");
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
    }
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
};
IrBookingListingTable.style = irBookingListingTableCss() + tableCss();

const irListingHeaderCss = () => `.sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.filters-bar__date_picker.sc-ir-listing-header{min-width:280px}.booking-search-field.sc-ir-listing-header{margin-inline-start:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-inline-end:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-inline-end:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;inset-inline-start:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;inset-inline-end:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-inline-start:40px;width:100%;max-width:400px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-inline-start:40px}}`;

const IrListingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preventPageLoad = createEvent(this, "preventPageLoad");
    }
    propertyId;
    language;
    p;
    inputValue = '';
    isLoading = null;
    preventPageLoad;
    bookingListingService = new BookingListingService();
    // private toDateRef: HTMLIrDatePickerElement;
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue.trim())) {
                updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else if (this.inputValue[3] === '-') {
                updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else {
                updateUserSelection('name', this.inputValue.trim());
            }
        }
        if (this.inputValue === '' && (booking_listing.userSelection.book_nbr !== '' || booking_listing.userSelection.name !== '')) {
            booking_listing.userSelection = {
                ...booking_listing.userSelection,
                name: '',
                book_nbr: '',
            };
        }
        // setParams({
        //   s: booking_listing.userSelection.start_row,
        //   e: booking_listing.userSelection.end_row,
        //   c: booking_listing.userSelection.channel,
        //   status: booking_listing.userSelection.booking_status,
        //   from: booking_listing.userSelection.from,
        //   to: booking_listing.userSelection.to,
        //   filter: booking_listing.userSelection.filter_type,
        // });
        this.isLoading = is_to_export ? 'excel' : 'search';
        this.preventPageLoad.emit('/Get_Exposed_Bookings');
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export });
        this.isLoading = null;
        if (booking_listing.download_url) {
            downloadFile(booking_listing.download_url);
        }
    }
    async handleClearUserField() {
        initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export: false });
    }
    render() {
        //const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (h(Host, { key: '055cf18c916b819493ca488c5d45381517c38bf7' }, h("section", { key: '6dfa6082293b385ca66f5dec98db930ab4584bb4', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '1ec831d0537831f38f9804d6910c19eaca74d36c', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "s", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-date-range-filter", { key: '87201bef289adb47ad69a8342d4cd8ba02dc819b', class: "filters-bar__date_picker", showQuickActions: false, fromDate: booking_listing.userSelection.from, toDate: booking_listing.userSelection.to, withClear: false, selectionMode: "auto", onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                let to_date = to;
                const toDate = hooks(to);
                const fromDate = hooks(from);
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            } }), h("wa-select", { key: 'd9ba294fc8ce3a7c6ae62138d851738d2366dd39', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "s", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '7bb48d703cd410e12cd3cb69b6fc71573bd95a09', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "s", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'f2351d7cc1db5fe49c1f385a658e890b52437e9d', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '4f9aad9e0d09c89faaa7e018110234666da9e397', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "s", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'a73eef40accc9e184240641d771c62b2ce92c3d3', class: "d-flex flex-fill align-items-end m-0", style: { gap: '10px' } }, h("wa-tooltip", { key: '52a7534ddcdf938894c25573576251ac887d7cfe', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: 'c63b07f24dd2f2f9adb16a5170378b28c0188012', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '589f89fbd25c7377eb8f7bb6a757e6f418229764', name: "magnifying-glass" })), h("wa-tooltip", { key: '78ed0166db5316a7d5b537709163c6f302d49099', for: "clear-btn" }, t('Lcz_Clear', { fallback: 'Clear' })), h("ir-custom-button", { key: '6eddcbf79a2822ff50bfdda8d6286913b2c60175', id: "clear-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'd903755e22a0766cf4cbbb63648dd36b9c73a27c', name: "eraser" })), h("wa-tooltip", { key: 'ad4aeaf433f001e332e19f8359dda13cd9d51f3d', for: "excel-btn" }, t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), h("ir-custom-button", { key: 'd4f6155a3294469a133122251f7033d33e4edef5', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'e2ea81c4ccfa555e363d2ef57f069b852e8bdb3d', name: "file-excel", variant: "regular" }))))));
    }
};
IrListingHeader.style = irListingHeaderCss();

export { IrBookingListingMobileCard as ir_booking_listing_mobile_card, IrBookingListingTable as ir_booking_listing_table, IrListingHeader as ir_listing_header };
