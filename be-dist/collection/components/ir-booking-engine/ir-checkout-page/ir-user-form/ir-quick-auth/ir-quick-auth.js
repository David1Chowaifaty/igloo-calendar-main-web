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
        return (h(Host, { key: 'a8b991a9463cfeb33eba93f818e59a8f73a53722' }, h("div", { key: '153eeaa69a0af027f84e9b94944b01ddb67db6cd', class: 'quick-auth-container' }, h("div", { key: '4e29ed92a16c2be9f6fbe096988b92525aae1c40', class: "booking-reminder" }, h("ir-icons", { key: 'd23653c479fc339c27f329f9926fbf99dc9d8a28', name: "arrow_right" }), h("p", { key: 'd075f0ca0ebbd6424aa6c35481fa3b4e79b509b5', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '8229df98541605313e85a40a5459c51e952c49a3', class: "social-container" }, h("ir-button", { key: '1866a03071e8e34f9dd3994afc01e08443b3bf3c', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '451862edb3913e1eaa82c17db914f1f561834662', slot: "left-icon" }, h("svg", { key: 'c22e4317f9a926ca0457b3ead724dfe2933f5e53', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'dc66ab8e384d88f922de511a6b2cc71b8bf3603b', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'ffd2bf69e96f397036993dbff4335998d972758a', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '32b07ae7ec927016a022972f96d55419ac32a33c', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '76c0ce5e42440285e6886086863b172b78f112b5', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '363cacd5f61f437d9ffc693f7fb122a6eff46822', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '7e757cd8605d31e348f2dcf7b804dd64ee3afeac' }, h("clipPath", { key: 'da824e9a458b0d70c50266090cadb3a2144452d5', id: "clip0_6707_5591" }, h("rect", { key: '1da8fe38e5e9e71612487e3d6f2aa05be05319e2', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
