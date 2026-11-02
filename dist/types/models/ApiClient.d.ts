import Auth from './Auth';
declare class ApiClient extends Auth {
    private baseUrl;
    private static token;
    private static modifiedBaseUrl;
    private static isInterceptorAdded;
    private static isBaseUrlRouterAdded;
    private static isLanguageInjectorAdded;
    /** Payload keys the gateway reads the request language from; city-ledger print endpoints use `lang`. */
    private static readonly LANGUAGE_KEYS;
    private static readonly BODY_METHODS;
    private static readonly IRBE_BASE_URL;
    /** Base URL used for every request when `window.environment === 'alpha'`. */
    private static readonly ALPHA_BASE_URL;
    /** Endpoints served by the IRBE gateway instead of the default `/IR` base URL. */
    private static readonly IRBE_ENDPOINTS;
    constructor();
    private addBaseUrlRouter;
    /**
     * Gives every JSON payload the selected language, read per request from
     * `LocaleController.language` so calls follow a language switch without each
     * service threading it through. An explicit non-empty value wins — components
     * inside a `lang` subtree pass `LocaleController.languageFor(el)` themselves.
     */
    private addLanguageInjector;
    /** Leaves `FormData`, `Blob`, arrays and pre-serialized strings alone. */
    private static isPlainObject;
    /** Read per request so a host page can set `window.environment` after this module loads. */
    private static isAlpha;
    /** When true, `IRBE_ENDPOINTS` stay on the current base URL instead of IRBE. On in alpha. */
    private static disableIrbeRouting;
    getToken(): string;
    setBaseUrl(url: string): void;
    private initialize;
    setApiClient(token: string): void;
}
export default ApiClient;
export declare class MissingApiClientError extends Error {
    constructor(message?: string);
}
