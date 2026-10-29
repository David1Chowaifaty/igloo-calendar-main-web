'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-_fT8lvlJ.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var locale_controller = require('./locale.controller-BhXPN9ym.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./types-B4nFkhmU.js');
require('./types-BVJQZ50e.js');

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-inline-start:auto;margin-inline-end:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;inset-inline-end:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish");
    }
    language = 'en';
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new authenticate_service.AuthService();
    ApiClient = new ApiClient.ApiClient();
    componentWillLoad() {
        locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.login });
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
        return (index.h(index.Host, { key: '4e4c9a3b9cc0796de8267d8a2ac0f7e51ed3baf0' }, index.h("ir-interceptor", { key: '035d39ec2ad55f76131b74fce921fe33e46c7939' }), index.h("ir-toast", { key: '96e3f709f7b2bf5c17d93c039bc5e78cf16150e4' }), index.h("form", { key: 'c94b8ad52ca4b6fabfa670210d46047371586e75', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '319a0248108b8ee74ab14d786a147945a4930a65', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: 'ec656a0fae76ed8c93a0aaccc7f7d73a2f7529c4', class: "separator-container" }, index.h("div", { key: 'a3edc87c05dc1c1613446ba708386b4d62cb9c0a', class: "separator" }), index.h("p", { key: '9e50b704da815b32ef45232c94b34607ef8fc494' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: '76bccc5436a950e1251af8f2adad113f68027c1e', class: "separator" })), index.h("ir-input-text", { key: '25ef7f0fa80af7ae50d5bf1fe231ed9be32fd41a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '3672722895aa86c7d9f392d6a5a8c7539ce718fa', name: "user", slot: "icon" })), index.h("div", { key: 'c21098a028ac795002e742f45feefad9b2dacd05', class: 'position-relative' }, index.h("ir-input-text", { key: 'e303ee9d87b9feb3689f4d651b412e1dfa2603d9', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '676aaf5b198840d023f81e2007a20cbe4b154be2', name: "key", slot: "icon" })), index.h("button", { key: '91f562bd309ae73670adc706d92c293214d59e9b', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f3dd3ff7ce40c7c6c915454d706e6ee2897cf8f4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'd62f6e2cfb0ec1f750c30b66cfd4d5f6e32c4f24', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: '2c38a3a510f4d0f56efd0623d4ecbf965ea81183', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'ee92f1970a23e97797ed5ca466540cfcf4a49f7e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '21dcc67ce60b1da45f4343e51b58c04d7ac0bd66', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: 'cf0cac66830618d1a9d0fd311d0c6d86f0b88271', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'a13f3eb473cf9f7241ad8973b1a36c82b571da3a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '55a8857f674ab4d426647c659466db25aa2caebe', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '3015f0ca2b4b6fd1a56f82e77b34da38b7d94ce9', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '5eb8278793c6b89e19afea9e41b3d37b81e0da4d' }, index.h("a", { key: 'b63c8a782cadc26aa7cd063510e085e82d92a08c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
