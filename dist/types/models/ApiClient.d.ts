import Auth from './Auth';
declare class ApiClient extends Auth {
    private baseUrl;
    private static token;
    private static modifiedBaseUrl;
    private static isInterceptorAdded;
    private static isBaseUrlRouterAdded;
    private static readonly IRBE_BASE_URL;
    /** Base URL used for every request when `window.environment === 'alpha'`. */
    private static readonly ALPHA_BASE_URL;
    /** Endpoints served by the IRBE gateway instead of the default `/IR` base URL. */
    private static readonly IRBE_ENDPOINTS;
    constructor();
    private addBaseUrlRouter;
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
