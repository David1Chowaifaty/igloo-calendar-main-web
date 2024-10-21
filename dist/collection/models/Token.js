import axios from "axios";
import Auth from "./Auth";
class Token extends Auth {
    constructor() {
        super();
        this.baseUrl = 'https://gateway.igloorooms.com/IR';
    }
    initialize() {
        if (Token.isInterceptorAdded) {
            return;
        }
        axios.defaults.baseURL = this.baseUrl;
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
Token.isInterceptorAdded = false;
export default Token;
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
