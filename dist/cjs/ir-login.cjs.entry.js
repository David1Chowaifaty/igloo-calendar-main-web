'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
require('./axios-6e678d52.js');
require('./index-7564ffa1.js');

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.showPassword = false;
        this.authService = new authenticate_service.AuthService();
        this.token = new Token.Token();
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
        return (index.h(index.Host, { key: 'b828076abae375381b9ca0164ff4e88d8166cd18' }, index.h("ir-interceptor", { key: 'f1b454d25e61c4fdb8f4142f11d47a54393039a1' }), index.h("ir-toast", { key: '489c71e72345c7a17ebab32133b1f6a3bd645bfe' }), index.h("form", { key: '51c4f073b3ec3059195c479966ac7c778e277daa', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '95137d2955b9e35330a4def01745747f17ddce93', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '194849de6d2805e57588a691dfc4989697bc9684', class: "separator-container" }, index.h("div", { key: '9dad0aa0ee9af7e8663060779e802625eea1132c', class: "separator" }), index.h("p", { key: '56f0f116e534608d91c421b9cd4417ae558b678d' }, "Sign in to manage your property"), index.h("div", { key: 'abde8556c2123a36cc52c2f969e0fdf7cbc85ce0', class: "separator" })), index.h("ir-input-text", { key: '4f45cd7573f2a03d8035981a2ef479269ee04f93', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '48e19b39154fce556bcb2f41388ba215ed7f257d', name: "user", slot: "icon" })), index.h("div", { key: '1e9d7462008eca61eb0f170363a140a74ed7a2a2', class: 'position-relative' }, index.h("ir-input-text", { key: 'aa243cf1d776fc0e932737c7909fae90c5332b1b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'a67e2e8800fc7ba011ace9160365bd0337010689', name: "key", slot: "icon" })), index.h("button", { key: '78c0fff9fef7a0ff8a7dd528ccbc2c8c96520b17', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '53040063204965454e51b85e2b4183da3c458d4a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '3363afb7947e1a764fd9bc0108276c522f313492', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '31907277a6f840be61fee8e8f170d404c2489044', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '38931643f65636f7ce715863d8f7a3859020947d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'efc3e5dc5fce114c549e5d2a5fe437165b3fd91c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '4796631e8ffbdc5f37fa446e8d3df7a707917c8f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '7de43fd59429226558cb9306f151876be6c1fa21', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'aecfb80bc6fca2922c74cbe543a8f1f6fee6d3c1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '3222bd0fbfd9cdafe3bc86bdfd6719975aa6dc5a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '21ec782427ac6849d77cb821397b1c4cbbfa46d3' }, index.h("a", { key: '491af66fb5913db385f813315b0c572251df01c6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map