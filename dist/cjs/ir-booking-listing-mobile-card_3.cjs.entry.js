'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-B0rmpW22.js');
var booking = require('./booking-DhSfYcY7.js');
var t = require('./t-CqJPQrfm.js');
var utils = require('./utils-ZKsQb8eV.js');
var number = require('./number-xBpNWk3H.js');
var moment = require('./moment-CdViwxPQ.js');
require('./locale-scope-Cch-vf1R.js');
require('./commonSchemas-D4iFLV5-.js');
require('./types-BVJQZ50e.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-data-ShS6b-Ns.js');
require('./functions-CaNAUyCw.js');
require('./ir-date-CbkOKs2C.js');
require('./language-observer-DKp37LIu.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
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
        return (index.h(index.Host, { key: '59736dcc002cc870907f6cc9f6884e0bfcea828b' }, index.h("div", { key: '0be47828d400992d12b0ca76d380035dea2671aa', class: "table--container" }, index.h("table", { key: '96a37b3b25359710b537ba889d047be63896822b', class: "table data-table" }, index.h("thead", { key: '56837fdd49e34483761fc2e392c68283e854b481' }, index.h("tr", { key: '473d027da5bfb1570a54162a8177be6ae90705f7' }, utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && index.h("th", { key: '8872c6dbda5b9ec9d6614351904b304358f1fec6', class: "ir-text-start" }, t.t('Lcz_Property', { fallback: 'Property' })), index.h("th", { key: '35ddcd7483a05ec4e1fa1d67877d120efd413dca' }, index.h("span", { key: '5a4997829ed1e0ceeb6fc32e7f70360e707006cd', class: 'arrivals-table__departure__cell' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: 'dabf3d0fcf1e3f22dd6d890dad4bb63f7ba33cf7' }, t.t('Lcz_BookedOn', { fallback: 'Booked on' })), index.h("th", { key: '87035edbc84367ce66591b9b27d62990c3b49154' }, index.h("div", { key: '702ad570bd3203ec9ece455f25cc1ade33a00e62' }, index.h("p", { key: 'bd90c8e03fa687078f609087b906fe932d46c0f1' }, t.t('Lcz_BookedBy', { fallback: 'Booked by' })))), index.h("th", { key: '2f8ff9bfff411d9b5882cba7a8230c330d17138e' }, t.t('Lcz_Dates', { fallback: 'Dates' })), index$1.booking_listing.userSelection?.filter_type === '2' && index.h("th", { key: 'bb9739746b0f71f3b9fad958f0c50b8df48b5fb7' }, t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), index.h("th", { key: '1e87905c2798be9b98bd533b1e750a9642037bc2' }, t.t('Lcz_Services', { fallback: 'Services' })), index.h("th", { key: 'b9890c75ce050aa71f399aa3115c4e428e0dbfe1', class: "text-center" }, index.h("p", { key: '43d43cdde54658037069662bb65575470150b112' }, t.t('Lcz_Amount', { fallback: 'Amount' }), " "), index.h("wa-tooltip", { key: '269e0e123bb2d390203403e41ca92fc00ea1504c', for: "balance-info" }, t.t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), index.h("div", { key: 'b1e61337972070457eb01277365a9402b8d84ee9', style: { width: 'fit-content', marginInline: 'auto' } }, index.h("ir-custom-button", { key: 'd514fb41e3aeeeb69ec900a452cfc9979d964156', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t.t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), index.h("th", { key: '9219b5193a57b4aca1834d0fd84fc8c345fc291b', class: "text-center" }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: 'ecbbd42dd9a2c660b25cf34cb6d1dae78bc96ff9' }))), index.h("tbody", { key: '2995c7ac975dffcba3a9983016a36feea5536ac9' }, index$1.booking_listing.bookings.length === 0 && (index.h("tr", { key: '6ba3aa67d89fc330540f18108bef7133ce7d9d02' }, index.h("td", { key: '728a361813b1dcf6e35b0a3e5a83b8d1700a3aa3', colSpan: utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t.t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), index$1.booking_listing.bookings?.map(booking => this.renderRow(booking))))), index.h("div", { key: '72ce82245a4db659095ccb331b61c7e3ede5304d', class: "card--container" }, index$1.booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (index.h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (index.h("ir-pagination", { key: '5d0c4414802b823b5342d8ba919ae57d2e1d5a10', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t.t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (index.h("ir-custom-button", { key: '51365751f60bbd9342f059b46ab728d05c2f1b25', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t.t('Lcz_LoadMore', { fallback: 'Load more' }))), index.h("ir-dialog", { key: '045c8bb66ad2e53cd0e5f9f622ebd3a75086eaa6', label: t.t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, index.h("span", { key: '5c05d963c95cea489b8f782d5409e2f6451effb4' }, t.t('Lcz_SureYouWantToDeleteBookingNbr') + number.formatBookingNumber(this.booking_nbr)), index.h("div", { key: '410ce637ff3836af45982d1dee051c47b17ff1c4', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '21b7993365619cb390eed5e73ab37cfbb70864dd', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'a3edcadac5a54670ef13d6897ed9a776ab9eafd9', onClickHandler: e => {
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
        return (index.h(index.Host, { key: '6e30c7d0ffb654e9d2545e8c4e924aadcde5a5e1' }, index.h("section", { key: '14bcea6b6f6195112ac1b3e5333b99e19e1249b2', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("wa-select", { key: '94956a623a1b50a8a385e1a052901b1cccd11f07', onchange: e => {
                index$1.updateUserSelection('filter_type', e.target.value);
            }, value: index$1.booking_listing.userSelection.filter_type?.toString(), size: "s", defaultValue: index$1.booking_listing?.types[0]?.id?.toString() }, index$1.booking_listing?.types.map(b => (index.h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), index.h("ir-date-range-filter", { key: 'd7200a1df54409dc071cc434648b887f69da8026', class: "filters-bar__date_picker", showQuickActions: false, fromDate: index$1.booking_listing.userSelection.from, toDate: index$1.booking_listing.userSelection.to, withClear: false, selectionMode: "auto", onDatesChanged: e => {
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
            } }), index.h("wa-select", { key: '7a1d7434eabcfb47ab640ba7665ca2d92c6dedd1', onchange: e => {
                index$1.updateUserSelection('booking_status', e.target.value);
            }, value: index$1.booking_listing.userSelection.booking_status, size: "s", defaultValue: index$1.booking_listing?.statuses[0]?.code }, index$1.booking_listing?.statuses.map(b => (index.h("wa-option", { key: b.code, value: b.code }, b.name)))), !utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && (index.h("wa-select", { key: '0c8268b10d4e0d98d3e3293ad1881a284a09f3a8', onchange: e => {
                index$1.updateUserSelection('channel', e.target.value);
            }, value: index$1.booking_listing.userSelection.channel, size: "s", defaultValue: index$1.booking_listing.userSelection.channel }, index.h("wa-option", { key: '1f45431734401e481d29d94203248a60083c2eac', value: "" }, t.t('Lcz_AllChannels', { fallback: 'All channels' })), index$1.booking_listing?.channels.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name))))), index.h("wa-select", { key: '85299b29d3b5bb625c77ce35592fcc1483cab295', onchange: e => {
                index$1.updateUserSelection('balance_filter', e.target.value);
            }, value: index$1.booking_listing.userSelection.balance_filter, size: "s", defaultValue: index$1.booking_listing?.balance_filter[0]?.value }, index$1.booking_listing?.balance_filter.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name)))), index.h("div", { key: '9344a5cc5cae5621807942ddbcc6c84df0c11ba8', class: "d-flex flex-fill align-items-end m-0", style: { gap: '10px' } }, index.h("wa-tooltip", { key: '23c55763f7d7342c41baea8dda4dc822f3a4e083', for: "search-btn" }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: 'a6739e5dc3f24fe841dc3a86f55ae96465cdea53', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "outlined" }, index.h("wa-icon", { key: '8b31a3d51846304647d8f370de9148b1fc97c3f1', name: "magnifying-glass" })), index.h("wa-tooltip", { key: 'ea795fe21c264a36e2d52b28d8cbcd93b43605ec', for: "clear-btn" }, t.t('Lcz_Clear', { fallback: 'Clear' })), index.h("ir-custom-button", { key: 'e0d1c7fd1331bc841992752fd1c52c5d8c3e98b3', id: "clear-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleClearUserField() }, index.h("wa-icon", { key: '11803220fee1bf68f102da32dbeeec2038f41c95', name: "eraser" })), index.h("wa-tooltip", { key: '78676932eb694fd5a19e8235f1962d811f77c861', for: "excel-btn" }, t.t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), index.h("ir-custom-button", { key: 'da3b4b52757f5df1ce17344042665fbcf4982543', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleSearchClicked(true) }, index.h("wa-icon", { key: '806b862344cf96ca7bc47759e89fa207708efd63', name: "file-excel", variant: "regular" }))))));
    }
};
IrListingHeader.style = irListingHeaderCss();

exports.ir_booking_listing_mobile_card = IrBookingListingMobileCard;
exports.ir_booking_listing_table = IrBookingListingTable;
exports.ir_listing_header = IrListingHeader;
