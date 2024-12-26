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
        return (index.h(index.Host, { key: '7600fe1f55ae203d65a10865e944afcdebd1270a' }, index.h("ir-interceptor", { key: 'bb7cd2a3de0551c31a7c2bdb0ba00fa2876a8ad3' }), index.h("ir-toast", { key: '33aaa6c30dafaf85b998f8069171be9f9b2aa9ae' }), index.h("form", { key: '008f4d9964eb0935a26da6993b2e1ae1f02fb3e3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'b9f3d3a9ead2a0783db052b5d89a0020c90dedf3', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '8deb360e7b1f3bf2cb6a0f2e26cf77d6ac3e70d6', class: "separator-container" }, index.h("div", { key: 'd83d62a130b9e9efe37bfcb95c58e0beb332cdfd', class: "separator" }), index.h("p", { key: 'c03587d9a11a674298b03417ad5d410a42708032' }, "Sign in to manage your property"), index.h("div", { key: '25da74b0625afc9617c512f59afb99dae2c53b8b', class: "separator" })), index.h("ir-input-text", { key: '5bc019c7df932dabf244f80504ea697a0d67e63c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '336fad113b5d4fb89f9f6c9b6f5344cc60f728b3', name: "user", slot: "icon" })), index.h("div", { key: 'b730ed52bf27b643409f3195c0f2ee67ba069a7e', class: 'position-relative' }, index.h("ir-input-text", { key: '9b38d3f0be2c8f6b6001cd9e5ee508bfd206ed35', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '604f86928a4ce492edbf9b0bc2696e7551c00ca1', name: "key", slot: "icon" })), index.h("button", { key: '49ed46eddfc461ceab338da12a4b5761bcf27e67', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ce055f1053cc7a7e3d529410b33846bd53bbd70f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '1239c51db3205d717a51cc66d257997ba030965a', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '1578f109deb5ddb1edf23fb0d3e6674afa82a197', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '4d3f7b114907e7d31597ce1a6241993d93bdee6c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '47697749c0d93d6089b0cf647ec7c270085aa57a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c46b01d8aeb0a18f44d7eb4197671da14c7d54e2', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '76115c6a50d63515936fb5d2b50346322fd5df75', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '1ce329deb6327716e56c7c94acfda74d9abc27b1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b90e6a5b5893591625892381fae849a50c7e1cdb', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '0526cd742df4370f2294a14e89c045d60d8d7823' }, index.h("a", { key: 'c68010da9ff1705c8d686656f1d24c7fd1951a50', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map