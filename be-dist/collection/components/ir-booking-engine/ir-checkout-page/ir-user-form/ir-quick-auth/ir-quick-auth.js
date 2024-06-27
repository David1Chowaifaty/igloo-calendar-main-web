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
        return (h(Host, { key: '39fca6ea3b1ba247696ca2d5a3be082c9a00440a' }, h("div", { key: '68bfe5e4f1c0ad7467f8bb74f7f581028a032721', class: 'quick-auth-container' }, h("div", { key: '34fd446d6fa1ed1c0fee2b58ee84105ca38c4dc7', class: "booking-reminder" }, h("ir-icons", { key: 'e0ff7687f688bf27a451430f8b1c09a34714739c', name: "arrow_right" }), h("p", { key: '3e2e0825e707ac46df11edefe7b733d79312b209', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '323588f94c3bb14c731027c36f1744eeed2f48b5', class: "social-container" }, h("ir-button", { key: '57911c671dc562ee43c278bcfee8dc62d3933673', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '0286a8e0488ea33f32b00f0de4d09559e2683bdb', slot: "left-icon" }, h("svg", { key: '0442fe3222af46f56b3017123796c843459e8d51', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '894c5d8082817b53df6d639192428744f9cbb67d', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '30719306fe47c30c1dda90c6b4d83d5d2c21f7a2', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'cfd4c82915127433d0dbdef74477af6de5da8bf7', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'a99651187faf72cc15239ff81100b63e8791af42', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: 'b302c51d4dfdac3b21644a5b1f28ff3fa97ab346', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '4ea1582d9693936b52f8efac756329114c206d5c' }, h("clipPath", { key: '5c7b55ecaf55c54d5ffb96b2215db5bbed659ec5', id: "clip0_6707_5591" }, h("rect", { key: 'f6fe17892f84dcc97bc17f655f0d0c9ffc875423', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
