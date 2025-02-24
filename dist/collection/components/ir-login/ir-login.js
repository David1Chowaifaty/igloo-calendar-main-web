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
        return (h(Host, { key: '0dfcdf0ad3404ecb8421408f148f1d42875df094' }, h("ir-interceptor", { key: '50089ec41aa0bf857d9ba24177f7d48f2265913c' }), h("ir-toast", { key: '784455e6b1dfbd82ca2bfde12cd569aee455f0ee' }), h("form", { key: '1adc303d337356911659b3de326fd1214d7c3df4', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'a23227496e2f011712046ddaec0ed6a03915fd77', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b96987b8cd7900235a746b13554df6d2a4d4401f', class: "separator-container" }, h("div", { key: 'ea8193c4a850503d6c04d158c0f0e427bc51ba1c', class: "separator" }), h("p", { key: '12b911a52ac56a31f8d41500be1c70d2f769e5bf' }, "Sign in to manage your property"), h("div", { key: 'efc9c9c3440ead7082481f0c4b0df05dc53f8f13', class: "separator" })), h("ir-input-text", { key: 'db536bb94c771d0725a203ed0ce86bf3b370720d', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'ff2975024a0736d4c4564d9de0c1b741ac3c40fd', name: "user", slot: "icon" })), h("div", { key: '094e6dc49382d96dc3196c1796257432fe0446b7', class: 'position-relative' }, h("ir-input-text", { key: '802f765cd72c48a42a7903e756b31949bf9020e5', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd7c426ac23a4dcb812af6111e710db4e4256d3f0', name: "key", slot: "icon" })), h("button", { key: '207fc45cf9400b27eb29c159a2530e37d7fdea23', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '6a685309e84d2113d23222aa4a2a577eb201ba5c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e99728bb6723878849ce2d5973b4dd34b69b4f01', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'dcc6b89c51663247f0f0af12ac39223bebc7f14c', class: "card-body text-center p-0 app_links" }, h("a", { key: '4ab81bc020795bbe6b72addf05ccbfb7dff48fbd', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '9a08332af20838ec49a7a37d022dc4ed31bc88d8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9915210dda8a791b3923ebff1a9ad92029a8ff61', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1113361453effbf8c8d2baf06d52d99097158382', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'addb89c4ea99bb3b254d9e555d78e83e207d809a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f97ce2624664ec4932db33e0189951880c830c1a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '26848b67d17d5ecb8d0637bbe1434d04d6c0b389' }, h("a", { key: 'b113d18a32ad02fe77a1e5333f2e5c919ea1372f', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
