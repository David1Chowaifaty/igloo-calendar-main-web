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
        return (index.h(index.Host, { key: 'e33ab17517c384cfc778f3ecf047edcbf4c6629e' }, index.h("ir-interceptor", { key: '2451cbeec675ebb0e58d4c78657353c63501aa10' }), index.h("ir-toast", { key: '3f04a67d84ab58a4708ae4fad25b309ab45e876f' }), index.h("form", { key: 'de751597e57b9aac61bab1af8178a1d6cfe42b6b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '85b572295958a4ad1f232f9be698a7aa0b114317', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'f6c24a91993a2f5211965f05483ee4938346d0ae', class: "separator-container" }, index.h("div", { key: '1437ad8846550196c231b5779147588ca6c8ecb1', class: "separator" }), index.h("p", { key: 'fd74fe3b52600bb45dc0ec40c82bb9184888fa30' }, "Sign in to manage your property"), index.h("div", { key: '60ccab871c0d72953ed29d133d28083569721b20', class: "separator" })), index.h("ir-input-text", { key: 'c67aa0d2b8e4b7972a828eb53d6a9fa0d09c0bdc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '47820316bfa968f10fa05b4edd37d2f9f5547027', name: "user", slot: "icon" })), index.h("div", { key: '044e328b3ab308ceb897c3a24c21b708fd9bc90c', class: 'position-relative' }, index.h("ir-input-text", { key: '1d143fbbf39992c54b6c614785f2e897a21271bc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '02ed80add4c47740fec7b8cbb68ac97bc6dac599', name: "key", slot: "icon" })), index.h("button", { key: 'fe3022d435901d517062195956bfc6991dc9fd1e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'b521608a75e7b73ff07a9b45cfe8db289bb1a6a4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b00c16ce06a04aa2346bb69910b036ec0c34576d', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'fd263a725c5fc5b15a9ec96dcc5ef6d5ad41f2f2', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'd3adf475289096ffcc800351611b6de0663b1338', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'cfd8c1d30f18aa74c1b4d267d70e856aa6d586b7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '89852d12315d1c4a1bb637aae74474b049ef8416', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'b09c57f312049b9b68467b64d698718a575558e9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '2f0e064f0c01227997c0cbf80154c1add6894ac3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'a5b4b867362b4684685734a28b78ec8c140fec35', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '7d5fc351349969569c234b50b9507790ab72bab7' }, index.h("a", { key: '85be77021b496365df809e3ae1de7cd362010b0b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map