'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
require('./axios-6e678d52.js');
require('./index-7564ffa1.js');

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
        return (index.h(index.Host, { key: 'c47a2c6933a9b0546a62763a613b8719d9702db8' }, index.h("ir-interceptor", { key: '354afc5d85d86f926b5ab042ae32420c6e21be7b' }), index.h("ir-toast", { key: '14852befdc9d3719ee1e3b99e0a8683bad301a40' }), index.h("form", { key: '006c9a77a9f4c904a947f20543d63d76bcbd90f7', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'db3b7be64326c6e99281d3c603452569a08de88a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '9906aa180f9c59f8586729cbd4a245bff5b83a6a', class: "separator-container" }, index.h("div", { key: '100ba5b648b9128981b65a6ee62a2dce560f9eb7', class: "separator" }), index.h("p", { key: '772c99fde057941ec5353c835110e0e7e47bdfc1' }, "Sign in to manage your property"), index.h("div", { key: 'd070a38a0de9a3ee1d4c91965b086d2bddd3bbda', class: "separator" })), index.h("ir-input-text", { key: 'f3f15ca4922cec53fd7cbbb3b0ec36a3305c65ff', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '6bea462a0e7ba41a921f479a85f85102a035aa82', name: "user", slot: "icon" })), index.h("div", { key: '3cc2f5e5ea253ea2055c2a7eb41d0bfaf328e894', class: 'position-relative' }, index.h("ir-input-text", { key: 'bfbfdb9e8c44e80483e40581d1c0bd272f4a7f11', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '437525703f54bc7a3790211f2de2b0644c3c9afc', name: "key", slot: "icon" })), index.h("button", { key: 'c055568fd7973dde828a87953ec8731d209a955f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '451f23eeec80f43dc7b083f302731fc98df0b28c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '90e852bb738e3168f51382777a3eea69f6678bc2', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '690d2da9ea1900cf4ab5ddd5ff092ff461fb9d6d', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'f8c6e7d6217e2a5220f3985b0a2cb1d6083df36e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '0772b4d022d9eea2d43cf4202f6da11e6b12b1f5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c78654a177dee3316c886295aea4931a794d50bd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '14450f51041edbc28944a04abbaa6b9b74d8af90', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'd74b381852f5fa5eea94661a765f53ba99e9e474', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '6d1b7171ddd37b82d89a3e6886d690cf2b3879d5', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '9b0ce042edbac477643625e37212e90d9527d4e0' }, index.h("a", { key: '3308253e41954ed32269dbd3e502c9d24668981f', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map