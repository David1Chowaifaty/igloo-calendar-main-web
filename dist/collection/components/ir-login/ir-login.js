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
        return (h(Host, { key: 'dcf517bc2d6017ec28a0308feb864b9e2b835ada' }, h("ir-interceptor", { key: 'cb10dcde3b1e91169e56132c2980a09e10d3bca3' }), h("ir-toast", { key: '2adf7e154b09b42cb99fc50da0bfe23fab5e8c11' }), h("form", { key: '6938afa14146369592ec8658cfa883ea175ba270', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b521483b685c081e7c08871aee2ff9815f60ec56', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6717a9cf6c256ce6dd9e95938905ce7b53497fa7', class: "separator-container" }, h("div", { key: '494654ffdf690c1476e6043aa670b747b4e75f99', class: "separator" }), h("p", { key: '42abcaec1a90684858fd84b12102a21bfd1fc564' }, "Sign in to manage your property"), h("div", { key: '888acf6017530274450d2780f806e616dad1f468', class: "separator" })), h("ir-input-text", { key: 'ebc9cab4a0cc4e1a41f708f0e495deca7d4c4d24', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '90281e71019ea6c0dca4337b2213b03bdedecca3', name: "user", slot: "icon" })), h("div", { key: 'afc8b919bda3419f0993decef4cf75dae674f975', class: 'position-relative' }, h("ir-input-text", { key: 'dff141bad21b9c49293c2a3b438c21f71e1491f0', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '3b3a964b252fa582f95f05928df3d018525e58b7', name: "key", slot: "icon" })), h("button", { key: '33837d224d860c96d8879f3513138fca4bb6fb89', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'cdc4e3a89417d3c3471d20dd0241c4c74803f9e3', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2932025b80893ead1564a167c057301971452982', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '8dd36adcce63f2f19824741de1117a00e8dd0209', class: "card-body text-center p-0 app_links" }, h("a", { key: 'd204571713d60d075e685379ca4e1fbe6dc0bb75', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '0882324a4f52f2553bbd16c0424a6215bb265b67', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'ddc8e4a9c4fab0d9ed54ae084c210a33a3611489', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'a6e587c8c88c530707ae15454a1258f159660941', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '00b3230fdf9cd6b162068fbd28638f5f6a626ef1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '0155fa688df366f5f93fa610fcd55ddd1a4a3242', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'f03ff62061731bc4b88be29c5f388ccff68a010f' }, h("a", { key: 'a663d4843675f1225583943e1a7b14593324d22a', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
