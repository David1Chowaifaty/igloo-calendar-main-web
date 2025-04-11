import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-acf5fbad.js';
import { a as axios } from './axios-aa1335b8.js';
import { a as isRequestPending } from './ir-interceptor.store-e96f5930.js';
import './index-c1c77241.js';

class AuthService {
    async authenticate(params) {
        const { data } = await axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

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
        return (h(Host, { key: '5719637743d539fdd4288b751c2d243ae511c718' }, h("ir-interceptor", { key: '697209fcce90a53541fd89b48c4f18d34b092baf' }), h("ir-toast", { key: '981fcb9eda0b656b50419415067f69f27c4819c7' }), h("form", { key: 'ca36fff18ac715ba585f6ea4ad435f46b5240e8a', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'd2336f8ae1b31fe5f9027926d46ae66d98b2d420', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '144004d944ad874d15203bf55f9a14e3c3f5b1ba', class: "separator-container" }, h("div", { key: '8caf1aa39c271e2713b4c60dea060cf8fa49bf0c', class: "separator" }), h("p", { key: '5345f16f69f439fb596f546e568a3d21d5e8db09' }, "Sign in to manage your property"), h("div", { key: '4064cbe1c3db55d7b0d1e1deebd618f307c739b0', class: "separator" })), h("ir-input-text", { key: '62f4d26c50128c6fc87ccb537ec329b0588ac52f', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '068be61e84100fef334d397b28bd3fc90a6d855d', name: "user", slot: "icon" })), h("div", { key: 'ab920c1fda2329b842e6cca84b7dd014413000c8', class: 'position-relative' }, h("ir-input-text", { key: 'cae2d21829a53190615f2e484ae7645a9493a4fa', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '25888e293f1996e5dfe579dd33c20cf078b835e5', name: "key", slot: "icon" })), h("button", { key: 'd6ed96bfff7aeedfd41cf4f381a15ba9d5499387', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e8b2515b248b1100874b558aaf368887b1a7af06', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '315e8dd713c31881354c013ec4c6e1724705b000', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '8eb0b36acc2fe23a3117284c3ac009ba51a0ca24', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e0d295fa20771c5f1cc6a38ce8eb9659bab9c938', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '52db26c01891ceefc3fc22d47b17326353aca1e5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'a209ad6b0ff2b204e9bb5f3c7cec966814ff6342', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6bb6e214f64cb9ea520ee62cfa424e6a297025c2', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'bc6d1b392af9f494349f2d52c139f43861d9f838', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '5822a496b97d1eb142e979f680294f7d3e4f29a2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'c29a731610e0729327af19b842359586d9c97f75' }, h("a", { key: 'f6f6f82259514ede3c7b7d05d66769a0e6a7ea5c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map