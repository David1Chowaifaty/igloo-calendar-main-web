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
        return (index.h(index.Host, { key: 'e0fa41f0081d6d1b5527f691426c7168929d1961' }, index.h("ir-interceptor", { key: '2cc63f1a25727de59757d51df8d028430e128346' }), index.h("ir-toast", { key: 'd55c3730ea00e2883bc5d930bc7731f11cdf6dc7' }), index.h("form", { key: 'ab323ea3496b44091295cf95c584156c82594ffb', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '01c019593988cd88edebec34aa92ccbbf5a9fa57', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'f33aa99c8bef5c5c504b511d295c14841c7fae84', class: "separator-container" }, index.h("div", { key: '10c78eee2e4636c1912e932d669d4796c7e8cc03', class: "separator" }), index.h("p", { key: '3a42df7f82128e5bb240c11c22b816011de0ace5' }, "Sign in to manage your property"), index.h("div", { key: 'ca53b1195e64bfde62543405e823947f16c1a34b', class: "separator" })), index.h("ir-input-text", { key: '7c6aa3f11dc5d7f02ac9d4516d5c1aa9c7193a5c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'fa27f9d9f581c9309dce9247697e367daab18ef0', name: "user", slot: "icon" })), index.h("div", { key: '8819aea920eed9ebc7d2ff4a81fd64b1971abeb1', class: 'position-relative' }, index.h("ir-input-text", { key: 'ed9198c4f14103a2bf14aaa45760160d325805c2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'd9696e37f55418230f97e82f906742e88cdc941d', name: "key", slot: "icon" })), index.h("button", { key: '8b7cbf65746a5a6828a179a08daa4487638bf5c6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '6dc0892d56a01833f729307f7006b32d78c19934', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '519fce65f50de19af51cab95410efa6b1044493d', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '65e7bf796095c2637a1832197dc6fba7743327db', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '995fe7d7e487e2513dd85c809a25853c8395233a', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '81eb6facf653bf5698aa445e6049c479b9778c46', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c5b6528646775577e593ad6f5b19873146ab5bc7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '627099b8fd16d006bf9fa2ea7d998ce445909917', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3f6b496692a0fa7334b34322afba3175467a01d8', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'f0f7fed65f9e97d4dc2fe81a7108fc780886963e', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '39f8aebcf50682d4dc01b6248a794d5e99cdf6e0' }, index.h("a", { key: '00989a5b3624feeb558fcfd19e723bd98c65db27', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map