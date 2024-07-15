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
        return (h(Host, { key: 'a34376b681e75dd860413c6371916958a5bbb656' }, h("div", { key: 'd22efddc3e39b82b5df55d037f5298e28117696c', class: 'quick-auth-container' }, h("div", { key: '58d6af3cfbcee6b0ef366f1d2418b2a85cbd2dea', class: "booking-reminder" }, h("ir-icons", { key: 'e9b7eca699f6da4098b7dadc5d912d000e2975f8', name: "arrow_right" }), h("p", { key: '51a3dc79ced0642d4caec2d608f83000ba0424ec', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '0178d277064a7ccbc631e7f4ae749886d2fbfc93', class: "social-container" }, h("ir-button", { key: '55909cc1470f8f811d9df8fc9fc1cd9325b9fab7', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'f94c7192104640cf980621dd8c4c537959cdf32c', slot: "left-icon" }, h("svg", { key: '41f5577f492625d31d0b8c47f8660c88d558d946', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '933e1e9c041384b6a997f1578222b2647b8c7da8', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'be372fadae2f3efe2347cba100feabe33f5fa20d', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '63b6dbcf1a19755e80ef9bb1dd99566005afa6c0', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'fa7804c4e0d395cd056ef97658ef0a66da10892b', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '72454a753ba60182bcec91655a24b5d6224ad365', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'b09f0605efd1e22193fbc68b7e3ee627de98eec2' }, h("clipPath", { key: 'b457a5b8bda07d00d7e48c5dbb0ac5e4e2443e04', id: "clip0_6707_5591" }, h("rect", { key: '11fd033912fc8f316716a443fa0170ff76a424aa', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
