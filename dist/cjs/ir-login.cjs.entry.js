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
        return (index.h(index.Host, { key: 'fc157edd3061a3232111bb83b7a3bd663a4236ac' }, index.h("ir-interceptor", { key: '59f6cc81b70fbe80f488458b8e1ec7367d7a8cee' }), index.h("ir-toast", { key: 'c0726a7f1b66575d4fcd3590f584bb764654e5e5' }), index.h("form", { key: '49c8e4380c0c57d61206eee5ea9f6cdd07233d90', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '009f1102049bed7e17d1f1345e83efeca668f190', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '2abc33d5ed424d70043d53f995c53799b9f0ba48', class: "separator-container" }, index.h("div", { key: 'd52a1bc1f53e1c21bbaf58cf462cee7270aa5ef1', class: "separator" }), index.h("p", { key: 'edaac45d2bc189f26fa132aaff0e1ea74e1d3412' }, "Sign in to manage your property"), index.h("div", { key: '9f8d8cf34b104dec880ead49717aa392243831bf', class: "separator" })), index.h("ir-input-text", { key: 'd39018bea607e0724259b5a856d7268fcca9503a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '6458ecfb86caba27b5f07e57a440ccb8a2d73dea', name: "user", slot: "icon" })), index.h("div", { key: '723338a7233fe9a0584e1b8088dd61972a37956d', class: 'position-relative' }, index.h("ir-input-text", { key: '0ca0393d576a7e218e2ed07879905ee22b73eb96', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'fdec0ab519ae32882bec1c1332a1d06b49f8dac6', name: "key", slot: "icon" })), index.h("button", { key: '28af76b841015fda1ca21c28ca18aca672322af0', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '99d1d59d4a4066c87e7333296d0276047b619e15', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '3e80766b893550ad3680ab4f0c39cbaf9cc4cb64', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'acd3a0cebcb5b68dfe361aa0f04da07938a7a06b', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'd4bb2b22491ea0b60e9f8774a93d94e442df2625', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '83a649116f1d76b2820229bbbd7546d36c0cb170', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c5058f32872eb50062296c7d96019d9bce6fc936', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'f96e856e7d0435f0007b990810a25b1673feeb03', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3b5a8341f3f1952fef741d3c239bf344d48aacb2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '9af703325837095a7a349d3b8d56dac355d525b9', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '2d9adcde7cb7c55f06849ca9f3695d0b4ee3833d' }, index.h("a", { key: 'd16df4e9d2732c584bc17af8e9f732033fcd7b12', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map