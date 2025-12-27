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
        return (index.h(index.Host, { key: 'd3bf8754efb1395ab5fcd69783ae3cd5276d14ea' }, index.h("ir-interceptor", { key: '81030228bb6ff7341495a876a048c35456ddb0ad' }), index.h("ir-toast", { key: '864f4df5e6b59be5ece6657630fafddb00c24448' }), index.h("form", { key: 'd7e9edc57855d68401950c3753f7f9bfccd4b49e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'b277d2a8f12c4fce41fcaacc34bf06b6d514c3b7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '020aa9169c50adbacccd0c048f10f310e7092bde', class: "separator-container" }, index.h("div", { key: 'c72a623574a672e2fc955054c853bf7ec583502e', class: "separator" }), index.h("p", { key: 'c74dfeae14d891ce822b3ed3ba2fe1c4e960ec94' }, "Sign in to manage your property"), index.h("div", { key: '156c6d0b8d3be1c0d1acfa5d34297da5b7963189', class: "separator" })), index.h("ir-input-text", { key: '122be99b61e13240ce8fa7ff744aee1f7b3507ac', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'a3ba3c54813b84e554b9b59cc008cd1cd279479f', name: "user", slot: "icon" })), index.h("div", { key: 'f539194e3db93be1635199815367779e531f1c9c', class: 'position-relative' }, index.h("ir-input-text", { key: 'a55dc16d9b5946127ff9c64e65ed00c13e90f80b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '89b2b0fc2cc20e7b56a7bdd7265bf858b8cef923', name: "key", slot: "icon" })), index.h("button", { key: 'a229da3de6c2578d13ec96d6870ccb454151aeb5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '091cca0ca0343af1e858fd972ac3554be8614dfb', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'e60aef70a7e547364a372dede2eed92148f4a8a4', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'b72081d78211d8063fa70a2fbf64c09b2c50c500', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '1fa6896933c5657112b1063f9597ed85a3a4ea29', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7328e2ff4d281fec1a5bea994b77ecde4f5d3094', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '5c13ddc98fcb6cb3289cac0595ed6d4f84da85e2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '5201874330460fb96b01d3f29e9a1b613fde8ad2', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '185adf67eb5ae5f84bcc7d97b328e8f10cf27545', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'f403808c65db037fc45dfa4eb2f5d3ed56f0bfc1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '210dc461333d672d4ed038e805d1cde2da6a4404' }, index.h("a", { key: '159ae16a371ca139f57caeeecca9bf374382655d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map