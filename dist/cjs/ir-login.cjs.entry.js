'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
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
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (index.h(index.Host, { key: '79ffb1b967482b68138fd82bff34e7c0b3d6b52e' }, index.h("ir-interceptor", { key: '3c6de9c74c0adeb725fdc0de2de923c8e56142c9' }), index.h("ir-toast", { key: 'c637f94fee2765b849b777243b3ea78aca0d63a3' }), index.h("form", { key: '402b3ecba4d808985c9b644d79a95c1831042726', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '2ae3fddca750f8d50880fb7fc69563394e560bee', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '83c51a2d82d21d71a25125d024945b4e37878403', class: "separator-container" }, index.h("div", { key: '1cf8fc9f85889d6239762eeff0a39150285d683e', class: "separator" }), index.h("p", { key: 'd533d2028efd042290c8996eaed17ac2f58fcf1c' }, "Sign in to manage your property"), index.h("div", { key: 'ffdb6c35204625e6137d56e181ee6a7da8c4b986', class: "separator" })), index.h("ir-input-text", { key: 'b64a57611ead9b883558ef0fcacf1d31501c8769', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: 'c533a1ba11cc8c480993914646b1630d2a28949a', name: "user", slot: "icon" })), index.h("div", { key: 'f8ecd131d20af269466b1eba79077c996807d6f9', class: 'position-relative' }, index.h("ir-input-text", { key: '90abfb2dd531fce36b3e06bfc14c63d9023135a0', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '0ca87b56a05f94d188787e3c2be00fef1c953952', name: "key", slot: "icon" })), index.h("button", { key: 'd387be8870a8bca2e10add2663ae082694ca9b43', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f41c1d9b453117fcac01cad690131383c944fbea', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '853e15cae2c5b26e0bdfc897055c215c6e6c7a55', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '70c3146bff13f7f73fc5d13733e5d3f0c606ab6e', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '99cff0d279645586c99b559a98e9448695c26094', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '1435afdbaaf799b7c757b50d78399d1add897238', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '061683ffaab41865613766f78189d6dd9e38167b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'aa3b3e3ac0c97ee350fc034dbf60701b2095618b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'd06379257ede91696430c3ba61446c8a9826d47b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '10fc434561cc25b5bf5275be55ee86343afb7347', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '167808b3b348c9156a7e24bfea5cd2f0b5675069' }, index.h("a", { key: 'e6bc371ebc696b15f42513bc9b239c1b0a31a78e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map