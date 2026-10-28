import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DKZeCK8T.js';
import { a as axios } from './axios-B50ozOIF.js';
import { L as LanguageSync } from './language-sync-DQzmH9ym.js';
import { S as SCREEN_TABLES, L as LocaleController } from './locale.controller-DC7jtDUS.js';
import { t } from './t-Bvz1wS_D.js';
import { h as showToast } from './utils-BQHfpbFq.js';
import { s as stringType } from './types-CB66a07H.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './types-CyZFzmvF.js';
import './moment-Mki5YqAR.js';
import './calendar-data-DWzivSW-.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './ir-date-XXNYhmSL.js';
import './calendar-dates-D3hVfsrC.js';

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
        this.http = axios.create({ baseURL: apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/` });
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

const irAuthCss = () => `ir-auth{--font-body:'Inter', -apple-system, BlinkMacSystemFont, sans-serif;display:flex;flex-direction:column;box-sizing:border-box;min-height:100vh;min-height:100dvh;padding:var(--wa-space-xl) var(--wa-space-3xl);background:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font-family:var(--font-body)}ir-auth .pms-auth__topbar{display:flex;align-items:center;justify-content:space-between}ir-auth .pms-auth__logo{height:20px;object-fit:contain}ir-auth .pms-auth__lang-trigger{font-size:0.85rem}ir-auth .pms-auth__card{width:100%;max-width:380px;margin:auto;padding:var(--wa-space-3xl) 0}ir-auth .pms-auth__title{font-family:var(--font-body);font-weight:700;font-size:1.6rem;letter-spacing:-0.01em;color:var(--wa-color-text-normal);margin:0 0 var(--wa-space-xl);text-align:start}ir-auth .pms-auth__subtitle{font-family:var(--font-body);font-size:0.95rem;color:var(--wa-color-text-quiet);margin:0 0 var(--wa-space-l);text-align:start}ir-auth .pms-auth__subtitle:empty{display:none}ir-auth .pms-auth__notice{display:flex;align-items:flex-start;gap:var(--wa-space-s);background:var(--wa-color-brand-fill-quiet);border:1px solid var(--wa-color-brand-border-quiet);border-radius:var(--wa-border-radius-m);padding:var(--wa-space-m);margin:0 0 var(--wa-space-l);font-size:0.85rem;color:var(--wa-color-brand-on-quiet);line-height:1.4}ir-auth .pms-auth__notice-icon{color:var(--wa-color-brand-fill-loud);flex:none;margin-top:0.15rem}ir-auth .pms-auth__notice-emphasis{font-weight:600}ir-auth .pms-auth__field{border:none;padding:0;margin:0 0 var(--wa-space-l)}ir-auth .pms-auth__row{display:flex;align-items:center;justify-content:space-between;margin:calc(var(--wa-space-xs) - var(--wa-space-l)) 0 var(--wa-space-l);font-size:var(--wa-font-size-s)}ir-auth .pms-auth__remember{font-size:inherit}ir-auth .pms-auth__row--end{justify-content:flex-end}ir-auth .pms-auth__link{--pms-auth-link-color:var(--wa-color-brand-fill-loud);color:var(--pms-auth-link-color);font-weight:400;text-decoration:var(--wa-link-decoration-default);-webkit-text-decoration:var(--wa-link-decoration-default);text-decoration-thickness:0.09375em;text-underline-offset:0.125em;transition:color var(--wa-transition-fast) var(--wa-transition-easing)}ir-auth .pms-auth__link--plain{text-decoration:none;-webkit-text-decoration:none}@media (hover: hover){ir-auth .pms-auth__link:hover{color:color-mix(in oklab, var(--pms-auth-link-color), var(--wa-color-mix-hover));text-decoration:var(--wa-link-decoration-hover);-webkit-text-decoration:var(--wa-link-decoration-hover)}ir-auth .pms-auth__app-link:hover{text-decoration:none;-webkit-text-decoration:none}}ir-auth .pms-auth__link:focus{outline:none}ir-auth .pms-auth__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset);border-radius:var(--wa-border-radius-s)}ir-auth .pms-auth__submit{width:100%;margin-top:var(--wa-space-xs)}ir-auth .pms-auth__return{margin:var(--wa-space-l) 0 0;font-size:0.9rem}ir-auth .pms-auth__return-link{font-weight:500}ir-auth .pms-auth__divider{border:none;border-top:1px solid var(--wa-color-surface-border);margin:var(--wa-space-xl) 0}ir-auth .pms-auth__extras{margin-top:var(--wa-space-xl)}ir-auth .pms-auth__apps{display:flex;gap:var(--wa-space-m);align-items:center;justify-content:center;margin-bottom:var(--wa-space-m)}ir-auth .pms-auth__app-link{display:inline-flex}ir-auth .pms-auth__app-icon{font-size:2.5rem}ir-auth .pms-auth__signup{width:100%}ir-auth .pms-auth__footer{display:flex;flex-direction:column;align-items:center;gap:var(--wa-space-2xs);text-align:center;font-size:0.8rem;color:var(--wa-color-text-quiet)}ir-auth .pms-auth__legal,ir-auth .pms-auth__help{margin:0}`;

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
        registerInstance(this, hostRef);
        this.authLanguageChange = createEvent(this, "authLanguageChange");
        this.authFinish = createEvent(this, "authFinish");
    }
    get el() { return getElement(this); }
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
    languageSync = new LanguageSync(SCREEN_TABLES.auth, () => LocaleController.load({ tables: SCREEN_TABLES.auth }));
    /** The page's server form this component sits in. */
    formEl;
    schemaCache;
    componentWillLoad() {
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.auth }).catch(error => console.error('Failed to load login strings', error));
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
            username: t('Lcz_PleaseEnterYourUsername', { fallback: 'Please enter your username' }),
            password: t('Lcz_PleaseEnterYourPassword', { fallback: 'Please enter your password' }),
            email: t('Lcz_PleaseEnterYourEmail', { fallback: 'Please enter your email' }),
            validEmail: t('Lcz_PleaseEnterValidEmail', { fallback: 'Please enter a valid email' }),
        };
        // Rebuilt only when the translations change: a new schema object re-runs every validator.
        const key = Object.values(messages).join('\u0000');
        if (this.schemaCache?.key !== key) {
            const required = (message) => stringType().trim().min(1, message);
            const username = required(messages.username);
            this.schemaCache = {
                key,
                schemas: {
                    username,
                    password: required(messages.password),
                    forgotPasswordUsername: username,
                    email: required(messages.email).pipe(stringType().email(messages.validEmail)),
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
                this.toastSuccess(t('Lcz_LoginSuccessfulRedirecting', { fallback: 'You have successfully logged in. Redirecting ...' }));
            }
            else {
                this.toastSuccess(t('Lcz_LoginSuccessful', { fallback: 'Hooray! You have successfully logged in.' }));
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
            this.toastSuccess(t('Lcz_EmailBeingSentWithPassword', { fallback: 'An email is being sent to %1@...... containing your password', params: [recipient] }));
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
            this.toastSuccess(t('Lcz_EmailBeingSentWithUsername', { fallback: 'An email is being sent to %1@...... containing your username', params: [recipient] }));
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
        showToast({ type: 'success', title, description: '', position: 'top-right' });
    }
    toastError(error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('[ir-auth]', error);
        showToast({ type: 'error', title: message, description: '', position: 'top-right' });
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
        return (h("p", { class: "pms-auth__return" }, h("a", { href: "#", class: "Lnk_ReturnToLogin pms-auth__link pms-auth__link--plain pms-auth__return-link", onClick: e => (e.preventDefault(), this.switchView('login')) }, t('Lcz_BackToSignIn', { fallback: 'Back to sign in' }))));
    }
    renderSubmit(label) {
        return (h("ir-custom-button", { class: "pms-auth__submit", type: "submit", variant: "brand", size: "l", loading: this.isLoading || this.redirecting }, label));
    }
    /** `id` and `name` are the ones the legacy `Default.aspx` markup used, so page scripts can still find the fields. */
    renderInput({ field, id, name, label, type = 'text', autocomplete, }) {
        return (h("fieldset", { class: "pms-auth__field" }, h("ir-validator", { key: field, schema: this.schemas[field], value: this[field], valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { id: id, name: name, type: type, size: "l", passwordToggle: type === 'password', autocomplete: autocomplete,
            // label={label}
            placeholder: label, value: this[field], "onText-change": (e) => (this[field] = e.detail) }))));
    }
    renderLogin() {
        return (h("div", { class: "UsedByLogin" }, h("h1", { class: "pms-auth__title" }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'username', id: 'txt_username', name: 'txt_username', label: t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), h("div", { class: "pms-auth__row" }, h("wa-checkbox", { id: "chk_RememberUname", class: "pms-auth__remember", defaultChecked: this.rememberUsername, checked: this.rememberUsername, onchange: e => (this.rememberUsername = e.target.checked) }, t('Lcz_RememberUsername', { fallback: 'Remember username' })), h("a", { href: "#", id: "Lnk_ForgotUsername", class: "pms-auth__link pms-auth__link--plain", "aria-label": t('Lcz_ForgotUsername', { fallback: 'Forgot username?' }), onClick: e => (e.preventDefault(), this.switchView('forgotUsername')) }, t('Lcz_IForgot', { fallback: 'I Forgot' }))), this.renderInput({
            field: 'password',
            id: 'txt_password',
            label: t('Lcz_Password', { fallback: 'Password' }),
            type: 'password',
            autocomplete: 'current-password',
        }), h("div", { class: "pms-auth__row pms-auth__row--end" }, h("a", { href: "#", id: "Lnk_ForgotPassword", class: "pms-auth__link pms-auth__link--plain", "aria-label": t('Lcz_ForgotPassword', { fallback: 'Forgot password?' }), onClick: e => (e.preventDefault(), this.switchView('forgotPassword')) }, t('Lcz_IForgot', { fallback: 'I Forgot' }))), this.renderSubmit(t('Lcz_Continue', { fallback: 'Continue' }))));
    }
    renderForgotPassword() {
        return (h("div", { class: "UsedByForgotPwd" }, h("h1", { class: "pms-auth__title" }, t('Lcz_GetYourPassword', { fallback: 'Get your password' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'forgotPasswordUsername', id: 'txt_username1', label: t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), this.renderSubmit(t('Lcz_GetPassword', { fallback: 'Get password' })), this.renderBackToLogin()));
    }
    renderForgotUsername() {
        return (h("div", { class: "UsedByForgotUname" }, h("h1", { class: "pms-auth__title" }, t('Lcz_GetYourUsername', { fallback: 'Get your username' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'email', id: 'txt_email', label: t('Lcz_Email', { fallback: 'Email' }), type: 'email', autocomplete: 'email' }), this.renderSubmit(t('Lcz_GetUsername', { fallback: 'Get username' })), this.renderBackToLogin()));
    }
    /**
     * One translatable sentence; `%1` marks where the privacy-policy link goes, so each
     * language can place it wherever its grammar needs.
     */
    renderLegalNotice() {
        const [before, after = ''] = t('Lcz_ByLoggingInYouAcceptOurPrivacyPolicy', { fallback: 'By logging in, you accept our %1.' }).split('%1');
        return (h("p", { class: "pms-auth__legal" }, before, h("a", { class: "pms-auth__link", href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), after));
    }
    renderLanguageSelector() {
        if (!this.languageList.length) {
            return null;
        }
        const current = this.languageList.find(({ code }) => code.toLowerCase() === (this.language ?? '').toLowerCase());
        return (h("div", { class: "pms-auth__lang" }, h("wa-dropdown", { id: "language-selector", "onwa-select": e => this.authLanguageChange.emit({ code: e.detail.item.value }) }, h("wa-button", { slot: "trigger", class: "pms-auth__lang-trigger", size: "s", appearance: "outlined", variant: "neutral", "with-caret": true }, current?.label ?? this.language?.toUpperCase()), this.languageList.map(({ code, label }) => (h("wa-dropdown-item", { key: code, value: code }, label))))));
    }
    render() {
        return (h(Host, { key: 'f8583dc463a24e00653bcabf8ada5ff4c910acc7' }, h("ir-toast", { key: '5e8c1b71d8d079932b9e06add69fa417d3c290d0' }), h("div", { key: '423420a74ab7df389d1b93c391bf43cc39e32652', class: "pms-auth__topbar" }, h("div", { key: '7c70740bb875b2f627d2c9b89bee79794c24b45f', class: "pms-auth__brand" }, this.logoUrl && h("img", { key: 'ed4f32bf09cb8b1372df20d19a8ca383410543f0', class: "pms-auth__logo", src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), h("div", { key: '2d8c5311975a02e88c6dbd219911a3c181630e13', class: "pms-auth__card" }, h("div", { key: 'a40dad1a827a134d1ce1b512771a9f194cad37a2', class: "pms-auth__form", onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (h("div", { key: '05a28b53e9ab145ab4695239e98ca2ed74cc7652', class: "pms-auth__extras" }, h("div", { key: '5b6d1bd68cb16aced6afcbefb570e836741c264d', class: "pms-auth__apps" }, h("a", { key: 'b3e3dd6c0ddc5cbaa93a208f0cf17825ac834ecc', class: "pms-auth__link pms-auth__link--plain pms-auth__app-link", href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, h("wa-icon", { key: '58ae5bf8f66a81adbbf3eb368d96bd4c7fefc650', class: "pms-auth__app-icon", name: "app-store", family: "brands" })), h("a", { key: '247355b87687a593300abb1176817f0ea01905e1', class: "pms-auth__link pms-auth__link--plain pms-auth__app-link", href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, h("wa-icon", { key: 'f89bec71693d969cec65e6cebc282c9cf925a57f', class: "pms-auth__app-icon", name: "google-play", family: "brands" }))), h("ir-custom-button", { key: '0d3af385d60b05e466a4b867277775129e74655d', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "l", href: "https://info.igloorooms.com/signup", target: "_blank" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), h("div", { key: '3790469cb2662594e39ac87e41d371df14a1581a', class: "pms-auth__footer" }, this.renderLegalNotice(), h("p", { key: 'c5cbba419fc9af2120b07b151924bc3f4917a57c', class: "pms-auth__help" }, t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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

export { IrAuth as ir_auth };
