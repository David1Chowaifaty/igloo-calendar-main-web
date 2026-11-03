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
        return (index.h(index.Host, { key: 'f041fee43cff3a9a49a5caeee1fbecaa7f73dfb5' }, index.h("ir-interceptor", { key: '2f4e3f48847423c04f9abe6e66cb6f73ce0e53b1' }), index.h("ir-toast", { key: '8ca7bbc7e8535074297a1f86d3ac3050d142dee5' }), index.h("form", { key: 'b00e544044f07555b530e20e0fcd7f718db8e09f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4598bd86f00b50a55745e4c209da06092d06e5aa', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: 'd9a37b6cf52afef5827c99a7957266c7948d1a6c', class: "separator-container" }, index.h("div", { key: '9d75924df23ea2cf7027726bdedea61ac791c079', class: "separator" }), index.h("p", { key: 'beae0884a7ab8acad6a4e3e66bd31cca30f23fba' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: '5d833c8a82c11cba2889c50d71a9c327784585c8', class: "separator" })), index.h("ir-input-text", { key: '0dec84b0300af286d57c46425e9968cf32535980', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: '587e53c178e94551731ba324914cfc0d695add99', name: "user", slot: "icon" })), index.h("div", { key: 'c87cb4a62b4b7d4954193125a2a3671b9a9d730d', class: 'position-relative' }, index.h("ir-input-text", { key: 'c638735d041389687dd787f41baacb381d445912', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '4c06f37f1f21657bc4ce5980a0e015e2400b30f0', name: "key", slot: "icon" })), index.h("button", { key: '8a972729b2f757aab06d22380d3ecf30b40d99b6', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'af4e2f226d9d5f77c177f0c7e256ce7e34db0382', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '9c36483066da01d72c412dd04bcc2fd95c8dd65f', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: 'c06f37af644c9bc6262dbbfbf04f6dc81d6f44d5', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'bc10d5cb1d7e8615f70647a483882f1b7fd99486', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '49b2c584061d2b976fc1fa951f08e952a81afbba', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: '608cbb24cb82571a91fc04a053f81a8a100182ce', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'eb8ac42d80962340f3e009ed4d064681533ab27e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '52a3b391d2aa511b1a58a1043745ff25a576480a', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: 'f5c4dd9d2e22d24b36d07951d8a10c3bdfdafeef', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: '7cc103c3e29d3f696658344cb89d54ed41a872d9' }, index.h("a", { key: '02f0fdc1b50a1ffb57870ba1ed0274f97b712bf1', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
