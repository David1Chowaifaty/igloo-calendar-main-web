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
        return (h(Host, { key: '5956d48521340f061b3d49d2c7f08227373f0ed4' }, h("ir-interceptor", { key: '87257d42c28fd27cab671b98476e6ba1acbab66c' }), h("ir-toast", { key: '2954568ffcc1db06d547bf78a73abe36921fd2ac' }), h("form", { key: '801bdfde3c517394de4d5512852b714247f1a118', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '71ea723bcad8a778265741e3d789bfa0090eac77', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '17b58f502399698b378f0db0e86bc9e772122b90', class: "separator-container" }, h("div", { key: '4c6f4d43cb6e10f4412dd08b2f97030acf91ea91', class: "separator" }), h("p", { key: '26644567c6bfe0af1b8e8348116dc6bc03d5bbdc' }, "Sign in to manage your property"), h("div", { key: '4f6f575a1deea80b5fd82f8a6c02854261119a9a', class: "separator" })), h("ir-input-text", { key: '69ec151d1b649ae91b2660c54e76a35e715ce873', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '68b779fb3e22bb7d40cfddcb35ab523853c73952', name: "user", slot: "icon" })), h("div", { key: '0fb15e842b6d0c590039edc3ff54af965888c661', class: 'position-relative' }, h("ir-input-text", { key: '726d3b1061b55b55de7997ba530d70c966473a28', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'c60d83da3de4f5ab716e84c67cdad47ae4d0bf26', name: "key", slot: "icon" })), h("button", { key: '1db3c82be06a983b0c159b0f9cad2bb9702516cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e0860c26e10d0f03e9615fb0d1d682de161ef3f8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '84c48f50ffca31c861ccf3b1617fe066f7108afe', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '540719cd6e277d6e4fbc735feb062d1c82f3981d', class: "card-body text-center p-0 app_links" }, h("a", { key: '7c54133050992d9c335d5db9cbc9956ce2d536b9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '3a070daaa259047f9122a551b5b5340c67f11174', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '124894e60ca16f5b627d39df08eb05dbd6c7d2cb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '90217dc982fba311923711c9bc783e3c0aff8902', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3258694f84fba58fc81619cb13437fecba420f00', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'fcea81470e07f08553922b571d9e57a43046d454', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'c7e121500f216416273110be5b4c99216498a3a1' }, h("a", { key: '3d9628cf05afe6296a6904ab6acb371bd6f02a55', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
