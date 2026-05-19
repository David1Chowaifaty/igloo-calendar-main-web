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
        return (h(Host, { key: '59885744055822d6f3ddca0ca7a1bee2d9a233eb' }, h("ir-interceptor", { key: 'ec54d95a3decd1c7d39542abd43ef55642c274e6' }), h("ir-toast", { key: 'bf3d9a1e053cd746fea8f896bb611b7a0716c56b' }), h("form", { key: '88aa6f858ac6401cccb8444c2bec957b6c40a753', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '90ec502b3b85d7a22638468e6ee9df066fd8fe5c', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '8376c3156b37ccac09e44a0b3f019e6484d89961', class: "separator-container" }, h("div", { key: 'b419a58803e235eef08e6dc0f09fdb2713a29006', class: "separator" }), h("p", { key: '12a09109cc14ca4b4db59dc1ae27483562861650' }, "Sign in to manage your property"), h("div", { key: '1fada1beebcb1737be5794f89a0e26d80bb29cc5', class: "separator" })), h("ir-input-text", { key: '968af0ca3889ec05ebdbff9a266327482952d401', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '54ccde3b96951b1e7c61cfe3cf675930d222ab55', name: "user", slot: "icon" })), h("div", { key: 'c11ca885ca384511998d046bcd31e2ce19181673', class: 'position-relative' }, h("ir-input-text", { key: '3d54398587e180c336d97cea48ab46cdefc916e9', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '29c5276c46ee42684dc37c74b64d99a2b725aff1', name: "key", slot: "icon" })), h("button", { key: '7af422d51d24b6341507f65694e20e7fce5e736f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '20ee844c54843f2d0b0c8eb2f8cfec8facd1bef8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '521c1745130a6c090e1443dec47abb53e2ad5c31', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'fcac451ef7d7160ab0a75bce7daaf4115fa2c81a', class: "card-body text-center p-0 app_links" }, h("a", { key: 'd6a0f67a207f847d70ab3cd1ff439ab162dc1329', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1b3b68bd5a1d75f2841cbe6ab3f710a836a28bde', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '2be75efab4912ebc030db83225e31ab5bb2c7402', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2b095e1eeedae5a838303d9e4ef766f9f047cbe1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f6adebb0613060e15e7e33c3f558133f92b66619', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '3002d9ca70bf4659cb2662cc0a06289818086c84', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '666960425a869802b9dcdd8fd5400613406df884' }, h("a", { key: 'f11d1c57edca33faa728b29961c1e39d07fa9443', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
