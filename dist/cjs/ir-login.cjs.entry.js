'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-fb15e0d7.js');
const authenticate_service = require('./authenticate.service-49259d0e.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./axios-6e678d52.js');
require('./index-fbf1fe1d.js');

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
    }
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new authenticate_service.AuthService();
    token = new Token.Token();
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
        return (index.h(index.Host, { key: 'c2790828744ec6f85bafc0d1ec4d949f8d6a6feb' }, index.h("ir-interceptor", { key: '206d7d165cc88d2139a4dadb6bf026de5fb009a7' }), index.h("ir-toast", { key: '0ad637a64b44266a9ccbac0d45cbbb2215dc671f' }), index.h("form", { key: '23f06708e1463c77b080c83cd02ca9f2b3116e75', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '25ab026107a040ed1b46e891d3a0a523e5d1e8f4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '6be0764483c9fe8366403452e34abc891acc18fe', class: "separator-container" }, index.h("div", { key: '270a1ff610794188d5b7a65e0dc23247a1de65a8', class: "separator" }), index.h("p", { key: '07494cba11ac48002781ad26df9d35e51f013996' }, "Sign in to manage your property"), index.h("div", { key: '03ebed30bcb43fb1841ced53830210c266f32de7', class: "separator" })), index.h("ir-input-text", { key: 'aa191a3c94f4d23e36dac74c9ea8c06294d52052', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'dcc89f8ccdc5f9d21ebc9c34fe0175f86546fcb9', name: "user", slot: "icon" })), index.h("div", { key: '50a3286a3377716462bb043bfe010354fbc60da0', class: 'position-relative' }, index.h("ir-input-text", { key: '91fb6525ed9521ece9717d70b0670e02191306c1', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '0dfc5e44e2bd0cb4b99eb3d0be8a6e8f4e1b695a', name: "key", slot: "icon" })), index.h("button", { key: '1b2994f117607ac78061820757db6101b63c4823', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '73fdeabfb8a45728485c3a8e8336cd4dce2fe950', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '4f3479f3c16bfe15b8f2610e925e494a065c2e1d', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '34422b3f4c1b5269566440b603eb9b4eeb0b590c', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '114d922d0f8e0c89dac368d1bad509b866087c8a', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7e13868b1dd67bca68ea0ea8636e553ad0498fd1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'aedbecce9e6a2dac2b6a0f4c3edeb55006b38870', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '964a96f73d4ad25e74e53eaeb409a8b03289a784', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '92ef4c51105daee61c6d6a6da472d0d3d7bcf1cd', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'a7be4b07134119d06ecbf5c5db044a13c45924fa', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '211254686bf7e7890bd6c0eca35d1d550860a7f0' }, index.h("a", { key: '35136740e487be4948954e69ccb9ec2047671ff0', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map