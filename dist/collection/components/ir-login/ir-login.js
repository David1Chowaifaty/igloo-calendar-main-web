import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    constructor() {
        this.showPassword = false;
        this.authService = new AuthService();
        this.token = new Token();
    }
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
        return (h(Host, { key: '05d23ec6b04a80b1a8607635b40e5a3c3a7f3f06' }, h("ir-interceptor", { key: 'b2dc80d50abce2773157ceed973ecc2aa52d04fb' }), h("ir-toast", { key: '6b81520a0e2ccd84f0c690ec84682b045ec911f1' }), h("form", { key: 'e27e9f2f487eacc331f51467fbe0bdef8811fea8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'daaf0c4dcdd6f6d41305cc1482c4d976daa1a2d1', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'a8b3c6541f68b8682f179d3a97161ee3130f9dd7', class: "separator-container" }, h("div", { key: 'd1e686094aea6d2e489beac8da4869045188d27b', class: "separator" }), h("p", { key: '2c92ae458279d5afb5a852c6cb00c9f179228b04' }, "Sign in to manage your property"), h("div", { key: 'c3b56fa8fea7b111cc3e6184acd7ea68b35a13cb', class: "separator" })), h("ir-input-text", { key: '78da11c11c9feab0ac91cb21ee10d88ce77b7e98', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '8814ead5822a2ccb50217d5c656d1a599cf77ae6', name: "user", slot: "icon" })), h("div", { key: '00f147c503bab1491f666ba614a1d1aed2668548', class: 'position-relative' }, h("ir-input-text", { key: '2f04fc8a19305959f433a2ec274fed15f15897f8', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd936dd4170c100df752c2cbf3fb522d3ec6cc399', name: "key", slot: "icon" })), h("button", { key: '73317ac8e5bbd53ce0c1ce0da52d48ba1db9ffdf', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '9b2aa3e57ab771d456923154e1b13d668d508cea', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '218b87f5f27ed803f95d76e40a4b88472f80b084', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0dee9dfb178fd0c9b5f655357083334f5b56bf58', class: "card-body text-center p-0 app_links" }, h("a", { key: '490bf484cd36005f77e7fffcf870a424bc73a515', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'b0be3f1fb4ce289704bee1ea28e3a61e8485a592', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'ebebebcff43c4431f149c00eaa110a13c3cd93f6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '7feb2c198d71d8c1147e2d82841534e34d321698', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '51ec8eed0359e74369f433a6cbf0fa329b54a886', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '7f68f9f781696fc410b50e9fbe87a049eca83489', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '1f7a786682f8751fc79dbe1442a43d550e97eab8' }, h("a", { key: '7610e025e0af93b87935203f1659ec24a7c12606', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
