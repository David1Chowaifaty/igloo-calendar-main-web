import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { T as Token } from './Token-6c389e24.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { a as isRequestPending } from './ir-interceptor.store-e96f5930.js';
import './axios-aa1335b8.js';
import './index-c1c77241.js';

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
        return (h(Host, { key: 'a370876b2e5ac24244c3dc3b0653736f69009ddb' }, h("ir-interceptor", { key: '1db755beb898759f927160f5ef75b2125615954c' }), h("ir-toast", { key: '758e85768cd135725b4930cefa4368698de102fe' }), h("form", { key: 'c05c0fc7d0cf18a2795b8643d747054371577251', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'f1ff99e497ae7ed73497104ea7d29bd21c7d4adc', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'ba5254b9e2327fc77329ac1a8e3b52e462e6b5b5', class: "separator-container" }, h("div", { key: '8c8728238af67fd3539e471ab3826273d83f8fb2', class: "separator" }), h("p", { key: '9fae38d70173880dcb806903898c277ee4471057' }, "Sign in to manage your property"), h("div", { key: 'd0669d3ea4fac7874525ee5839ca2794d74fd789', class: "separator" })), h("ir-input-text", { key: '7e225187a8119ef345f051a4c5dd0f177f76eb26', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '81a0c12ebe372156d3d908bb871349578a387ea7', name: "user", slot: "icon" })), h("div", { key: '2e9ba95539da90a7f9c3fabcfedf248d057bed63', class: 'position-relative' }, h("ir-input-text", { key: '6f08a6a05b543acbb9ae1579f256f3ded68cb225', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '34f8a7bd9d20d384502a0d475fb2a6f2fce11ed4', name: "key", slot: "icon" })), h("button", { key: 'ff3a26f41278dad7265c5b8a639f6ffe5bf6975b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'ad38ee69e88310f180e35a51b83c3fad8e82f4e4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '811da011ebabfdb98a58413a8740d99efa8f7ecb', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '997e5f61efa40e940fe932dfc78b255b71a93dc3', class: "card-body text-center p-0 app_links" }, h("a", { key: '887bac20d2012bcc4ad025ea7321f3ed5ff54837', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '3e63b2ef67422827640ad2c99f4f9ed11c4b87b7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '1a3b77a1e3664e21ed09c50164827591736aacf6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '991720a6ad6aa661b119d1110140c62e3cf1d568', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '3758da241aa316b32be039b445c240afa52e80c3', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b6d32f8282d57fc252605f16c14d6f5c738f9f05', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '62ddeb4d4249ce2f7d93e5351c63b251fabc0d8e' }, h("a", { key: '7342611958a1e34d33250359765cb5bf84a0499c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map