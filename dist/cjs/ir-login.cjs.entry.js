'use strict';

var index = require('./index-DN8J4ULi.js');
var Token = require('./Token-mN7PQKGF.js');
var authenticate_service = require('./authenticate.service-CPW79Uh9.js');
var irInterceptor_store = require('./ir-interceptor.store-DHA5tM8U.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

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
        return (index.h(index.Host, { key: 'c4f931c4de904ccacc8c98a6507cda8223ecdcec' }, index.h("ir-interceptor", { key: 'ee281d41a2116727096514e0c46b6ba85a4d787f' }), index.h("ir-toast", { key: 'a5f216f1e536da64d04b8af3a448c53d77f95ece' }), index.h("form", { key: '7e6589333a09349ec7c61d97f9ec2ed53e76b1bb', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '35c1aebce0e00b300849531ea50bc081c7673ebc', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'cf122ea1e76c575162ada71489614d96dbddd65c', class: "separator-container" }, index.h("div", { key: '4ab3f0757ab0bf721bdd04f57a742022c67cfb58', class: "separator" }), index.h("p", { key: '7b33962cd3495b6151401a350ffbd23652ff486d' }, "Sign in to manage your property"), index.h("div", { key: 'be0801f2a476b0d6201ef46b7df6886adc7fa01d', class: "separator" })), index.h("ir-input-text", { key: '30f1ea22b0e93026029846f7d0be26361a95cca5', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'bd3c68937497f39fcb6b9571341d8858981d0f07', name: "user", slot: "icon" })), index.h("div", { key: '17ca02ddb06901417925bd6743f7392092989226', class: 'position-relative' }, index.h("ir-input-text", { key: 'e94497c08758af93eca9f98e8f53ecca5ab393cf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '410a45c4f0a87410ce7e04d543f97a8f19771f1c', name: "key", slot: "icon" })), index.h("button", { key: 'afe6fa364e973568e5def76c226124c48af51ae7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'a6e46248525106ba71a2c16d698531aa527e18e0', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '7367954dfbdc548cd1c3634febd5347cca711d4d', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0d230c522ccb5280464be9792f18f63b38cefb6c', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '0bb757e8b24fa192699319ae1fcfe3b261d93008', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '5eacc971d24a3a07feaad548cd3136d6a799209f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'a9b559dcde986c1510bcc77f7689787537031946', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '8f75a6b93894c445d6a3184fdd2284c728cd8c61', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '638a82b2e92cafce46e57ddfddfd3070f1a9649a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '05d935213f934b535a42d75e2c2e347ae1625813', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '0c81cb8fe79eac5ddadad4a3e39461febbdfdb52' }, index.h("a", { key: 'dc37547c0d503cecb65e910a9ec4133c9810b669', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
