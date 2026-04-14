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
        return (h(Host, { key: '18ba62a57725460a9a9faa038ba0bfdb2588a8e2' }, h("ir-interceptor", { key: '2e03a5a446a9a55aae4f06241f5c6b664ba2111f' }), h("ir-toast", { key: 'd1f41a4d167265f54a0eae865ee81b7d6b34f725' }), h("form", { key: '9cdd94ce4872c2e0e4be2a98f7103210024b7297', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '660cb3020071e2618fa18237479ab45c35e91286', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '303ba8442ce793a06cf29531ca6c41e8bd10752c', class: "separator-container" }, h("div", { key: 'a783f9707dba8331ca3d3bfee19efe796044cccf', class: "separator" }), h("p", { key: '6893bc0789d6bbc7fba410163f907eb093c3efe2' }, "Sign in to manage your property"), h("div", { key: 'fc98f2c3ad88ad73070e7cdc184e9dd72eedbb19', class: "separator" })), h("ir-input-text", { key: 'e88d114094cb62f6eb2a8b3e5d53d55a473ede81', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '466b5d8c5f1f322ad2fdfbdfe78eae88ba555431', name: "user", slot: "icon" })), h("div", { key: 'e7a8b9c60b06596d33d913740092c94deabcd702', class: 'position-relative' }, h("ir-input-text", { key: 'b15e7d58c78fe7ecdb83fd9c2f87d02fd4e86946', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'da6724dde8d62303ffb250b21f79c58281666711', name: "key", slot: "icon" })), h("button", { key: 'ad3f7e63dd2762402995d70fc6053013969be123', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '4166ca9b254fea753b5e5cb87665f74f028c6b9a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'd70e8e4e288533d37e0268321d9efa01fde2ee06', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '61ba7bfbfcd65e80256ddb01c630ba1518b6cf42', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e4725978760b14723cb45894d38619ec2f470f82', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '68dafa612b9d0765baf0da6e2fee01bac9e943af', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9288555addec7736ebeaf7df3f9904c64cc7e78a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '531621971bbd93c3de4a22e4789929ab12e20755', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '7760af9bcf981fe983e411711b35fc6e119d15c4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '49d2ff43f508426d23c7dd00ccaf89e93f39da3f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '1b55a89d1eee1c01205303d9c01aba43254ba5af' }, h("a", { key: '9a879ed65ec73f87de51951ef4b2151342227495', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
