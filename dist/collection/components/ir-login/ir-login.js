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
        return (h(Host, { key: '4d57d5198a1cbe77d075a1afbc8bf6a8994df10d' }, h("ir-interceptor", { key: '5287ee91724ec098b5c32f5275188eb3bb8d8697' }), h("ir-toast", { key: '090a4bf76c8a0fdb5ac5fd440e84234c5a04518a' }), h("form", { key: 'a77838ac7f164db0d3ff3f7adde4d0e66feb030a', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '187a3afb086debf734f68b17b53763881ca4f833', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'f80db6f375030516433f53847196c0b1d630fead', class: "separator-container" }, h("div", { key: '3e69f35cd1c00f8ecc74304c0a61708fdfb5699b', class: "separator" }), h("p", { key: '7ac3adee742b39906f0d55602e6b9452a75fe353' }, "Sign in to manage your property"), h("div", { key: 'c2a8f13a9eae523fcaf9cdf22496ba04ff3b010e', class: "separator" })), h("ir-input-text", { key: 'd51bf8084448bf00cc3996709740ea91758766b4', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '57ae817511d662520058d6fab23e5765ba7021dc', name: "user", slot: "icon" })), h("div", { key: '783875f1ff1dc6c7d2eac849b72b20a22378d946', class: 'position-relative' }, h("ir-input-text", { key: '49d890af85c7063b1c45aaa80d7cff669dafa334', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '56ca7d9ce8573cc895cdd6d5db5167b2e63c5e03', name: "key", slot: "icon" })), h("button", { key: '08602b8b1161463cc6d5d5cefa5f8633708a6abb', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '7cad61831c3f5f0e04d25b10476c860002c806c8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'f21448a1ff67931f873887016f273b9d820fd31f', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '9d58351a2e7a23e1555568d845e6c30ec31a2e4a', class: "card-body text-center p-0 app_links" }, h("a", { key: '4355035b507357cf98bbf07f9a82408f3140a952', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'cb1ea37ddc91b977a2cf9bd7b767bfe79ebacd69', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '0666c2ce90c26c9b52aa9acdb7e4bbfd4963d5ca', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '24c44f8b28cbdbdad071276ee60f19dcb193cc0b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f9c0d3007b333390662b564c9ea71d3bc72acb1a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'e6953db49b050455f05577276bb4f6a9649f1be2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b931836dc76c3b4aad739de7f7407c7e6ddd53cf' }, h("a", { key: 'c0370a1da1b83e04abdf9ce39e41b13c39cfbfd0', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
