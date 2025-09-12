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
        return (h(Host, { key: 'ea4a158ed1e558503cd3cd600f16c245790c9aa8' }, h("ir-interceptor", { key: 'd04b2bf9e98d491c741a9ebdda40771be3a2f87e' }), h("ir-toast", { key: 'a9f15f4f467c9c4a77fd99cd563a176e5e329513' }), h("form", { key: 'a340e68edcbe826700569dbb879fc6550d6ef8ae', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '59463d384291748cdce2b5893e409cdce8d85bf2', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '6eb0f367d498192bff3367927cddee55322fbb4a', class: "separator-container" }, h("div", { key: '2bb91d9b591f083ed1d198d0f63865cae3b6a190', class: "separator" }), h("p", { key: '38c4bd3ea6c278ac060207824d45100d53065f9b' }, "Sign in to manage your property"), h("div", { key: '25e4aadb04706f500e5a6d7586e75274193577fa', class: "separator" })), h("ir-input-text", { key: '4a042d9a1508b8f0a1b37e5719164b68508b08e9', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '2627c5860b165d965f65989516e3b2b222a7c7e2', name: "user", slot: "icon" })), h("div", { key: '6c6fc3c56001ea645bf3c5dd9a16736e1b289a72', class: 'position-relative' }, h("ir-input-text", { key: 'cffeaa7d2bb89c17f37838fd1a03aab7b4679858', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'dd096bf62fec3a0d622a30ea526139b1ee29dbbe', name: "key", slot: "icon" })), h("button", { key: '7a81b15806cabd262bbe592eb58adb8911deec26', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '866d99adc85c232a7efc83e6d8a6af0fb304656d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a86f70a39942631b2827bd4e7cc760bdfcc2d79f', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'b163adf21a089fd03cfd45d77443841b4b709101', class: "card-body text-center p-0 app_links" }, h("a", { key: '2604fa0edd2ef3c811b477f2ac622fd679deb6e4', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '5ec1372b903de7a38a4c3a752a582197ea1df2ca', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '44cd685956001fa4922a3a22ccf55fdd87c8bfe3', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'db7811eed347a07c03db2aada129ecfb410f3c59', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '7f160ebbfd17d3806c50bf5f7e4083e7299ce73c', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'b1e61a40929d9898ffe83490a656181dd8f35445', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '1cb1753cbf1f027c3bd748ecb262d3cd20712435' }, h("a", { key: 'c2442bdd175b13f29df481f9291eadb01b45e41b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map