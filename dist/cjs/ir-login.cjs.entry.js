'use strict';

var index = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-CdFHnn22.js');
var locale_controller = require('./locale.controller-BtkICUK3.js');
var t = require('./t-sd8HJHNy.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locales.store-D6DJIhoZ.js');
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
        return (index.h(index.Host, { key: 'dd325af0f8315137113dce8c380d5a93aa08fec3' }, index.h("ir-interceptor", { key: '397de7d6d15e55edab3ae6d2a1d32247aa2c903a' }), index.h("ir-toast", { key: '81593fb72877d740947f2faf7e74deffea7500ba' }), index.h("form", { key: 'cc592caba26ae821f043e4183d89fa291fc26cce', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'e5f46d57eda21dd7f4a6ae6dda5cd7622cc2801f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: 'db831f31e02caf5cb0fd262520190c98931cbc0b', class: "separator-container" }, index.h("div", { key: '37051a4150d48fe9b5ed6a01ddea345b5a0938a0', class: "separator" }), index.h("p", { key: 'cc3161d56c186d683fad62f7bc996c8386230e64' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: 'fc84ede29eb3ef751c23a7f6f43d36b753010cfd', class: "separator" })), index.h("ir-input-text", { key: '9fe0e659583b97fdea19fcc5fd3b5dd05b6a4f0a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '2a028c6a8eb0505c9b2539ae8d8bc56caefde189', name: "user", slot: "icon" })), index.h("div", { key: 'bebfa144c696b142372b6bf584f8fef230bb74b3', class: 'position-relative' }, index.h("ir-input-text", { key: '3906a5cb36a3ff550520a903c340cf4e60b3ee65', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'e36e455603449145cd4b018692764085e671bda9', name: "key", slot: "icon" })), index.h("button", { key: 'c95db12e623f695cb4b7a22337188cb88b9e1df4', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'b540ddd07180957c1bf2e6d0636139f142427b41', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '2f8c588da6aa677d12dcb7e82a632a7231419ebe', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: 'cd98528226ca494a7ed110f04f604484de4b4b9e', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'b32541d77df3a75093ff58cc6d96cdc5143a2149', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '1945cd5c4aa6b7fd87f67c8d84cf590edf4a48f7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: '8e01e9a26db35334a268f44b5cc98bc2be491535', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '311fbe6e2cc862bb9d1abe8d0cf0a770e55fa1d5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: 'aa9ed30ba46e0e50ea8daa3c397f4c17483f482b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '665946d381ffce6b151b23d98b5eef068facae95', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: 'de00756c5901797931ec1f73fe04e79912ccfb2b' }, index.h("a", { key: 'd2dd56003277b18a1540fc7336988fd3d63d3d21', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
