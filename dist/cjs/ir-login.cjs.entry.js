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
        return (index.h(index.Host, { key: 'dee5eec62ceaaca4571051e5392362a5794b25ed' }, index.h("ir-interceptor", { key: '820f03fec5c25c39150df3cf8bb8d23798410884' }), index.h("ir-toast", { key: 'a19bc69ae8f8e71df76b3cbec550f71d61852211' }), index.h("form", { key: 'dbdb791251ba8c8f50b0437f85951d7efc37d123', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '901c6973f40b58916eb4ff8c11bf3434d307211f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'c3ac609f45781fb757d243ad7e7c10da49baf664', class: "separator-container" }, index.h("div", { key: '3132217841a4cfcc5d8da05e50737655df05a3f1', class: "separator" }), index.h("p", { key: '1fccc397e7e18a22bec7fbd4dbce32ab814a44cd' }, "Sign in to manage your property"), index.h("div", { key: '33239f635748c096337eb8cf6cb6afbb94369964', class: "separator" })), index.h("ir-input-text", { key: '4e8758b81dedb9c9fb6561cba4bc20b2bd23522a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '3961c21df5ba51bc4e425d0cf9404e8227b78265', name: "user", slot: "icon" })), index.h("div", { key: '173688afbf89b0faad4ebe16f82145bb94bd2140', class: 'position-relative' }, index.h("ir-input-text", { key: '29dcb9c15f91e23ca5d9fe74dd83022d7f135e3b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '66acc3bd2f23cc66899a10646e74b8722ca61bb1', name: "key", slot: "icon" })), index.h("button", { key: '67434ec828553e0a59802c281227372b5dd3c976', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '79ed1bddffef9cc5e408536a6f3f27f321eaa822', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '08e82dad3f68e9920b37b28294c0ae5282fe016f', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'd4da0da6d7d956b54aab952ca1b9e4fcf8baf6ea', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'c26141095146d71a1a624337b39a7dd7f5e999a3', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'cc4f752fa3d3cfb17fb0f01d62d7bfd08d833eb4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '25c96485725e827d23b6fdfef5f2d8d24fc76e34', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '6ac029af3f08454f6144a11bc1f8a6df336c197c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '38a48144c930d8fe58687b6d50b76a8e4ca61ad6', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'a3898af8eb70281cb477200b4841802ebc8b311a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '7ca97fcfa4fafbb6e5d573b14825cf6418058efe' }, index.h("a", { key: '3547457a65d309b39c2940e1785ccdcd3e1699ae', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map