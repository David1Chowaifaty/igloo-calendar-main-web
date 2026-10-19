import { Host, h } from "@stencil/core";
import { z } from "zod";
import { LegacyAuthService } from "../../services/auth/legacy-auth.service";
import { LanguageSync } from "../../services/locale/language-sync";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
import { showToast } from "../../utils/utils";
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
/**
 * The extranet sign-in panel: login, forgot password and forgot username.
 *
 * Owns validation and the whole legacy login chain (`IsAuthenticated_JSON` →
 * `Get_Startup_Data_Signature` → `Get_Startup_Data`), then redirects the way
 * `Default.aspx` always has: to the OTP page, or by clicking the server's
 * `btn_RedirectFromLogin`, whose handler reads `Request.Form["txt_username"]`.
 *
 * Renders no `<form>` of its own, and no encapsulation: mount it inside the page's
 * `<form runat="server">`, exactly where the legacy fields sat, so `#txt_username`
 * posts with the redirect like the original input did. Every other submit of that
 * form is intercepted and handled here.
 */
export class IrAuth {
    el;
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
            const required = (message) => z.string().trim().min(1, message);
            const username = required(messages.username);
            this.schemaCache = {
                key,
                schemas: {
                    username,
                    password: required(messages.password),
                    forgotPasswordUsername: username,
                    email: required(messages.email).pipe(z.string().email(messages.validEmail)),
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
    static get is() { return "ir-auth"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The page's current language, e.g. `<%= CurrentLanguage %>`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "languages": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | AuthLanguage[]",
                    "resolved": "AuthLanguage[] | string",
                    "references": {
                        "AuthLanguage": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-auth/ir-auth.tsx",
                            "id": "src/components/ir-auth/ir-auth.tsx::AuthLanguage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Languages offered by the switcher, as an array or a JSON string of `{ code, label }`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "languages",
                "defaultValue": "[]"
            },
            "logoUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo-url"
            },
            "insideMpo": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Hides the app links and the sign-up button when the page runs inside MPO."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "inside-mpo",
                "defaultValue": "false"
            },
            "autoUsername": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When set together with {@link autoPassword}, signs in on load."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-username"
            },
            "autoPassword": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-password"
            },
            "apiUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Base URL of the app's WCF service the login endpoints live on \u2014 `_apiUri` in\n`js/CommonLibrary.js`. The default resolves next to the page (`\u2026/Default.aspx` \u2192 `\u2026/AppWCF.svc/`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "api-url",
                "defaultValue": "'AppWCF.svc/'"
            },
            "redirectButton": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Id of the server button whose postback signs the user in (`FormsAuthentication.RedirectFromLoginPage`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "redirect-button",
                "defaultValue": "'btn_RedirectFromLogin'"
            },
            "otpUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Where users who must confirm a one-time password are sent instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "otp-url",
                "defaultValue": "'./OTPVerifier.aspx'"
            }
        };
    }
    static get states() {
        return {
            "view": {},
            "username": {},
            "password": {},
            "rememberUsername": {},
            "forgotPasswordUsername": {},
            "email": {},
            "isLoading": {},
            "redirecting": {},
            "languageList": {}
        };
    }
    static get events() {
        return [{
                "method": "authLanguageChange",
                "name": "authLanguageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ code: string }",
                    "resolved": "{ code: string; }",
                    "references": {}
                }
            }, {
                "method": "authFinish",
                "name": "authFinish",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires after a successful login, before redirecting. Call `preventDefault()` to handle navigation yourself."
                },
                "complexType": {
                    "original": "{ userInfo: LegacyUserInfo; requiresOtp: boolean }",
                    "resolved": "{ userInfo: LegacyUserInfo; requiresOtp: boolean; }",
                    "references": {
                        "LegacyUserInfo": {
                            "location": "import",
                            "path": "@/services/auth/legacy-auth.service",
                            "id": "src/services/auth/legacy-auth.service.ts::LegacyUserInfo",
                            "referenceLocation": "LegacyUserInfo"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "languages",
                "methodName": "parseLanguages"
            }, {
                "propName": "apiUrl",
                "methodName": "createAuthService"
            }];
    }
}
