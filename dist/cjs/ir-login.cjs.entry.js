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
        return (index.h(index.Host, { key: 'fb6e0d6b0f41f923bccd7a745b5a221e0c4e6f29' }, index.h("ir-interceptor", { key: '239d736708658bc79936f7a07a0808473e852864' }), index.h("ir-toast", { key: '3f0e1cb7ba0d2cf9fc017f6103715458bbc69bb2' }), index.h("form", { key: '68c6c1da189430754389045d141c3057316ea7f8', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '3afe0b649df146945df02bb46c9e65ad5ffc1eaf', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '1de1a620f0477a1674c0a2400bc969437760144f', class: "separator-container" }, index.h("div", { key: 'f0eb2b78e6d06797af52069a34b3f0b2eb525748', class: "separator" }), index.h("p", { key: '6ee91d3fa7e15490be3a2a3a477996a68c1e5f68' }, "Sign in to manage your property"), index.h("div", { key: '49107734d1cc28f3a6269504d0aff965ab641295', class: "separator" })), index.h("ir-input-text", { key: '2f91ce30d54a5a67a01c3fae2d5158fe8dd75195', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'ba58e38836b9528386c68568ec14ce8e3ba6887a', name: "user", slot: "icon" })), index.h("div", { key: '5ba07d8034c00e778bbcf6bf10f4466f27d707d3', class: 'position-relative' }, index.h("ir-input-text", { key: 'f5bea4c76623728cb0afef8b46637fc307e14b74', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e85af7bb9e09fff69e1d71f491a66bfb4d4c9081', name: "key", slot: "icon" })), index.h("button", { key: 'b2d77b4c80fe1039c88d740ebc8bfbc82e97d848', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '6bbc871fec2313d4c942e8b09e3560c141bf6a4b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '8098ccd74822d8d502565eda33c790c4ff0a8042', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'b6ec5e20be685bb2a08fb5590f2c778b6152f83e', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'fa14182da00d99aa2883e93ce8eda2e56a27b960', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '58145bcbc0f4d6b59dac99b7809aef6abb3d78eb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '2a450626262a4df565bde396dad23d7289dc3d3e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'b068f4265f111168b2df93caf3edfdfbdb8f68f9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3bac7e0233c2c3abebb99bc08b098d8b481ce54d', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '1ed1ae80103fd4b540ad95428bff695fff472a86', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'be0b6d5cef3a26cd70db4d5b93d6f91b45af03a6' }, index.h("a", { key: 'aa627ae7af9ee77807d6f724ce2dcf1664d697a4', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map