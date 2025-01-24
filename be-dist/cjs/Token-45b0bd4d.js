'use strict';

const axios = require('./axios-bc0bd15c.js');

class Token {
    constructor() {
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        axios.axios.defaults.baseURL = this.baseUrl;
    }
    initialize() {
        if (Token.isInterceptorAdded) {
            return;
        }
        axios.axios.interceptors.request.use(config => {
            if (!Token.token) {
                throw new MissingTokenError();
            }
            const prevHeaders = config.headers || {};
            if (!prevHeaders.hasOwnProperty('Authorization') || !prevHeaders['Authorization']) {
                config.headers.Authorization = Token.token;
            }
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

exports.Token = Token;

//# sourceMappingURL=Token-45b0bd4d.js.map