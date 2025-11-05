'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
require('./axios-6e678d52.js');
require('./index-7564ffa1.js');

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
        return (index.h(index.Host, { key: '60c9452314780ddb929be7dbd13ea27220b97ea2' }, index.h("ir-interceptor", { key: '21438a53605d3f0439aefd74b9266f5faac1fce4' }), index.h("ir-toast", { key: '43a67189bc97c7222dc4a7a66c05d243e810d721' }), index.h("form", { key: '84b961216675700c4e4cadcafc52621c294fd130', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '2f2f06c63da56975e7e73c1a0a9a6aab4f212db7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '53c5ee736b33902b7e2b5fc0eb8aebd7951a1413', class: "separator-container" }, index.h("div", { key: 'ba3e1ceaaabd73f77a5bad265a5c35af53690989', class: "separator" }), index.h("p", { key: '0c4f7f87a047e1f5a07be9ac7bd057a1f5319f75' }, "Sign in to manage your property"), index.h("div", { key: '869a987d893355c4ce2bf0bd8c96a791ffe80197', class: "separator" })), index.h("ir-input-text", { key: '5c3b24334a5fd5a0a87ed66b9bc7e26a0294eeaa', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'b448324e370d41304c9b587bb5322d795c14e23d', name: "user", slot: "icon" })), index.h("div", { key: '697862ab51a12ce0b070ff565292238346269721', class: 'position-relative' }, index.h("ir-input-text", { key: 'dda18cea4c295d883ab3da6a53b1f0fa4d17bce6', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '696f3f65df151d7df3bcd71d843d84b088b0337a', name: "key", slot: "icon" })), index.h("button", { key: '14d11bf5be4d1506b98242da63756775c2acb889', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '429790045849870aebf33a0bff1c1ecd37e79071', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd4c4ecf7675db2ab33899a9ecc95eb390cd32ef6', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'f63cca0300102dc0bd91fe02e4a117f2c296bfde', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'cd31832172b59b2619a85867e22f33afff8f1878', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'a9c1de44568e9c5d983c5fe4102dd5d1258f0b64', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '56ca2ee2cef764ef4e738b732f5b3c4e7804e831', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '80255dc0291cccaceca78d2e8862d5139b36bb0e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '58609fd94821910338668e5ef73e4f6b3041f2fc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'fc2b8d67e5b69434219f3feda4a0f79f50a51198', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '89835bf3f3d8565f3aa4ad18a9b9735bca077094' }, index.h("a", { key: 'd184ac3e6cfa901178d2ed24a49c26ea02d30368', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map