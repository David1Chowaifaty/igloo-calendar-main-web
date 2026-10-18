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
        return (h(Host, { key: 'b100d44a1232f2270d85a3dc924183b1746d9350' }, h("ir-interceptor", { key: '0a87f8da01fb33377a60c73949dc4ee61083d13b' }), h("ir-toast", { key: 'bf618feb2be1fffadb506c34fd5fa55453ce9ea8' }), h("form", { key: '6e08ea76719234b90c7d6953f7ccb0213e38a2d1', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'b67108af1d9a26d6a3425da5854dbf3828c635fe', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: 'fdeda0537cc29ed1ea4c9d98ec6fddae69566d68', class: "separator-container" }, h("div", { key: '973a59e76896351ad5621fe76a9b2b8de534958a', class: "separator" }), h("p", { key: '5f02eda84f1a08ff6ab396454ae9c1c7e709e941' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: '1e065fca7b2a1bd735e36b6cccad5d2d06e58dbf', class: "separator" })), h("ir-input-text", { key: '104fbc5c9e8a972c75fe47735d3ce9638b02f952', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '02c62914665c90d5926b4926d4a8f34cef137762', name: "user", slot: "icon" })), h("div", { key: '85621480de22ae63f480b2fcdef2e9c341690ffe', class: 'position-relative' }, h("ir-input-text", { key: 'b5b0c4aefcb73e93f7658361d08c13e4f4154193', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '3455e01f476e83b69cb9ea42c8ca4d66cfd62d0c', name: "key", slot: "icon" })), h("button", { key: 'c463737f84f1290c95337da3171c2e189785caa7', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'f5bec48d31716845a3ac7982a34e9de171d98b2e', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'e3015fcb9643e5488075141359338a0bc7243239', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: 'ee4edb5c2e3887b354d98ba8e521026a969c9b18', class: "card-body text-center p-0 app_links" }, h("a", { key: '48ff391a30a647c53b0bc2e5cdc0082cb5998bbd', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'ce25f5dbac7050d9349fbf8e6442dac0b886bcd5', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: '912bc07c245cc7b5d13e3af36caae8031cc9f38e', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: 'f5b5cfb6cfb71b6f001a393bd2d411519c666312', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: 'a6df2aafb4df405ef28306b768c47d16a2c3bb32', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: 'a8f19e7b024a9e5cae8a6062d571f58e471936d8', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: '300f4a402fea7f5c78e673268286875777b3bfbd' }, h("a", { key: '4c1f60dbcd1ee5207b09ca80265965b89129ace8', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
