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
        return (index.h(index.Host, { key: 'e4f8b84a600eddeb2f982dcb0bfbde352c23d53a' }, index.h("ir-interceptor", { key: '1690b560c4639056f76ee75518ce1baf4cca8467' }), index.h("ir-toast", { key: '977000bd2bf08ee4c8b6a85c22beb33adf8af6cb' }), index.h("form", { key: '469f811cecbd652e8481d2128a2fb9395fee5af1', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '2434cf1cc70626e11011e01ea492399f0b1b9f6b', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'b974f06da20a693bd5d5fbf4896e0d5d00ac113c', class: "separator-container" }, index.h("div", { key: '2f4e4f0fc3bae0e47c5f55432a1f5b0bdc5cfde8', class: "separator" }), index.h("p", { key: '93e35a9d681127a2d93f7a1d52150e19a70afc53' }, "Sign in to manage your property"), index.h("div", { key: '5bd198028e3719afa4254cf1f1feb0dc1860cfbb', class: "separator" })), index.h("ir-input-text", { key: '9bb9c22eb34829dac733fd656eb52e665ca9b71f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '8378af517647328285c5a88841d8c6546510e2e1', name: "user", slot: "icon" })), index.h("div", { key: '6cf2a30fb625a078157eb5420399e3cb6a10f45c', class: 'position-relative' }, index.h("ir-input-text", { key: '24745666e1992110dea921a476c8f6fcc29f3e62', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '457ac79daf49a4571b7ffbfc196d0ee315c0be92', name: "key", slot: "icon" })), index.h("button", { key: '583ec09d17fbc68a8bbeb67c0b842247992f750a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '77d0d0f049e4c4b79b98cf1fad34b0d2963aa737', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '4f935377c84524973a81ba7bd44b595349415d53', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '38529423924d70ebd75ca35e7b18663a92064d19', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '18fa89f551e0ca8a9789cb2557fe6db77a8c9ffa', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '386b82e59afaa5a400846c5bf4cdcd47b6d0e172', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '4f9cfbd7d04180821a4c65de25729751d0274be4', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'ef31ddcba49d8e41d5e9f55c52a6440556a69fa5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '2f24014ba09523d39efcf962ab683e3a02b0bd38', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'e9d2cd569399e3dc26294637ca0cdc680f7513b0', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '01a34ddad74d4e8feea2b78f28c5ffd25def657c' }, index.h("a", { key: '9d20cee7c05cb24558b7c0c7242621e8bb17f3bd', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map