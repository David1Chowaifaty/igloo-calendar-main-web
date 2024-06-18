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
        return (h(Host, { key: 'ca92c4f976f592e0a5174fdb0f692be3e263d27a' }, h("div", { key: '848360cf86f8cb8fe5546d337f8a114d9b353091', class: 'quick-auth-container' }, h("div", { key: 'e819c6f527ce20eb4aba5fca7da6088ae4fe8c61', class: "booking-reminder" }, h("ir-icons", { key: '3648d2b6cb22fe13161c9d227c9c7b10e1232674', name: "arrow_right" }), h("p", { key: '273745841d1347ebd391d2e057dc81e1434e9cfc', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '6f0eb64539107483b520a4778b81e0faf360f217', class: "social-container" }, h("ir-button", { key: 'c1824d405fc8ec49e4e79acff8f54171284734a6', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '5c4fa120b06cac1a814f71aa6787f45960cf758e', slot: "left-icon" }, h("svg", { key: '37c492da55ebae0db1d7378e24f07b7930fcb46c', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'cb800ed0058265d23273c06e7bb02c14139789d1', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '50f11bbdf2045cee956db2e58a1141508b013854', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'f50b6565c370105545060f9d2292102cbb3cb39c', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '11b06ef640d9929c5ec9e9ca1fb0e14c14954325', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '221c76786a2878ac1cc379ef07e9eb9f1f36f8e2', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '4cb8b0152478e2170088428384b8626b3c16e9cf' }, h("clipPath", { key: 'cab6cf5f549ff46236d11a79d47c76da1b51b7e3', id: "clip0_6707_5591" }, h("rect", { key: '5986ff578214f2be150da9a897818e92779a5df1', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
