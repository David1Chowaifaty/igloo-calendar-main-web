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
        return (index.h(index.Host, { key: '459ca4f5ca9d65b34c8f349512937d3386f467c3' }, index.h("ir-interceptor", { key: 'ee6e332b52b265bb5d0fd02a2a9fdf6434f01bbf' }), index.h("ir-toast", { key: '30fedbe45bb807caab82248c52a87d26b316fa46' }), index.h("form", { key: '0ce8e14fcf3943578cadcb567db0b3c8a379e229', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4ad7e3c497aeeac60a02a693137747da7ec38b0d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'ae1996a1537e2e1fffd06ed14910112e2f0db8e0', class: "separator-container" }, index.h("div", { key: '28645c611046ed8855c6b7816e67258bd9ba8467', class: "separator" }), index.h("p", { key: '5e6e3ca387177cf51e0a6313d97ea825c4b9ebde' }, "Sign in to manage your property"), index.h("div", { key: 'f9dffb2a851c4da1d76e6c393cb6a2f0056b8ea3', class: "separator" })), index.h("ir-input-text", { key: '6311828c8b7a21354d5614bed3fb333dd9a25ca8', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'a4569c428dffae4d24c8e628c2b6b5661b53e733', name: "user", slot: "icon" })), index.h("div", { key: '45c7691f6b03ad977be3ef50cc92618166734ec8', class: 'position-relative' }, index.h("ir-input-text", { key: 'db18c4f2595e78af83bfcdad9ea4cff3d68a6465', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '58d576c93dada944f747113fdd6858892a5c5862', name: "key", slot: "icon" })), index.h("button", { key: '47f092cf1511e42d088f080fb43af749e4ad83f3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ebebe5fd31b1f2abb50b9e043a530eebcde6afa8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'be9c9a84c9b8786abd1932d10370a21486e1282a', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'af46482e38cde7642edeedc90823441970075759', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7e0e20544d62253d16ffc34e4bbfab114699ce02', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '37868c86c47c72bb8bdb6ece1ea0e7f1d9d2f4ad', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '8522f9940bdcf2b724d4a4d68d37f078b14513c2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'c91d0b4580d13856293749903b756f2d243a7971', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '1641bc742279950560064fb3e433100402477352', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'c31c82c9b0db0e904b013517f61adeb9b7685a9a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '2967b1a5bd421147a2a6d4dda4414b9f5d64bbef' }, index.h("a", { key: 'fec21631c59a6107ef44af813e9dda212f71b977', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map