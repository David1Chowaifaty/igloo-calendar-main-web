import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { s as downloadFile, R as isPrivilegedUser } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$v } from './igl-application-info2.js';
import { d as defineCustomElement$u } from './igl-block-dates-view2.js';
import { d as defineCustomElement$t } from './igl-book-property2.js';
import { d as defineCustomElement$s } from './igl-book-property-container2.js';
import { d as defineCustomElement$r } from './igl-book-property-footer2.js';
import { d as defineCustomElement$q } from './igl-book-property-header2.js';
import { d as defineCustomElement$p } from './igl-booking-form2.js';
import { d as defineCustomElement$o } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$n } from './igl-date-range2.js';
import { d as defineCustomElement$m } from './igl-property-booked-by2.js';
import { d as defineCustomElement$l } from './igl-rate-plan2.js';
import { d as defineCustomElement$k } from './igl-room-type2.js';
import { d as defineCustomElement$j } from './ir-button2.js';
import { d as defineCustomElement$i } from './ir-country-picker2.js';
import { d as defineCustomElement$h } from './ir-custom-button2.js';
import { d as defineCustomElement$g } from './ir-date-picker2.js';
import { d as defineCustomElement$f } from './ir-date-range2.js';
import { d as defineCustomElement$e } from './ir-date-view2.js';
import { d as defineCustomElement$d } from './ir-icon2.js';
import { d as defineCustomElement$c } from './ir-icons2.js';
import { d as defineCustomElement$b } from './ir-input2.js';
import { d as defineCustomElement$a } from './ir-input-text2.js';
import { d as defineCustomElement$9 } from './ir-interceptor2.js';
import { d as defineCustomElement$8 } from './ir-mobile-input2.js';
import { d as defineCustomElement$7 } from './ir-otp2.js';
import { d as defineCustomElement$6 } from './ir-otp-modal2.js';
import { d as defineCustomElement$5 } from './ir-picker2.js';
import { d as defineCustomElement$4 } from './ir-picker-item2.js';
import { d as defineCustomElement$3 } from './ir-range-picker2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-toast2.js';

const irListingHeaderCss = ".sc-ir-listing-header-h{display:block;margin:0;padding:0;--ir-date-range-border:#cacfe7;--ir-date-range-width:242px;position:relative}h3.sc-ir-listing-header{margin:0}ir-input-text.sc-ir-listing-header{width:300px}.booking-search-field.sc-ir-listing-header{margin-left:0px;display:flex;align-items:center;gap:14px}.booking-container.sc-ir-listing-header{gap:14px}.filters-container.sc-ir-listing-header{gap:10px;justify-content:space-between}.buttons-container.sc-ir-listing-header{gap:14px;color:#104064}.booking-dates-container.sc-ir-listing-header{position:relative;box-sizing:border-box;background:white;padding:0.75rem 1rem;height:2rem;border-radius:0.21rem;border:1px solid #cacfe7;display:flex;align-items:center;gap:0.5rem;margin:0}.booking-dates-container.sc-ir-listing-header span.sc-ir-listing-header{padding:0;margin:0;display:flex;align-items:center;justify-content:center;height:2rem}.date-picker-wrapper.sc-ir-listing-header{position:relative;cursor:default;box-sizing:border-box;padding:0 0.5rem;height:2rem;display:flex;align-items:center;gap:5px;flex-shrink:0;cursor:pointer}.date-picker-wrapper.sc-ir-listing-header:hover .date-display.sc-ir-listing-header{color:var(--blue)}.date-picker-wrapper[data-option='from-date'].sc-ir-listing-header{padding-right:0;cursor:pointer}.date-display.sc-ir-listing-header{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;padding-right:5px;cursor:pointer}.hidden-date-picker.sc-ir-listing-header{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.new-booking-container.sc-ir-listing-header{position:absolute;right:10px;top:5px}.new-booking-btn.sc-ir-listing-header{all:unset;cursor:pointer;color:#104064}.new-booking-btn.sc-ir-listing-header:hover{color:#0b2538}.seperator-container.sc-ir-listing-header{margin-top:10px;justify-content:center !important;gap:14px}.seperator-container.sc-ir-listing-header span.sc-ir-listing-header{display:block;height:1px;background:var(--gray);width:45%;max-width:200px;margin:0}@media (max-width: 575.98px){.sc-ir-listing-header-h{--ir-date-range-width:100%}.flex-fill-sm-none.sc-ir-listing-header{flex:1 1 auto}.flex-fill-sm-none.sc-ir-listing-header label.sc-ir-listing-header{width:100px}.buttons-container.sc-ir-listing-header{justify-content:center !important;align-items:center !important;gap:40px}}@media (min-width: 1200px){.booking-search-field.sc-ir-listing-header{margin-left:40px;width:100%;max-width:400px}}@media (min-width: 1600px){.flex-fill-sm-none.sc-ir-listing-header{flex:0 0 auto}.booking-search-field.sc-ir-listing-header{margin-left:40px}}";
const IrListingHeaderStyle0 = irListingHeaderCss;

const IrListingHeader = /*@__PURE__*/ proxyCustomElement(class IrListingHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.preventPageLoad = createEvent(this, "preventPageLoad", 7);
    }
    propertyId;
    language;
    p;
    inputValue = '';
    isLoading = null;
    preventPageLoad;
    bookingListingService = new BookingListingService();
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
            booking_listing.userSelection = {
                ...booking_listing.userSelection,
                name: '',
                book_nbr: '',
            };
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
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export });
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
        await this.bookingListingService.getExposedBookings({ ...booking_listing.userSelection, start_row: 0, end_row: 20, is_to_export: false });
    }
    render() {
        const havePrivilege = isPrivilegedUser(booking_listing.userSelection.userTypeCode);
        return (h(Host, { key: 'd18096d31917806cb8a92ec3fdb37d2ede3f78a0' }, h("section", { key: 'e7aec126806f6c93f85f4fce406ca1e6f7a1088b', class: "d-flex align-items-center " }, h("div", { key: '0aefa1a588fb91594b957924e991d0af1614fd86', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '5f9d9359b279692aa8940e172ff52f80b8628ded', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '282da3cc3847116a0233201cd0041e80dc868b60', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '6c55811254d8dccba394b354999676aac3156838' }, !havePrivilege && (h("igl-book-property-container", { key: 'd473de949f225f82f95f718defa996cdebe8bceb', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '59b368c0e85964aef78f88d4f542ca0e6132fb2f', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '8e8054863efd8159eaae9e6a3209dac30eb545aa', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '3d41dc1d1db852f65d3cd640c59e48df0272b873', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '12965ce3d4ba1fe3e747a7d656f2797019cb5733', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-input", { key: 'eae1a46cbaa215b8ce4a018ae562868475056d73', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '920b2a14c1a698073017ea5013805d9dd9a3478e', name: "magnifying-glass", slot: "start" })), h("h5", { key: '45ee3b95567b73ff3837358bc030a962e007f0a4', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '3a00174758a5ea7ecff620bc4d129d107a0e7f69', class: "d-none d-md-block" }, h("wa-tooltip", { key: '46a60683888b09c61119d58252739f4b1ab099f8', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '3584cdfd704d1d29fecf495128fdbff8b9b1cbee', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'a2a1d9b06f5cbc5745f6494b8867d94134fb3014', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'd140c744fe3f4e5c6fd9a75cba80e7e52735a1b5', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '8a34374cc7aff1e6f704392134c3fff349d868bd', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '48452f28e1a980e4f11c00d10bea8ce63df5b0f0' }), h("h5", { key: '0259554a4a2e9e0218966e0cefb24be531a8b2ca', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'c98d55974969961e946aa4b44b047af72cd3ac9a' })), h("section", { key: 'ada7f095c347be86ef5c21b04f43a6d209e599aa', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'c43f090f635312ca6335de600685252c6d7b6cbc', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '517264826a8ca30982f45fb8633db56d19dd6159', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '91cc95f74847985fcdbdb104c62289ac8032650c', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '035a1ece2ac09213a5927cee10abc72fa2c7138f', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'dd8ffcd64598f601aad116a19f8682a2f10a45dd', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '2560fedd4728f1c942ccd372f975cdfe58c11647', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '771c71167b1267a7acd3d7e99e33796f798cf22a', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '013c5d449476d4bdd3c0f2cc8f4a09a9ae8182e3', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '0741c8e7f35238f9189278af8e840b97be63b3f7', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b12b664871310c215569149a84fb625f54dbed24', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'd29a25f4d363848cb18d775315582666c79430c6', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '296002ab14f111f040e4e4dde6d0a9c02dd66056', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd61b0e36165f88fdf080126ef9e84f5674572844', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '7b60f82c25d43e9d5968f4dbf9b3dbc024614fdd', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: 'b565f279de2755f6712b0520179ea6f1d2948008', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-button", "ir-country-picker", "ir-custom-button", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-range-picker", "ir-spinner", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-custom-button":
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
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrListingHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-listing-header2.js.map