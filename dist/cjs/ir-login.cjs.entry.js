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
        return (index.h(index.Host, { key: '0d2eeaf427ed9f99bb02c7e4d328def0ceaa8451' }, index.h("ir-interceptor", { key: '84b7c450c627cd0f0d07130d9ef0da206a44c9b7' }), index.h("ir-toast", { key: '29cf361349afd70160601a5a6614d16d66b63d61' }), index.h("form", { key: 'bf93e224e0aebf98422e9bb3891c2f114f0285df', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '1c2839c48f4399ef630b388bea2ab5d5f356e15a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'e5d2ce0810adaff5928d50179f0965569ff700bb', class: "separator-container" }, index.h("div", { key: 'a4336e7c9b588d4ebf4a8105ad26f07b0a2b36de', class: "separator" }), index.h("p", { key: 'a1899adf1aa0ca9a50bf12d7107ca2d01d794cd7' }, "Sign in to manage your property"), index.h("div", { key: '8fe1ec738edd27d1d9dfc18ba4dc66e4a133a091', class: "separator" })), index.h("ir-input-text", { key: '422ac305f2057fd03e1c5c908f9dacc84a02bc44', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '40f9d7cd7543616189b63e25c6a78a897f6a3c01', name: "user", slot: "icon" })), index.h("div", { key: '6cc17eb21bb4689dbba739ca04c2d5fecc1591d5', class: 'position-relative' }, index.h("ir-input-text", { key: 'ba988357dda9de18cbe1319f3aaa07523200716f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'dfa5661355f934f07d585ae9e407c23ea95fb7c1', name: "key", slot: "icon" })), index.h("button", { key: 'badf77d428ecb8facb6f8c91569ce4be5b7dfbc8', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '709fc8d3c213d9dab5b61e2f6bce0dac4149596b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b360d2bb64081410e1bec07f40ab282678dc7f72', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '11949eeb0a1fbac91d451f60d703a6e3a637123f', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'bdcfa8dd84a7cf17fd2097adb9d9b015fd6bc975', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '1b9d6f061974c3c74f2f45062c7d3e76807cb2e4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '81e33723778bd39a5ea004ae02fe91a81c28763e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '9618aecf2bc2cd453c030f62a1a42eb7eb36e991', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '98106af7ef5c23b0d12d27f3933c2ef006324a10', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '29c677fbce202f2810ce023d63adfffef097de13', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'df8261023abd03d90cf14f9a3ba17c9990f0d6fa' }, index.h("a", { key: 'd3d50985cfe7b26d6abf72508216026b87000bac', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map