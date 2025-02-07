'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const Token = require('./Token-a4c2b5d8.js');
const axios = require('./axios-b86c5465.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
require('./index-5e99a1fe.js');

class AuthService {
    async authenticate(params) {
        const { data } = await axios.axios.post('/Authenticate', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        //  sessionStorage.setItem('token', JSON.stringify(data.My_Result));
        return data['My_Result'];
    }
}

const irLoginCss = ".sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}";
const IrLoginStyle0 = irLoginCss;

const IrLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.token = new Token.Token();
        this.username = undefined;
        this.password = undefined;
        this.showPassword = false;
    }
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
        return (index.h(index.Host, { key: 'b08de4042ccd147556d3a05305ddb37d168be5bf' }, index.h("ir-interceptor", { key: 'fba40673a5e5bfc7bbda5737c0e9c14de866e5be' }), index.h("ir-toast", { key: '0a1ca77267fbca7ae6b7783ba32db214b3bceba0' }), index.h("form", { key: 'fc7a1c10547be58cafddcb6b6800188f112d6eea', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '4c47e14f0506b702499c26b7eb8254230e7c274f', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: 'da38fce90d3aa5e06ee018deadebd90a2759d519', class: "separator-container" }, index.h("div", { key: '916557225341411b65745059dcd5eec4fdf6f199', class: "separator" }), index.h("p", { key: 'ba14fc6b54092a6034365f7175ffb4fcec6c67f6' }, "Sign in to manage your property"), index.h("div", { key: 'cae11349ebb82c6e115c9c1795ae3f5e47d25323', class: "separator" })), index.h("ir-input-text", { key: '497f88ef94e930fdbdc886c22dcc0635e68d602a', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '45888c104c8e73414e156aa89493f23b4f51d68f', name: "user", slot: "icon" })), index.h("div", { key: '8b272dda01c9b115e5174458a74d7f78c261e933', class: 'position-relative' }, index.h("ir-input-text", { key: '0aa5ac35f9314f56d77401652b2e5bf34d73f294', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '427ed0acf63151fb77f3a5523e44352243ef6cb7', name: "key", slot: "icon" })), index.h("button", { key: 'aaf6fffe97259c3e31e480c9397bc190de289992', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: 'c11a56b0753894e1ca82d44db43229e747c4e316', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '2d7fa09caec755ef070c6ed8962d1fc8526f9dd2', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '5c6da51edbd59cc04a9a4f7a09b29f9704cdb874', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '5709b1de7a2b1bb8df9e2e7833d204cd72f01998', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'f92f8797f50c359ee7152c182716f562743f7723', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '39fb08d8249b62091a0de54a68b2f3d77b4e096f', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '8bc7151bbfb334cfbce14b08b5af325fbc88b10e', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '8036473ee3b430231def45038e38bb4d3bccff98', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: 'b2cd525b57e8523b8ff7ce767d13172eaed0b244', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '2c4a50f9de6bcf83ab32a113e7862b3474aa5859' }, index.h("a", { key: '960bf57e1f88f36800106622568149ccf3461297', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map