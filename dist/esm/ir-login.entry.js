import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { T as Token } from './Token-6c389e24.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

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
        return (h(Host, { key: '2492384dd4f3c124fdf24c0e9bd2344504d08758' }, h("ir-interceptor", { key: '0d38c647218dbc4d08bfba2ccb2f85e658376366' }), h("ir-toast", { key: '8aa8039ded9f01a82415be4c9a77c88373e214cf' }), h("form", { key: 'a571612fc726406b8fc95ac861e3789265c51a01', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'c2a85b589a3a812651117e09e34018d6ce654d11', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'dc4f0bf2c952450bb982fa5bbc4735ad8d391368', class: "separator-container" }, h("div", { key: '57e1d9f43ac81efe1a05ad5ee894881b43496b03', class: "separator" }), h("p", { key: '0bfa8a0e5bcdb0898adb052d21007a07c5a1dfd1' }, "Sign in to manage your property"), h("div", { key: '6b9f7c34df31c250c0d689caf89a71485225bac9', class: "separator" })), h("ir-input-text", { key: '1621e80a9a5ede01444d094e8f9f019c80e84702', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'b9c212e8c9108dacbf113d75caa2b6b4e68be1df', name: "user", slot: "icon" })), h("div", { key: '4bbe89a2e6bb2e56d45f10bb0cea540e0e606cec', class: 'position-relative' }, h("ir-input-text", { key: '53ad9e49406b0ac9f79ddc181fb8ec1ac0fd6d65', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1eecf153de1dfd5c506f459e511a065c6b258184', name: "key", slot: "icon" })), h("button", { key: 'a975fb9747371dc78a4186482a875adbac7fbec0', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '478c5bd043d415feca3fb6ef6d772c7acea381eb', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '3dfcd77901caff7aca9c47bfc2a1a57389914739', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '01570e735323777b53a235ef20b44b38d68f45c7', class: "card-body text-center p-0 app_links" }, h("a", { key: '3209f5280a4cc4751d3d40f664960f63d0aa7384', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'b324d409e7762af70576886909ffcd0279d6fa0a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '79d0eb70c136e04a2d865fdc0a0ecc7c5bc7fbdc', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '67df4d2ca8073dc2fcbcdca2908b02839a2a3189', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'a3447bc1caf367ab65fe50452711eddc2233cfd2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'c62844041184474d837a56eb75ee57fd17900f0d', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '3d3a6e8b4dc6a21abdf6952f9b7383fa9b7efb6b' }, h("a", { key: 'f9ac38e414e635c3b56a352259a37c92ea0e90a1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map