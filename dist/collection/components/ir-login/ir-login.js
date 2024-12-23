import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    constructor() {
        this.authService = new AuthService();
        this.token = new Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
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
        return (h(Host, { key: '2df88e57610c635732690957ae4a987fd303d116' }, h("ir-interceptor", { key: '6e1e0df9c2f45c64a517603309e7815e23966ef3' }), h("ir-toast", { key: '4108eeb4449c5ca711fe45927ffe515523b35846' }), h("form", { key: 'e6a81757fac7a0961870056d7230ced4dac1876d', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '1d263f7d508efcb590c44e91662d0288db29fd49', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'e627f340382fcb611b1edc0a4c4a763a6e95df42', class: "separator-container" }, h("div", { key: '01ea0abf75b0251e4d9fe4d8b83e50c4ae2205c2', class: "separator" }), h("p", { key: '4f2d6ab231f2793ec4ec194b35602fe0a8850a5b' }, "Sign in to manage your property"), h("div", { key: 'acaba56f05c6f8f8cfbc09189ca4f6039a83ebfc', class: "separator" })), h("ir-input-text", { key: '705f8e582336683a75dee5ae9eda5822421066c8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '96ed4b301a514eee53d4862042843c7c04fe59e9', name: "user", slot: "icon" })), h("div", { key: '0d424a442f7bc929ff47c369060f881e9efd844d', class: 'position-relative' }, h("ir-input-text", { key: '310fd88e56e1a5f590dfb1a816aee2db1275c95d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '0c54fed682c1f69172efec6c9a51a4fb1258d1f7', name: "key", slot: "icon" })), h("button", { key: '8732c4d6de1e44b8407cc431ad5e022eb147e7ec', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'a5ccd8f3311fc67f496d1d41c51ca81ca784b4e3', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '95e54df1911ee86497589a6190cccc63b3cd65d6', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '69a4a4132824e755fb5e27d953e080923d8f741f', class: "card-body text-center p-0 app_links" }, h("a", { key: '52f66e5aa0cd02261140abfbff02cdc9a4586f27', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'aee82987880cbbc911f18edf0e19f27bab713e0a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '958aaad5b26d393c88241b22eb887244ed685d9b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '474f732e2ae4ecb87c8f4dc4b54b853c5bcee548', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '8118b316e8abca2b2c63d08f9a2d46e02efac7b5', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a3bc22850e79b0e597a3092cffe404a702efdce5', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b6b0d57e2706b33b56b0bf39aa6c851e06ff3e60' }, h("a", { key: '5b1670e7ce3549e6e2b52e516414545932559d5b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
                    "original": "{\r\n    token: string;\r\n    code: 'succsess' | 'error';\r\n  }",
                    "resolved": "{ token: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-login.js.map
