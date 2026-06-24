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
        return (h(Host, { key: '9442e7757a98a3af7c746c034b838cd3bee00f72' }, h("ir-interceptor", { key: 'd8f043700573d55e3b9fe4a96d827b59216203cf' }), h("ir-toast", { key: '9b01b87701fddbc1264f21ebb22b39f8014575a5' }), h("form", { key: '89040c30496def10806f1b3647f1c124f435c53b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '68ba4a42c9c1b4122e5d67320aa712ffee3faeee', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '61a7260be713ea9fe0cd2ae08d90131ae1b9f652', class: "separator-container" }, h("div", { key: '916e619aa803e3e7ce0f5fec28f6821c371500a0', class: "separator" }), h("p", { key: 'f7e93da64e39f052adde12580b8612d55f4b4969' }, "Sign in to manage your property"), h("div", { key: 'b27dc13a54ac4a4883add894aafca77903560221', class: "separator" })), h("ir-input-text", { key: '992b8b87c3153eefc02f54c3d82d4a8ba046dae5', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '81127d7a8f187a3d575cedbe2fe147b5195f4c8e', name: "user", slot: "icon" })), h("div", { key: 'bcde25694ecf5bdea1e0bd727c46d88edf9b5fb6', class: 'position-relative' }, h("ir-input-text", { key: '3a0daa83aced7aaa05972494e96b95fbbfdef115', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e877f487eb62a8c036a31cb8635971327c9b781a', name: "key", slot: "icon" })), h("button", { key: 'a9217cf36482ccfc82b15e88e74174cba610dc4a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '56c15c48423e442f941548dd7412ba25d04bd40c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a5818d3b90d6f7c51fac802f4b16d2e4e7a40a9f', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '534fab2498b79fbd461db640288f4c2ff2c8b4be', class: "card-body text-center p-0 app_links" }, h("a", { key: '92981791e76d8a291856fdc242ae0363a67d0486', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '291c7615000ef31cddc07ea122cb89a6b54f7b86', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '13b9cc68c2ede8b5549cb46a15e2f6af6430c7c1', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '776fac26a3ebcc3460ee30e583bf9b6eb4a54354', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '7556f01c1ab67ba826a943d3f69c16366428127f', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'ab4fffaa843f6d2591943680cc393b6be6780d0c', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3b6f638de6df61001ddc1965d9cd35fbc0116c25' }, h("a", { key: '045a30aceb2acd8c5be198c1ec82ec42e19e7a45', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
