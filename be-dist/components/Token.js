import { a as axios } from './axios.js';

class Token {
    constructor() {
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        axios.defaults.baseURL = this.baseUrl;
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
        if (token === Token.token) {
            return;
        }
        Token.token = token;
        this.initialize();
    }
}
Token.token = '';
Token.isInterceptorAdded = false;
class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}

export { MissingTokenError as M, Token as T };

//# sourceMappingURL=Token.js.map