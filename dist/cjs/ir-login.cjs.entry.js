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
        return (index.h(index.Host, { key: '3e3a1354f050ca460caded26380363dac1b98c98' }, index.h("ir-interceptor", { key: 'c8770aee4dfe98c60db4a1b10cc4300a5b97d843' }), index.h("ir-toast", { key: '4744e6c22bd894dbfd57c201fa44e30692cffc91' }), index.h("form", { key: '4f9b4c1669a563ffcfaa6be7252704d9a877a78d', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'de696c8d15e0e083c3ce39b43c07bd54ef2cba46', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'ffb811fa6980b133d4921653a004f2db4b1fedf2', class: "separator-container" }, index.h("div", { key: '6da080e5dabf56d7a8dc65abcd3b92a91616021c', class: "separator" }), index.h("p", { key: 'fed350b9823af8878d9cc7203f1eaac9c6c28fcd' }, "Sign in to manage your property"), index.h("div", { key: 'c3e654beeda70009fc1d239c46b282ecc016110d', class: "separator" })), index.h("ir-input-text", { key: '62a1a2aa39734fa3d40d5b3f0b1df584a405d759', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '95b0500cc40dc7a9d71cd97ad2e08fe4ea4d62f1', name: "user", slot: "icon" })), index.h("div", { key: '4f3bdb6efedaf5fe048e4602f1f07477c59f6c9d', class: 'position-relative' }, index.h("ir-input-text", { key: 'ada547750736a8c48fffd9a66570781a96795954', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'ba69aa6989969517e7b741aa2b0c6623340629b2', name: "key", slot: "icon" })), index.h("button", { key: '51e5b0cf48c5c95424b92a4c6d63588150bbb7c1', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '12c16876cdcbdbeabe7274908cbe7a68560d4e37', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '5853e3d7eae74c58d93b379e3c5c595c92d4b49c', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '3fd8ff00f969568a5454fdad9440e7d49bb83f23', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '99f9248caa9fd5a7f034071c920f40574965175a', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'e99eae52c1da34856a4ab0bb28db825ff53b83d0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '19f895b199fe0509170cb5d1ecc7ba2cffe9ace3', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '05cefc98231ef2ea180752eb1f400f86a7e5f790', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '16d40741aacc1cea7533e96c2d75c005d5517dfc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b5d7cca53e0941c3e19bd4d95cd547facb29517d', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '38e0ff3892e6b1c62730bc06eb2818e490ffcaae' }, index.h("a", { key: '2f3ab7398b19db910a3a5ef52f1003170e1de77b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map