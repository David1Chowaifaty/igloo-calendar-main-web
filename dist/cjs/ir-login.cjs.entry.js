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
        return (index.h(index.Host, { key: '7ae20b37fba688de9636f1c2f6765e57148c01ee' }, index.h("ir-interceptor", { key: '061bccdf075b155dfa37586da60fb5605f9699da' }), index.h("ir-toast", { key: 'd1820f53eeeee7eca44a5141061ba8bdb84e611c' }), index.h("form", { key: '570c638560b22d834f6eba53f2cddbca926b117b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '60de82f58a7d868247436400a379da205b0aeb5d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '604dbcd94f1dd8c7b7e88f75b1eb93fbc80c366d', class: "separator-container" }, index.h("div", { key: '6130d93cf9846091c307ce91ec1ed6cf49a89cf0', class: "separator" }), index.h("p", { key: '9bf8d55e0de4707a274441f05278456423194136' }, "Sign in to manage your property"), index.h("div", { key: '4417ceb7c92695d3951d43f558da7b2fce8f9d1e', class: "separator" })), index.h("ir-input-text", { key: '197e63c7d264f4699ca76fe4fd880e88f2bdc015', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '4e1cfc138918f77adb41b29a3fd475b51842611d', name: "user", slot: "icon" })), index.h("div", { key: '976a0d2cd289771816f518e0f6d73a495dffcdcd', class: 'position-relative' }, index.h("ir-input-text", { key: '974fefc2e62dd7f93088a53cf5f031de9278b4b2', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '1b303a7ab4bcbef2694fbc88d9834d9e98537184', name: "key", slot: "icon" })), index.h("button", { key: 'f0ccb624801d45f420d191e7e5b3852ba7d1e177', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'c269fbf4195f07f2446d481441c6cbb47301b44e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'ed9a74083ecc510e510954459d317a0df2044005', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'c850faf2538fb1fa94f36fa57d2c98f30fe374fa', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'e3da466ee13b2b0a5567b0987ce7fa3baa6e3a44', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '588974dad468869f7767b7ed858d95411f4f590c', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'c9cec596ea9e3f417df9f498963c9a2abbb87d97', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'b9a9e1052454b621e95cc23625771e625905db93', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '603cf4bc867b59411caa72cf27fe92a121ee7946', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '38af471d575a5b2d1d0f4079a1e0b841676e5f15', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '514cb97e1a50c979aafdf5257c71c01d93101cd9' }, index.h("a", { key: 'e93080a573b2d5a3a489532d6934e795dd7c1c8c', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
