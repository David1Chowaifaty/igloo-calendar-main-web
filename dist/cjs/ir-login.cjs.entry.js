'use strict';

var index = require('./index-Dt9a74kn.js');
var Token = require('./Token-d-M1RUIy.js');
var axios = require('./axios-dx93wJEX.js');
var irInterceptor_store = require('./ir-interceptor.store-CcYE4FKe.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-PIkoJJtF.js');

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
        return (index.h(index.Host, { key: '0dfcdf0ad3404ecb8421408f148f1d42875df094' }, index.h("ir-interceptor", { key: '50089ec41aa0bf857d9ba24177f7d48f2265913c' }), index.h("ir-toast", { key: '784455e6b1dfbd82ca2bfde12cd569aee455f0ee' }), index.h("form", { key: '1adc303d337356911659b3de326fd1214d7c3df4', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'a23227496e2f011712046ddaec0ed6a03915fd77', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'b96987b8cd7900235a746b13554df6d2a4d4401f', class: "separator-container" }, index.h("div", { key: 'ea8193c4a850503d6c04d158c0f0e427bc51ba1c', class: "separator" }), index.h("p", { key: '12b911a52ac56a31f8d41500be1c70d2f769e5bf' }, "Sign in to manage your property"), index.h("div", { key: 'efc9c9c3440ead7082481f0c4b0df05dc53f8f13', class: "separator" })), index.h("ir-input-text", { key: '1a6d5e8c283cbbdd77ec7a077a0c45fcfc45b3c1', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'fe1f58ddb5966284a64708ec9fc78bd516464440', name: "user", slot: "icon" })), index.h("div", { key: 'c4ad40a7ce66f408bf11046aa032f8a59024ac64', class: 'position-relative' }, index.h("ir-input-text", { key: '0bc0d49d74985adf7420b9eec6b12e16e3c3f622', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '17db068bb5d7f4dd8e91c8a90ca3902be5978b95', name: "key", slot: "icon" })), index.h("button", { key: '807e321718c05c78e5e98fb3099b3b3861e2e346', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '8599ff3f7d9ab1173beeb76e8acddbc52e075ef5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '62ca343eb1969db289ec7ae048d5bf2a21f4aa73', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '07b16a1253e5fc85c9dd3008804d8b9703d66f87', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '11cc930077281d05202683c9a54d2247b25e71ec', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '653b3dd91ef0ce5d916f7d2f2cd54060f2f62f81', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c63d187eac54cdb7fb8509a1c2ea0a17a9208eef', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'a2c53fe57fb88376af5821cfde8c6a5999608c52', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '48c1472a2318c9319cfa454205ace7c3a0eb8c96', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '6fd82baf1847560343b5fe1af6636c6ef5e508bf', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '93ddeca6746ae3fba238bc28951b9366393a1600' }, index.h("a", { key: '4194b7768782f803d56bef459da6f7da917cf262', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss;

exports.ir_login = IrLogin;
//# sourceMappingURL=ir-login.entry.cjs.js.map

//# sourceMappingURL=ir-login.cjs.entry.js.map