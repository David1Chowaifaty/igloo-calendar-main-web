import { AuthService } from "../../../../../services/api/auth.service";
import app_store from "../../../../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrQuickAuth {
    constructor() {
        this.authService = new AuthService();
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    render() {
        return (h(Host, { key: '28361dde979bcd36f6fd80575d0b0fbaa4680c78' }, h("div", { key: '4e2623a273b19e4053a0cc35db9e2fdcc7ad05fe', class: 'quick-auth-container' }, h("div", { key: '9e84bfabdce8606b73ecdae2a046b2ef261f5701', class: "booking-reminder" }, h("ir-icons", { key: '994e573a27048958b285568b3e81fa1c2ba3e24f', name: "arrow_right" }), h("p", { key: '958ed18b0992500b2595859f0970bb10d130b26d', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '36577b94d53c76eee9c6379e36b279e77610613a', class: "social-container" }, h("ir-button", { key: 'ebb2e6ca9badafb2b7d2582f6b471a1070f320d3', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'bcdf0207e3ef17b98b31257ccc830b7ec0b4766d', slot: "left-icon" }, h("svg", { key: '6556b193fc0e930c6ca7a0887ce7527dc847881d', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '1a48a0d4e3930ac5c5885c3a4b4cdea489c120a6', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'a8938cae312f2b8da2aedad193b99e7479c561e3', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'c840e83060c452686c36d794768469d6f29d1dfc', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '19040f15a7c24655b3acd992d680708cade9c533', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '87d01b9f698bc8763b64de5196fef0c785da1314', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'aa6e225bfa75520c4df214e77175b9e25e427d2c' }, h("clipPath", { key: '5701a1aeb9499decc30559eadf1e49fa08a4ca74', id: "clip0_6707_5591" }, h("rect", { key: '41ca669c01b82844280cdfcf4383c27734e07c6a', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
    }
    static get is() { return "ir-quick-auth"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
}
//# sourceMappingURL=ir-quick-auth.js.map
