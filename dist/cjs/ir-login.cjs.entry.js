'use strict';

var index = require('./index-DYQrLNin.js');
var Token = require('./Token-mN7PQKGF.js');
var authenticate_service = require('./authenticate.service-CPW79Uh9.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-C59pxKl1.js');

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}`;

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
    token = new Token.Token();
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const token = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.token.setToken(token);
            this.authFinish.emit({ token, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (index.h(index.Host, { key: '0d07affc2095ca953e4626caf510f0076f0c8af2' }, index.h("ir-interceptor", { key: '4d6f3bb588c29cd4915f47c38772cd4c7b4decfa' }), index.h("ir-toast", { key: 'a07ddeac2046b3e4f7a87e1b839d76a9b4f2ef5c' }), index.h("form", { key: '53048228af0adca5f0657039131332bdd2213039', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '202c7f6ded02f2c0545951a72f9880d482c55f4d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '2888cf242458612bd705ce2e10b2ba5721a48a5e', class: "separator-container" }, index.h("div", { key: '0644f59c1e423f79fd45ba78b08f7314e2448864', class: "separator" }), index.h("p", { key: '2c992927dd9e67dd1b1f4214c80b8e9e9c74e047' }, "Sign in to manage your property"), index.h("div", { key: '8baa25fd5ec51a8d43f6125e22ed171ca8bdd5da', class: "separator" })), index.h("ir-input-text", { key: '34c416888c31ecda2c7e0015145f202db498c6e3', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '91eb1f2fe8fbea715c545456c0ab2615268d8e08', name: "user", slot: "icon" })), index.h("div", { key: '6067f3ea210d0ebfe9fcd12ab994859d296bb1cf', class: 'position-relative' }, index.h("ir-input-text", { key: '8314ef4b1dc4c918c2ae53762392b57cce1cece3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '19696e5097614a69d969d7f6684b8add9e03dfdf', name: "key", slot: "icon" })), index.h("button", { key: 'fd6c6cbc147791b1619ce273e5ec88fa882b4903', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'abb43447ec3798af43a0ba86fbefb6f445d30536', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '39e7657e646d700fd2bf51bb4bc28d09e93ccb36', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '0a4c7644d731b631e01cf3acaf1e1dedf5118307', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'e90fee7d3662a004c4ca3726ac2fb6ad9c8e326c', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'e5071b8e95626c0c600367a387e7fc98fd71bd44', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '6fe90f9314c09b5b38e870faf60bd08e8048c82a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '52b24fb307383f91bfea67e20a8085970d9f5874', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'b31cd456335923640dde0efce674fec747139132', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'a825863ec101a0bb09ce67ae62a520eebadc71c8', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '969b5792e22541234c1fb2dde4f4591173dad24a' }, index.h("a", { key: 'd060eca19d926a4b78dc0b1971f95d4cb38f3074', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
