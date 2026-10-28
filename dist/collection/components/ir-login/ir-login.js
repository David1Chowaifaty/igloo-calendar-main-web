import ApiClient from "../../models/ApiClient";
import { AuthService } from "../../services/authenticate.service";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
export class IrLogin {
    language = 'en';
    username;
    password;
    showPassword = false;
    authFinish;
    authService = new AuthService();
    ApiClient = new ApiClient();
    componentWillLoad() {
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.login });
    }
    async handleSignIn(e) {
        e.preventDefault();
        try {
            const ApiClient = await this.authService.authenticate({
                password: this.password,
                username: this.username,
            });
            this.ApiClient.setApiClient(ApiClient);
            this.authFinish.emit({ ApiClient, code: 'succsess' });
        }
        catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (h(Host, { key: 'c1f74c3a4bffbfeddc8935a54d43ef52fa77240e' }, h("ir-interceptor", { key: 'e7f852075f4a9d87d9e910350166bc7f8bc5c7e5' }), h("ir-toast", { key: '8515653afbf671b66cec974c48800d178b456e05' }), h("form", { key: 'fdf3d169f87c5d872a868888b93e5fbc2ff5530b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '59313c914202cc4ad71c1594dc58953bc628e7ed', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: '3da4ba74ede05ec839890fbd240a649ada355a9d', class: "separator-container" }, h("div", { key: '9756dcffe6ddc00de8f9dabd05f40cac614beb1e', class: "separator" }), h("p", { key: '85920aa53a6a615b99eba3d18d59618620679097' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: 'a3f78d40820d2b397211b34275f037809e8c7572', class: "separator" })), h("ir-input-text", { key: 'f320ef4f3a3cf1d783400d7a0bec6374d57315cf', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '630e9a90bc76d7b594d3cccdda5234e5ed492bc4', name: "user", slot: "icon" })), h("div", { key: '11d8773ca5a38fe8a4ba6a7e2f5b418fca77c8ad', class: 'position-relative' }, h("ir-input-text", { key: 'e7a4976ffe6c077b7a9b2f97f6631795e58e6ddf', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: 'e9c974814cab06be8c66a34f7bf6d8d7d564f90e', name: "key", slot: "icon" })), h("button", { key: 'db54b58175df7b8f8131dac1b05e8aa269824903', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '550682a21250f4643886a58f12286d5105921e68', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'b7c28146450dfea00101d4e3ce3ccb38db47d77f', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: '4c884efbce2db6d04e85ad90e14375cc08109c51', class: "card-body text-center p-0 app_links" }, h("a", { key: '2bb9779b0d46d16aa4e9b2bc2bcd9bb0125a4122', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '3cb533b6851c9864971ec4727270e2ff3e94b1ef', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: 'bd0acf1f4381343163055972575f4130421618dc', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4c12c277eda3aedb3f9a118ba392fc8e7823b6cc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: '4ed23110866f4c0ee08b5f3673a352b9ecefdf0e', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: '50e79ff52151807d7dc6a3401203ac8748acf0b4', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: '392a94139c442ec34c0d3785c34844d80a5ba6cc' }, h("a", { key: '46373b3444adcdfe655be1c551e7a227b941f5bb', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
    }
    static get is() { return "ir-login"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "username": {},
            "password": {},
            "showPassword": {}
        };
    }
    static get events() {
        return [{
                "method": "authFinish",
                "name": "authFinish",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    ApiClient: string;\n    code: 'succsess' | 'error';\n  }",
                    "resolved": "{ ApiClient: string; code: \"error\" | \"succsess\"; }",
                    "references": {}
                }
            }];
    }
}
