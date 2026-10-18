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
        return (index.h(index.Host, { key: 'f348d0b23811c42753aff1059f5568ac8248d935' }, index.h("div", { key: '69e7b4440fdcabdbc92ea1c270acd9c90232b33e', class: "table--container" }, index.h("table", { key: 'd317c37cec29630e9830757cdc3527ffef84814e', class: "table data-table" }, index.h("thead", { key: '711f40794a61e1a0b2a4bb334398f647c12dacf4' }, index.h("tr", { key: '8336207b36b84414b0d0647d1d48742e46778e1d' }, utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && index.h("th", { key: 'f86212268b163d3a5dfdf7be26f2ec8aac0c7ec3', class: "ir-text-start" }, t.t('Lcz_Property', { fallback: 'Property' })), index.h("th", { key: 'fbfc2823fcd70bfd996353f9c364c1424b3ba0d3' }, index.h("span", { key: '39601123e6257941c485db81df6c685826c2e179', class: 'arrivals-table__departure__cell' }, t.t('Lcz_BookingHash', { fallback: 'Booking#' }))), index.h("th", { key: 'ffc6059bd703529acbd99c5f36886b562caab27e' }, t.t('Lcz_BookedOn', { fallback: 'Booked on' })), index.h("th", { key: '526bfa5268675430ff83f230e51213d9f3e8639e' }, index.h("div", { key: '0e0a213f42b88a6a7ad5efb16c8a327bdcbbebf2' }, index.h("p", { key: 'ff0c253e2ce62d4202d47925cb3449e8e7dcd2d4' }, t.t('Lcz_BookedBy', { fallback: 'Booked by' })))), index.h("th", { key: 'ca5ead1f18d357cb2f076dc9105ca67855af2922' }, t.t('Lcz_Dates', { fallback: 'Dates' })), index$1.booking_listing.userSelection?.filter_type === '2' && index.h("th", { key: '9310554125dcaa65f4d90b835c8dbe92664a93f5' }, t.t('Lcz_ArrivalTime', { fallback: 'Arrival time' })), index.h("th", { key: '8c3dacff22371b97611e176bd74909b12df7c8b0' }, t.t('Lcz_Services', { fallback: 'Services' })), index.h("th", { key: '1dfc163b62bc312b02f8474adfdab7d258f60873', class: "text-center" }, index.h("p", { key: '9de54d383b748d86dca682bc02a72c0c19ab9bd9' }, t.t('Lcz_Amount', { fallback: 'Amount' }), " "), index.h("wa-tooltip", { key: '5f1066d675efba816f79720d7368942812e5a7b1', for: "balance-info" }, t.t('Lcz_BookingBalanceClickToSettle', { fallback: 'Booking balance click to settle.' })), index.h("div", { key: 'a2f20d2134f1bcdd7563e8e889f01627a0fcf7b3', style: { width: 'fit-content', marginInline: 'auto' } }, index.h("ir-custom-button", { key: '25ca65ebe8be4db38946b18bcca13ed104f4dd02', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, t.t('Lcz_GuestBalance', { fallback: 'Guest Balance' })))), index.h("th", { key: '3fcef2694d2ce7c040545939d9d6dc41076fd662', class: "text-center" }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: 'baee2cc8da7696061cd7899927f5f9d65f641060' }))), index.h("tbody", { key: 'c32deb4a22b2ab5b8e0b293c8e9f41c829ead153' }, index$1.booking_listing.bookings.length === 0 && (index.h("tr", { key: '1478b494e6f33d156e557fd5582d64842aecf2e0' }, index.h("td", { key: 'cb16b5dc3214273252e2005ef89e9e7206684de5', colSpan: utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, t.t('Lcz_NoBookingsFound', { fallback: 'No bookings found' })))), index$1.booking_listing.bookings?.map(booking => this.renderRow(booking))))), index.h("div", { key: '69f6f5f3673f63ee65d31c359f9da9e66a27f75c', class: "card--container" }, index$1.booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (index.h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (index.h("ir-pagination", { key: 'ab5c5c8bd8ae84181e4ba9a1a723478c9b2afcb7', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: t.t('Lcz_Bookings', { fallback: 'bookings' }), onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (index.h("ir-custom-button", { key: 'ce547e3ef0317241c33c9d9d5bc0ec8dffd15f4f', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, t.t('Lcz_LoadMore', { fallback: 'Load more' }))), index.h("ir-dialog", { key: '50f59be488efacd69794c1fc318e24900a6ccfef', label: t.t('Lcz_Delete', { fallback: 'Delete' }), open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, index.h("span", { key: '2926d2af208ea950e501b0f1b8f0431a624c59ab' }, t.t('Lcz_SureYouWantToDeleteBookingNbr') + number.formatBookingNumber(this.booking_nbr)), index.h("div", { key: '198664d2e70a9b96f103f66648a3a9faccda59b3', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '3648ea456a00fe002184be580e7536946a1c99db', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '72b2bf51020352fc1f380ef8fc269c10603b6b30', onClickHandler: e => {
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
        return (index.h(index.Host, { key: 'ed65dd043a835cd14e80a8f1a28a450e2544572d' }, index.h("section", { key: 'fee5a308cdd6a4ecdfcfb1faaf283ce53b1181d8', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("wa-select", { key: '89e12b1b98ae0529ccb28a18411856648ad05ce1', onchange: e => {
                index$1.updateUserSelection('filter_type', e.target.value);
            }, value: index$1.booking_listing.userSelection.filter_type?.toString(), size: "s", defaultValue: index$1.booking_listing?.types[0]?.id?.toString() }, index$1.booking_listing?.types.map(b => (index.h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), index.h("ir-date-range-filter", { key: '273c0b23f9cd0aa567b085bccc67a95900b09d78', class: "filters-bar__date_picker", showQuickActions: false, fromDate: index$1.booking_listing.userSelection.from, toDate: index$1.booking_listing.userSelection.to, withClear: false, selectionMode: "auto", onDatesChanged: e => {
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
            } }), index.h("wa-select", { key: 'ee79ef96a0b9edaf18db48ffe89f20e24af197d2', onchange: e => {
                index$1.updateUserSelection('booking_status', e.target.value);
            }, value: index$1.booking_listing.userSelection.booking_status, size: "s", defaultValue: index$1.booking_listing?.statuses[0]?.code }, index$1.booking_listing?.statuses.map(b => (index.h("wa-option", { key: b.code, value: b.code }, b.name)))), !utils.isPrivilegedUser(index$1.booking_listing.userSelection.userTypeCode) && (index.h("wa-select", { key: '97367fac76d4dac28fa6e7c24b40d55c98b214b1', onchange: e => {
                index$1.updateUserSelection('channel', e.target.value);
            }, value: index$1.booking_listing.userSelection.channel, size: "s", defaultValue: index$1.booking_listing.userSelection.channel }, index.h("wa-option", { key: '361164bc0cb0dbc295d5f960098180f79819b453', value: "" }, t.t('Lcz_AllChannels', { fallback: 'All channels' })), index$1.booking_listing?.channels.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name))))), index.h("wa-select", { key: '1bad3eec311dd17cd00d4864a03b8c001542217e', onchange: e => {
                index$1.updateUserSelection('balance_filter', e.target.value);
            }, value: index$1.booking_listing.userSelection.balance_filter, size: "s", defaultValue: index$1.booking_listing?.balance_filter[0]?.value }, index$1.booking_listing?.balance_filter.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name)))), index.h("div", { key: '837b7cc3ac3a05fc228de30b1bf3c450dfcd9e6f', class: "d-flex flex-fill align-items-end m-0", style: { gap: '10px' } }, index.h("wa-tooltip", { key: 'a8de709d4f5e13e51f2ced3eb5138fb12b2df753', for: "search-btn" }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: '9ebbdee14b2116799bba51f8ba815a481b139e5b', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "outlined" }, index.h("wa-icon", { key: '4bee5955703455d745575763d4ef1506570b34f2', name: "magnifying-glass" })), index.h("wa-tooltip", { key: '98eb7ecb5d63966ead39e521c0ab71a27afc2722', for: "clear-btn" }, t.t('Lcz_Clear', { fallback: 'Clear' })), index.h("ir-custom-button", { key: '9d77629bb4055dceed561a08900deb3a53930be0', id: "clear-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleClearUserField() }, index.h("wa-icon", { key: 'd7986e603ee3b501c7c4b4a5e4f3a65caaca18db', name: "eraser" })), index.h("wa-tooltip", { key: '85ca44f31543e2a60486c4f40c6130c2b21ce7d3', for: "excel-btn" }, t.t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), index.h("ir-custom-button", { key: '2bcbd80a2b2b2a1ccfffb7d4708d96a1ca26a794', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "outlined", onClickHandler: () => this.handleSearchClicked(true) }, index.h("wa-icon", { key: '25015c2fe81a0e8dd1713f5137663b8cf3aed6eb', name: "file-excel", variant: "regular" }))))));
    }
};
IrListingHeader.style = irListingHeaderCss();

exports.ir_booking_listing_mobile_card = IrBookingListingMobileCard;
exports.ir_booking_listing_table = IrBookingListingTable;
exports.ir_listing_header = IrListingHeader;
