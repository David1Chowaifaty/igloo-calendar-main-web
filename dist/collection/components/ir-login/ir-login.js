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
        return (h(Host, { key: '0a8839ce05aee7739513e52a499ae9af1d021736' }, h("ir-interceptor", { key: '9d9429cae5f65f24103c9e686acb165f4d6ec856' }), h("ir-toast", { key: 'cca457e64a0b6fb7f6d8fd9d64b361efca6585a7' }), h("form", { key: '8834154444401aec4dafdf4842ec625a201e99dc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'dd4a7de21b44bacf1384637ace822afe5f900692', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'bae44da02131385153a7e95ee31ded5320f7e1be', class: "separator-container" }, h("div", { key: 'e6088f4c5ce719626369789afe028ea167b340e7', class: "separator" }), h("p", { key: '22136a1e7d951232db02f5d344d0b6adf4fe5dec' }, "Sign in to manage your property"), h("div", { key: '2f6767e3d1141a0698f8cd21d9de4260ca9010f4', class: "separator" })), h("ir-input-text", { key: '9173dbef4978a558b3894c50b789fdb73cc56ee3', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '979fff83e4d7f0410e0e77d522983e46a82857d2', name: "user", slot: "icon" })), h("div", { key: '531c9111ce4184c082c1241b4abdb47cda74ae5e', class: 'position-relative' }, h("ir-input-text", { key: 'e3f00fd340d3062e2afc6ca05cd610221670f65c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e11f4f1f7bde569af38e7a66403508ab105d8119', name: "key", slot: "icon" })), h("button", { key: 'e4021128b43caa5bb24620e5c1d7a15fa75d1456', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '5e105bce268b756bf3f6662f416f8c55e2bc017a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '16d46846ea6da3ca97cbe166e89f18c797a7c9b5', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b7c96829d92c1a512d3578dc345021227a72c1a6', class: "card-body text-center p-0 app_links" }, h("a", { key: 'b3f037b925862cb0ff027afabf37902ff749fa43', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '200ffe958fc7b1547503a26d19f39c2bb3d1d03c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9d49d67463f1f1e0371f9639d685d0390a88da61', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '75617d018025cffca38bdf1223b8e37c5f22b966', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'b82e03bdd3a2a273eb7480dab45f404d00db5b0d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'e86d91c8733e44321bd40bf1deb101b07afe4bbd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '00eebfa10138e28612510a2831d00f7da2506e87' }, h("a", { key: 'ee35b82a0dd5402602f32536cbaa1018139642c0', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
