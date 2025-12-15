'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const booking_service = require('./booking.service-53a86e90.js');
const room_service = require('./room.service-edd3d27c.js');
const locales_store = require('./locales.store-4eb57996.js');
const utils = require('./utils-9892967b.js');
const booking_listing_service = require('./booking_listing.service-b94b95db.js');
const moment = require('./moment-1780b03a.js');
require('./axios-6e678d52.js');
require('./index-8bb117a0.js');
require('./index-6299b0f7.js');
require('./calendar-data-e7cdcfec.js');

const iglBookPropertyContainerCss = ".sc-igl-book-property-container-h{display:block;margin:0;padding:0;letter-spacing:0px !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;font-size:1rem !important;font-weight:400 !important;line-height:1.45 !important;color:#6b6f82 !important;text-align:left !important}.book-container.sc-igl-book-property-container{width:min-content;margin:0;padding:0}h3.sc-igl-book-property-container{font-size:1rem}";
const IglBookPropertyContainerStyle0 = iglBookPropertyContainerCss;

const IglBookPropertyContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingData = index.createEvent(this, "resetBookingData", 7);
    }
    language = '';
    ticket = '';
    p;
    propertyid;
    from_date;
    to_date;
    withIrToastAndInterceptor = true;
    bookingItem;
    showPaymentDetails;
    countries;
    calendarData = {};
    resetBookingData;
    bookingService = new booking_service.BookingService();
    roomService = new room_service.RoomService();
    token = new Token.Token();
    setRoomsData(roomServiceResp) {
        let roomsData = new Array();
        if (roomServiceResp.My_Result?.roomtypes?.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        this.calendarData.roomsInfo = roomsData;
    }
    async initializeApp() {
        try {
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            const [roomResponse, languageTexts, countriesList] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
            ]);
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            this.countries = countriesList;
            const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends } = roomResponse['My_Result'];
            this.calendarData = { currency, allowed_booking_sources, adult_child_constraints, legendData: calendar_legends };
            this.setRoomsData(roomResponse);
            const paymentCodesToShow = ['001', '004'];
            this.showPaymentDetails = paymentMethods.some(method => paymentCodesToShow.includes(method.code));
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleTriggerClicked() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: this.from_date,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
                dateDifference: 0,
                message: '',
            },
            TO_DATE: this.to_date,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: locales_store.locales.entries.Lcz_NewBooking,
        };
    }
    render() {
        return (index.h(index.Host, { key: 'aba029fdbe2de75948a440fc3b33e12a9b786304' }, this.withIrToastAndInterceptor && (index.h(index.Fragment, { key: 'da56de48523227ec74a1a27388ed2dab56b3dc62' }, index.h("ir-toast", { key: '416ca5c52010ca88b98e426c63a21dfa119562e8' }), index.h("ir-interceptor", { key: 'cabc7d9bc4420301609ea4417da8a9559476ca25' }))), index.h("div", { key: 'fc459097451b77a8d44b736e7b57dcf376602e1e', class: "book-container", onClick: this.handleTriggerClicked.bind(this) }, index.h("slot", { key: 'afababc16fc6f6bff657065c0c36654081d42350', name: "trigger" })), this.bookingItem && (index.h("igl-book-property", { key: 'e8bb2694705380544ef2ebe458d882763fe16ce0', allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.propertyid, bookingData: this.bookingItem, onResetBookingEvt: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingData.emit(null);
            }, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglBookPropertyContainer.style = IglBookPropertyContainerStyle0;

const irBookingListingMobileCardCss = ".sc-ir-booking-listing-mobile-card-h{display:block}.mobile-card__header.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;justify-content:space-between;gap:0.75rem}.mobile-card__body.sc-ir-booking-listing-mobile-card{display:flex;flex-direction:column;gap:0.5rem}.mobile-card__text-center.sc-ir-booking-listing-mobile-card{text-align:center}.mobile-card__rooms.sc-ir-booking-listing-mobile-card{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.mobile-card__room.sc-ir-booking-listing-mobile-card{display:flex;align-items:center;gap:0.25rem}.mobile-card__room-divider.sc-ir-booking-listing-mobile-card{font-size:0.93rem;line-height:1}.mobile-card__extra-services.sc-ir-booking-listing-mobile-card{font-size:0.93rem}.mobile-card__dates.sc-ir-booking-listing-mobile-card{display:flex;align-items:center}.mobile-card__actions.sc-ir-booking-listing-mobile-card{display:flex;gap:0.5rem}.mobile-card__action-button.sc-ir-booking-listing-mobile-card{flex:1 1 0%}";
const IrBookingListingMobileCardStyle0 = irBookingListingMobileCardCss;

const IrBookingListingMobileCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irBookingCardAction = index.createEvent(this, "irBookingCardAction", 7);
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
        return this.booking.rooms.map((room, idx) => (index.h("div", { class: "mobile-card__room", key: room.identifier ?? idx }, index.h("ir-unit-cell", { room: room }), idx < this.booking.rooms.length - 1 && index.h("span", { class: "mobile-card__room-divider" }, ","))));
    }
    render() {
        if (!this.booking) {
            return null;
        }
        const identifier = `${this.booking.booking_nbr}`;
        return (index.h("wa-card", null, index.h("div", { slot: "header", class: "mobile-card__header" }, index.h("ir-booking-number-cell", { origin: this.booking.origin, source: this.booking.source, channelBookingNumber: this.booking.channel_booking_nbr, bookingNumber: this.booking.booking_nbr }), index.h("ir-status-activity-cell", { lastManipulation: this.lastManipulation, showManipulationBadge: !!this.lastManipulation, showModifiedBadge: !this.lastManipulation && this.booking.events?.length > 0 && this.booking.events[0].type.toLowerCase() === 'modified', status: this.booking.status, isRequestToCancel: this.booking.is_requested_to_cancel, bookingNumber: this.booking.booking_nbr })), index.h("div", { class: "mobile-card__body" }, index.h("ir-booked-by-cell", { display: "inline", class: "mobile-card__text-center", label: "Booked by", clickableGuest: true, showRepeatGuestBadge: this.booking.guest.nbr_confirmed_bookings > 1 && !this.booking.agent, guest: this.booking.guest, identifier: identifier, cellId: `mobile-${identifier}`, showPersons: true, showPrivateNoteDot: utils.getPrivateNote(this.booking.extras), totalPersons: this.totalPersons?.toString(), showPromoIcon: !!this.booking.promo_key, promoKey: this.booking.promo_key, showLoyaltyIcon: this.booking.is_in_loyalty_mode && !this.booking.promo_key }), index.h("div", { class: "mobile-card__rooms" }, this.renderRooms(), this.booking.extra_services && this.extraServicesLabel && index.h("p", { class: "mobile-card__extra-services" }, this.extraServicesLabel)), index.h("ir-booked-on-cell", { display: "inline", label: "Booked on", bookedOn: this.booking.booked_on }), index.h("div", { class: "mobile-card__dates" }, index.h("ir-dates-cell", { display: "inline", checkInLabel: "Check-in", checkoutLabel: "Check-out", checkIn: this.booking.from_date, checkOut: this.booking.to_date })), index.h("ir-balance-cell", { display: "inline", label: "Amount", bookingNumber: this.booking.booking_nbr, isDirect: this.booking.is_direct, statusCode: this.booking.status.code, currencySymbol: this.booking.currency.symbol, financial: this.booking.financial })), index.h("div", { slot: "footer", class: "mobile-card__actions" }, index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('edit'), appearance: "outlined" }, "Edit"), index.h("ir-custom-button", { class: "mobile-card__action-button", onClickHandler: () => this.emitAction('delete'), variant: "danger" }, "Delete"))));
    }
};
IrBookingListingMobileCard.style = IrBookingListingMobileCardStyle0;

const irBookingListingTableCss = ".sc-ir-booking-listing-table-h{box-sizing:border-box !important}.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::before,.sc-ir-booking-listing-table-h *.sc-ir-booking-listing-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booking-listing-table{display:none !important}.table--container.sc-ir-booking-listing-table{flex:1 1 0%}.arrivals-table__actions-cell.sc-ir-booking-listing-table{display:flex;min-width:100px;justify-content:flex-end}.table--container.sc-ir-booking-listing-table{display:none;overflow-x:auto}.card--container.sc-ir-booking-listing-table{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.sc-ir-booking-listing-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.table--container.sc-ir-booking-listing-table{display:block}.card--container.sc-ir-booking-listing-table{display:none}.arrivals-table__actions-cell.sc-ir-booking-listing-table{min-width:250px}}";
const IrBookingListingTableStyle0 = irBookingListingTableCss;

const tableCss = ".ir-table-row.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-listing-table{flex:1 1 0%}.table--container.sc-ir-booking-listing-table{overflow-x:auto}.table.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-booking-listing-table tbody.sc-ir-booking-listing-table tr.sc-ir-booking-listing-table:last-child>td.sc-ir-booking-listing-table{border-bottom:0 !important}.table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-listing-table thead.sc-ir-booking-listing-table th.sc-ir-booking-listing-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-listing-table .empty-row.sc-ir-booking-listing-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-listing-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{background:#e3f3fa !important}.selected.sc-ir-booking-listing-table td.sc-ir-booking-listing-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table,.ir-table-row.sc-ir-booking-listing-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-listing-table{text-transform:capitalize}.sortable.sc-ir-booking-listing-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-booking-listing-table:hover td.sc-ir-booking-listing-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-booking-listing-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-listing-table svg.sc-ir-booking-listing-table{color:var(--blue)}.sticky-column.sc-ir-booking-listing-table{position:sticky !important;right:0;background-color:white}";
const IrBookingListingTableStyle1 = tableCss;

const IrBookingListingTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openBookingDetails = index.createEvent(this, "openBookingDetails", 7);
        this.requestPageChange = index.createEvent(this, "requestPageChange", 7);
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange", 7);
    }
    booking_nbr;
    isLoading;
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
        return (index.h("tr", { class: "ir-table-row", key: rowKey }, index.h("td", null, index.h("ir-booking-number-cell", { origin: booking.origin, source: booking.source, channelBookingNumber: booking.channel_booking_nbr, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("ir-booked-on-cell", { bookedOn: booking.booked_on })), index.h("td", { class: "text-center" }, index.h("ir-booked-by-cell", { class: "text-center", clickableGuest: true, showRepeatGuestBadge: booking.guest.nbr_confirmed_bookings > 1 && !booking.agent, guest: booking.guest, identifier: booking.booking_nbr, showPersons: true, showPrivateNoteDot: utils.getPrivateNote(booking.extras), totalPersons: totalPersons?.toString(), showPromoIcon: !!booking.promo_key, promoKey: booking.promo_key, showLoyaltyIcon: booking.is_in_loyalty_mode && !booking.promo_key })), index.h("td", null, index.h("ir-dates-cell", { checkIn: booking.from_date, checkOut: booking.to_date })), index.h("td", null, index.h("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.25rem' } }, booking.rooms.map(room => (index.h("ir-unit-cell", { key: room.identifier, room: room }))), booking.extra_services && index.h("p", { style: { fontSize: '0.93rem' } }, locales_store.locales.entries.Lcz_ExtraServices))), index.h("td", { class: "text-center" }, index.h("ir-balance-cell", { "data-css": "center", bookingNumber: booking.booking_nbr, isDirect: booking.is_direct, statusCode: booking.status.code, currencySymbol: booking.currency.symbol, financial: booking.financial })), index.h("td", { class: "text-center" }, index.h("ir-status-activity-cell", { lastManipulation: lastManipulation, showManipulationBadge: !!lastManipulation, showModifiedBadge: !lastManipulation && booking.events?.length > 0 && booking.events[0].type.toLowerCase() === 'modified', status: booking.status, isRequestToCancel: booking.is_requested_to_cancel, bookingNumber: booking.booking_nbr })), index.h("td", null, index.h("div", { class: "" }, index.h("ir-actions-cell", { onIrAction: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.handleIrActions({ action: e.detail.action, booking });
            }, buttons: ['edit', 'delete'] })))));
    }
    render() {
        const pagination = booking_listing_service.booking_listing.pagination;
        return (index.h(index.Host, { key: 'a3e6894e9d7a30b62a060913660ef2b3aed536ad' }, index.h("div", { key: '073df998289278c3eeebb8faa8edb33b4d6f857b', class: "table--container" }, index.h("table", { key: 'b02cef979afe2145a590c02c1107e3b85b6f1f8d', class: "table data-table" }, index.h("thead", { key: 'c82506f61c09ae9adfc0c0d9298ce05f32ac9b14' }, index.h("tr", { key: '6597f8f12c93c1b822ee3b0beb3a3f1f8d5f93e8' }, index.h("th", { key: 'd34b5dd6c14e07e79663de353a191d517a3e0a57' }, index.h("span", { key: '7187be0d049d88c4978649d3a83b28ce54477b67', class: 'arrivals-table__departure__cell' }, "Booking#")), index.h("th", { key: 'f82bf2b093ac21af7e82a6a2d9c96b825ca85cd0' }, "Booked on"), index.h("th", { key: '80f5aba4652dd690a983d657e794f3d1109a5936' }, index.h("div", { key: 'e2bbeaf52dd8007ef00409b2d2f720ad52c48f1f' }, index.h("p", { key: 'ae6c44b10a4fffd698b9bc946be30962e1673e7d' }, "Booked by"))), index.h("th", { key: '3cb25e89f98fd3ad803ded85ab96a3383946797f' }, "Dates"), index.h("th", { key: 'cea8caf7995401ab917c313d88d65503df193e48' }, "Services"), index.h("th", { key: '68aab0b7246740f1f07c490ffec5c1fb2d924c73', class: "text-center" }, index.h("p", { key: '6ed97d6e912c4fd5d8488c134ae0b980b790686c' }, "Amount "), index.h("wa-tooltip", { key: 'b5d4d09df59bafcb0383cd90b19a67cf8b181f83', for: "balance-info" }, "Booking balance click to settle."), index.h("div", { key: '97372b73222fedb620165fea2684bb617fb1441f', style: { width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' } }, index.h("ir-custom-button", { key: '16ca5af8b60d846622d26f6477d37a11a24c45fd', id: "balance-info", style: { '--ir-c-btn-height': 'fit-content', '--ir-c-btn-padding': '0.25rem', '--ir-c-btn-font-size': '0.725rem' }, size: "small", variant: "danger", appearance: "outlined" }, "Balance"))), index.h("th", { key: 'be2f80ab51a4975cc5507433bc3409d5f293c73d', class: "text-center" }, "Status"), index.h("th", { key: 'b42dee6691ba0be0757c34297e268d857ac15b53' }))), index.h("tbody", { key: 'ae127ad178144f42c37ad382696d3b97ce3614e7' }, booking_listing_service.booking_listing.bookings.length === 0 && (index.h("tr", { key: '5e52c0de34aaf331c045f2f0f85dc12c40f1920e' }, index.h("td", { key: 'f6d67dabc5745feb2a17969a3c923952dcd5b8b1', colSpan: 8, class: "empty-row" }, "No bookings found"))), booking_listing_service.booking_listing.bookings?.map(booking => this.renderRow(booking))))), index.h("div", { key: 'b35dbcdf9fb2fd126a32ee27f6999f60ef01a351', class: "card--container" }, booking_listing_service.booking_listing.bookings.map(booking => {
            const rowKey = `mobile--${booking.booking_nbr}`;
            const totalPersons = this.calculateTotalPersons(booking);
            const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
            return (index.h("ir-booking-listing-mobile-card", { key: rowKey, booking: booking, totalPersons: totalPersons, lastManipulation: lastManipulation, extraServicesLabel: locales_store.locales.entries.Lcz_ExtraServices, onIrBookingCardAction: event => {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    this.handleIrActions({ action: event.detail.action, booking: event.detail.booking });
                } }));
        })), pagination.totalRecords > 0 && (index.h("ir-pagination", { key: 'de331277c489d32661fbf17df8c994e49e1f7c9b', class: "data-table--pagination", showing: pagination.showing, total: pagination.totalRecords, pages: pagination.totalPages, pageSize: pagination.pageSize, currentPage: pagination.currentPage, allowPageSizeChange: false, pageSizes: [pagination.pageSize], recordLabel: locales_store.locales.entries?.Lcz_Bookings ?? 'bookings', onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) })), index.h("ir-dialog", { key: '43af7fb35db582a6c06449c0809ec4523a033d66', label: "Delete", open: !!this.booking_nbr, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, lightDismiss: false }, index.h("span", { key: '91b57c9a21f605b705c081ff1a49d253dcfa3309' }, locales_store.locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.booking_nbr), index.h("div", { key: '11ec49e609a8be08cc48a671e8ab9726512d10b6', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '2f7021cb9d8a6542225480f9341e409a4d4fc8f9', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.booking_nbr = null;
            }, size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '448c239115c2647e0350f47760b77808e78c2823', onClickHandler: e => {
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
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad", 7);
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
        const havePrivilege = utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode);
        return (index.h(index.Host, { key: 'fed2625915e8d95b4ae7b3d9f45d7fba64062235' }, index.h("section", { key: 'b7c6de50daed46c4fd3fd6a069b58a4a3f584c41', class: "d-flex align-items-center " }, index.h("div", { key: '25bbf83384baf201891e8266c18ddb74399ca00b', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, index.h("div", { key: '9310e90826fea606eca717873968e42efb413a22', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, index.h("h3", { key: '4eb99e6a9742efec8ad701bcb01a5d7fa810a532', class: "page-title" }, locales_store.locales.entries?.Lcz_Bookings), index.h("div", { key: 'c19b93fb52c4a1737e647373f0b28fa290998af2' }, !havePrivilege && (index.h("igl-book-property-container", { key: 'd6eddad24beb1d94b0fae9cfcf259161dae95cb9', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, ticket: booking_listing_service.booking_listing.token }, index.h("ir-custom-button", { key: 'dfa37f7194fb1681ec49bb4d904c8bd9055997f0', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, index.h("wa-icon", { key: '33949e2701ebfef61a5048cc951c24aaf5772d10', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("h3", { key: '9469febe82c300619d26959b6c19c7c8bb596648', class: "d-none d-md-block page-title" }, locales_store.locales.entries?.Lcz_Bookings), index.h("form", { key: '23e744db982d045207d33179c319d6e229e26ecf', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, index.h("ir-input", { key: '728078e79dc3b74749d602b30e0318335d7fd680', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales_store.locales.entries?.Lcz_FindBookNbrorName }, index.h("wa-icon", { key: '1397e6c161ab05c0064eabee67d0acfc7754667b', name: "magnifying-glass", slot: "start" })), index.h("h5", { key: 'd79471acf095361fdf612e4dd1592ac91472ac27', class: "m-0 font-weight-bold d-none d-sm-block" }, locales_store.locales.entries?.Lcz_Or))), index.h("div", { key: '207309146c9d22eaefb0b340b2abdcb59bcd6992', class: "d-none d-md-block" }, index.h("wa-tooltip", { key: 'c7ba39be2966a2b87f3c5e5289f718a299459c66', for: "new-booking" }, "Create new booking"), !havePrivilege && (index.h("igl-book-property-container", { key: '29ef11b2fa7950ab053307008e6ba478c1d061c5', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, ticket: booking_listing_service.booking_listing.token }, index.h("ir-custom-button", { key: '51f4bd10b000a3762bd734ff4fabdc21e5dca563', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, index.h("wa-icon", { key: 'e949ff98689c872bfbaa68240a034047e4a024ce', name: "plus", style: { fontSize: '1.2rem' } })))))), index.h("section", { key: '2d17ff5050295e9d36bc1409d64a4c9980d8b400', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, index.h("span", { key: '84972d162b2385256b8fbe5035e19fb176f68700' }), index.h("h5", { key: '461f95fcba3905193a5b021404f23e5f41106efd', class: "m-0 font-weight-bold" }, locales_store.locales.entries?.Lcz_Or), index.h("span", { key: '785610bf0f9229ff2870ef60e9d104403a65722f' })), index.h("section", { key: '4c6c4b3666a6fd30374ed3608f9a7ec411ec93b0', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("wa-select", { key: '38a901942f0236a3d261771c2488fe65b53c4672', onchange: e => {
                booking_listing_service.updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing_service.booking_listing?.types[0]?.id?.toString() }, booking_listing_service.booking_listing?.types.map(b => (index.h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), index.h("ir-range-picker", { key: 'a5855db8588a85b2f5fff0111e2a631f0c842a64', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(moment.hooks(booking_listing_service.booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(moment.hooks(booking_listing_service.booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing_service.booking_listing.userSelection.to;
                }
                booking_listing_service.booking_listing.userSelection = { ...booking_listing_service.booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: moment.hooks(booking_listing_service.booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: moment.hooks(booking_listing_service.booking_listing.userSelection.to, 'YYYY-MM-DD') }), index.h("wa-select", { key: 'fa21113c4b0bcea157c574410d86a58e72c21bbb', onchange: e => {
                booking_listing_service.updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing_service.booking_listing?.statuses[0]?.code }, booking_listing_service.booking_listing?.statuses.map(b => (index.h("wa-option", { key: b.code, value: b.code }, b.name)))), !utils.isPrivilegedUser(booking_listing_service.booking_listing.userSelection.userTypeCode) && (index.h("wa-select", { key: '53ebdc28dbae133d5f9bcd521d34f17410dbbbd3', onchange: e => {
                booking_listing_service.updateUserSelection('channel', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing_service.booking_listing?.channels[0]?.value }, booking_listing_service.booking_listing?.channels.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name))))), index.h("wa-select", { key: '0b25dc90cb8e6128ea1f6acea0e6125b56ba435f', onchange: e => {
                booking_listing_service.updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing_service.booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing_service.booking_listing?.balance_filter[0]?.value }, booking_listing_service.booking_listing?.balance_filter.map(b => (index.h("wa-option", { key: b.value, value: b.value }, b.name)))), index.h("div", { key: 'a0c04cb523bc85723921177803a0bbd868c55bb7', class: "d-flex flex-fill align-items-end m-0" }, index.h("wa-tooltip", { key: '72e9c3ae36bc4d559be340327020f6004a89536b', for: "search-btn" }, locales_store.locales.entries?.Lcz_Search), index.h("ir-custom-button", { key: '26ba44b9dcf5cd9697c154cabc9926e2ffa6b3f1', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, index.h("wa-icon", { key: '7413b70e39d5fc45f0a44dbb21eee1ea287302d3', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: '2a6ed3397fc3258dfa0169ee117510245903a213', for: "clear-btn" }, locales_store.locales.entries?.Lcz_Erase), index.h("ir-custom-button", { key: '4f5c7b70e3ed49c84f52dd939ac6e7e184ed89b1', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, index.h("wa-icon", { key: '8059807d70572ba8650c43e59a714cbf1963b3bf', name: "eraser", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: 'cffdc63c257cf5484d0e05cf55e2c8166ad8c9e1', for: "excel-btn" }, locales_store.locales.entries?.Lcz_ExportToExcel), index.h("ir-custom-button", { key: '6b27d941e1a7ca646d78684aa2d8455ca9d38b0a', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, index.h("wa-icon", { key: '15535fa25c09e9a6526dc29816ad80219179d4ff', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
    }
};
IrListingHeader.style = IrListingHeaderStyle0;

exports.igl_book_property_container = IglBookPropertyContainer;
exports.ir_booking_listing_mobile_card = IrBookingListingMobileCard;
exports.ir_booking_listing_table = IrBookingListingTable;
exports.ir_listing_header = IrListingHeader;

//# sourceMappingURL=igl-book-property-container_4.cjs.entry.js.map