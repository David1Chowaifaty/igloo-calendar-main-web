import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-interceptor2.js';
import { d as defineCustomElement$4 } from './ir-otp2.js';
import { d as defineCustomElement$3 } from './ir-otp-modal2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
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
        return (h(Host, { key: 'b1187aa9784d9246f4da3e09ff09d0306c9f21e8' }, h("ir-interceptor", { key: '9caac20a7ef10d0edfb8e6533ad17b0922d914c4' }), h("ir-toast", { key: 'c307c87914eb8031c4e8c8716922945be3a5ab19' }), h("form", { key: '9962788bc508ab8fa9bab2ce779f58d6b4fbbb95', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '31339d672ff4254dcbfdd11ea64577152a67138b', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '86ed44b8713427854de0f80f3e12c5e3d77a6362', class: "separator-container" }, h("div", { key: '07c93d3448f4dfe6106387f7910b5c5bf0cd44bb', class: "separator" }), h("p", { key: '98b999a7cf3f8639fdb68fcec629d59f0410c527' }, "Sign in to manage your property"), h("div", { key: '10427cf785601037744f5e724ff9045d461d6ed1', class: "separator" })), h("ir-input-text", { key: '5cccc8a3605916f30faf145a2e9a26760d61ee37', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b3a9b4f92c05c30ea275d68c02a6cee61c905b1d', name: "user", slot: "icon" })), h("div", { key: 'c522acdc576886a5a3388eb5c10ebd8f5baa245c', class: 'position-relative' }, h("ir-input-text", { key: '3b40d1ff89d337a128f65c11f394a98f217931ca', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd32c7eb1d9c505c8d2664775c43c13702952f8d1', name: "key", slot: "icon" })), h("button", { key: '27f1d669d6efb55dea75790dbc4be5c0ebc85ac5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '814fccb3200a72b4e5092116b152fd04d98f491e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7fe6a4f2a97856a7f686170f1b00d5050b9e94d2', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '4214d1cb5551270a96f5e02cd9cd23a16ec3d39f', class: "card-body text-center p-0 app_links" }, h("a", { key: '4364a76484be4c3060cebb0d68bee209df72bb4e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '70d388e170ecf173a7050b3205071d45fb237e80', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'aec6f633de66c4bff1a48f709dc7e9109af9a2bf', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1aaf68336d262d0551764dbd55218277223f6899', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4376210b23645b69ddccb6494ecd1a52e10c30b1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '15a8dbf2c2c6bf70b97feb718476a13ee2a5de9c', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8fade41faa66e2549b2088de8e02bd990ac69be3' }, h("a", { key: '24fb79444fa61eb820b1cf92856ec936f166f07d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
    const components = ["ir-login", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-login":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLogin);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
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