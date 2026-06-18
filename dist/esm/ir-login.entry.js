import { r as registerInstance, c as createEvent, h, H as Host } from './index-BvoylR5O.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-DYGt5Cjl.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-U7zaiBri.js';

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish");
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
        return (h(Host, { key: '09c75de57aacb3b4571dcf600636d7779ccd8eda' }, h("ir-interceptor", { key: '7ddadc1f64d345d7d8586ee71fbe6f159490ab1f' }), h("ir-toast", { key: '209971ef57df1f89b314ac08518a9c4f1f2a35f7' }), h("form", { key: '6c761b30e427cef6790568ff07d96918971b49bc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '2cc29c00c9474194c94cc58ce68d378ff45a175a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '1b412e2ccaad83576aa31e7ad9cf05abf82c573f', class: "separator-container" }, h("div", { key: 'f8734522aaf3d524358a27abbda2463f4fa344cd', class: "separator" }), h("p", { key: '1d9171bfc0b0603fae951967e94c062773893e00' }, "Sign in to manage your property"), h("div", { key: 'c9c2e465bc6505f055d25dfdd9faaea2b82ab018', class: "separator" })), h("ir-input-text", { key: '972038a4047580b4c1ea64b0b23a33df5f4f934e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'bef5933cc5c1aae151c7cf66fc7c680f87e5608a', name: "user", slot: "icon" })), h("div", { key: '3f3b87818134e7b945c6d8993c806eab4d33e2a2', class: 'position-relative' }, h("ir-input-text", { key: 'f793f7f345f34420b94ed78020b1e86c84c4276c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '83f735fac2e747f27b4c376079b84e8825e0c5d8', name: "key", slot: "icon" })), h("button", { key: 'a6e3e89a89d64292fa7e9c46217a76b70f6d896c', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '10647539431627e458caa7f29a1480996a265941', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a4562984b2d4cae7f57dcbaa3bbd736fcb12bede', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '35db8c9ebdebe9ad03b3ba23c77bb87dce9bd1bf', class: "card-body text-center p-0 app_links" }, h("a", { key: '8f8caa9d84a1272bdf3f779e5383c1011234edcc', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '23f6c5c8f3d31aab655f5700d2af5d51b110657a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'f3869b61d447aa63148394bfed395a8860d658e5', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9667116500895c93f258bf6937947f27bc8efe46', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'c3119f9e8676b0aa0b00d16e2113b5f807559a8a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'bd67eca6809613fe340a3abc0db1203bcf288d27', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'b786412b0e0cb80effdf20781d85b4f2247872ea' }, h("a", { key: '34cd0c8f5cae7ea7ec1d683640d403c08c80d422', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
