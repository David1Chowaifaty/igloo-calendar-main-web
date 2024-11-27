import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { T as Token } from './Token-a382baa1.js';
import { a as axios } from './axios-ab377903.js';
import { i as isRequestPending } from './ir-interceptor.store-651abd9c.js';
import './index-1d7b1ff2.js';

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
        this.authService = new AuthService();
        this.token = new Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
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
        return (h(Host, { key: 'a298482ef2e782f6c5f1726e92649436dc738efb' }, h("ir-interceptor", { key: 'f8107afc50eabd2398634bd0e50cba8aab029c0b' }), h("ir-toast", { key: '523d1c3217560cea8289829a9951ece680a5211c' }), h("form", { key: 'f9a571f290451880a99cfa3df9c152aa137d6728', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'e6f8b54267bb716c054f55700d4c3a0cb6544bb9', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '43b228e8462718dd0030a531f04eddaa579c3b62', class: "separator-container" }, h("div", { key: '3ce3f881de7934d8f1261253c6fffc68ff5fee01', class: "separator" }), h("p", { key: 'f75f2f99cb8ca9df873548da480f7b78a2fc6432' }, "Sign in to manage your property"), h("div", { key: 'bc120a9a054547a9f2114833c853ceef4ec1064a', class: "separator" })), h("ir-input-text", { key: '4ae7ff3f0acee2b12d5eb647759edfeeeef1027e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '40df0d2e5f498ba7405fd36259e3a90bb1c0cdee', name: "user", slot: "icon" })), h("div", { key: '577d0632a6eb96179d9313118cd55422c9c0db1d', class: 'position-relative' }, h("ir-input-text", { key: '72f626b53922de9cbf17b6c9ad89cfa7bdc7007b', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '919eba2e456eb47e23b532b7ed0acb27c166780a', name: "key", slot: "icon" })), h("button", { key: '68352da3277b9dec24cada566aff11158cee51ac', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '690390c70205cf367c39c081a550db737d2cae8c', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2551ec78de9e0d117f32c4e882d7101d4c1888da', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'adfa46f0589e10b389b1a1729db0085cff92c7c9', class: "card-body text-center p-0 app_links" }, h("a", { key: 'a0fdb35b8efee9a59ea7ea09ffcfd1b2828e374c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '466cc582f4dab7d08b0e76b44b1d40719c8c965c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'f09155fa9d9c20d869f927d37734ff024d7e73ac', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '87c8cdc894a33094357f91aae5d7f7e9d6452c6c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '411782e40a5987ab2c592881d6ebc7f455584db2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f0f77607969b5059ea3c0f500f896bc5a7c16efd', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '7f7516f1b9f7cbb1947e7f5ac759f36f10a089b0' }, h("a", { key: '080a37445f9b6f28e9b5034664666bf32245d27d', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map