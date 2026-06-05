import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { T as Token } from './Token-bcdb7c50.js';
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
        return (h(Host, { key: 'd55e7fb2320eb61b51984de13e8f731038586b34' }, h("ir-interceptor", { key: 'b5a093d470f774b790cbe0f44437a28f03d220f9' }), h("ir-toast", { key: '19c9b0994b5c9afcc7eca8191c382841ded079a0' }), h("form", { key: '5a8b3479317466c60be5109dc758b4593c53a185', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '3cbfab5c5120d35b09c3d842638a193d0ccaf88d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '37a9559051c8cb21aeb9d6f2c2b79c0dd869149d', class: "separator-container" }, h("div", { key: 'cea27b8323769b7bf3510a46e561ca4a16a7f823', class: "separator" }), h("p", { key: '369f4e31d733a63ac7f8abf6a6b5c05cf9cb1154' }, "Sign in to manage your property"), h("div", { key: 'e726b3b152f7045a7ee290a32d424f84c571578a', class: "separator" })), h("ir-input-text", { key: 'a86195e368dd06f58c4f869804535fa7e52509d3', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'f7227d758ce80b80ffb1b1fb64dc253c76b9ed30', name: "user", slot: "icon" })), h("div", { key: 'a2d49a24478997b48e8ed978f8b0a970a1298c05', class: 'position-relative' }, h("ir-input-text", { key: '399468e3b2f1d986863e8229c446289765bb2698', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'b6e352707b0cc31a574e84cc7f7d236cb5c95154', name: "key", slot: "icon" })), h("button", { key: '84dc230a82dd17ceac9069bd3945df4a53274bd7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '7d539547887d0e97d6a4ac0b2063754ffe62114e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '21be56cd6edc13a08102533265dfedae256a39cf', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '976fecf0bb7e16893abc95cfb35357e958d46ac9', class: "card-body text-center p-0 app_links" }, h("a", { key: '2e0f2703968820aab2672cc3c6d0f69a3c78c92d', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'f9040a9d109b215561659a2c393fb380ac5b26ae', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1553c55297a969432c19e1ac3d5000a7e9dbe0ff', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '6d3373e8783e797cf8d2e1ddde8c547cfa6745ab', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'db4a3f68024b008d4d39b7e8cec1d5f2f79b172a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'f8fc17ed0fda67f33863072464a32fb1e1ac039f', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '482167cd25157135d1a0e1fafb564cf54de7307e' }, h("a", { key: '660c4b0a6be8c46b041da063f87c988577dd2893', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map