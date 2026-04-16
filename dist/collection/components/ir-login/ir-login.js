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
        return (h(Host, { key: 'b88ce0c730756023d3961efa914d8a830120bd1a' }, h("ir-interceptor", { key: 'e51af0d73e75f9870151ee9c9d8475a692b42ce6' }), h("ir-toast", { key: 'ff3f66ae1fb8c684cc434d696d065ee2dca5ee60' }), h("form", { key: '3f43531ab7f63900e41b48b05d4745f3303c8b21', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '19c63832eca4dfd40af2d3ac4803bb2719ba5d98', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'f34852b30a645ac7abbf965ca9e4be4d17dda032', class: "separator-container" }, h("div", { key: '8db93d6f04d391475bcd87b4bd13e2449d46912f', class: "separator" }), h("p", { key: 'bc3b9c98970099555d8df2a02bfd1b3578dc4da7' }, "Sign in to manage your property"), h("div", { key: '23887d7fb8615b8f3dc9da78e29ab115beef5de4', class: "separator" })), h("ir-input-text", { key: 'ad7c66b88bc093bdf9c46f99703c7d7feca481d8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '687a726f67411d28cdfe619903084c49326d8e31', name: "user", slot: "icon" })), h("div", { key: '906542b1be3ef39dc0ef9b88c818bb66cf1808ef', class: 'position-relative' }, h("ir-input-text", { key: '6ed5a722e56ecc0e4580d0cf61d8fdddf779067c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '4a79762df227747e2d918f6679d2a08ed03c5e70', name: "key", slot: "icon" })), h("button", { key: '55aa51a1225778792f3041f9e5af2f5f8607662c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '5085320ab450496af285c08601238fbdda486690', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '33752d77b933f71f84c1ed8275ad7335fbafe50b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c604cef9f9e7b23030cdea419f651e13989340b0', class: "card-body text-center p-0 app_links" }, h("a", { key: 'cae9cdf4eb1e178d66bfddc7b49aa145e417ba33', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '90a1b6a69005ea383c73563f1394ecc683c633c3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'b9de836460d669ca20868f2d471391361e46f83e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'e06945cedbfe3e6c6e352f905f00bd792bcf9707', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '91aec71722ee469fbc63a7038bf02136b305d4da', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '9e34b50ea769313f16d220da8f17b7b29be7afe4', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'de1f333b660bc4f875d1a4a8d1cc44cfe2e9b343' }, h("a", { key: '53a680980f72f3a65be62da21908b23f67411829', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
