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
        return (h(Host, { key: 'b1724b426a8f4c01f34aa75dd1ad865fd808ecd3' }, h("div", { key: '471e9a7fa153577236a24861ee0ed10328882374', class: 'quick-auth-container' }, h("div", { key: 'c9b7cbcde7a29d7a915bdc529d0d20272e34c276', class: "booking-reminder" }, h("ir-icons", { key: '1f156f797d9d65aaa67e449f252f00b3e523172d', name: "arrow_right" }), h("p", { key: '652220930dd8754af3d5e27fdf0977bab2b0cb85', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'd5c63f968e9100dc453ff2d41b82eb36c3948301', class: "social-container" }, h("ir-button", { key: '2003b0dd22fcdb2d982da693eae67466f5afca6d', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'e55b4356ea8880d9c9b3baeee257e5d1b1edcf5e', slot: "left-icon" }, h("svg", { key: '6954d8ed53f2c17d0955b2f27dd7812247474230', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'ee5d8cf1647e61b5dfeca25cdeb0867b2ce08769', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '44b75a12bb2ccf53caf1ea14e292257378f3724c', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '4811365c52aa7358f3364474bc5eea8ee6e8b7ad', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '323d8c6d1ad4b7e14a1a746837517204ec156af7', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '64c8463391474164e26a3432bc35a542fdf5896f', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '706876c70e01bcac2a2de4fcdc43176976c6488a' }, h("clipPath", { key: '1e1e4cb9597ce1dc69dd023f1cc28ff1325b12f9', id: "clip0_6707_5591" }, h("rect", { key: '494420db8b96d2c1767c05a2e824728418f2a390', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
