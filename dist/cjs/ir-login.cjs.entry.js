'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
require('./axios-6e678d52.js');
require('./index-467172e1.js');

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
        return (index.h(index.Host, { key: 'dcab6cfc9450d97b627e6a8b0d17f69a3ffd8510' }, index.h("ir-interceptor", { key: 'd0481197357f4e3e62bc45c1755e3d38205709e7' }), index.h("ir-toast", { key: 'dea07cc7c6c82d78375cf9f5e98dcb2163d3f714' }), index.h("form", { key: 'fb3e61201c92a03c1dcfbb08aad11da541f27fd2', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'e2e4080318bc7c67be5e1a7aba6619bf965b36b5', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '03f3fd12d7bb606aafd9eb3057b1566b35cea7d7', class: "separator-container" }, index.h("div", { key: '54b2f0048aad0a3327ada6957d1dcf86cafb23bd', class: "separator" }), index.h("p", { key: '7b1306ad07add7f80a21ba632d532b1de2d1cba9' }, "Sign in to manage your property"), index.h("div", { key: '3099acd4f7e3ca87dd244477a029bb44a5bed7a3', class: "separator" })), index.h("ir-input-text", { key: 'd137760d8787724056c5526c7ddcc12a7f9a43ad', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '5ebeca8e4dd553a8a6bb832602ed4eb6edf33ec8', name: "user", slot: "icon" })), index.h("div", { key: '84ae9afd7f673182b293ea3bfd21a226038160a5', class: 'position-relative' }, index.h("ir-input-text", { key: '848401e89f700aeb49a18373ac8623290ab9eb2f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '2fbae132f9721f8e8cf7e104f49ff3ba13d016ad', name: "key", slot: "icon" })), index.h("button", { key: '6ac674df995aa8f2f0b51127445689aff41217c9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '32d000afc1eb9cf62fe05d0ef0131cd8b7c6ae4d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '818db47e3758ca518cca157c8d3316d203fe3e99', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '4d19c13f200ce8fee81950177af3967378a4721b', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '17d68abd340bb9ad50c7b5bc62115cfe8b97f9d3', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7a3ec91e6e9b41dc79085ed6ce58c32738c1061b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '92dc4c2f79238904f223a791358bbddffb19bbaa', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'ae05793aef2409e7671047dc8cd283d296e1ded3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '6371619aa529ae7cd31499c99bade4fe65ad7c68', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'eff6438149e3dc87147621c22ac0fad211fb8206', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '2c67f52791baa95e1f200faf4f2f9320126a1bfd' }, index.h("a", { key: 'e9a69a3d6461c0964538bf2f918dd39bc54a6e50', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map