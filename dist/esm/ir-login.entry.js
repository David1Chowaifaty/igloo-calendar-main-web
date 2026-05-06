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
        return (h(Host, { key: 'e33ab17517c384cfc778f3ecf047edcbf4c6629e' }, h("ir-interceptor", { key: '2451cbeec675ebb0e58d4c78657353c63501aa10' }), h("ir-toast", { key: '3f04a67d84ab58a4708ae4fad25b309ab45e876f' }), h("form", { key: 'de751597e57b9aac61bab1af8178a1d6cfe42b6b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '85b572295958a4ad1f232f9be698a7aa0b114317', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'f6c24a91993a2f5211965f05483ee4938346d0ae', class: "separator-container" }, h("div", { key: '1437ad8846550196c231b5779147588ca6c8ecb1', class: "separator" }), h("p", { key: 'fd74fe3b52600bb45dc0ec40c82bb9184888fa30' }, "Sign in to manage your property"), h("div", { key: '60ccab871c0d72953ed29d133d28083569721b20', class: "separator" })), h("ir-input-text", { key: 'c67aa0d2b8e4b7972a828eb53d6a9fa0d09c0bdc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '47820316bfa968f10fa05b4edd37d2f9f5547027', name: "user", slot: "icon" })), h("div", { key: '044e328b3ab308ceb897c3a24c21b708fd9bc90c', class: 'position-relative' }, h("ir-input-text", { key: '1d143fbbf39992c54b6c614785f2e897a21271bc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '02ed80add4c47740fec7b8cbb68ac97bc6dac599', name: "key", slot: "icon" })), h("button", { key: 'fe3022d435901d517062195956bfc6991dc9fd1e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b521608a75e7b73ff07a9b45cfe8db289bb1a6a4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'b00c16ce06a04aa2346bb69910b036ec0c34576d', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'fd263a725c5fc5b15a9ec96dcc5ef6d5ad41f2f2', class: "card-body text-center p-0 app_links" }, h("a", { key: 'd3adf475289096ffcc800351611b6de0663b1338', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'cfd8c1d30f18aa74c1b4d267d70e856aa6d586b7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '89852d12315d1c4a1bb637aae74474b049ef8416', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b09c57f312049b9b68467b64d698718a575558e9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '2f0e064f0c01227997c0cbf80154c1add6894ac3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'a5b4b867362b4684685734a28b78ec8c140fec35', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '7d5fc351349969569c234b50b9507790ab72bab7' }, h("a", { key: '85be77021b496365df809e3ae1de7cd362010b0b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map