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
        return (h(Host, { key: 'd4ef4b1334f5779f0a14078a69b989ff177ad022' }, h("ir-interceptor", { key: '1fd35b1ffb04a11111f467f5b2e3ffe45008c54e' }), h("ir-toast", { key: 'ca6f4c0611e632a9e18bc2dd7fef94dce1de8935' }), h("form", { key: '91c016912655b5fbb8fb5de5d9c92c8b691d7a0b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '83b96ad4d4250a42cae3dc4542b484e7e79509a4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '46ff420bb4c91c303512a69b03d4abfcc126d30d', class: "separator-container" }, h("div", { key: 'e24b1b02d95fce4ce49a123415627a63de1f80a4', class: "separator" }), h("p", { key: 'ed330b69828b14faa3c35b6d41163f46ff647a4b' }, "Sign in to manage your property"), h("div", { key: '2308c7c8dca6642e0b38c8852481cdedd7a6f955', class: "separator" })), h("ir-input-text", { key: '2970e959c89b2aed7bad915715a2bfa9f553dd5a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: '20f58a45809af763ea89a89bd4ca0ebba0c299e8', name: "user", slot: "icon" })), h("div", { key: 'd5452ff79aee9b30680f3101361c6974931dbf90', class: 'position-relative' }, h("ir-input-text", { key: 'fc8a77d16af63621044f61015e1320a73ea361bd', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '91d4e8b28ef91735b45ea84fd4bceb9010af8ecd', name: "key", slot: "icon" })), h("button", { key: 'ea361fa50e338faa976cc65fef0a630b320e0364', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '001a4aa27c737ad85e2c5c1e91a76f47560729be', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '1039df76bc4d89060b4b653abd88b93242d0aee8', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '66a1d9c20c67b14d1e0b7926466e6e0c4e6daf46', class: "card-body text-center p-0 app_links" }, h("a", { key: '598ac01f64e3cc2e2b7b648cc55506fa5fb2ea0d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '2e2b273cb110a47ab20c04b2ee0d9d71aec6e669', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'd32d52e54719baf4d9e3db2b0668c769a62c5e99', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'e228e3479485a6d55642d78f5f6c803945572a85', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'f50768f36366545950ebf9ff3e785579dd3f2ac1', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'cabd5fa114cd6a51e70a918ce3fdc723b2a61475', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '37d2df0926f8899c36b0d25e0eff6e765544656c' }, h("a", { key: '18e94f765fd900d50d83945d7f1ef07c2d237c7e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map