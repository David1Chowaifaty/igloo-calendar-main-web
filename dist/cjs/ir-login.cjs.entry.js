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
        return (index.h(index.Host, { key: '0a205026bbdba66789553bda019dc8e619688bf9' }, index.h("ir-interceptor", { key: 'be59c01fdbd3d54afec16d8cffb1bba38ae4b2db' }), index.h("ir-toast", { key: '3928f50b9a8087ef819450de456afde29ce33c0f' }), index.h("form", { key: '99736ebeccd2d7e85439db74c84f7e98c9571c49', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'd7d467edfb48266cbca379a5bcd01fbed7cf05df', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '44e90f4399ff594d546490851b34c09f835ba790', class: "separator-container" }, index.h("div", { key: '1e57ce058040783b23beaabfcbfa5ba4018d3210', class: "separator" }), index.h("p", { key: '4d18ce00fe56245f6412ed2342eb1d3cf6e2e0d6' }, "Sign in to manage your property"), index.h("div", { key: '74e5492195571b4b04b6a0ee0213e4f53c53c7f0', class: "separator" })), index.h("ir-input-text", { key: '89f6a443def7b73f203db4d320293dd791855b19', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '2e91f5d6b4a3543700425d2cab5a007aea271770', name: "user", slot: "icon" })), index.h("div", { key: '76be15203878097bd317c344ef292a76b907876a', class: 'position-relative' }, index.h("ir-input-text", { key: '3cb490a8f6a8f79364e3cca60c85830f1f780ba6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '39bedcf0aba67b8030176236c62e36ae44b432b0', name: "key", slot: "icon" })), index.h("button", { key: '9ed3d1b1375a49582de2657c85fc32a61592aae2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'bd1665a7c2cc51ba1e30fc7fd35df585b82c2e69', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '53fafaf8ddf4c9a783935e3d21cc2190f1d9f276', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'e9b01c6cf0892b94a9bfb218dc32736e58608c83', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '709a03f9036843b7f179cbe97837288bc5b4c213', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7859f3396fdbe658db16a6bd9759fc607d486078', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '7c4510b218b2eaf0aa61de391c2b53d980791759', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '10a6d7e2604d6a42ff51e83422c3c5500b95a255', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '86ee2bc96f6850b080d82e92d228ecf1883d773b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'd3fbf88be84a4415555a9e9f2c928414941564a1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '0844fdf762f2de3dad1682b844f576206439925a' }, index.h("a", { key: 'a3eb30305a878b48ceb000eeaece00f0a767c585', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map