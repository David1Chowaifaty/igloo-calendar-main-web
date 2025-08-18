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
        return (h(Host, { key: 'e05d48fa1adb99487f3cdd456e74040eac30520d' }, h("ir-interceptor", { key: 'eee482b32cc2cb8264a7b6a6bc5f33163ac8d8d3' }), h("ir-toast", { key: '995c81c44d985873b7704c21cb1ec0014ed236e1' }), h("form", { key: '4f5340ece93fdfb52ca089c279ca0bc970c7ff72', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b7ea59332e53c3532a7a7bbce47202ff02e5efee', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '3cdb91fb5c36e5cc1026fd7b58acdc25f90bbe93', class: "separator-container" }, h("div", { key: '0ad7f8ad0c7fbd5911911d80a89dfa0660931773', class: "separator" }), h("p", { key: '0fedc4c9e3d87273aa94e09f747037387b9437dd' }, "Sign in to manage your property"), h("div", { key: 'bb82a1c950ca92940e9eb1b95a739ef10d9fe967', class: "separator" })), h("ir-input-text", { key: 'd2c6b754e78228d6ef6b07fef8f34db68df77285', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'bbb62a115c1e2f08eb432efc5024793a50bcb536', name: "user", slot: "icon" })), h("div", { key: '9a680e71a1ed552940dcf9eb909d30eea908cffa', class: 'position-relative' }, h("ir-input-text", { key: '74b730be164923174e8091ebf4d67b0ab1d16e74', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'ccdcb2f19ad3749b378ab7a856cb79612ef0859a', name: "key", slot: "icon" })), h("button", { key: '9531f5195fa9907b1624096398ba4ec66756fd1f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '42380108880119dfa18b5cd91aa0084f9d331a10', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'cfbf04efdf80023e59960842bd91b03c18357537', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0464c3c4d9b2e2f3c1a5729c630300735c70c4c2', class: "card-body text-center p-0 app_links" }, h("a", { key: 'ebb65f47ebfdcaff41af48c46beb966eedf78120', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'e1dfc758ffe34ed9b4a3b92cc7a6397f30b6292d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '4383b5d3d8fecab40b21e0f6350b7324c8f525d0', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '3fda10739bbfd153145e7f974fc0d2539acfa664', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '55fbb1a5bf3031570bd0e037a73bd43fd9965451', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '1fbbe50355a0d7028029a71ced11248bdc2e7c8c', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b254bf04799256b68eddba3311595cfc45bb951a' }, h("a", { key: 'ca9e66cfcab3dea94a6764448d7c58a144e9de9c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
