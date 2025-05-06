'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-049041c2.js');
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
        return (index.h(index.Host, { key: 'a5168a1d537e28edb4b5da3ef80ae176bdca3d63' }, index.h("ir-interceptor", { key: '07722502aa61839e8f08eb7730a939f8e7c3bc4e' }), index.h("ir-toast", { key: '612aafe97b919f659cf492324ec22ec9dbfb0c87' }), index.h("form", { key: '38c7ddbdce9a906abe2db971f5bc3d8f32037da4', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '8e81e00e809b77d7b58628bff78085ac7142edbc', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'b3b61b37a5f807aac8f5c8254679611064cfeb6d', class: "separator-container" }, index.h("div", { key: '3fb57fa1b5e8a05a7f80f1339611a444f46d577f', class: "separator" }), index.h("p", { key: '80e33ae923dbab7cc0724588b304069f1b36fa8e' }, "Sign in to manage your property"), index.h("div", { key: '2add35e742a0ae4bfa5ffa5fd1e8bcb2373761b9', class: "separator" })), index.h("ir-input-text", { key: '90be142afbdcc9d6b5b6ea0bb86523e18b8527ff', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '42e7c5a80059c9e9b1f69feae90ea482c548f849', name: "user", slot: "icon" })), index.h("div", { key: '9f31b07361233004333f4b9a161e7e5880c3ce75', class: 'position-relative' }, index.h("ir-input-text", { key: 'fd81389cd9ca9653a44b189535c7f18ea2031858', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '01b3aa7d7779242763151180b0e921083670966a', name: "key", slot: "icon" })), index.h("button", { key: '8f5940f96b042f175ad69171d7cef1032fe5c85e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'e49ec2fc023d99504c7beea8dbe12be5600f7aa7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'e8b66245716e2ca17107de086aa09a26b87603b9', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'dc185391e43b81ebdec507518ca90591d02f4ee5', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'c4b17f4adfc3acfebbdbc8163398d689616ceb67', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '0466261de18bc5b97b53f9ca6fad0d42557767f9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '830d8ad3830927d804a8866607767de004ababe7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '9103b5afe5e72489400dda4ad46cfcd8e9b741f4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '7a44b00da59e996389b59619ac4293caeb0191a3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'cbfd2a93eac02a2d81dc596c85e337d312593f68', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '37042813bad1cff70b88a515167bc16753887279' }, index.h("a", { key: '1252f7c1c20666da577320e324f7f0a343bb1eec', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map