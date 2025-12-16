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
        return (h(Host, { key: '6240ec517909d5f482d2658958742652a39226fc' }, h("ir-interceptor", { key: '91c4e5d208a070757809872be493a7e1f3d8b6d9' }), h("ir-toast", { key: '7414f3ff537fb03b149f9622d7b28c28c0ccabec' }), h("form", { key: '514e51e3bc8ab581c70313f70ffd71c968ef7f3c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '75aa67db41649b85539a106abc3be9a6f519f4d2', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6aba62e7391ea349df00bbc6a07dfa7e5d002cea', class: "separator-container" }, h("div", { key: '0f3b681899a7633c4079d47898de3967e223170b', class: "separator" }), h("p", { key: '8e73022b84a31d27cb81a35bd989a8a513541cbc' }, "Sign in to manage your property"), h("div", { key: '016693443285616a19082e4029848f18452b8710', class: "separator" })), h("ir-input-text", { key: '425d35b6992c7bcfcb8b8ce1d887b6835cab68fb', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2e83ce70674e51499ae34d6c2aadf625145058a6', name: "user", slot: "icon" })), h("div", { key: '099c3efb60ecbce3a6491253d8313f1bdee772e3', class: 'position-relative' }, h("ir-input-text", { key: 'e9ebfbe8e02378c7b13068d03c24755080c40bf6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e6c94c73b104413230a08d8cdbd39e5ac60b98e9', name: "key", slot: "icon" })), h("button", { key: 'bc2898d7113cbd5e3d45289a390472807337f0cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '819dcddfdf3cbc07f845174afa178ac3ca175d36', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '62ce5984e7436b24541072729c9f42975e2b4e93', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '78e0f6f817d5f55ba03c8578b9bf19958b537c07', class: "card-body text-center p-0 app_links" }, h("a", { key: '3c7a05b1bd4ff14b826a467d52241074267c83eb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '79c00677fa58b15227c9f1e924da568dd49af939', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '86c2d133bf44a12261ae4c22bcb194edaaba8a38', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'c53861de72c406882e225ec5878feb112791ca61', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '414910f0db1835f848b932788a4723efd04a9d35', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '4ed9f29257b77ca47233e52462b52dcd04a1b454', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'd9c551182dbb33fcbeeb1ba3ed3a76e7382996a6' }, h("a", { key: '3f75df69f74904773f2f1518cf5fdb2c31ebaa22', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
