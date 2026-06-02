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
        return (h(Host, { key: 'fb6e0d6b0f41f923bccd7a745b5a221e0c4e6f29' }, h("ir-interceptor", { key: '239d736708658bc79936f7a07a0808473e852864' }), h("ir-toast", { key: '3f0e1cb7ba0d2cf9fc017f6103715458bbc69bb2' }), h("form", { key: '68c6c1da189430754389045d141c3057316ea7f8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '3afe0b649df146945df02bb46c9e65ad5ffc1eaf', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '1de1a620f0477a1674c0a2400bc969437760144f', class: "separator-container" }, h("div", { key: 'f0eb2b78e6d06797af52069a34b3f0b2eb525748', class: "separator" }), h("p", { key: '6ee91d3fa7e15490be3a2a3a477996a68c1e5f68' }, "Sign in to manage your property"), h("div", { key: '49107734d1cc28f3a6269504d0aff965ab641295', class: "separator" })), h("ir-input-text", { key: '2f91ce30d54a5a67a01c3fae2d5158fe8dd75195', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'ba58e38836b9528386c68568ec14ce8e3ba6887a', name: "user", slot: "icon" })), h("div", { key: '5ba07d8034c00e778bbcf6bf10f4466f27d707d3', class: 'position-relative' }, h("ir-input-text", { key: 'f5bea4c76623728cb0afef8b46637fc307e14b74', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e85af7bb9e09fff69e1d71f491a66bfb4d4c9081', name: "key", slot: "icon" })), h("button", { key: 'b2d77b4c80fe1039c88d740ebc8bfbc82e97d848', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '6bbc871fec2313d4c942e8b09e3560c141bf6a4b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '8098ccd74822d8d502565eda33c790c4ff0a8042', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b6ec5e20be685bb2a08fb5590f2c778b6152f83e', class: "card-body text-center p-0 app_links" }, h("a", { key: 'fa14182da00d99aa2883e93ce8eda2e56a27b960', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '58145bcbc0f4d6b59dac99b7809aef6abb3d78eb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '2a450626262a4df565bde396dad23d7289dc3d3e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b068f4265f111168b2df93caf3edfdfbdb8f68f9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3bac7e0233c2c3abebb99bc08b098d8b481ce54d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '1ed1ae80103fd4b540ad95428bff695fff472a86', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'be0b6d5cef3a26cd70db4d5b93d6f91b45af03a6' }, h("a", { key: 'aa627ae7af9ee77807d6f724ce2dcf1664d697a4', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
