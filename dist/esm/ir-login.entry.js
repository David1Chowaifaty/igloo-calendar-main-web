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
        return (h(Host, { key: 'd4a98d5cc2c89a4a3d88860ee2590b31d673463c' }, h("ir-interceptor", { key: '606f40e6132253c983e81eae62e4cbe784375d43' }), h("ir-toast", { key: '43d07d1e4087c69a4f4a66266cdbc36aa9980f54' }), h("form", { key: '0945e47e33478eda4f2173944c7b18373d6fcc84', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b31f3bba911fd10a2c979f6368ee51802a21bacb', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '9ce958051c59ec674b5af396b5390b7ffb9e567b', class: "separator-container" }, h("div", { key: '246ff60633e7b58e66413a1f3627805272505f75', class: "separator" }), h("p", { key: '9cf8b7e75dbe658a7b4618f0e5aa20b17a986ed1' }, "Sign in to manage your property"), h("div", { key: '7d9f13c743c7b8584b8ef959dc1fc03f1edc53fa', class: "separator" })), h("ir-input-text", { key: '266b28fb225f91bc27b7742d20036eebf109b3ca', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '3e0e1ba8e6c0e1358f9bcd27091e342b8424b058', name: "user", slot: "icon" })), h("div", { key: '47cd877cdbf178ca86fab48d26df4ac9b8093ce3', class: 'position-relative' }, h("ir-input-text", { key: '793177db08ca96b4110c3d54b59cb82c671a520d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'ce317a947428f40a022bf808925b0bafd159d1a9', name: "key", slot: "icon" })), h("button", { key: '7306ff810947677754bf4b31f477115e838f106f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '8542017b34c559543f66aa6ca8ba373fcee47778', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '484b6cb18fcc92a42349eed9d7542dab8fddd44a', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'f23b9f3e8d18d357983a2d46f46b332d9f38c185', class: "card-body text-center p-0 app_links" }, h("a", { key: '81bb2f3643ca42af0e1b347c0ea2c830eb7320de', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'd628dcb60550c657ab95bbbade86dd789b554cdf', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1d3315a3acdf18a5d1016778dbf02850f240c6e3', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '75bd064f5eb9e37f5e69bf8c77ed7683dffb3567', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '0ce3170d19a2fbfb66ac747c76302c185c38c4cb', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a9d07d76da80d49a61c6b6a92ce4f2ab0efe631b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '421d738f10cefe13e5733d4f4e2f20ad02ec6d97' }, h("a", { key: '1eb9a0a06832dba66d880cf505facd60846e09f3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map