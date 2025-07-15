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
        return (index.h(index.Host, { key: 'a757d63b922dac5572314335bd21931b505a12dc' }, index.h("ir-interceptor", { key: '50665284a27bb2d398b73ba1dcd4860f5dd1fc9d' }), index.h("ir-toast", { key: '25d27f35187389aae242344461486509b0b166e3' }), index.h("form", { key: 'a379b67aefeff94568f9d2eee443a0141922f950', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '5c604a380f3bda098264ed0fd6a13a322e94c57d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '3582b4efe904178ca335e4b64aba604071f3555f', class: "separator-container" }, index.h("div", { key: '999b40f0cea9d3685b1c52373e64aeeb0afad6b1', class: "separator" }), index.h("p", { key: 'ae7717006a5227b8451e8ed801002d88dbdc1a43' }, "Sign in to manage your property"), index.h("div", { key: '50f6aaac3c9f2aeba9b30f4d900edd546437ef60', class: "separator" })), index.h("ir-input-text", { key: '304b0aed8c7147a42003061746bb9fc27bed11bc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b32b81807df5b668a440f79d69866db62ec7a1f5', name: "user", slot: "icon" })), index.h("div", { key: 'f28cd9f7525c68a7640d83e2288a5dd4e227f173', class: 'position-relative' }, index.h("ir-input-text", { key: 'eb6c324dac9b756c6a803867d66f9e7525301b79', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'aac11576538c3d5cd249a825ac00e100adb45dcd', name: "key", slot: "icon" })), index.h("button", { key: '98ecb8b06d060b64c142bf43037381b70dbd011c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '968744af28d27e1091859f50ba470964b5a753e9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'a8d52b97f92a8ebf0511986bfccef377c21da0ae', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'edfe7ab569f18e948a9b2d6ebe96033ba0fe1b57', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'abc9d32ccf207c86781bb67cf539d3b9fa286431', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7bba69521939bc74b7f575a8610cd9a937d4bdbd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'aa84f6fd5b4d552353e23f7e552e132186919f3f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '6cfa1b3fbedbcc227f4eefb09bbb300b82182271', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '4449d689aba4959fa35e516cf93a32fde82b9efc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'fe39d623945157ded3b0a4951c1ca78af274cf02', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '6f8681a494877e5d218195abd6c210bc10401cbd' }, index.h("a", { key: 'f4433486ccb49aaec9eb4f1194a01ba4ccb1bd6d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map