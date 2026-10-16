import { a as axios } from './axios-B50ozOIF.js';

// import axios from 'axios';
class Auth {
    static isAuthUsed = false;
    static _isAuthenticated = false;
    static subscribers = [];
    constructor() {
        {
            this.init();
        }
    }
    async init() {
        // axios.defaults.withCredentials = true;
        // Auth.isAuthUsed = true;
        // const { data } = await axios.post('/Is_Already_Athenticated');
        // this.setIsAuthenticated(data.My_Result);
    }
    subscribe(callback) {
        Auth.subscribers.push(callback);
    }
    unsubscribe(callback) {
        Auth.subscribers = Auth.subscribers.filter(sub => sub !== callback);
    }
    setIsAuthenticated(value) {
        Auth._isAuthenticated = value;
        Auth.notifySubscribers(value);
    }
    static notifySubscribers(isAuthenticated) {
        Auth.subscribers.forEach(callback => callback(isAuthenticated));
    }
    isAuthenticated() {
        return Auth._isAuthenticated;
    }
}

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
class MissingApiClientError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingApiClientError';
    }
}

export { ApiClient as A };
