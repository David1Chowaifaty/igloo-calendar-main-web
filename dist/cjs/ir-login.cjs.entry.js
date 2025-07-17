'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
require('./axios-6e678d52.js');
require('./index-467172e1.js');

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
        return (index.h(index.Host, { key: '80bd4b7f2248c4acb057a2cf10f7e3bbea69b160' }, index.h("ir-interceptor", { key: '5c46061e844fafb965df3f63c2545c47751060b6' }), index.h("ir-toast", { key: 'fc75cb73b4d7b3bb55e015da13f5547a77476a92' }), index.h("form", { key: 'd25cd6ddc61b21be4f958e4085b1bf273f263dc3', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'e0a525aca013160ca4097ef9d1a002301b8a1eee', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '7ac5cd1988ba9bddd64f7de39ceadce668c9d382', class: "separator-container" }, index.h("div", { key: '674ec7d265e3582a6f5f463b1870d07a5d0a2ed7', class: "separator" }), index.h("p", { key: '6b04af835b987daaa8adeb0e97eaf8e772c0dfe9' }, "Sign in to manage your property"), index.h("div", { key: '5ca468c9831a0eb43019d71192e2d1be65f17a3a', class: "separator" })), index.h("ir-input-text", { key: '246e348bbf1d75a0b59b9df9e6e0e94a7775f1bc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'c3c42f817a3f6bbf026e599397ee5e61f8f5cf11', name: "user", slot: "icon" })), index.h("div", { key: 'c07e0c71b7bae66c71e59f3fb2b5fff6198d097a', class: 'position-relative' }, index.h("ir-input-text", { key: '5ff5a7561d6127dbe8d95fb46599ac6b5cd1715e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e19931306cbed8800fcf06d63e16042f7687f174', name: "key", slot: "icon" })), index.h("button", { key: '21a6612214fcf3f9f83ec1e271cc7b9d2a580ea2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '8f95ae75bc939807398f23df1db84229c1e42e71', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '6f19af9522dc23fa3d1d57c51e27d3be279a4aff', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '4f06cc9b2259fde93b2e45730adff743de247f64', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'a0e7ead94d0f7b9a45ae7e3ac32c9b283c8d4ba9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '60d63d83ad1691ebdc56e718d4bdc6cf6c59aa01', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '462e444e04e8bf2bc25a8690b9b3b0c4945767fb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '7a323ff22ad37943a7af3e217ed9ef0c5fe676b0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'd1813f1a08635f161bbeb69dc853e7c7def86a44', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'ba7ab699c332e6573e8337730200bb153c13eaaa', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'a22f83e126a843d80936d9f5b86611d3cda7dd0c' }, index.h("a", { key: '7e4be694ac3375cf4f28a1975d2d319a25cc9689', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map