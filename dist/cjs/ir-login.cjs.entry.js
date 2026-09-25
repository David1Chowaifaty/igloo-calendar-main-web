'use strict';

var index = require('./index-CQkpA5n3.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var locale_controller = require('./locale.controller-C4TH5Eq_.js');
var t = require('./t-C54QV4_c.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');
require('./types-BzBUVSnE.js');
require('./types-BlCoz3jZ.js');

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
        return (index.h(index.Host, { key: '0507a812914c6e0261955873d8223c5a2a4dc982' }, index.h("ir-interceptor", { key: '3d849c9d75268e9384f7ba5d8ba97287253ec133' }), index.h("ir-toast", { key: '3b5fc3a45e9ff8108bdc4ffef2e8ca298f007970' }), index.h("form", { key: '80dca1235678978b1daaf972fba0fab04cda350e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '135e92894caba994203d821a894080504990dbc7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t.t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), index.h("div", { key: '0977c045c78cef10c244bc7ecea42392b3217f3f', class: "separator-container" }, index.h("div", { key: 'b09a4779d0a59f6607c20375debac1a24e36b8f8', class: "separator" }), index.h("p", { key: 'b986ddf4d36aa8e3479853c0559c46101f0460a2' }, t.t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), index.h("div", { key: 'f222e708309231a361d348f3210ee300011aaad3', class: "separator" })), index.h("ir-input-text", { key: 'fa70ebda1056da6a2e598676384602284013fb9c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Username', { fallback: 'Username' }) }, index.h("ir-icons", { key: 'b06fa91260a02ae73de469e405487b6e98428666', name: "user", slot: "icon" })), index.h("div", { key: '0e3d9f2352e1f517ef10fe118505653c88d1d529', class: 'position-relative' }, index.h("ir-input-text", { key: '63f763a753f68618b9b8c2599334e82dbae50d38', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t.t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'f57d12207e61bbc29f7143469cbc933bf2f42cb3', name: "key", slot: "icon" })), index.h("button", { key: '92de11771b7709dcfcf1e6587b21b5fff35c8ba5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '964aaa4462273df499b21bd5df10a6e7db931009', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'c326406fb05d3d12073c1830dad4a13eefd1747e', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t.t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), index.h("div", { key: '6060f3e5bdafef5233eb3a055495bd12444f3772', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '1aaece27ed338ad66e4a709f16859842fe702525', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '5ac0a34dffbec63aecc4ca146d89868b0d30d3fb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t.t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), index.h("a", { key: '35e0aad64a8e4e754d6120a68d877d1a5ae29151', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '4486397f6ec21aa8cd5335570f69967bb187933d', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t.t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), index.h("a", { key: '4e493073d1dc499ecdbb4401370cd6201e90488b', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t.t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), index.h("p", { key: '3bbf4a2af27b012f83e6ad5789c5d5099b830935', class: 'font-small-3  my-1' }, t.t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', index.h("span", { key: 'ad987fbd18c04420a0c0f540f321d18edfda5ca1' }, index.h("a", { key: '3f257264a13d1a81baa6c3d6ac415eea9acc22f0', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t.t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t.t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
