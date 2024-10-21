import Auth from './Auth';
declare class Token extends Auth {
    private baseUrl;
    private static token;
    private static isInterceptorAdded;
    constructor();
    private initialize;
    setToken(token: string): void;
}
export default Token;
export declare class MissingTokenError extends Error {
    constructor(message?: string);
}
