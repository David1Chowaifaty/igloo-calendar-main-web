import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-6926f92b.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
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
        return (h(Host, { key: 'ce0d12a80f0c69992b4b6c37f0dc8e3d1460c9a2' }, h("ir-interceptor", { key: '35b0cc825b0e91ef0dc8f844ac397119c3a913f5' }), h("ir-toast", { key: 'ee731417c250de703ee8922f4dc75a119dff7918' }), h("form", { key: '806475ef76dfc9ef54f9b8ff60a35aa66f1906fd', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'd3f43ff3b2ea68fcb32093d2cb9402a26a7d3f37', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'd1b465d34b43c55ea3406142939ab0caa0db0d3c', class: "separator-container" }, h("div", { key: '47422611cc16873e2b8c8d6c80345318b4cd2605', class: "separator" }), h("p", { key: '75dba465b932dfec76ace433e70e7eaf4d4e94bf' }, "Sign in to manage your property"), h("div", { key: '951132ac6aac255797d8b92ffd417f454e79224f', class: "separator" })), h("ir-input-text", { key: '547851662522dca34362c8477a2e80aff05d1b8b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '8955254bf561abdce29ce6603afac5f3435ddb1b', name: "user", slot: "icon" })), h("div", { key: 'a165278da2e5d605e11601830d8af6148c7d306d', class: 'position-relative' }, h("ir-input-text", { key: '49f862e4f75059fa7dfa0faf652ccea23185b573', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '89f41cbba78250c3025a040f7bb4f7e5fecb0dd2', name: "key", slot: "icon" })), h("button", { key: '918a44923a55fa44a808f686d8e82809d24f1a85', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'b26f0c0efa14e00c3576b86e96689ff6f0ef26c7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'b8cc75473bf7efa4fc37b47537752ad50da15140', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '6d54a938a85ae993cc19a2fb1ab88a1e7867fd88', class: "card-body text-center p-0 app_links" }, h("a", { key: '1ad9df8fc5e83195f78076d54fcda880ca7d22b9', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '6493ea1c5d0d42df0b0d7e3ae5e091ac7397010b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '6708703c8aef8bba4c77195de4e0e95335a7b3ad', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'c6ced33fd690d14982853f5b95a0c0565c43df5d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '4a23e30ad4d41dc0e5f95a539fcf1d29e615ef42', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '9bf5f07a4c710e3b542e0ec7b511e31f58313a41', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'fec13f70cdede56798a32e5d9bea0f6c73c84503' }, h("a", { key: '09bcaee6e1c9f6a716edeca070cb2ecef9f97773', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map