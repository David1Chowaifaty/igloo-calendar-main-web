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
        return (h(Host, { key: '76dabb78286cccf0c989740565c241dcea4cb7c7' }, h("div", { key: 'b77a6bebd0f1a6391d170f7af9520f5461f29c65', class: 'quick-auth-container' }, h("div", { key: '94a77e39b33ab707b5475101afecb8f95fd8099a', class: "booking-reminder" }, h("ir-icons", { key: '4c02ff87e14729ca4aa02395b11b6d1eec3a771f', name: "arrow_right" }), h("p", { key: 'a826a34bd03b4837d048a6d1e9feb223b4b64228', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '7bcdc48b164232995d5848ac2bb9e4f32c0e9f8f', class: "social-container" }, h("ir-button", { key: 'a8e4b5d2eae531fd8ee4142a3126c76e655bc9cb', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '923a5ab1841fcea8b1085a0881ce702c7eabf143', slot: "left-icon" }, h("svg", { key: 'd41be03414e1085552c601d637bc7f584370e456', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'c4b0e6ef3ec7f11e9a5fbc5cf5730d18cbabf4e4', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '36167395c2fa0a4624f44d10d40579956fb55515', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'b0b07496545bbad150a7669ba0d02cce2f2b9b60', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '280caf2ca62f081d5c67ebe5386095f39266e2bd', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '80ce03df483bddb15e087511fcc38559ae2b0e9d', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '33eddbcf1ae6bbaafd363b5a7b4c7996505d4068' }, h("clipPath", { key: 'cb6d3c352cf52283a5c16bc943aa30f59586ae61', id: "clip0_6707_5591" }, h("rect", { key: '8e8c1359dcbee9a15e9ded3aff33c926f069b228', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
