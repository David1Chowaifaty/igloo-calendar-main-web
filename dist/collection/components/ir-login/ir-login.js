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
        return (h(Host, { key: '93fcefc6674495f6ae3d62973c7ae4acdbc7eff6' }, h("ir-interceptor", { key: '703070d3c60137150d94634918e359a6446b518d' }), h("ir-toast", { key: '98d9586eaadd303f583c8162a30a5edb5fb2e8a4' }), h("form", { key: '8df5a2e77146fa9f9e368cbeaac46b43e497d81e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4c88e555aecf8e8885f8606ee89b83d72ad45f72', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '91220773dce16cd023869d7081bdf3816118afda', class: "separator-container" }, h("div", { key: 'da6f7ebe63ea2ba53ebe92d7fd02765c6512cfc0', class: "separator" }), h("p", { key: '580ad02bb9b3bcfec5c5171c2fae5ef42f008487' }, "Sign in to manage your property"), h("div", { key: '662c4d2b9a1320487a6c50b014a6788149dd2a8c', class: "separator" })), h("ir-input-text", { key: '9f90201188ee587d2b471a65585a07cc3d57eaa7', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '77d8bb3ce9c4c55a8421ccdef6413e4f7c99075a', name: "user", slot: "icon" })), h("div", { key: 'f19475e60074e52c7d25266b22ce9fa85bb5de70', class: 'position-relative' }, h("ir-input-text", { key: '9a4b5315ae4b2266a17d59faa0b676245c3e1daa', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '70af3633e24c562232c8ddc8077ee4afc2ba23f4', name: "key", slot: "icon" })), h("button", { key: 'e94e6f1275c6da8b35043d5a51d1dfb581fd1525', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '2b14bdf059f3208381a368532a903c17c52d0976', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '6154f4a413ed72acee97d85fb198a0ef7909c014', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '107ab23dd667e0b4697e44dff317c29a4bb1e9bb', class: "card-body text-center p-0 app_links" }, h("a", { key: '82eb5f84e805be541f977e397f052eca7cac55ee', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'b5f1ee2edf1fbe4f1652b1341499a3d78ebbb254', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c1438ac9363e9aac71d66b39035c4050080a0209', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'c370aa65be07b117e3cd7681c0065768c533e483', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '0b0d566eabb7cb0f2f7da7297d5f0f0fcd03848d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '574e20002f68704a449d0e38c8e435258a80bb70', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '89a12ee8d17c98a01fe9c7cd9222690b1121e6e4' }, h("a", { key: '623c4fa4452f87ac649125856af99a2edd8bc787', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
