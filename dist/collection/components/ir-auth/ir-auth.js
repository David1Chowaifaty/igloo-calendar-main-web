import { Host, h } from "@stencil/core";
import { z } from "zod";
import ApiClient from "../../models/ApiClient";
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
 * Mount it inside the page's `<form runat="server">` so the hidden `txt_username`
 * field it renders is posted with that form.
 */
export class IrAuth {
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
    languageList = [];
    authLanguageChange;
    /** Fires after a successful login, before redirecting. Call `preventDefault()` to handle navigation yourself. */
    authFinish;
    authService = new LegacyAuthService();
    apiClient = new ApiClient();
    languageSync = new LanguageSync(SCREEN_TABLES.auth, () => LocaleController.load({ tables: SCREEN_TABLES.auth }));
    formEl;
    postedUsernameEl;
    schemaCache;
    componentWillLoad() {
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.auth }).catch(error => console.error('Failed to load login strings', error));
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
        // This form is nested in the page's server form; keep its submit away from ASP.NET's onsubmit.
        e.stopPropagation();
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
            this.isLoading = false;
        }
    }
    redirect(requiresOtp) {
        if (requiresOtp) {
            window.location.href = this.otpUrl;
            return;
        }
        const button = document.getElementById(this.redirectButton);
        if (!button) {
            console.error(`[ir-auth] Redirect button "#${this.redirectButton}" not found; cannot complete the login postback.`);
            return;
        }
        if (!this.postedUsernameEl?.closest('form')) {
            console.warn('[ir-auth] Not inside a <form>: "txt_username" will not be posted with the redirect.');
        }
        // Set directly rather than through render: the postback goes out before the next frame.
        if (this.postedUsernameEl) {
            this.postedUsernameEl.value = this.username;
        }
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
        return (h("ir-custom-button", { class: "pms-auth__submit", type: "submit", variant: "brand", size: "m", loading: this.isLoading }, label));
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
        return (h(Host, { key: '483cf65b068e6ff53630e3f17f994d276e2e5053' }, h("ir-toast", { key: 'd85211413e25cb1f420a2e51292224ed648928d3' }), h("input", { key: 'f51b57dea9e9f6f88d8f77d7b7cefed79e76de06', type: "hidden", name: "txt_username", value: this.username, ref: el => (this.postedUsernameEl = el) }), h("div", { key: 'a213acfdfd7157e5bfa0675ae470d8b9407bfabc', class: "pms-auth__topbar" }, h("div", { key: '30c66d979d84942fffe53140e5c465fdd4b330e3', class: "pms-auth__brand" }, this.logoUrl && h("img", { key: '1b3ea9fc70bfeab841a8e03ed1def047db565f50', src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), h("div", { key: '89b28c64ad42f2cdca669d3a8bde8500a0ddf9f3', class: "pms-auth__card" }, h("form", { key: '46df48a2fb3780ca94289dffbe3fd287d8423981', novalidate: true, ref: el => (this.formEl = el), onSubmit: e => this.handleSubmit(e), onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (h("div", { key: '0a22733de8c0f6614d305e834da04b1657eea0d3' }, h("hr", { key: '07addacc03a8ee2e67c2a70f41cfbf18d579e1ca', class: "pms-auth__divider" }), h("div", { key: 'feb101e617d472053d86d15ffdb01b02f976b7d0', class: "pms-auth__apps" }, h("a", { key: 'fa7f32e2a68a0ebb66b7849797d8e1a7a1ccd568', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, h("wa-icon", { key: '8e8685d46f12478a2ba82f2944ebc89592d51692', style: { fontSize: '1.5rem' }, name: "app-store", family: "brands" })), h("a", { key: 'b69f9eff961e855b33ce5969b965dbfc2b124c02', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, h("wa-icon", { key: '25e80ab3135b7993c9a6127f0cfc46d50e6fd1f3', style: { fontSize: '1.5rem' }, name: "google-play", family: "brands" }))), h("ir-custom-button", { key: '50a68851bcc9ed3c0c47ed8efd59344e8b8f9571', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "m", href: "https://info.igloorooms.com/signup", target: "_blank" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), h("div", { key: 'eb3e607891cd478170b46ff8ab5b23aa4b59e76d', class: "pms-auth__footer" }, h("a", { key: 'd622d86eafafb5db0cb5d7def42f01190e58c762', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), h("span", { key: 'dfcc87d87d5d5f65846fbbff3ff145a88ef7281d' }, t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
    static get is() { return "ir-auth"; }
    static get encapsulation() { return "scoped"; }
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
            "baseUrl": {
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
                    "text": "Overrides the axios base URL the login endpoints are posted to."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "base-url"
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
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "languages",
                "methodName": "parseLanguages"
            }, {
                "propName": "baseUrl",
                "methodName": "applyBaseUrl"
            }];
    }
}
