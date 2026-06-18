'use strict';

var index = require('./index-CJ0kc5p1.js');
var Token = require('./Token-BVmOLolB.js');
var authenticate_service = require('./authenticate.service-BtfNA8_5.js');
var irInterceptor_store = require('./ir-interceptor.store-Bul41qhv.js');
require('./axios-C-Phc0sj.js');
require('./index-dbmC5P-h.js');

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
        return (index.h(index.Host, { key: 'e829f0c8865e1514bcff2a564cef84b36b91cd35' }, index.h("ir-interceptor", { key: 'e8370c0e10ea531e226eb485f77a7371c7759bda' }), index.h("ir-toast", { key: 'acabc49eaf80321a5050048aa3bea4c808283085' }), index.h("form", { key: 'ebc759c2a55c4c1a2ba7a4c96fab383f3dcf9e7b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '02db11b09c0cb6a52fbf10eb63b5fd7a5315fc2d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '50627b56f15030a27112bfec430df67ff0d0e608', class: "separator-container" }, index.h("div", { key: 'e70953a80f82f957e75e87e33c14a20b46f7fea5', class: "separator" }), index.h("p", { key: '0bc19d43a2f80ec8845e42e8fce8e8319677efc3' }, "Sign in to manage your property"), index.h("div", { key: 'a09f09732752466e38c39bc1021295f0d07d758d', class: "separator" })), index.h("ir-input-text", { key: 'f435e21b205f69845ab78012c64b69c0352eea8c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '7e8dac8595e98adbd9ec119c36a61802063edbbc', name: "user", slot: "icon" })), index.h("div", { key: '31f5e14d4555c4e2368b9223f7b9c33ad470dac8', class: 'position-relative' }, index.h("ir-input-text", { key: '083b45380a8cd6bf9fd8ca7137617e5f84ad23ef', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '86a4611768afa9ed651ed7d7b5b887989e44aef0', name: "key", slot: "icon" })), index.h("button", { key: '564c6ff5d491015693b8bbe94d13355d1f099be5', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'ddc3d177516faa517cf543fd786ed18422132121', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'bc80a87526324822546da3e60e0ee11bbca5395c', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '97c5e7bce09d5b910a4319bcfbfa838b4d214dd8', class: "card-body text-center p-0 app_links" }, index.h("a", { key: 'ac89948ba6ec01f8bec5691b8afbf1e72ef17fd6', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'ec69e92aafb67025969e9eb04ad3840bdb99a8d7', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '2d97fb475f4181e120df3fb777ed2537fcd6a6c9', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '3b44cabeeccb79479de33ed0577e62737e739cc5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'c519b44df6e60961faede69a85f4b911613092f5', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '8222cebb7b9d3d6c885e10f7270d524e1bde6f61', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '975340957cb9a2d75a73b2cf0b73d9cce9c2d5f3' }, index.h("a", { key: 'dd46b7ba983759f9b8c3ad275418450e3b307127', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
