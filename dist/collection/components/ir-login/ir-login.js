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
        return (h(Host, { key: '6d90d28640e3957a156929c9c6d6a39aa0561540' }, h("ir-interceptor", { key: '573ca34ba90ca16977c40085dd644dab50f03023' }), h("ir-toast", { key: '5777b3b464e11c488547960ccaec92fc59363d17' }), h("form", { key: '8393c1fa0b4c5db54fb0ec5d3749f92f81e76622', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '8dc7eb68c7b8f3bec46ed510728f2bbdcd607659', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'adceb411f18fd6c7011934591cf2a372eb59578b', class: "separator-container" }, h("div", { key: 'f49d28bbc93cc53835a9af9db8617a843ccbd17e', class: "separator" }), h("p", { key: '4810df5b9594cdb24e3a54a9a7dd4ccecf82e4d0' }, "Sign in to manage your property"), h("div", { key: '4429070fc67b41bb8278ae9635839e3548e2412b', class: "separator" })), h("ir-input-text", { key: '5d8f9bdfc74645ef20b68c25db0c3b2f561c5609', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'f6004365cad9ff822dd7b28ad101fdd75abb0080', name: "user", slot: "icon" })), h("div", { key: '0cc4639531ffe81d83f59a1646a2208488a1d8eb', class: 'position-relative' }, h("ir-input-text", { key: '66ea2eec60eef78bc87f6939c37809382d5d755d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1e8aed3e6d4a7c9aa595ab113138bcf0d3aa388a', name: "key", slot: "icon" })), h("button", { key: '74b706de7eac7b8dbbeeeabea2ca9377d8e932be', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '694cb2b5455a48b3529add306120d1fd77c52717', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'bee8c417a9fbca7497a78c2518736ef8151a3d2c', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '54ce9fd8aa461086729c7348bca6646295c9bcdf', class: "card-body text-center p-0 app_links" }, h("a", { key: 'a1e9220f34b17980440c16d020c8b6b3903769f1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '6abefd7f3e7922550e5d9221cb266b6b3ff15855', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'e3b30017a4f589022d828e693e0d3ec843adcb1a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6665467f77e3b973418cdec74ed5ff0727b038b5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '67d0c3a6ffda4cc11d98ef2299ba76637bfa5b4b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '75506fa7904337be2af2057340d2d7cd42f0ad8f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '7c311f0c3d43882f9b055d1419cb0f5118ff6d38' }, h("a", { key: '499d8e8f5d43ce8d74eac471f543e7ecfd466aab', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
