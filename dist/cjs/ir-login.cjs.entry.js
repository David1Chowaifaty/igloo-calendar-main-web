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
        return (index.h(index.Host, { key: '84988a205f678d790bc483e2696492f1dc44589d' }, index.h("ir-interceptor", { key: '925412c7b4ad41ce8487fbfa08bc5f8c8114a1a6' }), index.h("ir-toast", { key: 'b7e4bd3c517f90e864f0cfe360cca8a7c7a2c8d0' }), index.h("form", { key: 'd87b69cd3ec2e2086eebc0a732b57fb62dcee717', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '69470dc37f2f7bbdc9212f64ddabe43a7fa1f4fb', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '63cc5d4fc8b744c3855d56e90c2f9dd373ab1ae3', class: "separator-container" }, index.h("div", { key: '05040ba428e829d664658832d43a63f5925e2606', class: "separator" }), index.h("p", { key: '9252ee65ea649bb5186ac07dbe91f0ce4770084c' }, "Sign in to manage your property"), index.h("div", { key: 'e37bc9066b80031dba3d6de4e5b8a9a877f60c20', class: "separator" })), index.h("ir-input-text", { key: '275d70f22ccec7582ec67a52edd0e6ddcdf1c1d3', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '9ab658c2a724d74f665cac2e1e5fd216facbf964', name: "user", slot: "icon" })), index.h("div", { key: '3f710e8cfba1c674318fdff9b563feb4ac921257', class: 'position-relative' }, index.h("ir-input-text", { key: 'd1aa85baff37106bf7368c1e83841c8386f7fd9f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'ed92e75125d206d5a77d55493ad5fd9746a162fa', name: "key", slot: "icon" })), index.h("button", { key: '315baceac3f965f5a365fcc8af01e7f56ef396c3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '001935dc08b01b963e0626788e4e7e6161983a3b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '097891ca966cc57a826ee610d04de73489ae39a1', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'd77cf595e3c0d566ed07be7a9f4b5af2d9f93014', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '55798daa3fbebf4d4b3fe629a013cac3169881c1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7f50838890f83f4b45b6ac64360a9af42bfd6f10', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '2b58a1cd39a8ffd99d726d2c24f1014231bb3363', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'ad3fe06ac300425b52595de5cfbfbb462272f6af', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '2e776b73fbb4de56bae0fa1c56be5337cd9aaca5', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '41126db4d9c4183ad9471e8c745c488d3d528344', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'a42d8a96018ae91a4cddfed5e8f924974d360091' }, index.h("a", { key: '386f789d28eae89c1267812b821228fef154a630', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map