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
        return (index.h(index.Host, { key: 'b0bc1e5a3cb62d6e775985ad1403d8cada9c9b59' }, index.h("ir-interceptor", { key: 'e5fca9a8cc23275bb0a7226a51fda5e37a7ac8de' }), index.h("ir-toast", { key: '70b57a373d9809bcb311b99cba25b7ca7b49e377' }), index.h("form", { key: '0f4eeadd55f5d955ab18cc41866ef824072c100b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'e9d86105cc2ab4f3fb6a7396d648918139b36c83', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '640e2894c1d8c575243c1352537d2e4350c2025b', class: "separator-container" }, index.h("div", { key: 'b406dfbf531ebc568a203f3911d34de4d76aecbb', class: "separator" }), index.h("p", { key: '6810a0f3f6cdac42e38827fac0c569160a691b6a' }, "Sign in to manage your property"), index.h("div", { key: 'ab946c5dfc73670944e291fdb255b43b2ee950ec', class: "separator" })), index.h("ir-input-text", { key: 'bdad0d75b375c589f333813ccbb14a5240a29ab2', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b206765f1df448d9a78b599ed79caddd2e50dfb8', name: "user", slot: "icon" })), index.h("div", { key: 'd8fdaaee867749501dc7e0efc1ed881070383112', class: 'position-relative' }, index.h("ir-input-text", { key: '9f40c8046f20a61bc29c445c3866f620451a95c5', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '50f80eaa71c7622697375e702ba9d751b910d952', name: "key", slot: "icon" })), index.h("button", { key: '1a70ba96d13c87ce9b1e8c2118e1c1e41088c357', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '4bcbe9754c3232abe456284f61740168091ceb2f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '12ab2953ce76258311bf018160a88ac5ef520773', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'c0405c5a70958c9a2c4127f87500ef03e032ec54', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '21a2e99d1e279ae849347841a39820d409d4c439', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'a5eba0556bf600fce37f85b2a8bba8ef4a81bf8d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'ad695d540209201e63eafb5fc24ebbbff82bd508', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'de917ce1794c7f960d9c39753da7bff21e8d17dd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'bef8af032850126d4e363834dcbfd2b85eef0af0', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b963392c050afb8ec951c13c23f0f53563fff0f8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'b87f447a40ff638f9777edd56a89dea916caefab' }, index.h("a", { key: 'f6a8742c4dfc5a2d7b3e722b1fd406e9f2882a61', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map