'use strict';

var index = require('./index-Dt9a74kn.js');
var booking_listing_service = require('./booking_listing.service-C-UuELM1.js');
var locales_store = require('./locales.store-CJveOVzn.js');
var booking = require('./booking-Co20zX8p.js');
var moment = require('./moment-CdViwxPQ.js');
var payment_service = require('./payment.service-CF0N3Gaj.js');
require('./index-PIkoJJtF.js');
require('./axios-dx93wJEX.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CC4kt7DA.js');

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";

const IrListingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad");
        this.inputValue = '';
        this.isLoading = null;
        this.bookingListingService = new booking_listing_service.BookingListingService();
    }
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
            booking_listing_service.booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { name: '', book_nbr: '' });
        }
        this.isLoading = is_to_export ? 'excel' : 'search';
        this.preventPageLoad.emit('/Get_Exposed_Bookings');
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export }));
        this.isLoading = null;
        if (booking_listing_service.booking_listing.download_url) {
            const url = booking_listing_service.booking_listing.download_url;
            this.downloadUrlTag.href = url;
            // this.downloadUrlTag.download = url;
            // this.downloadUrlTag.click();
            // booking_listing.download_url = null;
            booking.downloadFile(url);
        }
    }
    async handleClearUserField() {
        booking_listing_service.initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export: false }));
    }
    async handleFromDateChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const date = e.detail.start;
        if (moment.hooks(booking_listing_service.booking_listing.userSelection.from, 'YYYY-MM-DD').isSame(date, 'days')) {
            return;
        }
        let fromDate = date;
        let toDate = moment.hooks(new Date(booking_listing_service.booking_listing.userSelection.to));
        if (fromDate.isAfter(toDate)) {
            toDate = fromDate;
        }
        booking_listing_service.booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { from: fromDate.format('YYYY-MM-DD'), to: toDate.format('YYYY-MM-DD') });
        await this.toDateRef.openDatePicker();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (index.h(index.Host, { key: 'a63b488bc96c20bc74b275b9c39acff7b7443ffe' }, index.h("a", { key: 'e830049b13feb8eec7427afcb514bea0004d9bcb', ref: el => (this.downloadUrlTag = el) }, index.h("p", { key: '4f59db0cabb2572185bcf690a58fc7e01bb19132', class: "sr-only" }, "download url")), index.h("section", { key: '776e27fb89274fdd65174410846b10485dd3b0e8', class: "d-flex align-items-center " }, index.h("div", { key: '57e479b563065902fc101cf5c9741abf7a9fcf31', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, index.h("div", { key: '251fe5f90b2131c2300e966edb86448dab4677cd', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, index.h("h3", { key: 'e79ec2654deccbe40caf396b38ef9a15ddf0e2d4', class: "flex-fill" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), index.h("div", { key: '94399bacf9241e0ef1f6eaaf43fba462bebe1b07' }, index.h("igl-book-property-container", { key: '08675885c5eb44615859752ab9d700dd2880855b', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, ticket: booking_listing_service.booking_listing.token }, index.h("ir-button", { key: 'c971f41879bb9c576dcc137cd0e25c30510797e9', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), index.h("h3", { key: '08535e772b4dbdd582f213517e9c573bc06f8056', class: "d-none d-md-block" }, (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), index.h("form", { key: '15deffd78ca08c93df3421e4325c2cbb38ac49aa', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, index.h("ir-input-text", { key: '3f6b00cc67a055a0f3f2853f80529162d79ce127', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, index.h("svg", { key: 'e11eae34b02fc97f579a4405c281717b2c90645a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: 'efd1409fcb0b60146f1d92961fcea10db7192c7d', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("h5", { key: '76eb08311165522e2282d516cf5f01085782afce', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales_store.locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), index.h("div", { key: 'a197e07b650cfb1a3b9afaf3a33d5e59588e6af7', class: "d-none d-md-block" }, index.h("igl-book-property-container", { key: 'f3ae5709f2a54ab8098c43fab07f3429e2c79549', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, ticket: booking_listing_service.booking_listing.token }, index.h("ir-button", { key: '84babeac56c56c5bb4c957a5b1b0f1d97753c032', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), index.h("section", { key: 'e4361fd71f7415f7226962714ca86d4d75d953c1', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, index.h("span", { key: '7be47fdf8b3791c6057e5ef5388054b513d22596' }), index.h("h5", { key: 'fbd825cddf627ee39e95a9e4880d30e3c1a63796', class: "m-0 font-weight-bold" }, (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), index.h("span", { key: '4a7eb21e93bb89955e9fae30cc13da5948bd62df' })), index.h("section", { key: 'b32afea9c2ee1494a8d40ea7714dc06f0ddbe76f', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("ir-select", { key: '9ff1c7ace079cf2c24b888c5976fc9c425f6df7d', onSelectChange: e => booking_listing_service.updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), index.h("div", { key: '7cdaa1bb92fd634552aeccb8480abe2e20ab327d', class: 'booking-dates-container' }, index.h("span", { key: 'ce7546115554a8069400746dd7f851bf0a6966f0' }, index.h("svg", { key: 'ffa54db6dfff5de46399b4cd2e84625f3f856db0', xmlns: "http://www.w3.org/2000/svg", viewBox: '0 0 448 512', style: { height: '14px', width: '14px' } }, index.h("path", { key: 'a253b1cffdf48d6a64edcee4bd98a395b88b420c', fill: "currentColor", d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' }))), index.h("ir-date-picker", { key: '32756bb908b4537ba611b03bdcce971aaaebeee5', id: "fromDate", class: "date-picker-wrapper", date: new Date(booking_listing_service.booking_listing.userSelection.from), minDate: "2000-01-01", onDateChanged: e => this.handleFromDateChange(e) }, index.h("p", { key: 'c6975857a7db016146648d5d2eedf4ea28414ae8', slot: "trigger", class: "m-0 p-0 date-display" }, moment.hooks(new Date(booking_listing_service.booking_listing.userSelection.from)).format('MMM DD, yyyy'))), index.h("span", { key: '6449809f10ca3a2944ec0e8e315508b97d94b3f2' }, index.h("svg", { key: '36854143b713b6cdd41d1227c01f31ae93d663e9', xmlns: "http://www.w3.org/2000/svg", class: "arrow-icon", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: 'c77009f9bf7c4e02f5f9993294b657af4b9c9614', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), index.h("ir-date-picker", { key: '9d7e6d3c3803bd955d5baa10fd6abad84855812b', id: "toDate", forceDestroyOnUpdate: true, class: "date-picker-wrapper", date: new Date(booking_listing_service.booking_listing.userSelection.to), ref: el => (this.toDateRef = el), minDate: new Date(booking_listing_service.booking_listing.userSelection.from), maxDate: moment.hooks().add(1, 'years').endOf('year').toDate(), onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.start.isSame(booking_listing_service.booking_listing.userSelection.to, 'days') || e.detail.start.isBefore(booking_listing_service.booking_listing.userSelection.from, 'days')) {
                    return;
                }
                booking_listing_service.booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { to: e.detail.start.format('YYYY-MM-DD') });
            } }, index.h("p", { key: '131627422342f57e2edfff8575e46c80fb3d3ea2', slot: "trigger", class: "m-0 p-0 date-display" }, moment.hooks(new Date(booking_listing_service.booking_listing.userSelection.to)).format('MMM DD, YYYY')))), index.h("ir-select", { key: 'fc20e78419603563386746db75369f4c2ef39e15', class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.booking_status, onSelectChange: e => booking_listing_service.updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), index.h("ir-select", { key: '579817adee4e380cbdfef4b6fbcc2d29bc77dee1', class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.channel, onSelectChange: e => booking_listing_service.updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), index.h("div", { key: '051bf649c2e508e2b2ca521d09591a1076cc5174', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, index.h("ir-button", { key: 'fd63304611efe29aaa59ad6b34b53a474288b6e4', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), index.h("ir-button", { key: 'eb8f7d35dc3760a85d0e51b01d3e6023521a73ea', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), index.h("ir-button", { key: 'e3df6dd17f9d0116c2748d5d2a655f4926485d87', title: (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
    }
};
IrListingHeader.style = irListingHeaderCss;

const irListingModalCss = ".backdropModal.sc-ir-listing-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-listing-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-listing-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-listing-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-listing-modal{z-index:1001 !important}.modal-dialog.sc-ir-listing-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-listing-modal{gap:10px}.exit-icon.sc-ir-listing-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-listing-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-listing-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";

const IrListingModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed");
        this.resetData = index.createEvent(this, "resetData");
        this.modalTitle = 'Modal Title';
        this.isOpen = false;
        this.deletionStage = 1;
        this.loadingBtn = null;
        this.bookingListingsService = new booking_listing_service.BookingListingService();
        this.paymentService = new payment_service.PaymentService();
    }
    componentWillLoad() {
        this.selectedDesignation = booking_listing_service.booking_listing.settlement_methods[0].name;
    }
    async closeModal() {
        this.isOpen = false;
        this.deletionStage = 1;
        this.selectedDesignation = booking_listing_service.booking_listing.settlement_methods[0].name;
        this.modalClosed.emit(null);
    }
    async openModal() {
        this.isOpen = true;
    }
    filterBookings() {
        booking_listing_service.booking_listing.bookings = booking_listing_service.booking_listing.bookings.filter(booking => booking.booking_nbr !== this.editBooking.booking.booking_nbr);
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                if (this.editBooking.cause === 'payment') {
                    await this.paymentService.AddPayment({
                        amount: this.editBooking.booking.financial.due_amount,
                        currency: this.editBooking.booking.currency,
                        date: moment.hooks().format('YYYY-MM-DD'),
                        designation: this.selectedDesignation,
                        id: -1,
                        reference: '',
                    }, this.editBooking.booking.booking_nbr);
                    this.resetData.emit(this.editBooking.booking.booking_nbr);
                    this.closeModal();
                }
                else {
                    if (this.deletionStage === 2) {
                        this.loadingBtn = 'recover_and_delete';
                        await this.bookingListingsService.removeExposedBooking(this.editBooking.booking.booking_nbr, true);
                        this.filterBookings();
                    }
                    if (this.deletionStage === 1) {
                        this.deletionStage = 2;
                    }
                }
            }
            if (name === 'cancel') {
                if (this.deletionStage === 2) {
                    this.loadingBtn = 'just_delete';
                    await this.bookingListingsService.removeExposedBooking(this.editBooking.booking.booking_nbr, false);
                    this.filterBookings();
                }
                else {
                    this.closeModal();
                }
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (this.loadingBtn) {
                this.loadingBtn = null;
                this.closeModal();
            }
        }
    }
    renderTitle() {
        var _a, _b;
        if (this.editBooking.cause === 'payment') {
            return (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_MarkBookingAsPaid.replace('%1', this.editBooking.booking.booking_nbr);
        }
        else {
            if (this.deletionStage === 1) {
                return locales_store.locales.entries.Lcz_SureYouWantToDeleteBookingNbr + ((_b = this.editBooking) === null || _b === void 0 ? void 0 : _b.booking.booking_nbr);
            }
            return locales_store.locales.entries.Lcz_WantToRecoverAllotment;
        }
    }
    renderConfirmationTitle() {
        if (this.deletionStage === 2) {
            return locales_store.locales.entries.Lcz_RecoverAndDelete;
        }
        return locales_store.locales.entries.Lcz_Confirm;
    }
    renderCancelationTitle() {
        if (this.deletionStage === 2) {
            return locales_store.locales.entries.Lcz_JustDelete;
        }
        return locales_store.locales.entries.Lcz_Cancel;
    }
    render() {
        if (!this.editBooking) {
            return null;
        }
        return [
            index.h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    if (this.editBooking.cause === 'delete') {
                        return;
                    }
                    this.closeModal();
                } }),
            index.h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, this.isOpen && (index.h("div", { class: `ir-alert-content p-2` }, index.h("div", { class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }, index.h("p", { class: "p-0 my-0 mb-1" }, this.renderTitle()), index.h("ir-icon", { class: "exit-icon", style: { cursor: 'pointer' }, onClick: () => {
                    this.closeModal();
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("div", { class: "modal-body text-left p-0 mb-2" }, this.editBooking.cause === 'payment' ? (index.h("ir-select", { selectedValue: this.selectedDesignation, onSelectChange: e => (this.selectedDesignation = e.detail), showFirstOption: false, LabelAvailable: false, data: booking_listing_service.booking_listing.settlement_methods.map(m => ({
                    value: m.name,
                    text: m.name,
                })) })) : null), index.h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, index.h("ir-button", { isLoading: this.loadingBtn === 'just_delete', icon: '', btn_color: 'secondary', btn_block: true, text: this.renderCancelationTitle(), name: 'cancel' }), index.h("ir-button", { isLoading: this.loadingBtn === 'recover_and_delete', icon: '', btn_color: 'primary', btn_block: true, text: this.renderConfirmationTitle(), name: 'confirm' }))))),
        ];
    }
};
IrListingModal.style = irListingModalCss;

exports.ir_listing_header = IrListingHeader;
exports.ir_listing_modal = IrListingModal;
//# sourceMappingURL=ir-listing-header.ir-listing-modal.entry.cjs.js.map

//# sourceMappingURL=ir-listing-header_2.cjs.entry.js.map