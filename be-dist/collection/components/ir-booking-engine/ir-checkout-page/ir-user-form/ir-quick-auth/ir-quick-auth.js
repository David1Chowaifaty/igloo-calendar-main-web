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
        return (h(Host, { key: '1b4098791d5e93433d242cb2d231e4847bb8cd07' }, h("div", { key: '25d435a0223f4cc090b1a693320075dfb3c8482f', class: 'quick-auth-container' }, h("div", { key: '28708eb1cafa4e3a4fcc06fb803982d79e3156b3', class: "booking-reminder" }, h("ir-icons", { key: '018cbd01aacd013aadb0bd281dcbeecaef485dc7', name: "arrow_right" }), h("p", { key: '2a8dc66c8ff4a46ca8c563fc9816a1a61d1fcd7b', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '6147608f10d6a1a80389f18c1069be624b274542', class: "social-container" }, h("ir-button", { key: '60373ccf3960037dbc2f83b6d0fc42f286e4d4e9', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'a062a860168d40cac278e6e77b12c1b3bc31c150', slot: "left-icon" }, h("svg", { key: '1d8606c7519bbad3ae0772acc1280a3f4ba3ccae', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '533dfea415af4a46f10885eded021aebea0f4a4d', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '6802fc7eb65633b1f0ab26e1ba91d6542b36be64', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '868afd75dad3cc6aa0c889c48b71adae23bf3ff2', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '6039c34f1b2d0541e386546d0a9ee58adae6fed0', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: 'f7c3d753896a79680e69a6a6c23a541904634490', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '0793ca64f1e882c5c8306015f8612b8bcd68b98a' }, h("clipPath", { key: '9228daccb1262173ef33ab8dafce2091cd5a5661', id: "clip0_6707_5591" }, h("rect", { key: '912c2bf38a2a2673a1ba4a816ab50555ce3d514a', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
