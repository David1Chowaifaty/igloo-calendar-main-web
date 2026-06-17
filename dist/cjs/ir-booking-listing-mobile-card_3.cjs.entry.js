'use strict';

var index = require('./index-DtXemfU-.js');
var booking_listing_service = require('./booking_listing.service-DYXLTAXg.js');
var booking = require('./booking-ZNHS2fN9.js');
var locales_store = require('./locales.store-CtV5-KJh.js');
var utils = require('./utils-CsChIHgF.js');
var moment = require('./moment-CdViwxPQ.js');
require('./index-koQJ3Kgt.js');
require('./index-CLqkDPTC.js');
require('./axios-C-Phc0sj.js');
require('./calendar-data--UuFzfsJ.js');
require('./type-Dy9pVS4V.js');

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
        return this.booking.rooms.map((room, idx) => (index.h("div", { class: "mobile-card__room", key: room.identifier ?? idx }, index.h("ir-unit-cell", { showDeparture: booking_listing_service.booking_listing.userSelection?.filter_type === '3', room: room }), idx < this.booking.rooms.length - 1 && index.h("span", { class: "mobile-card__room-divider" }, ","))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        const identifier = `${this.booking.booking_nbr}`;
        return (index.h("wa-card", null, index.h("div", { slot: "header", class: "mobile-card__header" }, index.h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), index.h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), index.h("div", { class: "mobile-card__body" }, index.h("ir-booked-by-cell", { display: "inline", showContactIcons: this.booking.agent === null, class: "mobile-card__text-center", label: "Booked by", clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: booking.getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), index.h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && index.h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), index.h("ir-booked-on-cell", { display: "inline", label: "Booked on", bookedOn: this.booking.booked_on }), index.h("div", { class: "mobile-card__dates" }, index.h("ir-dates-cell", { display: "inline", checkInLabel: "Check-in", checkoutLabel: "Check-out", checkIn: this.booking.from_date, checkOut: this.booking.to_date })), booking_listing_service.booking_listing.userSelection?.filter_type === '2' && (index.h("ir-arrival-time-cell", { display: "inline", arrival: this.booking.arrival, arrivalTimeLabel: 'Arrival time' })), index.h("ir-balance-cell", { guestFinancial: this.booking.guest_financial, display: "inline", label: "Amount", bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), index.h("div", { slot: "footer", class: "mobile-card__actions" }, index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, "Edit"), index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, "Delete"))));
    }
};
IrBookingListingMobileCard.style = irBookingListingMobileCardCss();

const irBookingListingTableCss = () => `.sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}`;

const tableCss = () => `.sc-ir-booking-listing-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}.ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;right:0;background-color:white}`;

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
    bookingListingsService = new booking_listing_service.BookingListingService();
    async deleteBooking() {
        if (!this.booking_nbr) {
            return;
        }
        try {
            this.isLoading = true;
            await this.bookingListingsService.removeExposedBooking(this.booking_nbr, true);
            booking_listing_service.booking_listing.bookings = [...booking_listing_service.booking_listing.bookings.filter(b => b.booking_nbr?.toString() !== this.booking_nbr)];
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
        const totalRecords = booking_listing_service.booking_listing.pagination.totalRecords;
        const currentCount = booking_listing_service.booking_listing.bookings.length;
        if (!totalRecords || currentCount >= totalRecords) {
            return;
        }
        const pageSize = booking_listing_service.booking_listing.pagination.pageSize || booking_listing_service.booking_listing.rowCount || 20;
        const nextStartRow = Math.ceil(currentCount / pageSize) * pageSize;
        const nextEndRow = Math.min(nextStartRow + pageSize, totalRecords);
        this.isLoadMoreLoading = true;
        try {
            await this.bookingListingsService.getExposedBookings({
                ...booking_listing_service.booking_listing.userSelection,
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
        const lastManipulation = booking$1.ota_manipulations ? booking$1.ota_manipulations[booking$1.ota_manipulations.length - 1] : null;
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode) && index.h("td", null, booking$1.property.name), index.h("td", null, index.h("ir-booking-number-cell", { origin: booking$1.origin, source: booking$1.source, channelBookingNumber: booking$1.channel_booking_nbr, bookingNumber: booking$1.booking_nbr })), index.h("td", null, index.h("ir-booked-on-cell", { bookedOn: booking$1.booked_on })), index.h("td", { class: "text-center" }, index.h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking$1.guest.nbr_confirmed_bookings > 1 && !booking$1.agent, guest: booking$1.guest, identifier: booking$1.booking_nbr, showContactIcons: booking$1.agent === null, showPersons: true, showPrivateNoteDot: booking.getPrivateNote(booking$1.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking$1.promo_key, promoKey: booking$1.promo_key, showLoyaltyIcon: booking$1.is_in_loyalty_mode && !booking$1.promo_key })), index.h("td", null, index.h("ir-dates-cell", { checkIn: booking$1.from_date, checkOut: booking$1.to_date })), booking_listing_service.booking_listing.userSelection?.filter_type === '2' && (index.h("td", null, index.h("ir-arrival-time-cell", { arrival: booking$1.arrival }))), index.h("td", null, index.h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking$1.rooms.map(room => (index.h("ir-unit-cell", { showDeparture: booking_listing_service.booking_listing?.userSelection?.filter_type === '3', key: room.identifier, room: room }))), booking$1.extra_services && index.h("p", { style: { fontSize: '0.93rem' } }, locales_store.locales.entries.Lcz_ExtraServices))), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { guestFinancial: booking$1.guest_financial, "data-css": "center", bookingNumber: booking$1.booking_nbr, isDirect: booking$1.is_direct, statusCode: booking$1.status.code, currencySymbol: booking$1.currency.symbol, financial: booking$1.financial })), index.h("td", { class: "text-center" }, index.h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking$1.events?.length > 0 && booking$1.events[0].type.toLowerCase() === 'modified', status: booking$1.status, isRequestToCancel: booking$1.is_requested_to_cancel, bookingNumber: booking$1.booking_nbr })), index.h("td", null, index.h("div", { class: "" }, index.h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking: booking$1 });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing_service.booking_listing.pagination;
        const canLoadMore = booking_listing_service.booking_listing.bookings.length > 0 && booking_listing_service.booking_listing.bookings.length < pagination.totalRecords;
        return (index.h(index.Host, { key: 'a68b8f49797e277847f5e0f5255b49e57d430b13' }, index.h("div", { key: '6ad563a6d4fe7bf7a66421b936b6e776249fb4e4', class: "table--container" }, index.h("table", { key: '23525c75c92a0b79465f70d1c9ccfb25da68e912', class: "table data-table" }, index.h("thead", { key: 'a2a144c70968f6a7b259e48b70406680a0ce9c47' }, index.h("tr", { key: 'd8ecdb44d72562d0eeb350dae3f7cffab75cd20f' }, utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode) && index.h("th", { key: 'f950e1641df1df971b4157241d17b46c53755355', class: "text-left" }, "Property"), index.h("th", { key: '2f05fd80983770c8882a86de5978c97732f93537' }, index.h("span", { key: 'd9b8eecd7084936e2119eb110335dde2bf9a30d3', class: 'arrivals-table__departure__cell' }, "Booking#")), index.h("th", { key: '5dcbea57427561c988540f90e83bfddd03753784' }, "Booked on"), index.h("th", { key: 'd5974018a409424dda894cc9f515c8f9315c7e51' }, index.h("div", { key: 'de3f2141254fd1cd890da2798ea7fa00d7785f84' }, index.h("p", { key: '99c7d3c951b6c569f8f02170d83b79886bab5aea' }, "Booked by"))), index.h("th", { key: '0630f6b3c610ceedf2d81300555562a7d14ca688' }, "Dates"), booking_listing_service.booking_listing.userSelection?.filter_type === '2' && index.h("th", { key: 'ed0b59c2320a4865ba2f1a225e42cc8fd92e0892' }, "Arrival time"), index.h("th", { key: '6002e019215ee7a953f313cc27bb5e30d12f2e38' }, "Services"), index.h("th", { key: '4202048d9d057d3e52b35ada3e313dd6354ccbb2', class: "text-center" }, index.h("p", { key: 'ea5a278a92e43c4a50d7356ba9b2abd52e34c703' }, "Amount "), index.h("wa-tooltip", { key: 'afc7b689ae533da4b24f342c49be3d5d964aacf6', for: "balance-info" }, "Booking balance click to settle."), index.h("div", { key: 'a77b6d8b85ffe13f31768e6248be1c08779bdd97', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, index.h("ir-custom-button", { key: '9539bb3603ffdb0028a6c6721179ec374122b3c6', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "s", variant: "danger", appearance: "outlined" }, "Guest Balance"))), index.h("th", { key: 'b20a1d1f6e86371e9dc5cac6ed610941770339cc', class: "text-center" }, "Status"), index.h("th", { key: '4ba77c48da5b88204921ec406cf2c44f913c02e5' }))), index.h("tbody", { key: '3ff4f0353726f701b383d6cd798ec0cdc7eaf52d' }, booking_listing_service.booking_listing.bookings.length === 0 && (index.h("tr", { key: 'abb388fb465e40e6ce0cd03eecbf8faac90203da' }, index.h("td", { key: '9da81ecb3e5ff7db4ccd379d24dbcd934b63a36b', colSpan: utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, "No bookings found"))), booking_listing_service.booking_listing.bookings?.map(booking => this.renderRow(booking))))), index.h("div", { key: '130fb2490d9cc5adb5549d80e7d729171caebd48', class: "card--container" }, booking_listing_service.booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (index.h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales_store.locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (index.h("ir-pagination", { key: 'f2dcf28fceb4d68b6982443990912a26ba0f159a', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales_store.locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (index.h("ir-custom-button", { key: '19b54565049486c9077d0385f9a150616bbcc527', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, "Load more")), index.h("ir-dialog", { key: '965aad41b30207644fe8959f35ec1cc66d99446d', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, index.h("span", { key: 'aa82c32af0eb50f93748c6114e0f07765f29728d' }, locales_store.locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), index.h("div", { key: 'b1319bafc5eb9e7a00a6fd4c16d2ef647184ac97', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'fecaa227deb5da7d3ced5838415b7938225621f7', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '325e030031ce9b9fbe3820beb17c034ca5e4674d', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "m", variant: "danger" }, "Confirm")))));
    }
};
IrBookingListingTable.style = irBookingListingTableCss() + tableCss();

const irListingHeaderCss = () => `.sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.filters-bar__date_picker.sc-ir-listing-header{min-width:280px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px;width:100%;max-width:400px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}`;

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
    bookingListingService = new booking_listing_service.BookingListingService();
    // private toDateRef: HTMLIrDatePickerElement;
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue.trim())) {
                booking_listing_service.updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else if (this.inputValue[3] === '-') {
                booking_listing_service.updateUserSelection('book_nbr', this.inputValue.trim());
            }
            else {
                booking_listing_service.updateUserSelection('name', this.inputValue.trim());
            }
        }
        if (this.inputValue === '' && (booking_listing_service.booking_listing.userSelection.book_nbr !== '' || booking_listing_service.booking_listing.userSelection.name !== '')) {
            booking_listing_service.booking_listing.userSelection = {
                ...booking_listing_service.booking_listing.userSelection,
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
        await this.bookingListingService.getExposedBookings({ ...booking_listing_service.booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export });
        this.isLoading = null;
        if (booking_listing_service.booking_listing.download_url) {
            utils.downloadFile(booking_listing_service.booking_listing.download_url);
        }
    }
    async handleClearUserField() {
        booking_listing_service.initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings({ ...booking_listing_service.booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export: false });
    }
    render() {
        //const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (index.h(index.Host, { key: '8712ef93c0702e4ebeb3ac7314146d6a2824e193' }, index.h("section", { key: 'f6ae9da64947f84ea1b54fc212b8d9f45092dcaf', class: "d-flex align-items-center " }, index.h("div", { key: 'b72fc48d67f07143358813a6329dc81896b7c192', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, index.h("div", { key: 'f76b05bcdf2c6a20589a3283a2fc4f2be5ee5667', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, index.h("h3", { key: 'c6bc67dbebcce43083439bbb704fc500a4e45f17', class: "page-title" }, locales_store.locales.entries?.Lcz_Bookings)), index.h("h3", { key: '25e4c9bc5982405ea1a733dcd953deedb84fbe5f', class: "d-none d-md-block page-title" }, locales_store.locales.entries?.Lcz_Bookings))), index.h("section", { key: 'ec579e31e25e9958c1341c444dd3c6cc5122173e', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("wa-select", { key: '290817fdca531c282504026387ae3e6b1344fe87', onchange: e => {
                booking_listing_service.updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.filter_type?.toString(), size: "s", defaultValue: booking_listing_service.booking_listing?.types[0]?.id?.toString() }, booking_listing_service.booking_listing?.types.map(b => (index.h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), index.h("ir-date-range-filter", { key: '4fd7872a872ce4c558d4939360fefd8bbd7a952a', class: "filters-bar__date_picker", showQuickActions: false, fromDate: booking_listing_service.booking_listing.userSelection.from, toDate: booking_listing_service.booking_listing.userSelection.to, withClear: false, selectionMode: "auto", onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                let to_date = to;
                const toDate = moment.hooks(to);
                const fromDate = moment.hooks(from);
                if (toDate.isSame(moment.hooks(booking_listing_service.booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment.hooks(booking_listing_service.booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing_service.booking_listing.userSelection.to;
                }
                booking_listing_service.booking_listing.userSelection = { ...booking_listing_service.booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            } }), index.h("wa-select", { key: '927182d417bd27bf588e7d8d0257b8811c6c33ad', onchange: e => {
                booking_listing_service.updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.booking_status, size: "s", defaultValue: booking_listing_service.booking_listing?.statuses[0]?.code }, booking_listing_service.booking_listing?.statuses.map(b => (index.h("wa-option", { key: b.code, value: b.code }, b.name)))), !utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode) && (index.h("wa-select", { key: 'd2a65170f8a0eb1d5161a0780ba0228a3e9110e6', onchange: e => {
                booking_listing_service.updateUserSelection('channel', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.channel, size: "s", defaultValue: booking_listing_service.booking_listing.userSelection.channel }, index.h("wa-option", { key: 'bb0f6b79fae3cb0ad0b3a57f5f0b4d9552d32eb8', value: "" }, "All channels"), booking_listing_service.booking_listing?.channels.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name))))), index.h("wa-select", { key: '56a91cb6c741bea9f7a58a25b934b814c2dcadf8', onchange: e => {
                booking_listing_service.updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.balance_filter, size: "s", defaultValue: booking_listing_service.booking_listing?.balance_filter[0]?.value }, booking_listing_service.booking_listing?.balance_filter.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name)))), index.h("div", { key: 'ae02041eb6f6a44ab57145e5c3d0bca38c771dc1', class: "d-flex flex-fill align-items-end m-0" }, index.h("wa-tooltip", { key: '8937c0f136cab849a300d6826ab2482ded9f0761', for: "search-btn" }, locales_store.locales.entries?.Lcz_Search), index.h("ir-custom-button", { key: '97f901c98dfa901ccbb5cc851f122d73e775d6ea', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, index.h("wa-icon", { key: '65d365872a28477b72c0157551909dc923710106', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '59053c291c8ccc705f55ad4d4c8e8dd36025d247', for: "clear-btn" }, locales_store.locales.entries?.Lcz_Erase), index.h("ir-custom-button", { key: '6997ffac801728a2e4569c0437864a1580ddbcf3', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, index.h("wa-icon", { key: '2ab3d703146bd532d9d4209e93f1da9ea8f0f0f7', name: "eraser", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '4752c207b9a561b6af222c4202d8a12e5b771e5b', for: "excel-btn" }, locales_store.locales.entries?.Lcz_ExportToExcel), index.h("ir-custom-button", { key: 'e514db0469c200d5ebcef0be7472f874367f566d', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, index.h("wa-icon", { key: '16159bb073102b9a95a51e7214280f49b141bc81', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
    }
};
IrListingHeader.style = irListingHeaderCss();

exports.ir_booking_listing_mobile_card = IrBookingListingMobileCard;
exports.ir_booking_listing_table = IrBookingListingTable;
exports.ir_listing_header = IrListingHeader;
