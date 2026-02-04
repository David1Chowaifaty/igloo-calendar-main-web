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
        return (h(Host, { key: '9729b9383a61ad5c0b637dd8c4640740453d790d' }, h("ir-interceptor", { key: '93c603e1f53f01a019e2b30a1df6e0eea894d472' }), h("ir-toast", { key: '2382d3bcab9280aaa0d5a0872206e8274187f3e5' }), h("form", { key: '9e096b333e7bdae55ba0faaa339a7a3d369453ec', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '7c4d22b7a916e9b74470e52bbb8324eff93b5193', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'e4cbfb34aed3158e7331644f517e01fcc3bfc734', class: "separator-container" }, h("div", { key: '719f31e15a38c3354a1e96247f085468d41fd9c1', class: "separator" }), h("p", { key: '7b4138932efd21418e6a7b5777f0459ae44178a4' }, "Sign in to manage your property"), h("div", { key: '258417ad473f55d59d1c50a4b43f1739df2929c7', class: "separator" })), h("ir-input-text", { key: '7e19a61928cd5927ffe619bae1c5d33c3b1ee492', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '63bd44cef18caeb967745f8978b40f1dbfab7315', name: "user", slot: "icon" })), h("div", { key: 'b2149277370b41e257a0d19f8a65fc1f24df312a', class: 'position-relative' }, h("ir-input-text", { key: 'f791712a20ca9337031ad303c7590336b73000dd', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'a58deedd33d04bba4e61431394f400251de7b724', name: "key", slot: "icon" })), h("button", { key: '891a79e0dec6fa3de19abd9d1718e8e8c0fd49e7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b629a442b36303709f87384b3fef8a2842b7db30', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '38b92664e802d432e60905bc77f7dea21f7f2c5b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'a8a6882d738cedd521e7d8e93a8a2d14fd31d771', class: "card-body text-center p-0 app_links" }, h("a", { key: '9c053fd770fa2bd25c1f3bd4d6fe6aa03e93ab41', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '2fdb5dde8773ae456d56a2e840418ce33a11d9b1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9df3856cd7fddb8444ce8748d5010f614372cafe', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '51445a799ce0d9e733bdcf7a49c60da8b25c6378', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4011dd02139268cce00dcddef32309e706987482', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '254d1eef889f95e1bd8f55d9a3f0dcc0b88f2855', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a1f170f4ec6d28e3c65521b2127c31e14e36a293' }, h("a", { key: '2d5829030b3d480865c38c178e1608ffa58c9866', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
