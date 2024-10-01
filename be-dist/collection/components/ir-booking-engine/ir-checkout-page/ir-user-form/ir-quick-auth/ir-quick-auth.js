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
        return (h(Host, { key: '3674b4a531debe70b04f32992c0e0b3371132b91' }, h("div", { key: 'd50e6a58a4bfcbd0836f6a5f3d0b881a21d3673e', class: 'quick-auth-container' }, h("div", { key: '7d59e6bd4c267f63e2912ac2b249d96a41b55029', class: "booking-reminder" }, h("ir-icons", { key: 'ee51c82943f139fce1be679796920a1657ebc48b', name: "arrow_right" }), h("p", { key: '4effcb2f70b6d805c375cb6af87f43dbba974c0d', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'bd933e07ee74de8d76732cb59e7cf429a6945bc3', class: "social-container" }, h("ir-button", { key: '824ea446c09476e0bdec1fbf0e9fd509e87a3f1c', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'e0efdcfdf0410ed7237b4ddaf445f2f0a49076a6', slot: "left-icon" }, h("svg", { key: '9786cf2e7ec54b4e62692b1d11d6360228f46b3a', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3b220684d027891f8e950eca76ff9e9ccbcd2b48', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '8cea4109765cfe0096e13ae66e526c7775467763', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'c06b1e440370d5d0abc3eec295f3628c377a4118', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '8c0d7c1e7ceab8c39d68ad0423810e1c43679566', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: 'f811286ab172de64b3509f930d8e930e14e09cb7', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'd42eb2f4830ca2735963d477d7f9f90b0bdea3f5' }, h("clipPath", { key: 'f4806c0467d06b15a11f2058a29597aa5e417a52', id: "clip0_6707_5591" }, h("rect", { key: '3956b30beffc87b3f946302c4576f11e324e91e7', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
