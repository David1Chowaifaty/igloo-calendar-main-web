'use strict';

class InterceptorError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

exports.InterceptorError = InterceptorError;

//# sourceMappingURL=InterceptorError-ed3c5d13.js.map