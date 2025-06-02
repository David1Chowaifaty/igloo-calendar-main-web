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
        return (h(Host, { key: 'b1187aa9784d9246f4da3e09ff09d0306c9f21e8' }, h("ir-interceptor", { key: '9caac20a7ef10d0edfb8e6533ad17b0922d914c4' }), h("ir-toast", { key: 'c307c87914eb8031c4e8c8716922945be3a5ab19' }), h("form", { key: '9962788bc508ab8fa9bab2ce779f58d6b4fbbb95', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '31339d672ff4254dcbfdd11ea64577152a67138b', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '86ed44b8713427854de0f80f3e12c5e3d77a6362', class: "separator-container" }, h("div", { key: '07c93d3448f4dfe6106387f7910b5c5bf0cd44bb', class: "separator" }), h("p", { key: '98b999a7cf3f8639fdb68fcec629d59f0410c527' }, "Sign in to manage your property"), h("div", { key: '10427cf785601037744f5e724ff9045d461d6ed1', class: "separator" })), h("ir-input-text", { key: '5cccc8a3605916f30faf145a2e9a26760d61ee37', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b3a9b4f92c05c30ea275d68c02a6cee61c905b1d', name: "user", slot: "icon" })), h("div", { key: 'c522acdc576886a5a3388eb5c10ebd8f5baa245c', class: 'position-relative' }, h("ir-input-text", { key: '3b40d1ff89d337a128f65c11f394a98f217931ca', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd32c7eb1d9c505c8d2664775c43c13702952f8d1', name: "key", slot: "icon" })), h("button", { key: '27f1d669d6efb55dea75790dbc4be5c0ebc85ac5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '814fccb3200a72b4e5092116b152fd04d98f491e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7fe6a4f2a97856a7f686170f1b00d5050b9e94d2', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '4214d1cb5551270a96f5e02cd9cd23a16ec3d39f', class: "card-body text-center p-0 app_links" }, h("a", { key: '4364a76484be4c3060cebb0d68bee209df72bb4e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '70d388e170ecf173a7050b3205071d45fb237e80', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'aec6f633de66c4bff1a48f709dc7e9109af9a2bf', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1aaf68336d262d0551764dbd55218277223f6899', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4376210b23645b69ddccb6494ecd1a52e10c30b1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '15a8dbf2c2c6bf70b97feb718476a13ee2a5de9c', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8fade41faa66e2549b2088de8e02bd990ac69be3' }, h("a", { key: '24fb79444fa61eb820b1cf92856ec936f166f07d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
