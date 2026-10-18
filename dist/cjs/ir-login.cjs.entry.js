'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
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
        return (index.h(index.Host, { key: 'b100d44a1232f2270d85a3dc924183b1746d9350' }, index.h("ir-interceptor", { key: '0a87f8da01fb33377a60c73949dc4ee61083d13b' }), index.h("ir-toast", { key: 'bf618feb2be1fffadb506c34fd5fa55453ce9ea8' }), index.h("form", { key: '6e08ea76719234b90c7d6953f7ccb0213e38a2d1', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'b67108af1d9a26d6a3425da5854dbf3828c635fe', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: 'fdeda0537cc29ed1ea4c9d98ec6fddae69566d68', class: "separator-container" }, index.h("div", { key: '973a59e76896351ad5621fe76a9b2b8de534958a', class: "separator" }), index.h("p", { key: '5f02eda84f1a08ff6ab396454ae9c1c7e709e941' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: '1e065fca7b2a1bd735e36b6cccad5d2d06e58dbf', class: "separator" })), index.h("ir-input-text", { key: '104fbc5c9e8a972c75fe47735d3ce9638b02f952', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '02c62914665c90d5926b4926d4a8f34cef137762', name: "user", slot: "icon" })), index.h("div", { key: '85621480de22ae63f480b2fcdef2e9c341690ffe', class: 'position-relative' }, index.h("ir-input-text", { key: 'b5b0c4aefcb73e93f7658361d08c13e4f4154193', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '3455e01f476e83b69cb9ea42c8ca4d66cfd62d0c', name: "key", slot: "icon" })), index.h("button", { key: 'c463737f84f1290c95337da3171c2e189785caa7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'f5bec48d31716845a3ac7982a34e9de171d98b2e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'e3015fcb9643e5488075141359338a0bc7243239', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: 'ee4edb5c2e3887b354d98ba8e521026a969c9b18', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '48ff391a30a647c53b0bc2e5cdc0082cb5998bbd', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'ce25f5dbac7050d9349fbf8e6442dac0b886bcd5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: '912bc07c245cc7b5d13e3af36caae8031cc9f38e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'f5b5cfb6cfb71b6f001a393bd2d411519c666312', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: 'a6df2aafb4df405ef28306b768c47d16a2c3bb32', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: 'a8f19e7b024a9e5cae8a6062d571f58e471936d8', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '300f4a402fea7f5c78e673268286875777b3bfbd' }, index.h("a", { key: '4c1f60dbcd1ee5207b09ca80265965b89129ace8', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
