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
        return (h(Host, { key: '6933ed5170aa498e6bc0eb2ddd122f02a3bcbd55' }, h("ir-interceptor", { key: '83144e43c5df4b8133537f5353e7f1e4c07c70ef' }), h("ir-toast", { key: '377933d99e71386172272a324b05aafd3581f3a7' }), h("form", { key: '3674b57a7381ae86167f9f591fab6ccd95d58f9f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f00778789bea191c3a71cda4bf03617eda4df490', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'febb534b865cc3d9130c7ce65501a8428bf9d386', class: "separator-container" }, h("div", { key: '157478745979f9875ea43abaedbd9a276f2e43cf', class: "separator" }), h("p", { key: '11fb3f098e43c26f806cfe8b1af0b2330c78e4ed' }, "Sign in to manage your property"), h("div", { key: 'a4cc857012505fcc0fbde90a46201233f26ce863', class: "separator" })), h("ir-input-text", { key: 'c9c26e8cdbf3f91cf6499c23810c183953aeae1e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '610761fcd8779fad38467745b0e57bdce8c1e008', name: "user", slot: "icon" })), h("div", { key: 'c71a20c486031fa1b4e6e533fd9f73e0eeb4bd1f', class: 'position-relative' }, h("ir-input-text", { key: 'ba23ae45712a0a124a86a79fb7360c87bf095ec7', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '6527d16f75869fcc52f70e16e8a7add473fceaaf', name: "key", slot: "icon" })), h("button", { key: 'be01937324acd0a71b5903ec8b00803a20c8a99a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '790595f9b176ea091f6aef62b0901d41b7a9d5d5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '191118d7b267d333593252796f0f10f7f4ed69f1', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '1d6665edbe7ee9a613aea34cfc9d38c65d58c290', class: "card-body text-center p-0 app_links" }, h("a", { key: '66419ef2bb9d06de5d6ffc4a97130599aafb6231', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'd00099cd007c69b629e48c7ec2f3e114aad9b676', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9150b897f24114c129efd1555d0ebecd45e23cd4', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'ebc063cf5991df270954f41fa3fcdc0777fd2584', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'c0c67e4807c0b1a367a947bfb067d3a8f90815c9', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'ff4fff61de1cd40195db06993d95a9fdffc308bd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '09106883a0a947ccecf8693e0e9287ced6de3126' }, h("a", { key: 'c032de16d01d67029104386180f6b6ab569d7c44', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
                    "original": "{\r\n    token: string;\r\n    code: 'succsess' | 'error';\r\n  }",
                    "resolved": "{ token: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-login.js.map
