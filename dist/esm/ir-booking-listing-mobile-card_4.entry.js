import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { k as getPrivateNote } from './booking-03cc2d8d.js';
import { B as BookingListingService, b as booking_listing, u as updateUserSelection, i as initializeUserSelection } from './booking_listing.service-840f9ca1.js';
import { l as locales } from './locales.store-cb784e95.js';
import { i as isPrivilegedUser, u as downloadFile } from './utils-9546bb29.js';
import { h as hooks } from './moment-ab846cee.js';
import './axios-aa1335b8.js';
import './index-f100e9d2.js';
import './calendar-data-2ae53dc9.js';
import './index-87419685.js';

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
        return this.booking.rooms.map((room, idx) => (h("div", { class: "mobile-card__room", key: room.identifier ?? idx }, h("ir-unit-cell", { room: room }), idx < this.booking.rooms.length - 1 && h("span", { class: "mobile-card__room-divider" }, ","))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        const identifier = `${this.booking.booking_nbr}`;
        return (h("wa-card", null, h("div", { slot: "header", class: "mobile-card__header" }, h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), h("div", { class: "mobile-card__body" }, h("ir-booked-by-cell", { display: "inline", class: "mobile-card__text-center", label: "Booked by", clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), h("ir-booked-on-cell", { display: "inline", label: "Booked on", bookedOn: this.booking.booked_on }), h("div", { class: "mobile-card__dates" }, h("ir-dates-cell", { display: "inline", checkInLabel: "Check-in", checkoutLabel: "Check-out", checkIn: this.booking.from_date, checkOut: this.booking.to_date })), h("ir-balance-cell", { display: "inline", label: "Amount", bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), h("div", { slot: "footer", class: "mobile-card__actions" }, h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, "Edit"), h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, "Delete"))));
    }
};
IrBookingListingMobileCard.style = IrBookingListingMobileCardStyle0;

const irBookingListingTableCss = ".sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}.data-table--pagination.sc-ir-booking-listing-table{display:none}.booking-listing__load-more.sc-ir-booking-listing-table{margin-top:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table,.data-table--pagination.sc-ir-booking-listing-table{display:block}.booking-listing__load-more.sc-ir-booking-listing-table,.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}";
const IrBookingListingTableStyle0 = irBookingListingTableCss;

const tableCss = ".ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:#e3f3fa !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize}.sortable.sc-ir-booking-listing-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--blue)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-booking-listing-table,.data-table.sc-ir-booking-listing-table{height:100%}";
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
        return (h("tr", { class: "ir-table-row", key: rowKey }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("td", null, booking.property.name), h("td", null, h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), h("td", null, h("ir-booked-on-cell", { bookedOn: booking.booked_on })), h("td", { class: "text-center" }, h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), h("td", null, h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), h("td", null, h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (h("ir-unit-cell", { key: room.identifier, room: room }))), booking.extra_services && h("p", { style: { fontSize: '0.93rem' } }, locales.entries.Lcz_ExtraServices))), h("td", { class: "text-center" }, h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), h("td", { class: "text-center" }, h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), h("td", null, h("div", { class: "" }, h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing.pagination;
        const canLoadMore = booking_listing.bookings.length > 0 && booking_listing.bookings.length < pagination.totalRecords;
        return (h(Host, { key: 'b034c9a498a65c9bceabbf96deb24b7af4270744' }, h("div", { key: '381417398b556cb1e3f3b0f52cee93f24d0d9a15', class: "table--container" }, h("table", { key: 'e855b1b35b17b51cc72fef538ab4de8ed74c8680', class: "table data-table" }, h("thead", { key: 'a9ba74e9554665dc34424ae0476c5e93a8f88c76' }, h("tr", { key: '150701d2b4b78a551e71bfdee1738773d052b64d' }, isPrivilegedUser(booking_listing.userSelection.userTypeCode) && h("th", { key: 'ae9b6c3574e52b62f4c0a9640759a6daed313bba', class: "text-left" }, "Property"), h("th", { key: '752ce9853380d0e297dfd4b3b005c973907e1a5b' }, h("span", { key: 'fa5af96b67a0c26d97a5f0fdc6b2f1ff6f216eef', class: 'arrivals-table__departure__cell' }, "Booking#")), h("th", { key: '3af1989693e33e484dd77464e84e52bfdda1c13a' }, "Booked on"), h("th", { key: '9a173f8ffa94aaae413cff0b4221e55038e841e9' }, h("div", { key: '988708ee3ce205ac6dbf1f9e50139464c7ac7a87' }, h("p", { key: '808f79270278780208a6139bfa884823bb7feecc' }, "Booked by"))), h("th", { key: '15ff8326be2a8997def982d34691f03b995cf0f7' }, "Dates"), h("th", { key: '6382340f8d0ffafc88adb6f4a374280d7d395c60' }, "Services"), h("th", { key: '5482c406657d2c8846673a106c04bb5f8bb6d659', class: "text-center" }, h("p", { key: 'e060636bb7f26452a29a71a938b65c54bf9dc7c7' }, "Amount "), h("wa-tooltip", { key: 'b10a2f455676d95961586d6ed75fa896011d823e', for: "balance-info" }, "Booking balance click to settle."), h("div", { key: '9980ef1bc63d56c58c23f36dab580434719bd9a2', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, h("ir-custom-button", { key: '3f2a6ce82baaf4138807555e17800ecba535de88', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), h("th", { key: '5933da73ca24250f14699466788c31787134beaa', class: "text-center" }, "Status"), h("th", { key: '6a388108df44e9a43d430565139560a290607d8e' }))), h("tbody", { key: '9e367dc5c2bc4202d6b56901cd81a6befc40fcd1' }, booking_listing.bookings.length === 0 && (h("tr", { key: 'a9626f21bd58c6bcf3ef13fb2e50440acc4ceaac' }, h("td", { key: '45f36c5a81bcfcb7b60151a9f7c98f97005ddc68', colSpan: isPrivilegedUser(booking_listing.userSelection.userTypeCode) ? 9 : 8, class: "empty-row" }, "No bookings found"))), booking_listing.bookings?.map(booking => this.renderRow(booking))))), h("div", { key: '2238d7cc412b16bc9694bd027c04335fd63116df', class: "card--container" }, booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (h("ir-pagination", { key: '06592b5266a1ab736d8b16827f5df56f661141be', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), canLoadMore && (h("ir-custom-button", { key: '39f4c2ec4fa326bcecc8e47cfa2dcbe4384ac68b', class: "booking-listing__load-more", variant: "brand", appearance: "outlined", loading: this.isLoadMoreLoading, disabled: this.isLoadMoreLoading, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loadMoreBookings();
            } }, "Load more")), h("ir-dialog", { key: 'a29885394ab1ec2e9ec21bd62b277c3eb51c7032', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, h("span", { key: '20d1f24408f2cbc451d7610e8766583295823887' }, locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), h("div", { key: '8afc5db8d5610947e80b4cd42f0210ab27f4c46f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '4140435d43e1c02a84160ed9ca8678a1dd0ab771', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '7d9d707c1c3ae6cf2bbaf2f7af87ff2f63dc7151', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.deleteBooking();
            }, loading: this.isLoading, size: "medium", variant: "danger" }, "Confirm")))));
    }
};
IrBookingListingTable.style = IrBookingListingTableStyle0 + IrBookingListingTableStyle1;

const irBookingNewFormCss = ".sc-ir-booking-new-form-h{display:block}";
const IrBookingNewFormStyle0 = irBookingNewFormCss;

const IrBookingNewForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    language;
    bookingItem = null;
    handleTriggerClicked() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
                dateDifference: 0,
                message: '',
            },
            TO_DATE: undefined,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: locales?.entries.Lcz_NewBooking,
        };
        console.log(this.bookingItem);
    }
    render() {
        console.log('booking-item', this.bookingItem);
        return (h(Host, { key: '4beab93223d5c54ae9eee58ec1fa756730e7f84e' }, h("ir-custom-button", { key: 'cdc92aeb5ff3d0ff5497ed76d7fd68f751aeb887', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleTriggerClicked();
            }, appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'a86195c75003df98ca6073721b053265531e4c10', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("ir-booking-editor-drawer", { key: '9b08e809aaec4ba4e26c93b84cfc8e575589eadd', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

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
        const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (h(Host, { key: 'd62edff69244c1fb711766cbbd06670956bb542b' }, h("section", { key: '37bda1ecf0b1a39f59c55c48398bc8c12fdd443d', class: "d-flex align-items-center " }, h("div", { key: '863e05f9bab3ab1c90c68a0e84c5ff29396f59ba', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '967e8159199b6b8bc62c579fb1691ff90ce19d61', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '3d7a07c84a7da857dc7cc5dd0e76d6ea3df74931', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'b45b8cce4ac574a01d8798d2e1c5c4a18134ce90' }, !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   {/* <ir-button slot="trigger"  variant="icon" icon_name="square_plus"></ir-button> */}
        //   <ir-custom-button id="new-booking" class={'new-booking-btn'} variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: 'e6096fc5e3c131fcfd992de77e876840363cc64a', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("h3", { key: '31a219ae04310348738c135b8b6b66272f8b9401', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '25d94fa0b4ada5ceba6dd270e132701c8f811483',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: 'dbae4e4181c8268ef3b266ddfabb04923fa501a2', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '9ad267ef249f7bbaa68b620e4bceb7c7314d7bdc', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'fb3dd375fbbf3e6efedce961991eff616788d922', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '89adbc48584d415d83be60e7e9ace4f23ebbd6bd', class: "d-none d-md-block" }, h("wa-tooltip", { key: '81701b8e45c2d3adb4ab78de9a3714ac2cff38a3', for: "new-booking" }, "Create new booking"), !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   <ir-custom-button id="new-booking" variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        //   {/* <ir-button slot="trigger" class={'new-booking-btn'} variant="icon" icon_name="square_plus"></ir-button> */}
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: '7b461973df7d8966b04624d69c06f79a009f5085', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("section", { key: 'd9a9117880424bb60d26147fea7cb06112e7f9ee', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '53c60653cccda1bd5e1121bf29c1d7ac0aeb54f9' }), h("h5", { key: 'c67dc06db8cf96eb1f5777cc393a995142df7f6f', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '2079977326689e1c89fca5203d9fd9a4297b5ce6' })), h("section", { key: '98db088b0bab5a3d3e5902624ae891bbc5d91165', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '1cf136f1cff38335b9a7c37b5b5e454a42ed33ac', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'cc42190d87dab5b42703a0dc7a591f6a3dfefe90', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '7c9d3c61b6bf8ddc109d21bbc8725438ab789d87', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '2a794558f960dbce9801ae628c2db6cec9305e61', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: '6f662c71850df90eee3523893ebad4b4668c00fc', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '0437c4dc758df66418c09a4e7691c64a746cf6f8', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '7f4c8dbf334a4dc8eda6c46f22f4d4df1a0a065f', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '2c0ec95a04be7eccb71b6cdcae07789c3a3658b1', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '96b725d48aa3a002092fef5958ef8f05667d1190', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '85d122931872aa36f385689a06a5401acc173634', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6462d13852643571a5411101c5eebae857ca7662', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'afba2aebf0ce64bc937232c2bb29c95f519a7d95', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '704b9df63be9287f7bf2a7e49989ff2c0e2d6bc9', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e28635e5c910bb7bb88495ecfbca768750cd494b', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: 'de20c6bfd0e1c4bcc7d3452299086213aa9de16c', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '9f69219ef5c96d1f28dbd2d2bcc00250ddc8563b', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
    }
};
IrListingHeader.style = IrListingHeaderStyle0;

export { IrBookingListingMobileCard as ir_booking_listing_mobile_card, IrBookingListingTable as ir_booking_listing_table, IrBookingNewForm as ir_booking_new_form, IrListingHeader as ir_listing_header };

//# sourceMappingURL=ir-booking-listing-mobile-card_4.entry.js.map