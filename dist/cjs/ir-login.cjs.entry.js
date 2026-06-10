'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const Token = require('./Token-fb15e0d7.js');
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
        return (index.h(index.Host, { key: '68a9ff10dbbdfaeaf53fc3101538e150538c63f3' }, index.h("ir-interceptor", { key: '62f1831168c2637a6748d5730371354dbb28547c' }), index.h("ir-toast", { key: 'c6f3c36433c4072f3a4527c06d0ed9132fed64f3' }), index.h("form", { key: 'd8a61fc6ad83df9e48b07d0b03253255c4aba502', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'a99650baf61d32f1393ab96e4821a28ad6672bdd', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '99f8222f9b06b7b31991d8b40947b3785edb2744', class: "separator-container" }, index.h("div", { key: '350aa9ca75b1a9f1d55bc5313f75262f6d2d5647', class: "separator" }), index.h("p", { key: '36efff1d7da6b33a5d19b1adb56156b21b566b1e' }, "Sign in to manage your property"), index.h("div", { key: 'adedebeeab856c4ce6ea6ec2b74129873cd7acb4', class: "separator" })), index.h("ir-input-text", { key: 'dd600161a1087e7ce7208c9e1d2265e82ad36531', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '6b8488d2cc71fe33161fc093936827e755830688', name: "user", slot: "icon" })), index.h("div", { key: 'ed95d84bbac6b3adeece1947a8f43d8beb1dfbcd', class: 'position-relative' }, index.h("ir-input-text", { key: '81aa37ab9b8ac7435c011874063540e5475da600', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'bfaee4e273bf11506d205bed1add8dc94d113bee', name: "key", slot: "icon" })), index.h("button", { key: 'd3a64978d23a9527cdc0ce17f03b87e34ad29bd4', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '5998225f7767d214171e3a509272289fd6a6414b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '56e81c880e4c7412d3cfe7683fc85b00a924e3be', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '33566cfd7d01cd1f6d6623c926b64f7980ec409b', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'f4f5eda3fe76cb0868a2d235c9ef7ed0d9caed1e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '4073c9d2a8e35c849759c57c076ac73f6420a2f3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'f700760b421b09fd347f3ebfcd94ca8b5f471f1f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '42283fa2685499024a762c339cf0064c9e29b5fb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'b631f2baa2a92d90e3854f06c45f05f8fac3cf11', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '033e87d32524bdaaf3cafb241182539a7c2a4c78', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '6e2771b44737eed8f3172ef68f67213b30aa2cfe' }, index.h("a", { key: '2729be0ff15b2a160444c60870cf7f47bdd47cc2', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map