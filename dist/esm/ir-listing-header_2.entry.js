import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service-0895a673.js';
import { l as locales } from './locales.store-53ec3957.js';
import { d as downloadFile } from './utils-bf32d8ec.js';
import { h as hooks } from './moment-ab846cee.js';
import { P as PaymentService } from './payment.service-56b6590d.js';
import './index-c1c77241.js';
import './axios-aa1335b8.js';
import './index-6ecc32cd.js';
import './calendar-data-a6093df2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
        this.inputValue = '';
        this.isLoading = null;
        this.bookingListingService = new BookingListingService();
    }
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
            booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { name: '', book_nbr: '' });
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
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export }));
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
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export: false }));
    }
    // private async handleFromDateChange(e: CustomEvent) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   const date = e.detail.start;
    //   if (moment(booking_listing.userSelection.from, 'YYYY-MM-DD').isSame(date, 'days')) {
    //     return;
    //   }
    //   let fromDate = date;
    //   let toDate = moment(new Date(booking_listing.userSelection.to));
    //   if (fromDate.isAfter(toDate)) {
    //     toDate = fromDate;
    //   }
    //   booking_listing.userSelection = { ...booking_listing.userSelection, from: fromDate.format('YYYY-MM-DD'), to: toDate.format('YYYY-MM-DD') };
    //   await this.toDateRef.openDatePicker();
    // }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        console.log(booking_listing.balance_filter);
        return (h(Host, { key: '577d74d2f634fd2d99556ed2b194f44d8a79f711' }, h("section", { key: 'd9c4dd13dd8807602d3e38aab31083f7fea2f39f', class: "d-flex align-items-center " }, h("div", { key: 'f3eea5d9dd63d0460acd1ecf17d2ff54abe174cc', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '29a3603101ccc4028f6f8c10a1a1a6e667780a84', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '487d5774b4922d2bd5fbe10e26dc229360cccb4b', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: '0429f67f0d7d7c6be0ae4e3bf4659a0d2fdf587d' }, h("igl-book-property-container", { key: 'a285c00c1a3315c23c98cdbbcdf2418343a13c7d', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'e7778043fd9759fd68f365c168abd80db23e4314', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: '928e6f714ac281632d269f395e5b36059d4b9fe0', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '816d8ad352bb2bf7573f8df39769ae230b2c030a', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '8ce1dd562ec61e35bd05567f7eae501161a5b378', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: '5a9a4c8763b383aa40d8e0c390d05d70ea828136', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '99ff6eb546bc25ab63aae88d1c6b2beea5e526e6', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'c11f35a703438b485b1c5e0c02942cba5a04ce12', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '95a0b3b67e075fed21e5bf8239216c5655617f24', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'a42ad1335c31bd8bc18d0d7994e5a7c8e1321c1e', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'aff3464732f1d64246757f9bcef3eab42d80e22b', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: 'd691a58c340e9daf9e5bd06e7fbb09ef253e5c75', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '5a1f14d124069f4ec2c1808a556f581386a91ca1' }), h("h5", { key: 'e1dba528a9eb0c5fbc6cba554f462992e85791a8', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: 'be5285e3e9617799cdb78d910ab43ede0aac1bcd' })), h("section", { key: 'ebb966ded4fd03023ed7234849160120be8de335', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: 'da1be60599874c43ea70751d7be28755313020fc', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("ir-range-picker", { key: '5d49ff128beb36d2c8bf92f23092d6865b129c81', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: to_date, from: fromDate.format('YYYY-MM-DD') });
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("ir-select", { key: 'f01a80f8678a1d0ff599acc730728a3891864870', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'b0b294eeb9b7bb254202c35056510fb9be51728f', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("ir-select", { key: '8b9147f685150e7aeab5532a125b93309d8bf706', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.balance_filter, onSelectChange: e => updateUserSelection('balance_filter', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.balance_filter.map(b => ({
                value: b.value,
                text: b.name,
            })), showFirstOption: false, select_id: "balance_filter" }), h("div", { key: 'c3f1287438b8a1e056e144b4963f1a2e216324ae', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: 'a54027f0e86f294ef7048701bfd1974c04e589e3', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: '58bf61e519495b78ace2123f4986cb6b73348272', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: 'a92a5d74a7176a7ea04c29603aa895d701b08322', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
    }
};
IrListingHeader.style = IrListingHeaderStyle0;

const irListingModalCss = ".backdropModal.sc-ir-listing-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-listing-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-listing-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-listing-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-listing-modal{z-index:1001 !important}.modal-dialog.sc-ir-listing-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-listing-modal{gap:10px}.exit-icon.sc-ir-listing-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-listing-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-listing-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrListingModalStyle0 = irListingModalCss;

const IrListingModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modalClosed = createEvent(this, "modalClosed", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.modalTitle = 'Modal Title';
        this.isOpen = false;
        this.deletionStage = 2;
        this.loadingBtn = null;
        this.bookingListingsService = new BookingListingService();
        this.paymentService = new PaymentService();
    }
    componentWillLoad() {
        this.selectedDesignation = booking_listing.settlement_methods[0].name;
    }
    async closeModal() {
        this.isOpen = false;
        // this.deletionStage = 1;
        this.selectedDesignation = booking_listing.settlement_methods[0].name;
        this.modalClosed.emit(null);
    }
    async openModal() {
        this.isOpen = true;
    }
    filterBookings() {
        booking_listing.bookings = booking_listing.bookings.filter(booking => booking.booking_nbr !== this.editBooking.booking.booking_nbr);
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                this.loadingBtn = 'confirm';
                if (this.editBooking.cause === 'payment') {
                    await this.paymentService.AddPayment({
                        amount: this.editBooking.booking.financial.due_amount,
                        currency: this.editBooking.booking.currency,
                        date: hooks().format('YYYY-MM-DD'),
                        designation: this.selectedDesignation,
                        id: -1,
                        reference: '',
                    }, this.editBooking.booking.booking_nbr);
                    this.resetData.emit(this.editBooking.booking.booking_nbr);
                    // this.closeModal();
                }
                else {
                    if (this.deletionStage === 2) {
                        // this.loadingBtn = 'recover_and_delete';
                        await this.bookingListingsService.removeExposedBooking(this.editBooking.booking.booking_nbr, true);
                        this.filterBookings();
                    }
                    // if (this.deletionStage === 1) {
                    //   this.deletionStage = 2;
                    // }
                }
            }
            if (name === 'cancel') {
                // if (this.deletionStage === 2) {
                //   this.loadingBtn = 'just_delete';
                //   await this.bookingListingsService.removeExposedBooking(this.editBooking.booking.booking_nbr, false);
                //   this.filterBookings();
                // } else {
                //   this.closeModal();
                // }
                this.closeModal();
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
            return (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_MarkBookingAsPaid.replace('%1', this.editBooking.booking.booking_nbr);
        }
        else {
            // if (this.deletionStage === 1) {
            //   return locales.entries.Lcz_SureYouWantToDeleteBookingNbr + this.editBooking?.booking.booking_nbr;
            // }
            // return locales.entries.Lcz_WantToRecoverAllotment;
            return locales.entries.Lcz_SureYouWantToDeleteBookingNbr + ((_b = this.editBooking) === null || _b === void 0 ? void 0 : _b.booking.booking_nbr);
        }
    }
    renderConfirmationTitle() {
        // if (this.deletionStage === 2) {
        //   return locales.entries.Lcz_RecoverAndDelete;
        // }
        return locales.entries.Lcz_Confirm;
    }
    renderCancellationTitle() {
        // if (this.deletionStage === 2) {
        //   return locales.entries.Lcz_JustDelete;
        // }
        return locales.entries.Lcz_Cancel;
    }
    render() {
        if (!this.editBooking) {
            return null;
        }
        return [
            h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    if (this.editBooking.cause === 'delete') {
                        return;
                    }
                    this.closeModal();
                } }),
            h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, this.isOpen && (h("div", { class: `ir-alert-content p-2` }, h("div", { class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }, h("p", { class: "p-0 my-0 mb-1" }, this.renderTitle()), h("ir-icon", { class: "exit-icon", style: { cursor: 'pointer' }, onClick: () => {
                    this.closeModal();
                } }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("div", { class: "modal-body text-left p-0 mb-2" }, this.editBooking.cause === 'payment' ? (h("ir-select", { selectedValue: this.selectedDesignation, onSelectChange: e => (this.selectedDesignation = e.detail), showFirstOption: false, LabelAvailable: false, data: booking_listing.settlement_methods.map(m => ({
                    value: m.name,
                    text: m.name,
                })) })) : null), h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, h("ir-button", { isLoading: this.loadingBtn === 'just_delete', btn_color: 'secondary', btn_block: true, text: this.renderCancellationTitle(), name: 'cancel' }), h("ir-button", { isLoading: this.loadingBtn === 'confirm',
                // isLoading={this.loadingBtn === 'recover_and_delete'}
                btn_color: 'primary', btn_block: true, text: this.renderConfirmationTitle(), name: 'confirm' }))))),
        ];
    }
};
IrListingModal.style = IrListingModalStyle0;

export { IrListingHeader as ir_listing_header, IrListingModal as ir_listing_modal };

//# sourceMappingURL=ir-listing-header_2.entry.js.map