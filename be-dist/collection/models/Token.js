export class Token {
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
}
export class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}
//# sourceMappingURL=Token.js.map
