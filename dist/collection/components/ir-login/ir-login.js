import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    constructor() {
        this.showPassword = false;
        this.authService = new AuthService();
        this.token = new Token();
    }
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
        return (h(Host, { key: '9e409c7c76839c592059997cde3ca23ffe2bba1f' }, h("ir-interceptor", { key: '1f67c9968228c55cbcc02aae5b887fe0c46b5cc7' }), h("ir-toast", { key: 'add7a7d90de0653723785e08d0756d43c6ecf4f4' }), h("form", { key: 'a47c66ba97c3f09c8fc3198306901550925975b3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'c5ea64cfe63fc97075cc6d341c42f8ee85fae962', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '9f128a9ecf30567fea697da627a1b68b8fa89e41', class: "separator-container" }, h("div", { key: '382e3547e8b5aae9c82836bce8c148cdb8ee2df5', class: "separator" }), h("p", { key: 'b7488f1d80dfb5c031c2d7448c391bbabe39b300' }, "Sign in to manage your property"), h("div", { key: 'b2577f9467ce1392da8be154624c19430c70006f', class: "separator" })), h("ir-input-text", { key: '3c7611c481890e9ca2327c0818b3deb27c051e56', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '333b8a2896c7be1b7e8ea5fc889c14271d8d2743', name: "user", slot: "icon" })), h("div", { key: 'aea4f229bb296dd507fc251bfc6e19f92e02ea4c', class: 'position-relative' }, h("ir-input-text", { key: '4ae4e9d503ab842c475bdadf0a26e0c804d9a1ad', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '24e6278d2a20709fa092598d33fce5499999129c', name: "key", slot: "icon" })), h("button", { key: 'faeff75cb41239a5a45b8b5b3f73ef724a6dfce6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '51c80de0ba523bfe15eef3abb1d2ef5cea1ab91d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '6ea2c8a282282cc145ea36ac6a88a89c3b6a4089', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '75fb477f18dc135f53e205cd2a699a945cc7c440', class: "card-body text-center p-0 app_links" }, h("a", { key: '53b01ce7f6ac2dfeab5d13f41a5d8a4272adf37b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '0e34971d964889df9e519698b7f5e351228945b8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'fb3bff5347d6b3c0d40ad6a09f9e7784880bf03e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '21f0a8cbc065017f925e810c76a77d6f28895ad6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f184bb18fb34e0934bb73dfa46e83a9ed8676a46', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '99d28eae2b5940a3ae8805bed0c08f81710f2453', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '55215f301b77fd95e84710eac4a417daad38b05c' }, h("a", { key: '1ec4fe0c4eecb0688cdccb9f2fd5e11df2c3be76', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
