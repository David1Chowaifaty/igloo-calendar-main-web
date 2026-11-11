import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { A as ApiClient } from './ApiClient-BHOzIdlE.js';
import { A as AuthService } from './authenticate.service-C4X_z1zf.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-Bs0lwnpi.js';
import { t } from './t-Bvz1wS_D.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './types-CB66a07H.js';

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
        return (h(Host, { key: '5c0d47de45ab12cc2b4ecf619d4203c0b2e72614' }, h("ir-interceptor", { key: '30d4ddfcce452bc76849754b0e6ebaf7b2007157' }), h("ir-toast", { key: '90687b8370a48e1742edb28fb5a9425b13ab5550' }), h("form", { key: '08ef1d112dc5bed6b78612e270a80b8cbb809b90', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'aafbf6774f715dd268e55d4929de5a3aa2528b5a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: 'c2bb2bcb218f3ad985ec1193ea0bb9f5bf4bb888', class: "separator-container" }, h("div", { key: '1c7284670afe099ced9b0f5370f5b52aa4641a72', class: "separator" }), h("p", { key: 'de05fab653f80aca16bfa6dd4306bb0239640c8c' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: '0aa6f39cce058cc1e90423720f9b63af6fa54b89', class: "separator" })), h("ir-input-text", { key: '67b2e5270915cf0a740f6393e6663a82ff377144', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '11257d32030b91dce80e55a50a7a0dc40125e420', name: "user", slot: "icon" })), h("div", { key: '58ad83ab0a390b9bda1d775ac9a4c379ecd463de', class: 'position-relative' }, h("ir-input-text", { key: '85cf989a97fb6b3b6a9644f9cc7b446baf557e41', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '1a4fec157572c1128bc5063a114e4e43439f8b6f', name: "key", slot: "icon" })), h("button", { key: '74e0fe0f415579a122f01967a689275c45aa1581', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '16c8f407e38c15757672eb0df08412dbfb2e3ce2', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'f8e8f914e28004d81cbda66d75f5817946ecc552', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: '878cb6e92fa38b221a7839269afc09a75a1b0fdf', class: "card-body text-center p-0 app_links" }, h("a", { key: '76d17eae7b2f13068829d387da3f03fbaed022ba', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '789c51fcc7506436a3dd190fb4f73fb493dcdbc2', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: 'be52e654da8e5cd37b069f60367e26fd22890b93', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2a1aefb5253be7c5e10e07113c24d34e14104c48', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: '0ce02c7ae34477434f9920535b765b60b7a04d6a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: 'e3e13535d20e91e8435354af55c9cbe2e5f646f0', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: 'c9cec87440be75a3ff38f70f065625ff5bf00fcd' }, h("a", { key: 'f44beb95a808234849b36edd448d2b34349b53d6', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
