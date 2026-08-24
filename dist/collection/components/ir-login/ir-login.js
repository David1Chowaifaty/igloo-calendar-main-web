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
        return (h(Host, { key: '7f292584160e70849f7ebfbb066fa8ef7fe2cd89' }, h("ir-interceptor", { key: '56cb9dd7cfdf86b82212bb79a70dcdd3e3bf5efa' }), h("ir-toast", { key: 'bff0a7a1dc5437dea084dde0f18d1c9fbe57b143' }), h("form", { key: 'd6991e7567ff97904a0f359b83a27b0d606b8696', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4f238a94be83f334dd1d14f21695aa75af45fcdb', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '99d27e78354788ba5969ba8bce9aa56d0ee4e542', class: "separator-container" }, h("div", { key: 'a15480a13a5865ed76e8c8880b9ff1a0c80aed84', class: "separator" }), h("p", { key: 'a324c652ad9efcfd770ae3580e29c58aa2a8f884' }, "Sign in to manage your property"), h("div", { key: '8f2f6b0267e2877dae6997297afd683d6e1938ae', class: "separator" })), h("ir-input-text", { key: '712e2acae46827f6b408a9a2dd27442150355b11', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '8d5302614f309c7dfd5a85871277aaeb20f24370', name: "user", slot: "icon" })), h("div", { key: '388402e8030f83750e36467931deb47f48454315', class: 'position-relative' }, h("ir-input-text", { key: '4939b4b25fe6dc269aeafab9095473f873acd1d6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e250061f248a996a223314960513e5b1cc22eba6', name: "key", slot: "icon" })), h("button", { key: '1d4b2bc38387804aa22242af10c6736b46ab6d3e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e63e7a30c6393d6f8eaebd2fb4294575db791774', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '0498910218b1b79bdf5e9dfee3dbaea0d9aa6cb9', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '06c6a36efd24b1f9cd9bab25d86602549edac287', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e22a1c87b0ca09dbd9db1fd6f3b2ee49700d469d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'bca0fa7af0b7bb82622645dd12f046cd7d7dab54', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '7bdcab6362bb5b330f5511f3dbede36a13332058', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4bbbae61c49eaa013294d0b5861c9ea9866b2649', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '028801712d316fcd05849aada667b5c09a5dfd6d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '471463f2b5dbdd313c4e3dc7a0fdc736cc09a887', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'f8c42d3ecf200026fb54e68758343712bde498fe' }, h("a", { key: '8ab1ffd389a48f404ab3e95c98bd491807a0ba1e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
