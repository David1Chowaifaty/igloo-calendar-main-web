class Token {
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
class MissingTokenError extends Error {
    constructor(message = 'Missing token!!') {
        super(message);
        this.name = 'MissingTokenError';
    }
}

export { MissingTokenError as M, Token as T };

//# sourceMappingURL=Token.js.map