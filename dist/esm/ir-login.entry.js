import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { T as Token } from './Token-a382baa1.js';
import { a as axios } from './axios-ab377903.js';
import { i as isRequestPending } from './ir-interceptor.store-651abd9c.js';
import './index-1d7b1ff2.js';

class AuthService {
    async authenticate(params) {
        const { data } = await axios.post('/Authenticate', params);
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
        registerInstance(this, hostRef);
        this.authFinish = createEvent(this, "authFinish", 7);
        this.authService = new AuthService();
        this.token = new Token();
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
        return (h(Host, { key: '6e09b7fdd43a1cb0ea5f934d336f17072917a950' }, h("ir-interceptor", { key: '778a79017e023d2e72a8afed51ac6b3aa46136e5' }), h("ir-toast", { key: 'd8c4cad482d9d58b84a3f4c5d6e7b85af20f4f3e' }), h("form", { key: 'add08da44f5d945ae6d46a282ea466565fc13445', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '730c1ea4cca2d23257faa56377cdcd94f526c6cb', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "Login to igloorooms extranet" }), h("div", { key: '66345d8a9a76752953e4e9845def9a9c99f1d948', class: "separator-container" }, h("div", { key: '4794875dfac51988fb18ffd45fc5d8036b6e15ee', class: "separator" }), h("p", { key: '4d4140f0e6a0d54d8a7d2154fead54897c0689bb' }, "Sign in to manage your property"), h("div", { key: '55485691da37e712ff0158b31438cbee5c1fdb9b', class: "separator" })), h("ir-input-text", { key: '788bed57ee20da31129c7e864f779b9870095ff2', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", LabelAvailable: false, placeholder: "Username" }, h("ir-icons", { key: 'd1a09cbd375e4166029a1379e9856db1e71cc64f', name: "user", slot: "icon" })), h("div", { key: '6f617f47d23d2218848a2e58a16b027cc982d403', class: 'position-relative' }, h("ir-input-text", { key: 'ee5027de16cbb1bbfa21a8e6c5d5ee8e8de049cc', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", LabelAvailable: false, label: "", placeholder: "Password", type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '9fb20bae448a75228491f91888e2911c7b9b607d', name: "key", slot: "icon" })), h("button", { key: '3aaebf7ba5751915e1ca0ccb78a656d02d972fc4', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '7b82757a5e7e9476be9b22cf0d409685685461a5', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '68f4858cab090b5931ef29a45bb91e37d6e614c1', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPostion: "left", icon_name: "unlock", text: 'Login', size: "md", class: "login-btn" }), h("div", { key: 'd3b83e2a0d6b485ea167a97aa00b8587fcd510ad', class: "card-body text-center p-0 app_links" }, h("a", { key: 'f2917f0c9a6be8db9c4fd2ad76de2cc8794ec75b', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '1163ab237c30e9b7c758d3b83b45f59a520cbc99', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: "Install igloorooms iOS App" })), h("a", { key: 'd2c0ebae07351b81d00c2fda1d5094be583cb6c7', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '2a0a3d2b8d39739b10c2f77f83837e15cfcfd938', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: "Install igloorooms Android App" }))), h("a", { key: '1ca68ea391cb4ab8ebe2ede49615464e9782cefc', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, "New to igloorooms?"), h("p", { key: 'e4361df636b77482798070a96009a8ae55a8939d', class: 'font-small-3  my-1' }, "By logging in, you accept our", ' ', h("span", { key: '85b95ffbf545849ece6b90db8284472830d5fc8f' }, h("a", { key: 'eab884b3013a78166c0cc360960c5d14dd85546b', href: "https://info.igloorooms.com/privacy/", target: "_new" }, "Privacy and Cookies Policies")), ' ', "Need help? support@igloorooms.com"))));
    }
};
IrLogin.style = IrLoginStyle0;

export { IrLogin as ir_login };

//# sourceMappingURL=ir-login.entry.js.map