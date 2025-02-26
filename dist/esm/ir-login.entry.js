import { r as registerInstance, c as createEvent, h, H as Host } from './index-1d2aa5ad.js';
import { T as Token } from './Token-acf5fbad.js';
import { a as axios } from './axios-aa1335b8.js';
import { a as isRequestPending } from './ir-interceptor.store-cddb7aee.js';
import './index-e42e9935.js';

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
        return (h(Host, { key: 'd7c274957fb953ee2e37289322a5dbe3361f7cdd' }, h("ir-interceptor", { key: '75fb1f1afb68700cf0bd91b136ff136692796618' }), h("ir-toast", { key: '0b7352a7f19634090bb827dd20778c4406228149' }), h("form", { key: '1e3c1898363535c466e1e0d977b55cd5263663b0', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '56d485868ba786b706b93556db1f01ce023b27fa', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'c82d5bd6136f97842d5465b51b5d08ecb2f0942e', class: "separator-container" }, h("div", { key: 'e13d817a89f5da3b68f9e050bb40b6830d897042', class: "separator" }), h("p", { key: '7981767e25daa4c6734253640cea0e3f9dca2863' }, "Sign in to manage your property"), h("div", { key: '12ee22f0c35851011fdff1e3a76f80db25aa7bd6', class: "separator" })), h("ir-input-text", { key: 'bef5f854b2c20846e65d8942b02a005be8d3c59b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'ffb6c378517f40986b54ea31837cfd15c43f8aef', name: "user", slot: "icon" })), h("div", { key: '094c56cf65c2632a3b8f5d161615f99da055b7f9', class: 'position-relative' }, h("ir-input-text", { key: '0f2d5a46ae3746a87ad1c30cd307471fe5f57257', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'd567931b8898e15c188ca65112fc46330dcb3a03', name: "key", slot: "icon" })), h("button", { key: 'b09332c6fc8064491b17c8e7aad04e80b2a0b1b5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'a3636cbb4597bac147a8f92f2e5443a6ca852283', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '084de990d2c017c051e34cdc3bdd3b880f99ddd0', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'fce1ab09ca5964484a76461c855921e358ad4811', class: "card-body text-center p-0 app_links" }, h("a", { key: '65d371180a3dbb54ea5e7e7c4ef55f886a6b3a03', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '3a4ca1b2f76b4f65b5bd7747025e98cd399ce3f8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'cb207646be66759e79889b297e81d7285de0c39c', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'cc4ca70fb1a9cb0e884cd1228708f2cb63614372', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'd57ea0191c5bdcb3cdbd976e460c107b12401291', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f7650f798d345eb396da639e5f3e23ad59d1e1d9', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b3ae4612d0e4f687d51590c8913a994778f354aa' }, h("a", { key: '01def9c1888ad1c95213144e4adcf2fecb668720', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map