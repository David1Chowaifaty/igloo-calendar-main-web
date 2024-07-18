'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-caa79d4b.js');
const booking_listing_service = require('./booking_listing.service-277f9185.js');
const room_service = require('./room.service-cab6996c.js');
const locales_store = require('./locales.store-ec208203.js');
const functions = require('./functions-952bf674.js');
const Token = require('./Token-fac1282b.js');
const moment = require('./moment-1780b03a.js');
require('./index-104877f7.js');
require('./calendar-data-3ed3cfd1.js');

const irBookingListingCss = ".sc-ir-booking-listing-h{display:block;height:100%}.logo.sc-ir-booking-listing{height:2rem;width:2rem}.card.sc-ir-booking-listing{overflow-x:auto}.secondary-p.sc-ir-booking-listing{font-size:12px !important}.h-screen.sc-ir-booking-listing{height:100%}.price-span.sc-ir-booking-listing{margin:0;margin-right:5px}.main-container.sc-ir-booking-listing{height:100%;overflow-y:auto}.bg-ir-red.sc-ir-booking-listing{background:#ff4961;height:28px;padding-top:0 !important;padding-bottom:0 !important}.due-btn.sc-ir-booking-listing{border:1px solid #ff4961;color:#ff4961;cursor:pointer;padding:1px 0.25rem !important;font-size:12px !important}.due-btn.sc-ir-booking-listing:hover{background:#ff4961;color:white}.booking_number.sc-ir-booking-listing{all:unset;cursor:pointer}.booking_number.sc-ir-booking-listing:hover{color:#1e9ff2}.in-out.sc-ir-booking-listing{width:150px !important}.buttons-container.sc-ir-booking-listing{gap:10px}td.sc-ir-booking-listing ul.sc-ir-booking-listing{width:max-content !important}td.sc-ir-booking-listing{width:max-content !important}.date-p.sc-ir-booking-listing{width:max-content !important;min-width:100%;text-align:center !important}.booking-label-gap.sc-ir-booking-listing{gap:5px}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingListingService = new booking_listing_service.BookingListingService();
        this.roomService = new room_service.RoomService();
        this.statusColors = {
            '001': 'badge-warning',
            '002': 'badge-success',
            '003': 'badge-danger',
            '004': 'badge-danger',
        };
        this.language = '';
        this.ticket = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.rowCount = 10;
        this.isLoading = false;
        this.currentPage = 1;
        this.totalPages = 1;
        this.oldStartValue = 0;
        this.editBookingItem = null;
        this.showCost = false;
    }
    componentWillLoad() {
        booking_listing_service.updateUserSelection('end_row', this.rowCount);
        booking_listing_service.booking_listing.rowCount = this.rowCount;
        if (this.baseurl) {
            Token.axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            this.bookingListingService.setToken(this.ticket);
            this.roomService.setToken(this.ticket);
            booking_listing_service.booking_listing.token = this.ticket;
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
    async ticketChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.bookingListingService.setToken(this.ticket);
            this.roomService.setToken(this.ticket);
            booking_listing_service.booking_listing.token = this.ticket;
            this.initializeApp();
        }
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            booking_listing_service.updateUserSelection('property_id', this.propertyid);
            await Promise.all([this.bookingListingService.getExposedBookingsCriteria(this.propertyid), this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT'])]);
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
        if (e.detail && this.editBookingItem) {
            this.editBookingItem = null;
        }
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
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { is_to_export: false, start_row: startItem, end_row: endItem }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (this.isLoading || this.ticket === '') {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("div", { class: "p-1 main-container" }, index.h("ir-listing-header", { propertyId: this.propertyid, language: this.language, baseurl: this.baseurl }), index.h("section", null, index.h("div", { class: "card p-1 flex-fill m-0 mt-2" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "text-left" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 :
            _a.Lcz_Booking, "#"), index.h("th", { scope: "col" }, (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_BookedOn), index.h("th", { scope: "col" }, (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_GuestSource), index.h("th", { scope: "col", class: "text-left services-cell" }, (_d = locales_store.locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Services), index.h("th", { scope: "col", class: "in-out" }, (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Dates), index.h("th", { scope: "col" }, index.h("span", { class: "price-span" }, (_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_Amount), index.h("ir-tooltip", { customSlot: true, message: `<span style="width:100%;display:block;">${(_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_BookingBalance}</span><span>${(_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ClickToSettle}</span>` }, index.h("span", { slot: "tooltip-trigger", class: 'm-0 btn due-btn' }, (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Balance))), this.showCost && (index.h("th", { scope: "col", class: "services-cell" }, (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_Cost)), index.h("th", { scope: "col" }, (_l = locales_store.locales.entries) === null || _l === void 0 ? void 0 : _l.Lcz_Status), index.h("th", { scope: "col" }, index.h("p", { class: "sr-only" }, "actions")))), index.h("tbody", { class: "" }, booking_listing_service.booking_listing.bookings.length === 0 && (index.h("tr", null, index.h("td", { colSpan: 8 }, (_m = locales_store.locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_NoDataAvailable))), (_o = booking_listing_service.booking_listing.bookings) === null || _o === void 0 ? void 0 :
            _o.map(booking => {
                var _a, _b, _c;
                let confirmationBG = this.statusColors[booking.status.code];
                return (index.h("tr", { key: booking.booking_nbr }, index.h("td", { class: "text-left" }, index.h("button", { onClick: () => (this.editBookingItem = { booking, cause: 'edit' }), class: "booking_number" }, booking.booking_nbr)), index.h("td", null, index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.booked_on.date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: "p-0 m-0 secondary-p" }, functions._formatTime(booking.booked_on.hour.toString(), booking.booked_on.minute.toString()))), index.h("td", null, index.h("div", { class: "h-100 d-flex align-items-center " }, index.h("img", { class: "mr-2 logo", src: booking.origin.Icon, alt: booking.origin.Label }), index.h("div", { class: "text-left" }, index.h("p", { class: "p-0 m-0" }, booking.guest.first_name, " ", (_a = booking.guest.last_name) !== null && _a !== void 0 ? _a : '', " ", booking.occupancy.adult_nbr, locales_store.locales.entries.Lcz_P), index.h("div", { class: 'd-flex align-items-center booking-label-gap' }, index.h("p", { class: "p-0 m-0 secondary-p" }, booking.origin.Label), booking.is_in_loyalty_mode && !booking.promo_key && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("title", null, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("path", { fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" }))), booking.promo_key && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", height: 18, width: 18 }, index.h("title", null, locales_store.locales.entries.Lcz_Coupon + ':' + booking.promo_key), index.h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" })))), booking.agent && index.h("p", { class: "m-0 secondary-p" }, locales_store.locales.entries.Lcz_AgentCode.replace('%1', booking.agent.name))))), index.h("td", null, index.h("ul", null, booking.rooms.map(room => (index.h("li", null, room.roomtype.name))))), index.h("td", null, index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.from_date, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: "p-0 m-0 date-p" }, moment.hooks(booking.to_date, 'YYYY-MM-DD').format('DD-MMM-YYYY'))), index.h("td", null, index.h("p", { class: "p-0 m-0" }, functions.formatAmount(booking.currency.code, (_c = (_b = booking.financial) === null || _b === void 0 ? void 0 : _b.gross_total) !== null && _c !== void 0 ? _c : 0)), booking.financial.due_amount > 0 && (index.h("buuton", { onClick: () => {
                        this.editBookingItem = { booking, cause: 'payment' };
                        this.openModal();
                    }, class: "btn p-0 m-0 due-btn" }, functions.formatAmount(booking.currency.code, booking.financial.due_amount)))), this.showCost && (index.h("td", null, booking.financial.gross_cost !== null && booking.financial.gross_cost === 0 ? '_' : functions.formatAmount(booking.currency.code, booking.financial.gross_cost))), index.h("td", null, index.h("p", { class: `m-0 badge ${confirmationBG}` }, booking.status.description)), index.h("td", null, index.h("div", { class: "d-flex justify-content-center align-items-center", style: { gap: '8px' } }, index.h("ir-button", { title: "Edit booking", variant: "icon", icon_name: "edit", onClickHanlder: () => (this.editBookingItem = { booking, cause: 'edit' }) }), index.h("ir-button", { title: "Delete booking", style: { '--icon-button-color': '#ff4961', '--icon-button-hover-color': '#FF1635' }, variant: "icon", icon_name: "trash", onClickHanlder: () => {
                        this.editBookingItem = { booking, cause: 'delete' };
                        this.openModal();
                    } })))));
            }))), this.totalPages > 1 && (index.h("section", { class: 'd-flex flex-column flex-md-row align-items-center justify-content-between pagination-container' }, index.h("p", { class: "m-0 mb-1 mb-md-0" }, this.renderItemRange()), index.h("div", { class: 'd-flex align-items-center buttons-container' }, index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHanlder: async () => {
                this.currentPage = 1;
                await this.updateData();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { fill: "white", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === 1, onClickHanlder: async () => {
                this.currentPage = this.currentPage - 1;
                console.log(this.currentPage);
                await this.updateData();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "8.75", viewBox: "0 0 320 512" }, index.h("path", { fill: "white", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), index.h("ir-select", { selectedValue: this.currentPage.toString(), LabelAvailable: false, showFirstOption: false, onSelectChange: async (e) => {
                this.currentPage = +e.detail;
                await this.updateData();
            }, data: Array.from(Array(this.totalPages), (_, i) => i + 1).map(i => ({
                text: i.toString(),
                value: i.toString(),
            })) }), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHanlder: async () => {
                this.currentPage = this.currentPage + 1;
                await this.updateData();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "8.75", viewBox: "0 0 320 512" }, index.h("path", { fill: "white", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))), index.h("ir-button", { size: "sm", btn_disabled: this.currentPage === this.totalPages, onClickHanlder: async () => {
                this.currentPage = this.totalPages;
                console.log(this.currentPage);
                await this.updateData();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { fill: "white", d: "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" }))))))))), this.editBookingItem && index.h("ir-listing-modal", { onModalClosed: () => (this.editBookingItem = null) }), index.h("ir-sidebar", { onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.editBookingItem !== null && this.editBookingItem.cause === 'edit', showCloseButton: this.editBookingItem !== null, sidebarStyles: { width: this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)', background: '#F2F3F8' } }, ((_p = this.editBookingItem) === null || _p === void 0 ? void 0 : _p.cause) === 'edit' && (index.h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.booking.booking_nbr, ticket: this.ticket, baseurl: this.baseurl, language: this.language, hasRoomAdd: true })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingListing.style = IrBookingListingStyle0;

exports.ir_booking_listing = IrBookingListing;

//# sourceMappingURL=ir-booking-listing.cjs.entry.js.map