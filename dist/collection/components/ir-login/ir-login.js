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
        return (h(Host, { key: '69ee23db4e1a8e2903692156c118fef13c05ac61' }, h("ir-interceptor", { key: '62c4a25d11a068be4bcb298bb2688031c84f8f89' }), h("ir-toast", { key: 'edeaf1aa7d4ee7ab66e6f63b4dcf5c5cfab2af13' }), h("form", { key: 'd9833a2f0a4877cb9e499ffc2f3844a25dced2bc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'cc65c3a991192393a95d6d031244ad86d9aca14e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'c652125c60cf816bbd86c0e64ec2de4bdb0b7f28', class: "separator-container" }, h("div", { key: '6f6f5eb4286ae462a35093f645d04740f5c82fab', class: "separator" }), h("p", { key: '534135400164154e26131618a84aaebd2c1e706e' }, "Sign in to manage your property"), h("div", { key: '6294fa7d68141a9b27ac154e54f9e09862341fa3', class: "separator" })), h("ir-input-text", { key: '579111658302f91414faeca40e5725aec43fbe1f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b830d19ae8adbed9330b0891f4978eca0a52a520', name: "user", slot: "icon" })), h("div", { key: 'd764449a1c8d4674751e637930b323f0bfbaa66b', class: 'position-relative' }, h("ir-input-text", { key: 'ff2631250fa2b2662afa002000ce5f25af607ea2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '168b883eedc767a2aa0245c2da14cb3691781a1b', name: "key", slot: "icon" })), h("button", { key: '04ff5036fa07a3cf737c8b46a4fd4625883ea9a7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'd60c59b43a6f08af9da2255bed0837951595158c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'ad7bc337ca40897f383a0b467942741a0e32f2c5', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0e81bf47eb2007d485de253d476d9880a35f6e57', class: "card-body text-center p-0 app_links" }, h("a", { key: '26ef41fb80cabd00b32d95f3ad77594c61cba62e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'c8a826721f5f8e630e57258f37af837dda34d297', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '65ee181084a7a440757e2c39438679bfd73dc666', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'a71ae5cc5ca0874180269d486f82039a330cd6a6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '943927a552566e897a021cc35e8ea26d61ba6201', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'e46479c2b79ec7568b9120a1aedb75c17db1bad8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3af70365eb8982d4672f2bced19854717469d3fe' }, h("a", { key: 'faee52badb4cf6be061a7e58342f28a9726bcef7', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
