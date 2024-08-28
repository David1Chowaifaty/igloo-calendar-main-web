'use strict';

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

exports.MissingTokenError = MissingTokenError;
exports.Token = Token;

//# sourceMappingURL=Token-db8ba99b.js.map