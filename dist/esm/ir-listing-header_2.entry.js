import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service-034395f3.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { h as hooks } from './moment-ab846cee.js';
import { P as PaymentService } from './payment.service-26305b1a.js';
import './index-1d7b1ff2.js';
import './utils-dd6c418e.js';
import './axios-ab377903.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
        this.bookingListingService = new BookingListingService();
        this.propertyId = undefined;
        this.language = undefined;
        this.p = undefined;
        this.inputValue = '';
        this.isLoading = null;
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
            const url = booking_listing.download_url;
            this.downloadUrlTag.href = url;
            this.downloadUrlTag.download = url;
            this.downloadUrlTag.click();
            booking_listing.download_url = null;
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
        return (h(Host, { key: 'd23d06e4116941db431c934cdc293f991fd66baf' }, h("a", { key: 'a21783d55f1df1048917d5532d0d2ca1bbd44c7d', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '27b4b69046e530dee640ba804e04771c12921ec0', class: "sr-only" }, "download url")), h("section", { key: '69309020b011df51ed4d869bcfb3ae7dd0a05ca6', class: "d-flex align-items-center " }, h("div", { key: 'a53c5ae8afed76e906a406675a846297038c9cd0', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'c14abceed2b450a5ea4afe7a90169381561e0ce6', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '7dc62ead1e3d5f81b97294c20ce03160a0bdb224', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'a30dda66ee2672eaf6024c909c8630f7ea631da6' }, h("igl-book-property-container", { key: '1a538a61b39ab94cdce8ba9f3e3d6da0304faab8', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '6f126b2068091cfd8e8183358e2a8844ba984a25', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: '0c689c2cf194becc2c792af05fed73a5f59aea4a', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: 'f3efddb94f71c9c81b039490cb50defe704a0146', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '577e0e721d84dac2ac8734f61e07492826715f55', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: '628c7522036d0720010a092ce4bfb413b115ae4a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '45920ef4f65a126e1ca9f8282f87791987e2a77e', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '1b582fdb695c9bbe86f89ba9ce302099aa20c284', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: 'eb254af9903eff80cc9975f537e45031a2cf01e5', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'c3363eb6990ddf8ce844c14a93d6aafca2499a13', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'f9bc6286d6eacd1a987d1b45af5fd33a104644d3', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: 'b1d77e86afd62a5a17d3c68a86acb24c528b6767', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'f8f2e60cd2a426302b14a1ec581afdbc15551f67' }), h("h5", { key: 'c5fcccc3d266f748c0ea410b967f7dffd5be07f4', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: 'd5adcb78242b0aa8d935b9cade14a15400fd49ef' })), h("section", { key: 'f25a86387d1c19bb57fa8838d431426773d191e4', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: '9691d3bcf12a3cc19231cc4903b814c216434fc8', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("div", { key: 'eb8744a7f6435347279b8efc1b1704219885b2fc', class: 'booking-dates-container' }, h("span", { key: 'fcd504de3f809150c7763700d3383b027338fbb7' }, h("svg", { key: '71297d664848418eef437fb1f652954de8308dbe', xmlns: "http://www.w3.org/2000/svg", viewBox: '0 0 448 512', style: { height: '14px', width: '14px' } }, h("path", { key: '0544c84e60715ef07aec970fae2053123e7cb180', fill: "currentColor", d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' }))), h("ir-date-picker", { key: 'f60bf68a0aba16d81638dcab0851eeeb9b40babe', id: "fromDate", class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.from), minDate: "2000-01-01", onDateChanged: e => this.handleFromDateChange(e) }, h("p", { key: '1a13b673a080817082c86bea3537df33191c2205', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.from)).format('MMM DD, yyyy'))), h("span", { key: '14da43d4da5bd50e0ff8811ed70465b0387e5316' }, h("svg", { key: 'd45be337bce9d6c2a3f1a2539b973c6518c9912e', xmlns: "http://www.w3.org/2000/svg", class: "arrow-icon", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '77d528a0428a2b3dec67d57a1fe6f246d363da08', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("ir-date-picker", { key: '8249b19445ca57914a5b0d6e199045148cfb692b', id: "toDate", forceDestroyOnUpdate: true, class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.to), ref: el => (this.toDateRef = el), minDate: new Date(booking_listing.userSelection.from), maxDate: hooks().add(1, 'years').endOf('year').toDate(), onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.start.isSame(booking_listing.userSelection.to, 'days') || e.detail.start.isBefore(booking_listing.userSelection.from, 'days')) {
                    return;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: e.detail.start.format('YYYY-MM-DD') });
            } }, h("p", { key: 'efadc5845647af2a8800ee66896476cd9bafd2df', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.to)).format('MMM DD, YYYY')))), h("ir-select", { key: '29d7fc64f5a01f3672bc0ad3cfab3c10fc753c1f', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'ce04d375ca0a89856d789f8947ed14e5a326df19', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '29fdd54950955792fdecf7b91d6a32f98c9366ca', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: '36c59a2f3b5daf492ef8a984f433f945ebb63d4b', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: 'd9dacc03e002d2e759d092f99c626468c3d3b5f2', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: 'dada34f2ae38d30492190186974fa2b020cc8413', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
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
        this.bookingListingsService = new BookingListingService();
        this.paymentService = new PaymentService();
        this.modalTitle = 'Modal Title';
        this.editBooking = undefined;
        this.isOpen = false;
        this.deletionStage = 1;
        this.selectedDesignation = undefined;
        this.loadingBtn = null;
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
IrListingModal.style = IrListingModalStyle0;

export { IrListingHeader as ir_listing_header, IrListingModal as ir_listing_modal };

//# sourceMappingURL=ir-listing-header_2.entry.js.map