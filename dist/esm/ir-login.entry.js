import { r as registerInstance, c as createEvent, h, H as Host } from './index-D8DCR0yx.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-80RD_iPu.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-D5oXdmCj.js';

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
        return (h(Host, { key: '0f24d706a4fffad8f12fcd075bc6280464923cd9' }, h("ir-interceptor", { key: 'ea513ad7f3268fee8714b986d800b75468c81847' }), h("ir-toast", { key: '88101a7de3146db97abe6afac6abd9241e863808' }), h("form", { key: 'fd7de67073dccfef052d9d2fef942876ef841c88', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b9f018d6c907173f8eb64f855d9eb888e4fd3fde', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '52ab4203ada853ba15b4dd9ce687eb5cf1ad78d1', class: "separator-container" }, h("div", { key: '5d2f3e0407dc2e400bc483419badf665160fb3e0', class: "separator" }), h("p", { key: 'f0f6d8653b111012c14a7b9758deb2273ed60e1c' }, "Sign in to manage your property"), h("div", { key: '3d34bc68aa259d6901705f1566f9d8eeb8d062ea', class: "separator" })), h("ir-input-text", { key: '05b36171504dbf4868ff3784a00ef0c3a2a48e47', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '51d5bbe16d01eecac5d9c207a782c073fc3e3e52', name: "user", slot: "icon" })), h("div", { key: '27b7b95fb2e171f69ed9fa084afce8cf1e5e2966', class: 'position-relative' }, h("ir-input-text", { key: 'ffec9c39148f75caed0d0d537de55887684ccb7e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1b3e3b539d5b82c92c33e6dc52ca18b1725f3158', name: "key", slot: "icon" })), h("button", { key: '9fbd02957b07017d5c46a78125ae15de9ba12ab8', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '26f6c95db1169dee938a6aa3f90d0df85e8cd123', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'b690a931a8056c4e2c272abecf442e87d39c1cbe', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '0ba49ed0391f7ca8fa378762e5cba10f760892e4', class: "card-body text-center p-0 app_links" }, h("a", { key: '3a38f33f38142a625de8141a061982298ecbcd10', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'fa7bcad5651f8f8cd39e0cff2da9b41a358f08f4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '18dbbc2721abb85742c0db54a6995225e8c5d08e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '8da7e202282a664f9ce41b5dcb931f6aa944d475', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'eac4c127043228217067d7fc5956c87f5a372819', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '5755666dd8fe0eaa6f9766765a842c0f8bc94f54', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b5dedc0cf096b83bc2b5e8f02e7e4630090a4404' }, h("a", { key: 'eb3a3648577d5611b92d939ba8d6cae6750d62f3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
