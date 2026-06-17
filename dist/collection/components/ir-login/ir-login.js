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
        return (h(Host, { key: 'e0fa41f0081d6d1b5527f691426c7168929d1961' }, h("ir-interceptor", { key: '2cc63f1a25727de59757d51df8d028430e128346' }), h("ir-toast", { key: 'd55c3730ea00e2883bc5d930bc7731f11cdf6dc7' }), h("form", { key: 'ab323ea3496b44091295cf95c584156c82594ffb', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '01c019593988cd88edebec34aa92ccbbf5a9fa57', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'f33aa99c8bef5c5c504b511d295c14841c7fae84', class: "separator-container" }, h("div", { key: '10c78eee2e4636c1912e932d669d4796c7e8cc03', class: "separator" }), h("p", { key: '3a42df7f82128e5bb240c11c22b816011de0ace5' }, "Sign in to manage your property"), h("div", { key: 'ca53b1195e64bfde62543405e823947f16c1a34b', class: "separator" })), h("ir-input-text", { key: '7c6aa3f11dc5d7f02ac9d4516d5c1aa9c7193a5c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'fa27f9d9f581c9309dce9247697e367daab18ef0', name: "user", slot: "icon" })), h("div", { key: '8819aea920eed9ebc7d2ff4a81fd64b1971abeb1', class: 'position-relative' }, h("ir-input-text", { key: 'ed9198c4f14103a2bf14aaa45760160d325805c2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd9696e37f55418230f97e82f906742e88cdc941d', name: "key", slot: "icon" })), h("button", { key: '8b7cbf65746a5a6828a179a08daa4487638bf5c6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '6dc0892d56a01833f729307f7006b32d78c19934', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '519fce65f50de19af51cab95410efa6b1044493d', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '65e7bf796095c2637a1832197dc6fba7743327db', class: "card-body text-center p-0 app_links" }, h("a", { key: '995fe7d7e487e2513dd85c809a25853c8395233a', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '81eb6facf653bf5698aa445e6049c479b9778c46', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c5b6528646775577e593ad6f5b19873146ab5bc7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '627099b8fd16d006bf9fa2ea7d998ce445909917', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3f6b496692a0fa7334b34322afba3175467a01d8', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f0f7fed65f9e97d4dc2fe81a7108fc780886963e', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '39f8aebcf50682d4dc01b6248a794d5e99cdf6e0' }, h("a", { key: '00989a5b3624feeb558fcfd19e723bd98c65db27', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
