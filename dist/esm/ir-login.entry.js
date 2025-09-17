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
        return (h(Host, { key: 'fbe20a18563871c8a81bda228e750cb662da1fc0' }, h("ir-interceptor", { key: 'bf1c57ab61a04ba609e3cbb3f60a0df7cbd02929' }), h("ir-toast", { key: '13cece2aa90c09b3dd13a60a56f37742d6307907' }), h("form", { key: 'd3ce5b94d736623d6c3573877b999f003876f850', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '6789eb3cc2c497413515a50fc2b057fa5be6c79d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '4142ef8c1edbec73d85ec88bd224ab534666d732', class: "separator-container" }, h("div", { key: 'bcefb7594188c5c944e299b8bde098baef4b955e', class: "separator" }), h("p", { key: '78fc9d8a2f8b2efa197a0f883d00e3e1fdb55aad' }, "Sign in to manage your property"), h("div", { key: '8fb99422e9dca5ec3198ccf7a7ad54ded8243765', class: "separator" })), h("ir-input-text", { key: 'b4d4196c14e212f6bd48c55fc79c1bbf526754bd', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'c1ade7fe0d498e60dc5afada2764de890022219d', name: "user", slot: "icon" })), h("div", { key: '15e16a69a4cd5ed4c13c0781d9ac2f722eb89ae1', class: 'position-relative' }, h("ir-input-text", { key: 'e107297c9f384537f58f75e52687c2e26dff113c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '89d4cd1be250af14388e5aee7f72fdcc629e1398', name: "key", slot: "icon" })), h("button", { key: '53cbdc55fa22431dc76b6d48492fb31ad496b08a', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '86752dca54b618fda6feb9db1ea2bbbd90a1412a', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'adaa4cf55f725b3ee79e79db7fc67fe238bc461d', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '39584519a8546a1214d28ea90a98e13464df154b', class: "card-body text-center p-0 app_links" }, h("a", { key: '688d8fac42fc18ff84cf20a884e278812a43cefb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'e30bae53d5c0edc4f5bd6b8fe8b97d1676731b17', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '8368756af56c7d845e24d53383b4c4908b05d1e6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'c1bb4198bbc9963efc3afd7bb107b63fe48cf961', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '0882ce4959ded920dc28feeb36efe0f5a2f89f19', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '11557c18ad1979803fddafea63ac8cbb95a19e66', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'bb4a7a07ce5cdaa51afce1779e6353c3a9d37840' }, h("a", { key: '8ae5285f357013abdaf3cd2ac4749fa0f54183a1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map