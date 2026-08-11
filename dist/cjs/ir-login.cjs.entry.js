'use strict';

var index = require('./index-CJa_TWt0.js');
var Token = require('./Token-mN7PQKGF.js');
var authenticate_service = require('./authenticate.service-CPW79Uh9.js');
var irInterceptor_store = require('./ir-interceptor.store-Cfz0I8ZO.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-DbhEzZeW.js');

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish");
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
        return (index.h(index.Host, { key: '91de8b00b18aab60f719746819a3191f8be54a8c' }, index.h("ir-interceptor", { key: 'c9e370d9a7b58b3b433b5826bf1f4507c2cdfb0d' }), index.h("ir-toast", { key: 'ffb9312fe90de6be46ef50dd09578712264567d1' }), index.h("form", { key: '193242b2bf502c7a2aca9eab04262e20caecd4d7', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'f10bd1c8cd01d873d7ee49cac223eeb6aceeb6e0', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '5faf404ea2e26d5cfc11ab069fdb1aee85f74b34', class: "separator-container" }, index.h("div", { key: '172aa326ccbd0ed9b95cdb8052ee1de76b890231', class: "separator" }), index.h("p", { key: '63323fa32c0979acecd829207cf9f18cf79a5e4f' }, "Sign in to manage your property"), index.h("div", { key: '03cea92a1660b68df5f0a2cfd210d29e1f94be8a', class: "separator" })), index.h("ir-input-text", { key: '33958b277241bb0c7ee8666d260647adaa228f32', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b7f8b577232c0b9c6de81e6afbe0f52112f80fa7', name: "user", slot: "icon" })), index.h("div", { key: 'c5d977efd529c6de79cd795c7a0b3c0afc4d119b', class: 'position-relative' }, index.h("ir-input-text", { key: '8754c6c4f245c12ebac3bc8a8ffe2837f49243c3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '094a56f3f3fe054170852e3d291f4794d28ebd9a', name: "key", slot: "icon" })), index.h("button", { key: '5a9a569498146b92aa8b6f1da68ba075b2029ba2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ec411f417b438bce0a067e9b67a6d6ac5cccbae8', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '02731e524d1a11348132de21674fc584ae6698cb', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0d307f78470d95c4f0b72fc35883175a60710324', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '9cf5b75a5c518069f646c2461612934c6025b81c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '600caa67954f815bb96a2714c28b594901784c79', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'e3be5ae3d52d876a6e4133e3add4dadf4901d686', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'b2d0cb92eb95881107190817c4ffb30ac98d49bb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '986441d2203d45c5190282871c8289dad63f76a2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b4f4bda2df4585f87457b73ca8774a67db0cf7e8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '85ef3858cacc958e6fb4b89c0c8238ecb07238c5' }, index.h("a", { key: '10e6efe7be6657d6ddbc7734962d687c18d84088', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
