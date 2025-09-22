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
        return (h(Host, { key: 'b828076abae375381b9ca0164ff4e88d8166cd18' }, h("ir-interceptor", { key: 'f1b454d25e61c4fdb8f4142f11d47a54393039a1' }), h("ir-toast", { key: '489c71e72345c7a17ebab32133b1f6a3bd645bfe' }), h("form", { key: '51c4f073b3ec3059195c479966ac7c778e277daa', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '95137d2955b9e35330a4def01745747f17ddce93', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '194849de6d2805e57588a691dfc4989697bc9684', class: "separator-container" }, h("div", { key: '9dad0aa0ee9af7e8663060779e802625eea1132c', class: "separator" }), h("p", { key: '56f0f116e534608d91c421b9cd4417ae558b678d' }, "Sign in to manage your property"), h("div", { key: 'abde8556c2123a36cc52c2f969e0fdf7cbc85ce0', class: "separator" })), h("ir-input-text", { key: '4f45cd7573f2a03d8035981a2ef479269ee04f93', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '48e19b39154fce556bcb2f41388ba215ed7f257d', name: "user", slot: "icon" })), h("div", { key: '1e9d7462008eca61eb0f170363a140a74ed7a2a2', class: 'position-relative' }, h("ir-input-text", { key: 'aa243cf1d776fc0e932737c7909fae90c5332b1b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'a67e2e8800fc7ba011ace9160365bd0337010689', name: "key", slot: "icon" })), h("button", { key: '78c0fff9fef7a0ff8a7dd528ccbc2c8c96520b17', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '53040063204965454e51b85e2b4183da3c458d4a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '3363afb7947e1a764fd9bc0108276c522f313492', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '31907277a6f840be61fee8e8f170d404c2489044', class: "card-body text-center p-0 app_links" }, h("a", { key: '38931643f65636f7ce715863d8f7a3859020947d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'efc3e5dc5fce114c549e5d2a5fe437165b3fd91c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '4796631e8ffbdc5f37fa446e8d3df7a707917c8f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '7de43fd59429226558cb9306f151876be6c1fa21', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'aecfb80bc6fca2922c74cbe543a8f1f6fee6d3c1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '3222bd0fbfd9cdafe3bc86bdfd6719975aa6dc5a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '21ec782427ac6849d77cb821397b1c4cbbfa46d3' }, h("a", { key: '491af66fb5913db385f813315b0c572251df01c6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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