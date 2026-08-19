import { r as registerInstance, c as createEvent, h, H as Host } from './index-Kqbk9HdW.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-P7NCUZUW.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-BJS0kaeV.js';

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
        return (h(Host, { key: 'cefd0107c2351d8be38c0d25f9ea65d89b6d2973' }, h("ir-interceptor", { key: 'bd9c1211186269caa8f911e52078eca5ad648801' }), h("ir-toast", { key: '9a4e3f873514e601c5fa23ea5bbaf32d71982f36' }), h("form", { key: '1d716c020b55b00a332794cf4b3f6798b6c917cc', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '7772371b5019a7fc4ecd8b7f3b818ad10acb8481', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b8fef750aa70b672751abc34ca189c1fb398ea44', class: "separator-container" }, h("div", { key: '5064016fbc55436a968eea42d68fd5595298d4d8', class: "separator" }), h("p", { key: '13348c256161a9ede56cf249127e3562bac8f213' }, "Sign in to manage your property"), h("div", { key: '1cb56c7ab3642dae2595e4473f221d105670d057', class: "separator" })), h("ir-input-text", { key: 'ded742b2235719ed75e621416578cb8412d6ad37', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b171ac70234def2aa0fa20c0f6d7a22dc656f5d9', name: "user", slot: "icon" })), h("div", { key: '631b10972d998dd0668423f778280f4395751c35', class: 'position-relative' }, h("ir-input-text", { key: '996d3bd57b8cd2cbdb6d6807248d3e508d6393ef', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'a86800dbc9d0383aa6c336e2b0b387d88b1c8d5b', name: "key", slot: "icon" })), h("button", { key: '654cc843695bd112f209b8c046a1b172a8c395e5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e5c66383cdf790259e9a714e8df88b9de90c2601', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '30826c02c13ecf5bbf13c60fe56df78c74b498c3', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '85e9e44075f66aee480162e7176c153cd08564f3', class: "card-body text-center p-0 app_links" }, h("a", { key: 'e965b6c535f6baaeb8114dca85a24c89310b8825', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '6fc324b559b42aa14556efc902f864fe7ac43868', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '01e45267214c80d6d2bf3b6336a4021429d509cc', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'b714d8787109ad30efa26cb44881bef89420615e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '04e191133c79821626a9f07df0e367e3a628db7a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '604d4946935c90adc36694911e05c429d2b7aec1', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: 'a0e1a0c78450529dde152c4ff2cc8a17bbf57f8a' }, h("a", { key: '586ee07cd9cdb5569912b5843afd067806fcd47e', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
