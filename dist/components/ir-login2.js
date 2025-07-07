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
        return (h(Host, { key: '42c36bcd717872531e720ba0cee23e8fec1ed2d8' }, h("ir-interceptor", { key: '820d0ded639ed8803b3530e01d95e42d00f87710' }), h("ir-toast", { key: '866cbb38e302bee34dbb3383a966ef1f12f07f4d' }), h("form", { key: '3023f49053b3aee0e0195b654f4df2c422d54c51', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '368cf57e24d2bdf557584fbec551d0f468137300', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'a728eff12f7f0fb8689855d39f80cd907ce4af71', class: "separator-container" }, h("div", { key: '8deda9f1935ab7f0b22c2d3c4775cd42f72a68a4', class: "separator" }), h("p", { key: '7ca676b338bf69e9a6bcf600983fdae72557bb1f' }, "Sign in to manage your property"), h("div", { key: 'c689408e0d4ff2b3116125dae3ea1bc64c6dd09e', class: "separator" })), h("ir-input-text", { key: '91fb27a0304616eb6ff48ddcb45b9165eb53b7f8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '3b1eda890061d433c39806fc7848450ec4c05a99', name: "user", slot: "icon" })), h("div", { key: 'dea08d9383dd69ac6a8a76f7d2868ddc4a6f1154', class: 'position-relative' }, h("ir-input-text", { key: 'ce8581a4de4393ac10e1426dd343a7c2d1804ff4', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '070b685fb81d8d34e95f05544f15c060b1b25c3f', name: "key", slot: "icon" })), h("button", { key: 'e83a486a44acbea7ad545194e501883018669068', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '53307f9740ca81806e659f148961d0b3a50ff97a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2484654fbfd220d39497bf2a92b05931c4c63ed9', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c4479cd8daf7d6ace70716f769a541d7d363dad6', class: "card-body text-center p-0 app_links" }, h("a", { key: '8812bdb74b45835526d53646851c30fc0f72471c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'e8effd683bdef137d4c3ef0fe2f9b10e23b09b94', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'd8c3ec3abbc8726b5ab61b6b1986e7ffb5d6965a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '3772f94aba52948a09f862e641bbd7a2fbb6d984', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '478af3df7988588e3dfaee4b2bb4e913c3eb70e9', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'ddaa1cb8328c80c890c7e340d410aba7ff692c34', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'ba86b6e27022c31b3f0f84ee3fe58fa4993be744' }, h("a", { key: 'dd3dd3fcb9c80cceb015eaa45f6e3557d11091d5', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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