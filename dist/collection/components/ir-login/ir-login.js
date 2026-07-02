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
        return (h(Host, { key: '6ba51f816b9f73bb24e51b8a9c53a9a71b26c738' }, h("ir-interceptor", { key: '92d06c92ef2e643975c638af3f107873748753d2' }), h("ir-toast", { key: '07473341584486a5fa4947d3e176e2a50350fd34' }), h("form", { key: '70d8879919e3a75ebbc3c23ead8b39c6e9d26684', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'a9913e6f7b24599e92cd34b7aaf827b0b48ee735', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '7af0a22f5cee6d33c6f78e145b67069ccb7d9959', class: "separator-container" }, h("div", { key: 'dc5b193e4c4f96d997798796142d6606cb77909c', class: "separator" }), h("p", { key: '8d3fc66dc0600af4023f0ba9238f6ff199c37e30' }, "Sign in to manage your property"), h("div", { key: '22ba781854b44cb7d0dbd7c108e4c974901b16a7', class: "separator" })), h("ir-input-text", { key: '2857d5f06932a71850e746eabb170d16915af6be', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a67c431ff8f8b609d8f38a91cfaf5a2d912b37d8', name: "user", slot: "icon" })), h("div", { key: '7323af25eeedecf69f72dfc0efd17611ef7760d6', class: 'position-relative' }, h("ir-input-text", { key: '8dbfca669ea4e677fc65ebba991ff975224841a6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'cee1ee4940c210173ffff6e16c421c1f0a784eab', name: "key", slot: "icon" })), h("button", { key: '38105c4bee4ee30e75abe9b62942ea588b9ddb21', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'c2253743703bcf4fabf7f5422cce5e995ca0ea96', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '23b68801f947b3cd45596acc71def84de6236dc0', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '615d13517f1a49b3c3c3847f1b1cfa1916bc0fb8', class: "card-body text-center p-0 app_links" }, h("a", { key: '457748b115828c69ea5a9c1690cb43d959a0cc1f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'bd628e92bf88494641a4cf12a5dbebe289818121', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'cf1594c7df0414399f653ca2d36b3b5b4f30bff8', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '234c5bdf6671ba7b1810335b1526af3d7cc40cef', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '91e625e014afef545b806cb5b33f9b193a4b6139', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '9ee24c0099b2cb29cb4963afa0e42cd05caf4201', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '5631df9684ddc1714dac0e067dbbf16db1a9e1b6' }, h("a", { key: 'd23a4dd24e08003e99ae51a94d2d689ba69e4edb', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
