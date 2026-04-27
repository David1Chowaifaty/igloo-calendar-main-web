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
        return (h(Host, { key: '0a205026bbdba66789553bda019dc8e619688bf9' }, h("ir-interceptor", { key: 'be59c01fdbd3d54afec16d8cffb1bba38ae4b2db' }), h("ir-toast", { key: '3928f50b9a8087ef819450de456afde29ce33c0f' }), h("form", { key: '99736ebeccd2d7e85439db74c84f7e98c9571c49', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'd7d467edfb48266cbca379a5bcd01fbed7cf05df', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '44e90f4399ff594d546490851b34c09f835ba790', class: "separator-container" }, h("div", { key: '1e57ce058040783b23beaabfcbfa5ba4018d3210', class: "separator" }), h("p", { key: '4d18ce00fe56245f6412ed2342eb1d3cf6e2e0d6' }, "Sign in to manage your property"), h("div", { key: '74e5492195571b4b04b6a0ee0213e4f53c53c7f0', class: "separator" })), h("ir-input-text", { key: '89f6a443def7b73f203db4d320293dd791855b19', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2e91f5d6b4a3543700425d2cab5a007aea271770', name: "user", slot: "icon" })), h("div", { key: '76be15203878097bd317c344ef292a76b907876a', class: 'position-relative' }, h("ir-input-text", { key: '3cb490a8f6a8f79364e3cca60c85830f1f780ba6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '39bedcf0aba67b8030176236c62e36ae44b432b0', name: "key", slot: "icon" })), h("button", { key: '9ed3d1b1375a49582de2657c85fc32a61592aae2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'bd1665a7c2cc51ba1e30fc7fd35df585b82c2e69', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '53fafaf8ddf4c9a783935e3d21cc2190f1d9f276', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'e9b01c6cf0892b94a9bfb218dc32736e58608c83', class: "card-body text-center p-0 app_links" }, h("a", { key: '709a03f9036843b7f179cbe97837288bc5b4c213', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '7859f3396fdbe658db16a6bd9759fc607d486078', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '7c4510b218b2eaf0aa61de391c2b53d980791759', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '10a6d7e2604d6a42ff51e83422c3c5500b95a255', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '86ee2bc96f6850b080d82e92d228ecf1883d773b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'd3fbf88be84a4415555a9e9f2c928414941564a1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '0844fdf762f2de3dad1682b844f576206439925a' }, h("a", { key: 'a3eb30305a878b48ceb000eeaece00f0a767c585', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
