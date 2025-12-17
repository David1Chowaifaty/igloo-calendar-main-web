'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const authenticate_service = require('./authenticate.service-49259d0e.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
require('./axios-6e678d52.js');
require('./index-6299b0f7.js');

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
        return (index.h(index.Host, { key: 'a90328655beb403ce4092b496ebf5c787b8ce8bb' }, index.h("ir-interceptor", { key: 'bb18bd18df03b53b9734a957ac100dc3b78643f9' }), index.h("ir-toast", { key: '8c78ba6fc86cc1ab35d4fed46d6ca921545fe8a5' }), index.h("form", { key: 'ecafaed86f784ecbcf1afe2cf864eb3febb942b8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '2536d9f3cb598762acffa64155c0192fb352bc38', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '39c72df088faa4c08120d8e3d0f8046360947d1a', class: "separator-container" }, index.h("div", { key: 'ca978717aeb007170c2fcaace3239b40ab4c2c6e', class: "separator" }), index.h("p", { key: '197435ea7c2bfaf4c6a15a5692bd99da20ad8ee0' }, "Sign in to manage your property"), index.h("div", { key: '5da8131c1858a7b745c061d6835a0994a7f2dcc2', class: "separator" })), index.h("ir-input-text", { key: '47a5af34a330e7893e11540230b90ec8b45bacba', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '476e94a079d928cd42bba56b2865fc6c6ba2392a', name: "user", slot: "icon" })), index.h("div", { key: 'd80c836ca0f2778d252979d948904fe407b9d651', class: 'position-relative' }, index.h("ir-input-text", { key: '855d6b04fc7aa9470b2213e381abf9526bb8b0dc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'b818819c4441cfbf99fd2f797aaa309bdd13c1a7', name: "key", slot: "icon" })), index.h("button", { key: 'd8fe2a10689f1bfd746e973806fedeb77abca2a4', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f629d8e15f5073426db3fca33eb2d6a83f213b82', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '932ec2ce7d5a8a5f02642dcacafbdc507bde1246', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'a12d82f8a45123b02beea030bdcb6d16f4070938', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '55cf9c3958ee85090d31e83bf0d6d5a4f7e12aad', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '953baebce37d84c74a6e7878d6af067428a5fcdd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '8a7b69833a23c711a487cb8d687dbd462b971ff1', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '49eaf9c41f04b3463254c5baa10358668d137be6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'ed079264e4aba58787b820dd43ae42c5afca7d48', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'd6dcad7e7b64ef5b91722babf44cfced9fce5d3b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '6fb16b87cb59e5df569d9c86c57781285d181383' }, index.h("a", { key: 'e04dda01f8eae7c06219f80e238389b45ddac71d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map