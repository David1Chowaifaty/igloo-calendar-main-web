import Auth from './Auth';
declare class Token extends Auth {
    private baseUrl;
    private static token;
    private static modifiedBaseUrl;
    private static isInterceptorAdded;
    constructor();
    getToken(): string;
    private initialize;
    setToken(token: string): void;
}
export default Token;
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
