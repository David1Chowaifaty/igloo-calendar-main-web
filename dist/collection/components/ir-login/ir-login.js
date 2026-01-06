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
        return (h(Host, { key: 'd3bf8754efb1395ab5fcd69783ae3cd5276d14ea' }, h("ir-interceptor", { key: '81030228bb6ff7341495a876a048c35456ddb0ad' }), h("ir-toast", { key: '864f4df5e6b59be5ece6657630fafddb00c24448' }), h("form", { key: 'd7e9edc57855d68401950c3753f7f9bfccd4b49e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b277d2a8f12c4fce41fcaacc34bf06b6d514c3b7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '020aa9169c50adbacccd0c048f10f310e7092bde', class: "separator-container" }, h("div", { key: 'c72a623574a672e2fc955054c853bf7ec583502e', class: "separator" }), h("p", { key: 'c74dfeae14d891ce822b3ed3ba2fe1c4e960ec94' }, "Sign in to manage your property"), h("div", { key: '156c6d0b8d3be1c0d1acfa5d34297da5b7963189', class: "separator" })), h("ir-input-text", { key: '122be99b61e13240ce8fa7ff744aee1f7b3507ac', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a3ba3c54813b84e554b9b59cc008cd1cd279479f', name: "user", slot: "icon" })), h("div", { key: 'f539194e3db93be1635199815367779e531f1c9c', class: 'position-relative' }, h("ir-input-text", { key: 'a55dc16d9b5946127ff9c64e65ed00c13e90f80b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '89b2b0fc2cc20e7b56a7bdd7265bf858b8cef923', name: "key", slot: "icon" })), h("button", { key: 'a229da3de6c2578d13ec96d6870ccb454151aeb5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '091cca0ca0343af1e858fd972ac3554be8614dfb', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e60aef70a7e547364a372dede2eed92148f4a8a4', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b72081d78211d8063fa70a2fbf64c09b2c50c500', class: "card-body text-center p-0 app_links" }, h("a", { key: '1fa6896933c5657112b1063f9597ed85a3a4ea29', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '7328e2ff4d281fec1a5bea994b77ecde4f5d3094', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '5c13ddc98fcb6cb3289cac0595ed6d4f84da85e2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '5201874330460fb96b01d3f29e9a1b613fde8ad2', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '185adf67eb5ae5f84bcc7d97b328e8f10cf27545', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f403808c65db037fc45dfa4eb2f5d3ed56f0bfc1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '210dc461333d672d4ed038e805d1cde2da6a4404' }, h("a", { key: '159ae16a371ca139f57caeeecca9bf374382655d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
//# sourceMappingURL=ir-login.js.map
