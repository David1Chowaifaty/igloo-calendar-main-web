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
        return (h(Host, { key: 'c2d9ec22ed9d2e89802e867127d601f2260013de' }, h("ir-interceptor", { key: 'daae8d4ced95cf21163a85c0ac32c7de2b49b58d' }), h("ir-toast", { key: '726d34fab6a4da0d053349c17e9220f46df521c2' }), h("form", { key: '14e41acc31628794af0dfc0dfbfdb35d719979d8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '3dbdce1ceffd531608e8ee861289dad0cb546902', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '544d1e1f5eaa27af5c1a681a9d0b87da9c4c72a6', class: "separator-container" }, h("div", { key: 'c664152619365dc9bd3a8655654a0cab60cb12c6', class: "separator" }), h("p", { key: '0db2c040d80d25b778f85a3f99324a84096f773a' }, "Sign in to manage your property"), h("div", { key: 'b31e6c0139930e2b0035e22351c500abedefaa47', class: "separator" })), h("ir-input-text", { key: '773943b24c48bb03ad4daf386e1fff049809c238', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'dc791ed733768fb4cc25ce2ccc9c9ff42838120e', name: "user", slot: "icon" })), h("div", { key: '11e325526222c0c3dcfefddaec197ee8fc5021ae', class: 'position-relative' }, h("ir-input-text", { key: '753fc0bf0d45fdf2d7dbeeb5db9fb1d8e2dd7632', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '7edc33e588dd61d37d91801033d334d185f97f3b', name: "key", slot: "icon" })), h("button", { key: '3a673c08987790ef2e56377b31c03f29a38a8027', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b42e6acb33360a4d0f0f60bc789e0e0a066ab108', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7b64f5584849e104941a4e59f736a956f8db1618', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '19132285f01f3878658aff79c131fa43ff71b4ad', class: "card-body text-center p-0 app_links" }, h("a", { key: '2f2529b543cc7b61d1eddcd86ad76ecd4339e795', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'bad1b114745148c3ecf765a467d0fc162498c4e0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '248e5a7935eb0d0a6114aa3994f7cbd4c05aca2b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '91b7cead031750298959415f5e391d82f775dee1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '5955b2d8c87e8ef6ee2bb20a9e38f66a97011a0b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '6b8ee8632128f082f4d0ce4aeabc4d2a8082b31a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a9b8cfcb1c9c0699117fa6dd5a0730743faf6874' }, h("a", { key: 'b6b0b87dca79433fa8ae5b0e77d9b62a10ee0fa6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
