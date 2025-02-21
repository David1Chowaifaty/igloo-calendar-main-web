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
        return (h(Host, { key: '3ec28b62d0f4d845f4408a5cb6f7dcd36f7a1f60' }, h("ir-interceptor", { key: '416911fa41d91926ef2552380cfae7ad49043bad' }), h("ir-toast", { key: '5ed2230e43624a42ca7c1b8b1a3cf67989485adf' }), h("form", { key: '433c77806225c47dc7f036a5ae04e37dc3bf7895', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f35e20096ac15d5665be624b2defcb3dad54f84d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ea8f476f35c5f6a6d3dd5b0a2f87812597a803e6', class: "separator-container" }, h("div", { key: '2327bf977f1a50e52b4f79f4bcac9ae09d20bee2', class: "separator" }), h("p", { key: '66a19ff7084691de25687adb3da5a7aa8936e807' }, "Sign in to manage your property"), h("div", { key: '533234fbc53645ff840527e1c4cedff000fee47a', class: "separator" })), h("ir-input-text", { key: 'd54a5af7a3fef5788c01c59d6c24c80df4b9986d', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '509adb44152b70e52047f17ccfdfb36005ac6194', name: "user", slot: "icon" })), h("div", { key: '37e3536652897dd7477a516568ad80405e581d83', class: 'position-relative' }, h("ir-input-text", { key: '9ac770d7aa7370c100049d530dcc23982d5c17fe', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '4ea5152f10b5d240ee21f8ee230f1af73155d3d9', name: "key", slot: "icon" })), h("button", { key: '3ef74c5ccbbdbfc3874e91486e0d975686c0effb', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '908d922db55e1929fd0545209bcb9bedaf6ec6df', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '8c9bcc710faf4769ac0d87eb6e618553bedf239c', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '6c8964538488b77b48d44f7fe30ceee07a841ac3', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e68bc011a2fc86cef91957d674786698ad6f7cec', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1a00d6c5c9ce48364c3c0332d7e98c98df787a79', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'bf92972b74b92dfb65d7301dfd2e12bdc4637162', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'd8beffed30c0f2306a04e429fe1477dcf9df1026', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '9530abbfb8283af3425ea057af8ca5bfa06691ce', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '0865c091df195e0cc16fa6a7411c5d20888e89d0', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a36353c1826aee051899e8b5244fa0372eea955a' }, h("a", { key: 'cac61f35064e3994b2514ba4c6ffa7af0e81cf1b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
