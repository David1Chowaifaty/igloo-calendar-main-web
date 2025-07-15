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
        return (index.h(index.Host, { key: '90848fdc572284628396ff9e90c96dd15bc1f204' }, index.h("ir-interceptor", { key: '55a457a8a98e6e8e87f509b37483beeb13b41224' }), index.h("ir-toast", { key: 'efa368d4424b25fee3617795befe66b725bd0b95' }), index.h("form", { key: 'a7fdc01f7b54571037526cc1ced94adc5af36dc3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '50f3b346c96819e734b7aca630aec7aef870c2c6', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '44e17db15053500cb15947a005990a5880005bd8', class: "separator-container" }, index.h("div", { key: '1228e998c9b7e8f588bdbb2084b49ee1a0baf7b7', class: "separator" }), index.h("p", { key: '3548d3ce70492109ef03b527ec44866b2c8ad7b6' }, "Sign in to manage your property"), index.h("div", { key: 'e01c2b57cc01d33f3053aa083834f31bb2d2b1c5', class: "separator" })), index.h("ir-input-text", { key: '4f9afb82786230aba35a4e195398f97f0add4959', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'e69e9efaf9d694b610e50983beeb33af57d66ca9', name: "user", slot: "icon" })), index.h("div", { key: '3a58c12f6142fae5233a56fd50e5fc532d5651d2', class: 'position-relative' }, index.h("ir-input-text", { key: '1685c5d4235b9a5c7410d12fb5967732a1a03c78', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'bf6a3a531f1afbf92918d1d638ebc120f27223e9', name: "key", slot: "icon" })), index.h("button", { key: '25179ad7edde31e05db9305c9e33d46ea4fc19d6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '2f59d91a660b3a8083181bdd3c718946bc9af25e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '62deecb157cc891ddd02a2fea84a6a5fd4ad2fe0', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '7890f4e63bafab1e6a8c19a4852a964054c240b6', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '60a8a64bdb31d07c416248acf765dbd2bff6281c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '8bc03cacef7941b2bd3e1286208e1af38f7beda4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '01789f29125f107671fc5f6313bf58468842851c', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '183c336fda34d30966e408c3ff889791aa3ed377', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'e7648d2681df36b5c7783b7e5b2c0388247069fd', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '349677c20ac39a97f8f9b7d191ccf864f230b1cd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'f28f872af33cd54f9f4fa8de7acb1d2c95a742d0' }, index.h("a", { key: 'f66db1138fcd1acea0b9b54111e82760459c6481', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map