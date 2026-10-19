'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-BkbxJB84.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var locale_controller = require('./locale.controller-DOykNQAc.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./types-sp5nWPAa.js');
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
        return (index.h(index.Host, { key: '6b15b9efe0cee5252b5bcf190cfef3cabf4e181b' }, index.h("ir-interceptor", { key: 'f6f9c5c354c69d6e7f877051875255e299effcde' }), index.h("ir-toast", { key: '10101ad26c3db28bba2a28852df60c53138b7eb3' }), index.h("form", { key: '2aa5cd427f739ee5614ccc43dd144cd31c6f6020', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '6912fb2cbf255399e548a6a8205cea7b21c6787a', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: '130fe24e40f031d37d322b6bcb426ef5ace5573c', class: "separator-container" }, index.h("div", { key: '6df26357bd74ca26c613b5938162ea10c97e0eaa', class: "separator" }), index.h("p", { key: '34fd532cea9818e61d3cc8441b9abe1a95186e7a' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: 'bb25ce2fd9b618a43ddb645605ee11ab09c3c95d', class: "separator" })), index.h("ir-input-text", { key: '0dfa3553ae0433583f3732edeb7b9966b01dae9b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: 'bfa562a986c59f5a34e9d7bfc214443d3f983b41', name: "user", slot: "icon" })), index.h("div", { key: 'eff6402f6ef3a7143bebb890b0094ce3b492b096', class: 'position-relative' }, index.h("ir-input-text", { key: 'e229bfe71260bb038f120be9ba9359141051b27f', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'ffadd757c54cb185cf659e20b7fb8db0079b6c18', name: "key", slot: "icon" })), index.h("button", { key: 'b80715de39bb52e4ea22f49a7043f7a45090ee54', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '25ece0400f4088c91a36038ff6704bbb2b60d6a4', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '97e058e41e3fe1377c8194985c246bcb1cf16e69', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: '77af8a963231343071af36ba7b1fe34d96a028e8', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '0ff57ef0236fb538f9d889f38fb68707338e56b6', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '353e0b5891f3d29c57348ab0b1fa8d90060d0baf', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: 'fe977092c9e9353527f7e5aa14ee42b6dbbfbb41', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'c5986bdda57eeeb800b030d40a6deedd176e6cf9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '0d3517ce226cb197306b33f880dd915522c932a7', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '3373571bcdb58901786e66f108fffa2c0aff24d0', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '66ebe059f138258e4876d70b3766e4c80855d3d5' }, index.h("a", { key: '340d36a155c32339bd8464fa4bf4c4f7ee7fe404', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
