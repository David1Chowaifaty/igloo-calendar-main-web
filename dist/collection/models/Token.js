// import axios from 'axios';
import axios from "axios";
import Auth from "./Auth";
class Token extends Auth {
    constructor() {
        super();
        if (!Token.isInterceptorAdded) {
            // axios.defaults.withCredentials = true;
            axios.interceptors.request.use(config => {
                if (Token.token) {
                    config.params = config.params || {};
                    config.params.Ticket = Token.token;
                }
                return config;
            });
            Token.isInterceptorAdded = true;
        }
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
Token.isInterceptorAdded = false;
export default Token;
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
