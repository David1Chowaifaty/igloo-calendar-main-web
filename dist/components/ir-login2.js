import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-interceptor2.js';
import { d as defineCustomElement$1 } from './ir-toast2.js';

class AuthService {
    async authenticate(params) {
        const { data } = await axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

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
        return (h(Host, { key: 'b399a7495fda19b4d40e2da89dc4df318d81ef3b' }, h("ir-interceptor", { key: '1cb3eb0615bf97ad2c25b1e2a236840cd8151990' }), h("ir-toast", { key: 'b400437d74361221571c1a6e53deeb9530c895bc' }), h("form", { key: '95880e9b827638946418bcdf1b12f4fd033f7b02', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '7d6b07654fdac5d9891ad75d9666e867f4bbc073', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'a87fc8cf626fb1032b0ff71b513ab37b9df2dfd4', class: "separator-container" }, h("div", { key: '6241e469e4c36657907f03c97dfaabe011575319', class: "separator" }), h("p", { key: '8bff6ad7b2b1e0a5fea6bd8e0b8f07b4379a28ce' }, "Sign in to manage your property"), h("div", { key: '4740b5bc3b5a5e245dcb7ac42485e64ea029cf96', class: "separator" })), h("ir-input-text", { key: '04a2645ef40675919f8fd9230d15b22d1fe8e980', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '58aaee7cbd75c0110c41cf5b8be488c5aab0b0a1', name: "user", slot: "icon" })), h("div", { key: 'd164ccc6ea95e2e58892318be41ce275b0243f88', class: 'position-relative' }, h("ir-input-text", { key: 'acb582f5130594732280f7e7cab1eed194734e04', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '380af0a2cf2873e5ceb302646d8a45dd80235952', name: "key", slot: "icon" })), h("button", { key: 'c277711d6efc9c49b70ac50f3c0bc7b2e2a7bd2c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'da1f881ac684c794cc53c00b8f0f4c214f851c1d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'f81be7bad3f022501edddae6f86847361e7c40de', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'ecc9a4d4847feee99f82f7b4f5d50f0edc78114f', class: "card-body text-center p-0 app_links" }, h("a", { key: '2a6ed523b120546bb2648252aebc1210389bdc4f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '40c82210a4d4ac9b777182cc0adcf9c48cee6351', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'd61f540339b936344b1cbbc3e37ae3629fa1820b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'f1e1a625da530e51d1b30ca55bdbe9e4cfdefd59', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '536fbe88725acccce8c902541cf76520d293c938', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '35dd39602cde7aee816175593ce5329c48a021b9', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8dd15a9dc00f5ac1fc206be13c324bef89a6e547' }, h("a", { key: 'a2c90b0932d419bdfb594e1783003bf68bc5e5ec', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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
    const components = ["ir-login", "ir-button", "ir-icons", "ir-input-text", "ir-interceptor", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-login":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLogin);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-interceptor":
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