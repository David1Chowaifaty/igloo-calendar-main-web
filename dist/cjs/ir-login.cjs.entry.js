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
        return (index.h(index.Host, { key: '9a96cf399ad2bc5bab55a8b864a8c0c27afebe3d' }, index.h("ir-interceptor", { key: 'b895fc49be01d67fd362b50275dc9ca425cf53e7' }), index.h("ir-toast", { key: '9f30c92812b45f946babf4fff567465171511cd4' }), index.h("form", { key: '1d94b5f491e7b57ae07ac0a62df8e3b9723e60fb', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'fad8e657e3827d1ab7ebc59ab4791b45300f40b6', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '553f7ab43f15e8e4f4eff1fc491cfdcd92f4cbea', class: "separator-container" }, index.h("div", { key: '980c665dbef89af14e47bdd731dcee80a26716f7', class: "separator" }), index.h("p", { key: 'ebccc88f5038663ae15f1edaef0e202e2f7d5fbe' }, "Sign in to manage your property"), index.h("div", { key: 'd16c09ec83836a4ce0385c2575ed36afd64e6259', class: "separator" })), index.h("ir-input-text", { key: '8953157ac52fa2a2c5c73b09d301386359692c5c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '573a87b4f021cd24db18329b1d01bb10701bbd55', name: "user", slot: "icon" })), index.h("div", { key: '46fba5d17f2431dcfcd75f61c63f06a363690666', class: 'position-relative' }, index.h("ir-input-text", { key: '9028e8193bd0a2bc3b961c9a22f7d4724e5ae79a', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '7abf87bfd12cca96ea3b0fa4dad2102ba9af1f34', name: "key", slot: "icon" })), index.h("button", { key: 'c3ce2aa11f61c1c2b371f043fa184c551bc4d2d0', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '9329492d0a424d7aa366e72f416d92dccad6f23b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'dd2d7ed5d37d828c80125adb7149a834a9aa73db', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '05bc91fe18746e4f8fef56527d542b54ee2e6b1a', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '76c55d34d2a46fbad8e7c6b4de843760d22540ee', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '5552967413386cf35890b653492d514cafb8cbe7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '1b743208d4aba122151283bbd6d1e1688b49f6b3', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '3b962e2d655c7216a6e3687d978c70143b9fb4e6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '15330e338ce9d933ea2beeba50f88423b257cd8f', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '4fe3792752a3dc9fa2725175cc36127d407e09cb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '044e744bbf6cd5ebc470af9478570bbe9de32813' }, index.h("a", { key: '38ab94181d21a393864255c06e9e7c3aa75b8e35', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map