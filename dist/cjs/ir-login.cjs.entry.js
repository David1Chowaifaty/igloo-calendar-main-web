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
        return (index.h(index.Host, { key: '6c942f7969d8e2ee132298e49a8e6384048ef076' }, index.h("ir-interceptor", { key: '5691b895ece268e7baa0f175fdebca0bb574d051' }), index.h("ir-toast", { key: '496bdad68c9deb181c54633ddc7bbe7815f28c37' }), index.h("form", { key: 'a11b23fea9c0a56a22e80a6467896413a4d49eba', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'db58749c52d08cc6d8c9f5f1acdfc4f90b083118', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '12875469b03d34bb9219aaf97877cd64aea6e155', class: "separator-container" }, index.h("div", { key: 'bf776151040d3872753d47b9929c2545372b4595', class: "separator" }), index.h("p", { key: '388baea714815738350819c9d52df27a46eb8058' }, "Sign in to manage your property"), index.h("div", { key: '2c2807e3308689971f0564ef7b9d413bb028d744', class: "separator" })), index.h("ir-input-text", { key: '745eeef087f12130ee82fd3ab016b1e3e902b8e5', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'c3102c57708f6d6df3d16a28ca68879e1a7ef9c4', name: "user", slot: "icon" })), index.h("div", { key: '293dce5e7c5e1694c861cdfbba0f6e553ffd0787', class: 'position-relative' }, index.h("ir-input-text", { key: '63c985de22f572cdd812eadd6ed607591cb44322', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '719512b09eaaa4ed74e51d3f83296726d72dc7ff', name: "key", slot: "icon" })), index.h("button", { key: '62a7f938bb82b4d84e451024b02d7d6eb544deba', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ea91bcc530b964b7b356a656bc8aeb1b4fbdab09', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'cb4c94e54f55ee8fae0a268e2b7cb072e3b9b885', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'd217df5c9ec304dd1db78f984f89b0b569def5d0', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'fd7025d77516ee4bd94f1f9059e0b36190fe863d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '76e1c3d0f5c569b8e70880f83c5863615dd71af0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '8ba5e7be7e40d95920fba157fd3f306788b80de6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'f00c5945bf72e785fff6287126fff316eed6f20b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '7061be5a1af70b83c2e912e142dca3ae869a5077', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '76abca53a4aaa4423e11a92542e58f89b67d8d75', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '35524bd4efd024cc0cf99b66707acb8ad6369258' }, index.h("a", { key: '685df4175c441e7cfeb0c57601e4dc73fc7fbf75', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map