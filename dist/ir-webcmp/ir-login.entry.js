import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { A as AuthService } from './authenticate.service-2b57afbe.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import './index-5ba472df.js';
import './index-17663a35.js';

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";

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
        return (h(Host, { key: '9ddafba8c65e3e7884fdb5240f5a5479dad7186d' }, h("ir-interceptor", { key: 'd212126650e022e08cd0ddd2459f032e98f3068e' }), h("ir-toast", { key: 'd1688b574dbd3536eb1feb1a3f677fa9502a0f25' }), h("form", { key: '1e2ac886b5781ed4dd5cd6f82fe866e92dcfaa56', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '0ea9fa8cca840b3434f16ca9b7e09a1aef37be0c', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b7d3fff877d118d7ed8c37f3fda99e5c926ad2a8', class: "separator-container" }, h("div", { key: '14d24f72f58421d7fcec07564f6b21f7cad2644b', class: "separator" }), h("p", { key: 'd8995aee762a8aa778cd06c95161f5ae58a58adf' }, "Sign in to manage your property"), h("div", { key: '5015a33cb3e146f0497846dd85eccd9d4b04ffc9', class: "separator" })), h("ir-input-text", { key: '7bbb58d867818ae6f9a55f4d9b5a343b08bb8e08', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'fe93a5e411eaca24e0b421b68dfb38bf5044af52', name: "user", slot: "icon" })), h("div", { key: 'b8de2ea17c543e98b54d10d094b97be65c0e5bd2', class: 'position-relative' }, h("ir-input-text", { key: 'c0e41a195a6c4ac81085f8a5bbac5c037b4e2d60', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '12f6298cfe8ed003de3505573a85f68c45a9d75a', name: "key", slot: "icon" })), h("button", { key: 'bdb14584bc70ce04db031aed5cdb6c62ec3d7265', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'c81ca03e4ac787fc10f55e5a878fe3d2922c8278', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '959de4b875ba0fc4475822d2283a3787d8e39af5', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '6eae0e9586854f2d94fb6d6febbdf96b0b5f2b2e', class: "card-body text-center p-0 app_links" }, h("a", { key: '6f8dd2810187c5df213f0c4afe1f92044677deb4', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '5f519e92b18105152256db61274dcdd8248e4451', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '01389c365f07c8ecd59b9871201ff5fee6c673a8', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2b652b5b8ead00316adec7485f23a7b99cc0436f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '546f7eba9492eff87c1fe2eed57cd612f1cfc59c', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a44ceb4865daa448da2767eb931b40da30eda4f2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'd9a12655792bd059bfbc531c134a5990b25a75d5' }, h("a", { key: 'acb9aff9d1e6ac161e77c9b5539abda1b2a3f4b3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map