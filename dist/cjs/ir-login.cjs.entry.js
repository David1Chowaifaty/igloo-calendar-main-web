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
        return (index.h(index.Host, { key: 'f85f2d9e0cccc4a27a2421793a023a8e7e70c6e9' }, index.h("ir-interceptor", { key: '323bfdc2a906f2d2077dac04e9914439569e0e67' }), index.h("ir-toast", { key: '57488634be44e3e0b188326808dff12c9f10b1d8' }), index.h("form", { key: '055e9f5bb0a20b04e5820148eb241f5eb21b4179', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '502022dac0bf3a51e496ead4493095200dbd9eb9', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '12986c199834cb541093107991ad9dbe89179097', class: "separator-container" }, index.h("div", { key: '5c959c6c2d68bd04a7f014d34275777b215200ea', class: "separator" }), index.h("p", { key: '86535e75d64519b907c99c519400bd90ceac1224' }, "Sign in to manage your property"), index.h("div", { key: '6165f3efedceb233fa73cc0b734cbeb4e3a581b6', class: "separator" })), index.h("ir-input-text", { key: 'c22ed82806e9bd832c66e7f48e318c6cc567eb85', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '0e215ddc7d89e104532232731a9b66812840ab4a', name: "user", slot: "icon" })), index.h("div", { key: '03468532456f1ec19bd1b35eab16727c1deb5c1e', class: 'position-relative' }, index.h("ir-input-text", { key: '7f8890b638533eac15098394424f0e3dd3c11f9f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '5970f6d8a636d5c010d0270b1071b78930f190ce', name: "key", slot: "icon" })), index.h("button", { key: '279ba265557c53dd1a00b3f11a26f8467eca7d44', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'e4e46f2c426c8fe16e2e23d10957766b6725e325', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '7e0e9a26143a1ba4d3f3d19693dc1d5f645af288', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0f16e69f9c8e1dcd6dc7b83e36da1674940001c6', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '8a6a92d03d37edc0e40906efba755e647892a449', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '9ed2ce7abe62658a199075c2b2ef6a652cb199b3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '491de527074c253ab114ebf9318e58b6212be3da', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '0d0e43e3d9b89f4f9333ed0a9281912bb5a11860', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'd98c4ce52170e5b55af4a9e4650ba08ad1e5b97f', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '86ac9f37f0d32ad28ddbeb608185cd1b2cc0a41b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'b82d355be123c00b4546d9f47af80082a8ce81dd' }, index.h("a", { key: '91f30474a6ebfcf4bfc437497a0dadee86208ea3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map