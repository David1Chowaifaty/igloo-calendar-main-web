'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const Token = require('./Token-a4c2b5d8.js');
const axios = require('./axios-b86c5465.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
require('./index-5e99a1fe.js');

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.token = new Token.Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
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
        return (index.h(index.Host, { key: '8b1e13d04a793b47923903abbc3592b68eedc214' }, index.h("ir-interceptor", { key: '6b7f44e8d52997bfac49e91a0cce9b8a1fd5b5ee' }), index.h("ir-toast", { key: 'fc0f5f48cd3fff6f49abc68b47ddcb7d0b89ab2e' }), index.h("form", { key: '4357d1c13a98fe11a559a91afc8e605aa7e475ec', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'a2ca1103af25cbac25d1420b6b6b948bb5f08885', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '7dce9acefb0cbc3e2d667cfd48f58f7eb9de0ce8', class: "separator-container" }, index.h("div", { key: '4c684fe9d5fcd7247fca571e27de31bab317538d', class: "separator" }), index.h("p", { key: '39afdc5d1f0eec81f49e0fdc414fe96616c2052a' }, "Sign in to manage your property"), index.h("div", { key: '3f2d1f6a8c57b6616fefeed3f0ea463d817cc84d', class: "separator" })), index.h("ir-input-text", { key: '6078ef2a2a259f7c06391ab1e88141413c2359b0', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '5acac34914378e207281aa4dc8588bb04a78a33f', name: "user", slot: "icon" })), index.h("div", { key: '8128e5db4ff5a66ce130885c0a6ee5153ab01033', class: 'position-relative' }, index.h("ir-input-text", { key: 'dc24c597efd4f4a0c55ba86ce680018498a3ff38', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'edd723138736dc9cc9a81adcf1cd6baf39d60a82', name: "key", slot: "icon" })), index.h("button", { key: '9fe64c081ba79158d2255367aa664df50170e7db', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '99441226e63b990632bc6da07903977cb25ca68a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '6b8e51054554cc572cd16dc42a45c443d3743a6e', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'fdd471736bc9db06b63965b71e255311d697445c', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'b9e6ad84aa69ea6819b88e9ace541d15e2cd6739', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'c8545f81fa323155dd639e8870df13049b0592e6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '6f759111f69c1f8074533a4403cd745cb8318e1d', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'd85a9f0efcc6d680351c867af310fd8d1497052b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '540aa2fb99bd373b12cffaaaf5331cee2984f14d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'bfd9ef9679f7bff4dd81c15d77f8278e458ba8b8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '2bb1146786e5dcbdcf1af27b6cc8c0eb3e9940e1' }, index.h("a", { key: 'cba6fe2f7fa95a0d44389022e62075bcd01925ba', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map