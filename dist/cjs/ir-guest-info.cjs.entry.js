'use strict';

var index = require('./index-P5Mginch.js');
var booking_store = require('./booking.store-CblXsXc-.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var irInterceptor_store = require('./ir-interceptor.store-BGTJSCIh.js');
var utils = require('./utils-ENyYs-bV.js');
var locale_controller = require('./locale.controller-CKBsRfx_.js');
var languageSync = require('./language-sync-gAmPX9Gh.js');
var t = require('./t-BpMDZfdy.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-BT0vyd3Z.js');
require('./index-CLqkDPTC.js');
require('./booking-BrmwKLh-.js');
require('./moment-CdViwxPQ.js');
require('./index-BLJXadKe.js');
require('./calendar-data-BjlxOXi1.js');
require('./functions-YMou4oXJ.js');
require('./ir-date-DUrZBFOV.js');
require('./locales.store-DIYxw5lk.js');
require('./language-observer-DKp37LIu.js');
require('./commonSchemas-hgXVqmtC.js');
require('./booking.dto-kenLHU-o.js');
require('./type-Dy9pVS4V.js');

const irGuestInfoCss = () => `.input-group-text.sc-ir-guest-info{min-width:10rem;text-align:start}.mobilePrefixSelect.sc-ir-guest-info{border-inline-end-width:0;border-start-end-radius:0;border-end-end-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-start-start-radius:0;border-end-start-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;inset-inline-start:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-inline-start:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{inset-inline-start:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}.loading-container.sc-ir-guest-info{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}`;

const sheetCss = () => `.sc-ir-guest-info-h{height:100%}.sheet-container.sc-ir-guest-info{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-guest-info{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-guest-info{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-guest-info{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-guest-info{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-guest-info{flex-direction:row;align-items:center}}`;

const GuestInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
    }
    language;
    headerShown;
    email;
    booking_nbr;
    ticket;
    isInSideBar;
    countries;
    // @State() submit: boolean = false;
    guest = null;
    isLoading = true;
    autoValidate = false;
    closeSideBar;
    resetBookingEvt;
    bookingService = new booking_store.BookingService();
    ApiClient = new ApiClient.ApiClient();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.guestInfo, () => this.init());
    async componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
        if (!!this.ApiClient.getToken())
            this.init();
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.init();
    }
    async init() {
        try {
            console.log('first');
            this.isLoading = true;
            const [guest, countries] = await Promise.all([
                this.bookingService.fetchGuest(this.email),
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.guestInfo }),
            ]);
            // Assign the fetched guest and countries
            this.countries = countries;
            this.guest = { ...guest, mobile: guest.mobile_without_prefix };
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(params) {
        this.guest = { ...this.guest, ...params };
    }
    async editGuest() {
        try {
            this.autoValidate = true;
            await this.bookingService.editExposedGuest(this.guest, this.booking_nbr ?? null);
            utils.showToast({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
            this.closeSideBar.emit(null);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.isLoading && this.isInSideBar) {
            index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null));
        }
        if (this.isLoading) {
            return null;
        }
        return (index.h("form", { class: 'p-0 sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.editGuest();
            } }, !this.isInSideBar && [index.h("ir-toast", null), index.h("ir-interceptor", null)], this.headerShown && index.h("ir-title", { class: "px-1 sheet-header", displayContext: "sidebar", label: t.t('Lcz_GuestDetails') }), index.h("div", { class: this.isInSideBar ? 'sheet-body' : 'card-content collapse show ' }, index.h("div", { class: this.headerShown ? 'card-body px-1 pt-0' : 'pt-0' }, index.h("ir-input-text", { autoValidate: this.autoValidate, label: t.t('Lcz_FirstName'), name: "firstName",
            // submitted={this.submit}
            value: this.guest?.first_name, required: true, onTextChange: e => this.handleInputChange({ first_name: e.detail }) }), index.h("ir-input-text", { autoValidate: this.autoValidate, label: t.t('Lcz_LastName'), name: "lastName",
            // submitted={this.submit}
            value: this.guest?.last_name, required: true, onTextChange: e => this.handleInputChange({ last_name: e.detail }) }), index.h("ir-input-text", { label: t.t('Lcz_Email'), name: "email",
            // submitted={this.submit}
            value: this.guest?.email, required: true, onTextChange: e => this.handleInputChange({ email: e.detail }) }), index.h("ir-input-text", { label: t.t('Lcz_AlternativeEmail'), name: "altEmail", value: this.guest?.alternative_email, onTextChange: e => this.handleInputChange({ alternative_email: e.detail }) }), index.h("ir-country-picker", {
            // error={this.submit && !this.guest.country_id}
            country: this.countries.find(c => c.id === this.guest.country_id), label: t.t('Lcz_Country'), onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries
        }), index.h("ir-phone-input", { onTextChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { mobile, phone_prefix } = e.detail;
                if (mobile !== this.guest.mobile) {
                    this.handleInputChange({ mobile });
                }
                if (phone_prefix !== this.guest.country_phone_prefix)
                    this.handleInputChange({ country_phone_prefix: phone_prefix });
            }, phone_prefix: this.guest.country_phone_prefix, value: this.guest.mobile, language: this.language, label: t.t('Lcz_MobilePhone'), countries: this.countries }), index.h("div", { class: "mb-2" }, index.h("ir-textarea", { variant: "prepend", onTextChange: e => this.handleInputChange({ notes: e.detail }), value: this.guest?.notes, label: t.t('Lcz_PrivateNote') })), index.h("div", { class: 'p-0 m-0' }, index.h("label", { class: `check-container m-0 p-0` }, index.h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange({ subscribe_to_news_letter: e.target.checked }) }), index.h("span", { class: "checkmark m-0 p-0" }), index.h("span", { class: 'm-0 p-0  check-label' }, t.t('Lcz_Newsletter'))), !this.isInSideBar && (index.h(index.Fragment, null, index.h("hr", null), index.h("ir-button", { btn_styles: "d-flex align-items-center justify-content-center", text: t.t('Lcz_Save'), onClickHandler: this.editGuest.bind(this), isLoading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest'), color: "btn-primary" })))))), this.isInSideBar && (index.h("div", { class: 'sheet-footer' }, index.h("ir-button", { "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill m-0 p-0", btn_styles: "w-100 m-0  justify-content-center align-items-center", btn_color: "secondary", text: t.t('Lcz_Cancel') }), index.h("ir-button", { "data-testid": "save", isLoading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest'), btn_disabled: this.isLoading, class: "flex-fill m-0", btn_type: "submit", btn_styles: "w-100 m-0  justify-content-center align-items-center", text: t.t('Lcz_Save') })))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
GuestInfo.style = irGuestInfoCss() + sheetCss();

exports.ir_guest_info = GuestInfo;
