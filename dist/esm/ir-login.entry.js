import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { a as isRequestPending } from './ir-interceptor.store-b1961d27.js';
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
        return (h(Host, { key: '000e38520141a5e33957382770cc848a482bb995' }, h("ir-interceptor", { key: '431a3ed8a560cd4e0cc07b4f79f32385476a19d6' }), h("ir-toast", { key: '06a8786df32a35a76326fde31553fecb4f575774' }), h("form", { key: '7baa6e38e885097a747a8cc6b01f22a2371b8254', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '5a2a83e572314f67e1bd60a2c05bdbbea1e64995', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ff78d57de233dd9db367386c5a45adcf75a680e6', class: "separator-container" }, h("div", { key: '4562e0bb19db213c5a910d65123b89a212ca43bd', class: "separator" }), h("p", { key: '8ae71b969ae35152c43ea2e1f33e08ab7e5ee6fb' }, "Sign in to manage your property"), h("div", { key: '2b35fa6e8aeab155dd809043a1d4ac69a943f4dc', class: "separator" })), h("ir-input-text", { key: '5d00b6cd57f86edc99babddd1bcb16b7483e421f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '7cfcc95c91514d62713c92d88d5e43296e758f46', name: "user", slot: "icon" })), h("div", { key: 'a2add31e2ff502c291d5ded7db680751c8f5311d', class: 'position-relative' }, h("ir-input-text", { key: 'fc8e885076297976cd9abaeedd5c03334b3f243e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'bfb6034e66e84d4874032065c2317915f2620869', name: "key", slot: "icon" })), h("button", { key: '866c2287e2d4ad320b882b08cc14922bbc9a910b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'bf8126eb6d64fe29bf9c45674cfad4909efd7822', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e05b5e0e80174214341cae89c9d0ddaec7698107', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0489477c66852d29ab24308d5e5d01ff2cb10096', class: "card-body text-center p-0 app_links" }, h("a", { key: '00a0ed6aac2628e6fd41cbbf714c31ba04527bf5', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '17102cc635c5209d07bddf0679d71b8534aabe6b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '6de7149549dba8dd2490c2694eb20e945ab68807', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4e86e95e7d451777d3fc452daee86870c733ab81', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '93a9ca8e179878c8295bbe5518418ed02e4ba5a1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '06a587af79ddec289ae39d6dcf6041c03101bded', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8c88466e01922a6ab60db536f31b16bad13694cc' }, h("a", { key: 'd22b0d8c27172abaa766a3b95e9b3e4b22ae745c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map