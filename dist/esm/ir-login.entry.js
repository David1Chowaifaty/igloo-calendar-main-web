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
        return (h(Host, { key: '33009632654ecc42acf99b4d6231b43db9e7add6' }, h("ir-interceptor", { key: '22fbe6ae27d2acdb53d253ede1d85a3406aceaf6' }), h("ir-toast", { key: 'e52e899c5e5ed4563fcbf5c9e08110d432961b4e' }), h("form", { key: '82024360d6fe0caea32a886bfd84ddc209024b91', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'a012ce44038badf917749c5c13cab8f04c7d385f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '5cb10fa52a5a587f6ee4fc1dc81675b225340dda', class: "separator-container" }, h("div", { key: '7f1b74ab78ed8f37c12f99a8820c4995f3968daf', class: "separator" }), h("p", { key: '5f52c6532037b714971bb023302e8777f6791bdb' }, "Sign in to manage your property"), h("div", { key: '3e379e8f6064db94b54bbd9219cf0b3841e3cada', class: "separator" })), h("ir-input-text", { key: 'ff9997bbb352bc70febb52ac02439fb55b6e4c52', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '65d28f422cb75221ab09315fb485c54f7b62c86c', name: "user", slot: "icon" })), h("div", { key: '5b69da991bb6a4d2d5aefe34b2b1c6592187d58b', class: 'position-relative' }, h("ir-input-text", { key: '0ec8a68717395e33f99a3ef1f4cd0c3f0bd77e87', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '047f5df271b4add257a33ce53fb3548412c5ecce', name: "key", slot: "icon" })), h("button", { key: '4a0e2c591051697175b9a1853604124553a89517', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '957d5ea15671b06b5b4b8b043028947802cf0f67', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '59409919982b324d4890c91d92dc0058995b0bf6', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'c50805a7541a04ec60d0a593fe191791bcb87914', class: "card-body text-center p-0 app_links" }, h("a", { key: 'a73b73a7fde01fadb4042ba91d32d9eb604f0ddb', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '9e7f5548f57b2ab336572c04c354318580fcc297', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '16c1230054e1fad0daed7f14f2a0a264730911dc', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '313f117c39ef6dfc673ecc9634427deddfee4e51', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'e6e53aa821cddf28085d777c1eb45668ff2397e6', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '121a7d3900969b4c6a9e878a9825c09b07c8d03b', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'bd64d95346dded2970c5e04bd54f3057f99bee2d' }, h("a", { key: '180d9e2ec6eeff378306e812dadd2c5b38edafc7', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map