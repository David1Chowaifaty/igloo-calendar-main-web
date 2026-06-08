'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-fb15e0d7.js');
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
        return (index.h(index.Host, { key: 'ca24fb7142fc8d191c061a713a92683e0314c6e1' }, index.h("ir-interceptor", { key: '9e955b8bd704ac8a46afbcae2203c3763cdc2861' }), index.h("ir-toast", { key: 'fa183955acf01c6e6814d41189f2479f428223b3' }), index.h("form", { key: '0b269dad242789a4892a2643724f1a45eb11f070', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '581600024df40ea43ac3ec91e1613076f89f34bb', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '77fd23f7f283d34d33b32e3d9f0ebc4442ac4b54', class: "separator-container" }, index.h("div", { key: 'a38c792a24e2ebb3695c579ba10de35ebd9429da', class: "separator" }), index.h("p", { key: '183d6e3ce7d5898dbc99cba6e9333baa70bf3185' }, "Sign in to manage your property"), index.h("div", { key: 'ff1bc419845e3681b663a8989a9a0da62f3d567a', class: "separator" })), index.h("ir-input-text", { key: '5d9ca69352f76059f22e9d699fd98cf00f303495', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '14098419df548ea16dfcf4d01b44f8769030340b', name: "user", slot: "icon" })), index.h("div", { key: 'b7bdbcd2840f05158a0866f645103705ec73e6b8', class: 'position-relative' }, index.h("ir-input-text", { key: '353f83fda711aa906ea7e9f333bfab06bad1eb04', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e8f791efb60e70ff714e4f72c930bbaf980b113b', name: "key", slot: "icon" })), index.h("button", { key: '28db8d736d894c889e382e1cdfa98d1c09b094ad', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '823c0c0dee891054f1d10d0e6cdbd73f47eadd51', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '302340f413be02e4b65c92dcf4fe43efb4bd3b84', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '167bb840fdb62cff06c6e51a53d0c9ae9f845aff', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'fdcc9e414fcf3bb7fd735c3c171635c70d04a7bb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '6293c2d6b1b895da7bd21a8af9876e98547bb13a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'cea5d44b84ca9a1fa9c865f0c98d8ebe3126969b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '50eb695800e5da6a116ed2bf9f9749d6c01f428a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '2d76c05b4c81e078b2fb95382007044f7d774088', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '7c7425342bbcf93cfa689c872e1c7066762165a9', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '7b4b56dc7a3b25de5df5b5c49676bddc0a19c562' }, index.h("a", { key: 'b80f6baa50e2a0fc9cf50f722df97db52d67672f', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map