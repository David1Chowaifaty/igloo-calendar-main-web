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
        return (h(Host, { key: '772ebbd135c084e140611dc001a28fbd03dd1afb' }, h("ir-interceptor", { key: 'fe52e4b6de4157b83f9dfd8f4209d8ab35018ad9' }), h("ir-toast", { key: '164c486656687f733b601649411caaa4013e3b8b' }), h("form", { key: '32ad3bf5d8a4c0e33528c14701a659efbeb3db8f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '2bc608613718559bf9d98a98a1397bb72a4ee4ab', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'a1274859e4f062bb6ada0de76190c49922fe6f23', class: "separator-container" }, h("div", { key: '8579c8078d5b039c354103b256c994626e7bb753', class: "separator" }), h("p", { key: '1d6fdace327d3ed4659cef690ae092d54f43aa19' }, "Sign in to manage your property"), h("div", { key: '3b0e4c525ffa4a1299a1edb01665f7d149d1db67', class: "separator" })), h("ir-input-text", { key: '2f5546e6cd307ef87005f70c1a48f0617cadd52a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '0e29c380643f62e09af1a31bc44b4cdff0dff8ad', name: "user", slot: "icon" })), h("div", { key: '6624827ce786a00b57f2db346df53c0ef532b860', class: 'position-relative' }, h("ir-input-text", { key: 'f3a34d4af5316fcb7398f02775f717cd30498f84', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '49b6f7289b840fbaf54a8a573b953d4624db7cef', name: "key", slot: "icon" })), h("button", { key: '179f354d8206ffebb77d5b84d0d79a85d25d4c6f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '7f7c55bdc2f874770fe92e75155a15b64162ff5b', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '292abaa515a153c99008f3b21ec3a02f1e2e47ee', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '8c06908dfbbfbbcdce4c1e72b94a70c00165a808', class: "card-body text-center p-0 app_links" }, h("a", { key: 'b4886b271a17b1a9e6b210230430df56d0a08a6a', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '42548a45f2501ca49873a5038865cc9abe790cd4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'd0f47117f28bd055c2855010aaed95c146285d28', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'adaa0761914a5ac7a29d3679c9cc0f09a1c28fe1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'd7109312aaa66a14ecf4915eeea38163dab62aea', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '9dc2fdf26542c138849f712b496ae9c288271ace', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '28f75c8fcf8e95afb4a408d9420c6fd1d3c8e821' }, h("a", { key: '40d9456e4fd1994f23677200e27477357f9def7b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map