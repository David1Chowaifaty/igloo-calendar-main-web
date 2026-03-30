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
        return (h(Host, { key: '000e38520141a5e33957382770cc848a482bb995' }, h("ir-interceptor", { key: '431a3ed8a560cd4e0cc07b4f79f32385476a19d6' }), h("ir-toast", { key: '06a8786df32a35a76326fde31553fecb4f575774' }), h("form", { key: '7baa6e38e885097a747a8cc6b01f22a2371b8254', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '5a2a83e572314f67e1bd60a2c05bdbbea1e64995', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ff78d57de233dd9db367386c5a45adcf75a680e6', class: "separator-container" }, h("div", { key: '4562e0bb19db213c5a910d65123b89a212ca43bd', class: "separator" }), h("p", { key: '8ae71b969ae35152c43ea2e1f33e08ab7e5ee6fb' }, "Sign in to manage your property"), h("div", { key: '2b35fa6e8aeab155dd809043a1d4ac69a943f4dc', class: "separator" })), h("ir-input-text", { key: '5d00b6cd57f86edc99babddd1bcb16b7483e421f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '7cfcc95c91514d62713c92d88d5e43296e758f46', name: "user", slot: "icon" })), h("div", { key: 'a2add31e2ff502c291d5ded7db680751c8f5311d', class: 'position-relative' }, h("ir-input-text", { key: 'fc8e885076297976cd9abaeedd5c03334b3f243e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'bfb6034e66e84d4874032065c2317915f2620869', name: "key", slot: "icon" })), h("button", { key: '866c2287e2d4ad320b882b08cc14922bbc9a910b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'bf8126eb6d64fe29bf9c45674cfad4909efd7822', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e05b5e0e80174214341cae89c9d0ddaec7698107', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0489477c66852d29ab24308d5e5d01ff2cb10096', class: "card-body text-center p-0 app_links" }, h("a", { key: '00a0ed6aac2628e6fd41cbbf714c31ba04527bf5', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '17102cc635c5209d07bddf0679d71b8534aabe6b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '6de7149549dba8dd2490c2694eb20e945ab68807', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4e86e95e7d451777d3fc452daee86870c733ab81', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '93a9ca8e179878c8295bbe5518418ed02e4ba5a1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '06a587af79ddec289ae39d6dcf6041c03101bded', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8c88466e01922a6ab60db536f31b16bad13694cc' }, h("a", { key: 'd22b0d8c27172abaa766a3b95e9b3e4b22ae745c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
