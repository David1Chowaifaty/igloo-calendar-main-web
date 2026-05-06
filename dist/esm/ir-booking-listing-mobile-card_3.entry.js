import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { b as booking_listing, B as BookingListingService, u as updateUserSelection, i as initializeUserSelection } from './booking_listing.service-606adaaf.js';
import { g as getPrivateNote } from './booking-792b922c.js';
import { l as locales } from './locales.store-cb784e95.js';
import { o as isPrivilegedUser, d as downloadFile } from './utils-857cf993.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './axios-aa1335b8.js';
import './calendar-data-b1f645da.js';
import './type-e34653d3.js';

const irBookingListingMobileCardCss = ".sc-ir-booking-listing-mobile-card-h{display:block}.mobile-card__header.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;justify-content:space-between;gap:0.75rem}.mobile-card__body.sc-ir-booking-listing-mobile-card{display:flex;flex-direction:column;gap:0.5rem}.mobile-card__text-center.sc-ir-booking-listing-mobile-card{text-align:center}.mobile-card__rooms.sc-ir-booking-listing-mobile-card{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.mobile-card__room.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;gap:0.25rem}.mobile-card__room-divider.sc-ir-booking-listing-mobile-card{font-size:0.93rem;line-height:1}.mobile-card__extra-services.sc-ir-booking-listing-mobile-card{font-size:0.93rem;margin:0}.mobile-card__dates.sc-ir-booking-listing-mobile-card{display:flex;align-items:center}.mobile-card__actions.sc-ir-booking-listing-mobile-card{display:flex;gap:0.5rem}.mobile-card__action-button.sc-ir-booking-listing-mobile-card{flex:1 1 0%}";
const IrBookingListingMobileCardStyle0 = irBookingListingMobileCardCss;

const IrBookingListingMobileCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irBookingCardAction = createEvent(this, "irBookingCardAction", 7);
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
        return (h("wa-card", null, h("div", { slot: "header", class: "mobile-card__header" }, h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), h("div", { class: "mobile-card__body" }, h("ir-booked-by-cell", { display: "inline", class: "mobile-card__text-center", label: "Booked by", clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), h("ir-booked-on-cell", { display: "inline", label: "Booked on", bookedOn: this.booking.booked_on }), h("div", { class: "mobile-card__dates" }, h("ir-dates-cell", { display: "inline", checkInLabel: "Check-in", checkoutLabel: "Check-out", checkIn: this.booking.from_date, checkOut: this.booking.to_date })), booking_listing.userSelection?.filter_type === '2' && (h("ir-arrival-time-cell", { display: "inline", arrival: this.booking.arrival, arrivalTimeLabel: 'Arrival time' })), h("ir-balance-cell", { display: "inline", label: "Amount", bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), h("div", { slot: "footer", class: "mobile-card__actions" }, h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, "Edit"), h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, "Delete"))));
    }
};
IrBookingListingMobileCard.style = IrBookingListingMobileCardStyle0;

const irBookingListingTableCss = ".sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}";
const IrBookingListingTableStyle0 = irBookingListingTableCss;

const tableCss = ".sc-ir-booking-listing-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sortable.sc-ir-booking-listing-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-listing-table:active td.sc-ir-booking-listing-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}";
const IrBookingListingTableStyle1 = tableCss;

const IrBookingListingTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openBookingDetails = createEvent(this, "openBookingDetails", 7);
        this.requestPageChange = createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange", 7);
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
};
IrBookingListingTable.style = IrBookingListingTableStyle0 + IrBookingListingTableStyle1;

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px;width:100%;max-width:400px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
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
        return (h(Host, { key: '49cab7ad9d78c6242e9deda9e9a0747b93ea31aa' }, h("section", { key: '7f71fa5b7f9c2728e3d69a2274611bf5ce6f0535', class: "d-flex align-items-center " }, h("div", { key: '71d7e850da7724f05ef7153f384b84cdfa0b74a7', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '91819b14973743f54598259128b01344568c6a1a', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'b508de9e4bd84def55a7d03db7a0db4dcf1cb2e5', class: "page-title" }, locales.entries?.Lcz_Bookings)), h("h3", { key: '2da67719ea641327e5d451fff1a5685884a36015', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings))), h("section", { key: '9e4d6363b205874849cc5a6e312d007889c01129', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'adf4967b073c22905100c8e02fa649c5b8ad549d', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'bfa444d0d08356735b284e9aca899f88903a2cd0', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '37c068a878a04c72b3d4d6486ea605231720ff52', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '99e3ec8a387b755cc663c186cf6067bd11f731d0', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'd9b86f8b4a7eb0981dcadcf2215a522d6e8bf8d4', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '26407b3dd866c46b869931953adfab8f4358591c', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'fa80c33a55fc2899e0060a3809ec2c6734ea81b2', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'b905a0b0d9ead747278c7f7b139a4d30a4af4cba', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '0e0ee16b56b7dbf37a6c3d9c4a567f7cdba871da', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '519140964fbe7f48f1fa5c9e35442df9509aeb9c', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b865df311e69e654b64676b04f4e2e4b07e6d84b', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'cc365615775ff0a211162767c1eab29b143f08be', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'e6df3377519f8e276be74d545fb9f559bc1e0f0b', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6c205cf11e9db7a5d9cd56009c785fbb5a65fb71', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '5d4cc54653bd4a78d75c4fe87e288af83aa17d1a', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '8163b2374df8e93e7099b0651e0ffea607c4bda5', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
    }
};
IrListingHeader.style = IrListingHeaderStyle0;

export { IrBookingListingMobileCard as ir_booking_listing_mobile_card, IrBookingListingTable as ir_booking_listing_table, IrListingHeader as ir_listing_header };

//# sourceMappingURL=ir-booking-listing-mobile-card_3.entry.js.map