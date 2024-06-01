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
        return (h(Host, { key: '1d76661e3222d337afd88915d56389bb125ea114' }, h("div", { key: 'c3922dcfa42a4aa86c9d643169e0da4f5f517e56', class: 'quick-auth-container' }, h("div", { key: 'c0e3b1a9d01d83228e682729c1b0727f6fff7ed5', class: "booking-reminder" }, h("ir-icons", { key: '405cc4e56101763a4a08aaaab56c104e27006542', name: "arrow_right" }), h("p", { key: '05a04ae46652ced1c0d5929beaef7dafd3f0776d', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '3f6318d6c980a2f65f50b07c23f02d470aa18064', class: "social-container" }, h("ir-button", { key: '54abe8c696dd9851dcb353cdee1a39bad91b71ef', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: 'cec1d8e5d0912840be70c1fea05cd173252ec936', slot: "left-icon" }, h("svg", { key: 'db877b4f79f1a8177202c659b64ae9492ab5456b', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '983d197a134ed1e22ca34f18121def888131d332', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '1b25ee0690a5f2b98a361e98c9a3de20296da7b1', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '733a168acde6990ea0cc7c47042bdced1f5a9180', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '4380efde65f02e10b3d9a46371a75e9bf3e98ba2', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '8a94a22085e7c6e305f41c1a806fa9e1c442bb8c', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'fff87f66faf8d23d195327fd4c14dea6b52dbbd6' }, h("clipPath", { key: 'dd7f61a40d7d21ac27b1d726389078098330a6c3', id: "clip0_6707_5591" }, h("rect", { key: 'e001efb1e6b86a4461a3bfb26a589737b42026bd', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: '901d893c44984820185ce96aa1eab0e279e8d594', variants: "outline", haveLeftIcon: true, label: "Continue with Facebook" }, h("svg", { key: 'dcbf962d7d893a763980fcab44f3a206c76db1a3', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '461b32dd2463a847dc5b52fb07c4054945948b90', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '0c0cb5d396d69df7b4f5e15c4135ef54761229e3', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'ce173a609f0c7256821394d5fe837b2230de8020', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'c3c3a0379fdb22dbe2a383fba55cfd7843362d1b' }, h("clipPath", { key: 'e4d649ab4371dc2d7b7c3460ed0266968cbea376', id: "clip0_1256_132001" }, h("rect", { key: 'a6a487471d78b790c53e58f6d014282db12cae68', width: "24", height: "24", fill: "white" })))))))));
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
