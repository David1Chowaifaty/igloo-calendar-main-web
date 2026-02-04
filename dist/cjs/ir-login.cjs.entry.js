'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-8fd11984.js');
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
        return (index.h(index.Host, { key: '9729b9383a61ad5c0b637dd8c4640740453d790d' }, index.h("ir-interceptor", { key: '93c603e1f53f01a019e2b30a1df6e0eea894d472' }), index.h("ir-toast", { key: '2382d3bcab9280aaa0d5a0872206e8274187f3e5' }), index.h("form", { key: '9e096b333e7bdae55ba0faaa339a7a3d369453ec', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '7c4d22b7a916e9b74470e52bbb8324eff93b5193', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'e4cbfb34aed3158e7331644f517e01fcc3bfc734', class: "separator-container" }, index.h("div", { key: '719f31e15a38c3354a1e96247f085468d41fd9c1', class: "separator" }), index.h("p", { key: '7b4138932efd21418e6a7b5777f0459ae44178a4' }, "Sign in to manage your property"), index.h("div", { key: '258417ad473f55d59d1c50a4b43f1739df2929c7', class: "separator" })), index.h("ir-input-text", { key: '7e19a61928cd5927ffe619bae1c5d33c3b1ee492', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '63bd44cef18caeb967745f8978b40f1dbfab7315', name: "user", slot: "icon" })), index.h("div", { key: 'b2149277370b41e257a0d19f8a65fc1f24df312a', class: 'position-relative' }, index.h("ir-input-text", { key: 'f791712a20ca9337031ad303c7590336b73000dd', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'a58deedd33d04bba4e61431394f400251de7b724', name: "key", slot: "icon" })), index.h("button", { key: '891a79e0dec6fa3de19abd9d1718e8e8c0fd49e7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'b629a442b36303709f87384b3fef8a2842b7db30', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '38b92664e802d432e60905bc77f7dea21f7f2c5b', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'a8a6882d738cedd521e7d8e93a8a2d14fd31d771', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '9c053fd770fa2bd25c1f3bd4d6fe6aa03e93ab41', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '2fdb5dde8773ae456d56a2e840418ce33a11d9b1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '9df3856cd7fddb8444ce8748d5010f614372cafe', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '51445a799ce0d9e733bdcf7a49c60da8b25c6378', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '4011dd02139268cce00dcddef32309e706987482', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '254d1eef889f95e1bd8f55d9a3f0dcc0b88f2855', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'a1f170f4ec6d28e3c65521b2127c31e14e36a293' }, index.h("a", { key: '2d5829030b3d480865c38c178e1608ffa58c9866', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map