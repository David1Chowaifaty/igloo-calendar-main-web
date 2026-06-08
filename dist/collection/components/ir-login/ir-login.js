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
        return (h(Host, { key: 'b7f9f983e6c66eb5332dd34bb3d63327c40cd858' }, h("ir-interceptor", { key: 'e556eed37935e2f0be12f6d55e9591da9c1765fd' }), h("ir-toast", { key: '2c8f85da4c701b90747ce6a5ee282a8815c8f7cd' }), h("form", { key: '299fda92df4a7f229b059bb09f23ca94a59097a1', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '1b660db8bb04f81285b673af38860029e91a1fc9', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd3bfd96c5745ba464cbb812e05555257d14bd02e', class: "separator-container" }, h("div", { key: 'daae44d84e78a8224b72975aa1e6497efcce0d20', class: "separator" }), h("p", { key: '5d0936c8ecb8d9639dc48418277b00b72c32eed7' }, "Sign in to manage your property"), h("div", { key: '9fa659a5d89e78c36aed71363aa9cc4379a37531', class: "separator" })), h("ir-input-text", { key: 'faf90b1037ea34a9043aaeaf8b934bc1e6c24d82', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '8c818fe8290c293e009daba8fded88440c3b1295', name: "user", slot: "icon" })), h("div", { key: '539eb4ac2d575713f893a60ce53b7d588e7a338f', class: 'position-relative' }, h("ir-input-text", { key: '59a52030622312c32e139b6741f33bb77617f3dc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '21318db405052a848c78e5bf218d83da38f9e8d3', name: "key", slot: "icon" })), h("button", { key: '7406e9acc618663c6eade305e6215de8d9986bd3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b8133e00b08cd213a88a2895f6496fd70b7cb794', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e5fa380a8f347a35f9ea06f2eed4aa7f36749da7', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '816ea279c808dc9afb0e52187ded9ff46e1579d4', class: "card-body text-center p-0 app_links" }, h("a", { key: '59a0d689964de293c0bfec197753b6cc7da04187', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'cbfefde88e947fd094299faea023c9c4d8b5a327', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '290e6acf75036c5e98d2599808836ed761f9bd06', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'eb2a3645f5bea7461bacc96487b181dfb68a4537', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'bc5994c693a029ab0889f43201a4bba101240207', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a11471a3199a654609165f8011a330a64239d9a2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '416d2c53934e1e88a5b488daf6eadaffe38c615a' }, h("a", { key: '9063af13f355438a48512df2d01cbb77bb7722e7', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
