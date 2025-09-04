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
        return (h(Host, { key: 'a572578d9f482784dfa581e9c61cef58df06094b' }, h("ir-interceptor", { key: '357e5f5b588c0f52efa77102d0079c0d6a431eca' }), h("ir-toast", { key: '735059b727b10b2d8ee16b2d09d953eefb785a4f' }), h("form", { key: '0ee445f95ffc2326ec237a6d603c7916ef12a020', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '9b2501c913092132392d9129dfcb02768c8dd540', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6d30b83543272c5a5e1b9850637120d9e8711904', class: "separator-container" }, h("div", { key: 'bbd4f100081a7a1c4d6b58f257ccf5c2fe823958', class: "separator" }), h("p", { key: 'fea99cd83d88cc463a90ad025f012be0132295dc' }, "Sign in to manage your property"), h("div", { key: '8032a784255a42d1b297a0693d63b89ce56a05c1', class: "separator" })), h("ir-input-text", { key: '82ffa9f1b4d49ee5c4226ff5fdd1366d839b8151', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'f145075de8bb8c4d8bf42b4e47236fe87caa6736', name: "user", slot: "icon" })), h("div", { key: '0f201a037016b6e0667b6006d3d2ca13b2ce9194', class: 'position-relative' }, h("ir-input-text", { key: '7763b9ab263db4cbcb391c8baae793e665f8a5c8', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '5b291a0bd0ae5a9bc6ed68841175d6019cdffa80', name: "key", slot: "icon" })), h("button", { key: '806107a9bebeb283dc6c38d4fe8c1e85df08bb7e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '793699e4f81ba630c4918211fa295cf855aa03cb', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '0c4aa614718af5f08997de3d1ba32859850d21c2', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '4e144d268ac7c014cef7d21bd5bc9da70b47442b', class: "card-body text-center p-0 app_links" }, h("a", { key: '31936659936ebbba74f42120fb9ae3bfec13c6af', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '8ec5650c6f703467e6e606ae8cbbb1d91cf80266', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1fcfdddfc018e68766e7fe2175b9be540adfef16', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9cb5699e7f141a90cce687f21763c5d2da34793b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'ed3bd758d8c1f9408753fdc83384528545dc812a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'cb70fa8b271b293c5e330c6ceb05ce8be8ca4b4f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '9d1edab54f4cac40852a4d40308825e9a8267347' }, h("a", { key: '9843ebfe9301b3471ad2048f987fea21fe902f34', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map