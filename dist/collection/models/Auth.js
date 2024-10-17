import axios from "axios";
class Auth {
    constructor() {
        this.baseUrl = 'https://gateway.igloorooms.com/IR';
        if (!Auth.isAuthUsed) {
            this.init();
        }
    }
    async init() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = this.baseUrl;
        Auth.isAuthUsed = true;
        const { data } = await axios.post('/Is_Already_Athenticated');
        this.setIsAuthenticated(data.My_Result);
    }
    subscribe(callback) {
        Auth.subscribers.push(callback);
    }
    unsubscribe(callback) {
        Auth.subscribers = Auth.subscribers.filter(sub => sub !== callback);
    }
    setIsAuthenticated(value) {
        Auth._isAuthenticated = value;
        Auth.notifySubscribers(value);
    }
    static notifySubscribers(isAuthenticated) {
        Auth.subscribers.forEach(callback => callback(isAuthenticated));
    }
    isAuthenticated() {
        return Auth._isAuthenticated;
    }
}
Auth.isAuthUsed = false;
Auth._isAuthenticated = false;
Auth.subscribers = [];
export default Auth;
//# sourceMappingURL=Auth.js.map
