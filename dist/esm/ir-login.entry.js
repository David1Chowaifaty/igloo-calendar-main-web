import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import './axios-aa1335b8.js';
import './index-f100e9d2.js';

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
        return (h(Host, { key: 'b0692756c35a350bfd29ecca8e8897a9d2bf0404' }, h("ir-interceptor", { key: '1e304f39aa2d23c1a856bc9f829a8744f0a5c3dc' }), h("ir-toast", { key: 'dd25368bf0a7f19b90278b9dede234cf5c9412fd' }), h("form", { key: '57de5e96eb3b151cc368bf7d125a7b11c5d07d62', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '38ec9529e1a8f36d1205fbd8b146b41c62fe594e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '557d4be336840a6c6983e5ec6bc517c06f0ac1ad', class: "separator-container" }, h("div", { key: 'e43796347b3284a6b239ee1b7177b3c07eb83a3a', class: "separator" }), h("p", { key: 'dc63265bf6d5553e11413312a8a9abdfc555dee4' }, "Sign in to manage your property"), h("div", { key: '116d6039c300c553b4cca6f262b85c51b41cfe15', class: "separator" })), h("ir-input-text", { key: '51b8129ee4a79463fdb7ffe1fe35e811c476e5ef', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '84c7d64bb4062a9828d64a8ef88cf0fd18d2b21b', name: "user", slot: "icon" })), h("div", { key: '538d401ce83fe9ce6a7ba023d26b8ff5f2563de2', class: 'position-relative' }, h("ir-input-text", { key: 'b3fd58ef8f86812861e04eedc67c8ef001a64261', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'f4462ca41268205900d00984cea60bb82e7e6708', name: "key", slot: "icon" })), h("button", { key: 'e2c40421de46440130ddd9590740141e79b24b96', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '1f4acb964d4fd29cc1af43b2140c7f6f36e125b7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '0e6a690a4902ee956f117f93508102d3176d4e1b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'e8319decb3860f639c670fbeca732b7fdf48e322', class: "card-body text-center p-0 app_links" }, h("a", { key: '4efc283ac401fe7bc81c46b18a2e93a3a6452d39', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'da025402b405d5caa7c02a039f0195d1aec9d5ff', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '0c77394e0074ff0da9f9c54ed9bbc52f8987fa1b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '60535839292e8df45796475c4f039b5aa4e631e8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '18f502e0d0e32c7298fb8f5b045124206bc7a9a8', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f9a18bbdd60d6a3902121335e652c00b685e3b8b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'ebb741e9cd06527ee8b04242f06bc9e0cc332d96' }, h("a", { key: '314a31a24df203b8b6ca21eaf6bf093ff1a396a6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map