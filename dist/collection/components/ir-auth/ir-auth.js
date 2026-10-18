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
 * `Get_Startup_Data_Signature` → `Get_Startup_Data`). Navigation is left to the
 * host page through {@link authFinish}, since the final redirect is a server
 * postback.
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
    apiClient = new ApiClient();
    languageSync = new LanguageSync(SCREEN_TABLES.auth, () => LocaleController.load({ tables: SCREEN_TABLES.auth }));
    formEl;
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
        return (h(Host, { key: '29e3c50ff8a4b5147f6fb537268e80ec8b8dd599' }, h("ir-toast", { key: '9af775572573e1ff434dfce59b30f22bc5252094' }), h("div", { key: '26472cb4d7179a778124e743c94aadbdb133c6a7', class: "pms-auth__topbar" }, h("div", { key: '00df8b2fcdcfbd26d261f85bf25709d5d3e0cf85', class: "pms-auth__brand" }, this.logoUrl && h("img", { key: '8c3d729f915704f9c437c7e6c20e431c210166d2', src: this.logoUrl, alt: "igloorooms" })), this.renderLanguageSelector()), h("div", { key: '54461cd9e6884c0c4512212fe2ea58b925bc39a5', class: "pms-auth__card" }, h("form", { key: 'd85e3d0b1c22e2326a765767c5bdf18f25c45070', novalidate: true, ref: el => (this.formEl = el), onSubmit: e => this.handleSubmit(e), onKeyDown: e => this.handleKeyDown(e) }, this.view === 'login' && this.renderLogin(), this.view === 'forgotPassword' && this.renderForgotPassword(), this.view === 'forgotUsername' && this.renderForgotUsername()), !this.insideMpo && (h("div", { key: '2bbc73fa1f93ec9afdb3afc013c0c25b14c4e489' }, h("hr", { key: '65ca6b6899cdcf6008d2da32d15044ccf83ca5f1', class: "pms-auth__divider" }), h("div", { key: 'a52e0b8bf4449a7e527b1fc95c090bd1ec87db80', class: "pms-auth__apps" }, h("a", { key: '9a8e39585d7c1dd2a2bb1f25699dcf0c90cbe201', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new", "aria-label": t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) }, h("wa-icon", { key: '6f10cefc607a059c0a9f4a7f781ace32b7854a76', style: { fontSize: '1.5rem' }, name: "app-store", family: "brands" })), h("a", { key: '4b5a351c61c1d83b4247983d53940a5e14e88a1d', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new", "aria-label": t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }, h("wa-icon", { key: '6368740671895f77175d5dbe374b890984bfc35e', style: { fontSize: '1.5rem' }, name: "google-play", family: "brands" }))), h("ir-custom-button", { key: 'fc3d47410c0c189bbbe6b4427ae1d78d52a290ec', class: "pms-auth__signup", appearance: "outlined", variant: "neutral", size: "m", href: "https://info.igloorooms.com/signup", target: "_blank" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' }))))), h("div", { key: '44db61c2f1bb28724d9378c463c883a380e8804f', class: "pms-auth__footer" }, h("a", { key: '2d25b95b74b784953487869c756a2fe439a3c124', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyPolicy', { fallback: 'Privacy policy' })), h("span", { key: '5436f2024da41824afb8985abe98e0ef2ca7158b' }, t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
                    "text": ""
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
