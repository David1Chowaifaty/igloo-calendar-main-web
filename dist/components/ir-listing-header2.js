import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { J as downloadFile } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$t } from './igl-application-info2.js';
import { d as defineCustomElement$s } from './igl-block-dates-view2.js';
import { d as defineCustomElement$r } from './igl-book-property2.js';
import { d as defineCustomElement$q } from './igl-book-property-container2.js';
import { d as defineCustomElement$p } from './igl-book-property-footer2.js';
import { d as defineCustomElement$o } from './igl-book-property-header2.js';
import { d as defineCustomElement$n } from './igl-booking-form2.js';
import { d as defineCustomElement$m } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$l } from './igl-date-range2.js';
import { d as defineCustomElement$k } from './igl-property-booked-by2.js';
import { d as defineCustomElement$j } from './igl-rate-plan2.js';
import { d as defineCustomElement$i } from './igl-room-type2.js';
import { d as defineCustomElement$h } from './ir-autocomplete2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-combobox2.js';
import { d as defineCustomElement$e } from './ir-country-picker2.js';
import { d as defineCustomElement$d } from './ir-date-picker2.js';
import { d as defineCustomElement$c } from './ir-date-range2.js';
import { d as defineCustomElement$b } from './ir-date-view2.js';
import { d as defineCustomElement$a } from './ir-icon2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-input-text2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-phone-input2.js';
import { d as defineCustomElement$5 } from './ir-price-input2.js';
import { d as defineCustomElement$4 } from './ir-range-picker2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
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
        return (h(Host, { key: 'ef41aeed66a295f1c4902e68c0dda115d41638fe' }, h("section", { key: '245fce916bc49f4bdc74589d08203996899ad8e4', class: "d-flex align-items-center " }, h("div", { key: '7b96aaaebb21ee681588174c5a26fbfe6fa989eb', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'fa3af55439a48f38820bc68d4377afe5c7e7aa60', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'd9fa0a7be1db71f322c49a411884c18a390b4432', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'a090b26facaafbb7c2ec5f0cafa71ac7ecf10ac3' }, h("igl-book-property-container", { key: 'bf0907254686a89c1ec727637a2bbf24355cb47f', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: 'd6bc57744f76922488c630ffc0dd455539e4fd92', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: '8dc43d71a9b27807e3fcfb9ee987876114abdab3', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '8496ba6e8a634ff11b2224319cb74e7c405b4e03', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '9d5bf9b5b60b8a321cf7b2a702bb998a1624fc8c', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: 'c5341299861a49c2486f3384106114c3037380f8', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'b89bae0b7f5fd6b763ff2d240069661110dd35bf', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '99eac56dc18a5e52251ea40a28edb254efcf4227', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: 'c0e9c30bb7ecda3e37fd23d98ecc342e37724082', class: "d-none d-md-block" }, h("igl-book-property-container", { key: 'e2d30d360090873f928b2c82ac3b44e9fee08531', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '2139dd1d7ba40fc26c724cf9074ca7292464c047', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: 'a7d4f15a77e1ab5e13b4c98dfc96a8f58ad3a181', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'f87a0644697545783531b050192ee63708bc774d' }), h("h5", { key: '96504c72d0c4ba71eba3f1b8fc1eada92f332493', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '1fa4208d2e9172f9eafab1e3235e5f7dedd4f84b' })), h("section", { key: '9c933ef0bd6cabaada9aceceae604f8b04c66b44', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: 'e8cdf6ec9dcdf3479486d88075180728d7fb9710', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("ir-range-picker", { key: '4cfc1945510dd169c2319bfd523a10c61a8087ae', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: to_date, from: fromDate.format('YYYY-MM-DD') });
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("ir-select", { key: '3c3bd3e2efbcb89fd89dff8080334360db1d1abb', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: '5c3465bf1ce8cf5b4a1776f46fa486aa9ec50889', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '3a0e4e7e7484fdf7c36a1864550ea879516087d3', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: 'b65ad8262f865a7b1d171c3f44be5806c3d4a4c6', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: '77615cbf0bd0e0c46e2cc9ae3168a3ce0d096a5b', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: '39328646d9d9ea56305127306e68a71f44eda5a5', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
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
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-phone-input", "ir-price-input", "ir-range-picker", "ir-select", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
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