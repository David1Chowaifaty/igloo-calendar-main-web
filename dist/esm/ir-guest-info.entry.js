import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-CeHdrJeH.js';
import { B as BookingService } from './booking.store-DVDRSILK.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { h as showToast } from './utils-B69q7mr1.js';
import { S as SCREEN_TABLES, L as LocaleController } from './locale.controller-CTJvh9SC.js';
import { L as LanguageSync } from './language-sync-Cjba_aDc.js';
import { t } from './t-Bk78Wumj.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BEkHqAPo.js';
import './types-BWKgfE54.js';
import './booking-BJc14L4e.js';
import './moment-Mki5YqAR.js';
import './locales.store-CXJn6ls-.js';
import './calendar-data-CiYzaNK0.js';
import './functions-BkQvqs4p.js';
import './ir-date-BngUhoPp.js';
import './language-observer-CHgzsZkY.js';
import './commonSchemas-DOpzu-TI.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './types-vTVnj3si.js';

const irGuestInfoCss = () => `.input-group-text.sc-ir-guest-info{min-width:10rem;text-align:start}.mobilePrefixSelect.sc-ir-guest-info{border-inline-end-width:0;border-start-end-radius:0;border-end-end-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-start-start-radius:0;border-end-start-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;inset-inline-start:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-inline-start:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{inset-inline-start:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}.loading-container.sc-ir-guest-info{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}`;

const sheetCss = () => `.sc-ir-guest-info-h{height:100%}.sheet-container.sc-ir-guest-info{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-guest-info{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-guest-info{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-guest-info{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-guest-info{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-guest-info{flex-direction:row;align-items:center}}`;

const GuestInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
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
    bookingService = new BookingService();
    ApiClient = new ApiClient();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.guestInfo, () => this.init());
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
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.guestInfo });
            console.log('first');
            this.isLoading = true;
            const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(LocaleController.language), localeReady]);
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
            showToast({
                type: 'success',
                description: '',
                title: t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
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
            h("div", { class: 'loading-container' }, h("ir-spinner", null));
        }
        if (this.isLoading) {
            return null;
        }
        return (h("form", { class: 'p-0 sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.editGuest();
            } }, !this.isInSideBar && [h("ir-toast", null), h("ir-interceptor", null)], this.headerShown && h("ir-title", { class: "px-1 sheet-header", displayContext: "sidebar", label: t('Lcz_GuestDetails', { fallback: 'Guest Details' }) }), h("div", { class: this.isInSideBar ? 'sheet-body' : 'card-content collapse show ' }, h("div", { class: this.headerShown ? 'card-body px-1 pt-0' : 'pt-0' }, h("ir-input-text", { autoValidate: this.autoValidate, label: t('Lcz_FirstName', { fallback: 'First name' }), name: "firstName",
            // submitted={this.submit}
            value: this.guest?.first_name, required: true, onTextChange: e => this.handleInputChange({ first_name: e.detail }) }), h("ir-input-text", { autoValidate: this.autoValidate, label: t('Lcz_LastName', { fallback: 'Last name' }), name: "lastName",
            // submitted={this.submit}
            value: this.guest?.last_name, required: true, onTextChange: e => this.handleInputChange({ last_name: e.detail }) }), h("ir-input-text", { label: t('Lcz_Email', { fallback: 'Email' }), name: "email",
            // submitted={this.submit}
            value: this.guest?.email, required: true, onTextChange: e => this.handleInputChange({ email: e.detail }) }), h("ir-input-text", { label: t('Lcz_AlternativeEmail', { fallback: 'Alternative email' }), name: "altEmail", value: this.guest?.alternative_email, onTextChange: e => this.handleInputChange({ alternative_email: e.detail }) }), h("ir-country-picker", {
            // error={this.submit && !this.guest.country_id}
            country: this.countries.find(c => c.id === this.guest.country_id), label: t('Lcz_Country', { fallback: 'Country' }), onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries
        }), h("ir-phone-input", { onTextChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { mobile, phone_prefix } = e.detail;
                if (mobile !== this.guest.mobile) {
                    this.handleInputChange({ mobile });
                }
                if (phone_prefix !== this.guest.country_phone_prefix)
                    this.handleInputChange({ country_phone_prefix: phone_prefix });
            }, phone_prefix: this.guest.country_phone_prefix, value: this.guest.mobile, language: this.language, label: t('Lcz_MobilePhone', { fallback: 'Mobile phone' }), countries: this.countries }), h("div", { class: "mb-2" }, h("ir-textarea", { variant: "prepend", onTextChange: e => this.handleInputChange({ notes: e.detail }), value: this.guest?.notes, label: t('Lcz_PrivateNote', { fallback: 'Private note' }) })), h("div", { class: 'p-0 m-0' }, h("label", { class: `check-container m-0 p-0` }, h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange({ subscribe_to_news_letter: e.target.checked }) }), h("span", { class: "checkmark m-0 p-0" }), h("span", { class: 'm-0 p-0  check-label' }, t('Lcz_Newsletter', { fallback: 'Newsletter' }))), !this.isInSideBar && (h(Fragment, null, h("hr", null), h("ir-button", { btn_styles: "d-flex align-items-center justify-content-center", text: t('Lcz_Save', { fallback: 'Save' }), onClickHandler: this.editGuest.bind(this), isLoading: isRequestPending('/Edit_Exposed_Guest'), color: "btn-primary" })))))), this.isInSideBar && (h("div", { class: 'sheet-footer' }, h("ir-button", { "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill m-0 p-0", btn_styles: "w-100 m-0  justify-content-center align-items-center", btn_color: "secondary", text: t('Lcz_Cancel', { fallback: 'Cancel' }) }), h("ir-button", { "data-testid": "save", isLoading: isRequestPending('/Edit_Exposed_Guest'), btn_disabled: this.isLoading, class: "flex-fill m-0", btn_type: "submit", btn_styles: "w-100 m-0  justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) })))));
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

export { GuestInfo as ir_guest_info };
