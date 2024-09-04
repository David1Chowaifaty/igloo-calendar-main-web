import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import axios from "axios";
export class IrLogin {
    constructor() {
        this.authService = new AuthService();
        this.baseurl = undefined;
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
    }
    componentWillLoad() {
        axios.defaults.baseURL = this.baseurl;
    }
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const token = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: '5a506facc319b3314e4405a0d840584fe7cf2dda' }, h("ir-interceptor", { key: '4dbcdf624039a95c25e351609beeb0b05798c20a' }), h("ir-toast", { key: '4376d440e4ec7293106716b1166ab29b513465bd' }), h("form", { key: '80c6bf1d63ba8c453699b20066a871844009fd40', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b3961cc961a9747a5d9b30cc42a24c13924c6e70', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b13df507dbc9f964af5533e09d207b73987d75eb', class: "separator-container" }, h("div", { key: '00d66e7af86b00fd035faa191e2ea6e49121299d', class: "separator" }), h("p", { key: '479c7087dc53bdacdebaf6af9569f4a08f4cc95c' }, "Sign in to manage your property"), h("div", { key: '77b1438063f9dcc12ac95fac5991f0d49bb39b75', class: "separator" })), h("ir-input-text", { key: 'd9dfcab6599b81f7de8b1d4eadf059044bde8359', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'ee94345b22f84f72dc8249a30d665f2b45b90e93', name: "user", slot: "icon" })), h("div", { key: 'eeca16377f87efccda6253864f3a99470de94b94', class: 'position-relative' }, h("ir-input-text", { key: '50ec356f9d635fad80d44466f084e784f58864bf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'f618f881d1cd86753b8cfb447dd41f4a1aa84dc2', name: "key", slot: "icon" })), h("button", { key: '2bc8f4364a5777f178b5b2224c5108e9ce3870bc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '9d68d55f2cff73f5e2059d606926ae6952c06f52', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '47b3c9632b4803b04d6d719cbcdaf34dcb086c78', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '7460112c07bf6e6a20085c568876e7c14f267484', class: "card-body text-center p-0 app_links" }, h("a", { key: 'a7c75831d5f3670ce44ed736583c3147e9613af9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '99364ddab4b77e37697987f77f97ff76b850c657', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '6806cef51528401710a3e1a4ad99f88c43b67a7e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '429bb9e4be3a611d3582abd8610ef54f971ed2c1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'a5ef03c7ce0fc7e59d2fcdad86ef975cf0dcbef8', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f96ac96265bba111c815bee844bfd443f44ad783', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a23caa6d263b746a2fa69033d9934c857724caba' }, h("a", { key: 'cf77f9c1851720dbdf957407db45144ce1bffc58', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
    static get properties() {
        return {
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "baseurl",
                "reflect": false
            }
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
