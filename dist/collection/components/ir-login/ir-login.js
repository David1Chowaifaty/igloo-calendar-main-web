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
        return (h(Host, { key: '1082d56da92fd14a051a66382361a11875f9a454' }, h("ir-interceptor", { key: '01e65cb51a36a54e078adf512fff5922e79d18f9' }), h("ir-toast", { key: '6b9f560e0a2970ff751f62cc37b6954dd5cb2f11' }), h("form", { key: 'b0dfab290c90aedd177e32c898bc40310080171d', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '7094543837647cc683803538b375ebe80d5b5c38', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd081c733eda0e9181fdf1cbf26756bd056e2c1ea', class: "separator-container" }, h("div", { key: '62a54a4fd75e2ef4ba259e07573c4043ba7444f9', class: "separator" }), h("p", { key: 'b0f43b55370c9ce095cd5b0fe9dedc96c49abe4e' }, "Sign in to manage your property"), h("div", { key: '67fd861ace173786bdee86c89aae3ffa0b54ac23', class: "separator" })), h("ir-input-text", { key: 'e38ff8a47ad4d889c8c3e9846361366de6d3a8fa', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '1195c8e2e923fc54c6a21513067671257b64ab2b', name: "user", slot: "icon" })), h("div", { key: 'bfdd4486988d3b61c9acf1461b8f2c7ecb967bac', class: 'position-relative' }, h("ir-input-text", { key: 'd87eb1b936fee5e794d2c05af2070e10eab92209', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '186e04b39151935ee68eff87d2ec6187ae660332', name: "key", slot: "icon" })), h("button", { key: '921fa7f89d0ecb7369699ba1f1acb69a49603f50', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e3f598fb91eee094fc3f835e3c50a4b4e3b6dceb', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'ae9651346a1f28e26f9a7eadb652b14b567a9651', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '7cec4268cbbbf60ac286c2a26f41de1bf78cd260', class: "card-body text-center p-0 app_links" }, h("a", { key: '442d1befb3eefcb4c099246c3c2a5e6548553826', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'f4057c0397934b1c8a6ea2ea07cfd2ed06d5a536', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1e843fc520edbebbc34279277525cffb4a7170ea', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9c5229c20c98a5babffe4eea820736c855417261', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '1efccdc93b74764cbf6d69dcf4e34defea39fa5e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '01f18c64f7ef82d7fb5446b6c23491baddbf05f2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '2a85ff6f4dd94f06a87e47d8df881ed065f93e1e' }, h("a", { key: '82fe4c0f89cbd64e19915be238ce42d8c18294e1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
