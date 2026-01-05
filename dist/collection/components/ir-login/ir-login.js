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
        return (h(Host, { key: '979b3dfb7c0396e69feba82550b8d0a21ea6b7c3' }, h("ir-interceptor", { key: '294c102f06c9048e4f598f58a0557e1d9d333b86' }), h("ir-toast", { key: 'd3797f7fbcc340a63b7a0cf4a962595884279d4f' }), h("form", { key: '5965cb9898ec37ddee5356cd8a439c4db328b0f3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'fbbd348c2ffd3fdeef74b37efc567712c3700f8f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'aa91d998a60414672e03da976436d57ed0008032', class: "separator-container" }, h("div", { key: 'bc4a8f0dd24ac6f03bb342fb10ce55507613abac', class: "separator" }), h("p", { key: '2828d01d0b94cf2b374a8ee0bd97da33f85b2f62' }, "Sign in to manage your property"), h("div", { key: '3ba6e1e91a560a9b99f6398008eab9a8f6e27238', class: "separator" })), h("ir-input-text", { key: '0159aca9ae141b2fc5b7567de4fd13a7e2790f34', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a8f2aa960419d73bfa2f89ddaa05cb0d535a1805', name: "user", slot: "icon" })), h("div", { key: '0d07ee37c362d462809157506ec2e21c0948322d', class: 'position-relative' }, h("ir-input-text", { key: 'e2e8b4b0e8a001af231418ec9630c43666eba4a3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '5589e5070015cd0e8a61a528c9a032f2353c18ca', name: "key", slot: "icon" })), h("button", { key: '374ab6319349cf125ff05defad4f4fb5934606aa', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '275cb432cdacabd16056e94e310bded183cfdd5b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '629abaebbe6941472f43cecc7ab2ee7294e43fd8', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b904576e7bfa2d43ad01c43b4a6906ab4cfdfc6f', class: "card-body text-center p-0 app_links" }, h("a", { key: '93ed295eb0c8ae675b86c20b6b43f2b9a1d30bf1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '6ee726f45a931af1776b4539ded22f32fd42a35b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'f7d93f673c6230c8f88dc7f60b728bcd7b427b4f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2f654b56d48b0816a2c0d2c18eaf1cce989a04f8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '19ea862e370f3eac5d18ca82c38dc4aed1ab8a1d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '740d6eabcd9f4b725af36a5a7080215cd6f8b954', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '28eaf6fb76e42baf277098ce69e0f50a6920bf9b' }, h("a", { key: '53c71010972592d9848478f1f18d15c97f23629b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
