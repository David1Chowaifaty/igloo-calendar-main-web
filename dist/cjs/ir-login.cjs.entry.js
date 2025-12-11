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
        return (index.h(index.Host, { key: '17c702ce36fbd4ba02cc51431324337f629deb87' }, index.h("ir-interceptor", { key: '10c61ca42feaff1efe0a0957dbc75eca1804f4f9' }), index.h("ir-toast", { key: 'b8f42f731b44a23181278587a84a1c13e696c547' }), index.h("form", { key: '7871db7e4d6b99da08b662bd4624a59ec3d3a9bf', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'fa126816c29c9e54094005c3287df58f6107e9c5', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '44f6643700ff978c944ba7eb0b0a2dff09186eda', class: "separator-container" }, index.h("div", { key: '29b1be3d7ff0b8638fd229d2b809c6552c026cc6', class: "separator" }), index.h("p", { key: '95fe218e2d02932b5016d2922949fd5338c9886a' }, "Sign in to manage your property"), index.h("div", { key: '4ffcf0af1421916ccd75fdd516bc8dca3d9656fe', class: "separator" })), index.h("ir-input-text", { key: '4732f900ee3494d40c38f5bbd00d5492ae7f3ada', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '6f206f534d3d76ed7d304677f785f46d1dad7cfd', name: "user", slot: "icon" })), index.h("div", { key: 'f11b21cc8fa60c81d061a7b3ba691f00e322ee25', class: 'position-relative' }, index.h("ir-input-text", { key: '505297919836cd5f48fa2a7d5058e373f62d4de2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '8da2b9c745f41147f871f66c8022770306674cd5', name: "key", slot: "icon" })), index.h("button", { key: '8f645df849f90689dfadda4ce242e8ff547fc3cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'd22da85e8b879bfcd4b8f40e8915e59036063d93', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '7ea742d21cbef87ede40f1d979f3588333c7fbe5', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '6be524580f860e646a5099949519f1345ffc00d9', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '462cb1cc9c87f26e1c5de997cd8a5cbd0eb7a2ea', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '29f1808a22a77bc37033cc7e809c52f4fa843018', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'a5319a13b4b36ebb271167579afe64d4141d8567', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'a2cc73b958508d41118104c3bf97c904a086172b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '088b7dacd4f642f12946670c2dcd43ecb0dd517d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '4b195e8d35ea238d050007f718ab2b215855454f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'b763f917acb0b5ddabad1aab03ed70891dc3faa5' }, index.h("a", { key: 'ebe6195e4fd3fcbc83d97702b6b6c599a7871f52', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map