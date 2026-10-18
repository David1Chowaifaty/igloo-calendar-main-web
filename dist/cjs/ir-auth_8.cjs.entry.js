'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var axios = require('./axios-EresIryl.js');
var languageSync = require('./language-sync-DZdPGMff.js');
var locale_controller = require('./locale.controller-DOykNQAc.js');
var t = require('./t-CqJPQrfm.js');
var utils = require('./utils-ZKsQb8eV.js');
var types = require('./types-BVJQZ50e.js');
var masks = require('./masks-DJsCZmbG.js');
var index$1 = require('./index-DtKMs5Q4.js');
var number = require('./number-xBpNWk3H.js');
var debounce = require('./debounce-Be8tSGtB.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./types-sp5nWPAa.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-CbkOKs2C.js');
require('./calendar-dates-BxDGM1ix.js');

/**
 * The legacy back-office login endpoints that `Default.js` used to reach through
 * `ajaxHelper`, with the exact payloads it sent.
 *
 * Stateless and free of storage writes — `ir-auth` owns the flow and persists
 * what the rest of the extranet reads from `localStorage`.
 */
class LegacyAuthService {
    async isAuthenticated({ username, password }) {
        return this.request('/IsAuthenticated_JSON', {
            My_UserInfo: { UserName: username, Password: password },
            My_Enum_Authentication_Mode: 0,
            IS_BACK_OFFICE: true,
        });
    }
    async getStartupDataSignature(ownerId) {
        return this.request('/Get_Startup_Data_Signature', { OWNER_ID: ownerId });
    }
    async getStartupData(ownerId, language) {
        return this.request('/Get_Startup_Data', {
            IS_BACK_OFFICE: true,
            OWNER_ID: ownerId,
            LANGUAGE_ABBREVIATION: language,
        });
    }
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    async forgotPassword(username) {
        return this.request('/Forgot_Password', {
            USERNAME: username,
            My_Enum_Forgot_Password_Mode: 0, // By USERNAME
            ENVIRONMENT_USER_ID: 2,
            LANGUAGE_ABBREVIATION: '',
        });
    }
    async forgotUsername(email) {
        return this.request('/Forgot_UserName', {
            EMAIL: email,
            My_Enum_Forgot_Password_Mode: 1, // By EMAIL
            ENVIRONMENT_USER_ID: 2,
        });
    }
    async request(url, params) {
        const { data } = await axios.axios.post(url, params);
        if (data?.ExceptionMsg?.trim()) {
            throw new Error(data.ExceptionMsg.trim());
        }
        return data?.My_Result;
    }
}

const irAuthCss = () => `.sc-ir-auth-h{--ink:#0b0f19;--slate:#6b7280;--slate-light:#9aa1ac;--paper:#ffffff;--paper-field:#ffffff;--line:#e2e4e9;--accent:#4338ca;--accent-deep:#362da3;--info-bg:#eff5ff;--info-border:#bfdcfe;--info-icon:#3b82f6;--danger:#dc2626;--font-body:'Inter', -apple-system, BlinkMacSystemFont, sans-serif;display:flex;flex-direction:column;box-sizing:border-box;min-height:100vh;min-height:100dvh;padding:2rem 3rem;background:var(--paper);color:var(--ink);font-family:var(--font-body)}.pms-auth__topbar.sc-ir-auth{display:flex;align-items:center;justify-content:space-between}.pms-auth__brand.sc-ir-auth img.sc-ir-auth{height:20px;object-fit:contain}.pms-auth__lang.sc-ir-auth wa-dropdown.sc-ir-auth wa-button.sc-ir-auth{font-size:0.85rem}.pms-auth__card.sc-ir-auth{width:100%;max-width:380px;margin:auto;padding:3rem 0}.pms-auth__title.sc-ir-auth{font-family:var(--font-body);font-weight:700;font-size:1.6rem;letter-spacing:-0.01em;color:var(--ink);margin:0 0 0.3rem;text-align:start}.pms-auth__subtitle.sc-ir-auth{font-family:var(--font-body);font-size:0.95rem;color:var(--slate);margin:0 0 1.4rem;text-align:start}.pms-auth__notice.sc-ir-auth{display:flex;align-items:flex-start;gap:0.6rem;background:var(--info-bg);border:1px solid var(--info-border);border-radius:8px;padding:0.85rem 1rem;margin:0 0 1.5rem;font-size:0.85rem;color:#1e3a5f;line-height:1.4}.pms-auth__notice.sc-ir-auth wa-icon.sc-ir-auth{color:var(--info-icon);flex:none;margin-top:0.15rem}.pms-auth__notice.sc-ir-auth strong.sc-ir-auth{font-weight:600}fieldset.sc-ir-auth{border:none;padding:0;margin:0 0 1rem}.pms-auth__row.sc-ir-auth{display:flex;align-items:center;justify-content:space-between;margin:0.4rem 0 1.2rem;font-size:0.85rem}.pms-auth__row--end.sc-ir-auth{justify-content:flex-end;margin-top:-0.6rem}.pms-auth__row.sc-ir-auth a.sc-ir-auth{color:var(--accent);text-decoration:none;font-weight:500}.pms-auth__row.sc-ir-auth a.sc-ir-auth:hover{text-decoration:underline}ir-input.sc-ir-auth,ir-custom-button.sc-ir-auth,wa-button.sc-ir-auth{--wa-form-control-border-radius:8px}ir-input.sc-ir-auth::part(base),ir-input.sc-ir-auth [part~="base"]{background:var(--paper-field);border-color:var(--line)}ir-input[aria-invalid='true'].sc-ir-auth::part(base),ir-input[aria-invalid='true'].sc-ir-auth [part~="base"]{border-color:var(--danger)}.pms-auth__submit.sc-ir-auth{width:100%;margin-top:0.25rem}.pms-auth__return.sc-ir-auth{margin-top:0.9rem;font-size:0.9rem}.pms-auth__return.sc-ir-auth a.sc-ir-auth{color:var(--accent);text-decoration:none;font-weight:500}.pms-auth__divider.sc-ir-auth{border:none;border-top:1px solid var(--line);margin:1.75rem 0}.pms-auth__apps.sc-ir-auth{display:flex;gap:0.9rem;align-items:center;justify-content:center;margin-bottom:1.4rem}.pms-auth__apps.sc-ir-auth img.sc-ir-auth{height:32px;width:auto}.pms-auth__signup.sc-ir-auth{width:100%;margin-bottom:1.4rem}.pms-auth__footer.sc-ir-auth{display:flex;align-items:center;justify-content:space-between;font-size:0.8rem;color:var(--slate)}.pms-auth__footer.sc-ir-auth a.sc-ir-auth{color:var(--slate)}`;

/** `localStorage` keys `Get_Startup_Data` is unpacked into, read by the rest of the extranet. */
const STARTUP_STORAGE_KEYS = {
    SetupEntries_b: 'My_SetupEntries',
    Languages_b: 'My_Languages',
    Currencies_b: 'My_Currencies',
    Countries_b: 'My_Countries',
    Hotel_Chains_b: 'My_Hotel_chain',
    Food_Arrangements_b: 'My_Food_arrangement_light',
    Cards_b: 'My_Card',
    Amenities_b: 'My_Amenity_light',
    Beddings_b: 'My_Bedding_light',
    Gateways_b: 'My_Gw',
};
const IrAuth = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authLanguageChange = index.createEvent(this, "authLanguageChange");
        this.authFinish = index.createEvent(this, "authFinish");
    }
    /** The page's current language, e.g. `<%= CurrentLanguage %>`. */
    language = 'en';
    /** Languages offered by the switcher, as an array or a JSON string of `{ code, label }`. */
    languages = [];
    logoUrl;
    /** Hides the app links and the sign-up button when the page runs inside MPO. */
    insideMpo = false;
    /** When set together with {@link autoPassword}, signs in on load. */
    autoUsername;
    autoPassword;
    /** Overrides the axios base URL the login endpoints are posted to. */
    baseUrl;
    view = 'login';
    username = '';
    password = '';
    rememberUsername = true;
    forgotPasswordUsername = '';
    email = '';
    isLoading = false;
    languageList = [];
    authLanguageChange;
    authFinish;
    authService = new LegacyAuthService();
    apiClient = new ApiClient.ApiClient();
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.auth, () => locale_controller.LocaleController.load({ tables: locale_controller.SCREEN_TABLES.auth }));
    formEl;
    schemaCache;
    componentWillLoad() {
        locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.auth }).catch(error => console.error('Failed to load login strings', error));
        this.parseLanguages(this.languages);
        this.applyBaseUrl(this.baseUrl);
        this.username = this.readStorage('USERNAME') ?? '';
    }
    componentDidLoad() {
        this.languageSync.connect();
        if (this.autoUsername && this.autoPassword) {
            this.username = this.autoUsername;
            this.password = this.autoPassword;
            this.authenticate();
        }
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    parseLanguages(value) {
        if (Array.isArray(value)) {
            this.languageList = value;
            return;
        }
        try {
            const parsed = value ? JSON.parse(value) : [];
            this.languageList = Array.isArray(parsed) ? parsed : [];
        }
        catch (error) {
            console.warn('[ir-auth] "languages" is not valid JSON.', error);
            this.languageList = [];
        }
    }
    applyBaseUrl(url) {
        if (url) {
            this.apiClient.setBaseUrl(url);
        }
    }
    /**
     * One schema per field. `ir-validator` uses them to show messages on submit and while
     * typing; the submit handlers re-check them to block the request.
     */
    get schemas() {
        const messages = {
            username: t.t('Lcz_PleaseEnterYourUsername', { fallback: 'Please enter your username' }),
            password: t.t('Lcz_PleaseEnterYourPassword', { fallback: 'Please enter your password' }),
            email: t.t('Lcz_PleaseEnterYourEmail', { fallback: 'Please enter your email' }),
            validEmail: t.t('Lcz_PleaseEnterValidEmail', { fallback: 'Please enter a valid email' }),
        };
        // Rebuilt only when the translations change: a new schema object re-runs every validator.
        const key = Object.values(messages).join('\u0000');
        if (this.schemaCache?.key !== key) {
            const required = (message) => types.stringType().trim().min(1, message);
            const username = required(messages.username);
            this.schemaCache = {
                key,
                schemas: {
                    username,
                    password: required(messages.password),
                    forgotPasswordUsername: username,
                    email: required(messages.email).pipe(types.stringType().email(messages.validEmail)),
                },
            };
        }
        return this.schemaCache.schemas;
    }
    isValid(...fields) {
        const schemas = this.schemas;
        return fields.every(field => schemas[field].safeParse(this[field] ?? '').success);
    }
    switchView(view) {
        this.view = view;
    }
    /**
     * `ir-input` nests `wa-input` in its own shadow root, out of reach of this form,
     * so Enter in a field no longer submits it natively. Goes through a real submit
     * so every `ir-validator` in the form shows its message.
     */
    handleKeyDown(e) {
        if (e.key === 'Enter' && e.target.tagName === 'IR-INPUT') {
            e.preventDefault();
            this.formEl?.requestSubmit();
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        switch (this.view) {
            case 'login':
                return this.authenticate();
            case 'forgotPassword':
                return this.forgotPassword();
            case 'forgotUsername':
                return this.forgotUsername();
        }
    }
    async authenticate() {
        if (!this.isValid('username', 'password') || this.isLoading) {
            return;
        }
        this.writeStorage('USERNAME', this.rememberUsername ? this.username : '');
        this.isLoading = true;
        try {
            const userInfo = await this.authService.isAuthenticated({ username: this.username, password: this.password });
            this.writeStorage('UserInfo_b', JSON.stringify(userInfo));
            this.apiClient.setApiClient(userInfo.Ticket);
            const signature = await this.authService.getStartupDataSignature(userInfo.OwnerID);
            if (this.readStorage('_Startup_Data_Signature_b') !== signature) {
                this.writeStorage('_Startup_Data_Signature_b', signature);
                const startupData = await this.authService.getStartupData(userInfo.OwnerID, 'EN');
                for (const [storageKey, field] of Object.entries(STARTUP_STORAGE_KEYS)) {
                    this.writeStorage(storageKey, JSON.stringify(startupData?.[field]));
                }
                this.toastSuccess(t.t('Lcz_LoginSuccessfulRedirecting', { fallback: 'You have successfully logged in. Redirecting ...' }));
            }
            else {
                this.toastSuccess(t.t('Lcz_LoginSuccessful', { fallback: 'Hooray! You have successfully logged in.' }));
            }
            this.authFinish.emit({ userInfo, requiresOtp: userInfo.IsRequireOTP === true });
        }
        catch (error) {
            this.toastError(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async forgotPassword() {
        if (!this.isValid('forgotPasswordUsername') || this.isLoading) {
            return;
        }
        this.isLoading = true;
        try {
            const sentTo = await this.authService.forgotPassword(this.forgotPasswordUsername);
            const [recipient] = String(sentTo ?? '').split('@');
            this.toastSuccess(t.t('Lcz_EmailBeingSentWithPassword', { fallback: 'An email is being sent to %1@...... containing your password', params: [recipient] }));
            this.switchView('login');
        }
        catch (error) {
            this.toastError(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async forgotUsername() {
        if (!this.isValid('email') || this.isLoading) {
            return;
        }
        this.isLoading = true;
        try {
            await this.authService.forgotUsername(this.email);
            const [recipient] = this.email.split('@');
            this.toastSuccess(t.t('Lcz_EmailBeingSentWithUsername', { fallback: 'An email is being sent to %1@...... containing your username', params: [recipient] }));
            this.switchView('login');
        }
        catch (error) {
            this.toastError(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    toastSuccess(title) {
        utils.showToast({ type: 'success', title, description: '', position: 'top-right' });
    }
    toastError(error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('[ir-auth]', error);
        utils.showToast({ type: 'error', title: message, description: '', position: 'top-right' });
    }
    /* Storage can throw in private windows or with site data blocked; the form must still work. */
    readStorage(key) {
        try {
            return localStorage.getItem(key);
        }
        catch {
            return null;
        }
    }
    writeStorage(key, value) {
        try {
            localStorage.setItem(key, value);
        }
        catch (error) {
            console.warn(`[ir-auth] Failed to write "${key}" to localStorage.`, error);
        }
    }
    renderBackToLogin() {
        return (index.h("p", { class: "pms-auth__return" }, index.h("a", { href: "#", onClick: e => (e.preventDefault(), this.switchView('login')) }, t.t('Lcz_BackToSignIn', { fallback: 'Back to sign in' }))));
    }
    renderSubmit(label) {
        return (index.h("ir-custom-button", { class: "pms-auth__submit", type: "submit", variant: "brand", size: "m", loading: this.isLoading }, label));
    }
    renderInput({ field, label, type = 'text', autocomplete, }) {
        return (index.h("fieldset", null, index.h("ir-validator", { key: field, schema: this.schemas[field], value: this[field], valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { name: field, type: type, size: "m", passwordToggle: type === 'password', autocomplete: autocomplete, label: label, placeholder: label, value: this[field], "onText-change": (e) => (this[field] = e.detail) }))));
    }
    renderLogin() {
        return [
            index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })),
            index.h("p", { class: "pms-auth__subtitle" }),
            this.renderInput({ field: 'username', label: t.t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }),
            this.renderInput({ field: 'password', label: t.t('Lcz_Password', { fallback: 'Password' }), type: 'password', autocomplete: 'current-password' }),
            index.h("div", { class: "pms-auth__row" }, index.h("wa-checkbox", { checked: this.rememberUsername, onchange: e => (this.rememberUsername = e.target.checked) }, t.t('Lcz_RememberUsername', { fallback: 'Remember username' })), index.h("a", { href: "#", onClick: e => (e.preventDefault(), this.switchView('forgotUsername')) }, t.t('Lcz_ForgotUsername', { fallback: 'Forgot username?' }))),
            index.h("div", { class: "pms-auth__row pms-auth__row--end" }, index.h("a", { href: "#", onClick: e => (e.preventDefault(), this.switchView('forgotPassword')) }, t.t('Lcz_ForgotPassword', { fallback: 'Forgot password?' }))),
            this.renderSubmit(t.t('Lcz_Continue', { fallback: 'Continue' })),
        ];
    }
    renderForgotPassword() {
        return [
            index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_GetYourPassword', { fallback: 'Get your password' })),
            index.h("p", { class: "pms-auth__subtitle" }),
            this.renderInput({ field: 'forgotPasswordUsername', label: t.t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }),
            this.renderSubmit(t.t('Lcz_GetPassword', { fallback: 'Get password' })),
            this.renderBackToLogin(),
        ];
    }
    renderForgotUsername() {
        return [
            index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_GetYourUsername', { fallback: 'Get your username' })),
            index.h("p", { class: "pms-auth__subtitle" }),
            this.renderInput({ field: 'email', label: t.t('Lcz_Email', { fallback: 'Email' }), type: 'email', autocomplete: 'email' }),
            this.renderSubmit(t.t('Lcz_GetUsername', { fallback: 'Get username' })),
            this.renderBackToLogin(),
        ];
    }
    renderLanguageSelector() {
        if (!this.languageList.length) {
            return null;
        }
        const current = this.languageList.find(({ code }) => code.toLowerCase() === (this.language ?? '').toLowerCase());
        return (index.h("div", { class: "pms-auth__lang" }, index.h("wa-dropdown", { "onwa-select": e => this.authLanguageChange.emit({ code: e.detail.item.value }) }, index.h("wa-button", { slot: "trigger", size: "s", appearance: "outlined", variant: "neutral", "with-caret": true }, current?.label ?? this.language?.toUpperCase()), this.languageList.map(({ code, label }) => (index.h("wa-dropdown-item", { key: code, value: code }, label))))));
    }
    render() {
        return (index.h(index.Host, { key: '2b82ff6c6531cdde61a7dddc54c8f99cc38589fb' }, index.h("ir-toast", { key: '457025835c34194535538c46a80bc9f7a6466aaa' }), index.h("div", { key: 'f3974b1b929596a32403754cf985802406e5ac0c', class: "pms-auth__topbar" }, index.h("div", { key: '0ad274593927724ed21655f07e6e70e889592987', class: "pms-auth__brand" }, this.logoUrl && index.h("img", { key: 'b0e2e000540bc0eb38cc2288c0efa61e9034ea33', src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), index.h("div", { key: 'b65c664992d6dca1e1fb4743f6631971d45b54c0', class: "pms-auth__card" }, index.h("form", { key: '30db7d044003ae7bac18ebc9bc6a745d5a8d538c', novalidate: true, ref: el => (this.formEl = el), onSubmit: e => this.handleSubmit(e), onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (index.h("div", { key: '91ce313054f480910f7229ad1c3c2e23189d7e3f' }, index.h("hr", { key: '09190eb4d78515d8330e8fbe4f676ae54ab74626', class: "pms-auth__divider" }), index.h("div", { key: 'a4fe54e44873c65e592b150e6afeb484f7cc3de9', class: "pms-auth__apps" }, index.h("a", { key: '445739dc8da058f8c966bcd7033aa36c30e17850', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, index.h("wa-icon", { key: 'd71ae9879d054c6781a5c2e23a41f1ad94bb19ef', style: { fontSize: '1.5rem' }, name: "app-store", family: "brands" })), index.h("a", { key: '2d72c2617f16495d32604c6b927aa04501f37539', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, index.h("wa-icon", { key: '9f8f1c4adbe137edeabab4016fc146f1d30deef9', style: { fontSize: '1.5rem' }, name: "google-play", family: "brands" }))), index.h("ir-custom-button", { key: 'bcb0d7505cc5613f52f5a683c1bb87e2a5bdd131', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "m", href: "https://info.igloorooms.com/signup", target: "_blank" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), index.h("div", { key: '8d118910c9242e42cd5be7d8c89ae27073f15b5e', class: "pms-auth__footer" }, index.h("a", { key: 'b5d918990f2f81469d75da7f667f1ac09be58404', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), index.h("span", { key: '5d3a3bb5ddac89ff2cad0cbef62b248dcae20ae6' }, t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "languages": [{
                "parseLanguages": 0
            }],
        "baseUrl": [{
                "applyBaseUrl": 0
            }]
    }; }
};
IrAuth.style = irAuthCss();

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const appCss = () => `@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95:var(--wa-color-blue-95);--wa-color-brand-90:var(--wa-color-blue-90);--wa-color-brand-80:var(--wa-color-blue-80);--wa-color-brand-70:var(--wa-color-blue-70);--wa-color-brand-60:var(--wa-color-blue-60);--wa-color-brand-50:var(--wa-color-blue-50);--wa-color-brand-40:var(--wa-color-blue-40);--wa-color-brand-30:var(--wa-color-blue-30);--wa-color-brand-20:var(--wa-color-blue-20);--wa-color-brand-10:var(--wa-color-blue-10);--wa-color-brand-05:var(--wa-color-blue-05);--wa-color-brand:var(--wa-color-blue);--wa-color-brand-on:var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95:var(--wa-color-red-95);--wa-color-brand-90:var(--wa-color-red-90);--wa-color-brand-80:var(--wa-color-red-80);--wa-color-brand-70:var(--wa-color-red-70);--wa-color-brand-60:var(--wa-color-red-60);--wa-color-brand-50:var(--wa-color-red-50);--wa-color-brand-40:var(--wa-color-red-40);--wa-color-brand-30:var(--wa-color-red-30);--wa-color-brand-20:var(--wa-color-red-20);--wa-color-brand-10:var(--wa-color-red-10);--wa-color-brand-05:var(--wa-color-red-05);--wa-color-brand:var(--wa-color-red);--wa-color-brand-on:var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95:var(--wa-color-orange-95);--wa-color-brand-90:var(--wa-color-orange-90);--wa-color-brand-80:var(--wa-color-orange-80);--wa-color-brand-70:var(--wa-color-orange-70);--wa-color-brand-60:var(--wa-color-orange-60);--wa-color-brand-50:var(--wa-color-orange-50);--wa-color-brand-40:var(--wa-color-orange-40);--wa-color-brand-30:var(--wa-color-orange-30);--wa-color-brand-20:var(--wa-color-orange-20);--wa-color-brand-10:var(--wa-color-orange-10);--wa-color-brand-05:var(--wa-color-orange-05);--wa-color-brand:var(--wa-color-orange);--wa-color-brand-on:var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95:var(--wa-color-yellow-95);--wa-color-brand-90:var(--wa-color-yellow-90);--wa-color-brand-80:var(--wa-color-yellow-80);--wa-color-brand-70:var(--wa-color-yellow-70);--wa-color-brand-60:var(--wa-color-yellow-60);--wa-color-brand-50:var(--wa-color-yellow-50);--wa-color-brand-40:var(--wa-color-yellow-40);--wa-color-brand-30:var(--wa-color-yellow-30);--wa-color-brand-20:var(--wa-color-yellow-20);--wa-color-brand-10:var(--wa-color-yellow-10);--wa-color-brand-05:var(--wa-color-yellow-05);--wa-color-brand:var(--wa-color-yellow);--wa-color-brand-on:var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95:var(--wa-color-green-95);--wa-color-brand-90:var(--wa-color-green-90);--wa-color-brand-80:var(--wa-color-green-80);--wa-color-brand-70:var(--wa-color-green-70);--wa-color-brand-60:var(--wa-color-green-60);--wa-color-brand-50:var(--wa-color-green-50);--wa-color-brand-40:var(--wa-color-green-40);--wa-color-brand-30:var(--wa-color-green-30);--wa-color-brand-20:var(--wa-color-green-20);--wa-color-brand-10:var(--wa-color-green-10);--wa-color-brand-05:var(--wa-color-green-05);--wa-color-brand:var(--wa-color-green);--wa-color-brand-on:var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95:var(--wa-color-cyan-95);--wa-color-brand-90:var(--wa-color-cyan-90);--wa-color-brand-80:var(--wa-color-cyan-80);--wa-color-brand-70:var(--wa-color-cyan-70);--wa-color-brand-60:var(--wa-color-cyan-60);--wa-color-brand-50:var(--wa-color-cyan-50);--wa-color-brand-40:var(--wa-color-cyan-40);--wa-color-brand-30:var(--wa-color-cyan-30);--wa-color-brand-20:var(--wa-color-cyan-20);--wa-color-brand-10:var(--wa-color-cyan-10);--wa-color-brand-05:var(--wa-color-cyan-05);--wa-color-brand:var(--wa-color-cyan);--wa-color-brand-on:var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95:var(--wa-color-indigo-95);--wa-color-brand-90:var(--wa-color-indigo-90);--wa-color-brand-80:var(--wa-color-indigo-80);--wa-color-brand-70:var(--wa-color-indigo-70);--wa-color-brand-60:var(--wa-color-indigo-60);--wa-color-brand-50:var(--wa-color-indigo-50);--wa-color-brand-40:var(--wa-color-indigo-40);--wa-color-brand-30:var(--wa-color-indigo-30);--wa-color-brand-20:var(--wa-color-indigo-20);--wa-color-brand-10:var(--wa-color-indigo-10);--wa-color-brand-05:var(--wa-color-indigo-05);--wa-color-brand:var(--wa-color-indigo);--wa-color-brand-on:var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95:var(--wa-color-purple-95);--wa-color-brand-90:var(--wa-color-purple-90);--wa-color-brand-80:var(--wa-color-purple-80);--wa-color-brand-70:var(--wa-color-purple-70);--wa-color-brand-60:var(--wa-color-purple-60);--wa-color-brand-50:var(--wa-color-purple-50);--wa-color-brand-40:var(--wa-color-purple-40);--wa-color-brand-30:var(--wa-color-purple-30);--wa-color-brand-20:var(--wa-color-purple-20);--wa-color-brand-10:var(--wa-color-purple-10);--wa-color-brand-05:var(--wa-color-purple-05);--wa-color-brand:var(--wa-color-purple);--wa-color-brand-on:var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95:var(--wa-color-pink-95);--wa-color-brand-90:var(--wa-color-pink-90);--wa-color-brand-80:var(--wa-color-pink-80);--wa-color-brand-70:var(--wa-color-pink-70);--wa-color-brand-60:var(--wa-color-pink-60);--wa-color-brand-50:var(--wa-color-pink-50);--wa-color-brand-40:var(--wa-color-pink-40);--wa-color-brand-30:var(--wa-color-pink-30);--wa-color-brand-20:var(--wa-color-pink-20);--wa-color-brand-10:var(--wa-color-pink-10);--wa-color-brand-05:var(--wa-color-pink-05);--wa-color-brand:var(--wa-color-pink);--wa-color-brand-on:var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95:var(--wa-color-gray-95);--wa-color-brand-90:var(--wa-color-gray-90);--wa-color-brand-80:var(--wa-color-gray-80);--wa-color-brand-70:var(--wa-color-gray-70);--wa-color-brand-60:var(--wa-color-gray-60);--wa-color-brand-50:var(--wa-color-gray-50);--wa-color-brand-40:var(--wa-color-gray-40);--wa-color-brand-30:var(--wa-color-gray-30);--wa-color-brand-20:var(--wa-color-gray-20);--wa-color-brand-10:var(--wa-color-gray-10);--wa-color-brand-05:var(--wa-color-gray-05);--wa-color-brand:var(--wa-color-gray);--wa-color-brand-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95:var(--wa-color-gray-95);--wa-color-neutral-90:var(--wa-color-gray-90);--wa-color-neutral-80:var(--wa-color-gray-80);--wa-color-neutral-70:var(--wa-color-gray-70);--wa-color-neutral-60:var(--wa-color-gray-60);--wa-color-neutral-50:var(--wa-color-gray-50);--wa-color-neutral-40:var(--wa-color-gray-40);--wa-color-neutral-30:var(--wa-color-gray-30);--wa-color-neutral-20:var(--wa-color-gray-20);--wa-color-neutral-10:var(--wa-color-gray-10);--wa-color-neutral-05:var(--wa-color-gray-05);--wa-color-neutral:var(--wa-color-gray);--wa-color-neutral-on:var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95:var(--wa-color-red-95);--wa-color-neutral-90:var(--wa-color-red-90);--wa-color-neutral-80:var(--wa-color-red-80);--wa-color-neutral-70:var(--wa-color-red-70);--wa-color-neutral-60:var(--wa-color-red-60);--wa-color-neutral-50:var(--wa-color-red-50);--wa-color-neutral-40:var(--wa-color-red-40);--wa-color-neutral-30:var(--wa-color-red-30);--wa-color-neutral-20:var(--wa-color-red-20);--wa-color-neutral-10:var(--wa-color-red-10);--wa-color-neutral-05:var(--wa-color-red-05);--wa-color-neutral:var(--wa-color-red);--wa-color-neutral-on:var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95:var(--wa-color-orange-95);--wa-color-neutral-90:var(--wa-color-orange-90);--wa-color-neutral-80:var(--wa-color-orange-80);--wa-color-neutral-70:var(--wa-color-orange-70);--wa-color-neutral-60:var(--wa-color-orange-60);--wa-color-neutral-50:var(--wa-color-orange-50);--wa-color-neutral-40:var(--wa-color-orange-40);--wa-color-neutral-30:var(--wa-color-orange-30);--wa-color-neutral-20:var(--wa-color-orange-20);--wa-color-neutral-10:var(--wa-color-orange-10);--wa-color-neutral-05:var(--wa-color-orange-05);--wa-color-neutral:var(--wa-color-orange);--wa-color-neutral-on:var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95:var(--wa-color-yellow-95);--wa-color-neutral-90:var(--wa-color-yellow-90);--wa-color-neutral-80:var(--wa-color-yellow-80);--wa-color-neutral-70:var(--wa-color-yellow-70);--wa-color-neutral-60:var(--wa-color-yellow-60);--wa-color-neutral-50:var(--wa-color-yellow-50);--wa-color-neutral-40:var(--wa-color-yellow-40);--wa-color-neutral-30:var(--wa-color-yellow-30);--wa-color-neutral-20:var(--wa-color-yellow-20);--wa-color-neutral-10:var(--wa-color-yellow-10);--wa-color-neutral-05:var(--wa-color-yellow-05);--wa-color-neutral:var(--wa-color-yellow);--wa-color-neutral-on:var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95:var(--wa-color-green-95);--wa-color-neutral-90:var(--wa-color-green-90);--wa-color-neutral-80:var(--wa-color-green-80);--wa-color-neutral-70:var(--wa-color-green-70);--wa-color-neutral-60:var(--wa-color-green-60);--wa-color-neutral-50:var(--wa-color-green-50);--wa-color-neutral-40:var(--wa-color-green-40);--wa-color-neutral-30:var(--wa-color-green-30);--wa-color-neutral-20:var(--wa-color-green-20);--wa-color-neutral-10:var(--wa-color-green-10);--wa-color-neutral-05:var(--wa-color-green-05);--wa-color-neutral:var(--wa-color-green);--wa-color-neutral-on:var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95:var(--wa-color-cyan-95);--wa-color-neutral-90:var(--wa-color-cyan-90);--wa-color-neutral-80:var(--wa-color-cyan-80);--wa-color-neutral-70:var(--wa-color-cyan-70);--wa-color-neutral-60:var(--wa-color-cyan-60);--wa-color-neutral-50:var(--wa-color-cyan-50);--wa-color-neutral-40:var(--wa-color-cyan-40);--wa-color-neutral-30:var(--wa-color-cyan-30);--wa-color-neutral-20:var(--wa-color-cyan-20);--wa-color-neutral-10:var(--wa-color-cyan-10);--wa-color-neutral-05:var(--wa-color-cyan-05);--wa-color-neutral:var(--wa-color-cyan);--wa-color-neutral-on:var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95:var(--wa-color-blue-95);--wa-color-neutral-90:var(--wa-color-blue-90);--wa-color-neutral-80:var(--wa-color-blue-80);--wa-color-neutral-70:var(--wa-color-blue-70);--wa-color-neutral-60:var(--wa-color-blue-60);--wa-color-neutral-50:var(--wa-color-blue-50);--wa-color-neutral-40:var(--wa-color-blue-40);--wa-color-neutral-30:var(--wa-color-blue-30);--wa-color-neutral-20:var(--wa-color-blue-20);--wa-color-neutral-10:var(--wa-color-blue-10);--wa-color-neutral-05:var(--wa-color-blue-05);--wa-color-neutral:var(--wa-color-blue);--wa-color-neutral-on:var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95:var(--wa-color-indigo-95);--wa-color-neutral-90:var(--wa-color-indigo-90);--wa-color-neutral-80:var(--wa-color-indigo-80);--wa-color-neutral-70:var(--wa-color-indigo-70);--wa-color-neutral-60:var(--wa-color-indigo-60);--wa-color-neutral-50:var(--wa-color-indigo-50);--wa-color-neutral-40:var(--wa-color-indigo-40);--wa-color-neutral-30:var(--wa-color-indigo-30);--wa-color-neutral-20:var(--wa-color-indigo-20);--wa-color-neutral-10:var(--wa-color-indigo-10);--wa-color-neutral-05:var(--wa-color-indigo-05);--wa-color-neutral:var(--wa-color-indigo);--wa-color-neutral-on:var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95:var(--wa-color-purple-95);--wa-color-neutral-90:var(--wa-color-purple-90);--wa-color-neutral-80:var(--wa-color-purple-80);--wa-color-neutral-70:var(--wa-color-purple-70);--wa-color-neutral-60:var(--wa-color-purple-60);--wa-color-neutral-50:var(--wa-color-purple-50);--wa-color-neutral-40:var(--wa-color-purple-40);--wa-color-neutral-30:var(--wa-color-purple-30);--wa-color-neutral-20:var(--wa-color-purple-20);--wa-color-neutral-10:var(--wa-color-purple-10);--wa-color-neutral-05:var(--wa-color-purple-05);--wa-color-neutral:var(--wa-color-purple);--wa-color-neutral-on:var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95:var(--wa-color-pink-95);--wa-color-neutral-90:var(--wa-color-pink-90);--wa-color-neutral-80:var(--wa-color-pink-80);--wa-color-neutral-70:var(--wa-color-pink-70);--wa-color-neutral-60:var(--wa-color-pink-60);--wa-color-neutral-50:var(--wa-color-pink-50);--wa-color-neutral-40:var(--wa-color-pink-40);--wa-color-neutral-30:var(--wa-color-pink-30);--wa-color-neutral-20:var(--wa-color-pink-20);--wa-color-neutral-10:var(--wa-color-pink-10);--wa-color-neutral-05:var(--wa-color-pink-05);--wa-color-neutral:var(--wa-color-pink);--wa-color-neutral-on:var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95:var(--wa-color-green-95);--wa-color-success-90:var(--wa-color-green-90);--wa-color-success-80:var(--wa-color-green-80);--wa-color-success-70:var(--wa-color-green-70);--wa-color-success-60:var(--wa-color-green-60);--wa-color-success-50:var(--wa-color-green-50);--wa-color-success-40:var(--wa-color-green-40);--wa-color-success-30:var(--wa-color-green-30);--wa-color-success-20:var(--wa-color-green-20);--wa-color-success-10:var(--wa-color-green-10);--wa-color-success-05:var(--wa-color-green-05);--wa-color-success:var(--wa-color-green);--wa-color-success-on:var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95:var(--wa-color-red-95);--wa-color-success-90:var(--wa-color-red-90);--wa-color-success-80:var(--wa-color-red-80);--wa-color-success-70:var(--wa-color-red-70);--wa-color-success-60:var(--wa-color-red-60);--wa-color-success-50:var(--wa-color-red-50);--wa-color-success-40:var(--wa-color-red-40);--wa-color-success-30:var(--wa-color-red-30);--wa-color-success-20:var(--wa-color-red-20);--wa-color-success-10:var(--wa-color-red-10);--wa-color-success-05:var(--wa-color-red-05);--wa-color-success:var(--wa-color-red);--wa-color-success-on:var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95:var(--wa-color-orange-95);--wa-color-success-90:var(--wa-color-orange-90);--wa-color-success-80:var(--wa-color-orange-80);--wa-color-success-70:var(--wa-color-orange-70);--wa-color-success-60:var(--wa-color-orange-60);--wa-color-success-50:var(--wa-color-orange-50);--wa-color-success-40:var(--wa-color-orange-40);--wa-color-success-30:var(--wa-color-orange-30);--wa-color-success-20:var(--wa-color-orange-20);--wa-color-success-10:var(--wa-color-orange-10);--wa-color-success-05:var(--wa-color-orange-05);--wa-color-success:var(--wa-color-orange);--wa-color-success-on:var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95:var(--wa-color-yellow-95);--wa-color-success-90:var(--wa-color-yellow-90);--wa-color-success-80:var(--wa-color-yellow-80);--wa-color-success-70:var(--wa-color-yellow-70);--wa-color-success-60:var(--wa-color-yellow-60);--wa-color-success-50:var(--wa-color-yellow-50);--wa-color-success-40:var(--wa-color-yellow-40);--wa-color-success-30:var(--wa-color-yellow-30);--wa-color-success-20:var(--wa-color-yellow-20);--wa-color-success-10:var(--wa-color-yellow-10);--wa-color-success-05:var(--wa-color-yellow-05);--wa-color-success:var(--wa-color-yellow);--wa-color-success-on:var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95:var(--wa-color-cyan-95);--wa-color-success-90:var(--wa-color-cyan-90);--wa-color-success-80:var(--wa-color-cyan-80);--wa-color-success-70:var(--wa-color-cyan-70);--wa-color-success-60:var(--wa-color-cyan-60);--wa-color-success-50:var(--wa-color-cyan-50);--wa-color-success-40:var(--wa-color-cyan-40);--wa-color-success-30:var(--wa-color-cyan-30);--wa-color-success-20:var(--wa-color-cyan-20);--wa-color-success-10:var(--wa-color-cyan-10);--wa-color-success-05:var(--wa-color-cyan-05);--wa-color-success:var(--wa-color-cyan);--wa-color-success-on:var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95:var(--wa-color-blue-95);--wa-color-success-90:var(--wa-color-blue-90);--wa-color-success-80:var(--wa-color-blue-80);--wa-color-success-70:var(--wa-color-blue-70);--wa-color-success-60:var(--wa-color-blue-60);--wa-color-success-50:var(--wa-color-blue-50);--wa-color-success-40:var(--wa-color-blue-40);--wa-color-success-30:var(--wa-color-blue-30);--wa-color-success-20:var(--wa-color-blue-20);--wa-color-success-10:var(--wa-color-blue-10);--wa-color-success-05:var(--wa-color-blue-05);--wa-color-success:var(--wa-color-blue);--wa-color-success-on:var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95:var(--wa-color-indigo-95);--wa-color-success-90:var(--wa-color-indigo-90);--wa-color-success-80:var(--wa-color-indigo-80);--wa-color-success-70:var(--wa-color-indigo-70);--wa-color-success-60:var(--wa-color-indigo-60);--wa-color-success-50:var(--wa-color-indigo-50);--wa-color-success-40:var(--wa-color-indigo-40);--wa-color-success-30:var(--wa-color-indigo-30);--wa-color-success-20:var(--wa-color-indigo-20);--wa-color-success-10:var(--wa-color-indigo-10);--wa-color-success-05:var(--wa-color-indigo-05);--wa-color-success:var(--wa-color-indigo);--wa-color-success-on:var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95:var(--wa-color-purple-95);--wa-color-success-90:var(--wa-color-purple-90);--wa-color-success-80:var(--wa-color-purple-80);--wa-color-success-70:var(--wa-color-purple-70);--wa-color-success-60:var(--wa-color-purple-60);--wa-color-success-50:var(--wa-color-purple-50);--wa-color-success-40:var(--wa-color-purple-40);--wa-color-success-30:var(--wa-color-purple-30);--wa-color-success-20:var(--wa-color-purple-20);--wa-color-success-10:var(--wa-color-purple-10);--wa-color-success-05:var(--wa-color-purple-05);--wa-color-success:var(--wa-color-purple);--wa-color-success-on:var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95:var(--wa-color-pink-95);--wa-color-success-90:var(--wa-color-pink-90);--wa-color-success-80:var(--wa-color-pink-80);--wa-color-success-70:var(--wa-color-pink-70);--wa-color-success-60:var(--wa-color-pink-60);--wa-color-success-50:var(--wa-color-pink-50);--wa-color-success-40:var(--wa-color-pink-40);--wa-color-success-30:var(--wa-color-pink-30);--wa-color-success-20:var(--wa-color-pink-20);--wa-color-success-10:var(--wa-color-pink-10);--wa-color-success-05:var(--wa-color-pink-05);--wa-color-success:var(--wa-color-pink);--wa-color-success-on:var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95:var(--wa-color-gray-95);--wa-color-success-90:var(--wa-color-gray-90);--wa-color-success-80:var(--wa-color-gray-80);--wa-color-success-70:var(--wa-color-gray-70);--wa-color-success-60:var(--wa-color-gray-60);--wa-color-success-50:var(--wa-color-gray-50);--wa-color-success-40:var(--wa-color-gray-40);--wa-color-success-30:var(--wa-color-gray-30);--wa-color-success-20:var(--wa-color-gray-20);--wa-color-success-10:var(--wa-color-gray-10);--wa-color-success-05:var(--wa-color-gray-05);--wa-color-success:var(--wa-color-gray);--wa-color-success-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95:var(--wa-color-yellow-95);--wa-color-warning-90:var(--wa-color-yellow-90);--wa-color-warning-80:var(--wa-color-yellow-80);--wa-color-warning-70:var(--wa-color-yellow-70);--wa-color-warning-60:var(--wa-color-yellow-60);--wa-color-warning-50:var(--wa-color-yellow-50);--wa-color-warning-40:var(--wa-color-yellow-40);--wa-color-warning-30:var(--wa-color-yellow-30);--wa-color-warning-20:var(--wa-color-yellow-20);--wa-color-warning-10:var(--wa-color-yellow-10);--wa-color-warning-05:var(--wa-color-yellow-05);--wa-color-warning:var(--wa-color-yellow);--wa-color-warning-on:var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95:var(--wa-color-red-95);--wa-color-warning-90:var(--wa-color-red-90);--wa-color-warning-80:var(--wa-color-red-80);--wa-color-warning-70:var(--wa-color-red-70);--wa-color-warning-60:var(--wa-color-red-60);--wa-color-warning-50:var(--wa-color-red-50);--wa-color-warning-40:var(--wa-color-red-40);--wa-color-warning-30:var(--wa-color-red-30);--wa-color-warning-20:var(--wa-color-red-20);--wa-color-warning-10:var(--wa-color-red-10);--wa-color-warning-05:var(--wa-color-red-05);--wa-color-warning:var(--wa-color-red);--wa-color-warning-on:var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95:var(--wa-color-orange-95);--wa-color-warning-90:var(--wa-color-orange-90);--wa-color-warning-80:var(--wa-color-orange-80);--wa-color-warning-70:var(--wa-color-orange-70);--wa-color-warning-60:var(--wa-color-orange-60);--wa-color-warning-50:var(--wa-color-orange-50);--wa-color-warning-40:var(--wa-color-orange-40);--wa-color-warning-30:var(--wa-color-orange-30);--wa-color-warning-20:var(--wa-color-orange-20);--wa-color-warning-10:var(--wa-color-orange-10);--wa-color-warning-05:var(--wa-color-orange-05);--wa-color-warning:var(--wa-color-orange);--wa-color-warning-on:var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95:var(--wa-color-green-95);--wa-color-warning-90:var(--wa-color-green-90);--wa-color-warning-80:var(--wa-color-green-80);--wa-color-warning-70:var(--wa-color-green-70);--wa-color-warning-60:var(--wa-color-green-60);--wa-color-warning-50:var(--wa-color-green-50);--wa-color-warning-40:var(--wa-color-green-40);--wa-color-warning-30:var(--wa-color-green-30);--wa-color-warning-20:var(--wa-color-green-20);--wa-color-warning-10:var(--wa-color-green-10);--wa-color-warning-05:var(--wa-color-green-05);--wa-color-warning:var(--wa-color-green);--wa-color-warning-on:var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95:var(--wa-color-cyan-95);--wa-color-warning-90:var(--wa-color-cyan-90);--wa-color-warning-80:var(--wa-color-cyan-80);--wa-color-warning-70:var(--wa-color-cyan-70);--wa-color-warning-60:var(--wa-color-cyan-60);--wa-color-warning-50:var(--wa-color-cyan-50);--wa-color-warning-40:var(--wa-color-cyan-40);--wa-color-warning-30:var(--wa-color-cyan-30);--wa-color-warning-20:var(--wa-color-cyan-20);--wa-color-warning-10:var(--wa-color-cyan-10);--wa-color-warning-05:var(--wa-color-cyan-05);--wa-color-warning:var(--wa-color-cyan);--wa-color-warning-on:var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95:var(--wa-color-blue-95);--wa-color-warning-90:var(--wa-color-blue-90);--wa-color-warning-80:var(--wa-color-blue-80);--wa-color-warning-70:var(--wa-color-blue-70);--wa-color-warning-60:var(--wa-color-blue-60);--wa-color-warning-50:var(--wa-color-blue-50);--wa-color-warning-40:var(--wa-color-blue-40);--wa-color-warning-30:var(--wa-color-blue-30);--wa-color-warning-20:var(--wa-color-blue-20);--wa-color-warning-10:var(--wa-color-blue-10);--wa-color-warning-05:var(--wa-color-blue-05);--wa-color-warning:var(--wa-color-blue);--wa-color-warning-on:var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95:var(--wa-color-indigo-95);--wa-color-warning-90:var(--wa-color-indigo-90);--wa-color-warning-80:var(--wa-color-indigo-80);--wa-color-warning-70:var(--wa-color-indigo-70);--wa-color-warning-60:var(--wa-color-indigo-60);--wa-color-warning-50:var(--wa-color-indigo-50);--wa-color-warning-40:var(--wa-color-indigo-40);--wa-color-warning-30:var(--wa-color-indigo-30);--wa-color-warning-20:var(--wa-color-indigo-20);--wa-color-warning-10:var(--wa-color-indigo-10);--wa-color-warning-05:var(--wa-color-indigo-05);--wa-color-warning:var(--wa-color-indigo);--wa-color-warning-on:var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95:var(--wa-color-purple-95);--wa-color-warning-90:var(--wa-color-purple-90);--wa-color-warning-80:var(--wa-color-purple-80);--wa-color-warning-70:var(--wa-color-purple-70);--wa-color-warning-60:var(--wa-color-purple-60);--wa-color-warning-50:var(--wa-color-purple-50);--wa-color-warning-40:var(--wa-color-purple-40);--wa-color-warning-30:var(--wa-color-purple-30);--wa-color-warning-20:var(--wa-color-purple-20);--wa-color-warning-10:var(--wa-color-purple-10);--wa-color-warning-05:var(--wa-color-purple-05);--wa-color-warning:var(--wa-color-purple);--wa-color-warning-on:var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95:var(--wa-color-pink-95);--wa-color-warning-90:var(--wa-color-pink-90);--wa-color-warning-80:var(--wa-color-pink-80);--wa-color-warning-70:var(--wa-color-pink-70);--wa-color-warning-60:var(--wa-color-pink-60);--wa-color-warning-50:var(--wa-color-pink-50);--wa-color-warning-40:var(--wa-color-pink-40);--wa-color-warning-30:var(--wa-color-pink-30);--wa-color-warning-20:var(--wa-color-pink-20);--wa-color-warning-10:var(--wa-color-pink-10);--wa-color-warning-05:var(--wa-color-pink-05);--wa-color-warning:var(--wa-color-pink);--wa-color-warning-on:var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95:var(--wa-color-gray-95);--wa-color-warning-90:var(--wa-color-gray-90);--wa-color-warning-80:var(--wa-color-gray-80);--wa-color-warning-70:var(--wa-color-gray-70);--wa-color-warning-60:var(--wa-color-gray-60);--wa-color-warning-50:var(--wa-color-gray-50);--wa-color-warning-40:var(--wa-color-gray-40);--wa-color-warning-30:var(--wa-color-gray-30);--wa-color-warning-20:var(--wa-color-gray-20);--wa-color-warning-10:var(--wa-color-gray-10);--wa-color-warning-05:var(--wa-color-gray-05);--wa-color-warning:var(--wa-color-gray);--wa-color-warning-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95:var(--wa-color-red-95);--wa-color-danger-90:var(--wa-color-red-90);--wa-color-danger-80:var(--wa-color-red-80);--wa-color-danger-70:var(--wa-color-red-70);--wa-color-danger-60:var(--wa-color-red-60);--wa-color-danger-50:var(--wa-color-red-50);--wa-color-danger-40:var(--wa-color-red-40);--wa-color-danger-30:var(--wa-color-red-30);--wa-color-danger-20:var(--wa-color-red-20);--wa-color-danger-10:var(--wa-color-red-10);--wa-color-danger-05:var(--wa-color-red-05);--wa-color-danger:var(--wa-color-red);--wa-color-danger-on:var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95:var(--wa-color-orange-95);--wa-color-danger-90:var(--wa-color-orange-90);--wa-color-danger-80:var(--wa-color-orange-80);--wa-color-danger-70:var(--wa-color-orange-70);--wa-color-danger-60:var(--wa-color-orange-60);--wa-color-danger-50:var(--wa-color-orange-50);--wa-color-danger-40:var(--wa-color-orange-40);--wa-color-danger-30:var(--wa-color-orange-30);--wa-color-danger-20:var(--wa-color-orange-20);--wa-color-danger-10:var(--wa-color-orange-10);--wa-color-danger-05:var(--wa-color-orange-05);--wa-color-danger:var(--wa-color-orange);--wa-color-danger-on:var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95:var(--wa-color-yellow-95);--wa-color-danger-90:var(--wa-color-yellow-90);--wa-color-danger-80:var(--wa-color-yellow-80);--wa-color-danger-70:var(--wa-color-yellow-70);--wa-color-danger-60:var(--wa-color-yellow-60);--wa-color-danger-50:var(--wa-color-yellow-50);--wa-color-danger-40:var(--wa-color-yellow-40);--wa-color-danger-30:var(--wa-color-yellow-30);--wa-color-danger-20:var(--wa-color-yellow-20);--wa-color-danger-10:var(--wa-color-yellow-10);--wa-color-danger-05:var(--wa-color-yellow-05);--wa-color-danger:var(--wa-color-yellow);--wa-color-danger-on:var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95:var(--wa-color-green-95);--wa-color-danger-90:var(--wa-color-green-90);--wa-color-danger-80:var(--wa-color-green-80);--wa-color-danger-70:var(--wa-color-green-70);--wa-color-danger-60:var(--wa-color-green-60);--wa-color-danger-50:var(--wa-color-green-50);--wa-color-danger-40:var(--wa-color-green-40);--wa-color-danger-30:var(--wa-color-green-30);--wa-color-danger-20:var(--wa-color-green-20);--wa-color-danger-10:var(--wa-color-green-10);--wa-color-danger-05:var(--wa-color-green-05);--wa-color-danger:var(--wa-color-green);--wa-color-danger-on:var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95:var(--wa-color-cyan-95);--wa-color-danger-90:var(--wa-color-cyan-90);--wa-color-danger-80:var(--wa-color-cyan-80);--wa-color-danger-70:var(--wa-color-cyan-70);--wa-color-danger-60:var(--wa-color-cyan-60);--wa-color-danger-50:var(--wa-color-cyan-50);--wa-color-danger-40:var(--wa-color-cyan-40);--wa-color-danger-30:var(--wa-color-cyan-30);--wa-color-danger-20:var(--wa-color-cyan-20);--wa-color-danger-10:var(--wa-color-cyan-10);--wa-color-danger-05:var(--wa-color-cyan-05);--wa-color-danger:var(--wa-color-cyan);--wa-color-danger-on:var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95:var(--wa-color-blue-95);--wa-color-danger-90:var(--wa-color-blue-90);--wa-color-danger-80:var(--wa-color-blue-80);--wa-color-danger-70:var(--wa-color-blue-70);--wa-color-danger-60:var(--wa-color-blue-60);--wa-color-danger-50:var(--wa-color-blue-50);--wa-color-danger-40:var(--wa-color-blue-40);--wa-color-danger-30:var(--wa-color-blue-30);--wa-color-danger-20:var(--wa-color-blue-20);--wa-color-danger-10:var(--wa-color-blue-10);--wa-color-danger-05:var(--wa-color-blue-05);--wa-color-danger:var(--wa-color-blue);--wa-color-danger-on:var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95:var(--wa-color-indigo-95);--wa-color-danger-90:var(--wa-color-indigo-90);--wa-color-danger-80:var(--wa-color-indigo-80);--wa-color-danger-70:var(--wa-color-indigo-70);--wa-color-danger-60:var(--wa-color-indigo-60);--wa-color-danger-50:var(--wa-color-indigo-50);--wa-color-danger-40:var(--wa-color-indigo-40);--wa-color-danger-30:var(--wa-color-indigo-30);--wa-color-danger-20:var(--wa-color-indigo-20);--wa-color-danger-10:var(--wa-color-indigo-10);--wa-color-danger-05:var(--wa-color-indigo-05);--wa-color-danger:var(--wa-color-indigo);--wa-color-danger-on:var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95:var(--wa-color-purple-95);--wa-color-danger-90:var(--wa-color-purple-90);--wa-color-danger-80:var(--wa-color-purple-80);--wa-color-danger-70:var(--wa-color-purple-70);--wa-color-danger-60:var(--wa-color-purple-60);--wa-color-danger-50:var(--wa-color-purple-50);--wa-color-danger-40:var(--wa-color-purple-40);--wa-color-danger-30:var(--wa-color-purple-30);--wa-color-danger-20:var(--wa-color-purple-20);--wa-color-danger-10:var(--wa-color-purple-10);--wa-color-danger-05:var(--wa-color-purple-05);--wa-color-danger:var(--wa-color-purple);--wa-color-danger-on:var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95:var(--wa-color-pink-95);--wa-color-danger-90:var(--wa-color-pink-90);--wa-color-danger-80:var(--wa-color-pink-80);--wa-color-danger-70:var(--wa-color-pink-70);--wa-color-danger-60:var(--wa-color-pink-60);--wa-color-danger-50:var(--wa-color-pink-50);--wa-color-danger-40:var(--wa-color-pink-40);--wa-color-danger-30:var(--wa-color-pink-30);--wa-color-danger-20:var(--wa-color-pink-20);--wa-color-danger-10:var(--wa-color-pink-10);--wa-color-danger-05:var(--wa-color-pink-05);--wa-color-danger:var(--wa-color-pink);--wa-color-danger-on:var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95:var(--wa-color-gray-95);--wa-color-danger-90:var(--wa-color-gray-90);--wa-color-danger-80:var(--wa-color-gray-80);--wa-color-danger-70:var(--wa-color-gray-70);--wa-color-danger-60:var(--wa-color-gray-60);--wa-color-danger-50:var(--wa-color-gray-50);--wa-color-danger-40:var(--wa-color-gray-40);--wa-color-danger-30:var(--wa-color-gray-30);--wa-color-danger-20:var(--wa-color-gray-20);--wa-color-danger-10:var(--wa-color-gray-10);--wa-color-danger-05:var(--wa-color-gray-05);--wa-color-danger:var(--wa-color-gray);--wa-color-danger-on:var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));--wa-color-orange-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));--wa-color-yellow-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));--wa-color-green-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));--wa-color-cyan-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));--wa-color-blue-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));--wa-color-indigo-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));--wa-color-purple-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));--wa-color-pink-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));--wa-color-gray-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));--wa-color-red-on:color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on:color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on:color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on:color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on:color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on:color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on:color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on:color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on:color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on:color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95:#fff0ef ;--wa-color-red-90:#ffdedc ;--wa-color-red-80:#ffb8b6 ;--wa-color-red-70:#fd8f90 ;--wa-color-red-60:#f3676c ;--wa-color-red-50:#dc3146 ;--wa-color-red-40:#b30532 ;--wa-color-red-30:#8a132c ;--wa-color-red-20:#631323 ;--wa-color-red-10:#3e0913 ;--wa-color-red-05:#2a040b ;--wa-color-red:var(--wa-color-red-50);--wa-color-red-key:50;--wa-color-orange-95:#fff0e6 ;--wa-color-orange-90:#ffdfca ;--wa-color-orange-80:#ffbb94 ;--wa-color-orange-70:#ff9266 ;--wa-color-orange-60:#f46a45 ;--wa-color-orange-50:#cd491c ;--wa-color-orange-40:#9f3501 ;--wa-color-orange-30:#802700 ;--wa-color-orange-20:#601b00 ;--wa-color-orange-10:#3c0d00 ;--wa-color-orange-05:#280600 ;--wa-color-orange:var(--wa-color-orange-60);--wa-color-orange-key:60;--wa-color-yellow-95:#fef3cd ;--wa-color-yellow-90:#ffe495 ;--wa-color-yellow-80:#fac22b ;--wa-color-yellow-70:#ef9d00 ;--wa-color-yellow-60:#da7e00 ;--wa-color-yellow-50:#b45f04 ;--wa-color-yellow-40:#8c4602 ;--wa-color-yellow-30:#6f3601 ;--wa-color-yellow-20:#532600 ;--wa-color-yellow-10:#331600 ;--wa-color-yellow-05:#220c00 ;--wa-color-yellow:var(--wa-color-yellow-80);--wa-color-yellow-key:80;--wa-color-green-95:#e3f9e3 ;--wa-color-green-90:#c2f2c1 ;--wa-color-green-80:#93da98 ;--wa-color-green-70:#5dc36f ;--wa-color-green-60:#00ac49 ;--wa-color-green-50:#00883c ;--wa-color-green-40:#036730 ;--wa-color-green-30:#0a5027 ;--wa-color-green-20:#0a3a1d ;--wa-color-green-10:#052310 ;--wa-color-green-05:#031608 ;--wa-color-green:var(--wa-color-green-60);--wa-color-green-key:60;--wa-color-cyan-95:#e3f6fb ;--wa-color-cyan-90:#c5ecf7 ;--wa-color-cyan-80:#7fd6ec ;--wa-color-cyan-70:#2fbedc ;--wa-color-cyan-60:#00a3c0 ;--wa-color-cyan-50:#078098 ;--wa-color-cyan-40:#026274 ;--wa-color-cyan-30:#014c5b ;--wa-color-cyan-20:#003844 ;--wa-color-cyan-10:#002129 ;--wa-color-cyan-05:#00151b ;--wa-color-cyan:var(--wa-color-cyan-70);--wa-color-cyan-key:70;--wa-color-blue-95:#e8f3ff ;--wa-color-blue-90:#d1e8ff ;--wa-color-blue-80:#9fceff ;--wa-color-blue-70:#6eb3ff ;--wa-color-blue-60:#3e96ff ;--wa-color-blue-50:#0071ec ;--wa-color-blue-40:#0053c0 ;--wa-color-blue-30:#003f9c ;--wa-color-blue-20:#002d77 ;--wa-color-blue-10:#001a4e ;--wa-color-blue-05:#000f35 ;--wa-color-blue:var(--wa-color-blue-50);--wa-color-blue-key:50;--wa-color-indigo-95:#f0f2ff ;--wa-color-indigo-90:#dfe5ff ;--wa-color-indigo-80:#bcc7ff ;--wa-color-indigo-70:#9da9ff ;--wa-color-indigo-60:#808aff ;--wa-color-indigo-50:#6163f2 ;--wa-color-indigo-40:#4945cb ;--wa-color-indigo-30:#3933a7 ;--wa-color-indigo-20:#292381 ;--wa-color-indigo-10:#181255 ;--wa-color-indigo-05:#0d0a3a ;--wa-color-indigo:var(--wa-color-indigo-50);--wa-color-indigo-key:50;--wa-color-purple-95:#f7f0ff ;--wa-color-purple-90:#eedfff ;--wa-color-purple-80:#ddbdff ;--wa-color-purple-70:#ca99ff ;--wa-color-purple-60:#b678f5 ;--wa-color-purple-50:#9951db ;--wa-color-purple-40:#7936b3 ;--wa-color-purple-30:#612692 ;--wa-color-purple-20:#491870 ;--wa-color-purple-10:#2d0b48 ;--wa-color-purple-05:#1e0532 ;--wa-color-purple:var(--wa-color-purple-50);--wa-color-purple-key:50;--wa-color-pink-95:#feeff9 ;--wa-color-pink-90:#feddf0 ;--wa-color-pink-80:#fcb5d8 ;--wa-color-pink-70:#f78dbf ;--wa-color-pink-60:#e66ba3 ;--wa-color-pink-50:#c84382 ;--wa-color-pink-40:#9e2a6c ;--wa-color-pink-30:#7d1e58 ;--wa-color-pink-20:#5e1342 ;--wa-color-pink-10:#3c0828 ;--wa-color-pink-05:#28041a ;--wa-color-pink:var(--wa-color-pink-50);--wa-color-pink-key:50;--wa-color-gray-95:#f1f2f3 ;--wa-color-gray-90:#e4e5e9 ;--wa-color-gray-80:#c7c9d0 ;--wa-color-gray-70:#abaeb9 ;--wa-color-gray-60:#9194a2 ;--wa-color-gray-50:#717584 ;--wa-color-gray-40:#545868 ;--wa-color-gray-30:#424554 ;--wa-color-gray-20:#2f323f ;--wa-color-gray-10:#1b1d26 ;--wa-color-gray-05:#101219 ;--wa-color-gray:var(--wa-color-gray-40);--wa-color-gray-key:40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised:white;--wa-color-surface-default:white;--wa-color-surface-lowered:var(--wa-color-neutral-95);--wa-color-surface-border:var(--wa-color-neutral-90);--wa-color-text-normal:var(--wa-color-neutral-10);--wa-color-text-quiet:var(--wa-color-neutral-40);--wa-color-text-link:var(--wa-color-brand-40);--wa-color-overlay-modal:color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 10%;--wa-color-mix-active:var(--wa-color-surface-default) 10%;--wa-color-brand-fill-quiet:var(--wa-color-brand-95);--wa-color-brand-fill-normal:var(--wa-color-brand-90);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-90);--wa-color-brand-border-normal:var(--wa-color-brand-80);--wa-color-brand-border-loud:var(--wa-color-brand-60);--wa-color-brand-on-quiet:var(--wa-color-brand-40);--wa-color-brand-on-normal:var(--wa-color-brand-30);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-95);--wa-color-success-fill-normal:var(--wa-color-success-90);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-90);--wa-color-success-border-normal:var(--wa-color-success-80);--wa-color-success-border-loud:var(--wa-color-success-60);--wa-color-success-on-quiet:var(--wa-color-success-40);--wa-color-success-on-normal:var(--wa-color-success-30);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-95);--wa-color-warning-fill-normal:var(--wa-color-warning-90);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-90);--wa-color-warning-border-normal:var(--wa-color-warning-80);--wa-color-warning-border-loud:var(--wa-color-warning-60);--wa-color-warning-on-quiet:var(--wa-color-warning-40);--wa-color-warning-on-normal:var(--wa-color-warning-30);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-95);--wa-color-danger-fill-normal:var(--wa-color-danger-90);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-90);--wa-color-danger-border-normal:var(--wa-color-danger-80);--wa-color-danger-border-loud:var(--wa-color-danger-60);--wa-color-danger-on-quiet:var(--wa-color-danger-40);--wa-color-danger-on-normal:var(--wa-color-danger-30);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-95);--wa-color-neutral-fill-normal:var(--wa-color-neutral-90);--wa-color-neutral-fill-loud:var(--wa-color-neutral-20);--wa-color-neutral-border-quiet:var(--wa-color-neutral-90);--wa-color-neutral-border-normal:var(--wa-color-neutral-80);--wa-color-neutral-border-loud:var(--wa-color-neutral-60);--wa-color-neutral-on-quiet:var(--wa-color-neutral-40);--wa-color-neutral-on-normal:var(--wa-color-neutral-30);--wa-color-neutral-on-loud:white;}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised:var(--wa-color-neutral-10);--wa-color-surface-default:var(--wa-color-neutral-05);--wa-color-surface-lowered:color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border:var(--wa-color-neutral-20);--wa-color-text-normal:var(--wa-color-neutral-95);--wa-color-text-quiet:var(--wa-color-neutral-60);--wa-color-text-link:var(--wa-color-brand-70);--wa-color-overlay-modal:color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 20%;--wa-color-mix-active:var(--wa-color-surface-default) 20%;--wa-color-brand-fill-quiet:var(--wa-color-brand-10);--wa-color-brand-fill-normal:var(--wa-color-brand-20);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-20);--wa-color-brand-border-normal:var(--wa-color-brand-30);--wa-color-brand-border-loud:var(--wa-color-brand-40);--wa-color-brand-on-quiet:var(--wa-color-brand-60);--wa-color-brand-on-normal:var(--wa-color-brand-70);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-10);--wa-color-success-fill-normal:var(--wa-color-success-20);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-20);--wa-color-success-border-normal:var(--wa-color-success-30);--wa-color-success-border-loud:var(--wa-color-success-40);--wa-color-success-on-quiet:var(--wa-color-success-60);--wa-color-success-on-normal:var(--wa-color-success-70);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-10);--wa-color-warning-fill-normal:var(--wa-color-warning-20);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-20);--wa-color-warning-border-normal:var(--wa-color-warning-30);--wa-color-warning-border-loud:var(--wa-color-warning-40);--wa-color-warning-on-quiet:var(--wa-color-warning-60);--wa-color-warning-on-normal:var(--wa-color-warning-70);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-10);--wa-color-danger-fill-normal:var(--wa-color-danger-20);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-20);--wa-color-danger-border-normal:var(--wa-color-danger-30);--wa-color-danger-border-loud:var(--wa-color-danger-40);--wa-color-danger-on-quiet:var(--wa-color-danger-60);--wa-color-danger-on-normal:var(--wa-color-danger-70);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-10);--wa-color-neutral-fill-normal:var(--wa-color-neutral-20);--wa-color-neutral-fill-loud:var(--wa-color-neutral-90);--wa-color-neutral-border-quiet:var(--wa-color-neutral-20);--wa-color-neutral-border-normal:var(--wa-color-neutral-30);--wa-color-neutral-border-loud:var(--wa-color-neutral-40);--wa-color-neutral-on-quiet:var(--wa-color-neutral-60);--wa-color-neutral-on-normal:var(--wa-color-neutral-70);--wa-color-neutral-on-loud:var(--wa-color-neutral-05);}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body:ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading:var(--wa-font-family-body);--wa-font-family-code:ui-monospace, monospace;--wa-font-family-longform:ui-serif, serif;--wa-font-size-scale:1;--wa-font-size-3xs:round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs:round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs:round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s:round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m:calc(1rem * var(--wa-font-size-scale));--wa-font-size-l:round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl:round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl:round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl:round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl:round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl:round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller:round(calc(1em / 1.125), 1px);--wa-font-size-larger:round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light:300;--wa-font-weight-normal:400;--wa-font-weight-semibold:500;--wa-font-weight-bold:600;--wa-font-weight-body:var(--wa-font-weight-normal);--wa-font-weight-heading:var(--wa-font-weight-bold);--wa-font-weight-code:var(--wa-font-weight-normal);--wa-font-weight-longform:var(--wa-font-weight-normal);--wa-font-weight-action:var(--wa-font-weight-semibold);--wa-line-height-condensed:1.2;--wa-line-height-normal:1.6;--wa-line-height-expanded:2;--wa-link-decoration-default:underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover:underline;--wa-space-scale:1;--wa-space-3xs:calc(var(--wa-space-scale) * 0.125rem);--wa-space-2xs:calc(var(--wa-space-scale) * 0.25rem);--wa-space-xs:calc(var(--wa-space-scale) * 0.5rem);--wa-space-s:calc(var(--wa-space-scale) * 0.75rem);--wa-space-m:calc(var(--wa-space-scale) * 1rem);--wa-space-l:calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl:calc(var(--wa-space-scale) * 2rem);--wa-space-2xl:calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl:calc(var(--wa-space-scale) * 3rem);--wa-space-4xl:calc(var(--wa-space-scale) * 4rem);--wa-space-5xl:calc(var(--wa-space-scale) * 5rem);--wa-content-spacing:var(--wa-space-l);--wa-border-style:solid;--wa-border-width-scale:1;--wa-border-width-s:calc(var(--wa-border-width-scale) * 0.0625rem);--wa-border-width-m:calc(var(--wa-border-width-scale) * 0.125rem);--wa-border-width-l:calc(var(--wa-border-width-scale) * 0.1875rem);--wa-border-radius-scale:1;--wa-border-radius-s:calc(var(--wa-border-radius-scale) * 0.1875rem);--wa-border-radius-m:calc(var(--wa-border-radius-scale) * 0.375rem);--wa-border-radius-l:calc(var(--wa-border-radius-scale) * 0.75rem);--wa-border-radius-pill:9999px;--wa-border-radius-circle:50%;--wa-border-radius-square:0px;--wa-focus-ring-style:solid;--wa-focus-ring-width:0.1875rem;--wa-focus-ring:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset:0.0625rem;--wa-shadow-offset-x-scale:0;--wa-shadow-offset-x-s:calc(var(--wa-shadow-offset-x-scale) * 0.125rem);--wa-shadow-offset-x-m:calc(var(--wa-shadow-offset-x-scale) * 0.25rem);--wa-shadow-offset-x-l:calc(var(--wa-shadow-offset-x-scale) * 0.5rem);--wa-shadow-offset-y-scale:1;--wa-shadow-offset-y-s:calc(var(--wa-shadow-offset-y-scale) * 0.125rem);--wa-shadow-offset-y-m:calc(var(--wa-shadow-offset-y-scale) * 0.25rem);--wa-shadow-offset-y-l:calc(var(--wa-shadow-offset-y-scale) * 0.5rem);--wa-shadow-blur-scale:1;--wa-shadow-blur-s:calc(var(--wa-shadow-blur-scale) * 0.125rem);--wa-shadow-blur-m:calc(var(--wa-shadow-blur-scale) * 0.25rem);--wa-shadow-blur-l:calc(var(--wa-shadow-blur-scale) * 0.5rem);--wa-shadow-spread-scale:-0.5;--wa-shadow-spread-s:calc(var(--wa-shadow-spread-scale) * 0.125rem);--wa-shadow-spread-m:calc(var(--wa-shadow-spread-scale) * 0.25rem);--wa-shadow-spread-l:calc(var(--wa-shadow-spread-scale) * 0.5rem);--wa-shadow-s:var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)       var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m:var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)       var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l:var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)       var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing:ease;--wa-transition-slow:300ms;--wa-transition-normal:150ms;--wa-transition-fast:75ms;--wa-form-control-background-color:var(--wa-color-surface-default);--wa-form-control-border-color:var(--wa-color-neutral-border-loud);--wa-form-control-border-style:var(--wa-border-style);--wa-form-control-border-width:var(--wa-border-width-s);--wa-form-control-border-radius:var(--wa-border-radius-m);--wa-form-control-activated-color:var(--wa-color-brand-fill-loud);--wa-form-control-label-color:var(--wa-color-text-normal);--wa-form-control-label-font-weight:var(--wa-font-weight-semibold);--wa-form-control-label-line-height:var(--wa-line-height-condensed);--wa-form-control-value-color:var(--wa-color-text-normal);--wa-form-control-value-font-weight:var(--wa-font-weight-body);--wa-form-control-value-line-height:var(--wa-line-height-condensed);--wa-form-control-hint-color:var(--wa-color-text-quiet);--wa-form-control-hint-font-weight:var(--wa-font-weight-body);--wa-form-control-hint-line-height:var(--wa-line-height-normal);--wa-form-control-placeholder-color:var(--wa-color-gray-50);--wa-form-control-required-content:'*';--wa-form-control-required-content-color:inherit;--wa-form-control-required-content-offset:0.1em;--wa-form-control-padding-block:0.75em;--wa-form-control-padding-inline:1em;--wa-form-control-height:round(       calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),       1px     );--wa-form-control-toggle-size:round(1.25em, 1px);--wa-button-transform-hover:none;--wa-button-transform-active:scale(0.9875);--wa-panel-border-style:var(--wa-border-style);--wa-panel-border-width:var(--wa-border-width-s);--wa-panel-border-radius:var(--wa-border-radius-l);--wa-tooltip-arrow-size:0.375rem;--wa-tooltip-background-color:var(--wa-color-text-normal);--wa-tooltip-border-color:var(--wa-tooltip-background-color);--wa-tooltip-border-style:var(--wa-border-style);--wa-tooltip-border-width:var(--wa-border-width-s);--wa-tooltip-border-radius:var(--wa-border-radius-s);--wa-tooltip-content-color:var(--wa-color-surface-default);--wa-tooltip-font-size:var(--wa-font-size-s);--wa-tooltip-line-height:var(--wa-line-height-normal);}:is(html,body):has(wa-page){min-height:100%;padding:0;margin:0}}wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:dir(rtl) .toast-close-button{right:auto;left:-0.3em;float:left}:dir(rtl) #toast-container>div{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}:dir(rtl) #toast-container.toast-top-left,:dir(rtl) #toast-container.toast-bottom-left{left:auto;right:12px}:dir(rtl) #toast-container.toast-top-right,:dir(rtl) #toast-container.toast-bottom-right{right:auto;left:12px}:dir(rtl) .toast-progress{left:auto;right:0}.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}.ir__drawer{text-align:start !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-inline-start:var(--ir-drawer-padding-inline-start, var(--ir-drawer-padding-left, var(--spacing)));padding-inline-end:var(--ir-drawer-padding-inline-end, var(--ir-drawer-padding-right, var(--spacing)));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.my-custom-style{background:#000;color:white}html:dir(rtl),body:dir(rtl){direction:rtl !important;text-align:start}:root{--ir-color-muted-background:#f2f3f8;--ir-color-loader:rgba(255, 255, 255, 0.2);--error-border-width:2px;--ir-color-border-error:var(--wa-color-danger-border-loud)}.wa-dark{--ir-color-loader:rgba(0, 0, 0, 0.2);--ir-color-muted-background:#12141a;--ir-color-muted-background:#07090d}body{background-color:var(--ir-color-muted-background) !important;color:var(--wa-color-text-normal)}h1,h2,h3,h4,h5,h6{color:var(--wa-color-text-normal) !important}html{font-size:14px !important}.truncate{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative}.ir-price{font-family:inherit;font-size:1rem;font-weight:800;text-align:end;white-space:nowrap;color:var(--wa-color-text-normal);margin:0;padding:0}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl);margin:0;padding:0}:root{--wa-form-control-required-content-color:var(--wa-color-danger-border-loud, #f3676c)}.label-on-left{display:grid;gap:var(--wa-space-m)}wa-card::part(base){box-sizing:border-box}@media (min-width: 768px){.label-on-left{align-items:center;grid-template-columns:auto 1fr}.label-on-left wa-switch::part(base),.label-on-left wa-select::part(form-control),.label-on-left wa-select,.label-on-left wa-switch,.label-on-left wa-input,.label-on-left wa-textarea{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-l);align-items:center}.label-on-left wa-switch::part(base){flex-direction:row-reverse}.label-on-left wa-switch::part(base)>*{justify-self:flex-start;justify-content:flex-start}.label-on-left ::part(label){justify-content:flex-end}.label-on-left ::part(hint){grid-column:2}}.ir-preview-print-container{position:fixed;inset:0;opacity:0;pointer-events:none;z-index:-1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}@media print{body.ir-preview-dialog-print-mode{background:#fff !important}body.ir-preview-dialog-print-mode>*:not(.ir-preview-print-container){display:none !important}body.ir-preview-dialog-print-mode .ir-preview-print-container{opacity:1;pointer-events:auto;position:static;z-index:auto;width:100%;min-height:auto;margin:0 auto;padding:1.5rem;box-sizing:border-box}}@page {margin:0.5in}.ir__field-group{display:flex;width:100%}.ir__field-group>:first-child::part(base),.ir__field-group>:first-child::part(combobox){border-start-end-radius:0;border-end-end-radius:0}.ir__field-group>:first-child{z-index:1}.ir__field-group .--grow{flex:1 1 0%}.ir__field-group>:last-child::part(base),.ir__field-group>:last-child::part(combobox){border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.ir__field-group>:not(:first-child):not(:last-child)::part(combobox),.ir__field-group>:not(:first-child):not(:last-child)::part(base){border-radius:0;border-inline-start:0}.ir__field-group>:not(:first-child):not(:last-child)[open],.ir__field-group>:not(:first-child):not(:last-child):focus-within,.ir__field-group>:not(:first-child):not(:last-child):focus-visible,.ir__field-group>:last-child[open],.ir__field-group>:last-child:focus-visible,.ir__field-group>:last-child:focus-within{z-index:2}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    extraResources = '';
    disableResourceInjection;
    resources = onlineResources;
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.disableResourceInjection) {
            return;
        }
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        if (this.disableResourceInjection) {
            return;
        }
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return null;
    }
    static get watchers() { return {
        "extraResources": [{
                "hrefsChanged": 0
            }]
    }; }
};
IrCommon.style = appCss();

const irCustomButtonCss = () => `:host{display:block}.ir__custom-button{width:100%}.ir__custom-button.--icon::part(base){height:auto;width:auto;padding:0}.ir__custom-button::part(base){height:var(--ir-c-btn-height, var(--wa-form-control-height));padding:var(--ir-c-btn-padding, 0 var(--wa-form-control-padding-inline));font-size:var(--ir-c-btn-font-size, auto)}.ir__custom-button.--link::part(base){height:fit-content;padding:0}.ir-button__link:focus{outline:none}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.ir-button__link{display:inline-flex;align-items:center;justify-content:center;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-brand-fill-loud);background-color:transparent;border-color:transparent}.ir-button__link:hover,.ir-button__link:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}`;

const IrCustomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler");
    }
    get el() { return index.getElement(this); }
    link;
    iconBtn;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant;
    /** The button's visual appearance. */
    appearance;
    /** The button's size. */
    size = 's';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret;
    /** Disables the button. Does not apply to link buttons. */
    disabled;
    /** Draws the button in a loading state. */
    loading;
    /** Draws a pill-style button with rounded edges. */
    pill;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type = 'button';
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target;
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download;
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form;
    /** Used to override the form owner's `action` attribute. */
    formAction;
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype;
    /** Used to override the form owner's `method` attribute.  */
    formMethod;
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate;
    /** Used to override the form owner's `target` attribute. */
    formTarget;
    clickHandler;
    handleButtonClick(e) {
        this.clickHandler.emit(e);
    }
    render() {
        if (this.link) {
            return (index.h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" })));
        }
        return (index.h(index.Host, null, index.h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = irCustomButtonCss();

const irInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}`;

const IrInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change");
        this.inputBlur = index.createEvent(this, "input-blur");
        this.inputFocus = index.createEvent(this, "inputFocus");
        this.inputCleared = index.createEvent(this, "inputCleared");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return index.getElement(this); }
    name;
    /** The value of the input. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 's';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    textChange;
    inputBlur;
    inputFocus;
    inputCleared;
    isValid = true;
    slotState = new Map();
    _mask;
    inputRef;
    animationFrame;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
        this.updateSlotState();
    }
    componentDidLoad() {
        if (this.disabled) {
            this.inputRef.disabled = this.disabled;
        }
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.destroyMask();
        this.removeSlotListeners();
    }
    handleDisabledChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputRef.disabled = newValue;
        }
    }
    handleMaskPropsChange() {
        if (!this.inputRef)
            return;
        const hasMask = Boolean(this.resolveMask());
        if (!hasMask) {
            this.destroyMask();
            return;
        }
        this.rebuildMask();
    }
    handleAriaInvalidChange(e) {
        this.isValid = !JSON.parse(e);
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (!this.mask && this.isNumericField()) {
            const normalized = number.normalizeNumericInput(nextValue);
            if (normalized !== nextValue && this.inputRef) {
                // Rewrite the field directly: if the Latin value equals the current one, no re-render would fix the display.
                this.inputRef.value = normalized;
            }
            nextValue = normalized;
        }
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.internals.setFormValue(nextValue ?? '');
        this.textChange.emit(nextValue ?? '');
    };
    /** Unmasked phone/number fields get Latin digits too; free-text fields are left as typed. */
    isNumericField() {
        return ['tel', 'number'].includes(this.type) || ['tel', 'numeric', 'decimal'].includes(this.inputmode);
    }
    async initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        await customElements.whenDefined('wa-input'); // optional, but explicit
        await this.inputRef.updateComplete;
        const nativeInput = this.inputRef.input;
        if (!nativeInput)
            return;
        this._mask = index$1.IMask(nativeInput, maskOpts);
        if (this.value) {
            if (this.returnMaskedValue) {
                this._mask.unmaskedValue = this.value;
            }
            else {
                this._mask.value = this.value;
            }
        }
        this._mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            const value = isEmpty ? '' : this.returnMaskedValue ? this._mask.unmaskedValue : this._mask.value;
            this.handleInput(value);
        });
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        this._mask?.destroy();
        this._mask = undefined;
        this.clearAnimationFrame();
    }
    clearAnimationFrame() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
    buildMaskOptions() {
        const resolvedMask = this.resolveMask();
        if (!resolvedMask)
            return;
        const maskOpts = typeof resolvedMask === 'object' && resolvedMask !== null && !Array.isArray(resolvedMask) ? { ...resolvedMask } : { mask: resolvedMask };
        if (this.min !== undefined) {
            maskOpts.min = this.min;
        }
        if (this.max !== undefined) {
            maskOpts.max = this.max;
        }
        return masks.withLatinDigits(maskOpts);
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks.masks[this.mask];
        }
        return this.mask;
    }
    handleChange = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.mask)
            this.handleInput(e.target.value);
    };
    handleClear = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputCleared.emit();
        if (this._mask) {
            this._mask.value = '';
        }
        this.handleInput('');
    };
    handleBlur = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputBlur.emit();
    };
    handleFocus = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputFocus.emit();
    };
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    async focusInput() {
        this.inputRef?.focus();
    }
    async blurInput() {
        this.inputRef?.blur();
    }
    /**
     * Returns the native `<input>` element nested inside `wa-input`.
     * Needed by composite controls (e.g. `ir-autocomplete`) to wire ARIA
     * combobox attributes and element reflection onto the real input.
     */
    async getNativeInput() {
        if (!this.inputRef)
            return undefined;
        await this.inputRef.updateComplete;
        return this.inputRef.input;
    }
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (index.h(index.Host, { key: 'b85cd468f4874752e24a116fa6535a15d3182944' }, index.h("wa-input", { key: '8c2d42e78117f24d54395153d31229d15afd59de', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && index.h("slot", { key: '3899296876f752c921aa7ceca47cf912fc6d8e19', name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { key: 'f65a0752d0f249c6ccb40311e493ad7f2b84eae2', name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { key: '75e6aba6f58152dfd2ad7224456e6521f16fef86', name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { key: 'cbf0d72831995628b99b643b60a3635f9717a7d4', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { key: 'b06cdbce1c0973b1d103088aeaa85daf601bd6e9', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { key: '78226c9e8c6d8f1a258b51e444196ea6d446e360', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { key: '505fc6470cf30ef28d25b99fb75a113654edc11a', name: "hint", slot: "hint" }))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 0
            }],
        "mask": [{
                "handleMaskPropsChange": 0
            }],
        "min": [{
                "handleMaskPropsChange": 0
            }],
        "max": [{
                "handleMaskPropsChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrInput.style = irInputCss();

const irToastCss = () => `button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-slide-sign:1;--rd-success:#2b9a66;position:fixed;bottom:0;inset-inline-end:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.sc-ir-toast-h:dir(rtl){--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h,[position='bottom-left'].sc-ir-toast-h{--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h:dir(rtl),[position='bottom-left'].sc-ir-toast-h:dir(rtl){--rd-slide-sign:1}[position='top-left'].sc-ir-toast-h{top:0;inset-inline-start:0}[position='top-right'].sc-ir-toast-h{top:0;inset-inline-end:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;inset-inline-start:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;inset-inline-end:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px,     hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}`;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'top-right';
    get providerPosition() {
        const map = {
            'top-left': 'top-start',
            'top-right': 'top-end',
            'bottom-left': 'bottom-start',
            'bottom-right': 'bottom-end',
        };
        return map[this.position] ?? 'top-end';
    }
    render() {
        // ir-toast-provider renders the ir-toast-item stack and listens for
        // `toast` events on the body, so this component is a thin shell kept
        // for backwards compatibility with the many pages that embed it.
        return index.h("ir-toast-provider", { key: 'ef28502025fd78c750bf2de556491d9d573bb06a', position: this.providerPosition });
    }
};
IrToast.style = irToastCss();

const irToastItemCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden;animation:toast-enter 280ms cubic-bezier(0.16, 1, 0.3, 1) both}:host([data-placement^='bottom']) .toast-item{animation-name:toast-enter-up}:host([data-leaving]) .toast-item{animation:toast-exit 200ms cubic-bezier(0.23, 1, 0.32, 1) both;pointer-events:none}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}::slotted([data-toast-title]){display:block;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}::slotted([data-toast-description]){display:block;margin-top:2px;color:var(--wa-color-text-quiet)}::slotted([data-toast-action]){display:inline-flex;margin-top:var(--wa-space-s);padding:0.25rem 0.625rem;border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-s);background:transparent;color:var(--accent-color);font:inherit;font-size:var(--wa-font-size-s);font-weight:600;cursor:pointer;transition:background-color var(--wa-transition-fast)}::slotted([data-toast-action]:hover){background:var(--wa-color-neutral-fill-quiet)}::slotted([data-toast-action]:focus-visible){outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px}.close-button wa-progress-ring{--size:30px;--track-width:2px;--indicator-width:2px;--track-color:var(--wa-color-surface-border);--indicator-color:var(--accent-color);--indicator-transition-duration:150ms;font-size:var(--wa-font-size-xs)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}.close-button:hover{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-text-normal)}.close-button:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:-2px}@keyframes toast-enter{from{opacity:0;transform:translateY(-12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-enter-up{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-exit{to{opacity:0;transform:scale(0.95)}}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion: reduce){.toast-item,:host([data-placement^='bottom']) .toast-item{animation:toast-fade-in 120ms linear both}:host([data-leaving]) .toast-item{animation:none}}:host([data-entered]:not([data-leaving])) .toast-item{animation:none}`;

const IrToastItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDismiss = index.createEvent(this, "irDismiss");
    }
    get el() { return index.getElement(this); }
    variant = 'neutral';
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration = 5000;
    /** Whether the close button is rendered. */
    dismissible = true;
    progress = 100;
    leaving = false;
    entered = false;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss;
    timer;
    remainingMs;
    resumedAt;
    timerStarted = false;
    hiding = false;
    hovered = false;
    focused = false;
    componentDidLoad() {
        if (!this.timerStarted) {
            this.startTimer();
        }
        // Once the enter animation has played, mark the host so re-parenting (the
        // provider moving the toast layer in/out of a modal dialog) never replays it.
        const markEntered = () => {
            clearTimeout(fallback);
            this.entered = true;
        };
        const fallback = window.setTimeout(markEntered, 500);
        this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', markEntered, { once: true });
    }
    connectedCallback() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        // Re-parenting disconnects and reconnects the element; resume the countdown
        // with whatever time was left when it was paused.
        if (this.timerStarted && !this.hovered && !this.focused) {
            this.resumeTimer();
        }
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.pauseTimer();
    }
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    async startTimer() {
        this.timerStarted = true;
        if (this.hovered || this.focused) {
            return;
        }
        this.resumeTimer();
    }
    /** Plays the exit animation, then emits `irDismiss`. */
    async hide() {
        if (this.hiding) {
            return;
        }
        this.hiding = true;
        this.pauseTimer();
        if (!this.prefersReducedMotion()) {
            this.leaving = true;
            await new Promise(resolve => {
                const done = () => {
                    clearTimeout(fallback);
                    resolve();
                };
                // Safety timeout in case animationend never fires (display:none ancestors, etc.)
                const fallback = window.setTimeout(done, 300);
                this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', done, { once: true });
            });
        }
        this.irDismiss.emit();
    }
    get hasTimer() {
        return Number.isFinite(this.duration) && this.duration > 0;
    }
    prefersReducedMotion() {
        return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    }
    // The countdown is wall-clock based so it survives pauses, re-parenting, and
    // interval throttling in background tabs without drifting.
    resumeTimer() {
        if (!this.hasTimer || this.hiding || this.timer || document.hidden) {
            return;
        }
        this.remainingMs = this.remainingMs ?? this.duration;
        this.resumedAt = Date.now();
        this.timer = window.setInterval(() => {
            const left = this.remainingMs - (Date.now() - this.resumedAt);
            this.progress = Math.max(0, (left / this.duration) * 100);
            if (left <= 0) {
                this.hide();
            }
        }, 100);
    }
    pauseTimer() {
        if (this.timer) {
            this.remainingMs = Math.max(0, this.remainingMs - (Date.now() - this.resumedAt));
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    handleVisibilityChange = () => {
        if (document.hidden) {
            this.pauseTimer();
        }
        else {
            this.updateInteraction();
        }
    };
    updateInteraction() {
        if (this.hovered || this.focused) {
            // Reset the countdown while the user is interacting; it restarts from
            // the full duration once they move away.
            this.pauseTimer();
            this.remainingMs = this.duration;
            this.progress = 100;
        }
        else if (this.timerStarted) {
            this.resumeTimer();
        }
    }
    handleMouseEnter = () => {
        this.hovered = true;
        this.updateInteraction();
    };
    handleMouseLeave = () => {
        this.hovered = false;
        this.updateInteraction();
    };
    handleFocusIn = () => {
        this.focused = true;
        this.updateInteraction();
    };
    handleFocusOut = () => {
        this.focused = false;
        this.updateInteraction();
    };
    handleClose = () => {
        this.hide();
    };
    render() {
        return (index.h(index.Host, { key: '95b5a9f2270885d9b8559cc78becebcabfccb697', "data-leaving": this.leaving ? 'true' : undefined, "data-entered": this.entered ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: 'bd39e616114318fb19f8fd101de3ba163b48e488', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, index.h("div", { key: '791af0626ff6bfada42ee20669ab091604719f01', part: "accent", class: "accent" }), index.h("div", { key: '7186bacb6b1741e03bea797cd1fc9d72061c58fb', part: "icon", class: "icon" }, index.h("slot", { key: '8079a5bc27a1322bcd170651f0a7faa51b9c1a58', name: "icon" })), index.h("div", { key: '21cc2e4f76e67142d7cfd612d5fa757051ede44c', part: "content", class: "content" }, index.h("slot", { key: '4adf4d8404a257a08b17dd083124413c74c7052a' })), this.dismissible && (index.h("button", { key: '00ce73ea314d684724426d7ce9e4bb902ac5c505', part: "close-button", class: "close-button", type: "button", "aria-label": t.t('Lcz_CloseNotification', { fallback: 'Close notification' }), onClick: this.handleClose }, this.hasTimer ? (index.h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
    }
};
IrToastItem.style = irToastItemCss();

const irToastProviderCss = () => `:host{display:contents}`;

// In current Chrome, anything outside a modal dialog (`showModal()`) is inert —
// including popovers shown *after* the dialog, even though they paint above it.
// The only place a toast stays clickable while an ir-drawer/wa-dialog is open is
// *inside* the topmost modal dialog's subtree. The provider therefore keeps all
// toasts in a single fixed "layer" element that lives in document.body as a
// popover="manual" (top layer) when no modal is open, and re-parents into the
// topmost modal dialog whenever one opens.
const EDGE_PADDING = 16; // px from screen edges
const ITEM_GAP = 8; // px between toasts
// Pages and feature roots alike embed ir-toast (which renders a provider), so
// several providers can be connected at once — each listening for `toast`
// events on the body. Only the most recently connected provider handles them,
// so one event never produces duplicate toasts.
const connectedProviders = [];
/** `matches()` that tolerates engines without the pseudo-class (e.g. Stencil mock-doc). */
function safeMatches(el, selector) {
    try {
        return el.matches(selector);
    }
    catch (e) {
        return false;
    }
}
/** Finds the native <dialog> rendered by a component (e.g. ir-drawer → wa-drawer → dialog). */
function findDialogIn(el) {
    if (!el) {
        return null;
    }
    if (el instanceof HTMLDialogElement) {
        return el;
    }
    const root = el.shadowRoot;
    if (!root) {
        return null;
    }
    const direct = root.querySelector('dialog');
    if (direct) {
        return direct;
    }
    for (const child of Array.from(root.querySelectorAll('*'))) {
        const nested = findDialogIn(child);
        if (nested) {
            return nested;
        }
    }
    return null;
}
const IrToastProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toastAction = index.createEvent(this, "toastAction");
    }
    position = 'top-end';
    /** Pins the toast layer to RTL. Leave unset to inherit the document direction. */
    rtl = false;
    duration = 5000;
    /** Maximum number of toasts shown at once; when exceeded, the oldest are dismissed. */
    maxToasts = 5;
    /** Emitted when a toast's action button is clicked. */
    toastAction;
    items = [];
    layer = null;
    liveRegion = null;
    modalStack = [];
    positionCache = new Map();
    hostDialog = null;
    connectedCallback() {
        connectedProviders.push(this);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        const index = connectedProviders.indexOf(this);
        if (index > -1) {
            connectedProviders.splice(index, 1);
        }
        document.removeEventListener('keydown', this.handleKeyDown);
        this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
        this.hostDialog = null;
        this.layer?.remove();
        this.layer = null;
        this.liveRegion = null;
        this.items = [];
        this.modalStack = [];
    }
    handleToast(event) {
        if (connectedProviders[connectedProviders.length - 1] !== this) {
            return;
        }
        const detail = event?.detail || {};
        // Legacy IToast emitters (ir-interceptor, booking details, …) often send an
        // empty description and put the message in `title`, or vice versa.
        const title = detail.title || detail.description || t.t('Lcz_Notification', { fallback: 'Notification' });
        const payload = {
            ...detail,
            title,
            description: detail.title ? detail.description || undefined : undefined,
            type: this.normalizeType(detail.type),
        };
        this.addToast(payload);
    }
    // A modal dialog opening makes everything outside it inert; track it and move
    // the toast layer inside so toasts stay visible and clickable above it.
    handleOverlayShow(event) {
        const dialog = findDialogIn(event.target);
        if (!dialog) {
            return;
        }
        this.modalStack = this.modalStack.filter(d => d !== dialog);
        this.modalStack.push(dialog);
        // Defer so the dialog is actually modal (showModal may run after the event).
        requestAnimationFrame(() => this.relocateLayer());
    }
    // Wrapper components (ir-dialog) stop the wa-* events and re-emit them under
    // their own names, so both vocabularies must be listened for. Only the
    // after-hide events are reliable for relocation: at wa-hide/irDialogHide time
    // the native dialog is still `:modal` for the duration of the close animation.
    handleOverlayHide() {
        if (!this.layer) {
            return;
        }
        requestAnimationFrame(() => this.relocateLayer());
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const type = toast.type ?? 'info';
        const item = document.createElement('ir-toast-item');
        item.variant = this.mapVariant(type);
        item.duration = toast.duration ?? this.duration;
        item.dismissible = toast.dismissible ?? true;
        item.setAttribute('data-placement', this.position);
        Object.assign(item.style, {
            pointerEvents: 'auto',
            minWidth: '20rem',
            maxWidth: `min(28rem, calc(100vw - ${EDGE_PADDING * 2}px))`,
        });
        item.append(this.buildIcon(type), ...this.buildContent(id, toast));
        item.addEventListener('irDismiss', () => this.destroyItem(item));
        const layer = this.ensureLayer();
        this.relocateLayer();
        this.capturePositions();
        layer.prepend(item);
        this.items.unshift({ id, el: item });
        for (const extra of this.items.slice(this.maxToasts)) {
            extra.el.hide();
        }
        this.showLayerIfNeeded();
        requestAnimationFrame(() => this.animatePositions());
        this.announce(`${this.typeLabel(type)}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`, type === 'error' || type === 'danger');
        return id;
    }
    async removeToast(id) {
        const entry = this.items.find(item => item.id === id);
        if (!entry) {
            return;
        }
        await entry.el.hide();
    }
    async clearAllToasts() {
        await Promise.all(this.items.map(({ el }) => el.hide()));
    }
    handleHostDialogClose = () => {
        requestAnimationFrame(() => this.relocateLayer());
    };
    handleKeyDown = async (event) => {
        // Let modal drawers/dialogs consume Escape first (they mark it defaultPrevented).
        await new Promise(resolve => setTimeout(resolve));
        if (event.key === 'Escape' && !event.defaultPrevented && this.items.length > 0) {
            event.preventDefault();
            this.removeToast(this.items[0].id);
        }
    };
    destroyItem(el) {
        if (!el.parentElement) {
            return;
        }
        this.capturePositions();
        el.remove();
        this.items = this.items.filter(item => item.el !== el);
        if (this.items.length === 0) {
            this.hideLayer();
        }
        else {
            requestAnimationFrame(() => this.animatePositions());
        }
    }
    ensureLayer() {
        if (this.layer) {
            this.applyLayerPlacement();
            return this.layer;
        }
        const layer = document.createElement('div');
        layer.setAttribute('data-ir-toast-layer', '');
        Object.assign(layer.style, {
            position: 'fixed',
            display: 'flex',
            gap: `${ITEM_GAP}px`,
            padding: `${EDGE_PADDING}px`,
            boxSizing: 'border-box',
            left: '0',
            right: '0',
            width: 'auto',
            height: 'auto',
            maxHeight: '100dvh',
            margin: '0',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
            pointerEvents: 'none',
            zIndex: '2147483647',
        });
        // Visually hidden live region travels with the layer so announcements are
        // never inside an inert subtree while a modal drawer is open.
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('data-ir-toast-live-region', '');
        liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip-path:inset(50%);pointer-events:none;';
        layer.append(liveRegion);
        this.layer = layer;
        this.liveRegion = liveRegion;
        this.applyLayerPlacement();
        return layer;
    }
    applyLayerPlacement() {
        if (!this.layer) {
            return;
        }
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const s = this.layer.style;
        s.flexDirection = vertical === 'bottom' ? 'column-reverse' : 'column';
        s.top = vertical === 'bottom' ? 'auto' : '0';
        s.bottom = vertical === 'bottom' ? '0' : 'auto';
        s.alignItems = horizontal === 'center' ? 'center' : horizontal === 'start' ? 'flex-start' : 'flex-end';
        // The layer lives in document.body (and is re-parented into modal dialogs), so it already
        // inherits the document direction. Only an explicit `rtl` opt-in pins it; forcing 'ltr'
        // otherwise would un-mirror every toast on an RTL page.
        if (this.rtl) {
            this.layer.setAttribute('dir', 'rtl');
        }
        else {
            this.layer.removeAttribute('dir');
        }
    }
    /** Deep-scans the document (piercing shadow roots) for open modal dialogs. */
    findOpenModalDialogs() {
        const found = [];
        const walk = (root) => {
            for (const dialog of Array.from(root.querySelectorAll('dialog'))) {
                if (safeMatches(dialog, ':modal')) {
                    found.push(dialog);
                }
            }
            for (const el of Array.from(root.querySelectorAll('*'))) {
                if (el.shadowRoot) {
                    walk(el.shadowRoot);
                }
            }
        };
        walk(document);
        return found;
    }
    /** Moves the layer into the topmost open modal dialog, or back to document.body. */
    relocateLayer() {
        const layer = this.layer;
        if (!layer) {
            return;
        }
        // Event tracking can miss dialogs opened before this provider connected,
        // so always reconcile against the dialogs that are actually open.
        const open = this.findOpenModalDialogs();
        this.modalStack = this.modalStack.filter(dialog => open.includes(dialog));
        const host = this.modalStack[this.modalStack.length - 1] ?? open[open.length - 1] ?? document.body;
        const inDialog = host !== document.body;
        // Safety net: the native `close` event always fires on the hosting <dialog>
        // itself, even when a wrapper component swallows the wa-* events, so the
        // layer can never be stranded inside a closed dialog.
        if (this.hostDialog !== host) {
            this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
            this.hostDialog = inDialog ? host : null;
            this.hostDialog?.addEventListener('close', this.handleHostDialogClose);
        }
        if (layer.parentNode !== host) {
            if (safeMatches(layer, ':popover-open')) {
                layer.hidePopover?.();
            }
            if (inDialog) {
                layer.removeAttribute('popover');
            }
            else {
                layer.setAttribute('popover', 'manual');
            }
            host.append(layer);
            // Re-parenting disconnects the items, which clears their countdown timers
            // (and Stencil may run the deferred disconnect *after* reconnect). Restart
            // them once the move has fully settled.
            requestAnimationFrame(() => {
                for (const { el } of this.items) {
                    el.startTimer?.();
                }
            });
        }
        else if (!inDialog && !layer.hasAttribute('popover')) {
            layer.setAttribute('popover', 'manual');
        }
        this.showLayerIfNeeded();
    }
    showLayerIfNeeded() {
        const layer = this.layer;
        if (!layer || this.items.length === 0) {
            return;
        }
        if (layer.hasAttribute('popover') && !safeMatches(layer, ':popover-open')) {
            try {
                layer.showPopover?.();
            }
            catch (e) {
                // Popover may be mid-transition
            }
        }
    }
    hideLayer() {
        const layer = this.layer;
        if (layer && safeMatches(layer, ':popover-open')) {
            layer.hidePopover?.();
        }
    }
    announce(text, assertive) {
        const trimmed = text.trim();
        if (!this.liveRegion || !trimmed) {
            return;
        }
        const announcer = document.createElement('div');
        announcer.setAttribute('role', assertive ? 'alert' : 'status');
        announcer.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        this.liveRegion.append(announcer);
        // Double rAF so assistive tech registers the live region before content lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                announcer.textContent = trimmed;
            });
        });
        setTimeout(() => announcer.remove(), 1000);
    }
    buildIcon(type) {
        const names = {
            success: 'circle-check',
            warning: 'triangle-exclamation',
            error: 'circle-xmark',
            danger: 'circle-xmark',
        };
        const icon = document.createElement('wa-icon');
        icon.setAttribute('slot', 'icon');
        icon.setAttribute('name', names[type] ?? 'circle-info');
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }
    buildContent(id, toast) {
        const nodes = [];
        const title = document.createElement('strong');
        title.setAttribute('data-toast-title', '');
        title.textContent = toast.title;
        nodes.push(title);
        if (toast.description) {
            const description = document.createElement('div');
            description.setAttribute('data-toast-description', '');
            description.textContent = toast.description;
            nodes.push(description);
        }
        if (toast.actionLabel) {
            const action = document.createElement('button');
            action.type = 'button';
            action.setAttribute('data-toast-action', '');
            action.textContent = toast.actionLabel;
            action.addEventListener('click', () => {
                this.toastAction.emit({ id });
                this.removeToast(id);
            });
            nodes.push(action);
        }
        return nodes;
    }
    capturePositions() {
        this.positionCache.clear();
        for (const { el } of this.items) {
            this.positionCache.set(el, el.getBoundingClientRect());
        }
    }
    animatePositions() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.positionCache.clear();
            return;
        }
        for (const { el } of this.items) {
            const oldRect = this.positionCache.get(el);
            if (!oldRect) {
                continue;
            }
            const newRect = el.getBoundingClientRect();
            const deltaY = oldRect.top - newRect.top;
            if (Math.abs(deltaY) > 1) {
                // Animate `translate` so it never conflicts with `transform`-based CSS animations.
                el.animate?.([{ translate: `0 ${deltaY}px` }, { translate: '0 0' }], {
                    duration: 200,
                    easing: 'cubic-bezier(0.2, 0, 0, 1)',
                });
            }
        }
        this.positionCache.clear();
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    /** Accepts both the provider's own types and the legacy IToast vocabulary ('error', 'custom'). */
    normalizeType(type) {
        switch (type) {
            case 'success':
            case 'warning':
            case 'error':
            case 'danger':
                return type;
            default:
                return 'info';
        }
    }
    /** Localized name of the toast type, spoken ahead of the message by the live region. */
    typeLabel(type) {
        switch (type) {
            case 'success':
                return t.t('Lcz_Success', { fallback: 'Success' });
            case 'warning':
                return t.t('Lcz_Warning', { fallback: 'Warning' });
            case 'error':
                return t.t('Lcz_Error', { fallback: 'Error' });
            case 'danger':
                return t.t('Lcz_Danger', { fallback: 'Danger' });
            default:
                return t.t('Lcz_Info', { fallback: 'Info' });
        }
    }
    mapVariant(type) {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'error':
            case 'danger':
                return 'danger';
            default:
                return 'brand';
        }
    }
    render() {
        return index.h(index.Host, { key: '89328fdd1b2aef9cf4a60181b991d504e1f04d24' });
    }
};
IrToastProvider.style = irToastProviderCss();

const irValidatorCss = () => `:host{display:block;position:relative}.error-message{font-weight:var(--wa-form-control-hint-font-weight);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller);line-height:var(--wa-form-control-label-line-height);color:var(--wa-color-danger-fill-loud);}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.validationChange = index.createEvent(this, "irValidationChange");
        this.valueChange = index.createEvent(this, "irValueChange");
    }
    get el() { return index.getElement(this); }
    /** Zod schema used to validate the child control's value. */
    schema;
    value;
    asyncValidation;
    showErrorMessage;
    /** Enables automatic validation on every value change. */
    autovalidate;
    /** Optional form id. Falls back to the closest ancestor form when omitted. */
    form;
    /** Event names (space/comma separated) dispatched when the child value changes. */
    valueEvent = 'input input-change value-change select-change';
    /** Event names (space/comma separated) dispatched when the child loses focus. */
    blurEvent = 'blur input-blur select-blur';
    /** Debounce delay (ms) before running validation for autovalidated changes. */
    validationDebounce = 200;
    /** Emits whenever the validation state toggles. */
    validationChange;
    /** Emits whenever the tracked value changes. */
    valueChange;
    isValid = true;
    autoValidateActive = false;
    errorMessage = '';
    childEl;
    formEl;
    slotEl;
    currentValue;
    hasInteracted = false;
    validationTimer;
    valueEventsBound = [];
    blurEventsBound = [];
    componentWillLoad() {
        if (!this.schema) {
            throw new Error('<ir-validator> requires a `schema` prop.');
        }
        this.syncAutovalidateFlag(this.autovalidate);
    }
    componentDidLoad() {
        this.slotEl = this.el.shadowRoot?.querySelector('slot');
        this.slotEl?.addEventListener('slotchange', this.handleSlotChange);
        this.initializeChildReference();
        this.attachFormListener();
    }
    disconnectedCallback() {
        this.teardownChildListeners();
        this.detachFormListener();
        this.slotEl?.removeEventListener('slotchange', this.handleSlotChange);
        this.clearValidationTimer();
    }
    async handleSchemaChange() {
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    async handleAutoValidatePropChange(next) {
        this.syncAutovalidateFlag(next);
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    }
    handleFormPropChange() {
        this.detachFormListener();
        this.attachFormListener();
    }
    handleValueEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    handleBlurEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    syncAutovalidateFlag(next) {
        this.autoValidateActive = JSON.parse(String(next ?? false));
    }
    parseEvents(spec) {
        if (!spec)
            return [];
        return spec
            .split(/[\s,]+/)
            .map(ApiClient => ApiClient.trim())
            .filter(Boolean);
    }
    async handleValuePropChange(next, previous) {
        if (Object.is(next, previous))
            return;
        // keep the tracked value in sync with external changes without emitting another change event
        this.updateValue(next, { suppressValidation: true, emitChange: false });
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    handleSlotChange = () => {
        this.initializeChildReference();
    };
    initializeChildReference() {
        const child = this.pickSingleChild();
        if (child === this.childEl)
            return;
        this.teardownChildListeners();
        if (!child)
            return;
        this.childEl = child;
        this.hasInteracted = false;
        this.registerChildListeners();
        const initialValue = this.readValueFromChild();
        this.updateValue(initialValue, { suppressValidation: !this.autoValidateActive, emitChange: true });
        if (!this.autoValidateActive) {
            this.updateAriaValidity(this.isValid);
        }
    }
    pickSingleChild() {
        const slotChildren = this.slotEl?.assignedElements({ flatten: true }) ?? Array.from(this.el.children);
        const elements = slotChildren.filter(node => node.nodeType === Node.ELEMENT_NODE);
        if (elements.length === 0) {
            console.warn('<ir-validator> requires exactly one child element but found none.');
            return undefined;
        }
        if (elements.length > 1) {
            console.warn(`<ir-validator> requires exactly one child element but found ${elements.length}. Using the first.`);
        }
        return elements[0];
    }
    registerChildListeners() {
        if (!this.childEl)
            return;
        this.unbindChildListeners();
        this.valueEventsBound = this.parseEvents(this.valueEvent);
        this.blurEventsBound = this.parseEvents(this.blurEvent);
        this.valueEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleBlurEvent));
    }
    unbindChildListeners() {
        if (!this.childEl)
            return;
        this.valueEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleBlurEvent));
        this.valueEventsBound = [];
        this.blurEventsBound = [];
    }
    teardownChildListeners() {
        if (this.childEl) {
            this.unbindChildListeners();
            this.childEl = undefined;
        }
        this.clearValidationTimer();
    }
    rebindChildListeners() {
        if (!this.childEl)
            return;
        this.registerChildListeners();
    }
    handleValueEvent = (event) => {
        if (!this.childEl)
            return;
        const nextValue = this.extractEventValue(event);
        this.hasInteracted = true;
        this.updateValue(nextValue);
    };
    handleBlurEvent = async () => {
        if (!this.childEl)
            return;
        this.hasInteracted = true;
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    };
    extractEventValue(event) {
        if ('detail' in event && event['detail'] && typeof event['detail'] === 'object' && 'value' in event.detail) {
            return event.detail.value;
        }
        const target = event.target;
        if (target && 'value' in target) {
            return target.value;
        }
        return this.readValueFromChild();
    }
    readValueFromChild() {
        if (this.value !== undefined) {
            return this.value;
        }
        if (!this.childEl)
            return undefined;
        if ('value' in this.childEl) {
            return this.childEl.value;
        }
        return this.childEl.getAttribute?.('value');
    }
    updateValue(nextValue, options = {}) {
        const previous = this.currentValue;
        this.currentValue = nextValue;
        if (options.emitChange !== false && !Object.is(previous, nextValue)) {
            this.valueChange.emit({ value: this.currentValue });
        }
        if (!options.suppressValidation && this.autoValidateActive && this.hasInteracted) {
            this.scheduleValidation();
        }
    }
    async validateCurrentValue(forceDisplay = false) {
        if (!this.schema)
            return true;
        const value = this.currentValue ?? this.readValueFromChild();
        this.currentValue = value;
        let result;
        if (this.asyncValidation) {
            result = await this.schema.safeParseAsync(value);
        }
        else {
            result = this.schema.safeParse(value);
        }
        const nextValidity = result.success;
        const previousValidity = this.isValid;
        this.isValid = nextValidity;
        if (!result.success) {
            this.errorMessage = result.error.issues[0]?.message ?? '';
        }
        else {
            this.errorMessage = '';
        }
        const shouldDisplay = forceDisplay || (this.autoValidateActive && this.hasInteracted);
        if (shouldDisplay) {
            this.updateAriaValidity(nextValidity);
            if (previousValidity !== nextValidity) {
                this.emitValidationChange();
            }
        }
        return nextValidity;
    }
    updateAriaValidity(valid) {
        if (!this.childEl)
            return;
        if (valid) {
            this.childEl.removeAttribute('aria-invalid');
        }
        else {
            this.childEl.setAttribute('aria-invalid', 'true');
        }
    }
    emitValidationChange() {
        this.validationChange.emit({ valid: this.isValid, value: this.currentValue });
    }
    attachFormListener() {
        this.formEl = this.resolveFormRef();
        this.formEl?.addEventListener('submit', this.handleFormSubmit, true);
    }
    detachFormListener() {
        this.formEl?.removeEventListener('submit', this.handleFormSubmit, true);
        this.formEl = undefined;
    }
    resolveFormRef() {
        if (typeof document !== 'undefined' && this.form) {
            const provided = document.getElementById(this.form);
            if (provided && provided instanceof HTMLFormElement) {
                return provided;
            }
        }
        return this.el.closest('form');
    }
    handleFormSubmit = async () => {
        this.hasInteracted = true;
        const valid = await this.flushValidation();
        if (!valid && !this.autoValidateActive) {
            this.autoValidateActive = true;
        }
    };
    async scheduleValidation() {
        // this.clearValidationTimer();
        // const delay = Number(this.validationDebounce);
        // if (immediate || !isFinite(delay) || delay <= 0) {
        return await this.validateCurrentValue(true);
        // }
        // this.validationTimer = setTimeout(async () => {
        //   this.validationTimer = undefined;
        //   await this.validateCurrentValue(true);
        // }, delay);
        // return this.isValid;
    }
    async flushValidation() {
        return await this.scheduleValidation();
    }
    clearValidationTimer() {
        if (this.validationTimer !== undefined) {
            clearTimeout(this.validationTimer);
            this.validationTimer = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { key: '6d980ae2b3f5cc5441a53af61a5075f9f6dadab3' }, index.h("slot", { key: 'a10389ddf24277b89e5c478dbc151a1e7d72ac2d' }), !this.isValid && this.showErrorMessage && (index.h("span", { key: '643a24b7b7f4db8a3a65204eae9f66e219b10449', part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    static get watchers() { return {
        "schema": [{
                "handleSchemaChange": 0
            }],
        "autovalidate": [{
                "handleAutoValidatePropChange": 0
            }],
        "form": [{
                "handleFormPropChange": 0
            }],
        "valueEvent": [{
                "handleValueEventChange": 0
            }],
        "blurEvent": [{
                "handleBlurEventChange": 0
            }],
        "value": [{
                "handleValuePropChange": 0
            }]
    }; }
};
__decorate([
    debounce.Debounce(300)
], IrValidator.prototype, "scheduleValidation", null);
IrValidator.style = irValidatorCss();

exports.ir_auth = IrAuth;
exports.ir_common = IrCommon;
exports.ir_custom_button = IrCustomButton;
exports.ir_input = IrInput;
exports.ir_toast = IrToast;
exports.ir_toast_item = IrToastItem;
exports.ir_toast_provider = IrToastProvider;
exports.ir_validator = IrValidator;
