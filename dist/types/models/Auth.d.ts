declare class Auth {
    private static isAuthUsed;
    private static _isAuthenticated;
    private baseUrl;
    private static subscribers;
    constructor();
    init(): Promise<void>;
    subscribe(callback: (isAuthenticated: boolean) => void): void;
    unsubscribe(callback: (isAuthenticated: boolean) => void): void;
    setIsAuthenticated(value: boolean): void;
    private static notifySubscribers;
    isAuthenticated(): boolean;
}
export default Auth;
