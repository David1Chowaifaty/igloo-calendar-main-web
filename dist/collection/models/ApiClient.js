import axios from "axios";
import Auth from "./Auth";
class ApiClient extends Auth {
    baseUrl = 'https://gateway.igloorooms.com/IR';
    static token = '';
    static modifiedBaseUrl = false;
    static isInterceptorAdded = false;
    constructor() {
        super();
        if (ApiClient.modifiedBaseUrl) {
            return;
        }
        ApiClient.modifiedBaseUrl = true;
        axios.defaults.baseURL = this.baseUrl;
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
