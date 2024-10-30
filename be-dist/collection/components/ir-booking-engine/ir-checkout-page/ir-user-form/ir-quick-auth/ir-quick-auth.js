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
        return (h(Host, { key: '9071ac5eb21712b3ec02b6b67259e780b8762e9a' }, h("div", { key: 'f85f1560bdad7a4c017b04f2d844cbb82225623f', class: 'quick-auth-container' }, h("div", { key: '7497125e8d537311bc2b37c67e2cf11f6d7b92ec', class: "booking-reminder" }, h("ir-icons", { key: '30237daff5681e8a2691bb515d19cb16c25e4307', name: "arrow_right" }), h("p", { key: 'e9202640085c8a49fccf659e82b5688c9972e84f', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '23d6769088ff068517fea05ad9e579a7e45acade', class: "social-container" }, h("ir-button", { key: '3f9d73848c6d3114e81cbc5e66c9df55327ba38e', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'da53e3f9dc8ecb721dc2ef92f5ff6f527a54f1b2', slot: "left-icon" }, h("svg", { key: '3038568c037d9e9c58043ff10d4e5402a79b4f3b', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'c9b59b43a451654584965a0ea6f4ce3577bfbb91', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'fc805e6108910ade90a9812cf923f17f00282687', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '9fcf95b03c549d445e1ed62e47a9be82759e1ba3', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '4a8f17dc4ae27ff55808ca87fde435886c9930a6', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '1a4de7e318c260607fd78b147f76ff85c18c45d3', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'dbb3a88be5b5d0fa13d1b39f1169355ea7bd82fb' }, h("clipPath", { key: '70deae63b081fe22ac3a93fbe3a90bd29f15b132', id: "clip0_6707_5591" }, h("rect", { key: '6eb1c3ca808204123e69bf95a246a89b2c7f60c4', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
