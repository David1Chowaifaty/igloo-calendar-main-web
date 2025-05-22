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
        return (h(Host, { key: 'bc0be330d2251f566b15340c56c580921e244015' }, h("ir-interceptor", { key: 'e4e29db2e85a6769200b0a7260ca0701624b8ded' }), h("ir-toast", { key: '314a713e2b06cef42b9ee70200d8f7603edc5f24' }), h("form", { key: '716fc99b9466d786425bed5b954e201dbcff2cd0', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4ee401726ed3d6960c1af66d6f1ea1285f937170', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '148865814ae905eae81ab35c9a7a5e5ae2c87a9d', class: "separator-container" }, h("div", { key: '7efce4231ea500ca3f49c169b466593ae41b386b', class: "separator" }), h("p", { key: 'ed6a962d0884b2c808f39f6dceb79e84f0539197' }, "Sign in to manage your property"), h("div", { key: '4ca5a1c671a5dd74f4ec78c0fd6a4a92aa48df78', class: "separator" })), h("ir-input-text", { key: '364755c5a4e990d94bd244a30d55e1a0f2d40098', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2c5ac3bf24e9975ba480206f0a7c4f58fc7f978f', name: "user", slot: "icon" })), h("div", { key: '4802cb0e38675df24c8ea78fd5ed308b615c4f64', class: 'position-relative' }, h("ir-input-text", { key: 'a37a084be96d9fcd489a2eedf59b2e4109c7ef2e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'efc084138050abb0303020c7d09e5e3850e169bb', name: "key", slot: "icon" })), h("button", { key: 'c5bd7001d14a8898f1ecf0f77a3735abf16ef3c9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '0af3f0affc543a00a764315f927ecbff71c96135', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '07d70c64d9c0616e9109ace33c16af099cd86150', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'cd7821c033db8a28fb0d47de7a87ab6d146e04fc', class: "card-body text-center p-0 app_links" }, h("a", { key: '08a83d13d5bd386e54f5e83173fa20dfc93296cb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '4239ad07b2462334cd5cf6d89fdd406f34919b1a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1b1ed4ac294ea59a44a2253a4d431c791db5e1aa', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '7a8d1e565c1a5832b5775be8ef32c2cde7bd7ae1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '6e3d840cdf52595237ed23941028cdf0dd88cbc0', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '70d7c10fca4f6a5539d66f352acac54a152e682b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3ff6fb23535246bae870bdc340df373826d70267' }, h("a", { key: 'e8758ba9251700c8e888e5e47099cd7b41f99ec4', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
