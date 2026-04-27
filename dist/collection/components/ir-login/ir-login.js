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
        return (h(Host, { key: 'e7dde3a6a9292cf73e3840033fe2318ab2872243' }, h("ir-interceptor", { key: '6827873a2639405bcef4d9e935f23070a8b4fcc8' }), h("ir-toast", { key: '067b4432ab5682121bcdb9b7e49db9b056539cb8' }), h("form", { key: '4fedba3aeb74c2e4f491a6f87bc11203bbb45b92', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '6b47f20f457a161b9ab25fb185b3cb3b62086605', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '38120caf598ba084a0e48d5f583bdf9518ab9de1', class: "separator-container" }, h("div", { key: '54f3c3808c349fbc9849b3062c60dab75bfcb4cd', class: "separator" }), h("p", { key: '98cc4dc1c84afbf196c7dd69bcd52099f2ad3f13' }, "Sign in to manage your property"), h("div", { key: '44fe1c670f1872e8e9f8019c70b4b2e6fde5b122', class: "separator" })), h("ir-input-text", { key: 'd2c5683425e9763a8f5e0100ba90778b0479942e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'fddbce00cd29970ef9353d67a7bf56f86f017e28', name: "user", slot: "icon" })), h("div", { key: '58c271d35e94d86f0c7ce4685b349113bebd6655', class: 'position-relative' }, h("ir-input-text", { key: '284c1230f21e66302b9ac220c60b24498a7fcc33', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '9f2a2bc55bd4c92f3429d3f36f17eda89412d8a1', name: "key", slot: "icon" })), h("button", { key: 'b8fb0b03e891570dcabc1093182f544ac403e8e3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'd9429205f39ec9f73a59bb120ee182abf8c202c5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '74855c8a92a121403b4e50c8fda3bba2be82ebd0', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'e0608f7feabd85caab90fb0ad0b9eb1e1fd5bdb1', class: "card-body text-center p-0 app_links" }, h("a", { key: '12b3f53180d7b285fb849d13d9f56601afc0d341', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'f1b6341c9ceeadf3ff08881c59004202081ac61a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1bc6a885eb93f37b35c500ce28f86ac00272f9fe', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'e5dfb80750c8b34825a0ce9b90a74b2947660456', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'c22d032a2414db420ee3591da88ea274d998825e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b8ec5a57df5121551fb867a06a9b0ef2265a219c', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '6f7b487789db21fe70705e35e213b9a39d4db802' }, h("a", { key: 'cf209e0cb2a62d06f50ce75c2b5eb740499f5ab0', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
