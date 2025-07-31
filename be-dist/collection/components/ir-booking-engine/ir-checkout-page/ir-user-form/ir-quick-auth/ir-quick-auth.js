import { AuthService } from "../../../../../services/api/auth.service";
import { Host, h } from "@stencil/core";
export class IrQuickAuth {
    constructor() {
        this.authService = new AuthService();
    }
    componentWillLoad() {
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    render() {
        return (h(Host, { key: 'f825b0f32d1e687f3bf5a3d0db9dacfdf916b257' }, h("div", { key: '8ded51ff39f45f6bdd15dd936ea835a9658d9a37', class: 'quick-auth-container' }, h("div", { key: '1e6b01701e03868738f2cc54f911f5de7bedf8ad', class: "booking-reminder" }, h("ir-icons", { key: 'b98602d99e98b51aa47f33c8bd9262a7d57f9760', name: "arrow_right" }), h("p", { key: 'fcc0716354afb2a09706e88052aeaef160a537ea', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '07a8265c0da75347d34a95391b83952468570b38', class: "social-container" }, h("ir-button", { key: '32f3cb7b5e47f88ea85691945afb8d10f4e2d7da', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '3e177deb44e61690e04ef686d361458e6c0dab25', slot: "left-icon" }, h("svg", { key: '04027e99cbd1b6e4c5f23ec5219989c5f6c1071f', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'f858d40cebb1455d883919bb98182d4f3cbec29b', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'c43542c07fab700e3f3b2f9f7fa5e80bad1c0dd0', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '943996b1e4d70efbb8e670ef53d6653fba1e165a', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '70ff10cc103a53289861f46a980e46b76eec1177', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '1d9d62bf6497cf1e2be2138302ab1eb990edbfc6', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '320c7859e529d3f6dee29ef2d81ce751cb4d58de' }, h("clipPath", { key: '787d94b3883e0ac62dcf7647d8a71dd6f645019d', id: "clip0_6707_5591" }, h("rect", { key: 'd476c7b7c48c96f99a57556ecae4ae4f09199f39', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
