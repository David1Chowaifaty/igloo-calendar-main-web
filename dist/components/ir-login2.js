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
        return (h(Host, { key: '6933ed5170aa498e6bc0eb2ddd122f02a3bcbd55' }, h("ir-interceptor", { key: '83144e43c5df4b8133537f5353e7f1e4c07c70ef' }), h("ir-toast", { key: '377933d99e71386172272a324b05aafd3581f3a7' }), h("form", { key: '3674b57a7381ae86167f9f591fab6ccd95d58f9f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f00778789bea191c3a71cda4bf03617eda4df490', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'febb534b865cc3d9130c7ce65501a8428bf9d386', class: "separator-container" }, h("div", { key: '157478745979f9875ea43abaedbd9a276f2e43cf', class: "separator" }), h("p", { key: '11fb3f098e43c26f806cfe8b1af0b2330c78e4ed' }, "Sign in to manage your property"), h("div", { key: 'a4cc857012505fcc0fbde90a46201233f26ce863', class: "separator" })), h("ir-input-text", { key: 'c9c26e8cdbf3f91cf6499c23810c183953aeae1e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '610761fcd8779fad38467745b0e57bdce8c1e008', name: "user", slot: "icon" })), h("div", { key: 'c71a20c486031fa1b4e6e533fd9f73e0eeb4bd1f', class: 'position-relative' }, h("ir-input-text", { key: 'ba23ae45712a0a124a86a79fb7360c87bf095ec7', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '6527d16f75869fcc52f70e16e8a7add473fceaaf', name: "key", slot: "icon" })), h("button", { key: 'be01937324acd0a71b5903ec8b00803a20c8a99a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '790595f9b176ea091f6aef62b0901d41b7a9d5d5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '191118d7b267d333593252796f0f10f7f4ed69f1', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '1d6665edbe7ee9a613aea34cfc9d38c65d58c290', class: "card-body text-center p-0 app_links" }, h("a", { key: '66419ef2bb9d06de5d6ffc4a97130599aafb6231', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'd00099cd007c69b629e48c7ec2f3e114aad9b676', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9150b897f24114c129efd1555d0ebecd45e23cd4', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'ebc063cf5991df270954f41fa3fcdc0777fd2584', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'c0c67e4807c0b1a367a947bfb067d3a8f90815c9', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'ff4fff61de1cd40195db06993d95a9fdffc308bd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '09106883a0a947ccecf8693e0e9287ced6de3126' }, h("a", { key: 'c032de16d01d67029104386180f6b6ab569d7c44', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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