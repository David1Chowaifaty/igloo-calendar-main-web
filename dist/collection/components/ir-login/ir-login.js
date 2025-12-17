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
        return (h(Host, { key: '459ca4f5ca9d65b34c8f349512937d3386f467c3' }, h("ir-interceptor", { key: 'ee6e332b52b265bb5d0fd02a2a9fdf6434f01bbf' }), h("ir-toast", { key: '30fedbe45bb807caab82248c52a87d26b316fa46' }), h("form", { key: '0ce8e14fcf3943578cadcb567db0b3c8a379e229', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4ad7e3c497aeeac60a02a693137747da7ec38b0d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ae1996a1537e2e1fffd06ed14910112e2f0db8e0', class: "separator-container" }, h("div", { key: '28645c611046ed8855c6b7816e67258bd9ba8467', class: "separator" }), h("p", { key: '5e6e3ca387177cf51e0a6313d97ea825c4b9ebde' }, "Sign in to manage your property"), h("div", { key: 'f9dffb2a851c4da1d76e6c393cb6a2f0056b8ea3', class: "separator" })), h("ir-input-text", { key: '6311828c8b7a21354d5614bed3fb333dd9a25ca8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a4569c428dffae4d24c8e628c2b6b5661b53e733', name: "user", slot: "icon" })), h("div", { key: '45c7691f6b03ad977be3ef50cc92618166734ec8', class: 'position-relative' }, h("ir-input-text", { key: 'db18c4f2595e78af83bfcdad9ea4cff3d68a6465', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '58d576c93dada944f747113fdd6858892a5c5862', name: "key", slot: "icon" })), h("button", { key: '47f092cf1511e42d088f080fb43af749e4ad83f3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'ebebe5fd31b1f2abb50b9e043a530eebcde6afa8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'be9c9a84c9b8786abd1932d10370a21486e1282a', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'af46482e38cde7642edeedc90823441970075759', class: "card-body text-center p-0 app_links" }, h("a", { key: '7e0e20544d62253d16ffc34e4bbfab114699ce02', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '37868c86c47c72bb8bdb6ece1ea0e7f1d9d2f4ad', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '8522f9940bdcf2b724d4a4d68d37f078b14513c2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'c91d0b4580d13856293749903b756f2d243a7971', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '1641bc742279950560064fb3e433100402477352', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'c31c82c9b0db0e904b013517f61adeb9b7685a9a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '2967b1a5bd421147a2a6d4dda4414b9f5d64bbef' }, h("a", { key: 'fec21631c59a6107ef44af813e9dda212f71b977', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
