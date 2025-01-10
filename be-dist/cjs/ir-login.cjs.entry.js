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
        return (index.h(index.Host, { key: '4a7c121f110afac50cbc832c8e6aed15513f1152' }, index.h("ir-interceptor", { key: 'dd5b810bc4d18751b1673855e1dcf4d822acbbbf' }), index.h("ir-toast", { key: '8accddff8009e0d5b2ab85d66e60d3e50b182382' }), index.h("form", { key: 'cff8d812fca5d74690ba0624d64b3f762926a232', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, index.h("img", { key: '72d02935ea0746982da64644855e5df316b0b7f5', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), index.h("div", { key: '8b3b1a7ca8f3cdd52cf514e603c23788e57b2bd7', class: "separator-container" }, index.h("div", { key: 'dc682a3526bffa4bcd3bc586f524f7959516f47a', class: "separator" }), index.h("p", { key: '89fbd5d709650cebe2aa54017781d3c718cf7a4f' }, "Sign in to manage your property"), index.h("div", { key: '809b85f09d10e0dbee32bff3ce2f0b7884567c1f', class: "separator" })), index.h("ir-input-text", { key: '7d7e9aa7ab39dc1cf376dfa7f3fd5952c68aa41b', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, index.h("ir-icons", { key: '5b33927aa308a34d8dfde36231f4d07fe6b9511a', name: "user", slot: "icon" })), index.h("div", { key: '12e8150a45dd9937c57b29f4e0e520ceed5fde89', class: 'position-relative' }, index.h("ir-input-text", { key: '2e4590c02e9a2ff93c35aa2e49a00e7fcf2bee57', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, index.h("ir-icons", { key: '7e77a19819b13f74fba18aa1884d46048c63d40a', name: "key", slot: "icon" })), index.h("button", { key: '42ef5df41e0ed3c8aaaa4010a378531c1b55eb79', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, index.h("ir-icons", { key: '4903e8552bf2b0a2990a5f7a3cf04270a665a244', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), index.h("ir-button", { key: '09d32f7c65ec3e7bcd6add8ae00a233eee0676c9', isLoading: irInterceptor_store.isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), index.h("div", { key: 'b3dfadc72aa9b2dd677e15208b071dacf636119d', class: "card-body text-center p-0 app_links" }, index.h("a", { key: '7348497ff6af114998e0ee355bc0dd5d25500479', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, index.h("img", { key: 'e0ebfc19d640391f38299a6479de7f54f9cc0dd9', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), index.h("a", { key: 'f3e68094a11da5fa7cf7ddac649949c2b88c7942', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, index.h("img", { key: '98ed63f19b7c5dbcdd9307e6fcbc1233ec5e3def', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), index.h("a", { key: 'c0aafda1eede215b0c1e81c6cd0d713c77c18ac2', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), index.h("p", { key: '6bcd641f07fc445cb76c8851c2d90fd4f09cb034', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', index.h("span", { key: '722376972cd8141c2a64aa78947ce658734ce57c' }, index.h("a", { key: '62e2dd06f9eadc3ed9f19a5f26d94c1755c31175', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

exports.ir_login = IrLogin;

//# sourceMappingURL=ir-login.cjs.entry.js.map