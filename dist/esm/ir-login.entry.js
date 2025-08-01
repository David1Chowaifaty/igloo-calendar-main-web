import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-6c389e24.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { i as isRequestPending } from './ir-interceptor.store-db737948.js';
import './axios-aa1335b8.js';
import './index-c1c77241.js';

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
        return (h(Host, { key: 'ed1aaff556d549d01916eb32c7d58c50d474cbeb' }, h("ir-interceptor", { key: 'ce1087bc8bcd842320b1078e407e6b6fae356c39' }), h("ir-toast", { key: 'ad0428542e1555f6871acfc0898a930453e7ad17' }), h("form", { key: '546a8a0cc99c730f4d3ec87e2677664fcf078dfc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '25790e844c45d20c44bdda322b0bb570957bd2cd', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6b459341bfe8ae2a8e9d1a781e72906382a21665', class: "separator-container" }, h("div", { key: 'cb310bc973fefc58c15db1bcce97a40fab3fada0', class: "separator" }), h("p", { key: 'd173387fdc6fe796e41f6917f77181afbe5ccc4c' }, "Sign in to manage your property"), h("div", { key: '1bbaef7f36dff46d33e78f784f869c0797ca3b48', class: "separator" })), h("ir-input-text", { key: '6821f53e1cf07a3be4b346abe3c43272041564dc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a9c1cd7ea50e7d185110f2cae35d87f19a269ff4', name: "user", slot: "icon" })), h("div", { key: '25ed9bf37f6476e1ae5d8f152d741de409e86a9e', class: 'position-relative' }, h("ir-input-text", { key: '3d73a911f7f677ce8e02f5d269a1d63b745cb9cf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '629d946914a225813a2cc8e28205a5cc7943c33a', name: "key", slot: "icon" })), h("button", { key: '2f26603901d6d09efb548c3a2eba08f95bbdeb85', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '820ea27de92f9e73004f4121441e7914b03da3e1', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '0d1ca878d1b8cb8994ac7505c0d2654e427299af', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'd79f55909be53598789ee360998863460801943b', class: "card-body text-center p-0 app_links" }, h("a", { key: '3d3cfb8aca62fc5788cdcfed59246420e58021c9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '9563b6e45517ebeeaf793c9722fdb25c9349c2ad', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '37e25bdad7f7e0a542b34c3e58590de60981212a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2db78ab9fe2a2ef255f574f987df60a4ce2ecaba', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'd7238736de74bad97ead0732c884143fe027e2b3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '6e8bf6bd9b7160513ee6285956d96fdedc0cb161', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'ff3d5bb4c151febfb699461d177ac9c5002b4211' }, h("a", { key: '906c9df77aa3499117a287b59ced2016e6274d46', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map