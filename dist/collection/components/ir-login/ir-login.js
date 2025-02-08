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
        return (h(Host, { key: 'ba6dbcf232ade4b7402867812a90312ea96e99b7' }, h("ir-interceptor", { key: '065de01bc4f53359b68602afd4c19049b22b494a' }), h("ir-toast", { key: 'dac9d4e9ad4c5059abf69d2dff3a09bc927dcaa9' }), h("form", { key: 'ff5ed50fc5bb4d5c3464938db69c85868d30971f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '525930a6c30f3a2ddc4fadb41dfed0c2d1f6ada5', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ec97e98c79d68a10b5252b56efa77822c17f861b', class: "separator-container" }, h("div", { key: '6bfd910e7979e91ee0dc1548c9c4a171fdcaf4be', class: "separator" }), h("p", { key: '2662cf02f7251b913576e47675bcf2c084f57749' }, "Sign in to manage your property"), h("div", { key: '9d42b74f36401aeee6f162e280d7e37415d14ce1', class: "separator" })), h("ir-input-text", { key: '2784a96f9705d5a59ddc3e49a44406ef92aa5bad', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '5767cb2c078562e3b10ea031b513e8b3f5afbd74', name: "user", slot: "icon" })), h("div", { key: 'ce5578b346c1125e82cf37d4402a8b3c5fe73392', class: 'position-relative' }, h("ir-input-text", { key: '58a13a1dba9ac533b48b4cf975c4e918275a74d9', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '782921abc6eac4a49b585b27659c2068b4576162', name: "key", slot: "icon" })), h("button", { key: 'da87ce0e092c6bb2ca9b366bf9b4464abb7d0bad', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'f21b01b2b034e7e7ae0e3bb6c3a686d9b3fc5e8d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '42a1cf816ad43832171a347226b354fe1c2e6fe8', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b10e80b9c9bf02c11f260cbf57a41b5ed6389fa7', class: "card-body text-center p-0 app_links" }, h("a", { key: 'ffec0b000d562b885bdad22a92b476460592433b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '0d12dd509e3455d13fefa59a5b33b45cdda8442b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'de7ee1601926d51544240acf0ad4386f505cb4fe', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'e25cb0fb9d19ab5456f06ff1e50c9bed79258c9f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f14905bdfeced31b560c7ff32538fdd650fb7990', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '6aa0d4ce85092f36dd677a9a256177c885b3b9ba', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3c5f0fe80d6a94e63189f8894d07d2178bcbb079' }, h("a", { key: 'da50cf3d1118771d82a4e9c9a83aeda4fe0f5095', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
