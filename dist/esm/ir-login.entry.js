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
        return (h(Host, { key: '3116a03f1b46d17ec0ab4d23a2941be0bc970dda' }, h("ir-interceptor", { key: '18551adf06bd7ea01e31d880936064ac4cb4dbb1' }), h("ir-toast", { key: '144cc39d1b2330fb11e244448cf2f0cfaa3a10cd' }), h("form", { key: '440124247363f75ded31c141389e2f89bb2b4eaf', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '9a09f3a1453a1a69ef050b1fe9e8fa462cde32c1', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '78d3edf31fc3f3ccb735e1cb7566b189bdeed38c', class: "separator-container" }, h("div", { key: '59de677f2d72834b0e118d5cdf12f63ba020b651', class: "separator" }), h("p", { key: '2ce718f0cb12ad21c6d50876189971e419a10079' }, "Sign in to manage your property"), h("div", { key: '0b6186fc7458b83da6b904a41e45a810151c8f51', class: "separator" })), h("ir-input-text", { key: 'b12711686f48b5d1d2cfb51de7994324bc5631b4', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '372827f8d5866eff388563f7a0f8962197f4814c', name: "user", slot: "icon" })), h("div", { key: 'a3d2297ebf67ba3897cbb5ee85467956f23a91fc', class: 'position-relative' }, h("ir-input-text", { key: 'e00b70c3f2e1379227758c3c298cbf4d6e990a9f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '24131a53026a30c230b52f14c26c55af22968b90', name: "key", slot: "icon" })), h("button", { key: '9f07b75401334e4b97184d506825f48ef88075b6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'ab536c3abb703b01b67de933b1cc176378cc3bbe', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '807c51ce6e3ce0b5c7b677c7afbb7776227f349a', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'af8be0b8ef56f17c625f5cd6e78f0044dc635417', class: "card-body text-center p-0 app_links" }, h("a", { key: '837670ac671c50c6ea6c0354a84fb8a2e9e11f75', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '6a8fcbf01f710105d441fc3c4595aa0fb1621d6c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '0a27c70dda48f075c5d3de74a2124799a12af348', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '82dc00000a781bb94c9f732560b244596b96c9c3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'ce64598ad6143cc884813c742b7eab09f48e9517', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '1a7300ab4959bebd681cc911e7d8fb7e33faef5e', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '5284270362cf7051f53ee7759213c18226230e71' }, h("a", { key: '2caac2d69c07bbb42d22b9c27c571a0313c97dba', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map