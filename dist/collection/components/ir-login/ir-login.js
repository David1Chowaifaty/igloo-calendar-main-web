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
        return (h(Host, { key: '44ca416dd98021c44057561e1bb9eddd2fe4ea4b' }, h("ir-interceptor", { key: 'ccd2134a15fd0b8ed875b0dba8fee998f956e61a' }), h("ir-toast", { key: '366f7931bb8c11cd142402213d31d546c4873b51' }), h("form", { key: '1487f8b3aaec0b951270f89f55ee5a13aad7b855', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'a4c6ca8c248838f1d0bb4ff73556fc4936229265', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '434c30f147095a99b3080cb68eb71f1669d03305', class: "separator-container" }, h("div", { key: '3627e4c9079f85ca9b28168b1489b15964503912', class: "separator" }), h("p", { key: 'b9f6161655b308a40eed1e52beebdaf34b146943' }, "Sign in to manage your property"), h("div", { key: 'd5085475471dbbc0bc0eb9046a52684531a322f5', class: "separator" })), h("ir-input-text", { key: 'b57f027d052b0b6013c80946bcfab357084c236b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '90d6866e376fe01e7ebe3a05300480c651eba94a', name: "user", slot: "icon" })), h("div", { key: 'b05dd8784deb61936ac25b318bf4de9364309991', class: 'position-relative' }, h("ir-input-text", { key: '83abf65be03c5d61ce1da1e6cc142264c2418dac', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'a6da85403cb1d21326a6c6dd57cf56551a716e9c', name: "key", slot: "icon" })), h("button", { key: '22a7e291ee182aebaab1c7306235f256c19405f7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'fafd4dfbedf7fdbb2845043e8ef59beadc094e00', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '3b3e16ad9cf454fc068efb8ca6b845694d32224b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '3a9426aa44271780e86c4b23fd488b1ada156837', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e7b3cbb998d2672a6d51998bb687a7cebf34c01f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '4b0d1fec56507cd866b887fcbabcf1ac96dbd78a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '3f778cc31ffd4fd8e11f661f36a0ec570e17386a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '27d285d17177db2d0eb2c786eeb3b074b317d61f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3b1aa7660ff70835da6d3bffc5f76a89468e6928', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b3b96f2f6f96571f7a256d7b1430ea5772946f8a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'd0aa00c347d18d6e406691a37f8788ea71bda39c' }, h("a", { key: 'a769fdc188a7f8954559d8e7ace6e3000a7e7a72', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
