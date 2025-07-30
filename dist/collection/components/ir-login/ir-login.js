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
        return (h(Host, { key: '5b6d2d6a18d92a23a9c7c56446149950f6dc8b35' }, h("ir-interceptor", { key: 'a52122f6dd2222385c39997085909bad0476b508' }), h("ir-toast", { key: '9a0a715a3f78bd242b375316094167efb1b359ee' }), h("form", { key: '67eacff7918b15517c502c5e2376efabd1449a7c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'cc34a131345974358f8b38aedfc9f2aac7ff4dc3', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '56fdecbe39f98a69e5b5a6e371248bfdf1c4c9e7', class: "separator-container" }, h("div", { key: '76a28e672b7d33e1913969b7187621379982140b', class: "separator" }), h("p", { key: 'c0bc35c95af8c26b44c5ee1611e53544b0bb5b93' }, "Sign in to manage your property"), h("div", { key: 'bb3133d058af37f8cfe1f5b2466fb782a5a49818', class: "separator" })), h("ir-input-text", { key: '6184b94fdfab05210fa747364d615244c53109b1', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2947c164e4a916e7c5e0f04b7c8b3922af223dc1', name: "user", slot: "icon" })), h("div", { key: 'b28fba44501bc1393f075f551a5d615dd415f115', class: 'position-relative' }, h("ir-input-text", { key: '2e29b59da083bdba74e2ec68134104ff16eb18ea', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'b2c72d80c650981a46b4ca0df7258f3dc8795e8f', name: "key", slot: "icon" })), h("button", { key: '114168a07c8a7a53443ba80b36d87a85afd0c72e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '25e5b8a584f1c45b31dc5f3c6a81cac431a9f69e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '795c34da2e40425f4b08d2965363cde814a90d98', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '3f455011580500e7210ea1a82cb2733e1eeba029', class: "card-body text-center p-0 app_links" }, h("a", { key: 'b378572b432fde99eb8fa64eb62bf927288cca27', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1212be311a9907fcd8c3d5b1032f8f5103521c2a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c9c31cbeeadfcb1c9a0a2d00b3f121bc69f904f8', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '260a460d52260bc613d865ff2da1d6f33b84aacc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '6ba7a3cfb15fb5d59fcb377a8a00c72351901b17', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f273a66c59a7816e784a8321a09e48c43cb838ff', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '10c748a2d2349858720b105ca8e9bc7ed8c817e4' }, h("a", { key: '16745fef9341ab2fb86d98979d1f82ca75d4303b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
