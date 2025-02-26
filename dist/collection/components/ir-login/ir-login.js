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
        return (h(Host, { key: '6743fc17218d648fb0bc0881e73773e1269ea83e' }, h("ir-interceptor", { key: 'd6eb364d49c7e88eceae8df873e8ab97269b1445' }), h("ir-toast", { key: '2a68509879b58be9087ac80ca33945c74dd725d1' }), h("form", { key: '82d6390d5ab5456cec0b23e1e468a0fcda5e7dec', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'aabb78579c080a0a0b8f57c2c5a4c408e0c4b403', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '5aa4d7d6c6bca85ead7b7da4ec920c0799d473fd', class: "separator-container" }, h("div", { key: '2ef4c23ae6f4fbe84c044b702613e40b5613ae53', class: "separator" }), h("p", { key: '21793aae78ce462f25d21eb9487ec351837579ca' }, "Sign in to manage your property"), h("div", { key: 'b79395e7236a056f163392b87ad0c56f0042db5b', class: "separator" })), h("ir-input-text", { key: 'e7f2b98945b0d2ec90b52961af94ec4434260d9f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '5687faed13cb1a02dcac25dc8d22b9ab6eb2a6f7', name: "user", slot: "icon" })), h("div", { key: 'b335d1b8ce01022d4c49a780d0ce60d3612e2912', class: 'position-relative' }, h("ir-input-text", { key: '22b9a40c5c3c3636f8bf3bc71acc3100026541c6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'b25fc6a90738205ed0796e0fa1744d6cf209ef2b', name: "key", slot: "icon" })), h("button", { key: '7cf3c16609458487b17fa57b164a10d27399c148', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '75964e2448419ab7cf398375ab3c6e4d757cc127', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e2b857ead6d4577da0ad7d0b556d8ecb57ffde95', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '75e062fba1e2e2f3e30f3eef497cd62b2d8841b9', class: "card-body text-center p-0 app_links" }, h("a", { key: '64bf01d1c862d0ec8a3ac747f4dca4837414f59e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'eadccb3c4ed734fabd6203d3c57c5fcf8c506706', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '470a8dae79e32eace43a858effe9782cece9b6d9', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6ab63dc0a01e286188fe954e96e6ca00ffbef112', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'b9f4de59b5e428b99c68f309feb0cce77fb3471a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'e48cea3df00aba6ff25c3d6eac87bde04b1a2490', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '9b40ca26d7bd9d72e5cf3a8a9b8ee1250faec1b0' }, h("a", { key: 'c42244421bf22e9ac58ce9de3d29cbf0d53f2e36', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
