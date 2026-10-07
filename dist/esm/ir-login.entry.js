import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { A as AuthService } from './authenticate.service-C4X_z1zf.js';
import { i as isRequestPending } from './ir-interceptor.store-B1TrAet5.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-DQrDdP3Q.js';
import { t } from './t-BVYK64UG.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locale-scope-CapRuPkM.js';
import './language-observer-CHgzsZkY.js';
import './types-C7G2emJd.js';
import './types-Clk7NCXk.js';

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-inline-start:auto;margin-inline-end:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;inset-inline-end:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish");
    }
    language = 'en';
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    ApiClient = new ApiClient();
    componentWillLoad() {
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.login });
    }
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
        return (h(Host, { key: '2b1b7fcaf0b49c9d670f0d4fb84897ebd01cf0bd' }, h("ir-interceptor", { key: '6155e996d842be8db8aff28e3d9adcefc2cc0233' }), h("ir-toast", { key: '39f5f0708b53c2983482770ebd23766cb83222ce' }), h("form", { key: '49632a3c0c0645551def96979ba47df04c5aea85', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '40f9512c709653049501dd1881e1c0febafaff4e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: '840da59799341c69468bc72338170c2bd8775ce1', class: "separator-container" }, h("div", { key: 'a25c0747d48562e4cf0a689a728118b5855c9bb5', class: "separator" }), h("p", { key: '2ba0ac4baf31d6ceb79157a3d4de2ca19540f604' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: '20b024c13eb703ba594786301a676057e00af6bb', class: "separator" })), h("ir-input-text", { key: 'd09790a8dff47864812fc57f47b285176eca6bda', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '5bf465ed8de86f7d0fce3ccba044226d5dfdab7f', name: "user", slot: "icon" })), h("div", { key: 'e8d0ce5557d34fe900d6c1f0f71c25a2d6a45a8b', class: 'position-relative' }, h("ir-input-text", { key: 'ed4c92b8ce31c6f1243cff759fd20d122ba29a4c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '19bfd5dd9be2c743c91729fde474a7ef39851fcc', name: "key", slot: "icon" })), h("button", { key: 'e4aca3a40165cac7dd5a7f72a4c9a4c471d9b9cd', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'ac11f09068271fb5a47751a458804e6b779fc815', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'a296faf15c92a8286e089dd4ff642e62397cedf5', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: 'e6536326da1e342214a01dfffc3b36e667b0fbc5', class: "card-body text-center p-0 app_links" }, h("a", { key: '8c380424e7c5fc367f08fd27d266502b300868db', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '2b16c1d0c2d2e125502e9ec5e0e6ef7d226e35f7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: '32436393665ecd4b80db0ee0356586bf0ee2cc7b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '37419278293bc4de859faa2cfa8f29605ea61cbb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: '29dfe241f6debf68a76ea3643f683d179bbf898f', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: '72af7389e8ae206e189af038bcd937e887c5bf1d', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: 'd985a50e18b5c0dfcefddd60e0cfa666d4a45651' }, h("a", { key: 'dfddfaae0914470ec6b372397aceb4abc5cc9780', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
