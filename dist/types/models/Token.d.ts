import Auth from './Auth';
declare class Token extends Auth {
    private static token;
    private static isInterceptorAdded;
    constructor();
    setToken(token: string): void;
    isAuthenticated(): boolean;
    getToken(): string;
}
export default Token;
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
