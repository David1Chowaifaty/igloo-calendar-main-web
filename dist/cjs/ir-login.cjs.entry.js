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
        return (index.h(index.Host, { key: 'dc3a164760c506a5770fcba1a33e05daeb73ae83' }, index.h("ir-interceptor", { key: 'f87a7cab3f60152747b4154645e5653446fd25c3' }), index.h("ir-toast", { key: '5dd4a21e285e7cb89e901864cd7e4620e3b436f8' }), index.h("form", { key: '754fcb4e0aa0c2f4a9a23984286c420b96c80f0b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'f45b2b2e8ae31cb492d2f62af226a1f6853764a4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '7d898496fb8d5899ecb4811ca7127f76c447090b', class: "separator-container" }, index.h("div", { key: '24e516d77a79a3ba33f01ea6da85175437baef66', class: "separator" }), index.h("p", { key: '1be8be4bf30eba44f85b3f46c8b97e0b399d856e' }, "Sign in to manage your property"), index.h("div", { key: 'f70b2e2b124d8beb647db0759bb678a1b4f31467', class: "separator" })), index.h("ir-input-text", { key: '696aa27f5805f44729ba054dec88813f846fff86', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: 'eb35a9d770b3997ca37fbdf2cfd3ac1035e3374d', name: "user", slot: "icon" })), index.h("div", { key: '98b4e739b2acbfc14c2d527842ac0a3a20e81a7e', class: 'position-relative' }, index.h("ir-input-text", { key: '44693edde57cd34f4e949a47cf0e12f44bcbc6c7', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '7f36387d385f390ea28e4ab26a287a41b8841412', name: "key", slot: "icon" })), index.h("button", { key: 'f4ca042935761941d98e97c50f8be960ec9ef2c5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '4d1302026d5f5a7069f5bc479e8c5a76f1839014', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '1c3aa50cb2907f54d70bb0623e2a125e1c09c280', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '40430a5ce8a4eebfbfeb16af7bc4677517674b56', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '0461eb2bbba5716a4e3a7b3343fbb1e18cb5d715', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '63b1ac482efd8cfbbb66ff672f94ec95219b96bf', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '53718fdcbabd3501aad41ea9d048fe04a48c985f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '5f5f66cc829f3ba5d83b5e54fdfdf0abde4efd53', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'cc49636c3fc595e643c401546ddd9a81a6779648', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'aca6ea100be4fdd6f569c38766d15e6103c32e8f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '79b94fbe372bef042fccc39f0b4194dfba32b1bd' }, index.h("a", { key: '05032a26489732f4eff776b167cbf22da7171e10', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map