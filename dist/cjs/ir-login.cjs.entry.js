'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const Token = require('./Token-049041c2.js');
const axios = require('./axios-6e678d52.js');
const irInterceptor_store = require('./ir-interceptor.store-a052c48d.js');
require('./index-3cfd4bf8.js');

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
        this.showPassword = false;
        this.authService = new AuthService();
        this.token = new Token.Token();
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
        return (index.h(index.Host, { key: '3b429008e4fa6a3707cda946f57ee650a672a839' }, index.h("ir-interceptor", { key: 'c2b994ecbe9c79cf4509fa950d3b4e7c0b43297e' }), index.h("ir-toast", { key: '536150071060aaa639e850e33afb08a2c70b81a0' }), index.h("form", { key: '66c675ffc755b5e861535d2e443b5a356fe6a8e7', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '0f71b536ecbdde8207d42a5c5b58f66b8a34e621', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '1df6a791034a30d7cb0f5d39c1832d7a00c98a58', class: "separator-container" }, index.h("div", { key: 'a9439deb6d745b506e22602aa4d57bb79abf5837', class: "separator" }), index.h("p", { key: '9e3ca5b98b7d2b8a4e75b89c4a824302a55f1d9c' }, "Sign in to manage your property"), index.h("div", { key: 'f9ae2f8631e0d31a4225ce8837174130dcc6386a', class: "separator" })), index.h("ir-input-text", { key: '1ae2805a3e2eb66fae3c2c0aea8fa324002bcccc', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, index.h("ir-icons", { key: '25d7e27ed809b53b6edbd29d3c0f9abf0e943023', name: "user", slot: "icon" })), index.h("div", { key: '2fa7ed436e83e6384f7010585be3608c3bf7127a', class: 'position-relative' }, index.h("ir-input-text", { key: 'ae0de46b989b1b028795efe8c042a8bc4b771599', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '869c9fc8fdd09844ac837fa9f9210a6763f4284d', name: "key", slot: "icon" })), index.h("button", { key: '8f28138e077bcc149752fc39f41301b1e0418a60', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '19a256559a1b9fae92a1597d81f9a3563da390a2', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '2ddfeed98493202429635aec1df144f41dab7518', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: '2b93a4332c468dba0f9fadd2f7fbaf27edf4cddd', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '03033eb9ddc827777e4ca3f90fe4b3de6b7739d2', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: '7889e9f6b62c69de20a57361eaf283c231956946', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: '4c2b156b114f4f43400a843564d649065a50b385', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '9f7fdb3e1991bf60bf01f2d735e04283cae07a16', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: '9126fc6ae18b774795b137880c0a2697224f6519', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '74006f00f0a76f18bffb941b10eac76d1276cb78', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '4e9116be88f0f9a94ea44b373f2ba2e99051414c' }, index.h("a", { key: '1227845cd41117e1b148d56441c7e499a9fc9a66', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map