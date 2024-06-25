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
        return (h(Host, { key: '9b9de079f9f11a47bb338cd3c3158d6254ade309' }, h("div", { key: '90127ad2f4a51a361ec5cb6c097ea68784e3e665', class: 'quick-auth-container' }, h("div", { key: '1e56e41e3b3df260b5399fc6b8b283fd459e4b9f', class: "booking-reminder" }, h("ir-icons", { key: 'f8a2d931bc2809833ee3613a34a3a4ea46ccad8b', name: "arrow_right" }), h("p", { key: 'bdb17ddb278f5771a155e865c5b0aae1c432f224', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'be1addef0837d278b2173257e52656abb7c193a9', class: "social-container" }, h("ir-button", { key: '4374e9c39d4075ba1d273ca8b922a6700ae275cf', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '64ec98a798ff9e1765b50d396ccf70eeb5e22c67', slot: "left-icon" }, h("svg", { key: 'da9d7bfeb7f85217436993f8f08ef2b814f4115b', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'b1895de486589fe92e9e3146eaf4991d06305010', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'b3ed5931334022994603cebcfe9ab257cb172df4', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '5c2bd139c039d23a4765e515dd42492fc79c79ef', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'a89be80cf97ea2d0913cfc1b2872c6798765e94d', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '778edf0de8bff2d44269f5face7d20090dceeef9', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '4712ab78956a1a29f301c4269cabbd737e110bc0' }, h("clipPath", { key: '78d90b9a2c100bfee52ad437b9fb56b2cbcc07fd', id: "clip0_6707_5591" }, h("rect", { key: '21a76f10c92c31d0d472ca1d8fa191e7017ba722', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
