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
        return (h(Host, { key: '6ac34dd074a10126f4c26c09b44f39421da82e44' }, h("div", { key: 'eb2287b36a5bac81865593ef955597ffab4069ee', class: 'quick-auth-container' }, h("div", { key: '316643828eb29b687b4bde7411b236beb68fe80e', class: "booking-reminder" }, h("ir-icons", { key: '7239e98dca8003d5afe211dfc95c346d9a85dfeb', name: "arrow_right" }), h("p", { key: '38e57b95cdc23a0558c54243d0b722f0236a4016', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '551c595659a864e74145c896dc3c88c72c523872', class: "social-container" }, h("ir-button", { key: 'deeb6540c52267463f9ced86bd06c12c5ab43d52', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'e4d24bc6efd7622eb62b8757858f7c12095f0e62', slot: "left-icon" }, h("svg", { key: '353a12b585609d2bf8d561c4c3bacd94bd8ae718', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '19d21d85a289e5f3bd6acec78b83e55522b61d84', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '1539a0cced6ce19261cd1c8b05df0746dd9fc532', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '73917bd41339f2b538f6e4ed0264df6fe5d28c75', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '91c2bd90ee39bcae07dbb71300d4c3e25f71204e', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '568725bfea96dc7a221046fb0fd8fde974bcc993', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '5c6ab70c89312978564b23669c9e20f1f857a284' }, h("clipPath", { key: 'a53fa841daf95fbe6a799dcaa891101fda283480', id: "clip0_6707_5591" }, h("rect", { key: '677d652323d641ff802e3bd8cdadfd5456c8c5b6', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: '757ac60c6c88cf05e27d1e091d2ec9f228a36deb', variants: "outline", haveLeftIcon: true, label: "Continue with Facebook" }, h("svg", { key: 'ea88c2d4dcae9a86757da6466c5c2667b81e41d9', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '73bfc38fe2932ea716dcbca716fabfe1b2153ac3', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '5a685670b4287bc2b8723e48a4b202812ebb6e07', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'fdf120c6adf44e30669c4fa5787e2a3a016b1f75', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'f8fb58c7c576e776d5a058ee8568355eb72c1d12' }, h("clipPath", { key: 'dfd01503e467d301c7c3a099fb4f91ef63a52edd', id: "clip0_1256_132001" }, h("rect", { key: '33f5994e07fbb54dc0111eab45f9ff2b1a5a4172', width: "24", height: "24", fill: "white" })))))))));
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
