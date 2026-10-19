import Auth from './Auth';
declare class ApiClient extends Auth {
    private baseUrl;
    private static token;
    private static modifiedBaseUrl;
    private static isInterceptorAdded;
    private static isBaseUrlRouterAdded;
    /** When true, `IRBE_ENDPOINTS` use the default base URL instead of IRBE. */
    private static disableIrbeRouting;
    private static readonly IRBE_BASE_URL;
    /** Endpoints served by the IRBE gateway instead of the default `/IR` base URL. */
    private static readonly IRBE_ENDPOINTS;
    constructor();
    private addBaseUrlRouter;
    static setDisableIrbeRouting(disabled: boolean): void;
    getToken(): string;
    setBaseUrl(url: string): void;
    private initialize;
    setApiClient(token: string): void;
}
export default ApiClient;
export declare class MissingApiClientError extends Error {
    constructor(message?: string);
}
