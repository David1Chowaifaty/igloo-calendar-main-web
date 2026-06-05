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
        return (h(Host, { key: '98d1af233d80b819fd46f99e36f57a7dd3ce4cf5' }, h("ir-interceptor", { key: '883a351d0b17803ee703997de6dd0d1e7e01c16d' }), h("ir-toast", { key: 'bd157c8768505dd90790801d88d9c18246849f05' }), h("form", { key: '34fae81bcd12f56a82a16ef7b87114acc5aff0d6', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'd97de5b2b1fd7414077a22aa841176bcf45e2101', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '666b29321414984d63ea15f6e7df0f26577a398b', class: "separator-container" }, h("div", { key: '0a3d492b4833f3686e6af41e0104d7eb101e678f', class: "separator" }), h("p", { key: 'baddd5a325071c7eadf6e02f439247f81d416e2d' }, "Sign in to manage your property"), h("div", { key: '8fbe8e58d9c441333b693303c66d85b6b8cc15d4', class: "separator" })), h("ir-input-text", { key: '2926b1f1b41f6c26f0c041c716af3b0109fec3c7', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '08b9c1e6b667f6c9e79b76986d314fa1a8db56c4', name: "user", slot: "icon" })), h("div", { key: '08b10dc568771c38cc4b6e405403af03032c738b', class: 'position-relative' }, h("ir-input-text", { key: '64d7dced7a4fce59f0c7d72d3a6adfd1debfb565', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'ef5f86eadc76ce73f06f5078f0de4b557786654e', name: "key", slot: "icon" })), h("button", { key: 'e7bc09e8cbc8bc3fb8f5baf9fca64a51772f78ed', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'cb80aea7c6e6a71c5ff2a08c66ab21e41e7bc6cc', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '42514906d213d82cd4fceabcfd10fdeaca4ca4a5', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'f8f309c41175b6c489ffe41633a75fe621b97f9b', class: "card-body text-center p-0 app_links" }, h("a", { key: '91c35735a5893a8f9471ecde26f5af6224632cc1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '944b1133383e66b5f4f73a298b21b70bfb4e8968', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'f878e9e5f0b558dd7541011975c43698cdd91824', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1e3fbed3c017b8e5c1dc829bf3160d940c6b2219', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '0a09efe3299a0bb6c12ec21749a0be4759aa1cf3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '04e75fcd4890d2c0737c71ced9e405cd3efd853a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '293c138038edb6ab799684cd577b2ec75ca48c8e' }, h("a", { key: '1d2c448b9a2b9e41d4d221f3b897407e0be09a13', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
