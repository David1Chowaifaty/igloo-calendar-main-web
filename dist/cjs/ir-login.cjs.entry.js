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
        return (index.h(index.Host, { key: '1f58c0973c588f848dce44253ae29b6028747289' }, index.h("ir-interceptor", { key: '885e275f5a8687a4398204c53b03c4af2c68dcb6' }), index.h("ir-toast", { key: 'cb7d2c219d2104096700cd3d9b5adb36db11579a' }), index.h("form", { key: 'ef292e6c9bcb3c644a9aba9e3cc0a3807396f53b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'f28de96c975f23395d1a61059b8242d6cf9ae087', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'c65f949b2c2cdacab281e856894977f4d50719a4', class: "separator-container" }, index.h("div", { key: '5d39025a9f897b66010c852c9ba632d1e30a90b0', class: "separator" }), index.h("p", { key: 'b324fb3bcfe36e11b5ac3add5741183a85540abe' }, "Sign in to manage your property"), index.h("div", { key: 'f9b4203505bd88762b1ca51d8a3d6ce2b8891a39', class: "separator" })), index.h("ir-input-text", { key: '552834cb2d7e5440fd0aec0891e5bb7fc3a2c366', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '5475356cb3274a573203e646a7284a9e24184843', name: "user", slot: "icon" })), index.h("div", { key: 'eb2c4e317a0ddf8a98918d9d01d40ef7813e67bb', class: 'position-relative' }, index.h("ir-input-text", { key: '181a9cd9f8cf6605ee6c4940c094edffddc55e8f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '26dd5f90b07d7f2e5257e5568156f0cfbc47ac24', name: "key", slot: "icon" })), index.h("button", { key: '8950af804da176c2813c1fc9e1dceb2a1251dbb7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '94af50560080bfb8bec52c6a864f48a654b1debc', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '95f036cef2cbafa2f1c12be64e7672b5b63180d1', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '06feacc883fde5bbe3d3a1119b8800606c73cd60', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '692fd47bd4133a53e95a239950a5e5f306148b40', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '52bc64d3b77138e34ab0d36f32533a1ded98b383', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '73bf4608c2c6b445f51d03fc4350679129b96cdb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'be1f035a4b4d64cc13a0eacdfb16feb4d2184343', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'c923cc299b5f887ead9fbfa5eb4dd1e6ab2fa6be', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '052241afbcdec015a6221f45bf6c2e9eb9b1ef17', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '0c4f43e386066d97dab52198dc53666ab012ea72' }, index.h("a", { key: '41534c9aa67a76c177e9e67c5a5031c88ae5a7e8', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map