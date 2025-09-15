'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const axios = require('./axios-6e678d52.js');
const booking_listing_service = require('./booking_listing.service-d65e9b8d.js');
const room_service = require('./room.service-e031b11c.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-0395cd83.js');
const moment = require('./moment-1780b03a.js');
const functions = require('./functions-1d46da3c.js');
const calendarData = require('./calendar-data-960b69ba.js');
const booking_service = require('./booking.service-890b7e90.js');
const v4 = require('./v4-9b297151.js');
const housekeeping_service = require('./housekeeping.service-6bb565b8.js');
const hkTasks_store = require('./hk-tasks.store-f07341ca.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
const user_service = require('./user.service-41332ac6.js');
const index$1 = require('./index-84e84862.js');
require('./index-7564ffa1.js');
require('./index-63734c32.js');

const irBookingEmailLogsCss = ".sc-ir-booking-email-logs-h{display:block}";
const IrBookingEmailLogsStyle0 = irBookingEmailLogsCss;

const IrBookingEmailLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.token = new Token.Token();
    }
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    render() {
        return (index.h(index.Host, { key: '71d14432720339eb300b3e855cb9b83f1dbd56d7', class: "p-1" }, index.h("ir-interceptor", { key: '4a441418de2e2875c34925ba4d10dde4a7b163da', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), index.h("ir-toast", { key: 'eafb08d7ce3b143a9814a0311389c20019750ffa' }), index.h("div", { key: 'c91dbd5580dcd48cbbe538a89f20684e6b4220ad', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, index.h("ir-input-text", { key: '5096d9a5be4ad20976b8a94bfe15ceced7741184', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), index.h("ir-button", { key: 'ebfd030345afa474a1cd3c1cdd8a0a3e0aad5247', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), index.h("p", { key: 'c7c46b827c106dc9b22bee933ae563ec83aa638f' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrBookingEmailLogs.style = IrBookingEmailLogsStyle0;

// src/utils/browserHistory.ts
/**
 * Read all current search params into a Record<string, string>
 */
function getAllParams() {
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const [key, value] of params.entries()) {
        out[key] = value;
    }
    return out;
}

const irBookingListingCss = ".sc-ir-booking-listing-h{display:block;height:100%}.logo.sc-ir-booking-listing{height:2rem;width:2rem}.card.sc-ir-booking-listing{overflow-x:auto}.secondary-p.sc-ir-booking-listing{font-size:12px !important}.room-service.sc-ir-booking-listing{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;width:100%;padding:0.25rem 0}.room-name-container.sc-ir-booking-listing{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px}.h-screen.sc-ir-booking-listing{height:100%}.price-span.sc-ir-booking-listing{margin:0;margin-right:5px}.main-container.sc-ir-booking-listing{height:100%;overflow-y:auto}.badge.ct_ir_badge.sc-ir-booking-listing{padding:0.2rem 0.3rem}.yellow_dot.sc-ir-booking-listing{height:0.5rem;width:0.5rem;height:0.5rem;width:0.8rem;border-radius:50%;background:rgb(244, 213, 82);margin-left:0.5rem;display:inline-flex;padding:0;margin:0}.booking_name.sc-ir-booking-listing{display:flex;align-items:center;gap:0.4rem}.bg-ir-red.sc-ir-booking-listing{background:#ff4961;padding:0.2rem 0.3rem}.due-btn.sc-ir-booking-listing{border:1px solid #ff4961;color:#ff4961;cursor:pointer;padding:1px 0.25rem !important;font-size:12px !important}.due-btn.sc-ir-booking-listing:hover{background:#ff4961;color:white}.booking_number.sc-ir-booking-listing{all:unset;cursor:pointer}.booking_number.sc-ir-booking-listing:hover{color:#1e9ff2}.in-out.sc-ir-booking-listing{width:150px !important}.booking_guest_name.sc-ir-booking-listing{width:fit-content;padding:0 !important;margin:0}.booking_guest_name.sc-ir-booking-listing .button-text.sc-ir-booking-listing{padding:0 !important}.buttons-container.sc-ir-booking-listing{gap:10px}td.sc-ir-booking-listing ul.sc-ir-booking-listing{width:max-content !important}td.sc-ir-booking-listing{width:max-content !important}.date-p.sc-ir-booking-listing{width:max-content !important;min-width:100%;text-align:center !important}.booking-label-gap.sc-ir-booking-listing{gap:5px}@media (min-width: 1024px){.yellow_dot.sc-ir-booking-listing{height:0.5rem;width:0.5rem}}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.rowCount = 10;
        this.isLoading = false;
        this.currentPage = 1;
        this.totalPages = 1;
        this.oldStartValue = 0;
        this.editBookingItem = null;
        this.showCost = false;
        this.bookingListingService = new booking_listing_service.BookingListingService();
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.token = new Token.Token();
        this.statusColors = {
            '001': 'badge-warning',
            '002': 'badge-success',
            '003': 'badge-danger',
            '004': 'badge-danger',
        };
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        booking_listing_service.updateUserSelection('end_row', this.rowCount);
        booking_listing_service.booking_listing.rowCount = this.rowCount;
        if (this.ticket !== '') {
            booking_listing_service.booking_listing.token = this.ticket;
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        booking_listing_service.onBookingListingChange('userSelection', async (newValue) => {
            const newTotal = newValue.total_count;
            this.totalPages = Math.ceil(newTotal / this.rowCount);
        });
        booking_listing_service.onBookingListingChange('bookings', async (newValue) => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        booking_listing_service.booking_listing.token = this.ticket;
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.bookingListingService.getExposedBookingsCriteria(propertyId),
                this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT']),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
            booking_listing_service.updateUserSelection('property_id', propertyId);
            // this.geSearchFiltersFromParams();
            await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { is_to_export: false }));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            this.editBookingItem = null;
        }
    }
    geSearchFiltersFromParams() {
        //e=10&status=002&from=2025-04-15&to=2025-04-22&filter=2&c=Alitalia+Cabin+Crew
        const params = getAllParams();
        if (params) {
            console.log('update params');
            let obj = {};
            if (params.e) {
                obj['end_row'] = Number(params.e);
            }
            if (params.s) {
                obj['start_row'] = Number(params.s);
            }
            if (params.status) {
                obj['booking_status'] = params.status;
            }
            if (params.filter) {
                obj['filter_type'] = params.filter;
            }
            if (params.from) {
                obj['from'] = params.from;
            }
            if (params.to) {
                obj['to'] = params.to;
            }
            booking_listing_service.updateUserSelections(obj);
        }
        console.log('params=>', params);
    }
    getPaginationBounds() {
        const totalCount = booking_listing_service.booking_listing.userSelection.total_count;
        const startItem = (this.currentPage - 1) * this.rowCount;
        let endItem = this.currentPage * this.rowCount;
        endItem = endItem > totalCount ? totalCount : endItem;
        return { startItem, endItem, totalCount };
    }
    openModal() {
        this.listingModalTimeout = setTimeout(() => {
            this.listingModal = this.el.querySelector('ir-listing-modal');
            this.listingModal.editBooking = this.editBookingItem;
            this.listingModal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.listingModalTimeout);
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { is_to_export: false }));
    }
    async handleResetStoreData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { is_to_export: false }));
    }
    handleBookingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        booking_listing_service.booking_listing.bookings = [
            ...booking_listing_service.booking_listing.bookings.map(b => {
                if (b.booking_nbr === e.detail.booking_nbr) {
                    return e.detail;
                }
                return b;
            }),
        ];
    }
    renderItemRange() {
        const { endItem, startItem, totalCount } = this.getPaginationBounds();
        return `${locales_store.locales.entries.Lcz_View} ${startItem + 1} - ${endItem} ${locales_store.locales.entries.Lcz_Of} ${totalCount}`;
    }
    async updateData() {
        const { endItem, startItem } = this.getPaginationBounds();
        // setParams({
        //   s: startItem,
        //   e: endItem,
        // });
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { is_to_export: false, start_row: startItem, end_row: endItem }));
    }
    calculateTotalPersons(booking) {
        const sumOfOccupancy = ({ adult_nbr, children_nbr, infant_nbr }) => {
            return (adult_nbr !== null && adult_nbr !== void 0 ? adult_nbr : 0) + (children_nbr !== null && children_nbr !== void 0 ? children_nbr : 0) + (infant_nbr !== null && infant_nbr !== void 0 ? infant_nbr : 0);
        };
        return booking.rooms.reduce((prev, cur) => {
            return sumOfOccupancy(cur.occupancy) + prev;
        }, 0);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (this.isLoading || this.ticket === '') {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("div", { class: "p-1 main-container" }, index.h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), index.h("section", null, index.h("div", { class: "card p-1 flex-fill m-0 mt-2" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "text-left" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 :
            _a.Lcz_Booking, "#"), index.h("th", { scope: "col" }, (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_BookedOn), index.h("th", { scope: "col" }, (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_GuestSource), index.h("th", { scope: "col", class: "text-left services-cell" }, (_d = locales_store.locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Services), index.h("th", { scope: "col", class: "in-out" }, (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Dates), index.h("th", { scope: "col" }, index.h("span", { class: "price-span" }, (_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_Amount), index.h("ir-tooltip", { customSlot: true, message: `<span style="width:100%;display:block;">${(_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_BookingBalance}</span><span>${(_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ClickToSettle}</span>` }, index.h("span", { slot: "tooltip-trigger", class: 'm-0 btn due-btn' }, (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Balance))), this.showCost && (index.h("th", { scope: "col", class: "services-cell" }, (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_Cost)), index.h("th", { scope: "col" }, (_l = locales_store.locales.entries) === null || _l === void 0 ? void 0 : _l.Lcz_Status), index.h("th", { scope: "col" }, index.h("p", { class: "sr-only" }, "actions")))), index.h("tbody", { class: "" }, booking_listing_service.booking_listing.bookings.length === 0 && (index.h("tr", null, index.h("td", { colSpan: 8 }, (_m = locales_store.locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_NoDataAvailable))), (_o = booking_listing_service.booking_listing.bookings) === null || _o === void 0 ? void 0 :
            _o.map(booking => {
                var _a, _b, _c, _d, _e;
                let confirmationBG = this.statusColors[booking.is_requested_to_cancel ? '003' : booking.status.code];
                const lastManipulation = booking.ota_manipulations ? booking.ota_manipulations[booking.ota_manipulations.length - 1] : null;
                const totalPersons = this.calculateTotalPersons(booking);
                return (index.h("tr", { key: booking.booking_nbr }, index.h("td", { class: "text-left" }, index.h("ir-button", { btn_color: "link", btnStyle: { padding: '0', margin: '0' }, onClickHandler: () => (this.editBookingItem = { booking, cause: 'edit' }), text: booking.booking_nbr }), booking.channel_booking_nbr && index.h("p", { class: "p-0 m-0 text-center secondary-p" }, booking.channel_booking_nbr)), index.h("td", null, index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: "p-0 m-0 secondary-p" }, functions._formatTime(booking.booked_on.hour.toString(), booking.booked_on.minute.toString()))), index.h("td", null, index.h("div", { class: "h-100 d-flex align-items-center ", style: { width: 'max-content' } }, index.h("img", { class: "mr-2 logo", src: booking.origin.Icon, alt: booking.origin.Label }), index.h("div", { class: "text-left" }, index.h("div", { class: "d-flex align-items-center" }, index.h("div", { class: "booking_name m-0 p-0" }, index.h("ir-button", { btn_color: "link", onClickHandler: () => (this.editBookingItem = { booking, cause: 'guest' }), text: `${booking.guest.first_name} ${(_a = booking.guest.last_name) !== null && _a !== void 0 ? _a : ''}`, btnStyle: {
                        width: 'fit-content',
                        padding: '0',
                        margin: '0',
                    }, labelStyle: {
                        padding: '0',
                    } }), booking.guest.nbr_confirmed_bookings > 1 && !booking.agent && (index.h("div", { class: "m-0 p-0" }, index.h("ir-tooltip", { message: `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, index.h("div", { class: "d-flex align-items-center my-0 p-0", slot: "tooltip-trigger" }, index.h("ir-icons", { style: { '--icon-size': '0.875rem' }, color: "#FB0AAD", name: "heart-fill" }))))), index.h("span", { class: 'p-0 m-0' }, totalPersons, locales_store.locales.entries.Lcz_P), utils.getPrivateNote(booking.extras) && index.h("span", { class: "yellow_dot" }))), index.h("div", { class: 'd-flex align-items-center booking-label-gap' }, index.h("p", { class: "p-0 m-0 secondary-p" }, booking.origin.Label), booking.is_in_loyalty_mode && !booking.promo_key && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("title", null, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" }))), booking.promo_key && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", height: 18, width: 18 }, index.h("title", null, locales_store.locales.entries.Lcz_Coupon + ':' + booking.promo_key), index.h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" }))))))), index.h("td", null, index.h("ul", null, booking.rooms.map(room => {
                    var _a, _b, _c, _d, _e, _f, _g;
                    return (index.h("li", null, index.h("div", { class: 'room-service' }, index.h("p", { class: 'm-0 p-0' }, room.roomtype.name), room.unit &&
                        !calendarData.isSingleUnit(room.roomtype.id) &&
                        (((_b = (_a = room.unit) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 4 ? (index.h("ir-tooltip", { customSlot: true, message: (_c = room.unit) === null || _c === void 0 ? void 0 : _c.name }, index.h("p", { class: 'room-name-container cursor-pointer m-0', slot: "tooltip-trigger" }, (_e = (_d = room.unit) === null || _d === void 0 ? void 0 : _d.name) === null || _e === void 0 ? void 0 : _e.substring(0, 4)))) : (index.h("p", { class: 'room-name-container  m-0' }, (_g = (_f = room.unit) === null || _f === void 0 ? void 0 : _f.name) === null || _g === void 0 ? void 0 : _g.substring(0, 4)))))));
                }), booking.extra_services && index.h("li", null, locales_store.locales.entries.Lcz_ExtraServices))), index.h("td", null, index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.from_date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.to_date, 'YYYY-MM-DD').format('DD-MMM-YYYY'))), index.h("td", null, index.h("p", { class: "p-0 m-0", style: { whiteSpace: 'nowrap' } }, utils.formatAmount(booking.currency.symbol, (_c = (_b = booking.financial) === null || _b === void 0 ? void 0 : _b.gross_total) !== null && _c !== void 0 ? _c : 0)), booking.financial.due_amount > 0 && (index.h("buuton", { onClick: () => {
                        this.editBookingItem = { booking, cause: 'payment' };
                        this.openModal();
                    }, style: { whiteSpace: 'nowrap' }, class: "btn p-0 m-0 due-btn" }, utils.formatAmount(booking.currency.symbol, booking.financial.due_amount)))), this.showCost && (index.h("td", null, booking.financial.gross_cost !== null && booking.financial.gross_cost === 0
                    ? '_'
                    : utils.formatAmount(booking.currency.symbol, booking.financial.gross_cost))), index.h("td", null, index.h("p", { class: `m-0 badge ${confirmationBG} ct_ir_badge` }, booking.is_requested_to_cancel ? (_d = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_CancellationRequested : booking.status.description), !lastManipulation && ((_e = booking.events) === null || _e === void 0 ? void 0 : _e.length) > 0 && booking.events[0].type.toLowerCase() === 'modified' && (index.h("p", { class: "mx-0 p-0 small", style: { marginTop: '0.25rem', marginBottom: '0' } }, "Modified")), lastManipulation && (index.h("ir-popover", { trigger: "hover", content: `Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}` }, index.h("p", { class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, index.h("b", null, "Modified"))))), index.h("td", null, index.h("div", { class: "d-flex justify-content-center align-items-center", style: { gap: '8px' } }, index.h("ir-button", { title: "Edit booking", variant: "icon", icon_name: "edit", onClickHandler: () => (this.editBookingItem = { booking, cause: 'edit' }) }), index.h("ir-button", { title: "Delete booking", style: { '--icon-button-color': '#ff4961', '--icon-button-hover-color': '#FF1635' }, variant: "icon", icon_name: "trash", onClickHandler: () => {
                        this.editBookingItem = { booking, cause: 'delete' };
                        this.openModal();
                    } })))));
            }))), this.totalPages > 1 && (index.h("section", { class: 'd-flex flex-column flex-md-row align-items-center justify-content-between pagination-container' }, index.h("p", { class: "m-0 mb-1 mb-md-0" }, this.renderItemRange()), index.h("div", { class: 'd-flex align-items-center buttons-container' }, index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHandler: async () => {
                this.currentPage = 1;
                await this.updateData();
            }, icon_name: "angles_left", style: { '--icon-size': '0.875rem' } }), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHandler: async () => {
                this.currentPage = this.currentPage - 1;
                await this.updateData();
            }, icon_name: "angle_left", style: { '--icon-size': '0.875rem' } }), index.h("ir-select", { selectedValue: this.currentPage.toString(), showFirstOption: false, onSelectChange: async (e) => {
                this.currentPage = +e.detail;
                await this.updateData();
            }, data: Array.from(Array(this.totalPages), (_, i) => i + 1).map(i => ({
                text: i.toString(),
                value: i.toString(),
            })) }), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHandler: async () => {
                this.currentPage = this.currentPage + 1;
                await this.updateData();
            }, icon_name: "angle_right", style: { '--icon-size': '0.875rem' } }), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHandler: async () => {
                this.currentPage = this.totalPages;
                console.log(this.currentPage);
                await this.updateData();
            }, icon_name: "angles_right", style: { '--icon-size': '0.875rem' } }))))))), this.editBookingItem && index.h("ir-listing-modal", { paymentEntries: this.paymentEntries, onModalClosed: () => (this.editBookingItem = null) }), index.h("ir-sidebar", { onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.editBookingItem !== null && ['edit', 'guest'].includes(this.editBookingItem.cause), showCloseButton: false, sidebarStyles: ((_p = this.editBookingItem) === null || _p === void 0 ? void 0 : _p.cause) === 'guest' ? { background: 'white' } : { width: this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)', background: '#F2F3F8' } }, ((_q = this.editBookingItem) === null || _q === void 0 ? void 0 : _q.cause) === 'edit' && (index.h("ir-booking-details", { slot: "sidebar-body", p: this.p, hasPrint: true, hasReceipt: true, is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), bookingNumber: this.editBookingItem.booking.booking_nbr, ticket: this.ticket, language: this.language, hasRoomAdd: true })), ((_r = this.editBookingItem) === null || _r === void 0 ? void 0 : _r.cause) === 'guest' && (index.h("ir-guest-info", { slot: "sidebar-body", isInSideBar: true, headerShown: true, booking_nbr: (_t = (_s = this.editBookingItem) === null || _s === void 0 ? void 0 : _s.booking) === null || _t === void 0 ? void 0 : _t.booking_nbr, email: (_v = (_u = this.editBookingItem) === null || _u === void 0 ? void 0 : _u.booking) === null || _v === void 0 ? void 0 : _v.guest.email, language: this.language, onCloseSideBar: () => (this.editBookingItem = null) })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingListing.style = IrBookingListingStyle0;

class PropertyService {
    async getExposedProperty(params) {
        var _a, _b;
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Property`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            calendarData.calendar_data.adultChildConstraints = results.adult_child_constraints;
            calendarData.calendar_data.allowedBookingSources = results.allowed_booking_sources;
            calendarData.calendar_data.allowed_payment_methods = results.allowed_payment_methods;
            calendarData.calendar_data.currency = results.currency;
            calendarData.calendar_data.is_vacation_rental = results.is_vacation_rental;
            calendarData.calendar_data.pickup_service = results.pickup_service;
            calendarData.calendar_data.max_nights = results.max_nights;
            calendarData.calendar_data.roomsInfo = results.roomtypes;
            calendarData.calendar_data.taxes = results.taxes;
            calendarData.calendar_data.id = results.id;
            calendarData.calendar_data.country = results.country;
            calendarData.calendar_data.name = results.name;
            calendarData.calendar_data.is_automatic_check_in_out = results.is_automatic_check_in_out;
            calendarData.calendar_data.tax_statement = results.tax_statement;
            calendarData.calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
            calendarData.calendar_data.is_pms_enabled = results.is_pms_enabled;
            const spitTime = (_b = (_a = results === null || results === void 0 ? void 0 : results.time_constraints) === null || _a === void 0 ? void 0 : _a.check_out_till) === null || _b === void 0 ? void 0 : _b.split(':');
            calendarData.calendar_data.checkin_checkout_hours = {
                offset: results.city.gmt_offset,
                hour: Number(spitTime[0] || 0),
                minute: Number(spitTime[1] || 0),
            };
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getCountrySales(params) {
        const { data } = await axios.axios.post('/Get_Country_Sales', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Country_Sales.Link_excel);
        }
        return data.My_Result;
    }
    async getDailyRevenueReport(params) {
        const { data } = await axios.axios.post('/Get_Daily_Revenue_Report', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Daily_Revenue_Report.Link_excel);
        }
        return data.My_Result;
    }
    async setExposedCleaningFrequency(params) {
        const { data } = await axios.axios.post('/Set_Exposed_Cleaning_Frequency', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getMonthlyStats(params) {
        const { data } = await axios.axios.post('/Get_Monthly_Stats', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        if (params.is_export_to_excel) {
            utils.downloadFile(data.My_Params_Get_Monthly_Stats.Link_excel);
        }
        return data.My_Result;
    }
}

const irDailyRevenueCss = ".sc-ir-daily-revenue-h{display:block}.daily-revenue__meta.sc-ir-daily-revenue{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-daily-revenue{flex:1 1 0%}@media (min-width: 768px){.daily-revenue__meta.sc-ir-daily-revenue{flex-direction:row}}";
const IrDailyRevenueStyle0 = irDailyRevenueCss;

const IrDailyRevenue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad", 7);
        this.language = '';
        this.ticket = '';
        this.filters = { date: moment.hooks().format('YYYY-MM-DD'), users: null };
        this.tokenService = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.propertyService = new PropertyService();
        this.bookingService = new booking_service.BookingService();
        this.handleSidebarClose = (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.sideBarEvent = null;
        };
    }
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
        this.initializeApp();
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    handleFetchNewReports(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, e.detail);
        this.getPaymentReports();
    }
    async handleResetBooking(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.getPaymentReports(false, true);
    }
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (index.h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            default:
                return null;
        }
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getPaymentReports(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    groupPaymentsByName(payments) {
        var _a;
        const groupedPayment = new Map();
        for (const payment of payments) {
            const key = `${payment.payTypeCode}_${payment.payMethodCode}`;
            const p = (_a = groupedPayment.get(key)) !== null && _a !== void 0 ? _a : [];
            groupedPayment.set(key, [...p, payment]);
        }
        return new Map([...groupedPayment.entries()].sort(([a], [b]) => {
            const aNum = Number(a);
            const bNum = Number(b);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            }
            return a.localeCompare(b);
        }));
    }
    async getPaymentReports(isExportToExcel = false, excludeYesterday = false) {
        var _a, _b, _c, _d;
        try {
            const getReportObj = (report) => {
                return {
                    method: report.METHOD,
                    payTypeCode: report.PAY_TYPE_CODE,
                    payMethodCode: report.PAY_METHOD_CODE,
                    amount: report.AMOUNT,
                    date: report.DATE,
                    hour: report.HOUR,
                    minute: report.MINUTE,
                    user: report.USER,
                    currency: report.CURRENCY,
                    bookingNbr: report.BOOKING_NBR,
                    id: v4.v4(),
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const requests = [
                this.propertyService.getDailyRevenueReport({
                    date: this.filters.date,
                    property_id: (_a = this.property_id) === null || _a === void 0 ? void 0 : _a.toString(),
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (!isExportToExcel && !excludeYesterday) {
                requests.push(this.propertyService.getDailyRevenueReport({
                    date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    property_id: (_b = this.property_id) === null || _b === void 0 ? void 0 : _b.toString(),
                    is_export_to_excel: isExportToExcel,
                }));
            }
            const results = await Promise.all(requests);
            if (!isExportToExcel) {
                if (results[0]) {
                    this.groupedPayment = this.groupPaymentsByName((_c = results[0]) === null || _c === void 0 ? void 0 : _c.map(getReportObj));
                }
                else {
                    this.groupedPayment = new Map();
                }
                if (results[1])
                    this.previousDateGroupedPayments = this.groupPaymentsByName((_d = results[1]) === null || _d === void 0 ? void 0 : _d.map(getReportObj));
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c;
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Revenue"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getPaymentReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-revenue-summary", { previousDateGroupedPayments: this.previousDateGroupedPayments, groupedPayments: this.groupedPayment, paymentEntries: this.paymentEntries }), index.h("div", { class: "daily-revenue__meta" }, index.h("ir-daily-revenue-filters", { isLoading: this.isLoading === 'filter', payments: this.groupedPayment }), index.h("ir-revenue-table", { filters: this.filters, class: 'daily-revenue__table', paymentEntries: this.paymentEntries, payments: this.groupedPayment }))), index.h("ir-sidebar", { sidebarStyles: {
                width: ((_b = this.sideBarEvent) === null || _b === void 0 ? void 0 : _b.type) === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: ((_c = this.sideBarEvent) === null || _c === void 0 ? void 0 : _c.type) === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrDailyRevenue.style = IrDailyRevenueStyle0;

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clearSelectedHkTasks = index.createEvent(this, "clearSelectedHkTasks", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.isCleaningLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.hkNameCache = {};
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.token = new Token.Token();
        this.table_sorting = new Map();
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
    }
    handleSkipSelectedTask(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    async init() {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            this.isLoading = true;
            hkTasks_store.setLoading(true);
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.houseKeepingService.getExposedHKSetup(this.property_id), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            const tasksResult = await this.houseKeepingService.getHkTasks({
                property_id: this.property_id,
                from_date: moment.hooks().format('YYYY-MM-DD'),
                to_date: moment.hooks().format('YYYY-MM-DD'),
                housekeepers: [],
                cleaning_frequency: (_c = ((_a = calendarData.calendar_data.cleaning_frequency) !== null && _a !== void 0 ? _a : (_b = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _b === void 0 ? void 0 : _b.cleaning_frequencies[0])) === null || _c === void 0 ? void 0 : _c.code,
                dusty_window: (_e = (_d = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0]) === null || _e === void 0 ? void 0 : _e.code,
                highlight_window: (_g = (_f = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.highlight_checkin_options[0]) === null || _g === void 0 ? void 0 : _g.code,
            });
            // updateTaskList();
            if (tasksResult === null || tasksResult === void 0 ? void 0 : tasksResult.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            hkTasks_store.setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        var _a, _b;
        this.hkNameCache = {};
        (_b = (_a = housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        hkTasks_store.updateTasks(tasks.map(t => (Object.assign(Object.assign({}, t), { id: v4.v4(), housekeeper: (() => {
                var _a, _b, _c;
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = (_c = (_b = (_a = housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() }))));
    }
    async handleHeaderButtonPress(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
            case 'clean-inspect':
                (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
                this.modalCauses = {
                    task: null,
                    cause: 'clean',
                    status: name === 'clean-inspect' ? '004' : '001',
                };
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                utils.downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = Object.assign(Object.assign({}, e.detail), { cause: 'clean' });
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    async handleModalConfirmation(e) {
        var _a;
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (hkTasks_store.hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (((_a = this.modalCauses) === null || _a === void 0 ? void 0 : _a.cause) === 'skip') {
                const { booking_nbr, date, unit } = this.modalCauses.task;
                await this.houseKeepingService.editHkSkip({
                    BOOK_NBR: booking_nbr,
                    DATE: date,
                    COMMENT: '',
                    HK_SKIP_ID: -1,
                    HK_SKIP_REASON_CODE: '001',
                    PR_ID: unit.id,
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasks_store.hkTasksStore.selectedTasks.map(t => {
                        var _a, _b;
                        return ({
                            description: 'Cleaned',
                            hkm_id: t.hkm_id === 0 ? null : t.hkm_id,
                            unit_id: t.unit.id,
                            booking_nbr: t.booking_nbr,
                            status: (_b = (_a = this.modalCauses) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : '001',
                        });
                    }),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            hkTasks_store.clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = Object.assign({}, e.detail);
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters(export_to_excel = false) {
        var _a;
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = (_a = this.filters) !== null && _a !== void 0 ? _a : {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies === null || cleaning_frequencies === void 0 ? void 0 : cleaning_frequencies.code,
            dusty_window: dusty_units === null || dusty_units === void 0 ? void 0 : dusty_units.code,
            highlight_window: highlight_check_ins === null || highlight_check_ins === void 0 ? void 0 : highlight_check_ins.code,
            property_id: this.property_id,
            from_date: moment.hooks().format('YYYY-MM-DD'),
            to_date: (cleaning_periods === null || cleaning_periods === void 0 ? void 0 : cleaning_periods.code) || moment.hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        var _a, _b, _c, _d;
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "hk_tasks_base" }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-1 d-flex flex-column", style: { gap: '1rem' } }, index.h("h3", null, "Housekeeping Tasks"), index.h("div", { class: "tasks-view ", style: { gap: '1rem' } }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("div", { class: "d-flex w-100 flex-column", style: { gap: '1rem' } }, index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                hkTasks_store.updateSelectedTasks(e.detail);
            }, class: "flex-grow-1 w-100" })))), index.h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: this.isCleaningLoading, onConfirmModal: this.handleModalConfirmation.bind(this), onCancelModal: () => {
                if (this.modalCauses) {
                    hkTasks_store.clearSelectedTasks();
                    this.modalCauses = null;
                }
            }, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: this.modalCauses
                ? ((_a = this.modalCauses) === null || _a === void 0 ? void 0 : _a.cause) === 'clean'
                    ? this.modalCauses.task
                        ? `Update ${(_d = (_c = (_b = this.modalCauses) === null || _b === void 0 ? void 0 : _b.task) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name} to Clean`
                        : 'Update selected unit(s) to Clean'
                    : 'Skip cleaning and reschedule for tomorrow.'
                : 'Update selected unit(s) to Clean' }), index.h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && index.h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new housekeeping_service.HouseKeepingService();
        this.propertyService = new PropertyService();
        this.token = new Token.Token();
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [];
            if (calendarData.calendar_data.housekeeping_enabled) {
                requests.push(this.houseKeepingService.getExposedHKSetup(propertyId));
            }
            requests.push(this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']));
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                }));
            }
            await Promise.all(requests);
            this.selectedCleaningFrequency = (_a = calendarData.calendar_data.cleaning_frequency) === null || _a === void 0 ? void 0 : _a.code;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            await this.roomService.SetAutomaticCheckInOut({
                property_id: housekeeping_service.housekeeping_store.default_properties.property_id,
                flag: e.detail === 'auto',
            });
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async saveCleaningFrequency(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            await this.propertyService.setExposedCleaningFrequency({
                property_id: housekeeping_service.housekeeping_store.default_properties.property_id,
                code: this.selectedCleaningFrequency,
            });
            calendarData.calendar_data.cleaning_frequency = { code: this.selectedCleaningFrequency, description: '' };
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
            this.modal.closeModal();
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        var _a;
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        console.log(calendarData.calendar_data.cleaning_frequency);
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("h3", { class: "mb-2" }, locales_store.locales.entries.Lcz_HouseKeepingAndCheckInSetup), index.h("div", { class: "card p-1" }, index.h("ir-title", { borderShown: true, label: "Operations Settings" }), index.h("div", { class: 'd-flex align-items-center mb-1' }, index.h("p", { class: "my-0 py-0 mr-1" }, locales_store.locales.entries.Lcz_CheckInOutGuestsAutomatically), index.h("ir-select", { showFirstOption: false, selectedValue: calendarData.calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => this.saveAutomaticCheckInCheckout(e), data: [
                { text: locales_store.locales.entries.Lcz_YesAsPerPropertyPolicy, value: 'auto' },
                { text: locales_store.locales.entries.Lcz_NoIWillDoItManually, value: 'manual' },
            ] })), index.h("div", { class: 'd-flex align-items-center' }, index.h("p", { class: "my-0 py-0 mr-1" }, locales_store.locales.entries.Lcz_CleaningFrequency, ":"), index.h("ir-select", { showFirstOption: false, selectedValue: this.selectedCleaningFrequency, onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedCleaningFrequency = e.detail;
                this.modal.openModal();
            }, data: (_a = housekeeping_service.housekeeping_store === null || housekeeping_service.housekeeping_store === void 0 ? void 0 : housekeeping_service.housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })) }))), calendarData.calendar_data.housekeeping_enabled && index.h("ir-hk-team", { class: "mb-1" }), index.h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: irInterceptor_store.isRequestPending('/Set_Exposed_Cleaning_Frequency'), onConfirmModal: this.saveCleaningFrequency.bind(this), iconAvailable: true, onCancelModal: () => {
                var _a;
                this.selectedCleaningFrequency = (_a = calendarData.calendar_data.cleaning_frequency) === null || _a === void 0 ? void 0 : _a.code;
            }, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: 'This action will reschedule all cleaning tasks. Do you want to continue?' }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

const irMonthlyBookingsReportCss = ".sc-ir-monthly-bookings-report-h{display:block}";
const IrMonthlyBookingsReportStyle0 = irMonthlyBookingsReportCss;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrMonthlyBookingsReport = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isPageLoading = true;
        this.isLoading = null;
        this.reports = [];
        this.tokenService = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.propertyService = new PropertyService();
    }
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: moment.hooks().format('MMMM YYYY'),
                firstOfMonth: moment.hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment.hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report === null || report === void 0 ? void 0 : report.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: moment.hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: moment.hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats } = currentReports, rest = __rest$1(currentReports, ["DailyStats"]);
            this.stats = Object.assign({}, rest);
            if (include_previous_year && results[isExportToExcel ? 0 : 1]) {
                const previousYearReports = results[isExportToExcel ? 0 : 1];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === moment.hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return Object.assign(Object.assign({}, current), { last_year: previous !== null && previous !== void 0 ? previous : null });
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("section", null, index.h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, index.h("ir-stats-card", { icon: ((_b = this.stats) === null || _b === void 0 ? void 0 : _b.Occupancy_Difference_From_Previous_Month) < 0 ? 'arrow-trend-down' : 'arrow-trend-up', cardTitle: "Average Occupancy", value: this.stats.AverageOccupancy ? ((_c = this.stats) === null || _c === void 0 ? void 0 : _c.AverageOccupancy.toFixed(2)) + '%' : null, subtitle: `${((_d = this.stats) === null || _d === void 0 ? void 0 : _d.Occupancy_Difference_From_Previous_Month) < 0 ? '' : '+'}${(_e = this.stats) === null || _e === void 0 ? void 0 : _e.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month` }), index.h("ir-stats-card", { icon: "hotel", cardTitle: "Total Units", value: ((_f = this.stats) === null || _f === void 0 ? void 0 : _f.TotalUnitsBooked) ? (_g = this.stats) === null || _g === void 0 ? void 0 : _g.TotalUnitsBooked.toString() : null, subtitle: "Booked" }), index.h("ir-stats-card", { icon: "user_group", cardTitle: "Total Guests", value: (_j = (_h = this.stats) === null || _h === void 0 ? void 0 : _h.Total_Guests) === null || _j === void 0 ? void 0 : _j.toString(), subtitle: "Stayed" }), index.h("ir-stats-card", { icon: "calendar", cardTitle: "Peak Days", value: ((_k = this.stats) === null || _k === void 0 ? void 0 : _k.PeakDays.length) === 0 ? null : (_m = (_l = this.stats) === null || _l === void 0 ? void 0 : _l.PeakDays) === null || _m === void 0 ? void 0 : _m.map(pd => moment.hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), subtitle: `${Math.max(...(((_o = this.stats.PeakDays) === null || _o === void 0 ? void 0 : _o.map(pd => pd.OccupancyPercent)) || []))}% occupancy` })), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrMonthlyBookingsReport.style = IrMonthlyBookingsReportStyle0;

const irSalesByCountryCss = ".sc-ir-sales-by-country-h{display:block}";
const IrSalesByCountryStyle0 = irSalesByCountryCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrSalesByCountry = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isLoading = null;
        this.isPageLoading = true;
        this.countries = new Map();
        this.token = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.propertyService = new PropertyService();
        this.bookingService = new booking_service.BookingService();
        this.baseFilters = {
            FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
            TO_DATE: moment.hooks().format('YYYY-MM-DD'),
            BOOK_CASE: '001',
            WINDOW: 7,
            include_previous_year: false,
        };
    }
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
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
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(this.language), this.roomService.fetchLanguage(this.language), this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [countries] = await Promise.all(requests);
            const mappedCountries = new Map();
            countries.map(country => {
                mappedCountries.set(country.id, {
                    flag: country.flag,
                    name: country.name,
                });
            });
            this.countries = mappedCountries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getCountrySales(isExportToExcel = false) {
        const formatSalesData = (data) => {
            return {
                country: data.COUNTRY,
                country_id: data.COUNTRY_ID,
                nights: data.NIGHTS,
                percentage: data.PCT,
                revenue: data.REVENUE,
                number_of_guests: data.Total_Guests,
            };
        };
        try {
            const _a = this.salesFilters, { include_previous_year } = _a, filterParams = __rest(_a, ["include_previous_year"]);
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales(Object.assign({ AC_ID: this.property_id, is_export_to_excel: isExportToExcel }, filterParams));
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales(Object.assign(Object.assign({ AC_ID: this.property_id, is_export_to_excel: false }, filterParams), { FROM_DATE: moment.hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'), TO_DATE: moment.hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD') }));
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return Object.assign(Object.assign({ id: v4.v4() }, formatSalesData(current)), { last_year: previous ? formatSalesData(previous) : null });
                });
            }
            else {
                enrichedSales = currentSales.map(record => (Object.assign(Object.assign({ id: v4.v4() }, formatSalesData(record)), { last_year: null })));
            }
            // this.salesData = enrichedSales.sort((a, b) => {
            //   if (a.country_id === 0) return -1;
            //   if (b.country_id === 0) return 1;
            //   return 0;
            // });
            this.salesData = [...enrichedSales];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-sales-by-country-summary", { salesReports: this.salesData }), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-sales-table", { mappedCountries: this.countries, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrSalesByCountry.style = IrSalesByCountryStyle0;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.allowedUsersTypes = [];
        this.token = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.userService = new user_service.UserService();
        this.bookingService = new booking_service.BookingService();
        this.userTypes = new Map();
        this.superAdminId = '5';
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
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
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.token.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language, ['_USER_MGT'])];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.socket = index$1.lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result = JSON.parse(PAYLOAD);
        console.log(KEY, result);
        // const reasonHandlers: Partial<Record<bookingReasons, Function>> = {
        //   DORESERVATION: this.updateUserVerificationStatus,
        // };
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = Object.assign(Object.assign({}, users[idx]), { is_email_verified: true });
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        var _a, _b, _c, _d;
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = (_b = (_a = res[1]) === null || _a === void 0 ? void 0 : _a.My_Result) === null || _b === void 0 ? void 0 : _b.allowed_user_types;
        for (const e of res[0]) {
            const value = e[`CODE_VALUE_${(_d = (_c = this.language) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : 'EN'}`];
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.socket.disconnect();
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, locales_store.locales.entries.Lcz_ExtranetUsers)), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

exports.ir_booking_email_logs = IrBookingEmailLogs;
exports.ir_booking_listing = IrBookingListing;
exports.ir_daily_revenue = IrDailyRevenue;
exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_monthly_bookings_report = IrMonthlyBookingsReport;
exports.ir_sales_by_country = IrSalesByCountry;
exports.ir_user_management = IrUserManagement;

//# sourceMappingURL=ir-booking-email-logs_8.cjs.entry.js.map