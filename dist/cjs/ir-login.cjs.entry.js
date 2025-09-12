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
        return (index.h(index.Host, { key: '3e448905bb4b177e80ddc5456446bbae792b148e' }, index.h("ir-interceptor", { key: '74f9c540bee54afaf549ae2dedcc482096e17a63' }), index.h("ir-toast", { key: 'fa99e6aba9717f70af5b6e9ebb9df7d74da86fb8' }), index.h("form", { key: '73e09e11ec66b32c0e4ed259b0c23179b8121318', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '33200b9275fdc95d366ab50b524a1ad4dc9c4054', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'ff989f95b2285584c02d65f23ee5c7f112f53441', class: "separator-container" }, index.h("div", { key: '6f6e43bcf5e7b1c3d37c79845be49db0a45e7ce7', class: "separator" }), index.h("p", { key: '4d3a2133ae8dff79e9079886da3ca5e2cd74e6cc' }, "Sign in to manage your property"), index.h("div", { key: '4adb38697d08e2b41635927bd9eda1f6d8edf46f', class: "separator" })), index.h("ir-input-text", { key: '695be85263d814e31025b54e3c4af59ce1a960d1', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '09e240e450fd0143c1ccf0e0da3cc5a9f8020e59', name: "user", slot: "icon" })), index.h("div", { key: '21642ad78dc010ebb03c1a1a9072560b5cac71ff', class: 'position-relative' }, index.h("ir-input-text", { key: 'c34bc5a1e3e952e9b95f697c55588fff1ed9cf52', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'b44d684a8dbce4e0801b7a63ecd46fd4cc67a227', name: "key", slot: "icon" })), index.h("button", { key: 'c02f9f3895b412ae1e9058a9705ba07cdae6e02e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '2a39a9eefecbaf207aae350615abdd3cee2d3cdd', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '565222f189fa5d402ff97e4f1dfd6da7051d3f68', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'c211598273f705638dc75db49ce27e7f3966d0cb', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '3a1f9a343ae9514f94957503162fc03168d32944', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '27053194d7bd25916529e59bec0789fe44e6e932', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '90ea5e4b040d1b9347bdd7f07c680e1613603cea', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '30ac2bdb78858178d3e7b3c9fa822290bdb77897', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '36918eb8f7341c2e11aaf0044139034c00010b6f', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '69cd50b05a360e460337821a7c38909987ca1acb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '231848519e81381fb2c51d65c13df28528cafd3e' }, index.h("a", { key: '2ca9dc0f4ef0a962c89579bf884c2535da169496', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map