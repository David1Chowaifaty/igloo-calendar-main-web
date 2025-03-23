import { a as axios } from './axios-8ipPhlJK.js';

// import axios from 'axios';
class Auth {
    constructor() {
        if (!Auth.isAuthUsed) {
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
Auth.isAuthUsed = false;
Auth._isAuthenticated = false;
Auth.subscribers = [];

class Token extends Auth {
    constructor() {
        super();
        this.baseUrl = 'https://gateway.igloorooms.com/IR';
        if (Token.modifiedBaseUrl) {
            return;
        }
        Token.modifiedBaseUrl = true;
        axios.defaults.baseURL = this.baseUrl;
    }
    getToken() {
        return Token.token;
    }
    initialize() {
        if (Token.isInterceptorAdded) {
            return;
        }
        axios.interceptors.request.use(config => {
            if (!Token.token) {
                throw new MissingTokenError();
            }
            config.headers.Authorization = Token.token;
            // config.params = config.params || {};
            // config.params.Ticket = Token.token;
            return config;
        });
        Token.isInterceptorAdded = true;
    }
    setToken(token) {
        Token.token = token;
        this.initialize();
    }
}
Token.token = '';
Token.modifiedBaseUrl = false;
Token.isInterceptorAdded = false;
class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}

export { Token as T };
//# sourceMappingURL=Token-BTEbRZ0j.js.map

//# sourceMappingURL=Token-BTEbRZ0j.js.map