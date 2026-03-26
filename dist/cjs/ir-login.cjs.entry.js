'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-8fd11984.js');
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
        return (index.h(index.Host, { key: '5c8ee7d4a0fa64b646ebe247c581a248a794da37' }, index.h("ir-interceptor", { key: 'e951ad1942f8a625f534346a80fe3e7748dce32c' }), index.h("ir-toast", { key: '8244b0a6eb255575c37dc6bcf96a4fa32d7f33f0' }), index.h("form", { key: 'b27d7889e32ca598ab902f170ccd6e76496c3649', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '0c91ddaef0a28f9f3739fab4e447c87f600f0ce0', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '6d9d2c1dc8594f083c52f4daa8559c24c03b88ab', class: "separator-container" }, index.h("div", { key: '3ace463032b5342707e72a9e9b7d779518f2b6fd', class: "separator" }), index.h("p", { key: 'd13a8d250d69006c95fda68609d54b2cb5c8534c' }, "Sign in to manage your property"), index.h("div", { key: '68ee65521aac86db1fe69b7824f335918527cdd0', class: "separator" })), index.h("ir-input-text", { key: '8864ee650071336036a3681c0dc6476d04bb69a0', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'a373a1e49896a9dfd2ad1e6d88d3b35ba2ba6669', name: "user", slot: "icon" })), index.h("div", { key: '949d54ccdfbf18d33831f626251f47e9d7903291', class: 'position-relative' }, index.h("ir-input-text", { key: '1f4b26b6824f286056ba3cb05833c533a132b0ec', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '14b289bd3e9905855060da0ae67544a58bbf6efb', name: "key", slot: "icon" })), index.h("button", { key: '236421bcef28950641aced3fef974353d902c627', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f85e78bd238497c1d4fa817dfa774739bd44c63f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '1438719e797c732aab2f850db9fe980f7e3181b6', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '897d0a77023de412d2ee97814bdb03cd74985322', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '8d865de80b68f68684678dc58c44bd19dab73900', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '5a306ae50ed3b9f69ee586dc2d55d875ce59437a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '2a1189a81f4bbd6da6a5cfdd60367422176095c0', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'dba9a58556d6a391cb06c7bffd5b160a686f5bba', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'c35e053463b0c6cadf0028ca6f5f041edbb35c36', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '814203e056dc7f4f343f8c2e967737b53ff33122', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '327706f2b3abfaf3aef1ab809d32f3ea1f60ab4b' }, index.h("a", { key: 'ba790becbb4c557e142071ef927624a73107758c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map