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
        return (h(Host, { key: 'f58afc9e82ade038a7f720e4c0f8abff49198143' }, h("section", { key: 'f24187cb57e9813353a05888543ffdea7ab02ff6', class: "d-flex align-items-center " }, h("div", { key: '85c9767f43bf6244390981caa6a157e02de77c6f', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '3e0ed36f1091f1ace42eca60a7efeddcbe3c6393', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '98092682b86651e21d2e89897f4562d406ca87a0', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: '724dc30e51133778bc6f1cafc578295c2680c931' }, !havePrivilege && (h("igl-book-property-container", { key: 'e702fa0284f571a9739a1ee203ea4d0c3f77a505', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: 'dfc9fbdf5d6f9b86d6fb5bd9d4a6feac72327c57', id: "new-booking", class: 'new-booking-btn', variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: '2d346d2089a7e86c304542dcc311cbf252831d2e', name: "plus", style: { fontSize: '1.2rem' } })))))), h("h3", { key: 'a9d56efb6ff4b827fce9b906689ea327bdfc772c', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("form", { key: '5eb6a9c901ce08aba3ae34c6c814364c21008970', onSubmit: e => {
                e.preventDefault();
                console.log(this.inputValue);
                this.handleSearchClicked(false);
            }, class: "booking-search-field width-fill" }, h("ir-custom-input", { key: 'd47e99c654936f0b71b63ba758e8196cfd2fb51b', class: 'flex-fill w-100', value: this.inputValue, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '7fa0152994d1ba7f6378b642b47a9c741ff52c3c', name: "magnifying-glass", slot: "start" })), h("h5", { key: '7a1a950e42a35948b6419dbcdf15980cdb501555', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'ad08fca7ccd9113f2f72697d9f41cec5d49784c7', class: "d-none d-md-block" }, h("wa-tooltip", { key: '3dc61fca111d4b16ab5fa1fe81950e26b36d3567', for: "new-booking" }, "Create new booking"), !havePrivilege && (h("igl-book-property-container", { key: '81ded7cb99b467986ff70770ca5725044211c6ad', p: this.p, withIrToastAndInterceptor: false, propertyid: this.propertyId, language: this.language, title: locales.entries.Lcz_CreateNewBooking, ticket: booking_listing.token }, h("ir-custom-button", { key: '6b8167c5496d472d9544e472677efd0c3f7315da', id: "new-booking", variant: "brand", appearance: "plain", slot: "trigger" }, h("wa-icon", { key: 'e5cee68a692a6a169c4f190a4bde47f30afc0674', name: "plus", style: { fontSize: '1.2rem' } })))))), h("section", { key: '25c9cfffed4b67a4f2fa5287e4b4caa9cc9aff8a', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '85e97b0ad86fa6bdca49851d7eaa2f0a677cc3d2' }), h("h5", { key: '65a66c759cf1346f635ae271330e1f0a6ac96341', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: 'd2ca12e512e36e3f606955d3bbb390035f7d34f5' })), h("section", { key: '73dcfd493e01ca0032676f42aa34473907e51e72', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: 'b1a29e9aaaaa16ca6d803e711cf44be0aa807b5f', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: '8886260e43154200eaab46a7f2c7ea0032746f45', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '5c6ebf5ec920ec5374a85a43f3266066ba61d8fe', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '65a5459f3c04ffd408ccf7b536ef11ff23833c9a', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing?.channels[0]?.value }, booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: '46e03a57d53e155d67e67d77dc6e635104c89247', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: '54dba6fb91686c0b0f8160c9e86a2f8647444a6f', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: '305ba3d621b15142e86e2623ccfb7bdcdf213902', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '462b3279bd047dfb9ff9bb0ea2e32ca018f9a3a6', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '09c022484f552a77ab95df3d327181a6cbc52255', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c06bf6f5d44e3043b00e9bd5b04d1d94639e4748', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: '78f34f2f3cdf49406d522492dc8262fa7bbc00c8', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: '972830084e679feb62bf087f11518b9bf78417dc', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d8d0305038f4ac27c7b12cf0efc8595b44b1b93', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '4d7f07ae613b2a6b04b37e2c2cb4fb4ac0f61d0b', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '7c39c6c4a5ae2c3634606ec9fca5d028726dc98d', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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