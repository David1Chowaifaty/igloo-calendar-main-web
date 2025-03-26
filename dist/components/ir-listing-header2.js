import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { q as downloadFile } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$s } from './igl-application-info2.js';
import { d as defineCustomElement$r } from './igl-block-dates-view2.js';
import { d as defineCustomElement$q } from './igl-book-property2.js';
import { d as defineCustomElement$p } from './igl-book-property-container2.js';
import { d as defineCustomElement$o } from './igl-book-property-footer2.js';
import { d as defineCustomElement$n } from './igl-book-property-header2.js';
import { d as defineCustomElement$m } from './igl-booking-form2.js';
import { d as defineCustomElement$l } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$k } from './igl-date-range2.js';
import { d as defineCustomElement$j } from './igl-property-booked-by2.js';
import { d as defineCustomElement$i } from './igl-rate-plan2.js';
import { d as defineCustomElement$h } from './igl-room-type2.js';
import { d as defineCustomElement$g } from './ir-autocomplete2.js';
import { d as defineCustomElement$f } from './ir-button2.js';
import { d as defineCustomElement$e } from './ir-combobox2.js';
import { d as defineCustomElement$d } from './ir-country-picker2.js';
import { d as defineCustomElement$c } from './ir-date-picker2.js';
import { d as defineCustomElement$b } from './ir-date-range2.js';
import { d as defineCustomElement$a } from './ir-date-view2.js';
import { d as defineCustomElement$9 } from './ir-icon2.js';
import { d as defineCustomElement$8 } from './ir-icons2.js';
import { d as defineCustomElement$7 } from './ir-input-text2.js';
import { d as defineCustomElement$6 } from './ir-interceptor2.js';
import { d as defineCustomElement$5 } from './ir-phone-input2.js';
import { d as defineCustomElement$4 } from './ir-price-input2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";

const IrListingHeader = /*@__PURE__*/ proxyCustomElement(class IrListingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
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
            const url = booking_listing.download_url;
            this.downloadUrlTag.href = url;
            // this.downloadUrlTag.download = url;
            // this.downloadUrlTag.click();
            // booking_listing.download_url = null;
            console.warn('new download method');
            downloadFile(url);
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
        return (h(Host, { key: '11d1c58cdd41a586f77f25a0bf97de5637b138c3' }, h("a", { key: '3e3adbe611c8d5c4fa572076f80f873705eb2f79', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '6f1f2645729b536bebf988dde5cd210097f20f2c', class: "sr-only" }, "download url")), h("section", { key: '8ce8ea3021edfa97fa8b8f1b5a1a5591727f4c79', class: "d-flex align-items-center " }, h("div", { key: '14699d092a24bcb9da23ab556fbd7a8b19fb6a25', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '56847c88e42e47ff73a99fd5f3e0d785e2bafcbd', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '460db9bca259bc369ef7b5668539464ade86143f', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: '41bdbcc3b9bea8d5363c8f084691d6292bbed768' }, h("igl-book-property-container", { key: 'a40750e839255c73256e94914d1c552d2fda782e', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '48f40e725b121c4176b32bca97ed06a94bc06a2f', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("h3", { key: 'a0deefcc84c5be126875026c7ff6b2eeb569f244', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: '0e293ef6f0e79e2064a1f92389d67a44a280a23f', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '4206ecae5fce3954811c855b3f8a4ad3ed333f73', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: 'd69762fc5ce35f44a313172458179c19ba76a72d', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'a447e036d96b606185b22aaa919600d0ca4defd9', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '1d66b95a0a6ef8316ecc4ef59b7a78879331b8e2', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '414f408d9736b39308e7a634c8faf90b3af06d5e', class: "d-none d-md-block" }, h("igl-book-property-container", { key: '6b043ccd0c6b4e1c8677c33ed32fd5f64152165b', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-button", { key: '972936dc5569a158fc6ae03a28576d5713bc585d', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "square_plus" })))), h("section", { key: '5f76a9cc106b56e1671c8a541644698ad12e4bdb', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'dac4f5665ca636532e0592355fafe45c5cf5cfd8' }), h("h5", { key: '34f12bd09318e40e971b739fb634d77bf842eec5', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '904befc3097591e045fc8ced8c8a9b8da099951b' })), h("section", { key: '610e15df01c22b2c4b062ed298708f8cc5cb1f06', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: 'abb145d96ad57ab03a9aff3d2a8220733a8fa697', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("div", { key: '7142879bd92151d505c82af987d86e2005abc857', class: 'booking-dates-container' }, h("span", { key: 'b7e8f6c8a3af86983462a48b7d8c9eca20e126e6' }, h("svg", { key: '3474ad0335ff397adddb369405315599165fb207', xmlns: "http://www.w3.org/2000/svg", viewBox: '0 0 448 512', style: { height: '14px', width: '14px' } }, h("path", { key: '76ebff2bc8373631c90f82d298963373de2d3d70', fill: "currentColor", d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' }))), h("ir-date-picker", { key: '510549014e8591454c3710a8afd2059a92967ecf', id: "fromDate", class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.from), minDate: "2000-01-01", onDateChanged: e => this.handleFromDateChange(e) }, h("p", { key: '72eef766d903851d435ca6c04ec6e80e196fc0a8', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.from)).format('MMM DD, yyyy'))), h("span", { key: 'd00ac1e7e01619a67d298076e74460daf427567e' }, h("svg", { key: '085a20c680824b11557c337295decfd058b03799', xmlns: "http://www.w3.org/2000/svg", class: "arrow-icon", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'c8dd2fcf93cd42066659954fe86656bfb6ac12bb', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("ir-date-picker", { key: '1dd7979f489783999a93dc59c1cbfff40f024997', id: "toDate", forceDestroyOnUpdate: true, class: "date-picker-wrapper", date: new Date(booking_listing.userSelection.to), ref: el => (this.toDateRef = el), minDate: new Date(booking_listing.userSelection.from), maxDate: hooks().add(1, 'years').endOf('year').toDate(), onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.start.isSame(booking_listing.userSelection.to, 'days') || e.detail.start.isBefore(booking_listing.userSelection.from, 'days')) {
                    return;
                }
                booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { to: e.detail.start.format('YYYY-MM-DD') });
            } }, h("p", { key: '6779e6afbce24665931650d520ee81f96824bdcf', slot: "trigger", class: "m-0 p-0 date-display" }, hooks(new Date(booking_listing.userSelection.to)).format('MMM DD, YYYY')))), h("ir-select", { key: '04a99b525bb422f7ae424460f10b54f5308b7d89', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: '57d9dcec6192d381d7cba187b68e4e8a2019d76a', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.value,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '84580d69c4b67f1180915d50be157f64f8c7f736', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: '3dde0eb28f83921fbe5d47db2cfaf59305a0840b', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false) }), h("ir-button", { key: 'af94ab971a46e2b6e0069016a3f88456fbbb9c19', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHandler: () => this.handleClearUserField() }), h("ir-button", { key: '7e374d0344082ecf8ced21661486bb36296e216e', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: () => this.handleSearchClicked(true) })))));
    }
    static get style() { return irListingHeaderCss; }
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
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-phone-input", "ir-price-input", "ir-select", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-price-input":
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

//# sourceMappingURL=ir-listing-header2.js.map