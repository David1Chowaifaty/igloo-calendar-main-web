import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, b as booking_listing, u as updateUserSelection, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$n } from './igl-application-info2.js';
import { d as defineCustomElement$m } from './igl-block-dates-view2.js';
import { d as defineCustomElement$l } from './igl-book-property2.js';
import { d as defineCustomElement$k } from './igl-book-property-container2.js';
import { d as defineCustomElement$j } from './igl-book-property-footer2.js';
import { d as defineCustomElement$i } from './igl-book-property-header2.js';
import { d as defineCustomElement$h } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$g } from './igl-booking-room-rate-plan2.js';
import { d as defineCustomElement$f } from './igl-booking-rooms2.js';
import { d as defineCustomElement$e } from './igl-date-range2.js';
import { d as defineCustomElement$d } from './igl-pagetwo2.js';
import { d as defineCustomElement$c } from './igl-property-booked-by2.js';
import { d as defineCustomElement$b } from './ir-autocomplete2.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-date-picker2.js';
import { d as defineCustomElement$8 } from './ir-date-view2.js';
import { d as defineCustomElement$7 } from './ir-icon2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-interceptor2.js';
import { d as defineCustomElement$4 } from './ir-loading-screen2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:360px}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}}@media (min-width: 1200px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
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
        return (h(Host, { key: '0b772e358704facb61b442a66e9577e39eb83178' }, h("a", { key: '69c487412644a71585ee49e7c796fffc414ffb76', ref: el => (this.downloadUrlTag = el) }, h("p", { key: '4ec15ba00472248e7b912d7b83048764cdf4146e', class: "sr-only" }, "download url")), h("section", { key: 'eb55131e72b3e4068a3435707d91575fd08e67e4', class: "d-flex align-items-center " }, h("div", { key: 'f5e238d034c55da4a627587b2ed26de7e12b78e5', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '7e1c7913d56b762b8870d6fcb0da9ef082d3658b', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '26b5ae3f60fbdde1ad64fab929eff1bb10bbe945', class: "flex-fill" }, locales.entries.Lcz_Bookings), h("div", { key: '82aef96bea43a6da698c1636e7f492fc070a2ec5' }, h("igl-book-property-container", { key: '02029dfe230ba83fc6be3748b40b33d7b0baa8e9', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: 'f46d9f4224e90c860ac07eec1c1021a9c0d8b465', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'dc65a466304416005a6c9f290f8e01328a7dcca8', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'd901d5f72e7192758781fdce14d0a992b79a2d7b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("h3", { key: '05e5f25d3925eb8732e5c8bb5e25379b4ad05c95', class: "d-none d-md-block" }, locales.entries.Lcz_Bookings), h("div", { key: '59e4f5fe1205e9b7efd18cd08c3fbfc70a4b153e', class: "booking-search-field" }, h("ir-input-text", { key: '85a74641688694f9ea435e736d07d30b2d305e4c', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: locales.entries.Lcz_FindBookNbrorName }, h("svg", { key: '967ca36b99cf11ac52a362f5f37f7c3272a3a2b8', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '5f847404b297407dc14d90f12ea05f1bedc8d2f8', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: '3e66f73c482c8ee8d8f26979a6b1b01f159265e4', class: "m-0 font-weight-bold" }, locales.entries.Lcz_Or))), h("div", { key: '9ea1d2bb5c4df7465b5f49a96b9f8147d9dc6883', class: "d-none d-md-block" }, h("igl-book-property-container", { key: '71b96c8b1a5dd81e9f1b8b3a72641d0a054d84af', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, baseurl: this.baseurl, ticket: booking_listing.token }, h("button", { key: '555750ca26f0cf6e4492f323a1d267c0d06f2158', slot: "trigger", class: 'new-booking-btn' }, h("svg", { key: 'adfd07b827a7882baf8e19e4f06f4cd8dc575655', xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: 'fd93dad3d72615970937ce32604f581e6f64810b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), h("section", { key: 'd47e3863cbf7341d6a05233bbc4bf960e2fc6165', class: "d-flex align-items-center flex-wrap filters-container justify-content-lg-start mt-1" }, h("fieldset", { key: 'cc3e6e94cb5518ef474686d488c2c36521553cd6', class: "flex-fill-sm-none" }, h("label", { key: 'a86499c5abe21c500a7b8bc441b7098d31ff8d9b', htmlFor: "dateTo" }, locales.entries.Lcz_DateOf), h("ir-select", { key: 'ef7a05634613969c8a8302a91a2244225319ecb1', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), select_id: "dateTo", LabelAvailable: false })), h("fieldset", { key: '4fab9c30911f399dc03d692d474244abc30e150b', class: "flex-fill-sm-none" }, h("label", { key: 'dfffe6346ef0861811d4e51e48cb823d3ad79ea7', htmlFor: "dates" }, locales.entries.Lcz_Dates), h("igl-date-range", { key: 'a70ca0b275a7b1e3b32b04601b114647518f42f8', minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } })), h("fieldset", { key: '1783efec682a22cf7ee66eeeb906964a892aef5f', class: "flex-fill-sm-none" }, h("label", { key: 'c9c3f0149b2c2cb0bd3f1c50973c6f35375a7e07', htmlFor: "booking_status" }, locales.entries.Lcz_BookingStatus), h("ir-select", { key: '246588a5854ebaa06d41ab7f5165c8cf8fe96560', onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false })), h("fieldset", { key: 'e095184e5f47726d880476718476cab8e38aa176', class: "flex-fill-sm-none" }, h("label", { key: 'c16df79e8eeaed15c348ad6791b8c0d268cbf51a', htmlFor: "channels" }, locales.entries.Lcz_Channels), h("ir-select", { key: '7cc9f3098c1a0b18b63e1ce92dd21dd3fd3ac7df', onSelectChange: e => updateUserSelection('channel', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", LabelAvailable: false })), h("div", { key: 'f78bc15e4f3416b0dd860d7bdf6d3a8b75bbcb5c', class: "d-flex align-items-end m-0 mt-2 buttons-container" }, h("ir-icon", { key: 'c409c7e54f329bce9cd099f0e20cf6ca992bf59d', title: locales.entries.Lcz_Search, onIconClickHandler: () => this.handleSearchClicked(false) }, h("svg", { key: '7369565bbb86b88a4c3ce0799744ab8a7a0e7df6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: 'b93715ba3a9cd16d224fbc0bd2141b4b16041221', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: 'b2390944ce2ae67999713a60992fa8d7bb7d622b', title: locales.entries.Lcz_Erase, onIconClickHandler: () => this.handleClearUserField() }, h("svg", { key: 'afc8431b9d0a4e913c137b7f343bcb26c23bb01a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "22.5", viewBox: "0 0 576 512" }, h("path", { key: 'bba65de52f2db94beeaabbe1d04c99d0d4464891', fill: "currentColor", d: "M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z" }))), h("ir-icon", { key: '907b95066377f2c070bfcf59fa5a249a3bba0def', onIconClickHandler: () => this.handleSearchClicked(true), title: locales.entries.Lcz_ExportToExcel }, h("svg", { key: 'def686f64ce799c52970f443eae142258941b598', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: '3813ab3172be95716a1f5a5ffb77558511ae3742', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))))));
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
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-overview-page", "igl-booking-room-rate-plan", "igl-booking-rooms", "igl-date-range", "igl-pagetwo", "igl-property-booked-by", "ir-autocomplete", "ir-button", "ir-date-picker", "ir-date-view", "ir-icon", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-select", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "igl-booking-room-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "igl-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "igl-pagetwo":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-loading-screen":
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