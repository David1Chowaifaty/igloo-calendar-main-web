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
        return (index.h(index.Host, { key: 'a34580bc827b212e7835609ea862eb79ac50cd3d' }, index.h("ir-interceptor", { key: '9d7e1773f1679c7eaf71f21d72ad484e4fb7475c' }), index.h("ir-toast", { key: 'cc72eea02271906ba4ef7a83b0b47f6436563fdb' }), index.h("form", { key: 'bd798f72226086f75d32c7821b74c4c8b19f6058', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '5d408bbf17389d65a72f73d00c3844fc04267f6d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '726623aa6b5a884b842f1c20e4f158c8ea15293a', class: "separator-container" }, index.h("div", { key: '63281ee52e993eaff6b7104a2b0235f3eb53ebec', class: "separator" }), index.h("p", { key: '97df06735690264c1104474d64df4d65cf4a6d5e' }, "Sign in to manage your property"), index.h("div", { key: 'c47605fdd8f273ee659b232342054a07e86f786b', class: "separator" })), index.h("ir-input-text", { key: '2efaef19b5083af81586215a0f4e7ed924ff1965', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '193a4e16d3a666b2ad6f2c82630e276c2eaddce2', name: "user", slot: "icon" })), index.h("div", { key: '63951ae2e4e9f7ba53bdc709df14544d10510de6', class: 'position-relative' }, index.h("ir-input-text", { key: '555e0d0ec972f8664bdf07ba5a6c7a9da2d45ec3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '0f347bfc5aa838cd5204ee6eeff33051c0148a7a', name: "key", slot: "icon" })), index.h("button", { key: '9a04c44a70a7b0eddcd5c4ac09fa6b1f8158f1ce', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'a2fa60c22dace9450a4eb6ef4ae28482bef4d4ad', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'f5c9484537e27e71c1f5d39d98d2506b85ded9ef', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '469cf23d1dc27e3b1735b3d267960871e7185fd3', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '610937d9854043b4a4b640041c59d75a9c900358', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'b883938b377ae8debae64fe2dd2f984c543b9763', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'ac651cdacc014eeb9c32b4e2e9e165f13a617721', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'a91eec3b7b9956c050a6c9008731ac021d0b8924', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'c3a0b268f18391ad9721c08bf218de4d74ed07ab', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '20bd69c63188babc757ea04b62c38725def1cf1b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'ebc7f482848f45cf791fe9650a8a9f1d5423ab8f' }, index.h("a", { key: 'e32ccf9c5381386cb24b8afc01445685dbb0d898', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map