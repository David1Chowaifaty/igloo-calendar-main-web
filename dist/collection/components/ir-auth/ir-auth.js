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
        return (h("p", { class: "pms-auth__return" }, h("a", { href: "#", class: "Lnk_ReturnToLogin", onClick: e => (e.preventDefault(), this.switchView('login')) }, t('Lcz_BackToSignIn', { fallback: 'Back to sign in' }))));
    }
    renderSubmit(label) {
        return (h("ir-custom-button", { class: "pms-auth__submit", type: "submit", variant: "brand", size: "m", loading: this.isLoading || this.redirecting }, label));
    }
    /** `id` and `name` are the ones the legacy `Default.aspx` markup used, so page scripts can still find the fields. */
    renderInput({ field, id, name, label, type = 'text', autocomplete, }) {
        return (h("fieldset", null, h("ir-validator", { key: field, schema: this.schemas[field], value: this[field], valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { id: id, name: name, type: type, size: "m", passwordToggle: type === 'password', autocomplete: autocomplete, label: label, placeholder: label, value: this[field], "onText-change": (e) => (this[field] = e.detail) }))));
    }
    renderLogin() {
        return (h("div", { class: "UsedByLogin" }, h("h1", { class: "pms-auth__title" }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'username', id: 'txt_username', name: 'txt_username', label: t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), this.renderInput({
            field: 'password',
            id: 'txt_password',
            label: t('Lcz_Password', { fallback: 'Password' }),
            type: 'password',
            autocomplete: 'current-password',
        }), h("div", { class: "pms-auth__row" }, h("wa-checkbox", { id: "chk_RememberUname", checked: this.rememberUsername, onchange: e => (this.rememberUsername = e.target.checked) }, t('Lcz_RememberUsername', { fallback: 'Remember username' })), h("a", { href: "#", id: "Lnk_ForgotUsername", onClick: e => (e.preventDefault(), this.switchView('forgotUsername')) }, t('Lcz_ForgotUsername', { fallback: 'Forgot username?' }))), h("div", { class: "pms-auth__row pms-auth__row--end" }, h("a", { href: "#", id: "Lnk_ForgotPassword", onClick: e => (e.preventDefault(), this.switchView('forgotPassword')) }, t('Lcz_ForgotPassword', { fallback: 'Forgot password?' }))), this.renderSubmit(t('Lcz_Continue', { fallback: 'Continue' }))));
    }
    renderForgotPassword() {
        return (h("div", { class: "UsedByForgotPwd" }, h("h1", { class: "pms-auth__title" }, t('Lcz_GetYourPassword', { fallback: 'Get your password' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'forgotPasswordUsername', id: 'txt_username1', label: t('Lcz_Username', { fallback: 'Username' }), autocomplete: 'username' }), this.renderSubmit(t('Lcz_GetPassword', { fallback: 'Get password' })), this.renderBackToLogin()));
    }
    renderForgotUsername() {
        return (h("div", { class: "UsedByForgotUname" }, h("h1", { class: "pms-auth__title" }, t('Lcz_GetYourUsername', { fallback: 'Get your username' })), h("p", { class: "pms-auth__subtitle" }), this.renderInput({ field: 'email', id: 'txt_email', label: t('Lcz_Email', { fallback: 'Email' }), type: 'email', autocomplete: 'email' }), this.renderSubmit(t('Lcz_GetUsername', { fallback: 'Get username' })), this.renderBackToLogin()));
    }
    renderLanguageSelector() {
        if (!this.languageList.length) {
            return null;
        }
        const current = this.languageList.find(({ code }) => code.toLowerCase() === (this.language ?? '').toLowerCase());
        return (h("div", { class: "pms-auth__lang" }, h("wa-dropdown", { id: "language-selector", "onwa-select": e => this.authLanguageChange.emit({ code: e.detail.item.value }) }, h("wa-button", { slot: "trigger", size: "s", appearance: "outlined", variant: "neutral", "with-caret": true }, current?.label ?? this.language?.toUpperCase()), this.languageList.map(({ code, label }) => (h("wa-dropdown-item", { key: code, value: code }, label))))));
    }
    render() {
        return (h(Host, { key: 'ea72d85c57a4baa98132ea5b001704e4ac84a1d8' }, h("ir-toast", { key: '456b59185624623a7031ca35535e293ad4c1bc52' }), h("div", { key: '0223e0d05e788d61b26fe8f16f74ca4bab1ce42b', class: "pms-auth__topbar" }, h("div", { key: 'e2c09ab0eca60e90679d4ac9824a4efb75194bbb', class: "pms-auth__brand" }, this.logoUrl && h("img", { key: '376b5e7580027f27303a09c697d971c012bccd70', src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), h("div", { key: 'c528bc660faa761a1b0eb3d1d2f08fff2a38431f', class: "pms-auth__card" }, h("div", { key: 'b153b9bb9a4d67c210a2b89f52936cb418993188', class: "pms-auth__form", onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (h("div", { key: 'ef6fba7eae476890ac05f8d3b998ec50446bb044' }, h("hr", { key: '3250ce5ecc570e7ea48595e4639214f4fa906b80', class: "pms-auth__divider" }), h("div", { key: '3e30dd6e4bdbf8be4b49585a6abe197b65cb9dbc', class: "pms-auth__apps" }, h("a", { key: 'd1c5a0fce6d651a2807206af333c15a88a7cb33c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, h("wa-icon", { key: 'edf9d6379ea150a994e1c928399428449ccb56c1', style: { fontSize: '1.5rem' }, name: "app-store", family: "brands" })), h("a", { key: '0f0fa0bdc2248732bed8a0413e1693898f6cb775', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, h("wa-icon", { key: '54e8a498a56aa9ff772290d8870d15d5f25c329d', style: { fontSize: '1.5rem' }, name: "google-play", family: "brands" }))), h("ir-custom-button", { key: 'b3945c9f953a4afbbe81bcfe4d346a7292257c9e', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "m", href: "https://info.igloorooms.com/signup", target: "_blank" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), h("div", { key: 'af1ea2fa0366f2a3b4b5ab84f07138c402d2d609', class: "pms-auth__footer" }, h("a", { key: '50314df14111076363dfbf82734ca99ec163031d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), h("span", { key: '42e5751b1d0238a67c0396d5c17bc7475f51b3d3' }, t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
