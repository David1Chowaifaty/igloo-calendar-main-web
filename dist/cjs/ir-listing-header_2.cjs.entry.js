'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const booking_listing_service = require('./booking_listing.service-873daec5.js');
const locales_store = require('./locales.store-4301bbe8.js');
const payment_service = require('./payment.service-51fe37fa.js');
const moment = require('./moment-1780b03a.js');
require('./Token-db8ba99b.js');
require('./index-5e99a1fe.js');
require('./utils-5cd972af.js');
require('./axios-b86c5465.js');

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad", 7);
        this.bookingListingService = new booking_listing_service.BookingListingService();
        this.propertyId = undefined;
        this.language = undefined;
        this.baseurl = undefined;
        this.inputValue = '';
        this.isLoading = null;
    }
    componentWillLoad() {
        this.bookingListingService.setToken(booking_listing_service.booking_listing.token);
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        booking_listing_service.booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { from: start.format('YYYY-MM-DD'), to: end.format('YYYY-MM-DD') });
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
            this.downloadUrlTag.download = url;
            this.downloadUrlTag.click();
            booking_listing_service.booking_listing.download_url = null;
        }
    }
    async handleClearUserField() {
        booking_listing_service.initializeUserSelection();
        if (this.inputValue) {
            this.inputValue = '';
        }
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing_service.booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export: false }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (index.h(index.Host, { key: 'e6588b76680e24ee1205162b29364d91b4e55a27' }, index.h("a", { key: 'c3c2c56eea7f8c0ab2c968ddd54651125cf913aa', ref: el => (this.downloadUrlTag = el) }, index.h("p", { key: '4299f9374cb3ccfff4c16f8d317ccdd20c98528d', class: "sr-only" }, "download url")), index.h("section", { key: 'b0058a2393ea58330e60502953925ad265823dd2', class: "d-flex align-items-center " }, index.h("div", { key: 'f191e45ec6dbd76259655303eabf17322cd88c58', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, index.h("div", { key: 'fa01c796c7b8d1181aa2265d10be99fd75d722e9', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, index.h("h3", { key: 'f7e783d01a4d0a12cad89eaf351f403c192776a7', class: "flex-fill" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), index.h("div", { key: 'da64c9514d5bf51089eaed9ee30f061e14ea59a1' }, booking_listing_service.booking_listing.token && (index.h("igl-book-property-container", { key: '0ba1b2b919f12a072d6ca31958a7a3e5aefe7fc7', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing_service.booking_listing.token }, index.h("ir-button", { key: 'd337499d57241adbcad234143efd4fe07544550e', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), index.h("h3", { key: '661c16ff6fbcb8bd299f07c30b52901a2d615784', class: "d-none d-md-block" }, (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), index.h("form", { key: '748a6ba7942a5adb50787b1f271a88ab7fda367f', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, index.h("ir-input-text", { key: 'c694524c3f021151349f297ed458ad08fc260b66', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, index.h("svg", { key: '0ff27a6d60d75a775591168a25ff259dafdbe29a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: 'c852aa1212fad26eab17ea845f4770f3e5c84432', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("h5", { key: '98ed66c0cba24dfe78a7e91a1fd462604b2c0a81', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales_store.locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), index.h("div", { key: '1f02e099805fc5172c94beae485bd93bdee6d4cd', class: "d-none d-md-block" }, booking_listing_service.booking_listing.token && (index.h("igl-book-property-container", { key: 'e7615302ac4a97a23338c0bc8ce5b50a2e3ab258', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales_store.locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing_service.booking_listing.token }, index.h("ir-button", { key: 'ef9455f2af66c49f2c49cf35ea3b230e7cb617b7', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" }))))), index.h("section", { key: 'd61dc9041c5bbb9b7e381cb659d058fc370fc695', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, index.h("span", { key: '1b282878f955715f42ac66e9f1e6b3898afce688' }), index.h("h5", { key: '1a9d59ddc905e824a5fbd92f137ec76e78c439cf', class: "m-0 font-weight-bold" }, (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), index.h("span", { key: '98951a07f98f051290404e310c6a9443ca7f0fa4' })), index.h("section", { key: '39ccf434288732c7bb2baecc2d0d86f8245cecf3', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, index.h("ir-select", { key: '09c044846bf09db11579909ac1e15b1fa2f5dd0e', onSelectChange: e => booking_listing_service.updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), index.h("igl-date-range", { key: '08b1f12014e7dd9f6ac23a679aa0916d1098ec7a', class: "flex-sm-wrap", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing_service.booking_listing.userSelection.from,
                toDate: booking_listing_service.booking_listing.userSelection.to,
            } }), index.h("ir-select", { key: '4feec6224dd6f06eda88f6311bff378dc8d1add7', class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.booking_status, onSelectChange: e => booking_listing_service.updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), index.h("ir-select", { key: 'b313465ca71e619e4d6b0333c5fbcc8e9644323c', class: "flex-sm-wrap", selectedValue: booking_listing_service.booking_listing.userSelection.channel, onSelectChange: e => booking_listing_service.updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing_service.booking_listing === null || booking_listing_service.booking_listing === void 0 ? void 0 : booking_listing_service.booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), index.h("div", { key: '38210cb8dc5bb3579d5e215a67788e9ce1736070', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, index.h("ir-button", { key: '3b2bd0371e91397d6b22505fffd9c277a1606a3d', title: (_h = locales_store.locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHanlder: () => this.handleSearchClicked(false) }), index.h("ir-button", { key: '9a0b3378e14111d7df3d06e8f1fdc707f04e97a2', title: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHanlder: () => this.handleClearUserField() }), index.h("ir-button", { key: 'a0dcc4ddc3fe2b8140bc8fceb1f0702d8d7d8915', title: (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHanlder: () => this.handleSearchClicked(true) })))));
    }
};
IrListingHeader.style = IrListingHeaderStyle0;

const irListingModalCss = ".backdropModal.sc-ir-listing-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-listing-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-listing-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-listing-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-listing-modal{z-index:1001 !important}.modal-dialog.sc-ir-listing-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-listing-modal{gap:10px}.exit-icon.sc-ir-listing-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-listing-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-listing-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrListingModalStyle0 = irListingModalCss;

const IrListingModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.bookingListingsService = new booking_listing_service.BookingListingService();
        this.paymentService = new payment_service.PaymentService();
        this.modalTitle = 'Modal Title';
        this.editBooking = undefined;
        this.isOpen = false;
        this.deletionStage = 1;
        this.selectedDesignation = undefined;
        this.loadingBtn = null;
    }
    componentWillLoad() {
        this.bookingListingsService.setToken(booking_listing_service.booking_listing.token);
        this.paymentService.setToken(booking_listing_service.booking_listing.token);
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
IrListingModal.style = IrListingModalStyle0;

exports.ir_listing_header = IrListingHeader;
exports.ir_listing_modal = IrListingModal;

//# sourceMappingURL=ir-listing-header_2.cjs.entry.js.map