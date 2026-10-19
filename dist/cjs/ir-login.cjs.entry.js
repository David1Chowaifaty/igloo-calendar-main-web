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
        return (index.h(index.Host, { key: 'c1f74c3a4bffbfeddc8935a54d43ef52fa77240e' }, index.h("ir-interceptor", { key: 'e7f852075f4a9d87d9e910350166bc7f8bc5c7e5' }), index.h("ir-toast", { key: '8515653afbf671b66cec974c48800d178b456e05' }), index.h("form", { key: 'fdf3d169f87c5d872a868888b93e5fbc2ff5530b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '59313c914202cc4ad71c1594dc58953bc628e7ed', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: '3da4ba74ede05ec839890fbd240a649ada355a9d', class: "separator-container" }, index.h("div", { key: '9756dcffe6ddc00de8f9dabd05f40cac614beb1e', class: "separator" }), index.h("p", { key: '85920aa53a6a615b99eba3d18d59618620679097' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: 'a3f78d40820d2b397211b34275f037809e8c7572', class: "separator" })), index.h("ir-input-text", { key: 'f320ef4f3a3cf1d783400d7a0bec6374d57315cf', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '630e9a90bc76d7b594d3cccdda5234e5ed492bc4', name: "user", slot: "icon" })), index.h("div", { key: '11d8773ca5a38fe8a4ba6a7e2f5b418fca77c8ad', class: 'position-relative' }, index.h("ir-input-text", { key: 'e7a4976ffe6c077b7a9b2f97f6631795e58e6ddf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e9c974814cab06be8c66a34f7bf6d8d7d564f90e', name: "key", slot: "icon" })), index.h("button", { key: 'db54b58175df7b8f8131dac1b05e8aa269824903', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '550682a21250f4643886a58f12286d5105921e68', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b7c28146450dfea00101d4e3ce3ccb38db47d77f', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: '4c884efbce2db6d04e85ad90e14375cc08109c51', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '2bb9779b0d46d16aa4e9b2bc2bcd9bb0125a4122', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '3cb533b6851c9864971ec4727270e2ff3e94b1ef', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: 'bd0acf1f4381343163055972575f4130421618dc', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '4c12c277eda3aedb3f9a118ba392fc8e7823b6cc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '4ed23110866f4c0ee08b5f3673a352b9ecefdf0e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '50e79ff52151807d7dc6a3401203ac8748acf0b4', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '392a94139c442ec34c0d3785c34844d80a5ba6cc' }, index.h("a", { key: '46373b3444adcdfe655be1c551e7a227b941f5bb', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
