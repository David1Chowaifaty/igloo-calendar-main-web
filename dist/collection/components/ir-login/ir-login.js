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
        return (h(Host, { key: 'd2ec00e5d8a72e92244fb9f72b96901f48263746' }, h("ir-interceptor", { key: '9d934dd0bbe1c09e5a672e4c5f60eacdc71ccc4f' }), h("ir-toast", { key: 'ed4584db2de01c154730d3a321fcf604b1b7bbe3' }), h("form", { key: 'fefc5eef8b7a1d75ca5bdf66393d54beacb347b5', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'ec31f1e33b893080ffad91516dbd1966e1701342', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd5f8841ad1baaa12bb6f8e8849ab860ce5da313f', class: "separator-container" }, h("div", { key: 'bf945fa96aa91be529acf84623d1bdd01d590cdf', class: "separator" }), h("p", { key: 'afc98522b1471d93cb6f42b9fc648db15e79027e' }, "Sign in to manage your property"), h("div", { key: '5686ce4a97a74f9159dff7e2c78eeacf6743cc72', class: "separator" })), h("ir-input-text", { key: '6c43f60f2b12c682cc769dd9995511734653b48e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '10161fd0477386750a7d95020c2a29272f008214', name: "user", slot: "icon" })), h("div", { key: '08e9a732b0653e98a1717b7af94fdf294d56239a', class: 'position-relative' }, h("ir-input-text", { key: '1f9673789843214f436638609a711a08389da524', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '539cd76e6d404bb6e4602504fd82b95adeecdd77', name: "key", slot: "icon" })), h("button", { key: '9268b00189f34788d284ba228f9cd5e6e8e9b970', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '89ad8fad7c621b888ecb551e704f3d60db0c2860', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7a93f14c42217b6e10e46c8cde3b79b4a5c93d8b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '275f45c5abee65267801212a84575cfa4e0a8c8a', class: "card-body text-center p-0 app_links" }, h("a", { key: '5f6fca1e059f924413814ead404d6c8a3b5c4a5e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '34581d5b733e42bd8ea74b8aa7e906445f048352', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c69da33aaf35e9ca2fb55c7628c1fa8c353ac24b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'f37788dc36bccd24e0b08132dffc7247905be162', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '24e94ff764d6325904a4b8301f09cdd36bab67bf', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b3e9dd8bf790fdd9cc8424194a6b725e76dbd428', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '04bad5b617fd6dbb70e9f44276210aabda85c8dc' }, h("a", { key: '60017a7a4014da9936c5aa708f99ae3044d06701', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
                    "original": "{\n    token: string;\n    code: 'succsess' | 'error';\n  }",
                    "resolved": "{ token: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-login.js.map