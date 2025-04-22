import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input-text2.js';
import { d as defineCustomElement$2 } from './ir-interceptor2.js';
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
        return (h(Host, { key: 'ea2ab2e2810f8f79cf01801a309dc729c860ba4b' }, h("ir-interceptor", { key: '6c3e48084ce841468c258cbb2fc44025fd64a6dd' }), h("ir-toast", { key: '48c180ea27f1129cc6cab46d5ee3a17f60b4a013' }), h("form", { key: '5437bbd133087e0682249c8ace1d08ef42854ad9', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '98b0178981f144e87bd075318c7a0eaac8430d18', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b730e308625b7335ed09fd2b29aeeeb522d86963', class: "separator-container" }, h("div", { key: '2f451900bea164053c1186189b9d85f263902500', class: "separator" }), h("p", { key: '483e0b96bae31b9a1d1aacd4a92fe8de7565344e' }, "Sign in to manage your property"), h("div", { key: '1c63aef6c5bf44e06d1882a6c91e7ed4de6fb68e', class: "separator" })), h("ir-input-text", { key: 'a2c16acdf112bb9b7bf0974c654d348e14c7969b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '35647b6ecf1ef7f9ea58b540f947527ac07fd35d', name: "user", slot: "icon" })), h("div", { key: 'fa07b5bb9dc7934673ac445aaa27f6dad83d9609', class: 'position-relative' }, h("ir-input-text", { key: '956e69ae699b839552e14e0b690930b23057e2bc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'a520ea41f68a21b5f48fe60172442726630101b0', name: "key", slot: "icon" })), h("button", { key: 'f8543f0897834dba5504976549c0cac87ee84117', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'c52d746a881d7c73d2f3fab3fc85491f333187ef', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '61e363d77993811c383a08cd51e3b0eb993f8551', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '7d76b61f45f3c8d7b0381350793c8a930223ff8e', class: "card-body text-center p-0 app_links" }, h("a", { key: '5c7a6980d56b284fe7a310a3ece7387d34af26b5', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '062deeea37f557b920cae8e0d0413d1e5db1299c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '5c16b46e32cee13fbbda246250f518ac69917b09', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4bea52858114a880c46d6ca1fd387e222e2b9c9e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '494707a6520d54f4c4dc7d7a6f63f75060eec063', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '6a0b86d64162063cdbc53faf7b27d5b27b6692cb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '66047ad0faf21362ff3894ffd5601e4a6a902c54' }, h("a", { key: '0e3cbee7f178dcdfca8791cdada9e3a1fd86794a', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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