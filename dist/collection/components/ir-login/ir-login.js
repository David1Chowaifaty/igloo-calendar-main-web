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
        return (h(Host, { key: 'fd958895567721d0dffb324daaefc41caf5c6acd' }, h("ir-interceptor", { key: '0047b24ea6d8e6842ec1794871acc17f6eb42c4b' }), h("ir-toast", { key: 'd70bf195105f98f6da7e2050708b5a8e83a5d9b3' }), h("form", { key: 'ed6c664f64890d83ddbe452cdf07b1a41dff1ba8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'fc5308b4249819256f82972b7dacb5b935ab1c29', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd95ea880b883d79af997fd942d520a3752e959eb', class: "separator-container" }, h("div", { key: 'e2988ef1cbf70ed0658ce1d729037b248106d276', class: "separator" }), h("p", { key: '759d7e8427b56d8e83f7d58968ba43f403a987fb' }, "Sign in to manage your property"), h("div", { key: '0df5a953c929f061ff61225a8a9213d89847b89c', class: "separator" })), h("ir-input-text", { key: '10f92767ea4f1f0eadfdaa5b91f992ae74cf21f6', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '29c5252373f60c8975da6bfdbd96f63ce5513e54', name: "user", slot: "icon" })), h("div", { key: '3d73497bf5d6321fadf8dd56d94183ffb51ad12a', class: 'position-relative' }, h("ir-input-text", { key: '35587e8e236948b7d5892afc4c8349c61e06c765', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '48cf94d40361950215d618af925010c536120764', name: "key", slot: "icon" })), h("button", { key: '2c16f6f88fb385484e0546d880f6b6bd82734984', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '19a75772ffeb368417fab55095e8a0cf22a0441a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '960376aba82eb2a764693a5a78a99bd9604c4934', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'a513fe63b368b5140ca5b1c02f380b4958729ce2', class: "card-body text-center p-0 app_links" }, h("a", { key: '8ecb54725ec21d6a8fb2cae0afcaa8581c304b9c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '88c1210e368f06cabc9d04ef416fd954fa7e44cd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'b8396f5661feab8574bebd9acc056e8c2c264b76', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '0579f1d714a78930a65cd9c8125f6ccabe8c7a98', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4fdbdc35f8aaaabea758d9ac86e23fdfeaf7068a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '2c8dfb002e893e1db0d404950777a6be8facdee2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'be69f6d494fe4a8c7fb3b0140ed60dbb63edc2a2' }, h("a", { key: '71fc82d33a18024ce23a68fd8cb8a7fcf5c1011c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
