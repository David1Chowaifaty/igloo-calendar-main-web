import { r as registerInstance, c as createEvent, h, H as Host } from './index-BvoylR5O.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { i as isRequestPending } from './ir-interceptor.store-DYGt5Cjl.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-U7zaiBri.js';

const irLoginCss = () => `.sc-ir-login-h{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background:url(https://x.igloorooms.com/bg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login{margin:0}p.sc-ir-login,input.sc-ir-login,button.sc-ir-login,div.sc-ir-login,section.sc-ir-login,form.sc-ir-login{box-sizing:border-box}.form-container.sc-ir-login{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-login{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-login p.sc-ir-login{color:#6b6f82;font-size:1rem}.separator.sc-ir-login{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-login{margin-top:1rem}.logo.sc-ir-login{align-self:center}.app_links.sc-ir-login{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-login a.sc-ir-login img.sc-ir-login{width:70%}.password_toggle.sc-ir-login{all:unset;position:absolute;top:2px;right:1rem}`;

const IrLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish");
    }
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    token = new Token();
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
        return (h(Host, { key: '84f31da815f45d45c696ee952837f305d615d8b3' }, h("ir-interceptor", { key: '7df8707afbc00d3242cdf2de6d4237e27bf0bbb1' }), h("ir-toast", { key: '147a586defad9ab2a88cdd4e8f4040cc46322a8a' }), h("form", { key: '87aa713458d4cbd817e48d40c9c9219d9baa4ec9', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '5cf29b5c7a27687d76b0cc10daeed19065128cc3', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '56c82e90e03dcd84c0341684d785827c7b54b51c', class: "separator-container" }, h("div", { key: '137cc8aa52d4ee7554e61cd705dbd2c8a0e02da4', class: "separator" }), h("p", { key: '54b5944c402f1fd51bb93d181d1ece1f3a3547c8' }, "Sign in to manage your property"), h("div", { key: 'adf55dd14f8d47526847d66d535f506e7f79a496', class: "separator" })), h("ir-input-text", { key: '1b23bbd8a9ba1b428016dec8e13fc1cea0a2d042', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: "Username" }, h("ir-icons", { key: 'c3de3133ae6a608b880001b595d35af7871eb00f', name: "user", slot: "icon" })), h("div", { key: '23825e6db5f3addfebfa4b016054870eb255232b', class: 'position-relative' }, h("ir-input-text", { key: 'd5e770db1cb4c0f666000af73ab51315c7261376', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '3af09c23b02b3ca8919ffca9da8e2112b0693d32', name: "key", slot: "icon" })), h("button", { key: '6dd78fdce2e32b6c253e2e879a4d5b4f68336f94', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '774e7d128c48784b186b523cf71d6c4d4008d5bf', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '972defd3362999a03613c3e4cfbc2c9ea44582c2', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: '575ecfebf8cdd196233b713310bcdb8476074801', class: "card-body text-center p-0 app_links" }, h("a", { key: '3298f6645e7da56035925e41a658f3dff0b03ec3', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '810795d5165d779afc604ec9bf2573b6d735adfe', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: '63392bc52f965f2d78febb3ec36ecdde34a90455', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'e86bb6989b7cc686edacc4ed88fcbd8f00aa8add', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '0521257972e8c49c3780ccf5ffd6431c867435d6', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: '01b48e19714a11d7804759f71e801f91b305dcbf', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '8ec674c5494e02fd276b7912190a8ec9c4805507' }, h("a", { key: '44ecdb9da7acc0a05ceb4266412ab2b51a6e8a2a', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = irLoginCss();

export { IrLogin as ir_login };
