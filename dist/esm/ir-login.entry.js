import { r as registerInstance, c as createEvent, h, H as Host } from './index-BYqrdgY9.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { A as AuthService } from './authenticate.service-C4X_z1zf.js';
import { i as isRequestPending } from './ir-interceptor.store-CyWfUv6a.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-CimhgHoX.js';

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-inline-start:auto;margin-inline-end:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;inset-inline-end:1rem}`;

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
    ApiClient = new ApiClient();
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const ApiClient = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.ApiClient.setApiClient(ApiClient);
            this.authFinish.emit({ ApiClient, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: '36614784f668a164e6a33f594dee7de9bdef32c3' }, h("ir-interceptor", { key: 'b8ccc51fe6c2daad6668218e8feef407507cf35b' }), h("ir-toast", { key: '7c5f73a5e2efddbef28a099ccb845effeb08e0d5' }), h("form", { key: '14df15b34616dc6ad5e78e61b3918d3ba6081c5d', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '5b61e4eb2612fda5693dd94e85a43768d27eeaef', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: 'b53937775bef76c08bbe1f4135ca55dc5e4c14c8', class: "separator-container" }, h("div", { key: 'b88a1ad96b818ec9aa5de008673e8f54f124851a', class: "separator" }), h("p", { key: '87573779dfc5814ebe3853f36d32f3555f412ded' }, "Sign in to manage your property"), h("div", { key: 'b6a4e1579a79e972bb476cdbf2b20da1975ba176', class: "separator" })), h("ir-input-text", { key: 'a23b1cd5ec8936ad9aae66fa4aa77a7bb8bb884e', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: '07064945ff7a6e804866ee1cc76ff90703de77f6', name: "user", slot: "icon" })), h("div", { key: '46295a636080b69acc191cd1405278964cf962dd', class: 'position-relative' }, h("ir-input-text", { key: 'bdeb85833ada62f82e503abda230590789fdd00c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'c930d82207194dfd5da023792a00d69470ae1955', name: "key", slot: "icon" })), h("button", { key: '04505f7466247adae4a41af067aa3a62e78535fe', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '3df8627c696e9abbcc58725230187e6100b31938', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'c9bff3c6f29b0b37308300ba0c659d801c3457cd', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '98d3e64a4254608596007d65a511f9e87fb6e5ae', class: "card-body text-center p-0 app_links" }, h("a", { key: '5df6a152ec26c6ebd659ba928b3687e7fdf17fa8', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'e215ada2e88608ab030f939b84bd5493f7d30aad', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'c85ca49b7e7feb0f53a123821d31ec0b42b2cfbd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '58de0471f91b54aca581411b708a4ec2e187c3c7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: 'df32ae62f55f7d31a8fa21d8de89fd2cdf9ba7dc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'cc709792f6413731573fccf8a81a41521f5d0680', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '401bf8d9a5bfca274eb335c71ce30c9734192912' }, h("a", { key: '42cbef82554ad31fb23a60f600d33ac85cbceac5', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
