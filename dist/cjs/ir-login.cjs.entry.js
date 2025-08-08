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
        return (index.h(index.Host, { key: '6d90d28640e3957a156929c9c6d6a39aa0561540' }, index.h("ir-interceptor", { key: '573ca34ba90ca16977c40085dd644dab50f03023' }), index.h("ir-toast", { key: '5777b3b464e11c488547960ccaec92fc59363d17' }), index.h("form", { key: '8393c1fa0b4c5db54fb0ec5d3749f92f81e76622', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '8dc7eb68c7b8f3bec46ed510728f2bbdcd607659', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'adceb411f18fd6c7011934591cf2a372eb59578b', class: "separator-container" }, index.h("div", { key: 'f49d28bbc93cc53835a9af9db8617a843ccbd17e', class: "separator" }), index.h("p", { key: '4810df5b9594cdb24e3a54a9a7dd4ccecf82e4d0' }, "Sign in to manage your property"), index.h("div", { key: '4429070fc67b41bb8278ae9635839e3548e2412b', class: "separator" })), index.h("ir-input-text", { key: '5d8f9bdfc74645ef20b68c25db0c3b2f561c5609', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'f6004365cad9ff822dd7b28ad101fdd75abb0080', name: "user", slot: "icon" })), index.h("div", { key: '0cc4639531ffe81d83f59a1646a2208488a1d8eb', class: 'position-relative' }, index.h("ir-input-text", { key: '66ea2eec60eef78bc87f6939c37809382d5d755d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '1e8aed3e6d4a7c9aa595ab113138bcf0d3aa388a', name: "key", slot: "icon" })), index.h("button", { key: '74b706de7eac7b8dbbeeeabea2ca9377d8e932be', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '694cb2b5455a48b3529add306120d1fd77c52717', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'bee8c417a9fbca7497a78c2518736ef8151a3d2c', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '54ce9fd8aa461086729c7348bca6646295c9bcdf', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'a1e9220f34b17980440c16d020c8b6b3903769f1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '6abefd7f3e7922550e5d9221cb266b6b3ff15855', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'e3b30017a4f589022d828e693e0d3ec843adcb1a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '6665467f77e3b973418cdec74ed5ff0727b038b5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '67d0c3a6ffda4cc11d98ef2299ba76637bfa5b4b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '75506fa7904337be2af2057340d2d7cd42f0ad8f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '7c311f0c3d43882f9b055d1419cb0f5118ff6d38' }, index.h("a", { key: '499d8e8f5d43ce8d74eac471f543e7ecfd466aab', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map