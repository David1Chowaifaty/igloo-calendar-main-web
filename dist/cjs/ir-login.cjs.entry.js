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
        return (index.h(index.Host, { key: 'f13fec9c6b7104b9636698cc7583a97d41e4bb2f' }, index.h("ir-interceptor", { key: '793234f6b92848fbeb7b8d9a0b99384024e47182' }), index.h("ir-toast", { key: 'b950539281ff6ffbbb658790c628308bca333892' }), index.h("form", { key: '67b60bf3f159625fee6e57a2bc2927676d553723', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4dd1618029002fcaa49acb464dc35ca686d7ec27', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'a6bb40fa8f204fbeabff19eb42cbb5586f1d9ac6', class: "separator-container" }, index.h("div", { key: '6f65a9af8cb517e9dd2c453f7bb57a34d0405ac8', class: "separator" }), index.h("p", { key: '2aee50af555165e2fb1392fc29125035a799cffe' }, "Sign in to manage your property"), index.h("div", { key: 'f82e5a35cc2dc62620786678f6afaca3e33b7e77', class: "separator" })), index.h("ir-input-text", { key: '4d7a7d7c90f44d3ac06fd9ee808ec2f7c13214f0', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '1988e2e16ac8e66e4e07aa72c286f873ec65096f', name: "user", slot: "icon" })), index.h("div", { key: '25cdaf7a9c5666a7f3c481471ea7b6a1f525c9d2', class: 'position-relative' }, index.h("ir-input-text", { key: '0124dbf54d0fe7269e088ed8bc0cc08a2ccb42e3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '5a032c32438f60d3da15488831a13be1679772f2', name: "key", slot: "icon" })), index.h("button", { key: 'f186a306f44ee99ed37ba6a86d1718298d44003c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'd7b4e7e36006cdef4b3184d94084732b0301038e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b97b511288ad61f61931ad8ee24f10558647fe42', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '80267b682b9a929957b010f0c9fd2d10d32aa65c', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '5a34afcf283dac75ed335bc93d28408eb5e0819f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '977c646e1d00b605f4e1c7c4c37781e91f2c1dbc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'cea42ffad5b487a045a31b74013f878aa5fe48eb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'd250fc52c196ea8b302f0da3376ea9b783658d67', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'ca57a80289451e0cf56e1354a98d7bb20fb472bb', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'a55e0126d54e3ac5c049c1dc9e26374129762d95', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '6f3d5ca807b08b6f50b2a901ecad4792567c93c8' }, index.h("a", { key: '68bc11c3fa21ac6adf77ea9c9af83c0517bc8f54', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map