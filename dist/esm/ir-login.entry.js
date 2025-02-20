import { r as registerInstance, c as createEvent, h, H as Host } from './index-1d2aa5ad.js';
import { T as Token } from './Token-acf5fbad.js';
import { a as axios } from './axios-aa1335b8.js';
import { i as isRequestPending } from './ir-interceptor.store-1b562ec6.js';
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
        return (h(Host, { key: '9e772dc04469cd96e914c8900e2cb20e5a147519' }, h("ir-interceptor", { key: 'c92decb9e043c5faa6a59375740ac3314c752315' }), h("ir-toast", { key: 'caee6811e66e8b6ee9869f4e6514e291c4aa63b5' }), h("form", { key: 'b5929e1653529e5bea16eab16b04f1b01221d62c', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f7cae18f79d0eed2efc43bdcc6ea430606b5de2a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '298a39a45f55ca0db320ced4d26cce675d2f7ba2', class: "separator-container" }, h("div", { key: '4a6410ea63ba43f26ba82499d731fe2611f6ef8d', class: "separator" }), h("p", { key: '841f26301b75ed3537347405643c4f0bc3729a35' }, "Sign in to manage your property"), h("div", { key: 'c4a0f011675bb662e5e68c93a2d9d41520b434d9', class: "separator" })), h("ir-input-text", { key: '3b375f2bcad286d2043d8f45a081a7ab2bb7c711', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '9cfc0e7322dd34bd2865a17799d3b386ec81a45d', name: "user", slot: "icon" })), h("div", { key: 'e3c4f5a2aa4605cdad9201e1ef5aa135c4b49424', class: 'position-relative' }, h("ir-input-text", { key: '92447f510dfefde9de1a7409dd4be3589b9bcb97', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '2f66e8bad6a34c057a2ebda039340c35518a0d61', name: "key", slot: "icon" })), h("button", { key: 'd868d31d8a8e65e2cb827e531e6bc3de4f93a051', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '18085d2be5ba9d40dace31786609632cfb924ee9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '2e2c979c9ba92b361f9412e0ccb606769394137d', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'd2740fe96ff207b1557fe764deaf64b1c0cc675b', class: "card-body text-center p-0 app_links" }, h("a", { key: '0f76162d0b029ea7602842132bd17f1dbd564b8e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '633c06f50bfa7f0ab44b83ad74100fa57015d2c1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'a95b24e095461ee9921de9d6aab3353fb686e8f3', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6100d0224fbf6ff57f07a34df8c08a3a767887c1', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f3a82a1fbfa6f6bef37a758a639bb3d00654a432', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'c6db3671fde19749a53070e7de164c442d482b07', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '1daad6dc43cd41a7b6e5db52c0accc3da43cfa99' }, h("a", { key: '277835bd909d7b31d032e8d39f6616c0938584c9', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map