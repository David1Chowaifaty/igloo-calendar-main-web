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
        return (index.h(index.Host, { key: 'a4c51b8a6b27391b888d248879f2f7798f0e3126' }, index.h("ir-interceptor", { key: '5b1b13be2ca068297113ab67c57789a8afd578da' }), index.h("ir-toast", { key: '81363cee91f6e7be4ceb586fd83f53ddcb59a001' }), index.h("form", { key: '5156ecf6b8161fda3d4247c39756419f0f109d15', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'ce1b46fbdda98733faa79c0147bc1f4701db2cb4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '4497ef4fe81fa801989a99188603cbea168f35e7', class: "separator-container" }, index.h("div", { key: '651d7146f0f24056394f972d0699a87d11731cec', class: "separator" }), index.h("p", { key: 'a7bfdacd69b5d42295e5a85220ebf9c786c8e958' }, "Sign in to manage your property"), index.h("div", { key: '9474242784358062b21f022fd97bfd12ea0259d4', class: "separator" })), index.h("ir-input-text", { key: '9213dc177a9409a27d79dfa6896f80a4fe7c2beb', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '3ad6e3f2f7815cb9afbb18318e047cc951af86c0', name: "user", slot: "icon" })), index.h("div", { key: 'a2c07aa02fdcb8328a8ebb7108a5a8f865542aa5', class: 'position-relative' }, index.h("ir-input-text", { key: '0ea9a783bbaadc58e936f14d99861724826c7059', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '7f9b3d1dd09a9810fed3530f58233d5bdf7e05da', name: "key", slot: "icon" })), index.h("button", { key: 'be23bb2fce0962256588f2724e111246bb617761', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '54cb88df0dfa910453d6c05bd16674068fba24d7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'debe7fe30d7fa38d12d873319f6c2481097a5f1b', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '76a2383d3c9d1aa7a53e0ed484f05051ac14d208', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '00a31f02d189374a8ab7aec345b98ed051b57879', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '90a83ba5ed450a46aa5c1b0c848f3a308264c3b7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '3ed2ae0abec3aa8f0a79b97af723c4f6d0806fc4', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '1249753d4bdb93de16ba04fe238b0f1034b31b0c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '47b574b247f10ed3722dac737fd36dfc16054588', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'deb1c40386222e58f4a18a3bfa6c58be054fc618', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '64e2a40ba8d4e58356a481736e2e24cb2c9e9b84' }, index.h("a", { key: 'e89c9597fcf25acd53afe0858e5b8d205dd98c9b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map