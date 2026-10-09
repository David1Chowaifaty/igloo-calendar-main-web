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
        return (h(Host, { key: 'bba647b2aaa6971c6cbd0ca6d3e96d740fa29c8c' }, h("ir-interceptor", { key: 'fb1181506349d4e470b319e75726ce6552570a0e' }), h("ir-toast", { key: 'd32a793ca04f0668eee0e805d9f1ccfa83e9c053' }), h("form", { key: 'db59b9866412fa46618ae679b882ed996b9ed4b5', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '73a3de088022411e996182b521b357d58eaf7247', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: '230ad3afd9d4f5494b55d858b482595f22e43307', class: "separator-container" }, h("div", { key: 'fcf071639034ef7e3c32255c67ef96b5638357bf', class: "separator" }), h("p", { key: '9d0a6fd8cd425774a2d0c8183b9c64bf9994df90' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: 'c0b3390bc00cf2576f841eb52ae6d4a1f5687f28', class: "separator" })), h("ir-input-text", { key: 'abbee8a6c9f8a4abcd712da46ee418c5af32638c', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '0a1e533ac2b13495ead8d36133adf1b3dd23046c', name: "user", slot: "icon" })), h("div", { key: 'cee723a032cdd50ef3859f74859d29c3b4f48a05', class: 'position-relative' }, h("ir-input-text", { key: '9d8c21123a9137da979e58d384d51335954ec63c', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '6fca3803d24dff05932d5093703f97139ff84d46', name: "key", slot: "icon" })), h("button", { key: '9733040d7b98d613a3c0836ed99eb06ccd4a3df2', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: '209b026d74e8729e8226cf4745dedea20c06b5a9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'b04824d8618312c13160baf8f122ad202c2f78e2', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: '4e34f49397c8e414769cd6114332349b6c58d89e', class: "card-body text-center p-0 app_links" }, h("a", { key: '5836caf61d01f864bc0499047250f0b063fff31e', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '5db84fd5f991b31af1d68ba204ccfa453e08ebdc', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: 'c9e0cd9111f54ba33648899820c780ac0fc5ccaf', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'a321200254141bee9a4125976fa7857cf71dcec3', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: 'd028ef4ff70d6113c4a63234380f1cdbe2448c8c', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: '9898f341a16378096687a18c67a4cbf12cc3816d', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: '4758a43a9313fa6872fe903fb4e23715b2d6d91b' }, h("a", { key: '6f7a7c2b88c2c4b4c21ed3d8fe8b8d97d0403dc3', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
