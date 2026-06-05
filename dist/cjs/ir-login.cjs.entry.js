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
        return (index.h(index.Host, { key: 'ba9dfb3f82d3f7cfdb9371341f76ff77db039b9b' }, index.h("ir-interceptor", { key: 'aac7471c3a22696495bf5397a6e1edea4b011f77' }), index.h("ir-toast", { key: 'a026a9b3e8b4539f5728116b7a0d73396ab4d6a9' }), index.h("form", { key: '3f31046848a1d9c1da62e9e415e83b3b310d9d42', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '30e0dee9aeaf2082bf5327d714fe2bf1c8a7f4d1', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '476cd986f09f4a04c839fbdbd0cc1db180cb5d74', class: "separator-container" }, index.h("div", { key: '12eeced3eca1c9d31cf5ee5e928fd0552514485b', class: "separator" }), index.h("p", { key: 'b5e1816494beb6359c2e6cfd24d4dbf3bd6abbbd' }, "Sign in to manage your property"), index.h("div", { key: '7fdf3399843174b5f373d577eb1487ee7db96bcf', class: "separator" })), index.h("ir-input-text", { key: 'e77b73589f9655ae02ae3985fad21db16528d560', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'af1d8d7aa4e1800f727615e4d39060e11f1a9e46', name: "user", slot: "icon" })), index.h("div", { key: '022ecb6462b408e33cb43eb432ac376ddff4c4e9', class: 'position-relative' }, index.h("ir-input-text", { key: '9a007e1dd9ea211eac03153a1214d92dc69594b1', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'eebe8d883f1b3ff9d2a33c91a37d302287bcc970', name: "key", slot: "icon" })), index.h("button", { key: 'be2e0d86a3b99deb475b0ca71180c7fff32ba69b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '3e20f18a7a2392e9ad2a2d0abcf4f188bfd0e660', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '768a1c4177ee0f9486933cb410f17bf4e45e4f85', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'f08da3ec7f071fc445fb5d572c8309d795114bb1', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'da9b889e29c46e855a63ca557fd7ed5a8c550de2', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '9bc1a4b3715a1cfbb7680bcb72c458fce6833bda', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'f4e0c3a581ea084bbd5f83312086326d55f5a039', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '952f20951f2b4f54b99d8594699dd372c51f4aae', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3ae5ea30d76de3677e97f355ab959b171f3bab55', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '8daa8811adc3c3b2f6e2251ced9d7f56ee12da53', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '72d50f757f2cb7ba3cf12e103a036b82d264256a' }, index.h("a", { key: '6e9156a22ac4d791dbaec7bfb7337da987c2ec75', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map