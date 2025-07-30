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
        return (index.h(index.Host, { key: '5b6d2d6a18d92a23a9c7c56446149950f6dc8b35' }, index.h("ir-interceptor", { key: 'a52122f6dd2222385c39997085909bad0476b508' }), index.h("ir-toast", { key: '9a0a715a3f78bd242b375316094167efb1b359ee' }), index.h("form", { key: '67eacff7918b15517c502c5e2376efabd1449a7c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'cc34a131345974358f8b38aedfc9f2aac7ff4dc3', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '56fdecbe39f98a69e5b5a6e371248bfdf1c4c9e7', class: "separator-container" }, index.h("div", { key: '76a28e672b7d33e1913969b7187621379982140b', class: "separator" }), index.h("p", { key: 'c0bc35c95af8c26b44c5ee1611e53544b0bb5b93' }, "Sign in to manage your property"), index.h("div", { key: 'bb3133d058af37f8cfe1f5b2466fb782a5a49818', class: "separator" })), index.h("ir-input-text", { key: '6184b94fdfab05210fa747364d615244c53109b1', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '2947c164e4a916e7c5e0f04b7c8b3922af223dc1', name: "user", slot: "icon" })), index.h("div", { key: 'b28fba44501bc1393f075f551a5d615dd415f115', class: 'position-relative' }, index.h("ir-input-text", { key: '2e29b59da083bdba74e2ec68134104ff16eb18ea', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'b2c72d80c650981a46b4ca0df7258f3dc8795e8f', name: "key", slot: "icon" })), index.h("button", { key: '114168a07c8a7a53443ba80b36d87a85afd0c72e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '25e5b8a584f1c45b31dc5f3c6a81cac431a9f69e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '795c34da2e40425f4b08d2965363cde814a90d98', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '3f455011580500e7210ea1a82cb2733e1eeba029', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'b378572b432fde99eb8fa64eb62bf927288cca27', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '1212be311a9907fcd8c3d5b1032f8f5103521c2a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c9c31cbeeadfcb1c9a0a2d00b3f121bc69f904f8', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '260a460d52260bc613d865ff2da1d6f33b84aacc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '6ba7a3cfb15fb5d59fcb377a8a00c72351901b17', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'f273a66c59a7816e784a8321a09e48c43cb838ff', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '10c748a2d2349858720b105ca8e9bc7ed8c817e4' }, index.h("a", { key: '16745fef9341ab2fb86d98979d1f82ca75d4303b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map