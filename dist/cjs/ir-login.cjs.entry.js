'use strict';

var index = require('./index-OzksjAXP.js');
var Token = require('./Token-AvtHCcli.js');
var authenticate_service = require('./authenticate.service-BtfNA8_5.js');
var irInterceptor_store = require('./ir-interceptor.store-Ciah62kc.js');
require('./axios-C-Phc0sj.js');
require('./index-BJltewV-.js');

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
        return (index.h(index.Host, { key: 'fc766b92d922ce3a4fcbb7813ac2c655d4c18d5b' }, index.h("ir-interceptor", { key: 'e292547f0e80187697bbd8b8ca57c73c59ba6bf6' }), index.h("ir-toast", { key: '010a19fee451113b8a1d34cc16fc160f1ff84930' }), index.h("form", { key: 'bea89d52edd91f0facb54315916d61d42883cd6f', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: 'f21536af1695ec2a183e856b3d623629e449f960', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '97300e9f206060f3fb8ad8b51bb04436d6146682', class: "separator-container" }, index.h("div", { key: '7b424b3d559f353f8143be0a0530558696c25c67', class: "separator" }), index.h("p", { key: '780d402ffd1a65753259776eeca3adc4d7128fa2' }, "Sign in to manage your property"), index.h("div", { key: '1096fd26df9ebfbf575a05ff25a8b181848460d4', class: "separator" })), index.h("ir-input-text", { key: '2aca0474aca4b202c2ec0ecd8dbdccabee9ef14d', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '2bc389b1fe179cab2b47b66afd886e6fa1509a1b', name: "user", slot: "icon" })), index.h("div", { key: 'e00cd57dfbc0974037f5ec29b5b26b477d7a3ddf', class: 'position-relative' }, index.h("ir-input-text", { key: 'f6891c0afc4218b5e376ac56066a484d4d68125e', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '81c6db152242c4db7e2db48b8c5f369c2344cc27', name: "key", slot: "icon" })), index.h("button", { key: '5633a438d0d557d3dfadb7de81b2d1e525e5add0', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'b527656a2fbcd0f9dbdab603fe7fcaf072ae18ec', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'b274acbd2dbe7961610dd1e23737dcbb018ed922', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'e486512f157965af1d12734b4180420a1c64e097', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'ede1387c90ef6f74fb516505f0954085be2d0e6b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '6ba31f0ead7d60807c75833f55dd89f9ff1b80c4', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'f2181712ae21813441f917a73ebb4e13265d0cbd', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '4f73c93a1ffc099f28e2231bc0d7a57082454dbd', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '736ab66880550f4f08a991e6505ef751c6538096', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '20dade141b22d547860737c07cfb777db98e11d7', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: 'f7777bd9e6b095cf112211e521493566821ff555' }, index.h("a", { key: 'e63afe0a5a60223b6102fecab2c7426a59a52914', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
