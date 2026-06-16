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
        return (index.h(index.Host, { key: '51aed44b838ad072ab1bd76df80d1df405f58295' }, index.h("ir-interceptor", { key: '7c2081c6a6a0e5d34f59376bdcd43cd3736a8638' }), index.h("ir-toast", { key: 'c4f24f6e0a7c60883b15caf70ac4c6e862d7a818' }), index.h("form", { key: '054d538049874b67d8654e4b3d44968724558e21', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '993e00d62fcb96cdd46006e0b035fa353204ae14', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '50f38e3c55a6d50dead0b9e03157cdf4987c5576', class: "separator-container" }, index.h("div", { key: 'c2ccf5a79c153fd03a5890a8ddfc897ec9b5791b', class: "separator" }), index.h("p", { key: '70aa0c078efadb959e95906ecefd5a471478b05e' }, "Sign in to manage your property"), index.h("div", { key: '80198f272f9ee73e3e600bfa00289b725362d57a', class: "separator" })), index.h("ir-input-text", { key: '417f5c4972d397bf964d82bd97a124f8a02c9b82', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '13472b8d4d2b91e71b5c680b1bef5dc9aee3edae', name: "user", slot: "icon" })), index.h("div", { key: 'a318b81461d9c32c8427b76f840b9659d64dc938', class: 'position-relative' }, index.h("ir-input-text", { key: '914e05f74f9123318c12e05fe18990b1481ae9dc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '0bb6fc2bc22af6306cfc568a4a1771bf0a6ec570', name: "key", slot: "icon" })), index.h("button", { key: '199ced542301b95ee5bbc21d41f960b90693e4c5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '25a1d2479d9f2d453295694004868ec9a61b2245', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '5ee1c009c0ea7bf154fd9dddb0a467f85cde8e5f', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'f5fee94c5f02cece0a17f3fc1c9c1587105555a3', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '6f069a9e33990bded14c20d35e530b37c8d5bb9e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'd5c0f6dfbb60d2f1668f685049cc4b7bd0f8962a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '9cc8e2e1b7eaace3118f1c8f4a82c9aed03d3125', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '37cfae7589164e4ac925b7bec3c12793185fc56d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'ea11b4e1ec7984844b29afb564aedc2c74f0876e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '790037ae94acea4ff494e62cb684e6278751d3e2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '1e2e74c39815a4c91562236fd1883fb2a1b56a9b' }, index.h("a", { key: '2db8fbe2b88b0d5b0b4dd70613b4af7b74b507bc', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map