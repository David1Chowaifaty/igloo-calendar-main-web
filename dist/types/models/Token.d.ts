export declare class Token {
    private token;
    constructor();
    setToken(token: string): void;
    getToken(): string;
}
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
