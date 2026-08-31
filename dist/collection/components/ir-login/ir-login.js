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
        return (h(Host, { key: 'c4f931c4de904ccacc8c98a6507cda8223ecdcec' }, h("ir-interceptor", { key: 'ee281d41a2116727096514e0c46b6ba85a4d787f' }), h("ir-toast", { key: 'a5f216f1e536da64d04b8af3a448c53d77f95ece' }), h("form", { key: '7e6589333a09349ec7c61d97f9ec2ed53e76b1bb', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '35c1aebce0e00b300849531ea50bc081c7673ebc', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'cf122ea1e76c575162ada71489614d96dbddd65c', class: "separator-container" }, h("div", { key: '4ab3f0757ab0bf721bdd04f57a742022c67cfb58', class: "separator" }), h("p", { key: '7b33962cd3495b6151401a350ffbd23652ff486d' }, "Sign in to manage your property"), h("div", { key: 'be0801f2a476b0d6201ef46b7df6886adc7fa01d', class: "separator" })), h("ir-input-text", { key: '30f1ea22b0e93026029846f7d0be26361a95cca5', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'bd3c68937497f39fcb6b9571341d8858981d0f07', name: "user", slot: "icon" })), h("div", { key: '17ca02ddb06901417925bd6743f7392092989226', class: 'position-relative' }, h("ir-input-text", { key: 'e94497c08758af93eca9f98e8f53ecca5ab393cf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '410a45c4f0a87410ce7e04d543f97a8f19771f1c', name: "key", slot: "icon" })), h("button", { key: 'afe6fa364e973568e5def76c226124c48af51ae7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'a6e46248525106ba71a2c16d698531aa527e18e0', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7367954dfbdc548cd1c3634febd5347cca711d4d', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0d230c522ccb5280464be9792f18f63b38cefb6c', class: "card-body text-center p-0 app_links" }, h("a", { key: '0bb757e8b24fa192699319ae1fcfe3b261d93008', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '5eacc971d24a3a07feaad548cd3136d6a799209f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'a9b559dcde986c1510bcc77f7689787537031946', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '8f75a6b93894c445d6a3184fdd2284c728cd8c61', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '638a82b2e92cafce46e57ddfddfd3070f1a9649a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '05d935213f934b535a42d75e2c2e347ae1625813', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '0c81cb8fe79eac5ddadad4a3e39461febbdfdb52' }, h("a", { key: 'dc37547c0d503cecb65e910a9ec4133c9810b669', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
