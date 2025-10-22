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
        return (index.h(index.Host, { key: '05d23ec6b04a80b1a8607635b40e5a3c3a7f3f06' }, index.h("ir-interceptor", { key: 'b2dc80d50abce2773157ceed973ecc2aa52d04fb' }), index.h("ir-toast", { key: '6b81520a0e2ccd84f0c690ec84682b045ec911f1' }), index.h("form", { key: 'e27e9f2f487eacc331f51467fbe0bdef8811fea8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'daaf0c4dcdd6f6d41305cc1482c4d976daa1a2d1', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'a8b3c6541f68b8682f179d3a97161ee3130f9dd7', class: "separator-container" }, index.h("div", { key: 'd1e686094aea6d2e489beac8da4869045188d27b', class: "separator" }), index.h("p", { key: '2c92ae458279d5afb5a852c6cb00c9f179228b04' }, "Sign in to manage your property"), index.h("div", { key: 'c3b56fa8fea7b111cc3e6184acd7ea68b35a13cb', class: "separator" })), index.h("ir-input-text", { key: '78da11c11c9feab0ac91cb21ee10d88ce77b7e98', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '8814ead5822a2ccb50217d5c656d1a599cf77ae6', name: "user", slot: "icon" })), index.h("div", { key: '00f147c503bab1491f666ba614a1d1aed2668548', class: 'position-relative' }, index.h("ir-input-text", { key: '2f04fc8a19305959f433a2ec274fed15f15897f8', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'd936dd4170c100df752c2cbf3fb522d3ec6cc399', name: "key", slot: "icon" })), index.h("button", { key: '73317ac8e5bbd53ce0c1ce0da52d48ba1db9ffdf', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '9b2aa3e57ab771d456923154e1b13d668d508cea', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '218b87f5f27ed803f95d76e40a4b88472f80b084', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0dee9dfb178fd0c9b5f655357083334f5b56bf58', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '490bf484cd36005f77e7fffcf870a424bc73a515', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'b0be3f1fb4ce289704bee1ea28e3a61e8485a592', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'ebebebcff43c4431f149c00eaa110a13c3cd93f6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '7feb2c198d71d8c1147e2d82841534e34d321698', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '51ec8eed0359e74369f433a6cbf0fa329b54a886', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '7f68f9f781696fc410b50e9fbe87a049eca83489', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '1f7a786682f8751fc79dbe1442a43d550e97eab8' }, index.h("a", { key: '7610e025e0af93b87935203f1659ec24a7c12606', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map