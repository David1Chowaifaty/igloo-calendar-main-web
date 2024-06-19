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
        return (h(Host, { key: 'f1ede7a77fe737e7d2aeef5622667ea3e4c8fc32' }, h("div", { key: 'a98b1e583fe1dbb0abc93ee4561fe7e74b66231d', class: 'quick-auth-container' }, h("div", { key: '0ce9b26565c97f68636c99045e0b36b93cc41f4e', class: "booking-reminder" }, h("ir-icons", { key: 'a9e499f2252542eeb9beffc44ac9121f2f9ba1ec', name: "arrow_right" }), h("p", { key: '3243b9a1d5e1b379c9d3abcba227fabcc3917a3b', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'a0c37980c1776e7ce7bf43920799cd7a1b80963a', class: "social-container" }, h("ir-button", { key: '6efa81f858d53b784a08307e7a9712d019e56377', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'd2589851b9fd1aacbfde6dcd3f9c0dd9bfe764c6', slot: "left-icon" }, h("svg", { key: '8d57b2d243a15919ea3939e6fbd754dcd04196ef', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '4f1b52ae1058837c0da6916940f78a765d7b026e', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '58ee2371591a429fda9c423d33fb5c048ca51f60', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'd9238f9126c5ea129faeb9724053750a11003335', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '61a5ad50fb248a1decbe25475295d8248a4fc053', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '4c658ab8c81580e56721e9ff29c74f300880541c', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'e9de619bb1c3797ed7aee9c5196749aacee0dec5' }, h("clipPath", { key: 'c93b555cf91648dddf9a814863f6cb8ef675273e', id: "clip0_6707_5591" }, h("rect", { key: 'd6dcd3c32d7cda2445e08a6e464ecb7e31635d89', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
