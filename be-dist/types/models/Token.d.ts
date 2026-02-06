declare class Token {
    private baseUrl;
    private static token;
    private static isInterceptorAdded;
    constructor();
    private initialize;
    getToken(): string;
    setToken(token: string): void;
}
export default Token;
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
