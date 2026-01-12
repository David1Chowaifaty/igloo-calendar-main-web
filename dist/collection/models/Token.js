import axios from "axios";
import Auth from "./Auth";
class Token extends Auth {
    baseUrl = 'https://gateway.igloorooms.com/IR';
    static token = '';
    static modifiedBaseUrl = false;
    static isInterceptorAdded = false;
    constructor() {
        super();
        if (Token.modifiedBaseUrl) {
            return;
        }
        Token.modifiedBaseUrl = true;
        axios.defaults.baseURL = this.baseUrl;
    }
    getToken() {
        return Token.token;
    }
    setBaseUrl(url) {
        console.log(this.baseUrl);
        this.baseUrl = url;
        // axios.defaults.baseURL = this.baseUrl;
    }
    initialize() {
        if (Token.isInterceptorAdded) {
            return;
        }
        axios.interceptors.request.use(config => {
            config.baseURL = this.baseUrl;
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
export default Token;
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
