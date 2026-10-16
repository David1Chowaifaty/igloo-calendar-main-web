import Auth from './Auth';
declare class ApiClient extends Auth {
    private baseUrl;
    private static token;
    private static modifiedBaseUrl;
    private static isInterceptorAdded;
    constructor();
    getToken(): string;
    setBaseUrl(url: string): void;
    private initialize;
    setApiClient(token: string): void;
}
export default ApiClient;
export declare class MissingApiClientError extends Error {
    constructor(message?: string);
}
