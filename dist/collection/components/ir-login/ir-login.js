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
        return (h(Host, { key: '6a1442c1c71b41f7f740022cdac1642600d7cd71' }, h("ir-interceptor", { key: 'a87876323c398ce4bd6c39d7af29b3b34ef34e61' }), h("ir-toast", { key: '26b28ba97b1f5eb09cef157a9d743f8cddaa4420' }), h("form", { key: 'cf8a30e045d7089724a68ac39c35e93164e69b54', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f50795f422d962ea2135b9a7d289d3c24f0a746b', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6f63404f822bfa5ea83c79afb209ed0ecd4913c0', class: "separator-container" }, h("div", { key: '58053b916b48152e44e8684b8a9e3cac7ebf98e0', class: "separator" }), h("p", { key: '5ea9092973ae804353d81f56a20b18b122b70791' }, "Sign in to manage your property"), h("div", { key: 'a3b4e74c659bd8c2b202865e8ce68b385bdefbc3', class: "separator" })), h("ir-input-text", { key: 'cd8023a7a179cd967a6380f98e7bc2ef81ce8538', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'bfd860b5cfafd1b60ccdde45286c0428f0334218', name: "user", slot: "icon" })), h("div", { key: '1fbc1c170e020d0637227fc9b86c779a0e8be7df', class: 'position-relative' }, h("ir-input-text", { key: 'ab8afa0955edd3aab691d922b058c991bc830e5c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '82f371b75546bfe9bf9bff195bffe3f5ead045f5', name: "key", slot: "icon" })), h("button", { key: 'f5f580d897a391491b33e2914f5a116b6b292987', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'a53dab07bb0a90bf41a3c52072e23bb1f9224947', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7cbd97452c13bf72f758ac0d6aeddb922c2c320b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '9b2eaf47c0c99b004233769fb0a855bf6784da9f', class: "card-body text-center p-0 app_links" }, h("a", { key: '615d30129106149ccee0360c3e28635510e586cd', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '51b2eee5c0a06d8097baae21418b523d8808c2d9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '95f470cef0478599844cae09540b7b42607beb73', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9d9f629514ecacdbeda91468e51045b7d09b5c31', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '003155f2bfcabe88d457a47a5a95378cfafa0e6b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'cd6dfdab69173ebb690881e546d219e0aa99f5ed', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'e87a31cafe782b5f9c28a8a0619979bc404078e6' }, h("a", { key: '99b40a9772e6447093095badfb5a9a1c3b105d3e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
