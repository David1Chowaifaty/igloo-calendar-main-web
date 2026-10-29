import axios from "axios";
import Auth from "./Auth";
class ApiClient extends Auth {
    baseUrl = 'https://gateway.igloorooms.com/IR';
    static token = '';
    static modifiedBaseUrl = false;
    static isInterceptorAdded = false;
    static isBaseUrlRouterAdded = false;
    static IRBE_BASE_URL = 'https://gateway.igloorooms.com/IRBE';
    /** Base URL used for every request when `window.environment === 'alpha'`. */
    static ALPHA_BASE_URL = 'https://gateway.igloorooms.com/IRALPHA';
    /** Endpoints served by the IRBE gateway instead of the default `/IR` base URL. */
    static IRBE_ENDPOINTS = new Set(['/Set_Exposed_Restriction_Per_Room_Type', '/Get_Rooms_To_Check_In', '/Get_Rooms_To_Check_Out']);
    constructor() {
        super();
        this.addBaseUrlRouter();
        if (ApiClient.modifiedBaseUrl) {
            return;
        }
        ApiClient.modifiedBaseUrl = true;
        axios.defaults.baseURL = this.baseUrl;
    }
    addBaseUrlRouter() {
        if (ApiClient.isBaseUrlRouterAdded) {
            return;
        }
        axios.interceptors.request.use(config => {
            if (ApiClient.isAlpha()) {
                config.baseURL = ApiClient.ALPHA_BASE_URL;
            }
            const path = config.url?.split('?')[0];
            if (!ApiClient.disableIrbeRouting() && path && ApiClient.IRBE_ENDPOINTS.has(path)) {
                config.baseURL = ApiClient.IRBE_BASE_URL;
            }
            return config;
        });
        ApiClient.isBaseUrlRouterAdded = true;
    }
    /** Read per request so a host page can set `window.environment` after this module loads. */
    static isAlpha() {
        return typeof window !== 'undefined' && window.environment === 'alpha';
    }
    /** When true, `IRBE_ENDPOINTS` stay on the current base URL instead of IRBE. On in alpha. */
    static disableIrbeRouting() {
        return ApiClient.isAlpha();
    }
    getToken() {
        return ApiClient.token;
    }
    setBaseUrl(url) {
        this.baseUrl = url;
        axios.defaults.baseURL = this.baseUrl;
    }
    initialize() {
        if (ApiClient.isInterceptorAdded) {
            return;
        }
        axios.interceptors.request.use(config => {
            if (!ApiClient.token) {
                throw new MissingApiClientError();
            }
            config.headers.Authorization = ApiClient.token;
            config.headers['X-ClientId'] = 'EXTRANET';
            // config.params = config.params || {};
            // config.params.Ticket = ApiClient.token;
            return config;
        });
        ApiClient.isInterceptorAdded = true;
    }
    setApiClient(token) {
        ApiClient.token = token;
        this.initialize();
    }
}
export default ApiClient;
export class MissingApiClientError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingApiClientError';
    }
}
