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
        return (index.h(index.Host, { key: 'eb8ef8e504a78c9e7566242221e68335a4bf79b0' }, index.h("ir-interceptor", { key: '0492c574d3d8c42f87ac32a52bf6d1a25249864e' }), index.h("ir-toast", { key: '5d9f03e86b2b475eee63763592a495dfd8aaa632' }), index.h("form", { key: '59dae93170170bd78be18a6ec70ee9ad333dd050', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '1d11bfa5835f4df0927b6cb3af4f2ca915cb94c0', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '36a8cbe2d9085f3751357eb725e870e9d425e323', class: "separator-container" }, index.h("div", { key: '4530c45d6399b66fd1ff6f1a97c6753960ece171', class: "separator" }), index.h("p", { key: '4f371f45ba0b8149465c81076f28690888339b64' }, "Sign in to manage your property"), index.h("div", { key: 'd5160589d80f203eef12f85adfa122b4ae7a0e81', class: "separator" })), index.h("ir-input-text", { key: 'da1702077a1e2a0e767f9eba7497143dda4795e0', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '547f706093a10725b647668563123c80bda89f89', name: "user", slot: "icon" })), index.h("div", { key: 'a90387dd859aa3ca3740c4eacb09fa362b7fcd94', class: 'position-relative' }, index.h("ir-input-text", { key: 'cffb4f36a97f887569167ce802745ad014644648', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '9682c6de48919a070a1576cc3f685339fb1d1081', name: "key", slot: "icon" })), index.h("button", { key: 'dcb45a4bf9bfb50e8b3f073080cf69618915195a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ea92106f3bea0cf19d733c9978cca393f8bcab01', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '718a3965eab2d2eb4d5dbfdfbbe3265e5ad58dff', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'f58e7f5412ae9ff645c03c7f73ee53e5944553fd', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '440010867839c9c3eb5a8a9c9911cf031f9e6891', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '2da835f54660fa17733110b0210fe0b1760bc767', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '608b8d58e0105766c3997b2e5204344bade8876f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'ccecc6083027afedb4e4971819bc0b989b32c0c3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'f117fa38309240d19b2252e838830e5c8de45e26', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '918864ed53d63398e822df5b1c8c2eacfda6c867', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '649ab32d693342829a7fcc982985bd49e4cb7cb6' }, index.h("a", { key: 'ea87713765e9fafa8eeb33c62bc246f65b66fec6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map