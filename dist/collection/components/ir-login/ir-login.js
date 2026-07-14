import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    token = new Token();
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const token = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.token.setToken(token);
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: 'df8c129dfd9d4c89aa6fdfad99503d6dc0edfd29' }, h("ir-interceptor", { key: 'dfca9f29980eb5ff6eaa534614d13a35ae19c11f' }), h("ir-toast", { key: 'b35555fd1f4fe4adc7dac760e1a4d99a8e140cf5' }), h("form", { key: 'fe813ddaa7085748881d5ca88293a2953ea3822f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '9cc076c6d0facc157dd59f91d5b4217c5ba6b794', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b0464a899da754180da63285703433be77d78c96', class: "separator-container" }, h("div", { key: '003ccbe81254042fcac71a472b4a07d8947f3712', class: "separator" }), h("p", { key: 'f6cb826d376101a541f702c89ce07348d95f00e5' }, "Sign in to manage your property"), h("div", { key: 'cc03ae9a4730892a970ed0e38f02662c77e806ea', class: "separator" })), h("ir-input-text", { key: 'ee1cdefce065b68f76f76c0f120b827cac79f7e8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '23244f44e3d14d1c096766d6fb81f3d508e0fd70', name: "user", slot: "icon" })), h("div", { key: 'cb1820f9937265dc6d8ac55d99a40a7796f2e407', class: 'position-relative' }, h("ir-input-text", { key: '9a4d7f6fb0858b9eb27ec4f794e00999ecaddc7b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '5c7241211ac19270b529d7e05bca70723bba09d6', name: "key", slot: "icon" })), h("button", { key: '0f4e4f1dbd2d7f4e6a030ff6e835c8cfd28d46bb', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'd8a9a07d98433729891cf8fc0aec88dd1dcebf4f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '1ec990587a40a09f1e08ae9d42ab2c7d6fb81ada', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'd17aa2675cfa8c5b8fffa5a99f4724822679d65a', class: "card-body text-center p-0 app_links" }, h("a", { key: 'cd3d8d64281db25a338a6c684ba3eb3d5fbdfee2', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1cb0e0b6e34d1e8c32937c2b925886d06d23101e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '4de6ea8e86e407f62efc9b52d4e7a9d0698fab9b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '0077342fe069e20bf09e4a004fbfe32fadad5f99', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'cb64b2f5e7baece95d899e2ccd90d2e348ce05ea', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '058eab34364778dde51c5d5fbcf3f61963a9a619', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'c9d2225673dafcf27709ecd790afdb40f75fbef0' }, h("a", { key: '378f833f22c155b81b1d269bb36f1aa509323593', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
    static get is() { return "ir-login"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login.css"]
        };
    }
    static get states() {
        return {
            "username": {},
            "password": {},
            "showPassword": {}
        };
    }
    static get events() {
        return [{
                "method": "authFinish",
                "name": "authFinish",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    token: string;\n    code: 'succsess' | 'error';\n  }",
                    "resolved": "{ token: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
