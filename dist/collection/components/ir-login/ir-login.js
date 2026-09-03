import ApiClient from "../../models/ApiClient";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    ApiClient = new ApiClient();
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const ApiClient = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.ApiClient.setApiClient(ApiClient);
            this.authFinish.emit({ ApiClient, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: '393eaeecade834b482a84f8790d76ead9c85ab22' }, h("ir-interceptor", { key: 'f69787feedadb8d4e3b98f1ffda8ed6a89920ce7' }), h("ir-toast", { key: 'fe7bfb4772bb92747b54eb44c752f959c06d5d09' }), h("form", { key: '2e8ec25669b79fc399af141cf25f3466ca6ed2cd', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'd6937db1488cf38667d32cd2eb4d36d71d8f85a7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'e6febaa00564647f739fc845a05fe0632b9b5349', class: "separator-container" }, h("div", { key: '5d90541272b64f6a1942351810ed96fdb237a464', class: "separator" }), h("p", { key: '06fdb13c6b8fee57a6cc99b69b2a2e24d0bc13ff' }, "Sign in to manage your property"), h("div", { key: '760cb4c8ea7a8ab7c3747bf46dfe9eb8d9936b9b', class: "separator" })), h("ir-input-text", { key: '3717b845c9252ad530c0a1f0e61f3675b36809ae', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '3d9f1c4886ee18b672b3fe62d3a870f4e7909440', name: "user", slot: "icon" })), h("div", { key: 'fd758b872a4031c6e9c31656b1d3c0a768c00763', class: 'position-relative' }, h("ir-input-text", { key: '5056ff4d999d679ab8cc6fdebbbb1ab740fae2c0', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '11318daed7011c3c9e23bbb06699718219dc3fbd', name: "key", slot: "icon" })), h("button", { key: '731a664c73d7bebd0b8932814139840eca5980e3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'fae338b4a53697cfaaec53bb58993d7d16623f9d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '608b47acad0547c5343f0c5ca1f63cc3260d6bc3', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '048a7aaff094a6cdf1febc90883fb87b80a2fe57', class: "card-body text-center p-0 app_links" }, h("a", { key: 'd7e64d8865c6028a18853347c5896f2cc34708af', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'ec7f0ea746291987d58eb80e50643e2a3991722b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '3e3ed888665592df8017b3a42a8fd59d0aec51cd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '7f4eabd7b9f7f2a894541f39475d44650a5001da', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'd20e07a9829bfa6c88e14592b1068271fa597300', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '74140360267f533f79d26100381c5643a8b358e3', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '221bae2e59cd32e52a52509725b0666146d98b39' }, h("a", { key: '1690dcf8b0e44b6ded450740cdd40c2bacc31839', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
                    "original": "{\n    ApiClient: string;\n    code: 'succsess' | 'error';\n  }",
                    "resolved": "{ ApiClient: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
