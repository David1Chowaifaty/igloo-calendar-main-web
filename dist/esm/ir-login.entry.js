import { r as registerInstance, c as createEvent, h, H as Host } from './index-b3dce66a.js';
import { T as Token } from './Token-030c78a9.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './axios-aa1335b8.js';
import './index-a124d225.js';

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
        return (h(Host, { key: '39558de52567c5d9273ea86e07a91dd15795e0d3' }, h("ir-interceptor", { key: '72fba8c1465b862fe3cbfc276385ff7b4df32e4a' }), h("ir-toast", { key: '2c092f47048a0001d0cc53de18ef0a292b9814e3' }), h("form", { key: 'ced0bf026b2b7ca0a8bf9f312bbf92fbc23aeb22', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '679aabf248fbfbb5014fe672b475f820d598f058', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ab9d7e8f5f0941c266df12b7b98efada8b1c3cdd', class: "separator-container" }, h("div", { key: '1f195b2add669e29cdc65dfdbdbea7ea8d783a43', class: "separator" }), h("p", { key: 'da0a368c14bb05fc6213abacb5a00ae4b1f3da74' }, "Sign in to manage your property"), h("div", { key: '45e4e334cc0a766e8f035bcac1b0605656a75b37', class: "separator" })), h("ir-input-text", { key: 'afca3aa7065b6becfae4862b6a9bf13cac35f888', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2e2874dd2bac6f19cd608d40e7cfbd026f53eb77', name: "user", slot: "icon" })), h("div", { key: 'ffc5204aafbfb9829ca4eba76fe14fdd3b4eecb7', class: 'position-relative' }, h("ir-input-text", { key: '1592f35e9c7ce78664b48788a05586e89227ffb9', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'f81d1f8f22415b02d0fe9b346c1fcb669268aa33', name: "key", slot: "icon" })), h("button", { key: '4ff83ae6810700047f8bc41fda0ca3592839e5da', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '4aeb7202f6d4c4e6a5ae34905c4ef9c198d0f9f5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'ffda2e2eb670086762fd9e0407fdcecbb3870c93', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '6028b4e545946a8c65fb30b005878c0fc6ea117a', class: "card-body text-center p-0 app_links" }, h("a", { key: '2e6649a46d4167c2c5a7ac570fc1b490af9c6399', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'df4219cf12e4b306327cf377731147988c565413', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '9b5048543791d5497e7a62fb74b2054617eb59a6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'd412b033ff55853e6a3202a3fc1a2534aa4d7805', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '93898280ee8db461949077ce4cf466ce7357a67e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '2d3511e306865d0c13a3e2252a85a6eac71e6f4f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '451a7670c054bd8595a7a753fc85a697b2f7dc7e' }, h("a", { key: 'aca9cba024ff451ba72e2dd84a2c9a6f48839d12', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map