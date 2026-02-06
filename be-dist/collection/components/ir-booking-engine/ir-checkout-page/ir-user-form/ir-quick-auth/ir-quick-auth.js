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
        return (h(Host, { key: '20b3786799e78b70ea8f384af5ea312da0887cb0' }, h("div", { key: '46208110352b09f99d1279883b7a13c377bd8515', class: 'quick-auth-container' }, h("div", { key: '21f12b95e3abb0e50654827bf8dd0a500c1bed45', class: "booking-reminder" }, h("ir-icons", { key: 'c3773ef28c42692461af41b74833dc8688414d48', name: "arrow_right" }), h("p", { key: '7ece6ea02d98e17b187fa94dc402168671f7e106', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'f3c6deb8705f1d662a333cc77b5ce07a2fd34d46', class: "social-container" }, h("ir-button", { key: '07991ea5e16b3bfe2c7aabab10cdbda501b5e383', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '2bd6a78267043e6e529954aabc6e1ff69b5c4334', slot: "left-icon" }, h("svg", { key: '9ff69fa31d03a265afcf301cfe2026a31d482b90', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3e91bde13a8832b93f43374ceb7ad00f56837cfb', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'f35a97b5cef91b41d65e9d0387aa168fd406fd72', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '6bc389e0aa3a06d13971142311d23c550521ac23', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '6a30a3e5abe651c853eff4f0f07b46272a5044e8', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '7f19047251d170a83000f5e2c324e13ab3147bdb', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'f27eb1af33326cce101bbe228c86b677160e1340' }, h("clipPath", { key: 'a760c1fc6e3cc3b6e672e92e6ce885f0d791c542', id: "clip0_6707_5591" }, h("rect", { key: '78cd18476a1af69ab603e384cb65f94c1a097026', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
