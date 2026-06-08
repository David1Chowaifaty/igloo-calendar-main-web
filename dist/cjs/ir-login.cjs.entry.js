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
        return (index.h(index.Host, { key: '93fcefc6674495f6ae3d62973c7ae4acdbc7eff6' }, index.h("ir-interceptor", { key: '703070d3c60137150d94634918e359a6446b518d' }), index.h("ir-toast", { key: '98d9586eaadd303f583c8162a30a5edb5fb2e8a4' }), index.h("form", { key: '8df5a2e77146fa9f9e368cbeaac46b43e497d81e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4c88e555aecf8e8885f8606ee89b83d72ad45f72', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '91220773dce16cd023869d7081bdf3816118afda', class: "separator-container" }, index.h("div", { key: 'da6f7ebe63ea2ba53ebe92d7fd02765c6512cfc0', class: "separator" }), index.h("p", { key: '580ad02bb9b3bcfec5c5171c2fae5ef42f008487' }, "Sign in to manage your property"), index.h("div", { key: '662c4d2b9a1320487a6c50b014a6788149dd2a8c', class: "separator" })), index.h("ir-input-text", { key: '9f90201188ee587d2b471a65585a07cc3d57eaa7', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '77d8bb3ce9c4c55a8421ccdef6413e4f7c99075a', name: "user", slot: "icon" })), index.h("div", { key: 'f19475e60074e52c7d25266b22ce9fa85bb5de70', class: 'position-relative' }, index.h("ir-input-text", { key: '9a4b5315ae4b2266a17d59faa0b676245c3e1daa', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '70af3633e24c562232c8ddc8077ee4afc2ba23f4', name: "key", slot: "icon" })), index.h("button", { key: 'e94e6f1275c6da8b35043d5a51d1dfb581fd1525', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '2b14bdf059f3208381a368532a903c17c52d0976', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '6154f4a413ed72acee97d85fb198a0ef7909c014', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '107ab23dd667e0b4697e44dff317c29a4bb1e9bb', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '82eb5f84e805be541f977e397f052eca7cac55ee', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'b5f1ee2edf1fbe4f1652b1341499a3d78ebbb254', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c1438ac9363e9aac71d66b39035c4050080a0209', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'c370aa65be07b117e3cd7681c0065768c533e483', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '0b0d566eabb7cb0f2f7da7297d5f0f0fcd03848d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '574e20002f68704a449d0e38c8e435258a80bb70', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '89a12ee8d17c98a01fe9c7cd9222690b1121e6e4' }, index.h("a", { key: '623c4fa4452f87ac649125856af99a2edd8bc787', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map