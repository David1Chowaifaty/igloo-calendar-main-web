import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { s as downloadFile, R as isPrivilegedUser } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$A } from './igl-application-info2.js';
import { d as defineCustomElement$z } from './igl-block-dates-view2.js';
import { d as defineCustomElement$y } from './igl-book-property2.js';
import { d as defineCustomElement$x } from './igl-book-property-container2.js';
import { d as defineCustomElement$w } from './igl-book-property-footer2.js';
import { d as defineCustomElement$v } from './igl-book-property-header2.js';
import { d as defineCustomElement$u } from './igl-booking-form2.js';
import { d as defineCustomElement$t } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$s } from './igl-date-range2.js';
import { d as defineCustomElement$r } from './igl-property-booked-by2.js';
import { d as defineCustomElement$q } from './igl-rate-plan2.js';
import { d as defineCustomElement$p } from './igl-room-type2.js';
import { d as defineCustomElement$o } from './ir-autocomplete2.js';
import { d as defineCustomElement$n } from './ir-button2.js';
import { d as defineCustomElement$m } from './ir-combobox2.js';
import { d as defineCustomElement$l } from './ir-country-picker2.js';
import { d as defineCustomElement$k } from './ir-custom-button2.js';
import { d as defineCustomElement$j } from './ir-custom-input2.js';
import { d as defineCustomElement$i } from './ir-date-picker2.js';
import { d as defineCustomElement$h } from './ir-date-range2.js';
import { d as defineCustomElement$g } from './ir-date-view2.js';
import { d as defineCustomElement$f } from './ir-icon2.js';
import { d as defineCustomElement$e } from './ir-icons2.js';
import { d as defineCustomElement$d } from './ir-input-text2.js';
import { d as defineCustomElement$c } from './ir-interceptor2.js';
import { d as defineCustomElement$b } from './ir-otp2.js';
import { d as defineCustomElement$a } from './ir-otp-modal2.js';
import { d as defineCustomElement$9 } from './ir-phone-input2.js';
import { d as defineCustomElement$8 } from './ir-picker2.js';
import { d as defineCustomElement$7 } from './ir-picker-item2.js';
import { d as defineCustomElement$6 } from './ir-price-input2.js';
import { d as defineCustomElement$5 } from './ir-range-picker2.js';
import { d as defineCustomElement$4 } from './ir-select2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

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
        return (h(Host, { key: 'fa9503ef73771708f470558571ca3b8b0b9be7fe' }, h("section", { key: 'a9dba1a64956a0cb248653460693244b0fedd5af', class: "d-flex align-items-center " }, h("div", { key: 'e1a3d3e7de8af07baa1b684b5843851ce7b4e3da', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '3fc42948ebad27686b0e60be95778b185238943c', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '0fca0f1b266ceccbb96b0af69e18a7bd687416f3', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'e95ecf06f667297f024d669910b31ec02182db77' }, !havePrivilege && (h("igl-book-property-container", { key: '477c1538c6240d9e08e065863b776efdd1a7f497', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '1ec983751971dc3872f75306bf0e231ef9ed7966', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '841af3e150dea237fc8a361aa27c4a6f7ff4a45b', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: '3fce010875e4d887a6fd9805c263a236c1b95c0d', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: 'bc113b9bbab2918be15417896f1c27290527a4c0', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: '760b5ce9e7094e03d602da4a3127e6fea2878224', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '790894609de7b09bfd3cffbf1d27d22c8c52e2dc', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'b61a525bc51fe9bcd6e281f74aab800e96101d7d', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: '8bac06ea656166451672c89200d2d7fe764646c3', class: "d-none d-md-block" }, h("wa-tooltip", { key: 'b9b3ad3627d1d87394f045da69f472bf249694db', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '0017a7526b5e98ddcc59181ffa4a1b615b017253', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'b5e436202ca3dc9d7f45cabf411642cf527a22d8', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '2416d16db89979c3e2ef3bb5ac16131744a90b24', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '6aeb1d75da6f14babbba88167337d3c5a745464a', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '651acd99a088995f3b598e184733837233be0ba3' }), h("h5", { key: '26ee9a5193a6233be8a577db9e80fd2572ed86ae', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'f16677be7919a2b0d715a82f50cc71d44319bc6e' })), h("section", { key: '334f5beae7db41035343da5498c7bbf3ca5cd982', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '67862213431f82af7dae061e15abe3f70888a6d2', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '5feb3d4bb8d1777826f0fa0ae43eb31f11c33e1e', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '9574001e725a29e87a29d4828fe006793548ccba', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '668e086bd26fb7368fa5e59c47aae0ea3c3b85f5', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '89e446e3d1c8d0a6b159fc2622580f9cfe508414', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '9c74cd664ff67d9fc82e6ccc5f1e45f3097c03de', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '4b222e72b33d92ef3a1912d7188b731402014b8c', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '535fef579e27a919e6165928cbbf7abb932bdd47', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '3783fe114545ee250cf57b7cbc4d140c8fc1aaf6', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3d3611f099dd7fca322b607ab1ffa5c1b4baeb38', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '3b25c1360448710312b32eb9f85347bd09525c89', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'f2c897b2813ce8f1b419d9321f64d067c1d52c49', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c6f5d3bbc139bcfcb784bed0151a5930affa0708', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: 'e0aa980bc87ec27118532cd87238c4360e804d03', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '670f12f8ba0d30ff43c7aec5a623235c18e7cefd', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
    const components = ["ir-listing-header", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-container", "igl-book-property-footer", "igl-book-property-header", "igl-booking-form", "igl-booking-overview-page", "igl-date-range", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "ir-autocomplete", "ir-button", "ir-combobox", "ir-country-picker", "ir-custom-button", "ir-custom-input", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-phone-input", "ir-picker", "ir-picker-item", "ir-price-input", "ir-range-picker", "ir-select", "ir-spinner", "ir-toast", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "igl-book-property-container":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-picker-item":
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