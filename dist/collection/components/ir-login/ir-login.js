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
        return (h(Host, { key: '574b208138654a429d81efddd90ef44afa837cc0' }, h("ir-interceptor", { key: '6d5f7c771a8b354437eb89ad979fbc30369bd28d' }), h("ir-toast", { key: '8e2b47b2df016125ad2d7e62380c8ecea6709c8f' }), h("form", { key: 'ff39e054b34d7c37dbe8e1e41acdc1f042ea82ff', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '6ea3eda68f3028f26854896c761204bf4e68698f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'e3aaf27c6b19f884743ef9ff9051de8ece9d35ae', class: "separator-container" }, h("div", { key: '5e8d4e983ebb6dd5675762235f8e01d64ed9b387', class: "separator" }), h("p", { key: '3b21b85054d7450bdcdd6f8f89c828dd4086b100' }, "Sign in to manage your property"), h("div", { key: 'ad54e21ac1582695a4a45f3aac3f1fd1217fb692', class: "separator" })), h("ir-input-text", { key: 'bdc223793a280e8beaf43b60133d636a95880562', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '4d5ca29387116032f46d845c5a65e455dcbc22b9', name: "user", slot: "icon" })), h("div", { key: '02148b0020763e4c7536011c28ed7d83d0370141', class: 'position-relative' }, h("ir-input-text", { key: '6ad09ccc0c4954a1e534672f039516fc6ef5454b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd12be23046bcbfa2bce8013ba6a6bed5f89a30a6', name: "key", slot: "icon" })), h("button", { key: 'b3d1cd77bc56f9f722b9b6abcb8a22f0ee518904', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'da827e7df4b0cd13868f9b53817461469b82146c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '463bc920358ece54ccc19da1df9251ebb036ccd1', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '183c6e433427381ebba274378bdc08ceb3cafe6a', class: "card-body text-center p-0 app_links" }, h("a", { key: '11eb123ed7611824f264edd56232b8b64b0bc1c7', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '748b443e9de98e18e96c75eaf8c8cc15efb6402c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '939a80b6f05981d72700d0b1caa044124b53011a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4dd6e7f89e3d719a2a0d536d4dfa722e3116d499', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'fb3dc7be2d55a0b75a1345129c18325f392cebaf', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '8811fee3bbeec921ac19a046c59b6bb19d24113e', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'cb3f5597a04ddf6ca70d26f1f43cd4b0516d5f24' }, h("a", { key: 'bd8731632b16ef94c6bcee63de7456159a2c8ca1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
