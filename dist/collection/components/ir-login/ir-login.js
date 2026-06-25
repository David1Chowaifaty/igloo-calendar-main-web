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
        return (h(Host, { key: '7ae20b37fba688de9636f1c2f6765e57148c01ee' }, h("ir-interceptor", { key: '061bccdf075b155dfa37586da60fb5605f9699da' }), h("ir-toast", { key: 'd1820f53eeeee7eca44a5141061ba8bdb84e611c' }), h("form", { key: '570c638560b22d834f6eba53f2cddbca926b117b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '60de82f58a7d868247436400a379da205b0aeb5d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '604dbcd94f1dd8c7b7e88f75b1eb93fbc80c366d', class: "separator-container" }, h("div", { key: '6130d93cf9846091c307ce91ec1ed6cf49a89cf0', class: "separator" }), h("p", { key: '9bf8d55e0de4707a274441f05278456423194136' }, "Sign in to manage your property"), h("div", { key: '4417ceb7c92695d3951d43f558da7b2fce8f9d1e', class: "separator" })), h("ir-input-text", { key: '197e63c7d264f4699ca76fe4fd880e88f2bdc015', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '4e1cfc138918f77adb41b29a3fd475b51842611d', name: "user", slot: "icon" })), h("div", { key: '976a0d2cd289771816f518e0f6d73a495dffcdcd', class: 'position-relative' }, h("ir-input-text", { key: '974fefc2e62dd7f93088a53cf5f031de9278b4b2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1b303a7ab4bcbef2694fbc88d9834d9e98537184', name: "key", slot: "icon" })), h("button", { key: 'f0ccb624801d45f420d191e7e5b3852ba7d1e177', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'c269fbf4195f07f2446d481441c6cbb47301b44e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'ed9a74083ecc510e510954459d317a0df2044005', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c850faf2538fb1fa94f36fa57d2c98f30fe374fa', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e3da466ee13b2b0a5567b0987ce7fa3baa6e3a44', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '588974dad468869f7767b7ed858d95411f4f590c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c9cec596ea9e3f417df9f498963c9a2abbb87d97', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b9a9e1052454b621e95cc23625771e625905db93', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '603cf4bc867b59411caa72cf27fe92a121ee7946', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '38af471d575a5b2d1d0f4079a1e0b841676e5f15', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '514cb97e1a50c979aafdf5257c71c01d93101cd9' }, h("a", { key: 'e93080a573b2d5a3a489532d6934e795dd7c1c8c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
