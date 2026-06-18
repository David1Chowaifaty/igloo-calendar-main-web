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
        return (index.h(index.Host, { key: '3ca81db5635f715559bd75c69a8ad11e51ec3c2a' }, index.h("ir-interceptor", { key: 'a504cf8e28995df21894da7e88cef91b0b4d3488' }), index.h("ir-toast", { key: '7e50f9ea9f514030c391bbcac2a958f6b1677c96' }), index.h("form", { key: '43b1f3c56af4980850656c4f124114e0ae923031', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4a92bf593aa6c7217bcf4eee82a222a27835e809', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'cfe91cd2957afbec13386561395b3e7ee400821a', class: "separator-container" }, index.h("div", { key: '69fe5cba042ea5d95c67a8c8ee3c95a6da9490a6', class: "separator" }), index.h("p", { key: '1f484a47d9b2fbb369a6838734c8cc7db6aa81fb' }, "Sign in to manage your property"), index.h("div", { key: 'a81198e3fe11f231edee4d485a49788388e237cd', class: "separator" })), index.h("ir-input-text", { key: '363529b2880e558e9eeb9c64e52fd19750146005', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: 'ca7191908ade4bcaabbaeb2179881df7706b4caf', name: "user", slot: "icon" })), index.h("div", { key: '288c10b47308858d8a88229949d469edf55ea9ea', class: 'position-relative' }, index.h("ir-input-text", { key: '391cc15a1d0d7fd13c06666127f6b5dbab3782a3', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '23c78332d80e0e2aebb8a9bf6f4e04edb15fd0ed', name: "key", slot: "icon" })), index.h("button", { key: '9469d68228512d641f032977d6d7f3ed5c459678', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'aa2a8a7cf3bc3398a35b7693fd379232833b57b5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '610c7ca915f3caf9e489cf6ead84abdd7c5b098e', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '3f4162b9c6c85a48ccb170ea3d205ee2bc9618a1', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '02bcc49f16b0a66989bdf5ba8c733dcfdd7cb1f8', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'd83fa68405d286e0ecd0132526ba9fafc5b931fb', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'b882987789a42f34a61d0a938409f513d85e2c68', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: 'd9795ec168a6cc2dd09ed46f55ea7aad92321274', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '870463b01bf06e9d69b55ef55285ec2bac51ff89', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'c32ca47a04d1a2abd4e5e6480d0a6647a60280be', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '551b3ffca4b330d5ca5ba27198b04fc8c7fd1607' }, index.h("a", { key: '468a25ffd8cf2cf592a20e625682e096243281c2', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

exports.ir_login = IrLogin;
