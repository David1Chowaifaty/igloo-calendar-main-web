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
        return (index.h(index.Host, { key: '1852dc0f4d15e59934ba796fc6b1a2d9cf2aec3a' }, index.h("ir-interceptor", { key: '4411bc83581f05c424f37f8a180eeeddaa304f66' }), index.h("ir-toast", { key: '38bacca1934f8e9c573a1b26a5c7d135d3bcae40' }), index.h("form", { key: 'be0f7f4f0cc615307247e15cbdd4f8475786c846', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'aa184f1ce485d8fdae4fe1b6f56288877eab66e0', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '165e23343f9e5c74aa32c2aa87647ba222eb2f61', class: "separator-container" }, index.h("div", { key: '226e0f4b54b02edd730d9efae4855dbf9bd92548', class: "separator" }), index.h("p", { key: '834a2e5e622adc8922d4188e395eb99e3ca6f829' }, "Sign in to manage your property"), index.h("div", { key: '637c7ce548ca6c13c48657e13c519dc2573b2bd1', class: "separator" })), index.h("ir-input-text", { key: 'e3ef288e6a21afd214e379fcd943ed143492749f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'e72d7c6de7e47dd0007bb33b6467a2f7fa99692e', name: "user", slot: "icon" })), index.h("div", { key: '2ce260a9c26ded8db47b2ce05a197dfce05c25f0', class: 'position-relative' }, index.h("ir-input-text", { key: 'ccda42dc6d49adb6ac8718fdc759b27fc015785c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '4ef7ce4f426ba78924df3bbd11f1dd465467285e', name: "key", slot: "icon" })), index.h("button", { key: 'e19be6a9c10d6378237d029681ebf3ca148991fb', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '6f777641b51d1940417958420e58e1dc0bc3a205', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '0bd77d0b594608d721aade9ba9c4a780ac4f9101', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'cfff235c4b902aa4fec19f9799f7100a40ec5c64', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '9b87bb48aa9dd26106643c48be0f1e8add60528b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '58500f1725f3ff35ee45816ab09dfe12bce4f90e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c979553ac036d46814806fd1174b8abb5d8d3834', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '652bff3fbc28788ada9dd7b996eba0c11a248a2f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '02e77e57bf9f16b891969667a61d77cecf9382f4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'af8e3194d41228f717aaf097b57cba2ad40ac6e2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'eda0a714926db47cf1a8bb08fd0aeb1060a0c272' }, index.h("a", { key: 'c51912da54746a9c89d8cd0b6d30c001fb44b0d3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map