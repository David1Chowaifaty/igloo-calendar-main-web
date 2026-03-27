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
        return (index.h(index.Host, { key: '6fe5b1fcf67fa016c30a04abff6b2216213a9d49' }, index.h("ir-interceptor", { key: '9a81d42b07d01fc39b38d97aaa5b6e71fd725e41' }), index.h("ir-toast", { key: 'a75339f8f0209b6b9d30ec07534e86ad757fc234' }), index.h("form", { key: '60d8f424f5815600a9c4a0238b533b7a47255d3b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'd2a5f59384dd704645f4212fef9cf80cf0136704', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '355471ddfb92b3cc184a3251082a5d6223178b90', class: "separator-container" }, index.h("div", { key: 'a75e367555061e2362c4dbefd079af691173a4fc', class: "separator" }), index.h("p", { key: '2b6768881a9feeee108e5374907e1a8768eb8009' }, "Sign in to manage your property"), index.h("div", { key: '1bbde394b80b85d67b7cfd9cf177e9f03b2a5d03', class: "separator" })), index.h("ir-input-text", { key: 'c5e459233df8a0722cc9dae6002ff7842666ef00', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'a614a88d7c8e561ee501293dfcd0119ca8914c6e', name: "user", slot: "icon" })), index.h("div", { key: 'd7e4915cb104c7e0b8b83f53ada8e002de01ae00', class: 'position-relative' }, index.h("ir-input-text", { key: 'b5f019c845e3f151d2d986d2ea329dbb462d9050', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'f0b7db7082d5ee44a2156ec72a42530f0896fd07', name: "key", slot: "icon" })), index.h("button", { key: '25631461d1fe812736e98bf12a14080adfdcce05', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '78879e6f15152f2f00cee9cb24b8e872394458e6', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b2d057f532d4de3573ac2232adf83a97ea871f83', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '53e652058c75103c308b6620065230b8fb1f4e8d', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '476496b60dffe4f796fde8c1417165fcdeacf867', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '2c7508feb74f6a1688489ba34ad83b2e544740fb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'dd6d1356bf9a2c918e08e37a62a65cb60b2a3055', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'bc5c9b0cc327ab4b0b99a7772206796c2e96e240', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '7718d47074cf9975f4bcb0949ff1df0573a9254a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '60ec867c1597d22c79eda0552105f9c4b76c58a8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '0a2f7cd208e66fe4db778e2b489f6c06cef52671' }, index.h("a", { key: '221e569385ce0a0b7e867841d26124a191b4523f', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map