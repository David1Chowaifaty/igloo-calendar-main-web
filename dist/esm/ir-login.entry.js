import { r as registerInstance, c as createEvent, h, H as Host } from './index-b3dce66a.js';
import { T as Token } from './Token-030c78a9.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './axios-aa1335b8.js';
import './index-a124d225.js';

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish", 7);
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
        return (h(Host, { key: '97a59533076f7687f69fc372a3240dd8b8bacc02' }, h("ir-interceptor", { key: 'a4ac502b1d600dad47367e13ca342649f68fb221' }), h("ir-toast", { key: '7451264f20b7b068da5b47113b8324ea92015a6f' }), h("form", { key: '2a31cdb22a8643b0b7e222e8a5506df1c51f6376', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '0f5bb13a0458177d3da3a9da593739fc47eb752e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '27444dadbbe3bee9af69b702cc04597b98e2f5f9', class: "separator-container" }, h("div", { key: 'c20da0501b172e385d4caf3b4623c554ee1d98e0', class: "separator" }), h("p", { key: '551a11af5c12dc2334677b0f8c1f9f3ed6a3f278' }, "Sign in to manage your property"), h("div", { key: 'ce1ddf96113426a732ef20b7f0169b951fdd722f', class: "separator" })), h("ir-input-text", { key: 'cd5ce0b85fa30cc72b7589ae05c5bc0466787f7c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '9f6a8dc19c1169bb16929e33de1f8e7659ee3835', name: "user", slot: "icon" })), h("div", { key: '7b8a568a611144542f59021dd4c86637c1f70191', class: 'position-relative' }, h("ir-input-text", { key: '90d68cf2d3e6daaba52c8574a67e8c0a48c1d271', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1d00c496adb10bb09f904487e9f2e88d618feeb4', name: "key", slot: "icon" })), h("button", { key: '4829f42be406d4f5be55ca850897164bb2bcf730', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'de1b9934209ddc49b581ebf5a6e3ac7ab5ab1fcd', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '7fa691a7f3c09570da2402fe2f9523c42cc4e794', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c35f8c49e2fc45dc8d0bdb16fe2f0ff395e8347b', class: "card-body text-center p-0 app_links" }, h("a", { key: '2a7c8e44e6ce64f221e018847e0b6b96b6b00ab1', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '98d225ec81f955d41c6c4db799fb02f4994ad66c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '378cf8853db745b5ff451ceb3520f35c3baba1aa', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '8324dd44636250af731aa7fa40ecc7308b166980', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '47474bd4d32c2a2593c96348e0b48c5d8ce5a2c2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '96caafa0b406805632b525aecca6c27e1f4bc188', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '9e71403eacd9bff528c469a498a46c68cfc2a84f' }, h("a", { key: '59738bd2e6e9f36827f27b70bc2d92a70467c77a', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map