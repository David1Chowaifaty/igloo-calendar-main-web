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
        return (h(Host, { key: '8ecdf9d6db4d146ea0db3e5769296b14d9ae96cc' }, h("ir-interceptor", { key: '85498fa3b33ef54993b0c2dedb3f3177b3b562df' }), h("ir-toast", { key: 'fb55822f7b8fa8b7bd239e2b360cb862a1f234c0' }), h("form", { key: 'a2b1a2ff4fd9cd8d51927d5efc8bd3eba046f4c4', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'be39a1d096d45b1c8dcce11c511e7388365e1780', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'e3d1fcb100cf0ffe55878c3178f29185a1077269', class: "separator-container" }, h("div", { key: '1edb41d2440d943117902f406e2bdde5a923de61', class: "separator" }), h("p", { key: 'eab3e69b8bea33eff07da4b0dd3ff45272202204' }, "Sign in to manage your property"), h("div", { key: '657f11677d39cf471c70aca10f7af82bc5e834fa', class: "separator" })), h("ir-input-text", { key: '09822cfbf210aefb3d4fef601edc34af4e3a9234', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'a584b44de5cc882afc03af6861ce03b9d70e6a6d', name: "user", slot: "icon" })), h("div", { key: '7ab1b4ad2710d13ac77062634621df2c80d43146', class: 'position-relative' }, h("ir-input-text", { key: '4ffa6efa3f55a2e2b0aa503bb34ae6caf70951b0', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '81ef7118de9a4cee89940d0bffc56a36526e917a', name: "key", slot: "icon" })), h("button", { key: 'a0bc0d15e89bc9d1e1f731b0cabf5b594ad960da', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '74b07e1e46a7ac86a9786ff0e66b84d2c3a7659f', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '334898434d126701b8b4fbdc961a2f94142a3bf0', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '74e5bfc13c812c9f9580b7c8d780275ea798eabd', class: "card-body text-center p-0 app_links" }, h("a", { key: 'f401a71fe242ed69b3746b0c9cad3bf868f6dd1f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'cf603821f08218e6d34750219c21067196ba5710', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'adb3d85e0f074bbcb473e4053e96b075e79744e0', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '5afaabcb27959131cc944ca1c10979f67607cef0', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '28dbb89f535caadd6aae55d8cc6ac4550ed923fa', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '45f8c972098d2530126d8c6d2fe5c75ecab507af', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '25f0b014003dc1f4a014034b414046bf7069f176' }, h("a", { key: '280544bc739b4f780c067b1cbbe7eeddbbf4a778', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map