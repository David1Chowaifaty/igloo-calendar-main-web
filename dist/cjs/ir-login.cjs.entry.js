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
        return (index.h(index.Host, { key: '8ee4de07c738bbbe7407e319a973f9da7eb9bcc9' }, index.h("ir-interceptor", { key: '19c8ef7c4e38db85e47cf63638bea065a5b30aff' }), index.h("ir-toast", { key: '0f805f101aaf96a781fed1c26081cd0af54868c0' }), index.h("form", { key: 'e6cbe2a5de02f59d47eb788696a7d2d8de1596a7', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '55138acfaaf1affa0c5209f9b81224c1ac4bc14d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: '050047fa19ada9fa392d1fd2e965393ec98d5af2', class: "separator-container" }, index.h("div", { key: 'fbbf56d0b5819beb434d7f293eafbfe72c30eeaf', class: "separator" }), index.h("p", { key: '3f19f97fda07b085195e6b9e55efa9129adbc666' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: 'c9ee0178070440197ecea3a901aa9ee8bc157043', class: "separator" })), index.h("ir-input-text", { key: '9f0b73c5df8053ebeee9dd9127b31e348a426fc0', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '17502471b8352de5febb86893d8a93501ac2ea12', name: "user", slot: "icon" })), index.h("div", { key: '76c6e2d1ad3930b65aee69a442647dcc58dd5765', class: 'position-relative' }, index.h("ir-input-text", { key: 'e589fa6fb35d7217e255617ccd3bf6171280a655', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '9a35ab926ac312646d8cde9a8573aea87b1c8121', name: "key", slot: "icon" })), index.h("button", { key: 'd48b2ee9ca313bafba7537663dd8142a314d3f6e', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '657e5904746241978691d7aedff1b8bd8629ed59', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '6fd84c20fbda3b76cf60ea3642ff2916cccc8fe3', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: '1e82323960222ec83e6ae1ca67592087945e1ef6', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '93ea2c8ecb475bd7c1e325711841f4abbb3f6651', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7af4976db9e915cb7a87a2a300f5d9e87e206767', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: 'fb30abb9be273ab2b76c21fb4b6b3f3e7441d40e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '5182adff12490ac132ff83ca8a5892156d490bdb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '10966bcac249130a8d9294f98bd36e369dc8d450', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '56a8baf02c1ee78d9326bb531d344e80fbc3c716', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '548edb9b5091bbf7662fed7c7c3f03ae408b2069' }, index.h("a", { key: 'd73c9691bba5901d14b10e9cd3e4780e814a63d1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
