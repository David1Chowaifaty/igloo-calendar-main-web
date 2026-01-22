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
        return (index.h(index.Host, { key: 'a0528c4b7a28b964eb5334fa19d54e4bf0b301b9' }, index.h("ir-interceptor", { key: '5a0be698cf6e347129bfc7a1d9bbf9eac01a6810' }), index.h("ir-toast", { key: '3f8b1fc0075c17331f7e82fc1caff0e2e16701c8' }), index.h("form", { key: '48cd824595ba75dde9e088739c8b58d18578518f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '1bf9d83d6e3c412d85c3015022d3f5203b54d1e0', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '726f49850ad67786fd3fd1c3565c97bb9f9308ed', class: "separator-container" }, index.h("div", { key: '3e9eecff30f3f098984e3f33de71d010e09319ec', class: "separator" }), index.h("p", { key: '0037e0d899e85aeb985cb2023548c685a073ffc0' }, "Sign in to manage your property"), index.h("div", { key: 'b0dd4286b727541247dfdfe9701bb20af556bbfe', class: "separator" })), index.h("ir-input-text", { key: 'b5c69a1831c02fab7f25e072975d8c98295a6312', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'ae9d31ddaf9a2bc8c6bfe992d84b6c56d1a2fa50', name: "user", slot: "icon" })), index.h("div", { key: '4f93efadf1cab3491dbce2a10fc8bee0820b297a', class: 'position-relative' }, index.h("ir-input-text", { key: '38bc49538718f99db39a3afac1d09b34fe562ff3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '59cf402c0ad8931aa7e11bf38838232e27dce59d', name: "key", slot: "icon" })), index.h("button", { key: '43680e0ce5276dc630d073ce3c937f1c141e9f58', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'aa40c258dd6f96983c9ca2138cefff24eed174be', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'c2b656d02a5b679c45e2316dfc68f81baf20e3d0', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '4212e5b41dbdd15558cb8cc10cd77099fa528d0d', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '26fb5f4f7d156c0266f5291e94da59539384e4bf', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'fc440f0845c24522a922fb2b930ea56ef15c99b9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c42ab8debdba8370db406ee85f41e69db72b81a7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '683c7e7f32eeac0f9047ecc0eca506ff5c144894', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'a0c11184c7ab3507251bd70cbe487593125e1143', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '6602d5687e0677af2304bd4b0e05cf07c8d12565', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '106703de27619b4533824eb0532aecfc457bbf04' }, index.h("a", { key: '750d3929021ddcbcf107078e72426c6c0c3cc2e8', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map