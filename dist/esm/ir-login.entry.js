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
        return (h(Host, { key: '182d14f5f5496248c240c8c899f5258da25268db' }, h("ir-interceptor", { key: '91c0f222726cdc12ece278b8418c91f953978a3e' }), h("ir-toast", { key: 'd109b60dab07bd18e873bdb5d9866aed0ea1cfd1' }), h("form", { key: '0e5a008ee743367330c5481ac5c5d35ea6fe8e9c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '08c1d0928e4cd02e5ea38f4741cc745f492a0d82', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '207a955a7dc15e8589915ef3e82b57ec4205fa24', class: "separator-container" }, h("div", { key: '8598bae8b9057d97e8b001f0a10ec7d64a3e262f', class: "separator" }), h("p", { key: 'c285ae1d9bcb272bbc8312b49ba1f29f1944191c' }, "Sign in to manage your property"), h("div", { key: '04c635bdb547bda2b89a896d4d82bd87be3f9f1b', class: "separator" })), h("ir-input-text", { key: '2c22771cc0e79d346f0fae4744a9596dc07fc135', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b5df99bb13b2d3792bbfe9b1881159a504429f37', name: "user", slot: "icon" })), h("div", { key: '3162f723cb800f6470ff76c4482f42838b23ecbc', class: 'position-relative' }, h("ir-input-text", { key: 'c8edf45e31ca6f06f14539333e147d1ab8573f6d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'ae0a41f39cc64ba28fd9b887660585d70ca8506b', name: "key", slot: "icon" })), h("button", { key: '684e1b0caa8cbec2608621ecd4c42035693b475f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '39f1bab8672ce50bf0792ca14cbc84de8ae41e4f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'af1877f02309849a12e9f350da23a0cae5172a6e', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c3a47e1a737dca8e97a8cd8fa822dde83344d539', class: "card-body text-center p-0 app_links" }, h("a", { key: '36896e15711c0dc48549be76ed4492b39c28b91b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'df3520f1766a3e9a0bc8dd3835d128c932de44c0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'aae64cddf60503b641e700242c0715115445d248', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6038870a1ac430d1e3b2a9562046611449daa2e9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '228891f82df111273767792e2c32f45d3bb944a6', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '99c18885fd5d1a0be87ffeac019a2b306e1e4201', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '84bb866a2c3c4d7b1a56f2dfaee633d8562e94cd' }, h("a", { key: 'baf0aee594903cf033673ed156cf5d695f2dec8c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map