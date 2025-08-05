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
        return (index.h(index.Host, { key: '99f5c8d87b0e450a614d95439df1e6d945b49dcf' }, index.h("ir-interceptor", { key: 'b1323c5d509122b41d4d921f62d2023465385e57' }), index.h("ir-toast", { key: '38b301fff74b6affef6d2ab55a0ee47c22eaa6be' }), index.h("form", { key: 'd57d60620a88dc51d4dbe4423879e675ba25d8a8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '50922fa51cefc3baf1879f6a8139c5a4f66d6306', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'cb976e8baf6d9784d53d39098fc40cf1ef94617f', class: "separator-container" }, index.h("div", { key: 'c097f535e6bb3251d60c09a102b1867ca11f0b65', class: "separator" }), index.h("p", { key: 'f1f55b80ec809bb793173d79700d0a160d38529d' }, "Sign in to manage your property"), index.h("div", { key: 'cdf73787344809b804e18a2b506bf46e0655d7d7', class: "separator" })), index.h("ir-input-text", { key: 'bcf39a4d79b7e2fa8f32373f0315f7fbc4cc10ce', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '52e2baa663466c8c705312fd3410afe44cd68e93', name: "user", slot: "icon" })), index.h("div", { key: 'c52bffb74316ecd2f6d0744de46042b23d1a0a5f', class: 'position-relative' }, index.h("ir-input-text", { key: '38a48210046e3464648ff8ed6771693d62265ec8', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '4a7a872aa6ed44d6170311514c1d7fb53f129c49', name: "key", slot: "icon" })), index.h("button", { key: '841ba9ac3f37a695273229cdbd5c25aeca8c8dc9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '995f619afdef3a8ac06522df11cb4fbef3684afd', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd25986e2b36ab8074111b89929fa46fd623658b0', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '2cb7a9f5b98b6567cb1db6340a486cae0ca63057', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'fada06bd5852b8ea9f16bfea181386aeddb34709', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '2f9e71f49c4d8d09d5e27242e1d2b61668d0e9f1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c18e8e27cfecb1045d654e82368f64b4c5d73557', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '5b644902daadb153c9269051658447d3b8283857', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '5e11ef01255b7a0358bfc01750fa1dbc84600747', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '2409f5b9fe562a8235ae212b9ef58e8f0abdcfbb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '5f1a922aafb0201af163268bb3e95bbd2245bb68' }, index.h("a", { key: '8da995ed72698350f4f363c118cb339f902763ba', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map