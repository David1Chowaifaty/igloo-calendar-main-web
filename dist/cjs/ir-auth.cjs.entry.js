'use strict';

var index = require('./index-IDeZZwEK.js');
var axios = require('./axios-EresIryl.js');
var languageSync = require('./language-sync-DZdPGMff.js');
var locale_controller = require('./locale.controller-DOykNQAc.js');
var t = require('./t-CqJPQrfm.js');
var utils = require('./utils-ZKsQb8eV.js');
var types = require('./types-BVJQZ50e.js');
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

/** `ajaxHelper` retried a call this many times when the database reported a deadlock. */
const DEADLOCK_RETRIES = 3;
/**
 * The back-office login endpoints of the app's own WCF service (`AppWCF.svc`),
 * called the way `ajaxHelper` / `prepareApiUri` in `js/CommonLibrary.js` call them:
 * `POST {apiUrl}{method}?Ticket={ticket}` with a JSON body.
 *
 * Uses its own axios instance on purpose — the shared one carries the gateway
 * base URL and `ApiClient`'s `Authorization` interceptor, neither of which this
 * service understands.
 *
 * Stateless and free of storage writes — `ir-auth` owns the flow and persists
 * what the rest of the extranet reads from `localStorage`.
 */
class LegacyAuthService {
    http;
    /** @param apiUrl The WCF base, e.g. `AppWCF.svc/` (relative to the page) or `_apiUri`. */
    constructor(apiUrl) {
        this.http = axios.axios.create({ baseURL: apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/` });
    }
    async isAuthenticated({ username, password }) {
        return this.request('IsAuthenticated_JSON', {
            My_UserInfo: { UserName: username, Password: password },
            My_Enum_Authentication_Mode: 0,
            IS_BACK_OFFICE: true,
        });
    }
    /** The server returns an Int64; compare it as a string against what `localStorage` holds. */
    async getStartupDataSignature(ownerId, ticket) {
        return this.request('Get_Startup_Data_Signature', { OWNER_ID: ownerId }, ticket);
    }
    async getStartupData(ownerId, language, ticket) {
        return this.request('Get_Startup_Data', {
            IS_BACK_OFFICE: true,
            OWNER_ID: ownerId,
            LANGUAGE_ABBREVIATION: language,
        }, ticket);
    }
    /** Mails the password of `username`. Resolves to the (masked) address it was sent to. */
    async forgotPassword(username) {
        return this.request('Forgot_Password', {
            USERNAME: username,
            My_Enum_Forgot_Password_Mode: 0, // By USERNAME
            ENVIRONMENT_USER_ID: 2,
            LANGUAGE_ABBREVIATION: '',
        });
    }
    async forgotUsername(email) {
        return this.request('Forgot_UserName', {
            EMAIL: email,
            My_Enum_Forgot_Password_Mode: 1, // By EMAIL
            ENVIRONMENT_USER_ID: 2,
        });
    }
    async request(method, params, ticket = '') {
        for (let attempt = 0;; attempt++) {
            const { data } = await this.http.post(`${method}?Ticket=${encodeURIComponent(ticket)}`, params, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
            });
            const exception = String(data?.ExceptionMsg ?? '').trim();
            if (!exception) {
                return data?.My_Result;
            }
            if (!exception.includes('deadlocked') || attempt >= DEADLOCK_RETRIES) {
                throw new Error(exception);
            }
        }
    }
}

const irAuthCss = () => `ir-auth{--ink:#0b0f19;--slate:#6b7280;--slate-light:#9aa1ac;--paper:#ffffff;--paper-field:#ffffff;--line:#e2e4e9;--accent:#4338ca;--accent-deep:#362da3;--info-bg:#eff5ff;--info-border:#bfdcfe;--info-icon:#3b82f6;--danger:#dc2626;--font-body:'Inter', -apple-system, BlinkMacSystemFont, sans-serif;display:flex;flex-direction:column;box-sizing:border-box;min-height:100vh;min-height:100dvh;padding:2rem 3rem;background:var(--paper);color:var(--ink);font-family:var(--font-body)}ir-auth .pms-auth__topbar{display:flex;align-items:center;justify-content:space-between}ir-auth .pms-auth__brand img{height:20px;object-fit:contain}ir-auth .pms-auth__lang wa-dropdown wa-button{font-size:0.85rem}ir-auth .pms-auth__card{width:100%;max-width:380px;margin:auto;padding:3rem 0}ir-auth .pms-auth__title{font-family:var(--font-body);font-weight:700;font-size:1.6rem;letter-spacing:-0.01em;color:var(--ink);margin:0 0 0.3rem;text-align:start}ir-auth .pms-auth__subtitle{font-family:var(--font-body);font-size:0.95rem;color:var(--slate);margin:0 0 1.4rem;text-align:start}ir-auth .pms-auth__notice{display:flex;align-items:flex-start;gap:0.6rem;background:var(--info-bg);border:1px solid var(--info-border);border-radius:8px;padding:0.85rem 1rem;margin:0 0 1.5rem;font-size:0.85rem;color:#1e3a5f;line-height:1.4}ir-auth .pms-auth__notice wa-icon{color:var(--info-icon);flex:none;margin-top:0.15rem}ir-auth .pms-auth__notice strong{font-weight:600}ir-auth fieldset{border:none;padding:0;margin:0 0 1rem}ir-auth .pms-auth__row{display:flex;align-items:center;justify-content:space-between;margin:-0.6rem 0 1.2rem;font-size:0.85rem}ir-auth .pms-auth__row--end{justify-content:flex-end}ir-auth .pms-auth__row a{color:var(--accent);text-decoration:none;font-weight:500}ir-auth .pms-auth__row a:hover{text-decoration:underline}ir-auth ir-input,ir-auth ir-custom-button,ir-auth wa-button{--wa-form-control-border-radius:8px}ir-auth ir-input::part(base){background:var(--paper-field);border-color:var(--line)}ir-auth ir-input[aria-invalid='true']::part(base){border-color:var(--danger)}ir-auth .pms-auth__submit{width:100%;margin-top:0.25rem}ir-auth .pms-auth__return{margin-top:0.9rem;font-size:0.9rem}ir-auth .pms-auth__return a{color:var(--accent);text-decoration:none;font-weight:500}ir-auth .pms-auth__divider{border:none;border-top:1px solid var(--line);margin:1.75rem 0}ir-auth .pms-auth__apps{display:flex;gap:0.9rem;align-items:center;justify-content:center;margin-bottom:1.4rem}ir-auth .pms-auth__apps img{height:32px;width:auto}ir-auth .pms-auth__signup{width:100%;margin-bottom:1.4rem}ir-auth .pms-auth__footer{display:flex;align-items:center;justify-content:space-between;font-size:0.8rem;color:var(--slate)}ir-auth .pms-auth__footer a{color:var(--slate)}`;

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
    get el() { return index.getElement(this); }
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
    /**
     * Base URL of the app's WCF service the login endpoints live on — `_apiUri` in
     * `js/CommonLibrary.js`. The default resolves next to the page (`…/Default.aspx` → `…/AppWCF.svc/`).
     */
    apiUrl = 'AppWCF.svc/';
    /** Id of the server button whose postback signs the user in (`FormsAuthentication.RedirectFromLoginPage`). */
    redirectButton = 'btn_RedirectFromLogin';
    /** Where users who must confirm a one-time password are sent instead. */
    otpUrl = './OTPVerifier.aspx';
    view = 'login';
    username = '';
    password = '';
    rememberUsername = true;
    forgotPasswordUsername = '';
    email = '';
    isLoading = false;
    /** Set once navigation starts, so the submit button stays busy until the page unloads. */
    redirecting = false;
    languageList = [];
    authLanguageChange;
    /** Fires after a successful login, before redirecting. Call `preventDefault()` to handle navigation yourself. */
    authFinish;
    authService;
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.auth, () => locale_controller.LocaleController.load({ tables: locale_controller.SCREEN_TABLES.auth }));
    /** The page's server form this component sits in. */
    formEl;
    schemaCache;
    componentWillLoad() {
        locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.auth }).catch(error => console.error('Failed to load login strings', error));
        this.parseLanguages(this.languages);
        this.createAuthService(this.apiUrl);
        this.username = this.readStorage('USERNAME') ?? '';
    }
    connectedCallback() {
        this.formEl = this.el.closest('form');
        if (!this.formEl) {
            console.warn('[ir-auth] Not inside a <form>: sign-in cannot submit or post "txt_username". Mount it in the page\'s <form runat="server">.');
        }
        // Capture, so the request is stopped before ASP.NET's own onsubmit handling sees it.
        this.formEl?.addEventListener('submit', this.handleSubmit, true);
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
        this.formEl?.removeEventListener('submit', this.handleSubmit, true);
        this.formEl = undefined;
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
    createAuthService(url) {
        this.authService = new LegacyAuthService(url || 'AppWCF.svc/');
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
     * `ir-input` nests `wa-input` in its own shadow root, out of reach of the form,
     * so Enter in a field no longer submits it natively. Goes through a real submit
     * (caught by {@link handleSubmit}) so every `ir-validator` shows its message.
     */
    handleKeyDown(e) {
        if (e.key === 'Enter' && e.target.tagName === 'IR-INPUT') {
            e.preventDefault();
            this.formEl?.requestSubmit();
        }
    }
    /**
     * Submits of the server form: the redirect postback (fired by {@link redirect}) goes
     * through untouched; anything else — the submit buttons, Enter — runs the active view.
     */
    handleSubmit = (e) => {
        if (this.redirecting) {
            return;
        }
        // Only preventDefault: the field `ir-validator`s listen for this same submit to show their messages.
        e.preventDefault();
        switch (this.view) {
            case 'login':
                return this.authenticate();
            case 'forgotPassword':
                return this.forgotPassword();
            case 'forgotUsername':
                return this.forgotUsername();
        }
    };
    async authenticate() {
        if (!this.isValid('username', 'password') || this.isLoading || this.redirecting) {
            return;
        }
        this.writeStorage('USERNAME', this.rememberUsername ? this.username : '');
        this.isLoading = true;
        try {
            const userInfo = await this.authService.isAuthenticated({ username: this.username, password: this.password });
            this.writeStorage('UserInfo_b', JSON.stringify(userInfo));
            // An Int64 from the server against a string from storage — legacy compared them with `!=`.
            const signature = String(await this.authService.getStartupDataSignature(userInfo.OwnerID, userInfo.Ticket));
            if (this.readStorage('_Startup_Data_Signature_b') !== signature) {
                this.writeStorage('_Startup_Data_Signature_b', signature);
                const startupData = await this.authService.getStartupData(userInfo.OwnerID, 'EN', userInfo.Ticket);
                for (const [storageKey, field] of Object.entries(STARTUP_STORAGE_KEYS)) {
                    this.writeStorage(storageKey, JSON.stringify(startupData?.[field]));
                }
                this.toastSuccess(t.t('Lcz_LoginSuccessfulRedirecting', { fallback: 'You have successfully logged in. Redirecting ...' }));
            }
            else {
                this.toastSuccess(t.t('Lcz_LoginSuccessful', { fallback: 'Hooray! You have successfully logged in.' }));
            }
            const requiresOtp = userInfo.IsRequireOTP === true;
            if (!this.authFinish.emit({ userInfo, requiresOtp }).defaultPrevented) {
                this.redirect(requiresOtp);
            }
        }
        catch (error) {
            this.toastError(error);
        }
        finally {
            if (!this.redirecting) {
                this.isLoading = false;
            }
        }
    }
    redirect(requiresOtp) {
        if (requiresOtp) {
            this.redirecting = true;
            window.location.href = this.otpUrl;
            return;
        }
        const button = document.getElementById(this.redirectButton);
        if (!button) {
            console.error(`[ir-auth] Redirect button "#${this.redirectButton}" not found; cannot complete the login postback.`);
            return;
        }
        // Lets this submit through handleSubmit; #txt_username (ir-input, form-associated) posts itself.
        this.redirecting = true;
        button.click();
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
        return (index.h("p", { class: "pms-auth__return" }, index.h("a", { href: "#", class: "Lnk_ReturnToLogin", onClick: e => (e.preventDefault(), this.switchView('login')) }, t.t('Lcz_BackToSignIn', { fallback: 'Back to sign in' }))));
    }
    renderSubmit(label) {
        return (index.h("ir-custom-button", { class: "pms-auth__submit", type: "submit", variant: "brand", size: "m", loading: this.isLoading || this.redirecting }, label));
    }
    /** `id` and `name` are the ones the legacy `Default.aspx` markup used, so page scripts can still find the fields. */
    renderInput({ field, id, name, label, type = 'text', autocomplete, }) {
        return (index.h("fieldset", null, index.h("ir-validator", { key: field, schema: this.schemas[field], value: this[field], valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { id: id, name: name, type: type, size: "m", passwordToggle: type === 'password', autocomplete: autocomplete, label: label, placeholder: label, value: this[field], "onText-change": (e) => (this[field] = e.detail) }))));
    }
    renderLogin() {
        return (index.h("div", { class: "UsedByLogin" }, index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'username', id: 'txt_username', name: 'txt_username', label: t.t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), index.h("div", { class: "pms-auth__row" }, index.h("wa-checkbox", { id: "chk_RememberUname", checked: this.rememberUsername, onchange: e => (this.rememberUsername = e.target.checked) }, t.t('Lcz_RememberUsername', { fallback: 'Remember username' })), index.h("a", { href: "#", id: "Lnk_ForgotUsername", "aria-label": t.t('Lcz_ForgotUsername', { fallback: 'Forgot username?' }), onClick: e => (e.preventDefault(), this.switchView('forgotUsername')) }, t.t('Lcz_IForgot', { fallback: 'I Forgot' }))), this.renderInput({
            field: 'password',
            id: 'txt_password',
            label: t.t('Lcz_Password', { fallback: 'Password' }),
            type: 'password',
            autocomplete: 'current-password',
        }), index.h("div", { class: "pms-auth__row pms-auth__row--end" }, index.h("a", { href: "#", id: "Lnk_ForgotPassword", "aria-label": t.t('Lcz_ForgotPassword', { fallback: 'Forgot password?' }), onClick: e => (e.preventDefault(), this.switchView('forgotPassword')) }, t.t('Lcz_IForgot', { fallback: 'I Forgot' }))), this.renderSubmit(t.t('Lcz_Continue', { fallback: 'Continue' }))));
    }
    renderForgotPassword() {
        return (index.h("div", { class: "UsedByForgotPwd" }, index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_GetYourPassword', { fallback: 'Get your password' })), index.h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'forgotPasswordUsername', id: 'txt_username1', label: t.t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), this.renderSubmit(t.t('Lcz_GetPassword', { fallback: 'Get password' })), this.renderBackToLogin()));
    }
    renderForgotUsername() {
        return (index.h("div", { class: "UsedByForgotUname" }, index.h("h1", { class: "pms-auth__title" }, t.t('Lcz_GetYourUsername', { fallback: 'Get your username' })), index.h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'email', id: 'txt_email', label: t.t('Lcz_Email', { fallback: 'Email' }), type: 'email', autocomplete: 'email' }), this.renderSubmit(t.t('Lcz_GetUsername', { fallback: 'Get username' })), this.renderBackToLogin()));
    }
    renderLanguageSelector() {
        if (!this.languageList.length) {
            return null;
        }
        const current = this.languageList.find(({ code }) => code.toLowerCase() === (this.language ?? '').toLowerCase());
        return (index.h("div", { class: "pms-auth__lang" }, index.h("wa-dropdown", { id: "language-selector", "onwa-select": e => this.authLanguageChange.emit({ code: e.detail.item.value }) }, index.h("wa-button", { slot: "trigger", size: "s", appearance: "outlined", variant: "neutral", "with-caret": true }, current?.label ?? this.language?.toUpperCase()), this.languageList.map(({ code, label }) => (index.h("wa-dropdown-item", { key: code, value: code }, label))))));
    }
    render() {
        return (index.h(index.Host, { key: '3a5f54b648b44b05dc51a957e9b7afa2850fcad8' }, index.h("ir-toast", { key: '451d093e3be51bbb14b01c92542275b1fb6d412a' }), index.h("div", { key: '69bdb8bd3dc09e3c2146634341d2641f4d222eca', class: "pms-auth__topbar" }, index.h("div", { key: '3544a77e0a1283cb8bcebb702dd7be329c18c355', class: "pms-auth__brand" }, this.logoUrl && index.h("img", { key: '43d6a1ac584d3a558dfc9f1659fa361675737529', src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), index.h("div", { key: '70c60d96f59eb5f1c08cde1bf35c34ada40b57e2', class: "pms-auth__card" }, index.h("div", { key: '54649e33f4ae01ccf030078c7c05146995e24165', class: "pms-auth__form", onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (index.h("div", { key: '26bd1920edb7ff0e6760892cc42cd04ebc977ecf' }, index.h("hr", { key: '4a56399430ec751b59641590ea5db6b1ab39ec9d', class: "pms-auth__divider" }), index.h("div", { key: '7c172c36cc5de4d0496c600920d6d053dda0d40b', class: "pms-auth__apps" }, index.h("a", { key: '1a28bf088421232a22a0ceab0d2cb8f0eb28db4e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, index.h("wa-icon", { key: '215e27cee82d7f828b5331b8fa8bd53546922f65', style: { fontSize: '1.5rem' }, name: "app-store", family: "brands" })), index.h("a", { key: '38e17e8ce82738bef19a51b39ac49e3570385935', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, index.h("wa-icon", { key: '9122f41b0f7486c99ac7e570365a61dae0e3b7ac', style: { fontSize: '1.5rem' }, name: "google-play", family: "brands" }))), index.h("ir-custom-button", { key: '484f83c0e8ee764668e7a69a02cfe5ab915b9e0c', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "m", href: "https://info.igloorooms.com/signup", target: "_blank" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), index.h("div", { key: '3916024a8ded3e13700b5888a5ae8370d8ad9003', class: "pms-auth__footer" }, index.h("a", { key: 'be794b29820f3a840e6911acc043773b85a1c747', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), index.h("span", { key: '6e235eac80c183f86223a6d088181a6c0b71edb2' }, t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "languages": [{
                "parseLanguages": 0
            }],
        "apiUrl": [{
                "createAuthService": 0
            }]
    }; }
};
IrAuth.style = irAuthCss();

exports.ir_auth = IrAuth;
