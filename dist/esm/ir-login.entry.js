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
        return (h(Host, { key: 'ab78acf627573d88f83ac62be56d5cc88689d09d' }, h("ir-interceptor", { key: '3ce8c1762194b1fb9b1607bcf230fdbc8dd09042' }), h("ir-toast", { key: '8e4e5fd42e2b0c6db9927348185ecae32df77e22' }), h("form", { key: '672f9191ce3d0946e496f208bb09317204dfadb0', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '75bbe2c945a4f11dea03de0e4a9c5649475a5fb6', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd3cff2b453fb8842e9a70ddd6648b89e1bb2d451', class: "separator-container" }, h("div", { key: '1ef08ad014b601f269d52017f30ab7a39c040f49', class: "separator" }), h("p", { key: '0dfedea49aadf59af0244a30355fa11551ce6191' }, "Sign in to manage your property"), h("div", { key: '39e215d6c025295fa9d723835e1b58b5e40c58f3', class: "separator" })), h("ir-input-text", { key: 'f903cec0e5095d0f55232c844fcf00a1a5a9bf21', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'fea928bcebea8bcb6f5ad434e299260d8d538e08', name: "user", slot: "icon" })), h("div", { key: '2e8aa9e3edf11d7e7c309a3f157beeb867beafc0', class: 'position-relative' }, h("ir-input-text", { key: 'bd31a4db3d4d0581ec929bea1374515c83dc697d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'c402f6520a833ac26199b9af19c075cb6f5a5e7b', name: "key", slot: "icon" })), h("button", { key: '1798b9af273bcb7e2f6135193097637974ff20ea', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '88e59055c7118e6c9f7cbc00e0e4f993ea7133cf', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a66f72e66d37ce7edba2a5b88e3c0741eef5b487', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '71e045745999aeea5396f6e3b1d131f732026dfd', class: "card-body text-center p-0 app_links" }, h("a", { key: 'b7e2042c092fdc89830a39f09dcb98ea27ce444b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1720fc265a02a1ae846d3029187510f53e9746e9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'b449460bee43e3f00da0f815e0d3b1ed9f30b54a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '1676c60355c8c145d0ddb77781476ccb7e253c70', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '99f9fd86bdeac80c33d1943aa413f51980e7490a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a2b51c70f9e4fcf88d78ed4356be2d2e67a79b56', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a0db72e5537b6f7ccb7ae581750281a75d9b6765' }, h("a", { key: '1afac2675829f6e3d1ea1e1a7f20a050e945b2c2', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map