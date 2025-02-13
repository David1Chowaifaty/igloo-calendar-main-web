'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const Token = require('./Token-a4c2b5d8.js');
const axios = require('./axios-b86c5465.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
require('./index-5e99a1fe.js');

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.token = new Token.Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
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
        return (index.h(index.Host, { key: '44e3f6148d8b56019bad9393c277e3a0fc73ff7e' }, index.h("ir-interceptor", { key: '23fd8726200ffcdd4b9c3ab8996db55d8a167753' }), index.h("ir-toast", { key: 'cc5fd79e0a597cc874db7bcdfe8553d92e9e3d85' }), index.h("form", { key: '9e427dfab94e9325884e1b342046793c4808b176', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '7d5d09cd6dec85ae4b20bdfd1ac00239dc6f957c', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '804ea42477014e6cdfb90e80afaef4a7519ebe5b', class: "separator-container" }, index.h("div", { key: '96aefbe084b84c9db1c79cdd56c51ba41efd7151', class: "separator" }), index.h("p", { key: '00873656a1ccf2aa910cd53055b5b0d4aac077ad' }, "Sign in to manage your property"), index.h("div", { key: '88c79dfc65dc67b8826f69c7c540d1754db31b9e', class: "separator" })), index.h("ir-input-text", { key: '20bea36f95fbe32fdd1fd8882ee8417b34917fd9', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '4fd6ce7a9a3828be410df4a3396637ac3cc13942', name: "user", slot: "icon" })), index.h("div", { key: 'd06fcea721cd1aa648081db0ec9d06d3091e7182', class: 'position-relative' }, index.h("ir-input-text", { key: '19a99d73dcbfc2ae1bc6b23b899a2c13afaedc08', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '75aba4e8345c93a032466ad3bcef1de581a098cd', name: "key", slot: "icon" })), index.h("button", { key: '07459a3244575d765f3647344266dd1dda7b29d0', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'aa4ac5fa3f67c2c1375d415b8464a9b894a0e9ea', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '1bf79ebf93173261aa4d0f9f3cd8396a4804eafc', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '7c16d7942221dfc458e379256d7731dc41704deb', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '82415945409dd7548c5411baa08caac4c4177005', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'ea816ae270555ee381afb916154512c69f4ac76e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '249b0d0c361db9341c813c3f1ea9d88f97332841', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '04da4c785927abe406d589539c13871291a7d62e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'e7d20680f634ae921909c4eb7dc6582d8f1c9aa4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '636869b526ad059d8bcabf2d083c4cc3ccc4b3ca', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '1fbdab5685721c6a3e102a946da556dbe7471e64' }, index.h("a", { key: '6d731d6fefab9c91a352b4ec548822519f776961', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map