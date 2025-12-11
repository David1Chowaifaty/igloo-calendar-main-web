'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const authenticate_service = require('./authenticate.service-49259d0e.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
require('./axios-6e678d52.js');
require('./index-6299b0f7.js');

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
        return (index.h(index.Host, { key: '182d14f5f5496248c240c8c899f5258da25268db' }, index.h("ir-interceptor", { key: '91c0f222726cdc12ece278b8418c91f953978a3e' }), index.h("ir-toast", { key: 'd109b60dab07bd18e873bdb5d9866aed0ea1cfd1' }), index.h("form", { key: '0e5a008ee743367330c5481ac5c5d35ea6fe8e9c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '08c1d0928e4cd02e5ea38f4741cc745f492a0d82', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '207a955a7dc15e8589915ef3e82b57ec4205fa24', class: "separator-container" }, index.h("div", { key: '8598bae8b9057d97e8b001f0a10ec7d64a3e262f', class: "separator" }), index.h("p", { key: 'c285ae1d9bcb272bbc8312b49ba1f29f1944191c' }, "Sign in to manage your property"), index.h("div", { key: '04c635bdb547bda2b89a896d4d82bd87be3f9f1b', class: "separator" })), index.h("ir-input-text", { key: '2c22771cc0e79d346f0fae4744a9596dc07fc135', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b5df99bb13b2d3792bbfe9b1881159a504429f37', name: "user", slot: "icon" })), index.h("div", { key: '3162f723cb800f6470ff76c4482f42838b23ecbc', class: 'position-relative' }, index.h("ir-input-text", { key: 'c8edf45e31ca6f06f14539333e147d1ab8573f6d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'ae0a41f39cc64ba28fd9b887660585d70ca8506b', name: "key", slot: "icon" })), index.h("button", { key: '684e1b0caa8cbec2608621ecd4c42035693b475f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '39f1bab8672ce50bf0792ca14cbc84de8ae41e4f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'af1877f02309849a12e9f350da23a0cae5172a6e', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'c3a47e1a737dca8e97a8cd8fa822dde83344d539', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '36896e15711c0dc48549be76ed4492b39c28b91b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'df3520f1766a3e9a0bc8dd3835d128c932de44c0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'aae64cddf60503b641e700242c0715115445d248', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '6038870a1ac430d1e3b2a9562046611449daa2e9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '228891f82df111273767792e2c32f45d3bb944a6', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '99c18885fd5d1a0be87ffeac019a2b306e1e4201', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '84bb866a2c3c4d7b1a56f2dfaee633d8562e94cd' }, index.h("a", { key: 'baf0aee594903cf033673ed156cf5d695f2dec8c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map