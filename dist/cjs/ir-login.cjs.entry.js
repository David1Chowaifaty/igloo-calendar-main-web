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
        return (index.h(index.Host, { key: '6240ec517909d5f482d2658958742652a39226fc' }, index.h("ir-interceptor", { key: '91c4e5d208a070757809872be493a7e1f3d8b6d9' }), index.h("ir-toast", { key: '7414f3ff537fb03b149f9622d7b28c28c0ccabec' }), index.h("form", { key: '514e51e3bc8ab581c70313f70ffd71c968ef7f3c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '75aa67db41649b85539a106abc3be9a6f519f4d2', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '6aba62e7391ea349df00bbc6a07dfa7e5d002cea', class: "separator-container" }, index.h("div", { key: '0f3b681899a7633c4079d47898de3967e223170b', class: "separator" }), index.h("p", { key: '8e73022b84a31d27cb81a35bd989a8a513541cbc' }, "Sign in to manage your property"), index.h("div", { key: '016693443285616a19082e4029848f18452b8710', class: "separator" })), index.h("ir-input-text", { key: '425d35b6992c7bcfcb8b8ce1d887b6835cab68fb', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '2e83ce70674e51499ae34d6c2aadf625145058a6', name: "user", slot: "icon" })), index.h("div", { key: '099c3efb60ecbce3a6491253d8313f1bdee772e3', class: 'position-relative' }, index.h("ir-input-text", { key: 'e9ebfbe8e02378c7b13068d03c24755080c40bf6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e6c94c73b104413230a08d8cdbd39e5ac60b98e9', name: "key", slot: "icon" })), index.h("button", { key: 'bc2898d7113cbd5e3d45289a390472807337f0cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '819dcddfdf3cbc07f845174afa178ac3ca175d36', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '62ce5984e7436b24541072729c9f42975e2b4e93', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '78e0f6f817d5f55ba03c8578b9bf19958b537c07', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '3c7a05b1bd4ff14b826a467d52241074267c83eb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '79c00677fa58b15227c9f1e924da568dd49af939', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '86c2d133bf44a12261ae4c22bcb194edaaba8a38', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'c53861de72c406882e225ec5878feb112791ca61', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '414910f0db1835f848b932788a4723efd04a9d35', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '4ed9f29257b77ca47233e52462b52dcd04a1b454', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'd9c551182dbb33fcbeeb1ba3ed3a76e7382996a6' }, index.h("a", { key: '3f75df69f74904773f2f1518cf5fdb2c31ebaa22', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map