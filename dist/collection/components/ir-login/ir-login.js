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
        return (h(Host, { key: '382e60578b39809efb9a216d53d1935596c570c6' }, h("ir-interceptor", { key: 'd9a2b487ac3a67afda7db2ffd1a578e0fcb1c9af' }), h("ir-toast", { key: 'f07bf61fca86ae588fb5799a1b3128470df02650' }), h("form", { key: 'cef6b976e1c52f6ebe99348961f014b86b4c7c70', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'a5926a5b2d6c39c1620d409f115eea4994f71578', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'fdd98d47de221abc5e3e2416d12bde2499fb0972', class: "separator-container" }, h("div", { key: 'eeec289c62f6d2385c4b0fab039ea17e544a99c0', class: "separator" }), h("p", { key: '176c6fcee21f0bb3cec1b9478616d8e022b00d34' }, "Sign in to manage your property"), h("div", { key: 'a8a1c1746d240fbcf8ac8acc1473b41f8a117bc9', class: "separator" })), h("ir-input-text", { key: '3f82d5deecdfc801276c61822c8c077de6cd60de', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '46cc65363b4ffa9588fc6fa279fc1b96f9eb45f9', name: "user", slot: "icon" })), h("div", { key: 'dfe6be9a2f9a75bba735eaceb24e750b084c9c4c', class: 'position-relative' }, h("ir-input-text", { key: '3b703ea511efb239323e3be71a334bb7fb2fefcc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '27839241350c14dd4334bb1029eeead47235005c', name: "key", slot: "icon" })), h("button", { key: '49509607cc710d5056c677688d764af689454dd5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '2ea3c0142a9ab950c107a1acfeb5487be357ef64', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'f5bd98f32e840e7870f5db78bcfc2e2b3ac7f155', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'bdd60655270227f61f5a0dbc09f815ec00947c7a', class: "card-body text-center p-0 app_links" }, h("a", { key: 'd360ccac326564f4f15ff07f1f1bf3c99d8ba014', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '70790fc7a840b0d4cfb0c6fa79dd405bbbded400', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'cc2eae5f0d88a35fdfb52156d14a63290ce7b8a2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'dde47765c428956d9ea27eff8350fd4e40c04429', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '6837ba3cf88da6378daf8e161fe31989d2e44d80', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '8eddaf4d074259be6c600479f88491b3d930ffeb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '00660a288d4cd3c2c0802099e01ce534c7b283ff' }, h("a", { key: '7a7c6d3d372d8a088c0c5624899a0f7a305a555b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
