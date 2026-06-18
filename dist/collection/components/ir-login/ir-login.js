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
        return (h(Host, { key: '3ca81db5635f715559bd75c69a8ad11e51ec3c2a' }, h("ir-interceptor", { key: 'a504cf8e28995df21894da7e88cef91b0b4d3488' }), h("ir-toast", { key: '7e50f9ea9f514030c391bbcac2a958f6b1677c96' }), h("form", { key: '43b1f3c56af4980850656c4f124114e0ae923031', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4a92bf593aa6c7217bcf4eee82a222a27835e809', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'cfe91cd2957afbec13386561395b3e7ee400821a', class: "separator-container" }, h("div", { key: '69fe5cba042ea5d95c67a8c8ee3c95a6da9490a6', class: "separator" }), h("p", { key: '1f484a47d9b2fbb369a6838734c8cc7db6aa81fb' }, "Sign in to manage your property"), h("div", { key: 'a81198e3fe11f231edee4d485a49788388e237cd', class: "separator" })), h("ir-input-text", { key: '363529b2880e558e9eeb9c64e52fd19750146005', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'ca7191908ade4bcaabbaeb2179881df7706b4caf', name: "user", slot: "icon" })), h("div", { key: '288c10b47308858d8a88229949d469edf55ea9ea', class: 'position-relative' }, h("ir-input-text", { key: '391cc15a1d0d7fd13c06666127f6b5dbab3782a3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '23c78332d80e0e2aebb8a9bf6f4e04edb15fd0ed', name: "key", slot: "icon" })), h("button", { key: '9469d68228512d641f032977d6d7f3ed5c459678', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'aa2a8a7cf3bc3398a35b7693fd379232833b57b5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '610c7ca915f3caf9e489cf6ead84abdd7c5b098e', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '3f4162b9c6c85a48ccb170ea3d205ee2bc9618a1', class: "card-body text-center p-0 app_links" }, h("a", { key: '02bcc49f16b0a66989bdf5ba8c733dcfdd7cb1f8', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'd83fa68405d286e0ecd0132526ba9fafc5b931fb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'b882987789a42f34a61d0a938409f513d85e2c68', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'd9795ec168a6cc2dd09ed46f55ea7aad92321274', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '870463b01bf06e9d69b55ef55285ec2bac51ff89', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'c32ca47a04d1a2abd4e5e6480d0a6647a60280be', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '551b3ffca4b330d5ca5ba27198b04fc8c7fd1607' }, h("a", { key: '468a25ffd8cf2cf592a20e625682e096243281c2', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
