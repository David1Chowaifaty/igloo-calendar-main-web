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
        return (index.h(index.Host, { key: '05b4bc1b059a92a9a6bfa01020185a4ec273f5b6' }, index.h("ir-interceptor", { key: '3f77233a7d0a4293342c5cbb586a6b35dbd6fb76' }), index.h("ir-toast", { key: '0cad1aebb634dbc562dc0833f39bc1d2b667da10' }), index.h("form", { key: 'cc8db7fc2bfba5be441329668f80000713475fa6', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4e80cb0699f8858f7f73d2368b05220952bb9997', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '1c9051b9530587c6433774dc80b5915d0e5adc19', class: "separator-container" }, index.h("div", { key: 'e730bb62143795091a3407fc6aa8205caed56402', class: "separator" }), index.h("p", { key: '62793dfce39cb491caad562b26aae2e60f61f5d7' }, "Sign in to manage your property"), index.h("div", { key: 'ef4e3705f37641dcd3bdae82c536baaf21181d66', class: "separator" })), index.h("ir-input-text", { key: 'ceee6c358acedadc9764f6618f36822a9ea497f9', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '4adbd1e74a39511ff5717c48c76162ae619a4349', name: "user", slot: "icon" })), index.h("div", { key: '7187ccd05b78c20be6758225b40fcd0200191151', class: 'position-relative' }, index.h("ir-input-text", { key: '209d4b16beddf2649f00745f6506adebc9a5d525', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e8dfce084849b5e5ff657f1aeadc1a94accd739a', name: "key", slot: "icon" })), index.h("button", { key: 'abe7050828f1febe52f08f4582cd335a7d128ec2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '2cc55412e2f7f028c254cc12fe065bc22edea227', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd906125bea0196e546c96e1813a353d353af9e86', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '84e4ef1b4910a9dac9e037f16b8d3935e5fa58f0', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '28bcd2a8101f5bdd3cc98c07089fbbac829b0267', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '2b9d6754c6809a1b39c9b186831b7bedbb7aa23d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'af51db7f23531ac7bc8f0db7681992f31310805a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '1fc3bbb4392d2812acb1a65c890d6291ec588fcf', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '8b0cdca7306a0395575c4e63dcf419ac39914f91', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '63ad0dd68e48e02f504bfd0dc2cca19f0ec04a2b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '501addf53c88a367577967d86ab7d3a8f47ad667' }, index.h("a", { key: '5b91a2353d5969b4a801eead6136b21f25f126c6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map