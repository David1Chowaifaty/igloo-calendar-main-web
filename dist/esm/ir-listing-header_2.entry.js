import { r as registerInstance, c as createEvent, h, H as Host } from './index-ChgcZQN7.js';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service-CAqUG7S6.js';
import { l as locales } from './locales.store-km9kP7G7.js';
import { n as downloadFile, h as hooks } from './utils-7qMAgUpz.js';
import { P as PaymentService } from './payment.service-BUidCtI9.js';
import './index-CnjbwCqY.js';
import './axios-Bpmk_xoW.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-DeW5X45W.js';
import './calendar-data-iTCxBVE4.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";

const IrListingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preventPageLoad = createEvent(this, "preventPageLoad");
        this.inputValue = '';
        this.isLoading = null;
        this.bookingListingService = new BookingListingService();
    }
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
    async handleFromDateChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const date = e.detail.start;
        if (hooks(booking_listing.userSelection.from, 'YYYY-MM-DD').isSame(date, 'days')) {
            return;
        }
        let fromDate = date;
        let toDate = hooks(new Date(booking_listing.userSelection.to));
        if (fromDate.isAfter(toDate)) {
            toDate = fromDate;
        }
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { from: fromDate.format('YYYY-MM-DD'), to: toDate.format('YYYY-MM-DD') });
        await this.toDateRef.openDatePicker();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: '38214d22c7ebf0b22dc6f83c4246caf270809b38' }, h("section", { key: '3a2d1cba2ed04c3448b04634c05810261e691aa8', class: "d-flex align-items-center " }, h("div", { key: 'eb53b7413624c12db7c33d870a1c55e998c06e0c', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '054be28be6b47aa294c23b8e15a42e8016aaf8df', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '3beac840df6eaf386e2aca256429e389d17b4d12', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: '9455d614e6e671d07a2af2a7e127818ea45b9bc9' }, h("igl-book-property-container", { key: 'a76c8f1f18194cb84406a966af51024fe0f58412', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'cdb3cf3a1eb53c69ef7d2a153c1f39ce19b8cd49', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: '57a58f5da5267e7d2ed6c937706c42a5cc4687d6', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '6d4c0b3d156533f248c9ed7c560888e8bdb958ae', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '0dbbec858ca955cec15018fb6024dc3a4294ad5f', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: 'e0c94b3fc9578e198366b44b157da0a75b2596ec', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'cc71577bfaace744c630ec885c8a67fdf03a6954', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '5cb9e7b5ce211211ae3a711fb45a55f4494cc170', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '718c28d87698dc08bda9e76c12d4197338c93114', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'd690d1b277a21503c03102da1e458a1a2d18d2d8', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '4b22f1bd56b1ee08e3b9913221f218538a1aa9ba', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: '70c37c898b066eb20aad2158befb3b336617eb12', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'c948ac02fd7bfad8061ceec0013e233d8adc0444' }), h("h5", { key: '33686ff53d82502a1771a0682361a2274257b1fc', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '71ddcc2e80e78215938ca11c38b3a1e95e75c5d0' })), h("section", { key: 'a3d023b60a165924b1e3ec2d8fa178f517fa66b8', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: '3e6dd5f6b22a6e526370b76b75a1fdf85789cbfa', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("div", { key: '953db2fa2f3cf06ce0b6bc2bc03770ecc74a2d40', class: 'booking-dates-container' }, h("span", { key: '93e6ae160f4e6d71cb93ea1780163fc5f8ea73a2' }, h("svg", { key: 'f847d3c23d0826d38ba2890d5b2b53b76e852aa7', xmlns: "http://www.w3.org/2000/svg", viewBox: '0 0 448 512', style: { height: '14px', width: '14px' } }, h("path", { key: 'bd6b7f2468ce924421fb8c70957738033c12a2a0', fill: "currentColor", d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' }))), h("ir-date-picker", { key: 'a80accdf46ede53e350e9a1d8840a636a50ffbde', id: "fromDate", class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.from), minDate: "2000-01-01", onDateChanged: e => this.handleFromDateChange(e) }, h("p", { key: 'd5aae29ee93d1bc0873148418be7ae0b88f958d7', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.from)).format('MMM DD, yyyy'))), h("span", { key: 'f48a9991fe4d2ceab4d2ea66c3637cd48947a683' }, h("svg", { key: 'c1c0bc8a4a33eb9cd57bd25be704696a7ab6f099', xmlns: "http://www.w3.org/2000/svg", class: "arrow-icon", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'e33d1046ec8c33237eef6a351b8d8d2856707f7e', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("ir-date-picker", { key: '5bb789078745c3fb7742dbaddc0cdf662475aed9', id: "toDate", forceDestroyOnUpdate: true, class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.to), ref: el => (this.toDateRef = el), minDate: new Date(booking_listing.userSelection.from), maxDate: hooks().add(1, 'years').endOf('year').toDate(), onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.start.isSame(booking_listing.userSelection.to, 'days') || e.detail.start.isBefore(booking_listing.userSelection.from, 'days')) {
                    return;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: e.detail.start.format('YYYY-MM-DD') });
            } }, h("p", { key: '651f8d7042530503f8579b908cd37d43c4368878', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.to)).format('MMM DD, YYYY')))), h("ir-select", { key: '82fa4a4fac9012ea9068c597b70d3b9888085a50', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'e96d96d779ce2e23a266b979be9e6f55d3dea1f4', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '7424a09ec96ac23007a7ef44ee75598e541a7924', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: '4607053aad535e214b6569c42493a605cf1059bc', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: 'd2a0efd8032dd5b63b12895a14ad02926aaa1e8c', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: 'b8fab08851b2b94d3f86b536e45a2239ea10b063', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
    }
};
IrListingHeader.style = irListingHeaderCss;

const irListingModalCss = ".backdropModal.sc-ir-listing-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-listing-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-listing-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-listing-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-listing-modal{z-index:1001 !important}.modal-dialog.sc-ir-listing-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-listing-modal{gap:10px}.exit-icon.sc-ir-listing-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-listing-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-listing-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";

const IrListingModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modalClosed = createEvent(this, "modalClosed");
        this.resetData = createEvent(this, "resetData");
        this.modalTitle = 'Modal Title';
        this.isOpen = false;
        this.deletionStage = 1;
        this.loadingBtn = null;
        this.bookingListingsService = new BookingListingService();
        this.paymentService = new PaymentService();
    }
    componentWillLoad() {
        this.selectedDesignation = booking_listing.settlement_methods[0].name;
    }
    async closeModal() {
        this.isOpen = false;
        this.deletionStage = 1;
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
            return (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_MarkBookingAsPaid.replace('%1', this.editBooking.booking.booking_nbr);
        }
        else {
            if (this.deletionStage === 1) {
                return locales.entries.Lcz_SureYouWantToDeleteBookingNbr + ((_b = this.editBooking) === null || _b === void 0 ? void 0 : _b.booking.booking_nbr);
            }
            return locales.entries.Lcz_WantToRecoverAllotment;
        }
    }
    renderConfirmationTitle() {
        if (this.deletionStage === 2) {
            return locales.entries.Lcz_RecoverAndDelete;
        }
        return locales.entries.Lcz_Confirm;
    }
    renderCancelationTitle() {
        if (this.deletionStage === 2) {
            return locales.entries.Lcz_JustDelete;
        }
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
                })) })) : null), h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, h("ir-button", { isLoading: this.loadingBtn === 'just_delete', icon: '', btn_color: 'secondary', btn_block: true, text: this.renderCancelationTitle(), name: 'cancel' }), h("ir-button", { isLoading: this.loadingBtn === 'recover_and_delete', icon: '', btn_color: 'primary', btn_block: true, text: this.renderConfirmationTitle(), name: 'confirm' }))))),
        ];
    }
};
IrListingModal.style = irListingModalCss;

export { IrListingHeader as ir_listing_header, IrListingModal as ir_listing_modal };
//# sourceMappingURL=ir-listing-header.ir-listing-modal.entry.js.map

//# sourceMappingURL=ir-listing-header_2.entry.js.map