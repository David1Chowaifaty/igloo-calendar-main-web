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
        return (index.h(index.Host, { key: '4a5b5a8e991f4aa718312dc3c8e810f36aac0e7f' }, index.h("ir-interceptor", { key: '44deaca76bf122bee346f043e47500a50fcb5b0e' }), index.h("ir-toast", { key: '8a8a0a8880891952f602fdadd12df78e6ef3f2b4' }), index.h("form", { key: 'ba7ad2c2b59576d8cb4af0b4fdd7b674bebb40c9', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '0853ced97c5cbddd04d46339d9323f028a1759b4', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '5725974121cbbf09783590408328174f7f152a7b', class: "separator-container" }, index.h("div", { key: 'deb284f888165c926507c85bb9f57eb89dec7cf3', class: "separator" }), index.h("p", { key: '6ed1acd1975d34b7e70d8beabb6c651c8008ac4c' }, "Sign in to manage your property"), index.h("div", { key: 'e3d102ba9fec49550aa5398be7c962fe3075129e', class: "separator" })), index.h("ir-input-text", { key: 'dbd8633a827b93a6e2b80d1a724ccebe02c7fc6b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '39f6777ba33684d9886e635ee51ef3c355d4457d', name: "user", slot: "icon" })), index.h("div", { key: '4e01eb18fa751c316e44dc5dc721a700d0497a64', class: 'position-relative' }, index.h("ir-input-text", { key: '61588a5a6e0a99b8a942833d32eec1b3a630f617', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '0110e35cd1dc4fde26a3700c9f71d9bfab58ba9c', name: "key", slot: "icon" })), index.h("button", { key: 'd3e19bdf8d44c5d9a0609214b554e89d53e545fd', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '946c66293cfec3299145b92634884531e79b2e00', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '7b58ee23aeecf6cb3932632a7727ed3a6b0aa70e', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'fa6fd6490dc8e5351981d6ae2dc89f8574519bc8', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'bb8738aa980913c28a83d7646448f6c2c714ade6', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '9feaf8ec2ff03824e438e9c93ddee84145b24416', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '1878b8a4388d2ec0faa328faf9735c3e39e2831b', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'fe59f49218714ccb45fbb534710138e433cc2ddd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '8ca8d5f3efa34c4284469b2730133eb76fbc00ed', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '25b82b5514d69df300f0bff4ba41ee354d18f79a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'b9dfa9774d0238719362b06ebae49fa86e2bdd0c' }, index.h("a", { key: '488070e2a446a145282c8471fa2a4fe4e2b89cad', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
