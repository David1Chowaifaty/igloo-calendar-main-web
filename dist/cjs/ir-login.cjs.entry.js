'use strict';

var index = require('./index-DYQrLNin.js');
var Token = require('./Token-BVmOLolB.js');
var authenticate_service = require('./authenticate.service-BtfNA8_5.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
require('./axios-C-Phc0sj.js');
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
        return (index.h(index.Host, { key: '44ca416dd98021c44057561e1bb9eddd2fe4ea4b' }, index.h("ir-interceptor", { key: 'ccd2134a15fd0b8ed875b0dba8fee998f956e61a' }), index.h("ir-toast", { key: '366f7931bb8c11cd142402213d31d546c4873b51' }), index.h("form", { key: '1487f8b3aaec0b951270f89f55ee5a13aad7b855', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'a4c6ca8c248838f1d0bb4ff73556fc4936229265', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '434c30f147095a99b3080cb68eb71f1669d03305', class: "separator-container" }, index.h("div", { key: '3627e4c9079f85ca9b28168b1489b15964503912', class: "separator" }), index.h("p", { key: 'b9f6161655b308a40eed1e52beebdaf34b146943' }, "Sign in to manage your property"), index.h("div", { key: 'd5085475471dbbc0bc0eb9046a52684531a322f5', class: "separator" })), index.h("ir-input-text", { key: 'b57f027d052b0b6013c80946bcfab357084c236b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '90d6866e376fe01e7ebe3a05300480c651eba94a', name: "user", slot: "icon" })), index.h("div", { key: 'b05dd8784deb61936ac25b318bf4de9364309991', class: 'position-relative' }, index.h("ir-input-text", { key: '83abf65be03c5d61ce1da1e6cc142264c2418dac', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: 'a6da85403cb1d21326a6c6dd57cf56551a716e9c', name: "key", slot: "icon" })), index.h("button", { key: '22a7e291ee182aebaab1c7306235f256c19405f7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'fafd4dfbedf7fdbb2845043e8ef59beadc094e00', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '3b3e16ad9cf454fc068efb8ca6b845694d32224b', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '3a9426aa44271780e86c4b23fd488b1ada156837', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'e7b3cbb998d2672a6d51998bb687a7cebf34c01f', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '4b0d1fec56507cd866b887fcbabcf1ac96dbd78a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '3f778cc31ffd4fd8e11f661f36a0ec570e17386a', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '27d285d17177db2d0eb2c786eeb3b074b317d61f', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '3b1aa7660ff70835da6d3bffc5f76a89468e6928', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b3b96f2f6f96571f7a256d7b1430ea5772946f8a', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'd0aa00c347d18d6e406691a37f8788ea71bda39c' }, index.h("a", { key: 'a769fdc188a7f8954559d8e7ace6e3000a7e7a72', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
