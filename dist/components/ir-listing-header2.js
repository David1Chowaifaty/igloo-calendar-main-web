import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, b as booking_listing, u as updateUserSelection, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$m } from './igl-application-info2.js';
import { d as defineCustomElement$l } from './igl-block-dates-view2.js';
import { d as defineCustomElement$k } from './igl-book-property2.js';
import { d as defineCustomElement$j } from './igl-book-property-container2.js';
import { d as defineCustomElement$i } from './igl-book-property-footer2.js';
import { d as defineCustomElement$h } from './igl-book-property-header2.js';
import { d as defineCustomElement$g } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$f } from './igl-booking-room-rate-plan2.js';
import { d as defineCustomElement$e } from './igl-booking-rooms2.js';
import { d as defineCustomElement$d } from './igl-date-range2.js';
import { d as defineCustomElement$c } from './igl-pagetwo2.js';
import { d as defineCustomElement$b } from './igl-property-booked-by2.js';
import { d as defineCustomElement$a } from './ir-autocomplete2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-date-view2.js';
import { d as defineCustomElement$6 } from './ir-icon2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-interceptor2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = /*@__PURE__*/ proxyCustomElement(class IrListingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bookingListingService = new BookingListingService();
        this.propertyId = undefined;
        this.language = undefined;
        this.baseurl = undefined;
        this.inputValue = '';
    }
    componentWillLoad() {
        this.bookingListingService.setToken(booking_listing.token);
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { from: start.format('YYYY-MM-DD'), to: end.format('YYYY-MM-DD') });
    }
    async handleSearchClicked(is_to_export) {
        if (this.inputValue !== '') {
            if (/^-?\d+$/.test(this.inputValue)) {
                updateUserSelection('book_nbr', this.inputValue);
            }
            else if (this.inputValue[3] === '-') {
                updateUserSelection('book_nbr', this.inputValue);
            }
            else {
                updateUserSelection('name', this.inputValue);
            }
        }
        if (this.inputValue === '' && (booking_listing.userSelection.book_nbr !== '' || booking_listing.userSelection.name !== '')) {
            booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { name: '', book_nbr: '' });
        }
        await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { start_row: 0, end_row: 20, is_to_export }));
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
    render() {
        return (h(Host, { key: 'a0e4458bac5d645fd18c59fecedd676466e03a7e' }, h("a", { key: 'dff3e448386a06d12373cb777be533c4560a0797', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '70b5a2db7534bda88803ad2aa62ebe7fa9bbc780', class: "sr-only" }, "download url")), h("section", { key: 'f2a860c406d7a71cc4e0bc57af27525e1f604877', class: "d-flex align-items-center " }, h("div", { key: '7ec268b264e7dd14d8e90d1e632ec7c7c55128aa', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '12671dc7d85dfb8e02beb762bf56e294537cb2f6', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'bf10fb6111e5e4d048e400f7715660330a7d2b76', class: "flex-fill" }, locales.entries.Lcz_Bookings), h("div", { key: '174445c8202fab32a59c01bb570933b7a7de14c1' }, h("igl-book-property-container", { key: '05ef096a4599b84562f5672773483ef901707c4f', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '1ac2aeb816b4d7b9f0892f55000fe5b3eacce14e', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'bf87eae293760b0e4b9ba7831abba0eb57ff006b', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '2899eb3b3696008cbd48570e627eef4ebe1fb12b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("h3", { key: 'fd14f26ab27bb76412fa5f724a00b12ad614a290', class: "d-none d-md-block" }, locales.entries.Lcz_Bookings), h("form", { key: '592929564b302af092150996f710f0223d20fa84', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: 'c9208a6f77063d3ef330b16ed96147c6535ee72f', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: locales.entries.Lcz_FindBookNbrorName }, h("svg", { key: '15f50a641ae2cda09c2deb3a6602cb99da39bd3f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'a0a38da2fb4516e10dfe4b63dd85740e3c5de25c', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'c846bb6695488a282ac54dc715345b6ad51733f6', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries.Lcz_Or))), h("div", { key: 'fa5e4e5e95abf43f05b5e32bde5ec67983283b59', class: "d-none d-md-block" }, h("igl-book-property-container", { key: '3762192ff48b1bc7bb94f721b727c168630c9c7a', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '97b9a45903061ecaa6ba6ac407b041fd646f3530', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: '9995e546f331e74a3da06001c404661dd3475c67', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '84ecb389f1341bdd961bba8c85cb9f0c07d62f53', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("section", { key: '3b7ae96e2f0e9bb6c0bf24d51f28a03586c33d96', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: 'e9a0aa458ecce938e1b14b59b94ffbb5c5588b68' }), h("h5", { key: 'e4c3cf3d548120407be3647fc46654a71c8210ad', class: "m-0 font-weight-bold" }, locales.entries.Lcz_Or), h("span", { key: 'cdc2edd44f2455d4be53d22d5912b85ef5b1345a' })), h("section", { key: '0a6283c0cb982278ca45cf69f283b6fde2ca2a09', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: 'b0bcd6028af79e4fb43f56dc28ef1e0c913aac70', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '06cd13a58a9257860a00f55eabcdddf8d2e71aad', htmlFor: "dateTo" }, locales.entries.Lcz_DateOf), h("ir-select", { key: 'b42012c2a339d0716e0057d3cb7c4054617f43e5', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-fill", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: '57af0ad40eb0f734e2e8e44be9d7d60b0afba1f3', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: '5f3a8cfc028f9ec543aade0022d7aa3f864947e8', htmlFor: "dates" }, locales.entries.Lcz_Dates), h("igl-date-range", { key: 'a3ec3cf8a37ce209a9d92a977910ceac8e1b2325', class: "flex-fill", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: 'f51a8fa3c48ec878148b01b22399061c38d183f3', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'c64b5b248454beeb226258846e32829130bea1a4', htmlFor: "booking_status" }, locales.entries.Lcz_BookingStatus), h("ir-select", { key: 'cfe10ce7054d633e58be0065b19cf2de48e69a98', class: "flex-fill", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: '2169fb8ab7d60f9f586ad0cb69565f0c24493c4b', class: "d-flex align-items-center flex-sm-column align-items-sm-start flex-fill-sm-none" }, h("label", { key: 'a76ac5cacafd95bd6e8ae1be296369c6b89d26f1', htmlFor: "channels" }, locales.entries.Lcz_Channels), h("ir-select", { key: '3775ce37b83df58705c070001f6429fa28336da8', class: "flex-fill", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", firstOption: locales.entries.Lcz_All })), h("div", { key: '71c243707a8ddb60f1f13fd233ed034ac86f06ca', class: "d-flex flex-fill align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: '7cbcc2a9639f082357e3a860c8db5a96e9150538', title: locales.entries.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: 'b14ece83964c1523b633f4973c86a25cccc8f1cf', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '02b52026ec45cb4ac2a962ea31dd04bac55e5000', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '5f21e2f82d5a2b32c33e11e3569568f704c61d39', title: locales.entries.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: '4176bbdc109e3045a9b466a031ad68e96535c04a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: '7f82eb2c3896dd8e85b4cd5b88d99eed0d1b7bda', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '474d65cd19de8d897ea277ff297d96f50ff4f251', onIconClickHandler: () => this.handleSearchClicked(true), title: locales.entries.Lcz_ExportToExcel }, h("svg", { key: 'a8b8fd37eaacc55caaf1e440ca217e2cceb96ae0', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '552a4fe287f64a784dd92198b451720b23a649e3', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
    }
    static get style() { return IrListingHeaderStyle0; }
}, [2, "ir-listing-header", {
        "propertyId": [2, "property-id"],
        "language": [1],
        "baseurl": [1],
        "inputValue": [32]
    }, [[0, "dateChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-overview-page", "igl-booking-room-rate-plan", "igl-booking-rooms", "igl-date-range", "igl-pagetwo", "igl-property-booked-by", "ir-autocomplete", "ir-button", "ir-date-picker", "ir-date-view", "ir-icon", "ir-input-text", "ir-interceptor", "ir-select", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "igl-booking-room-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "igl-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "igl-pagetwo":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-interceptor":
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