import { r as registerInstance, c as createEvent, h, H as Host } from './index-CwWmK1sZ.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-BjT5RY0N.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BfixheT-.js';

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
        return (h(Host, { key: '2517d780e90431a67fd3d3a6a3f4e4b057e95df2' }, h("ir-interceptor", { key: '5b1e34ccb5b8f6cd14c5699f408423a4cfb934b8' }), h("ir-toast", { key: 'bdf2b1a65229b605311d6661b4e98e489fbf4e9b' }), h("form", { key: 'cac5803e4e25ecbe16e878734afcfa91c6dbcc05', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '6e47b456440d93acd2081d3e3a307f9d95d0bf70', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '25e5b6c6cb96a2f1a7a07de912720e0ad2b1fbdf', class: "separator-container" }, h("div", { key: 'e209c23b6377550fb5e2056e2d2d569a78906b4c', class: "separator" }), h("p", { key: '59cc42b7ce910d4f7e94402ec2cefef6de022e0a' }, "Sign in to manage your property"), h("div", { key: 'dbe2437822597dd22484589997b29e530086f7fe', class: "separator" })), h("ir-input-text", { key: 'af64867630c6f5b5cf9d9ecde6a9f02d164c03d9', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '824d9859ca1c7a847788fa6b6fb3568325f99050', name: "user", slot: "icon" })), h("div", { key: '60973c04c0c43913404477016493f0c01692d8be', class: 'position-relative' }, h("ir-input-text", { key: 'fc33289eb9da047f136b001d94e484954997d530', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'c017fd88919e063e54932a0d322109e3061cdf90', name: "key", slot: "icon" })), h("button", { key: '0c455c1551b804002db452353f91ea30cae168b8', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '6b01358e4012123c6fc6fe374ad463b762b5abb4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '6793820ed834d9a0e1bec49771944133afbdbb6b', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '51e0ddb03e88a82a8d36bcb1fc9476b6cc14f2a7', class: "card-body text-center p-0 app_links" }, h("a", { key: '8b3d50e03604dc624b26c27e7c3f935236df5927', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'c022bda32c92185cca313c8ea9a7bd9f8a581c64', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'bd093e3e0064870824dd5e41df143c806e1f11e4', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'fc71ffdaedfd5eb3f8a859d2489ab026e49d4265', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '5e533943e7d384f39896f4ee1216b22c8747b6d4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a0373af5885093d8ad1c99b1ddabf26231cfdbc2', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '88cac980e2a977e715d3df64492dd3846816dae3' }, h("a", { key: 'de2bd145a450f1d5c841ecbde4b8a0e83ff76f7d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
