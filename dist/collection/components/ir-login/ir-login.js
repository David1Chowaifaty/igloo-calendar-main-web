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
        return (h(Host, { key: '3b429008e4fa6a3707cda946f57ee650a672a839' }, h("ir-interceptor", { key: 'c2b994ecbe9c79cf4509fa950d3b4e7c0b43297e' }), h("ir-toast", { key: '536150071060aaa639e850e33afb08a2c70b81a0' }), h("form", { key: '66c675ffc755b5e861535d2e443b5a356fe6a8e7', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '0f71b536ecbdde8207d42a5c5b58f66b8a34e621', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '1df6a791034a30d7cb0f5d39c1832d7a00c98a58', class: "separator-container" }, h("div", { key: 'a9439deb6d745b506e22602aa4d57bb79abf5837', class: "separator" }), h("p", { key: '9e3ca5b98b7d2b8a4e75b89c4a824302a55f1d9c' }, "Sign in to manage your property"), h("div", { key: 'f9ae2f8631e0d31a4225ce8837174130dcc6386a', class: "separator" })), h("ir-input-text", { key: '1ae2805a3e2eb66fae3c2c0aea8fa324002bcccc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '25d7e27ed809b53b6edbd29d3c0f9abf0e943023', name: "user", slot: "icon" })), h("div", { key: '2fa7ed436e83e6384f7010585be3608c3bf7127a', class: 'position-relative' }, h("ir-input-text", { key: 'ae0de46b989b1b028795efe8c042a8bc4b771599', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '869c9fc8fdd09844ac837fa9f9210a6763f4284d', name: "key", slot: "icon" })), h("button", { key: '8f28138e077bcc149752fc39f41301b1e0418a60', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '19a256559a1b9fae92a1597d81f9a3563da390a2', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2ddfeed98493202429635aec1df144f41dab7518', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '2b93a4332c468dba0f9fadd2f7fbaf27edf4cddd', class: "card-body text-center p-0 app_links" }, h("a", { key: '03033eb9ddc827777e4ca3f90fe4b3de6b7739d2', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '7889e9f6b62c69de20a57361eaf283c231956946', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '4c2b156b114f4f43400a843564d649065a50b385', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9f7fdb3e1991bf60bf01f2d735e04283cae07a16', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '9126fc6ae18b774795b137880c0a2697224f6519', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '74006f00f0a76f18bffb941b10eac76d1276cb78', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '4e9116be88f0f9a94ea44b373f2ba2e99051414c' }, h("a", { key: '1227845cd41117e1b148d56441c7e499a9fc9a66', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
