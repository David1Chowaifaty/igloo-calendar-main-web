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
import { d as defineCustomElement$6 } from './ir-icons2.js';
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
        this.isLoading = null;
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
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: '2f3cc8fabfe8329c81790b2afe5c18cdde9c9ad2' }, h("a", { key: 'c022519b6936f82a7cbe1b29cf3e412da6807dc7', ref: el => (this.downloadUrlTag = el) }, h("p", { key: 'ee2fa0a874fe5230fb647e95afbb213a7a259634', class: "sr-only" }, "download url")), h("section", { key: '62daac58e1044713672d2043e95659d7cf6bb803', class: "d-flex align-items-center " }, h("div", { key: '542c2819a7b3d6b659422090665251f38f0ce503', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: 'f25dc503e889f1677853a8cec9749a0a393fae01', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: 'd13544d679c1463ed9a28bd6325865df22d9f0dc', class: "flex-fill" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Bookings), h("div", { key: 'e0c5afdc0a9d2a251e3d38e1f51f7154c7d10df2' }, booking_listing.token && (h("igl-book-property-container", { key: '4a8d63e959488e7683e8714ab46204d3290e3eea', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("ir-button", { key: 'c14f8ead3cc968c86e7d53a532a9c7742e173b17', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "plus" }))))), h("h3", { key: '516963410ed93a766bc1a8459c8af86faf08f5d4', class: "d-none d-md-block" }, (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Bookings), h("form", { key: 'f04ff3ace5dd54ca165ad8e9d28ddfff1d4c8db6', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input-text", { key: '6da9ecacc3b65aa256f2365ba5019d0a37de63cc', class: 'flex-fill', value: this.inputValue, onTextChange: e => (this.inputValue = e.detail), variant: "icon", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_FindBookNbrorName }, h("svg", { key: 'c3da146c401386603f2b890e5611a9e0eaa45b1f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'ac3f994ee20a7ea3dc9a6689ce53684968c5514f', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("h5", { key: 'a157a0ad7dd4293357eaab8e53c69a500233aec4', class: "m-0 font-weight-bold d-none d-sm-block" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Or))), h("div", { key: '121ca280fbb66b9874ebcb79c10349a6cf056d2b', class: "d-none d-md-block" }, booking_listing.token && (h("igl-book-property-container", { key: '4f55a2d66fed3f7d8d814c0716bd91b3c713737f', withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, baseurl: this.baseurl, ticket: booking_listing.token }, h("ir-button", { key: '81fc5d13f99ad417a62474d808bc60cd900502b2', slot: "trigger", class: 'new-booking-btn', variant: "icon", icon_name: "plus" }))))), h("section", { key: '67917e13486b27d8c3253ac95502a82592b230b6', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '718d145e7c38b85e907423a83ff79391221951b7' }), h("h5", { key: 'dae728d8d3a593ea615909110f4905510a9e8ae0', class: "m-0 font-weight-bold" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Or), h("span", { key: '2bbec3bceaa5cde755d46cfbd536ef2361bd3074' })), h("section", { key: 'd9bda783795468eb512ba6f79baddffd4df6e7c5', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("ir-select", { key: 'db23b0ec3d50cb11717f641b2c971022bd5a3da9', onSelectChange: e => updateUserSelection('filter_type', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.types.map(t => ({
                value: t.id.toString(),
                text: t.name,
            })), class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.filter_type, select_id: "dateTo", LabelAvailable: false }), h("igl-date-range", { key: 'bac8dc054d8e3e8f1b2a9da8c2c1bd5e4f030bac', class: "flex-sm-wrap", minDate: "2000-01-01", withDateDifference: false, defaultData: {
                fromDate: booking_listing.userSelection.from,
                toDate: booking_listing.userSelection.to,
            } }), h("ir-select", { key: '8f8e36cd258ae5eb3e3809d90926850fb7066320', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.booking_status, onSelectChange: e => updateUserSelection('booking_status', e.detail), showFirstOption: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.statuses.map(status => ({
                value: status.code,
                text: status.name,
            })), select_id: "booking_status", LabelAvailable: false }), h("ir-select", { key: '634ef2548f2b90d05032012f753cccd166009e97', class: "flex-sm-wrap", selectedValue: booking_listing.userSelection.channel, onSelectChange: e => updateUserSelection('channel', e.detail), LabelAvailable: false, data: booking_listing === null || booking_listing === void 0 ? void 0 : booking_listing.channels.map(channel => ({
                value: channel.name,
                text: channel.name,
            })), select_id: "channels", firstOption: ((_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_All) + ' ' + ((_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Channels) }), h("div", { key: '1a3320b9533b4ff9c095b13994cb90ea504bbf89', class: "d-flex flex-fill align-items-end m-0  buttons-container" }, h("ir-button", { key: 'b0d68b746c418b247ed5d2c6b468f89c022ba168', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_Search, variant: "icon", icon_name: "search", isLoading: this.isLoading === 'search', onClickHanlder: () => this.handleSearchClicked(false) }), h("ir-button", { key: '477adc9aedaf9e0623181670352ef71ef16cc6ad', title: (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Erase, variant: "icon", icon_name: "eraser", onClickHanlder: () => this.handleClearUserField() }), h("ir-button", { key: '5be797bb2a86fffeda28d3ccba69bb528040b7f9', title: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHanlder: () => this.handleSearchClicked(true) })))));
    }
    static get style() { return IrListingHeaderStyle0; }
}, [2, "ir-listing-header", {
        "propertyId": [2, "property-id"],
        "language": [1],
        "baseurl": [1],
        "inputValue": [32],
        "isLoading": [32]
    }, [[0, "dateChanged", "handleDateRangeChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-overview-page", "igl-booking-room-rate-plan", "igl-booking-rooms", "igl-date-range", "igl-pagetwo", "igl-property-booked-by", "ir-autocomplete", "ir-button", "ir-date-picker", "ir-date-view", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-select", "ir-toast", "ir-tooltip"];
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
        case "ir-icons":
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