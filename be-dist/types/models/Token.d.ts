export declare class Token {
    private token;
    getToken(): string;
    setToken(token: string): void;
}
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
