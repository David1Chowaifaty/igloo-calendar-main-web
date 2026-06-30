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
        return (index.h(index.Host, { key: 'b7b95695c358324578430ff35fef7c3a3ff955a5' }, index.h("ir-interceptor", { key: '98c01cdccadacb9759deafcd31248af2d6eacae8' }), index.h("ir-toast", { key: '2c6b36476848f3efa1ffb0f3edfec381f7e94414' }), index.h("form", { key: '7a9c9eed4a11be58205bb9bf1de2cb40a4d7bb5e', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '8061e94a6eac17e71f28543d5827f92e3315d24d', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'a634c426fd91deca6664898dac7191e4f1f0554e', class: "separator-container" }, index.h("div", { key: 'd600882f221bbed33ecb07b19d0d5001ceb3e8c5', class: "separator" }), index.h("p", { key: 'b51f3ea8d2109d88b6ac7ff9aabd4ab2a36f1df5' }, "Sign in to manage your property"), index.h("div", { key: '9550640a3882302876e1f679386eef8f2368dd99', class: "separator" })), index.h("ir-input-text", { key: 'daf5f2db6476b471dff11252fcf39e9844f99fb4', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '3e9e525e432ec9678c9ac2cc184a664055fbb277', name: "user", slot: "icon" })), index.h("div", { key: '64e835d8a057c3451fb4e566cc745e1295570322', class: 'position-relative' }, index.h("ir-input-text", { key: '6387ce3eec64ff0fb5f22427b5d229c6683a3d10', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '842904c69082590fff01368455ccacabae29e6c9', name: "key", slot: "icon" })), index.h("button", { key: '06a6a63d2644e9f318d7089c9b7459d9d8f9e6cc', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'd4adc261e90ae072d15368175486cb71cb8241ee', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: 'afc7fabe8e5b16a8413730314567e9cb0a81b532', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'caa72fb0e4a5af32a287c885dee47e86fe40c4d4', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '4f91ed5eceeddadb58cb5004c65d027dc2359e77', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'caaeaeef711c774943b922958403241458c1c457', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'ad3f9e7281bb8b2b9fa5e83007804955f57fb22f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '9d9c680120066b9175345f1ee0b7c2ea8b531cc6', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'db683e9517b99c4634789b2289d90bc291270840', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '015478fa7aaa588fd789f3b30ba90f808da9b262', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '82916d6fb3382e7b6e32b97ce0052727bebd74d6' }, index.h("a", { key: '0bd289319eafd41de914881c32c20a122c8ba3ae', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
