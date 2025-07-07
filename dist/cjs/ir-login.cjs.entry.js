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
        return (index.h(index.Host, { key: '47881eff38955bd90383b01e83dcccb8dd5e518a' }, index.h("ir-interceptor", { key: 'f481104b30ff82d08a2edcb6659db36338da49b1' }), index.h("ir-toast", { key: 'b9a411f5369d303ddf34bd71d180f87706342617' }), index.h("form", { key: '3be4455541ede8206586a6e9fc7b90d2cf46b3cd', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '1cb0ba916d2a390b702bd34d997db5e9538f6130', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '2038716eca3b20be48f36a73a4e81634c437e0d2', class: "separator-container" }, index.h("div", { key: 'd597b1c9bec4a2ad6be99776fc49ed55fd4e904e', class: "separator" }), index.h("p", { key: '27c8b94a2cd06991d09bfdee6720e993aedd67cf' }, "Sign in to manage your property"), index.h("div", { key: 'bfb25219c7568608d195b1a3601be65cad4801bd', class: "separator" })), index.h("ir-input-text", { key: '4d0fed8ceb2514d21f91a3bb63aab6c9acaf5878', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'a6d471ad2f3a7717a165157d0967178e9a3e53bf', name: "user", slot: "icon" })), index.h("div", { key: '34987c725f549297cfb277f75a6e323293a15ddf', class: 'position-relative' }, index.h("ir-input-text", { key: '59fa53cb33c5c2ba806927423c8d77b62016dee6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '2a9bfa035f1e61eec630ba06f9958f5c6c083a22', name: "key", slot: "icon" })), index.h("button", { key: 'a9cd2244a90f0feec56deb647c2c67e3eade9416', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f172a9830e6ba79eb2e855a286762f91bc13e71d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'accbdc4e2d01d8b113ab98acd8e70452ca3392be', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'ea97848afbc31ec3fc403b45c19d06e767a54066', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'c355a7af6001b9a0756a95faebb409b91a62c595', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7b6bb2371329f01d4bf2256a36b2aee16774205e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '727cd40a60e7f39abb6c563d58cb5f51d80e151e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'c4768b85b59a80c443322ef2e5240eec12db4798', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '9bc2cb0169eefc046f1fa24300c274c985697c46', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '461e575261f6f6c3fc0ff20bb12f3ef0ed054b25', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '4cfca9b9545dfd82e4afe8c4fb702166bb8015c6' }, index.h("a", { key: '06f3e37e63e829a6e6ce356ef3f0d4d688bf439b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map