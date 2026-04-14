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
        return (index.h(index.Host, { key: '18ba62a57725460a9a9faa038ba0bfdb2588a8e2' }, index.h("ir-interceptor", { key: '2e03a5a446a9a55aae4f06241f5c6b664ba2111f' }), index.h("ir-toast", { key: 'd1f41a4d167265f54a0eae865ee81b7d6b34f725' }), index.h("form", { key: '9cdd94ce4872c2e0e4be2a98f7103210024b7297', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '660cb3020071e2618fa18237479ab45c35e91286', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '303ba8442ce793a06cf29531ca6c41e8bd10752c', class: "separator-container" }, index.h("div", { key: 'a783f9707dba8331ca3d3bfee19efe796044cccf', class: "separator" }), index.h("p", { key: '6893bc0789d6bbc7fba410163f907eb093c3efe2' }, "Sign in to manage your property"), index.h("div", { key: 'fc98f2c3ad88ad73070e7cdc184e9dd72eedbb19', class: "separator" })), index.h("ir-input-text", { key: 'e88d114094cb62f6eb2a8b3e5d53d55a473ede81', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '466b5d8c5f1f322ad2fdfbdfe78eae88ba555431', name: "user", slot: "icon" })), index.h("div", { key: 'e7a8b9c60b06596d33d913740092c94deabcd702', class: 'position-relative' }, index.h("ir-input-text", { key: 'b15e7d58c78fe7ecdb83fd9c2f87d02fd4e86946', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'da6724dde8d62303ffb250b21f79c58281666711', name: "key", slot: "icon" })), index.h("button", { key: 'ad3f7e63dd2762402995d70fc6053013969be123', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '4166ca9b254fea753b5e5cb87665f74f028c6b9a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd70e8e4e288533d37e0268321d9efa01fde2ee06', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '61ba7bfbfcd65e80256ddb01c630ba1518b6cf42', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'e4725978760b14723cb45894d38619ec2f470f82', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '68dafa612b9d0765baf0da6e2fee01bac9e943af', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '9288555addec7736ebeaf7df3f9904c64cc7e78a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '531621971bbd93c3de4a22e4789929ab12e20755', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '7760af9bcf981fe983e411711b35fc6e119d15c4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '49d2ff43f508426d23c7dd00ccaf89e93f39da3f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '1b55a89d1eee1c01205303d9c01aba43254ba5af' }, index.h("a", { key: '9a879ed65ec73f87de51951ef4b2151342227495', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map