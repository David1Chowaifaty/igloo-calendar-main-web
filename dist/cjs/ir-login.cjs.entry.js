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
        return (index.h(index.Host, { key: 'd076d9683f168d928be4304742121c60eb92aaec' }, index.h("ir-interceptor", { key: 'd28a4edd8a9c714b2915b757da309a02feb55540' }), index.h("ir-toast", { key: 'c64c62a41809fe20425f82e3897cd1a346f2f89d' }), index.h("form", { key: '85ae24bab3c31d893271decc8905d3195b3dac1c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'c0a13fb6d2e862752a555d562c9c10131d129b2f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '08dd2ad8154642d7fb6e5f0cdc3ad016b70a91b4', class: "separator-container" }, index.h("div", { key: '9bf78211681cc8c04428b1f398eadd4fbb2fe7c0', class: "separator" }), index.h("p", { key: '71525565a80d8903e97916d314b615e8be0fbdf0' }, "Sign in to manage your property"), index.h("div", { key: 'bbec62a8bddab35bf8e8cabaebbd1904fe87903c', class: "separator" })), index.h("ir-input-text", { key: 'f00cd579b5ac889aeb7da78604edabdc54a67c36', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '0cd57adeb691cb35fc21c3f513e51586f54fa3c2', name: "user", slot: "icon" })), index.h("div", { key: '85d54f25e386131629b73276e4ee1ac3c1fbda04', class: 'position-relative' }, index.h("ir-input-text", { key: '3eb02f954f7c2893f532b0b6f1840f79a5635401', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '34d899582512438ba9bc5f47848a85bcc46b8993', name: "key", slot: "icon" })), index.h("button", { key: 'c5e4d48c7c660c7fc014bbc765af6218eee552b9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '7c0f44b29ecf39d2ccb12a05d53846dd63817779', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd34d9d2e25f64d9b22ea6d9016d30334f5bf06c7', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '39f23591faad200612b3bac91e7cf3e78031c46b', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7f6c68d7b39aae9eb565e55748dfafeee07d1b95', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '1263f2a26bbaf26a2ba4b55943ec72e29e3b551b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '2b258151673c7cb374f9419ee1d0fed2f977f0c0', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '8ac68c81000eb867cd679332900894c7a6f0bb84', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '37112d39b532426e6a63fd1918daf439af70cc88', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '484e98cba5014e2a02653f56f509ecebf00f5c90', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'feddcad2c845820277c36958b5fe32aedc32674c' }, index.h("a", { key: 'b0ad526f30c17575f4312f629a8a693677517a4d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map