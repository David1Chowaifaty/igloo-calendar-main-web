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
        return (index.h(index.Host, { key: '382e60578b39809efb9a216d53d1935596c570c6' }, index.h("ir-interceptor", { key: 'd9a2b487ac3a67afda7db2ffd1a578e0fcb1c9af' }), index.h("ir-toast", { key: 'f07bf61fca86ae588fb5799a1b3128470df02650' }), index.h("form", { key: 'cef6b976e1c52f6ebe99348961f014b86b4c7c70', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'a5926a5b2d6c39c1620d409f115eea4994f71578', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'fdd98d47de221abc5e3e2416d12bde2499fb0972', class: "separator-container" }, index.h("div", { key: 'eeec289c62f6d2385c4b0fab039ea17e544a99c0', class: "separator" }), index.h("p", { key: '176c6fcee21f0bb3cec1b9478616d8e022b00d34' }, "Sign in to manage your property"), index.h("div", { key: 'a8a1c1746d240fbcf8ac8acc1473b41f8a117bc9', class: "separator" })), index.h("ir-input-text", { key: '3f82d5deecdfc801276c61822c8c077de6cd60de', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '46cc65363b4ffa9588fc6fa279fc1b96f9eb45f9', name: "user", slot: "icon" })), index.h("div", { key: 'dfe6be9a2f9a75bba735eaceb24e750b084c9c4c', class: 'position-relative' }, index.h("ir-input-text", { key: '3b703ea511efb239323e3be71a334bb7fb2fefcc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '27839241350c14dd4334bb1029eeead47235005c', name: "key", slot: "icon" })), index.h("button", { key: '49509607cc710d5056c677688d764af689454dd5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '2ea3c0142a9ab950c107a1acfeb5487be357ef64', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'f5bd98f32e840e7870f5db78bcfc2e2b3ac7f155', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'bdd60655270227f61f5a0dbc09f815ec00947c7a', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'd360ccac326564f4f15ff07f1f1bf3c99d8ba014', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '70790fc7a840b0d4cfb0c6fa79dd405bbbded400', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'cc2eae5f0d88a35fdfb52156d14a63290ce7b8a2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'dde47765c428956d9ea27eff8350fd4e40c04429', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '6837ba3cf88da6378daf8e161fe31989d2e44d80', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '8eddaf4d074259be6c600479f88491b3d930ffeb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '00660a288d4cd3c2c0802099e01ce534c7b283ff' }, index.h("a", { key: '7a7c6d3d372d8a088c0c5624899a0f7a305a555b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map