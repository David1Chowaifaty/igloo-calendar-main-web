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
        return (h(Host, { key: 'a757d63b922dac5572314335bd21931b505a12dc' }, h("ir-interceptor", { key: '50665284a27bb2d398b73ba1dcd4860f5dd1fc9d' }), h("ir-toast", { key: '25d27f35187389aae242344461486509b0b166e3' }), h("form", { key: 'a379b67aefeff94568f9d2eee443a0141922f950', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '5c604a380f3bda098264ed0fd6a13a322e94c57d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '3582b4efe904178ca335e4b64aba604071f3555f', class: "separator-container" }, h("div", { key: '999b40f0cea9d3685b1c52373e64aeeb0afad6b1', class: "separator" }), h("p", { key: 'ae7717006a5227b8451e8ed801002d88dbdc1a43' }, "Sign in to manage your property"), h("div", { key: '50f6aaac3c9f2aeba9b30f4d900edd546437ef60', class: "separator" })), h("ir-input-text", { key: '304b0aed8c7147a42003061746bb9fc27bed11bc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b32b81807df5b668a440f79d69866db62ec7a1f5', name: "user", slot: "icon" })), h("div", { key: 'f28cd9f7525c68a7640d83e2288a5dd4e227f173', class: 'position-relative' }, h("ir-input-text", { key: 'eb6c324dac9b756c6a803867d66f9e7525301b79', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'aac11576538c3d5cd249a825ac00e100adb45dcd', name: "key", slot: "icon" })), h("button", { key: '98ecb8b06d060b64c142bf43037381b70dbd011c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '968744af28d27e1091859f50ba470964b5a753e9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a8d52b97f92a8ebf0511986bfccef377c21da0ae', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'edfe7ab569f18e948a9b2d6ebe96033ba0fe1b57', class: "card-body text-center p-0 app_links" }, h("a", { key: 'abc9d32ccf207c86781bb67cf539d3b9fa286431', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '7bba69521939bc74b7f575a8610cd9a937d4bdbd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'aa84f6fd5b4d552353e23f7e552e132186919f3f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6cfa1b3fbedbcc227f4eefb09bbb300b82182271', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4449d689aba4959fa35e516cf93a32fde82b9efc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'fe39d623945157ded3b0a4951c1ca78af274cf02', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '6f8681a494877e5d218195abd6c210bc10401cbd' }, h("a", { key: 'f4433486ccb49aaec9eb4f1194a01ba4ccb1bd6d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
