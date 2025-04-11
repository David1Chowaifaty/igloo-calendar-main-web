import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-acf5fbad.js';
import { a as axios } from './axios-aa1335b8.js';
import { i as isRequestPending } from './ir-interceptor.store-db737948.js';
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
        return (h(Host, { key: '98e7240923fd94ad9a84be3e6e43baf8169c701f' }, h("ir-interceptor", { key: '8dd0c5469db19abed5e0e4a19c1d6ae0a5190f28' }), h("ir-toast", { key: '0d9b84953483d4802d926deb33376ef83211a343' }), h("form", { key: '68175a5d8b62e32e82b3f48ee48dd9ccbd118eff', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '230bced447e0a14d6408287a7f8b14113efb333a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '5aa752aa4749e87e5e9e1102ee6ae962e7b75b77', class: "separator-container" }, h("div", { key: '48e9e9370fd09e79c4ef490dddf2b6a3b5fc086e', class: "separator" }), h("p", { key: '348da9033ec04ed13118228212e49c9462473013' }, "Sign in to manage your property"), h("div", { key: '2aeb5ad23b886ea487985bfc45d47c267e8ccd57', class: "separator" })), h("ir-input-text", { key: 'c64cf7ff02efa5ad91710c0716a8fd33d9eb4302', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '5016d3c1b23b92f432de515cab09c0d138ef331c', name: "user", slot: "icon" })), h("div", { key: 'fed8ddc0b02705db68767fe0e917f9729c4c2fff', class: 'position-relative' }, h("ir-input-text", { key: '81ff70e31372f1094d3b9d954152bce15539e366', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '2fd9e5ce6078c3f4be1104cbcd50d24f9791b933', name: "key", slot: "icon" })), h("button", { key: 'da71cd568efd48d718fee28ea6f694d6cb5db656', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b8d81f5498d2524ccddf44a699ddd2426756dc12', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a86a14170fca6e20648674af94c0da8f199e1707', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c4942359019bc8e103a199db1dca846fbf8ecf49', class: "card-body text-center p-0 app_links" }, h("a", { key: 'fa27986a9ba62a9ead43188ccb753ed54cd9a1fa', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '60ce4cddd5a86663c93fe5a48d99d92aef00d539', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '4c65ffa07dfe832d4b129bfd550dd0d635b3d519', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '979045378a82c135030db5d918ffefddf8eeb523', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '2c98645f9444c88ea77c66b409863f97d5422eb2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '9cd6719d18478a4d03fd8623fe12459bc5f929ca', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '9e8efc5de06fa686db24021a19dc2c6bf7b7ce34' }, h("a", { key: '10d2bed3154bc1470eade0ad0250ebbe79a9ed08', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map