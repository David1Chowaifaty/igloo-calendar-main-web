import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-030c78a9.js';
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
        return (h(Host, { key: 'df04656fa300bb61806f71cde8af07fdd68e4c53' }, h("ir-interceptor", { key: 'ba013bcbe84d4969c0af39341e568ad327223c77' }), h("ir-toast", { key: '85153ec03d72438313897c4dfc8569a0e261f061' }), h("form", { key: '0b52d22fc6b48a989912e4b05d258a3583c4e43f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '946dc178ddd39e46c368f4279bb31c3e2314721a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '7c7e4195766c03c60c2ef6da80a27851f91cd890', class: "separator-container" }, h("div", { key: '0f19df5ab6e92d713b6737eb8e9e1bd03e4595dd', class: "separator" }), h("p", { key: '3a9a4fa19820b457afd7065663d1c8091fe0d6e3' }, "Sign in to manage your property"), h("div", { key: '4b7cf5d4465619cf310007ed7434d2b88d4091b2', class: "separator" })), h("ir-input-text", { key: 'f8025a42532d67f33ab0cfd94aafbd292f260668', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '68e083d8941620eb76751803d87438386e6031ec', name: "user", slot: "icon" })), h("div", { key: '977718791de62ed69cb348931d2b69011d028bd3', class: 'position-relative' }, h("ir-input-text", { key: 'd6ffea1d2fdc567243e2b8be6b48923b1c34ad51', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'ceeb8ba6e7ff5ec1ee7336ddb095a20299375a1b', name: "key", slot: "icon" })), h("button", { key: '098b8b26102d773022e8ac747ad7d8974d5f3da2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'a38f1ba1192b5a21f60ee293d0e947e6dff23646', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '1d5dae7c2c5a27454be57e3009452a2934e59174', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'a86873ec2d54ca3067f73aeebaf37613a5a4f094', class: "card-body text-center p-0 app_links" }, h("a", { key: '2e1241b77bb9521bd6edc40184708b8fb0905b60', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'd57256b0f463ce065fbae4e3352b3cd9fa338b5b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '668d46837a6759004212467e57b4b83a7d163ed6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b6015c3ef7669beaa3d79778267e616f98d39a05', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'e940d822cd07f69f956fb6eb223434134f7611e4', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'd9542e41ecd210c3fcf4ab59f404a41dfed66d6a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '0ee30c4c5d9dcba6e199f0ff4d8124eac741814a' }, h("a", { key: '06705ef09f108111f4c6e9c01617b8f37cc7da54', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map