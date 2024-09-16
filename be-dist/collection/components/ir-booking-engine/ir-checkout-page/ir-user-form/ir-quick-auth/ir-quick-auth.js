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
        return (h(Host, { key: '87c817bc59506641704954aa335aabf6a52b510d' }, h("div", { key: 'ffeb0b0913a3002900f7466a643a7e6693ef0bcf', class: 'quick-auth-container' }, h("div", { key: '789560e33d12da5c199dc3e488006f51d7791d95', class: "booking-reminder" }, h("ir-icons", { key: '4909da56bea01eb1eced4e42083eec4a88f7e537', name: "arrow_right" }), h("p", { key: '58e6aa782c7b17e7aa82f03ad7f2b9d3744d8190', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '4ca55fe458b8ef85026ce70d4138028fdac8c152', class: "social-container" }, h("ir-button", { key: '88420c2dc03706004530fd225dd239b442bc70cc', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'cec05b5d192398c3a4a40459d3f082862dcadd96', slot: "left-icon" }, h("svg", { key: '8be08ff4ed3984210f1d21f7ce48f4b708af8ac1', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4a4858e69809d026ed1656d13adf3e6bb0bfa079', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '666f4cc3d3a1c04a1fa9e0338afa5bf7f30f5caf', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '81dd13ebace5d6683caa76698a02e4a072a12fa7', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'fa480946e49b634ba9b08c55f1bf42038554300b', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '95541ab4f6e6eb84d126c8607dbe712e3c78fc91', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '592c8841df06b7612a673ab7ee094bf3102b135d' }, h("clipPath", { key: 'ef6846e88cff3c9ecaae493d0283918bb0f4083f', id: "clip0_6707_5591" }, h("rect", { key: '30109e106398d0c1f81151496699a74248ffb585', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
