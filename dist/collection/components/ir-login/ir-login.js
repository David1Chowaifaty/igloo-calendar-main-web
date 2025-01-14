import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
export class IrLogin {
    constructor() {
        this.authService = new AuthService();
        this.token = new Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
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
        return (h(Host, { key: '74dc1d16c274f27ad96ce5f642bea597504289fe' }, h("ir-interceptor", { key: '24520f375c443474da68acef2ec257d5840b4e31' }), h("ir-toast", { key: 'a5fb4ae322302f4c5640206512ad4ede4896d150' }), h("form", { key: '9cd95c44d7505eabb889b75ae4c153bee525ddd5', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'cd610db0314a524a3974b4db36f224b95550a40b', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '62f5ddd167276a049504d326e267b10328673302', class: "separator-container" }, h("div", { key: '011a0186bf8250e53686f5fb2ea08504ffba5d0f', class: "separator" }), h("p", { key: '902b6d4ea6373ab4b7b9d31d39c331bc71a49497' }, "Sign in to manage your property"), h("div", { key: 'ce00e0794661beb29bdd3bd6a15e26a6023d579d', class: "separator" })), h("ir-input-text", { key: '4329cece1e3a730a2ae066d087a18c5a4053d5f5', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'ee0c589144fe49cc9040627af5b972edf26e7e8b', name: "user", slot: "icon" })), h("div", { key: '33fdfc5c360155266a8422fd0235ae0390425787', class: 'position-relative' }, h("ir-input-text", { key: '66cc950971a9be40ab566791d8cd08029b9c0a3a', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '0bbc7844258634ac4df8488604b71d7c6a2293f0', name: "key", slot: "icon" })), h("button", { key: 'b7d8ea599a6fd4bc6ccf58bf830deccb3857e312', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'eb1660601c685deafd09a151c043662ea9b55a03', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e4981f43cea94ea98521aa86f568319b9244fa86', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '3ec69f93a24fe211ae3c912552f3819167d83389', class: "card-body text-center p-0 app_links" }, h("a", { key: '2edaef8cda73280b36a3cf836059c3e821636832', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'b2e1af791867df927e3cbc4e3b3ba382236dbe9f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'ff3ec88a4e72929e9e58645e0ba10ff13a656ccd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2f76c77abde2a7b156d94edd23704c49ea45d0a8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '1c342fe7153384331deaddb5609adf44faa4d0ca', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '93a889632145fe21c36999d4f349adf4471aa9c6', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '4f994b1f6d7d1b8efb5035e610f1e84eb9b90085' }, h("a", { key: '333112ac60b56acc2798896175586d5530ad3cd8', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
