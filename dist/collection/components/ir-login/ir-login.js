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
        return (h(Host, { key: '90848fdc572284628396ff9e90c96dd15bc1f204' }, h("ir-interceptor", { key: '55a457a8a98e6e8e87f509b37483beeb13b41224' }), h("ir-toast", { key: 'efa368d4424b25fee3617795befe66b725bd0b95' }), h("form", { key: 'a7fdc01f7b54571037526cc1ced94adc5af36dc3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '50f3b346c96819e734b7aca630aec7aef870c2c6', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '44e17db15053500cb15947a005990a5880005bd8', class: "separator-container" }, h("div", { key: '1228e998c9b7e8f588bdbb2084b49ee1a0baf7b7', class: "separator" }), h("p", { key: '3548d3ce70492109ef03b527ec44866b2c8ad7b6' }, "Sign in to manage your property"), h("div", { key: 'e01c2b57cc01d33f3053aa083834f31bb2d2b1c5', class: "separator" })), h("ir-input-text", { key: '4f9afb82786230aba35a4e195398f97f0add4959', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'e69e9efaf9d694b610e50983beeb33af57d66ca9', name: "user", slot: "icon" })), h("div", { key: '3a58c12f6142fae5233a56fd50e5fc532d5651d2', class: 'position-relative' }, h("ir-input-text", { key: '1685c5d4235b9a5c7410d12fb5967732a1a03c78', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'bf6a3a531f1afbf92918d1d638ebc120f27223e9', name: "key", slot: "icon" })), h("button", { key: '25179ad7edde31e05db9305c9e33d46ea4fc19d6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '2f59d91a660b3a8083181bdd3c718946bc9af25e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '62deecb157cc891ddd02a2fea84a6a5fd4ad2fe0', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '7890f4e63bafab1e6a8c19a4852a964054c240b6', class: "card-body text-center p-0 app_links" }, h("a", { key: '60a8a64bdb31d07c416248acf765dbd2bff6281c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '8bc03cacef7941b2bd3e1286208e1af38f7beda4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '01789f29125f107671fc5f6313bf58468842851c', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '183c336fda34d30966e408c3ff889791aa3ed377', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'e7648d2681df36b5c7783b7e5b2c0388247069fd', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '349677c20ac39a97f8f9b7d191ccf864f230b1cd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'f28f872af33cd54f9f4fa8de7acb1d2c95a742d0' }, h("a", { key: 'f66db1138fcd1acea0b9b54111e82760459c6481', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
