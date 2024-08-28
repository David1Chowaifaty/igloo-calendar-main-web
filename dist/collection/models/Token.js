export class Token {
    constructor() {
        this.token = '';
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
}
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
