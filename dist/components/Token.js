import { a as axios } from './axios.js';

class Auth {
    constructor() {
        this.baseUrl = 'https://gateway.igloorooms.com/IR';
        if (!Auth.isAuthUsed) {
            this.init();
        }
    }
    async init() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        Auth.isAuthUsed = true;
        const { data } = await axios.post('/Is_Already_Athenticated');
        this.setIsAuthenticated(data.My_Result);
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

// import axios from 'axios';
class Token extends Auth {
    // private static isInterceptorAdded = false;
    constructor() {
        super();
        // if (!Token.isInterceptorAdded) {
        //   // axios.defaults.withCredentials = true;
        //   axios.interceptors.request.use(config => {
        //     if (Token.token) {
        //       config.params = config.params || {};
        //       config.params.Ticket = Token.token;
        //     }
        //     return config;
        //   });
        //   Token.isInterceptorAdded = true;
        // }
    }
    setToken(token) {
        Token.token = token;
    }
    isAuthenticated() {
        return super.isAuthenticated();
    }
    getToken() {
        if (!Token.token) {
            throw new MissingTokenError();
        }
        return Token.token;
    }
}
Token.token = '';
class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}

export { Auth as A, Token as T };

//# sourceMappingURL=Token.js.map