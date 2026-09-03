'use strict';

var index = require('./index-P5Mginch.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var irInterceptor_store = require('./ir-interceptor.store-BGTJSCIh.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-BLJXadKe.js');

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-inline-start:auto;margin-inline-end:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;inset-inline-end:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish");
    }
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new authenticate_service.AuthService();
    ApiClient = new ApiClient.ApiClient();
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
        return (index.h(index.Host, { key: '393eaeecade834b482a84f8790d76ead9c85ab22' }, index.h("ir-interceptor", { key: 'f69787feedadb8d4e3b98f1ffda8ed6a89920ce7' }), index.h("ir-toast", { key: 'fe7bfb4772bb92747b54eb44c752f959c06d5d09' }), index.h("form", { key: '2e8ec25669b79fc399af141cf25f3466ca6ed2cd', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'd6937db1488cf38667d32cd2eb4d36d71d8f85a7', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'e6febaa00564647f739fc845a05fe0632b9b5349', class: "separator-container" }, index.h("div", { key: '5d90541272b64f6a1942351810ed96fdb237a464', class: "separator" }), index.h("p", { key: '06fdb13c6b8fee57a6cc99b69b2a2e24d0bc13ff' }, "Sign in to manage your property"), index.h("div", { key: '760cb4c8ea7a8ab7c3747bf46dfe9eb8d9936b9b', class: "separator" })), index.h("ir-input-text", { key: '3717b845c9252ad530c0a1f0e61f3675b36809ae', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '3d9f1c4886ee18b672b3fe62d3a870f4e7909440', name: "user", slot: "icon" })), index.h("div", { key: 'fd758b872a4031c6e9c31656b1d3c0a768c00763', class: 'position-relative' }, index.h("ir-input-text", { key: '5056ff4d999d679ab8cc6fdebbbb1ab740fae2c0', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '11318daed7011c3c9e23bbb06699718219dc3fbd', name: "key", slot: "icon" })), index.h("button", { key: '731a664c73d7bebd0b8932814139840eca5980e3', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'fae338b4a53697cfaaec53bb58993d7d16623f9d', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '608b47acad0547c5343f0c5ca1f63cc3260d6bc3', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '048a7aaff094a6cdf1febc90883fb87b80a2fe57', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'd7e64d8865c6028a18853347c5896f2cc34708af', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'ec7f0ea746291987d58eb80e50643e2a3991722b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '3e3ed888665592df8017b3a42a8fd59d0aec51cd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '7f4eabd7b9f7f2a894541f39475d44650a5001da', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'd20e07a9829bfa6c88e14592b1068271fa597300', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '74140360267f533f79d26100381c5643a8b358e3', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '221bae2e59cd32e52a52509725b0666146d98b39' }, index.h("a", { key: '1690dcf8b0e44b6ded450740cdd40c2bacc31839', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
