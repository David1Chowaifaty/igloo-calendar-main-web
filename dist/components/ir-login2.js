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
        return (h(Host, { key: 'd07a1e7a98dcf9f6831bcee9b61c4c1b401de080' }, h("ir-interceptor", { key: 'cfcb18c96af896c515e778079482d475fdb56ada' }), h("ir-toast", { key: '82348a2a98fa40874407ada1299ed5cae08b29cf' }), h("form", { key: '52672d4d15df473efa1eb9c3bde106fdee1ca748', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b91e72926b86a410243bfa318454dfe6e20d7a6e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '1abc3fa1fc206022da80a41220d7c30869180202', class: "separator-container" }, h("div", { key: 'b2ee23e05d5eb23a8b0c2483c900ddef05261729', class: "separator" }), h("p", { key: '51b107a7044054d6a0ef26bfc4d0f8ea59479f4c' }, "Sign in to manage your property"), h("div", { key: '8b2e0b84358cc3e958a0943613c28de72d1a4366', class: "separator" })), h("ir-input-text", { key: '07b335f51db227e1ae185540bd511f3970e21c4e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '68829716580d511e09c71a5fd3170885461c2147', name: "user", slot: "icon" })), h("div", { key: '2ebec67a99eeb7754e64ca972a1569d09e875a79', class: 'position-relative' }, h("ir-input-text", { key: '21ad6713b20f985db922eb5f7f87bc6ae45939fa', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '4cb6e991b06fcc41bc1f0e8d86d58b7a1a63a326', name: "key", slot: "icon" })), h("button", { key: 'ca1d4ee2acc40444c14743aa2ff90ed89f0a8ddb', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'dfdeb3779c53cd81e4ed7f5cf9c747ea4783ccd0', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '67d4b75d6e23d3db0671561887b6ab781fd3cb66', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '499eb8733ae84aec4fb330d2a8086a2af6822a96', class: "card-body text-center p-0 app_links" }, h("a", { key: '075d3eca0fe00891a57e6c5bd7c621fc31c009cb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '3a43381a3e2b76193ef8272fbd87f5e9abe7840c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '3c4269ff316d960032e5d360c8419cbb6c63e121', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '511516cbc168ecdacecae7d59b05f12b82dd4ea4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '5a8ecc06148c87942ab5bf530f91d5ad2b4a9402', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f5820dd4e4cedad84a33846d813281c88f4b4be6', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '1c6e77de8b8fcc326a7fd06177d77544f23fcd3c' }, h("a", { key: 'bae671df6fd8f45919ea482047b4a4670608493c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
    static get style() { return irLoginCss; }
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

//# sourceMappingURL=ir-login2.js.map