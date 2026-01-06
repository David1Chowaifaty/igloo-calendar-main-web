import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingListingService, u as updateUserSelection, b as booking_listing, i as initializeUserSelection } from './booking_listing.service.js';
import { l as locales } from './locales.store.js';
import { m as downloadFile, B as isPrivilegedUser } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$u } from './igl-application-info2.js';
import { d as defineCustomElement$t } from './igl-date-range2.js';
import { d as defineCustomElement$s } from './igl-rate-plan2.js';
import { d as defineCustomElement$r } from './igl-room-type2.js';
import { d as defineCustomElement$q } from './ir-air-date-picker2.js';
import { d as defineCustomElement$p } from './ir-booking-editor2.js';
import { d as defineCustomElement$o } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$n } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$m } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$l } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$k } from './ir-booking-new-form2.js';
import { d as defineCustomElement$j } from './ir-button2.js';
import { d as defineCustomElement$i } from './ir-country-picker2.js';
import { d as defineCustomElement$h } from './ir-custom-button2.js';
import { d as defineCustomElement$g } from './ir-date-picker2.js';
import { d as defineCustomElement$f } from './ir-date-select2.js';
import { d as defineCustomElement$e } from './ir-date-view2.js';
import { d as defineCustomElement$d } from './ir-drawer2.js';
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
import { d as defineCustomElement$1 } from './ir-validator2.js';

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
        return (h(Host, { key: 'c95485a3a217536c92ce5fdaa53dd14c4d6fe101' }, h("section", { key: '8b2da849d9eea1ff68c900cb0a002f0089d83888', class: "d-flex align-items-center " }, h("div", { key: '8c22385985a742738f938b898856200242240956', class: "d-flex flex-fill flex-column flex-md-row align-items-md-center booking-container" }, h("div", { key: '2f349f3d45ca4ed2e6f19b8c5b000f10fd4244e0', class: "d-flex mb-1 d-md-none align-items-center justify-content-bettween width-fill" }, h("h3", { key: '2ce8d5cd4975508b64266db6dee8bf2f5aa3de54', class: "page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'a4594524d97742529e5e199fa239dc9f8051e02d' }, !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   {/* <ir-button slot="trigger"  variant="icon" icon_name="square_plus"></ir-button> */}
        //   <ir-custom-button id="new-booking" class={'new-booking-btn'} variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: '9718f46cdefd75dbb998112d3c787f5fa178cf33', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("h3", { key: '677d564ac434ba3bf89123c6632303a6ec3c892f', class: "d-none d-md-block page-title" }, locales.entries?.Lcz_Bookings), h("div", { key: 'e56d97af9cec3f1cc59a8469526949e7c84562f8',
            // onSubmit={e => {
            //   e.preventDefault();
            //   console.log(this.inputValue);
            //   this.handleSearchClicked(false);
            // }}
            class: "booking-search-field width-fill" }, h("ir-input", { key: '85ae8dc21d9b3d22ba3862f640a0dc837ade7249', class: 'flex-fill w-100', value: this.inputValue, onKeyDown: e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearchClicked(false);
                }
            }, "onText-change": e => (this.inputValue = e.detail), size: "small", placeholder: locales.entries?.Lcz_FindBookNbrorName }, h("wa-icon", { key: '91f2db268654257fb7dfb69ccb7d3e88f769d7c9', name: "magnifying-glass", slot: "start" })), h("h5", { key: 'eaa229e8f9276256adb4693c32589aa5a5375b61', class: "m-0 font-weight-bold d-none d-sm-block" }, locales.entries?.Lcz_Or))), h("div", { key: 'dd217bd899766aa2a86a65076f5e63e052207a1e', class: "d-none d-md-block" }, h("wa-tooltip", { key: '28c70140e2500442243b0043f9c36789d8743699', for: "new-booking" }, "Create new booking"), !havePrivilege && (
        // <igl-book-property-container
        //   p={this.p}
        //   withIrToastAndInterceptor={false}
        //   propertyid={this.propertyId}
        //   language={this.language}
        //   title={locales.entries.Lcz_CreateNewBooking}
        //   ticket={booking_listing.token}
        // >
        //   <ir-custom-button id="new-booking" variant="brand" appearance="plain" slot="trigger">
        //     <wa-icon name="plus" style={{ fontSize: '1.2rem' }}></wa-icon>
        //   </ir-custom-button>
        //   {/* <ir-button slot="trigger" class={'new-booking-btn'} variant="icon" icon_name="square_plus"></ir-button> */}
        // </igl-book-property-container>
        h("ir-booking-new-form", { key: '1d0a5d8a4096d7175917be7fa3cfb141df35ff40', propertyid: this.propertyId, language: this.language, ticket: booking_listing.token })))), h("section", { key: '155564ca2f7e2e4253f5d9f72c7c3db447f03007', class: "d-flex align-items-center justify-evenly seperator-container d-sm-none" }, h("span", { key: '441654b344d000963df25e477a39451bbb867192' }), h("h5", { key: '9ef242015b7eb96d597474b981e2807c7979e116', class: "m-0 font-weight-bold" }, locales.entries?.Lcz_Or), h("span", { key: '8e10240087b3aab26a746723684ec33e1636f549' })), h("section", { key: '8bae82e505a196aedf97b31cf0327ac93c9f646b', class: "d-flex flex-column align-items-sm-center flex-sm-row flex-sm-wrap filters-container justify-content-lg-start mt-1" }, h("wa-select", { key: '7e5a8c9e9952bd26c7eae404d3d83b67f22d47c9', onchange: e => {
                updateUserSelection('filter_type', e.target.value);
            }, value: booking_listing.userSelection.filter_type?.toString(), size: "small", defaultValue: booking_listing?.types[0]?.id?.toString() }, booking_listing?.types.map(b => (h("wa-option", { key: b.id, value: b.id?.toString() }, b.name)))), h("ir-range-picker", { key: 'a1bf45307bee06f684c6fe71dd2cbe799c3e17aa', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                let to_date = toDate.format('YYYY-MM-DD');
                if (toDate.isSame(hooks(booking_listing.userSelection.to, 'YYYY-MM-DD'), 'days') ||
                    toDate.isBefore(hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), 'days')) {
                    to_date = booking_listing.userSelection.to;
                }
                booking_listing.userSelection = { ...booking_listing.userSelection, to: to_date, from: fromDate.format('YYYY-MM-DD') };
            }, allowNullDates: false, fromDate: hooks(booking_listing.userSelection.from, 'YYYY-MM-DD'), toDate: hooks(booking_listing.userSelection.to, 'YYYY-MM-DD') }), h("wa-select", { key: '063be8a8a61533f5494c8a94d51f1efed0f2b63c', onchange: e => {
                updateUserSelection('booking_status', e.target.value);
            }, value: booking_listing.userSelection.booking_status, size: "small", defaultValue: booking_listing?.statuses[0]?.code }, booking_listing?.statuses.map(b => (h("wa-option", { key: b.code, value: b.code }, b.name)))), !isPrivilegedUser(booking_listing.userSelection.userTypeCode) && (h("wa-select", { key: '62ebb781ced6b4e4bfcea871c438bafcac10ae2d', onchange: e => {
                updateUserSelection('channel', e.target.value);
            }, value: booking_listing.userSelection.channel, size: "small", defaultValue: booking_listing.userSelection.channel }, h("wa-option", { key: 'c5cec0038eb22dde8c7e7d9d8d4b1095983b803e', value: "" }, "All channels"), booking_listing?.channels.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name))))), h("wa-select", { key: 'd0eb63ceefb1baf94646782b5beb5b65b7a8d257', onchange: e => {
                updateUserSelection('balance_filter', e.target.value);
            }, value: booking_listing.userSelection.balance_filter, size: "small", defaultValue: booking_listing?.balance_filter[0]?.value }, booking_listing?.balance_filter.map(b => (h("wa-option", { key: b.value, value: b.value }, b.name)))), h("div", { key: 'e468ebb771b2fb707b75246d03b972affd349874', class: "d-flex flex-fill align-items-end m-0" }, h("wa-tooltip", { key: 'a7cce2798074b86c82db087223c6a9ec80578f15', for: "search-btn" }, locales.entries?.Lcz_Search), h("ir-custom-button", { key: '12f9e6e3e327f49b12beee96f65b5d8543d018a7', id: "search-btn", loading: this.isLoading === 'search', onClickHandler: () => this.handleSearchClicked(false), variant: "neutral", appearance: "plain" }, h("wa-icon", { key: '4d077082abb41bc7e887bc195bb55ac487fef03a', name: "magnifying-glass", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '73eb7932a0e0c94553ee87f61b54aa5677ea027b', for: "clear-btn" }, locales.entries?.Lcz_Erase), h("ir-custom-button", { key: 'edd1103d78236a35dcf87d79ea9344e076ba3454', id: "clear-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleClearUserField() }, h("wa-icon", { key: 'bd5fea4c02534534d06904408b687e778bb26845', name: "eraser", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'df1d8cc78283d8a3308dc4641c116728804637c0', for: "excel-btn" }, locales.entries?.Lcz_ExportToExcel), h("ir-custom-button", { key: '5343b5f2c0ed3a0ba7bb403e49bc57f5542ee708', loading: this.isLoading === 'excel', id: "excel-btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleSearchClicked(true) }, h("wa-icon", { key: '2e534db28382af61a5b3935edaa810c783feef5f', name: "file-excel", variant: "regular", style: { fontSize: '1.2rem' } }))))));
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
    const components = ["ir-listing-header", "igl-application-info", "igl-date-range", "igl-rate-plan", "igl-room-type", "ir-air-date-picker", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-new-form", "ir-button", "ir-country-picker", "ir-custom-button", "ir-date-picker", "ir-date-select", "ir-date-view", "ir-drawer", "ir-icons", "ir-input", "ir-input-text", "ir-interceptor", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-picker", "ir-picker-item", "ir-range-picker", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-listing-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrListingHeader);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-booking-new-form":
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
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-drawer":
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
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrListingHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-listing-header2.js.map