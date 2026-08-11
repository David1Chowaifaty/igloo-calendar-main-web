import { r as registerInstance, c as createEvent, h, H as Host } from './index-BxxIyJIp.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-l69uOCdh.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-xEub7_rB.js';

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish");
    }
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    token = new Token();
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
        return (h(Host, { key: '7e3f1000afef46f9ab93ba7a0a2f950e76bf94ff' }, h("ir-interceptor", { key: '93af8e0983cd1418abb06465b4628583392b9b7d' }), h("ir-toast", { key: '05e2547e77adce2d224a1b9cf624e8ba1d7a1156' }), h("form", { key: 'dfc0cdea753d581a1c3ce4108ff45d259db95564', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '33578e0d8e89a005b992829dc6f598b498194d8c', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'a7fdfc49cc2ac62fc64a7963ac1156d136a80f2a', class: "separator-container" }, h("div", { key: '2cce20a623c938a914df8440a6d426d669067efb', class: "separator" }), h("p", { key: '7a01a100c7c189a76344007378d808148131695b' }, "Sign in to manage your property"), h("div", { key: 'd978f7dd2cb7addff27b9bf0a28f1be03b145def', class: "separator" })), h("ir-input-text", { key: '1906e1390f9b2db05597fde78a8058e4d87891c2', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '450b9dd00aab380f648f75cffeaec65fc507334b', name: "user", slot: "icon" })), h("div", { key: '6fe2c8c67161279289ee491d00221adb90260ce5', class: 'position-relative' }, h("ir-input-text", { key: '72acb46a79d4623edff98812be826ba9d54db479', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '99c22ced0af58a1e3cd1d98d7f6b56044953c77c', name: "key", slot: "icon" })), h("button", { key: 'b61f3b772022e1c2dfdcdf1434e0996c34bcec92', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'bdc18ffef0721fe6320a86bf077f3445c7e31e2e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e324ce76b239593187a544c3840589654c98dc71', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '4300adcccd417d8c7e914d0d95664cdbebaa1689', class: "card-body text-center p-0 app_links" }, h("a", { key: '0e12d5ca930b15255a6cf76fcd0530d89a958e47', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '46c8af37f441b2707eeac7646cbc10daa1d54a4e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'e2f3a58b93c4f2998091bd33b185f1531955e67d', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1a6b45b8ab9e94ad02863765d0f6c418c7d19c7d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'cec630882a70cdc01fe7bdd1cbe08786ef6b422c', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '0c17ffaabfeff811ddc8d8175ee3ad579cf1a170', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '93dedc1ff4d2b33212ed481aa597cb0d8e00456d' }, h("a", { key: '62c64c4441115c18a52495bcb0a1b6361e1853b1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
