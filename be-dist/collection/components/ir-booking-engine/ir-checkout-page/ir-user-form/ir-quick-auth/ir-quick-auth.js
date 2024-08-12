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
        return (h(Host, { key: '7c7627eef485052d833ccbfa7bd1364b3f61789c' }, h("div", { key: '8fdb80c6a851c8092a6ac47e0d2b87a39437f24d', class: 'quick-auth-container' }, h("div", { key: 'c547342d52e9146a970cef415100bb20e5611fa9', class: "booking-reminder" }, h("ir-icons", { key: 'ed004167514d39f6e857e168d84f506416bd3701', name: "arrow_right" }), h("p", { key: '4cb24b4e34eeb58e79ee0007aa9e6a86cc171ef6', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '286e9d54fd93e6738c75ccb12a637817dd3675c8', class: "social-container" }, h("ir-button", { key: 'c09d9592b99151465cdcc63d310ac59a710c8b21', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '798ce1004511fcabf838edf5b99c8b697d13fee2', slot: "left-icon" }, h("svg", { key: '8fb32cad5f3d358143c1b722ea7021237ca6dc56', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '5c91f320c58c8549a9cef9ae581da4fce05c295b', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '0559af5e49a83013a6734e0232217d5c83eb48db', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '19f7ab13c03f15a21906c7aa8a4ed98c666b55d5', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '565da096e6f32e464e0bb601a4f090e0cdb083e2', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '58a95988931411d8681a13dd4c017fbcf1829f2e', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '12da63e8ff72471e3b04989ccd87b1471e412044' }, h("clipPath", { key: '20edba41da95f24f2b77ed5957192f4b5ce70855', id: "clip0_6707_5591" }, h("rect", { key: '16e75068a65b4e76d324d370b993fba00ec37d1a', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
