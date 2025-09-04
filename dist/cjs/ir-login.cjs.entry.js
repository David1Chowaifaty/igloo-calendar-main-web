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
        return (index.h(index.Host, { key: '5956d48521340f061b3d49d2c7f08227373f0ed4' }, index.h("ir-interceptor", { key: '87257d42c28fd27cab671b98476e6ba1acbab66c' }), index.h("ir-toast", { key: '2954568ffcc1db06d547bf78a73abe36921fd2ac' }), index.h("form", { key: '801bdfde3c517394de4d5512852b714247f1a118', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '71ea723bcad8a778265741e3d789bfa0090eac77', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '17b58f502399698b378f0db0e86bc9e772122b90', class: "separator-container" }, index.h("div", { key: '4c6f4d43cb6e10f4412dd08b2f97030acf91ea91', class: "separator" }), index.h("p", { key: '26644567c6bfe0af1b8e8348116dc6bc03d5bbdc' }, "Sign in to manage your property"), index.h("div", { key: '4f6f575a1deea80b5fd82f8a6c02854261119a9a', class: "separator" })), index.h("ir-input-text", { key: '69ec151d1b649ae91b2660c54e76a35e715ce873', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '68b779fb3e22bb7d40cfddcb35ab523853c73952', name: "user", slot: "icon" })), index.h("div", { key: '0fb15e842b6d0c590039edc3ff54af965888c661', class: 'position-relative' }, index.h("ir-input-text", { key: '726d3b1061b55b55de7997ba530d70c966473a28', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'c60d83da3de4f5ab716e84c67cdad47ae4d0bf26', name: "key", slot: "icon" })), index.h("button", { key: '1db3c82be06a983b0c159b0f9cad2bb9702516cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'e0860c26e10d0f03e9615fb0d1d682de161ef3f8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '84c48f50ffca31c861ccf3b1617fe066f7108afe', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '540719cd6e277d6e4fbc735feb062d1c82f3981d', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7c54133050992d9c335d5db9cbc9956ce2d536b9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '3a070daaa259047f9122a551b5b5340c67f11174', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '124894e60ca16f5b627d39df08eb05dbd6c7d2cb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '90217dc982fba311923711c9bc783e3c0aff8902', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3258694f84fba58fc81619cb13437fecba420f00', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'fcea81470e07f08553922b571d9e57a43046d454', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'c7e121500f216416273110be5b4c99216498a3a1' }, index.h("a", { key: '3d9628cf05afe6296a6904ab6acb371bd6f02a55', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map