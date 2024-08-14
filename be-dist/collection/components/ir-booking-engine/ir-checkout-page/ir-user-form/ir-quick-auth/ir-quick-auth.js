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
        return (h(Host, { key: '53612f9e344092d3c4659fa3d2d1517688dda5b8' }, h("div", { key: '1f3b4e7618718c4cc85abec5e544a6a6a441653a', class: 'quick-auth-container' }, h("div", { key: '20766d93ef898f29d9e108f3f4d7ad6671a734c1', class: "booking-reminder" }, h("ir-icons", { key: '0b0e0d51d4dea37052c680f48202f321aaa28720', name: "arrow_right" }), h("p", { key: '9ef02b8d351ab4f17212179e0287482c0bba736c', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'c17147954e3745c46efffa134419f32583bd855c', class: "social-container" }, h("ir-button", { key: '7eea12f1023fd4af0e477a3a2ae70b95e34dff02', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'ecf486a1a7df4a3f5d3536984b3497cc42d5aa92', slot: "left-icon" }, h("svg", { key: 'aea7f05f6155c418a1b12bc2239d8822da74b39d', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '24bd573d9095b399d910a38eb9acd43b1c936c8b', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'd30f932791061aee2b6d107686012f33633374bb', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'b30a3b138f199044a4e91b7f27f85c382e13a79d', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '596646612bbbfa42bbfaf8e793f3241a68641374', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: 'd68535b1f32b2f1045c9d2ebfa1d3f4cc4459f16', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'f34c4de6b92d272b6f318ef7e278572a91a6cfb6' }, h("clipPath", { key: 'c116849b8ff820961217a06560f68dd7968d02c4', id: "clip0_6707_5591" }, h("rect", { key: 'de64e6d11b7a7a31d005d8f6285c0c17806a5a11', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
