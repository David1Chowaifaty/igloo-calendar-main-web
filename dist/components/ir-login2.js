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
        return (h(Host, { key: 'a5168a1d537e28edb4b5da3ef80ae176bdca3d63' }, h("ir-interceptor", { key: '07722502aa61839e8f08eb7730a939f8e7c3bc4e' }), h("ir-toast", { key: '612aafe97b919f659cf492324ec22ec9dbfb0c87' }), h("form", { key: '38c7ddbdce9a906abe2db971f5bc3d8f32037da4', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '8e81e00e809b77d7b58628bff78085ac7142edbc', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b3b61b37a5f807aac8f5c8254679611064cfeb6d', class: "separator-container" }, h("div", { key: '3fb57fa1b5e8a05a7f80f1339611a444f46d577f', class: "separator" }), h("p", { key: '80e33ae923dbab7cc0724588b304069f1b36fa8e' }, "Sign in to manage your property"), h("div", { key: '2add35e742a0ae4bfa5ffa5fd1e8bcb2373761b9', class: "separator" })), h("ir-input-text", { key: '90be142afbdcc9d6b5b6ea0bb86523e18b8527ff', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '42e7c5a80059c9e9b1f69feae90ea482c548f849', name: "user", slot: "icon" })), h("div", { key: '9f31b07361233004333f4b9a161e7e5880c3ce75', class: 'position-relative' }, h("ir-input-text", { key: 'fd81389cd9ca9653a44b189535c7f18ea2031858', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '01b3aa7d7779242763151180b0e921083670966a', name: "key", slot: "icon" })), h("button", { key: '8f5940f96b042f175ad69171d7cef1032fe5c85e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e49ec2fc023d99504c7beea8dbe12be5600f7aa7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e8b66245716e2ca17107de086aa09a26b87603b9', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'dc185391e43b81ebdec507518ca90591d02f4ee5', class: "card-body text-center p-0 app_links" }, h("a", { key: 'c4b17f4adfc3acfebbdbc8163398d689616ceb67', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '0466261de18bc5b97b53f9ca6fad0d42557767f9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '830d8ad3830927d804a8866607767de004ababe7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9103b5afe5e72489400dda4ad46cfcd8e9b741f4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '7a44b00da59e996389b59619ac4293caeb0191a3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'cbfd2a93eac02a2d81dc596c85e337d312593f68', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '37042813bad1cff70b88a515167bc16753887279' }, h("a", { key: '1252f7c1c20666da577320e324f7f0a343bb1eec', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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