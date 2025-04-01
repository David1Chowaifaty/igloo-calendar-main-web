'use strict';

var index = require('./index-Dmp0dHfN.js');
var Token = require('./Token-d-M1RUIy.js');
var axios = require('./axios-dx93wJEX.js');
var irInterceptor_store = require('./ir-interceptor.store-CDdymQ9-.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-BGQl6-i5.js');

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

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish");
        this.showPassword = false;
        this.authService = new AuthService();
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
        return (index.h(index.Host, { key: '3ec28b62d0f4d845f4408a5cb6f7dcd36f7a1f60' }, index.h("ir-interceptor", { key: '416911fa41d91926ef2552380cfae7ad49043bad' }), index.h("ir-toast", { key: '5ed2230e43624a42ca7c1b8b1a3cf67989485adf' }), index.h("form", { key: '433c77806225c47dc7f036a5ae04e37dc3bf7895', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'f35e20096ac15d5665be624b2defcb3dad54f84d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'ea8f476f35c5f6a6d3dd5b0a2f87812597a803e6', class: "separator-container" }, index.h("div", { key: '2327bf977f1a50e52b4f79f4bcac9ae09d20bee2', class: "separator" }), index.h("p", { key: '66a19ff7084691de25687adb3da5a7aa8936e807' }, "Sign in to manage your property"), index.h("div", { key: '533234fbc53645ff840527e1c4cedff000fee47a', class: "separator" })), index.h("ir-input-text", { key: 'b51df0d5e843ea8acf7e0b175234b54b98b6f46c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '857e2863c91047216bef7874d1304945ee7f2858', name: "user", slot: "icon" })), index.h("div", { key: '080219d2767eb756f4416bfb9f803af1507e92c2', class: 'position-relative' }, index.h("ir-input-text", { key: 'c67815172af3f20ee18edba76222644502491bd1', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '59b338f54b9a03a8827c3f23a4716f6f56d64d1c', name: "key", slot: "icon" })), index.h("button", { key: '539a588c7c50656b0f101e0a78036ec2d10e7b65', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '700f9f2e0bc8f42e8a4e5a3bf52e58e3ce21d51e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '9df7193f821e1995d809cd4599fed2f9e704c6d2', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'c059e036b363ccc417c3b9a347b7fbe89ba13e0c', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'e16954f612b0f3be8b64e8cdfc77f702e8e60a95', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'ab77061632fcc593b7470c6def569c4a7fd01dcf', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '03f6f110ba1019f94553bcb0fba911930abe6150', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '49817b159177070ff566df8e1f90c5ec950e03c1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '0bd7bdd9469d38c2719f33a8806859a56ad23f65', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'cb4c797d85aa2a7c965e50b30cb74c31fdf6e9d1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '819b11f1e68758944aa68e05a2188e3ae7bfce31' }, index.h("a", { key: 'b4dc1787a0dad76fe65cb2076ed916ba5dc1f7ae', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss;

exports.ir_login = IrLogin;
//# sourceMappingURL=ir-login.entry.cjs.js.map

//# sourceMappingURL=ir-login.cjs.entry.js.map