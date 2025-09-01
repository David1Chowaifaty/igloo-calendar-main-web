import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { T as Token } from './Token-6c389e24.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish", 7);
        this.showPassword = false;
        this.authService = new AuthService();
        this.token = new Token();
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
        return (h(Host, { key: 'd2b0da6ed90c5135a4c3fe13d14fe63180012cc9' }, h("ir-interceptor", { key: '1ea4bd75249cdc60f873cafa1a94693a633b5d0a' }), h("ir-toast", { key: 'b1d91175cc1de03ac4e1016f48740f6252b24b49' }), h("form", { key: 'b67f1feb470fe86643a9423b67d896817c46e069', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '8b9e889ec8f7f75a9df9d298097f7151c604350a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6c7b49b0f3fe2b24d92d2e81422b7d5ec33b21b8', class: "separator-container" }, h("div", { key: '3f1b7605be354202787b8ede485db3b91b7f6e78', class: "separator" }), h("p", { key: 'e572eff86a7e250059ae0a098c67bfb8b1f861f1' }, "Sign in to manage your property"), h("div", { key: '6c773a87a8d5040f5ca927e1adc122a75623ff09', class: "separator" })), h("ir-input-text", { key: '104218cfbbdb8f0910c1ebab246eb09f0fb4ef18', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '811a4d6ca046b989bb3ecfe06b4490939a1f19f6', name: "user", slot: "icon" })), h("div", { key: '96eacd5ef8d4ec80c7a9db6c1c990897c5214080', class: 'position-relative' }, h("ir-input-text", { key: '7814edb49298d4a86c0df91ac8c25ea965419bc5', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '2dee17e37fd577ff946474f12dd764791bfa0e0a', name: "key", slot: "icon" })), h("button", { key: '9943407f8ea2e0f80b266b05dc13e056dcb2c804', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'f481e7b380c47d5966c99b261295bfe1948e9da3', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2fdbda65c1d32e1ed2e7b1bf971a7155cadb13de', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '5dfffabdd0d13be57917a9e8b0eb40497c688700', class: "card-body text-center p-0 app_links" }, h("a", { key: '71b1111723cbfdb2231320362a0dba18e4936bea', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'e102ffcab24938ce5dcc8063b9349ac2b25a3756', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'e4c71d2e8c37c6164e7f01e605bd8872ca00686c', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1a3a4ce7cc28ea177bb43f0b780001c5271f1975', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '2abb6a3180efbe9acb74edd52983e443f6d3e305', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '338acce86d147318940c55feec88ec0679a722a7', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'fddd01d891a27d8f5dae15f05beaca663958d10e' }, h("a", { key: '9fef1736486e39279e34867d1f6eec41cbe0af3e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map