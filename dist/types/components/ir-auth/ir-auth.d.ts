import { EventEmitter } from '../../stencil-public-runtime';
import { type LegacyUserInfo } from "../../services/auth/legacy-auth.service";
export type AuthLanguage = {
    code: string;
    label: string;
};
export type AuthView = 'login' | 'forgotPassword' | 'forgotUsername';
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
export declare class IrAuth {
    el: HTMLIrAuthElement;
    /** The page's current language, e.g. `<%= CurrentLanguage %>`. */
    language: string;
    /** Languages offered by the switcher, as an array or a JSON string of `{ code, label }`. */
    languages: string | AuthLanguage[];
    logoUrl: string;
    /** Hides the app links and the sign-up button when the page runs inside MPO. */
    insideMpo: boolean;
    /** When set together with {@link autoPassword}, signs in on load. */
    autoUsername: string;
    autoPassword: string;
    /**
     * Base URL of the app's WCF service the login endpoints live on — `_apiUri` in
     * `js/CommonLibrary.js`. The default resolves next to the page (`…/Default.aspx` → `…/AppWCF.svc/`).
     */
    apiUrl: string;
    /** Id of the server button whose postback signs the user in (`FormsAuthentication.RedirectFromLoginPage`). */
    redirectButton: string;
    /** Where users who must confirm a one-time password are sent instead. */
    otpUrl: string;
    view: AuthView;
    username: string;
    password: string;
    rememberUsername: boolean;
    forgotPasswordUsername: string;
    email: string;
    isLoading: boolean;
    /** Set once navigation starts, so the submit button stays busy until the page unloads. */
    redirecting: boolean;
    languageList: AuthLanguage[];
    authLanguageChange: EventEmitter<{
        code: string;
    }>;
    /** Fires after a successful login, before redirecting. Call `preventDefault()` to handle navigation yourself. */
    authFinish: EventEmitter<{
        userInfo: LegacyUserInfo;
        requiresOtp: boolean;
    }>;
    private authService;
    private languageSync;
    /** The page's server form this component sits in. */
    private formEl?;
    private schemaCache?;
    componentWillLoad(): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    languageChanged(next: string, previous: string): void;
    parseLanguages(value: string | AuthLanguage[]): void;
    createAuthService(url: string): void;
    /**
     * One schema per field. `ir-validator` uses them to show messages on submit and while
     * typing; the submit handlers re-check them to block the request.
     */
    private get schemas();
    private isValid;
    private switchView;
    /**
     * `ir-input` nests `wa-input` in its own shadow root, out of reach of the form,
     * so Enter in a field no longer submits it natively. Goes through a real submit
     * (caught by {@link handleSubmit}) so every `ir-validator` shows its message.
     */
    private handleKeyDown;
    /**
     * Submits of the server form: the redirect postback (fired by {@link redirect}) goes
     * through untouched; anything else — the submit buttons, Enter — runs the active view.
     */
    private handleSubmit;
    private authenticate;
    private redirect;
    private forgotPassword;
    private forgotUsername;
    private toastSuccess;
    private toastError;
    private readStorage;
    private writeStorage;
    private renderBackToLogin;
    private renderSubmit;
    /** `id` and `name` are the ones the legacy `Default.aspx` markup used, so page scripts can still find the fields. */
    private renderInput;
    private renderLogin;
    private renderForgotPassword;
    private renderForgotUsername;
    /**
     * One translatable sentence; `%1` marks where the privacy-policy link goes, so each
     * language can place it wherever its grammar needs.
     */
    private renderLegalNotice;
    private renderLanguageSelector;
    render(): any;
}
