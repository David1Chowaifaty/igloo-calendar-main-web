import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-input-text2.js';
import { d as defineCustomElement$7 } from './ir-interceptor2.js';
import { d as defineCustomElement$6 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-otp-modal2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-alert2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = /*@__PURE__*/ proxyCustomElement(class IrLogin extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.authFinish = createEvent(this, "authFinish", 7);
    }
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
        return (h(Host, { key: 'ba9dfb3f82d3f7cfdb9371341f76ff77db039b9b' }, h("ir-interceptor", { key: 'aac7471c3a22696495bf5397a6e1edea4b011f77' }), h("ir-toast", { key: 'a026a9b3e8b4539f5728116b7a0d73396ab4d6a9' }), h("form", { key: '3f31046848a1d9c1da62e9e415e83b3b310d9d42', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '30e0dee9aeaf2082bf5327d714fe2bf1c8a7f4d1', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '476cd986f09f4a04c839fbdbd0cc1db180cb5d74', class: "separator-container" }, h("div", { key: '12eeced3eca1c9d31cf5ee5e928fd0552514485b', class: "separator" }), h("p", { key: 'b5e1816494beb6359c2e6cfd24d4dbf3bd6abbbd' }, "Sign in to manage your property"), h("div", { key: '7fdf3399843174b5f373d577eb1487ee7db96bcf', class: "separator" })), h("ir-input-text", { key: 'e77b73589f9655ae02ae3985fad21db16528d560', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'af1d8d7aa4e1800f727615e4d39060e11f1a9e46', name: "user", slot: "icon" })), h("div", { key: '022ecb6462b408e33cb43eb432ac376ddff4c4e9', class: 'position-relative' }, h("ir-input-text", { key: '9a007e1dd9ea211eac03153a1214d92dc69594b1', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'eebe8d883f1b3ff9d2a33c91a37d302287bcc970', name: "key", slot: "icon" })), h("button", { key: 'be2e0d86a3b99deb475b0ca71180c7fff32ba69b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '3e20f18a7a2392e9ad2a2d0abcf4f188bfd0e660', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '768a1c4177ee0f9486933cb410f17bf4e45e4f85', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'f08da3ec7f071fc445fb5d572c8309d795114bb1', class: "card-body text-center p-0 app_links" }, h("a", { key: 'da9b889e29c46e855a63ca557fd7ed5a8c550de2', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '9bc1a4b3715a1cfbb7680bcb72c458fce6833bda', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'f4e0c3a581ea084bbd5f83312086326d55f5a039', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '952f20951f2b4f54b99d8594699dd372c51f4aae', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3ae5ea30d76de3677e97f355ab959b171f3bab55', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '8daa8811adc3c3b2f6e2251ced9d7f56ee12da53', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '72d50f757f2cb7ba3cf12e103a036b82d264256a' }, h("a", { key: '6e9156a22ac4d791dbaec7bfb7337da987c2ec75', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
    const components = ["ir-login", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-login":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLogin);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrLogin as I, defineCustomElement as d };

//# sourceMappingURL=ir-login2.js.map