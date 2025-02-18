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
        return (h(Host, { key: 'dc3a164760c506a5770fcba1a33e05daeb73ae83' }, h("ir-interceptor", { key: 'f87a7cab3f60152747b4154645e5653446fd25c3' }), h("ir-toast", { key: '5dd4a21e285e7cb89e901864cd7e4620e3b436f8' }), h("form", { key: '754fcb4e0aa0c2f4a9a23984286c420b96c80f0b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f45b2b2e8ae31cb492d2f62af226a1f6853764a4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '7d898496fb8d5899ecb4811ca7127f76c447090b', class: "separator-container" }, h("div", { key: '24e516d77a79a3ba33f01ea6da85175437baef66', class: "separator" }), h("p", { key: '1be8be4bf30eba44f85b3f46c8b97e0b399d856e' }, "Sign in to manage your property"), h("div", { key: 'f70b2e2b124d8beb647db0759bb678a1b4f31467', class: "separator" })), h("ir-input-text", { key: '696aa27f5805f44729ba054dec88813f846fff86', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'eb35a9d770b3997ca37fbdf2cfd3ac1035e3374d', name: "user", slot: "icon" })), h("div", { key: '98b4e739b2acbfc14c2d527842ac0a3a20e81a7e', class: 'position-relative' }, h("ir-input-text", { key: '44693edde57cd34f4e949a47cf0e12f44bcbc6c7', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '7f36387d385f390ea28e4ab26a287a41b8841412', name: "key", slot: "icon" })), h("button", { key: 'f4ca042935761941d98e97c50f8be960ec9ef2c5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '4d1302026d5f5a7069f5bc479e8c5a76f1839014', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'be821b8b70e21183da0b24efe41718d5a50eb8f9', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '24433376eba2bcd8a75eaee188f7cdea916a1785', class: "card-body text-center p-0 app_links" }, h("a", { key: '356adf959a2fe2885708a8486fbe3c6420a770df', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '5e61595dd88bee2c341f9fea95286d3eb980fcb6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'bcecb8b313955617a2500b5dbec74da66bff2529', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b1cd9251cc8b7a799de8a5ab2f5445b6d44f0a21', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '337cdb0952200b47f1de2aabef46c577915f9820', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '6c3ccb63170a241d19c09187f2ce14b8603997dc', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'd0ca729075cb3d1c02cc052e024473b050b06c92' }, h("a", { key: 'f713793711cffa41bd8b97889ee59b091e485933', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
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