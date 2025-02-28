'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const Token = require('./Token-049041c2.js');
const axios = require('./axios-6e678d52.js');
const irInterceptor_store = require('./ir-interceptor.store-a052c48d.js');
require('./index-3cfd4bf8.js');

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.showPassword = false;
        this.authService = new AuthService();
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
        return (index.h(index.Host, { key: '00caabd18054573f29b9d7c6b9e4fa1887dc0872' }, index.h("ir-interceptor", { key: 'c04c5c414e21c4f55b61570be82e73e4162cfdfa' }), index.h("ir-toast", { key: 'fa6780898b10bbd37fa661f48c2b57ec6ccf608a' }), index.h("form", { key: 'd75020b094f2603de2b5600d340a87c7dc376316', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'e8a77b74ff63d410c21181347f1555930e42589f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'f20dbcf50cea870cb5f0a72da83fcd750934a803', class: "separator-container" }, index.h("div", { key: '6844af418b17dd82f39bb0e34affd827d0014dd2', class: "separator" }), index.h("p", { key: 'c248d6ef13fad6ab9c4a945171177a0971eb6495' }, "Sign in to manage your property"), index.h("div", { key: 'e8ccf9513778cfc9925c7bf175073b3220fe271c', class: "separator" })), index.h("ir-input-text", { key: '016073442af559fdaa088561a9911c9f5f87a574', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: 'd21e386f0b8731605bc2bc2d5c83f8461ef9aa5b', name: "user", slot: "icon" })), index.h("div", { key: '847e322c23f9c963b2c91cc7d54a641c22883794', class: 'position-relative' }, index.h("ir-input-text", { key: '724edc20fc27d070700d64caf6d541475f31f4cc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '99a710cea0fb134a58157592f9d91837946f42e2', name: "key", slot: "icon" })), index.h("button", { key: 'c69301e4064f6aee30ea38ba16f2e700fa343322', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '0f8ed3aeca17124d779c7d5209fa8eb809befcb9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '42f1d73c8f9479556e0e60938dca2b2d5a52ce69', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'fc6ba0313823cdebf11d46e54592ecc2b768f281', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '5f1b32b67093ae8edb5ab24ac3d9acb4375438b3', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '0049b7bbeec5706d6702baccc54713047cce6788', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '21e2cfcf29b0254d389870e6845e3cae04ef0ef5', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '1552a604c79ad3c37a7e5dfe05cf1a4c3d0edd7b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '820a17c9c09fc3ad6fd17115018b572ec790ac98', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'd1f54acf7916b724893d5806132453b41be5efe4', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '39ec96a8e86b0cea35e1cd838c3c97e75f8db525' }, index.h("a", { key: '59447183a1e1e864b1f8101836b9c308917482a2', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map