import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { J as downloadFile } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$w } from './igl-application-info2.js';
import { d as defineCustomElement$v } from './igl-block-dates-view2.js';
import { d as defineCustomElement$u } from './igl-book-property2.js';
import { d as defineCustomElement$t } from './igl-book-property-container2.js';
import { d as defineCustomElement$s } from './igl-book-property-footer2.js';
import { d as defineCustomElement$r } from './igl-book-property-header2.js';
import { d as defineCustomElement$q } from './igl-booking-form2.js';
import { d as defineCustomElement$p } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$o } from './igl-date-range2.js';
import { d as defineCustomElement$n } from './igl-property-booked-by2.js';
import { d as defineCustomElement$m } from './igl-rate-plan2.js';
import { d as defineCustomElement$l } from './igl-room-type2.js';
import { d as defineCustomElement$k } from './ir-autocomplete2.js';
import { d as defineCustomElement$j } from './ir-button2.js';
import { d as defineCustomElement$i } from './ir-combobox2.js';
import { d as defineCustomElement$h } from './ir-country-picker2.js';
import { d as defineCustomElement$g } from './ir-date-picker2.js';
import { d as defineCustomElement$f } from './ir-date-range2.js';
import { d as defineCustomElement$e } from './ir-date-view2.js';
import { d as defineCustomElement$d } from './ir-icon2.js';
import { d as defineCustomElement$c } from './ir-icons2.js';
import { d as defineCustomElement$b } from './ir-input-text2.js';
import { d as defineCustomElement$a } from './ir-interceptor2.js';
import { d as defineCustomElement$9 } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-otp-modal2.js';
import { d as defineCustomElement$7 } from './ir-phone-input2.js';
import { d as defineCustomElement$6 } from './ir-price-input2.js';
import { d as defineCustomElement$5 } from './ir-range-picker2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = /*@__PURE__*/ proxyCustomElement(class IrListingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '0107edb7b4a968fb877a3f8e64e7110ee1bec9c2' }, h("section", { key: 'e8294a796023757706841135552ba47dcbaae6ea', class: "d-flex align-items-center " }, h("div", { key: '66e05ddf75e0c33896c9b08129f7790483c2d97a', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '10ad1d232693ae448e74d437e07d9b4dcb1f12fa', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'd7d970bcace1f68edb61bd79342d80ee2d5d6f77', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: '5e2e4142b47aff944abb0a6776ef8a3b2edfe5de' }, h("igl-book-property-container", { key: '6861b152db6246f7c5ff2c1f715a49649937b5ca', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'e0830a2762ebdd9df6c0b76571eb2683c12562b4', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: 'e2e1207fb15707f2cbcc7a6cffdcbc7a03a9d46e', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '220d867312df82ca73e42ded171435dd14ea98c4', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '5544671597c534b082d027afca03f5e352201139', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: '9aac3e1c5cc2c0882efdb07bfef775205398df4f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '3776a4e83da52fe7fc03130f8c261a6aeca5da58', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '9dfbe29aad9aec9d47a943dbafda8a8b67847606', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: 'a332736f7eda81cf6792f828fab900b675c27ea9', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'de1dafbf94eaeab9953646e5141280c3f6536d73', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'da33afc5f811b208ff7a655d79f0570ea37e585b', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: 'baaf96a0b988146bff2864efb72e0a14adc8d554', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'fc4332dd9a48b56f2ce513560587b3e149269fd4' }), h("h5", { key: '20bbc30ec0e66493d54f46e0d1048db267ac6652', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: 'a6df6c862628edd41a936103d3712c50107339bf' })), h("section", { key: 'ea11cd0dc0a7e4841ef6058ffc1458671d62c173', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: '86bc1ca08aa7df5dc5852184691caa396b82f76e', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("ir-range-picker", { key: '88404972916babe4a0d5b9c997144470eba97a23', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: to_date, from: fromDate.format('YYYY-MM-DD') });
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("ir-select", { key: '31f69db114b505281c98097278dfd871b1034dec', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: 'bfa4dd24f7df396581f9b0fa008cbd1e9e86075d', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: 'a76869ac86c5ca801064351fe369f98d27d83f3a', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: 'e03552a5792bc9a1e01a5304feda01f84618d0f6', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: '789500f82154911b25b0c0cbce68801f5db7d478', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: '44a7b0f83fc68058c2829e4f8ae405b9b2fddd8d', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
    }
    static get style() { return IrListingHeaderStyle0; }
}, [2, "ir-listing-header", {
        "propertyId": [2, "property-id"],
        "language": [1],
        "p": [1],
        "inputValue": [32],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-phone-input", "ir-price-input", "ir-range-picker", "ir-select", "ir-spinner", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrListingHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-listing-header2.js.map