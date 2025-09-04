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
        return (index.h(index.Host, { key: '9b3a9f55a365de7ae0ce6c79149deba1514d81ae' }, index.h("ir-interceptor", { key: 'd79373e5c88cfac6a53a49a37dbcadfd53be1a19' }), index.h("ir-toast", { key: '4b75f2b2f3241863dc64954e0e2b7f714553e8b6' }), index.h("form", { key: '0c1e975210d2ce1b1dd38a1a7a090fec67f83771', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4993941fc8ffbe3a3f3cd23c8e5189fa0c7935d2', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'd39051cc49d69d90bc20ea6b1badbaaa7921f885', class: "separator-container" }, index.h("div", { key: 'ff1a134aa45bd378182e99bbbe01d02db8fed667', class: "separator" }), index.h("p", { key: 'aa21612f4313fa541f8ae8284dc8c4e1de38dcc4' }, "Sign in to manage your property"), index.h("div", { key: 'd257392202eb359b8f2c3ef3ea82428bd477b32d', class: "separator" })), index.h("ir-input-text", { key: 'e860bd9288044ae43290916e1575b3597c89c51d', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'df5e231e196ef222968707147b8aac6553a8b5bd', name: "user", slot: "icon" })), index.h("div", { key: '8f59ba12c39a6171062f5117490c7e12a2490720', class: 'position-relative' }, index.h("ir-input-text", { key: 'c9f56c8c68df709774bbba6f0b5fbdd1e9eb2cbe', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '5e3eb2a4fd58a83785b1ef620d3a568a1c1716c3', name: "key", slot: "icon" })), index.h("button", { key: '82b8acab3a873033f74ccc9fdc6cdf0695a82850', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '11961c1b84316d7059780e76f6795b09ec12256f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'fc51e9058da2c74c5d58b4e9dd418ddbb945e2c2', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'e22d85ed6d1b4f0849f9b17d5842b34a5dc196f7', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7c5a1bc78eeddefdcea9d0d2bf457dbbd2dafb5d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '25b851e56ab8548aeeb4abdb6574a6773d2c75c4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'd00c084ead4cc30eafd4159f34b8bc6fd9c3fa84', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '2d26af8d9412411f325fc5733bf1e11d2b2bb556', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'e8a07fa8d4f0bea5b825fc09ceb0f458ec561734', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'd1635e5124950cded5a965371fb9ca1f0438c909', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '6d7edb1e568a92a18963192fd9eb16cddec095ab' }, index.h("a", { key: '92bdffa793bc9dcdb342b2a7ebb37735053f5117', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map