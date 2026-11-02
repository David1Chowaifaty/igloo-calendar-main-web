'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-_fT8lvlJ.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var locale_controller = require('./locale.controller-BE9t6L_N.js');
var t = require('./t-CqJPQrfm.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
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
        return (index.h(index.Host, { key: '4b05ec93294fbd2e71cf5a3165c90d15c05f79d1' }, index.h("ir-interceptor", { key: 'c3c313375aa5e0bd78be5bd773e623c01674f480' }), index.h("ir-toast", { key: 'e2e9beb50e804049d76981e9ffcefe14a5af20af' }), index.h("form", { key: '3428ab245c08d060a2d4488895f4a2579789387d', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'dd0cb371fd3c7d8b0216be80a66cc18081a50a0e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: '81d9e0586a4a247a68d69325fbef4edf18641c30', class: "separator-container" }, index.h("div", { key: '533b8d1216cbd3dfdb3aecaa62a8c9fdf14eacb5', class: "separator" }), index.h("p", { key: 'dee0f2cd391e41bea87b6eacdac2ae204970b41a' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: '71bcbd92f49348c6ed6877bbd0a1922846f5aafb', class: "separator" })), index.h("ir-input-text", { key: '2c830d5c5fb6c89ee7b980c83a9668faaae6991c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '226316e5de5c9060659ae297b4534aba9277ef11', name: "user", slot: "icon" })), index.h("div", { key: '03c58085148679b3c2e883d5e2945ff4a5d507c6', class: 'position-relative' }, index.h("ir-input-text", { key: 'd7aa0b28ae531c3c206be4b697ccbd23b012721d', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'abb028d204bf8624c2fabc2c13dd792a6026e910', name: "key", slot: "icon" })), index.h("button", { key: '4ddf3ef59ae3fdebdb81699ba968ff91f792721f', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '57c4f3e48c9416e23603684e76b2c083404f5553', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'a6bf96a6c1a031507d883f4bf68cd54a25b34223', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: 'c918e53325b2053fb6fd666491d4e2b20b923a12', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'c6e022ddedb4288e0d498e12343646c8b2b1dc13', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '29888e441fa0b68bcd3fee9261ff7fa53ae7e56c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: '934c09a8e51ac181c50ced661c1b2259891b07b6', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'f6972ee961338c68373140212315f49d6668bfed', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '97aa28b539fc9ec052f9285c809304ad7919d360', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '4ee4e1a17a8fc1c8ddda11674da1058a847e77f6', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: 'a3992949b02a26b86864a973e2af1a59a0bec3a8' }, index.h("a", { key: 'fbfcd5e9d0ba89f795af4adaab78d10d4b09a8eb', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
