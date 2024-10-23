import axios from "axios";
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
export default Token;
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
