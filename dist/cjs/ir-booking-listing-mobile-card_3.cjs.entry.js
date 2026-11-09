'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-1YNPb0xd.js');
var booking = require('./booking-CUXrud2_.js');
var t = require('./t-CqJPQrfm.js');
var utils = require('./utils-Do0GLh35.js');
var number = require('./number-xBpNWk3H.js');
var moment = require('./moment-CdViwxPQ.js');
require('./locale-scope-Cch-vf1R.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./language-observer-DKp37LIu.js');
require('./types-BVJQZ50e.js');
require('./calendar-data-ShS6b-Ns.js');
require('./functions-DABc6-ec.js');
require('./ir-date-CbkOKs2C.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./calendar-dates-BxDGM1ix.js');

const irBookingListingMobileCardCss = () => `.sc-ir-booking-listing-mobile-card-h{display:block}.mobile-card__header.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;justify-content:space-between;gap:0.75rem}.mobile-card__body.sc-ir-booking-listing-mobile-card{display:flex;flex-direction:column;gap:0.5rem}.mobile-card__text-center.sc-ir-booking-listing-mobile-card{text-align:center}.mobile-card__rooms.sc-ir-booking-listing-mobile-card{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.mobile-card__room.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;gap:0.25rem}.mobile-card__room-divider.sc-ir-booking-listing-mobile-card{font-size:0.93rem;line-height:1}.mobile-card__extra-services.sc-ir-booking-listing-mobile-card{font-size:0.93rem;margin:0}.mobile-card__dates.sc-ir-booking-listing-mobile-card{display:flex;align-items:center}.mobile-card__actions.sc-ir-booking-listing-mobile-card{display:flex;gap:0.5rem}.mobile-card__action-button.sc-ir-booking-listing-mobile-card{flex:1 1 0%}`;

const IrBookingListingMobileCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irBookingCardAction = index.createEvent(this, "irBookingCardAction");
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
        return this.booking.rooms.map((room, idx) => (index.h("div", { class: "mobile-card__room", key: room.identifier ?? idx }, index.h("ir-unit-cell", { showDeparture: index$1.booking_listing.userSelection?.filter_type === '3', room: room }), idx < this.booking.rooms.length - 1 && index.h("span", { class: "mobile-card__room-divider" }, ","))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        const identifier = `${this.booking.booking_nbr}`;
        return (index.h("wa-card", null, index.h("div", { slot: "header", class: "mobile-card__header" }, index.h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), index.h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), index.h("div", { class: "mobile-card__body" }, index.h("ir-booked-by-cell", { display: "inline", showContactIcons: this.booking.agent === null, class: "mobile-card__text-center", label: t.t('Lcz_BookedBy', { fallback: 'Booked by' }), clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: booking.getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), index.h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && index.h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), index.h("ir-booked-on-cell", { display: "inline", label: t.t('Lcz_BookedOn', { fallback: 'Booked on' }), bookedOn: this.booking.booked_on }), index.h("div", { class: "mobile-card__dates" }, index.h("ir-dates-cell", { display: "inline", checkInLabel: t.t('Lcz_CheckInLabel', { fallback: 'Check-in' }), checkoutLabel: t.t('Lcz_CheckOutLabel', { fallback: 'Check-out' }), checkIn: this.booking.from_date, checkOut: this.booking.to_date })), index$1.booking_listing.userSelection?.filter_type === '2' && (index.h("ir-arrival-time-cell", { display: "inline", arrival: this.booking.arrival, arrivalTimeLabel: t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' }) })), index.h("ir-balance-cell", { guestFinancial: this.booking.guest_financial, display: "inline", label: t.t('Lcz_Amount', { fallback: 'Amount' }), bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), index.h("div", { slot: "footer", class: "mobile-card__actions" }, index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, t.t('Lcz_Edit', { fallback: 'Edit' })), index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' })))));
    }
};
IrBookingListingMobileCard.style = irBookingListingMobileCardCss();

const irBookingListingTableCss = () => `.sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}.ir-text-start.sc-ir-booking-listing-table{text-align:start}`;

const tableCss = () => `.sc-ir-booking-listing-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}.ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.cell--align-start.sc-ir-booking-listing-table{text-align:start !important}.cell--align-center.sc-ir-booking-listing-table{text-align:center !important}.cell--align-end.sc-ir-booking-listing-table{text-align:end !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrBookingListingTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openBookingDetails = index.createEvent(this, "openBookingDetails");
        this.requestPageChange = index.createEvent(this, "requestPageChange");
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange");
    }
    booking_nbr;
    isLoading;
    isLoadMoreLoading = false;
    openBookingDetails;
    requestPageChange;
    requestPageSizeChange;
    bookingListingsService = new index$1.BookingListingService();
    async deleteBooking() {
        if (!this.booking_nbr) {
            return;
        }
        try {
            this.isLoading = true;
            await this.bookingListingsService.removeExposedBooking({ booking_nbr: this.booking_nbr, is_to_revover: true });
            index$1.booking_listing.bookings = [...index$1.booking_listing.bookings.filter(b => b.booking_nbr?.toString() !== this.booking_nbr)];
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
        const totalRecords = index$1.booking_listing.pagination.totalRecords;
        const currentCount = index$1.booking_listing.bookings.length;
        if (!totalRecords || currentCount >= totalRecords) {
            return;
        }
        const pageSize = index$1.booking_listing.pagination.pageSize || index$1.booking_listing.rowCount || 20;
        const nextStartRow = Math.ceil(currentCount / pageSize) * pageSize;
        const nextEndRow = Math.min(nextStartRow + pageSize, totalRecords);
        this.isLoadMoreLoading = true;
        try {
            await this.bookingListingsService.getExposedBookings({
                ...index$1.booking_listing.userSelection,
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
    renderRow(booking$1) {
        const rowKey = `${booking$1.booking_nbr}`;
        const totalPersons = this.calculateTotalPersons(booking$1);
        const { lastManipulation, modified } = utils.isBookingModified(booking$1);
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && index.h("td", null, booking$1.property.name), index.h("td", null, index.h("ir-booking-number-cell", { origin: booking$1.origin, source: booking$1.source, channelBookingNumber: booking$1.channel_booking_nbr, bookingNumber: booking$1.booking_nbr })), index.h("td", null, index.h("ir-booked-on-cell", { bookedOn: booking$1.booked_on })), index.h("td", { class: "text-center" }, index.h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking$1.guest.nbr_confirmed_bookings > 1 && !booking$1.agent, guest: booking$1.guest, identifier: booking$1.booking_nbr, showContactIcons: booking$1.agent === null, showPersons: true, showPrivateNoteDot: booking.getPrivateNote(booking$1.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking$1.promo_key, promoKey: booking$1.promo_key, showLoyaltyIcon: booking$1.is_in_loyalty_mode && !booking$1.promo_key })), index.h("td", null, index.h("ir-dates-cell", { checkIn: booking$1.from_date, checkOut: booking$1.to_date })), index$1.booking_listing.userSelection?.filter_type === '2' && (index.h("td", null, index.h("ir-arrival-time-cell", { arrival: booking$1.arrival }))), index.h("td", null, index.h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking$1.rooms.map(room => (index.h("ir-unit-cell", { showDeparture: index$1.booking_listing?.userSelection?.filter_type === '3', key: room.identifier, room: room }))), booking$1.extra_services && index.h("p", { style: { fontSize: '0.93rem' } }, t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' })))), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { guestFinancial: booking$1.guest_financial, "data-css": "center", bookingNumber: booking$1.booking_nbr, isDirect: booking$1.is_direct, statusCode: booking$1.status.code, currencySymbol: booking$1.currency.symbol, financial: booking$1.financial })), index.h("td", { class: "text-center" }, index.h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: modified, status: booking$1.status, isRequestToCancel: booking$1.is_requested_to_cancel, bookingNumber: booking$1.booking_nbr })), index.h("td", null, index.h("div", { class: "" }, index.h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking: booking$1 });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = index$1.booking_listing.pagination;
        const canLoadMore = index$1.booking_listing.bookings.length > 0 && index$1.booking_listing.bookings.length < pagination.totalRecords;
        return (index.h(index.Host, { key: '57d9e0b0a868c21f364bf1b741357ebfbb39659f' }, index.h("div", { key: '65106c792982a8bb06ab0561d4ceea27cbef3355', class: "table--container" }, index.h("table", { key: 'b309bc96ddae9f626a28c53fc2e19698533967ac', class: "table data-table" }, index.h("thead", { key: '33a99a318c8802764d4251f34ad179189932bb73' }, index.h("tr", { key: 'e8de9154f89abe52a5173c2222aceaa3c6e3ecc8' }, utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && index.h("th", { key: '70f2cc47ec3e0759908b702cf7fd227d2aec4832', class: "ir-text-start" }, t.t('Lcz_Property', { fallback: 'Property' })), index.h("th", { key: '9de7147f2c3764cee6e2e8aeec719680237c160e' }, index.h("span", { key: '8f8690f58a2e0b6dac7ff2c940fcbc825542252b', class: 'arrivals-table__departure__cell' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: '215f1dedb5bb14fbe0f21cca76499f597a60b89d' }, t.t('Lcz_BookedOn', { fallback: 'Booked on' })), index.h("th", { key: 'c5612d40b82c44896029402b4f7aad43fa656fe0' }, index.h("div", { key: '8f06d51566fce47e57a416729e5eb2b5bcdd34da' }, index.h("p", { key: '6f1e96af1dcf027e5b5be49d9ecfe0d61b804d58' }, t.t('Lcz_BookedBy', { fallback: 'Booked by' })))), index.h("th", { key: 'fa7ab832822f7c735cc9811b40ace507681e1836' }, t.t('Lcz_Dates', { fallback: 'Dates' })), index$1.booking_listing.userSelection?.filter_type === '2' && index.h("th", { key: '8d0ae8b815440a8841798e8bc052e427c7e9ff6a' }, t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), index.h("th", { key: 'b1e983ba9f0af08b39bd0686100c3acbef382469' }, t.t('Lcz_Services', { fallback: 'Services' })), index.h("th", { key: '53d945a99b106ac480c095216420595bb77b7210', class: "text-center" }, index.h("p", { key: '9cc4318bc20f53d012a5b40f092445a36a866fea' }, t.t('Lcz_Amount', { fallback: 'Amount' }), " "), index.h("wa-tooltip", { key: 'aab35605eaa2fbb9f301cf4f20f45a5b02ccd74d', for: "balance-info" }, t.t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), index.h("div", { key: '612909b8d77516f3fd3d7d90aa8e86e518587a02', style: { width: 'fit-content', marginInline: 'auto' } }, index.h("ir-custom-button", { key: 'b002c5c2c236d7f8d4bb51f924e46dbd25a45482', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t.t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), index.h("th", { key: '756473c81c54344220660dd9c07bb9e56897a5ee', class: "text-center" }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: '166528814d606c26cbf6750fceb31ceef7fbba45' }))), index.h("tbody", { key: 'e75520dd437d6a5934647f3741b30237bd3b0cd5' }, index$1.booking_listing.bookings.length === 0 && (index.h("tr", { key: 'bca8565bcc3480a77c2fa745865a75e5ea20d08f' }, index.h("td", { key: '93ccbf35a8d582cf2f9676a5478a892777ba6f00', colSpan: utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t.t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), index$1.booking_listing.bookings?.map(booking => this.renderRow(booking))))), index.h("div", { key: '4e88a8e173c8f051ba46506a692afe4527e9cd87', class: "card--container" }, index$1.booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (index.h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (index.h("ir-pagination", { key: '8461c76e829ada3464078fae735ab5d399fdf4f5', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t.t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (index.h("ir-custom-button", { key: 'cd22f09b39c34726d51b286ca0031c7f5c63404c', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t.t('Lcz_LoadMore', { fallback: 'Load more' }))), index.h("ir-dialog", { key: 'ef3979de72b7936047821a247cdf18063256ff7c', label: t.t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, index.h("span", { key: '8ef90268c135078ad051224692c623ea02741e4f' }, t.t('Lcz_SureYouWantToDeleteBookingNbr') + number.formatBookingNumber(this.booking_nbr)), index.h("div", { key: '31f1eb3d7e7362ebe64dc0264e36aedd5fe2bb3c', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '94ce6cfc98c82549f4abb68df7f0141015ec4715', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '986f57c9586fe642b93c7955fda4ee58a965bf07', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "m", variant: "danger" }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrBookingListingTable.style = irBookingListingTableCss() + tableCss();

const irListingHeaderCss = () => `.sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.filters-bar__date_picker.sc-ir-listing-header{min-width:280px}.booking-search-field.sc-ir-listing-header{margin-inline-start:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-inline-end:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-inline-end:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;inset-inline-start:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;inset-inline-end:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-inline-start:40px;width:100%;max-width:400px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-inline-start:40px}}`;

const IrListingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad");
    }
    propertyId;
    language;
    p;
    inputValue = '';
    isLoading = null;
    preventPageLoad;
    bookingListingService = new index$1.BookingListingService();
    // private toDateRef: HTMLIrDatePickerElement;
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue.trim())) {
                index$1.updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else if (this.inputValue[3] === '-') {
                index$1.updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else {
                index$1.updateUserSelection('name', this.inputValue.trim());
            }
        }
        if (this.inputValue === '' && (index$1.booking_listing.userSelection.book_nbr !== '' || index$1.booking_listing.userSelection.name !== '')) {
            index$1.booking_listing.userSelection = {
                ...index$1.booking_listing.userSelection,
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
        await this.bookingListingService.getExposedBookings({ ...index$1.booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export });
        this.isLoading = null;
        if (index$1.booking_listing.download_url) {
            utils.downloadFile(index$1.booking_listing.download_url);
        }
    }
    async handleClearUserField() {
        index$1.initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings({ ...index$1.booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export: false });
    }
    render() {
        //const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (index.h(index.Host, { key: '0bc801a10009bc7b9ba0d8c643699b7f8386c725' }, index.h("section", { key: '890bec05d8fcf4c43ad68255ba6b8911a948b3f5', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("wa-select", { key: 'f4ba3aeed7b263524094e278bb4af8caac872635', onchange: e => {
                index$1.updateUserSelection('filter_type', e.target.value);
            }, value: index$1.booking_listing.userSelection.filter_type?.toString(), size: "s", defaultValue: index$1.booking_listing?.types[0]?.id?.toString() }, index$1.booking_listing?.types.map(b => (index.h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), index.h("ir-date-range-filter", { key: '5f7f151ca782d43e35865abd94cea342df27a36e', class: "filters-bar__date_picker", showQuickActions: false, fromDate: index$1.booking_listing.userSelection.from, toDate: index$1.booking_listing.userSelection.to, withClear: false, selectionMode: "auto", onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                let to_date = to;
                const toDate = moment.hooks(to);
                const fromDate = moment.hooks(from);
                if (toDate.isSame(moment.hooks(index$1.booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment.hooks(index$1.booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = index$1.booking_listing.userSelection.to;
                }
                index$1.booking_listing.userSelection = { ...index$1.booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            } }), index.h("wa-select", { key: '046d55170ced1deff7f1b8ed0cff2974f06bf5e3', onchange: e => {
                index$1.updateUserSelection('booking_status', e.target.value);
            }, value: index$1.booking_listing.userSelection.booking_status, size: "s", defaultValue: index$1.booking_listing?.statuses[0]?.code }, index$1.booking_listing?.statuses.map(b => (index.h("wa-option", { key: b.code, value: b.code }, b.name)))), !utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && (index.h("wa-select", { key: '08bfdb7bc09e17211fbee14f90552be9cf3429d1', onchange: e => {
                index$1.updateUserSelection('channel', e.target.value);
            }, value: index$1.booking_listing.userSelection.channel, size: "s", defaultValue: index$1.booking_listing.userSelection.channel }, index.h("wa-option", { key: '14a0240c6bdd9117601d2b2ce8ad1c98429ee20d', value: "" }, t.t('Lcz_AllChannels', { fallback: 'All channels' })), index$1.booking_listing?.channels.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name))))), index.h("wa-select", { key: '6a06809f2d32bd26876040bad81b40c84c6aafe0', onchange: e => {
                index$1.updateUserSelection('balance_filter', e.target.value);
            }, value: index$1.booking_listing.userSelection.balance_filter, size: "s", defaultValue: index$1.booking_listing?.balance_filter[0]?.value }, index$1.booking_listing?.balance_filter.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name)))), index.h("div", { key: '898b3ed80d9e79fd6421f21ab3f6cf583b3bb920', class: "d-flex flex-fill align-items-end m-0", style: { gap: '10px' } }, index.h("wa-tooltip", { key: '584e9a49e09dc644f023b83c521fa5f018f026ff', for: "search-btn" }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: 'cd5f990bfafaca36237ba16975974c7547bd03c1', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "outlined" }, index.h("wa-icon", { key: 'd2f12234427279480995b3010df57b9c329a5a7c', name: "magnifying-glass" })), index.h("wa-tooltip", { key: '02b75f6404330c3be724ae67832f38fed295d6fd', for: "clear-btn" }, t.t('Lcz_Clear', { fallback: 'Clear' })), index.h("ir-custom-button", { key: '218a2ca8eaa23fec5dc9dfed3fba100dffe0e41d', id: "clear-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleClearUserField() }, index.h("wa-icon", { key: '46aa631a6111eb95e17f341bef38dc13376120bf', name: "eraser" })), index.h("wa-tooltip", { key: 'be0fefef049962e37f12e7437c6e1e7753b0e260', for: "excel-btn" }, t.t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), index.h("ir-custom-button", { key: 'f75c63773c721a5cb389881a09c730fe5d963d06', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleSearchClicked(true) }, index.h("wa-icon", { key: '42371dde82b719dc7fd2bc7cc23d9c7b965e6b8e', name: "file-excel", variant: "regular" }))))));
    }
};
IrListingHeader.style = irListingHeaderCss();

exports.ir_booking_listing_mobile_card = IrBookingListingMobileCard;
exports.ir_booking_listing_table = IrBookingListingTable;
exports.ir_listing_header = IrListingHeader;
