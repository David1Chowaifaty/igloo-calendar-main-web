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
        return (index.h(index.Host, { key: '69ee23db4e1a8e2903692156c118fef13c05ac61' }, index.h("ir-interceptor", { key: '62c4a25d11a068be4bcb298bb2688031c84f8f89' }), index.h("ir-toast", { key: 'edeaf1aa7d4ee7ab66e6f63b4dcf5c5cfab2af13' }), index.h("form", { key: 'd9833a2f0a4877cb9e499ffc2f3844a25dced2bc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'cc65c3a991192393a95d6d031244ad86d9aca14e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'c652125c60cf816bbd86c0e64ec2de4bdb0b7f28', class: "separator-container" }, index.h("div", { key: '6f6f5eb4286ae462a35093f645d04740f5c82fab', class: "separator" }), index.h("p", { key: '534135400164154e26131618a84aaebd2c1e706e' }, "Sign in to manage your property"), index.h("div", { key: '6294fa7d68141a9b27ac154e54f9e09862341fa3', class: "separator" })), index.h("ir-input-text", { key: '579111658302f91414faeca40e5725aec43fbe1f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b830d19ae8adbed9330b0891f4978eca0a52a520', name: "user", slot: "icon" })), index.h("div", { key: 'd764449a1c8d4674751e637930b323f0bfbaa66b', class: 'position-relative' }, index.h("ir-input-text", { key: 'ff2631250fa2b2662afa002000ce5f25af607ea2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '168b883eedc767a2aa0245c2da14cb3691781a1b', name: "key", slot: "icon" })), index.h("button", { key: '04ff5036fa07a3cf737c8b46a4fd4625883ea9a7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'd60c59b43a6f08af9da2255bed0837951595158c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'ad7bc337ca40897f383a0b467942741a0e32f2c5', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0e81bf47eb2007d485de253d476d9880a35f6e57', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '26ef41fb80cabd00b32d95f3ad77594c61cba62e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'c8a826721f5f8e630e57258f37af837dda34d297', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '65ee181084a7a440757e2c39438679bfd73dc666', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'a71ae5cc5ca0874180269d486f82039a330cd6a6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '943927a552566e897a021cc35e8ea26d61ba6201', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'e46479c2b79ec7568b9120a1aedb75c17db1bad8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '3af70365eb8982d4672f2bced19854717469d3fe' }, index.h("a", { key: 'faee52badb4cf6be061a7e58342f28a9726bcef7', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map