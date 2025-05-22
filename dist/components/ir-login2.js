import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-interceptor2.js';
import { d as defineCustomElement$3 } from './ir-otp2.js';
import { d as defineCustomElement$2 } from './ir-otp-modal2.js';
import { d as defineCustomElement$1 } from './ir-toast2.js';

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = /*@__PURE__*/ proxyCustomElement(class IrLogin extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.authFinish = createEvent(this, "authFinish", 7);
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
        return (h(Host, { key: 'bc0be330d2251f566b15340c56c580921e244015' }, h("ir-interceptor", { key: 'e4e29db2e85a6769200b0a7260ca0701624b8ded' }), h("ir-toast", { key: '314a713e2b06cef42b9ee70200d8f7603edc5f24' }), h("form", { key: '716fc99b9466d786425bed5b954e201dbcff2cd0', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '4ee401726ed3d6960c1af66d6f1ea1285f937170', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '148865814ae905eae81ab35c9a7a5e5ae2c87a9d', class: "separator-container" }, h("div", { key: '7efce4231ea500ca3f49c169b466593ae41b386b', class: "separator" }), h("p", { key: 'ed6a962d0884b2c808f39f6dceb79e84f0539197' }, "Sign in to manage your property"), h("div", { key: '4ca5a1c671a5dd74f4ec78c0fd6a4a92aa48df78', class: "separator" })), h("ir-input-text", { key: '364755c5a4e990d94bd244a30d55e1a0f2d40098', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2c5ac3bf24e9975ba480206f0a7c4f58fc7f978f', name: "user", slot: "icon" })), h("div", { key: '4802cb0e38675df24c8ea78fd5ed308b615c4f64', class: 'position-relative' }, h("ir-input-text", { key: 'a37a084be96d9fcd489a2eedf59b2e4109c7ef2e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'efc084138050abb0303020c7d09e5e3850e169bb', name: "key", slot: "icon" })), h("button", { key: 'c5bd7001d14a8898f1ecf0f77a3735abf16ef3c9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '0af3f0affc543a00a764315f927ecbff71c96135', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '07d70c64d9c0616e9109ace33c16af099cd86150', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'cd7821c033db8a28fb0d47de7a87ab6d146e04fc', class: "card-body text-center p-0 app_links" }, h("a", { key: '08a83d13d5bd386e54f5e83173fa20dfc93296cb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '4239ad07b2462334cd5cf6d89fdd406f34919b1a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1b1ed4ac294ea59a44a2253a4d431c791db5e1aa', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '7a8d1e565c1a5832b5775be8ef32c2cde7bd7ae1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '6e3d840cdf52595237ed23941028cdf0dd88cbc0', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '70d7c10fca4f6a5539d66f352acac54a152e682b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3ff6fb23535246bae870bdc340df373826d70267' }, h("a", { key: 'e8758ba9251700c8e888e5e47099cd7b41f99ec4', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
    static get style() { return IrLoginStyle0; }
}, [2, "ir-login", {
        "username": [32],
        "password": [32],
        "showPassword": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-login", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-login":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLogin);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrLogin as I, defineCustomElement as d };

//# sourceMappingURL=ir-login2.js.map