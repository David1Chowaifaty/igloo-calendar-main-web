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
        return (h(Host, { key: '186016d4410fe148612ff4f910961746b530202d' }, h("ir-interceptor", { key: '66190d26b0eb033cb6bee3e0fb5bf49439203aa2' }), h("ir-toast", { key: 'b9a6711f0175ecc9c1c18d290310609109d2ee18' }), h("form", { key: 'b23de8dbb24823eb7176dbf0b795e5954edf553b', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: '2f4b87495556d7a1564d6e38edbe2189233795f9', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: '6c559a3bed7110f55ac17801c303d815122e0bb2', class: "separator-container" }, h("div", { key: '31e4cbc4f68196e3f6298dbdabf1132546866968', class: "separator" }), h("p", { key: 'ce1fb33ff7df6a69d1f817e7333044fa370f9e9c' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: '595e27bc4bd2eaed5b8544a56b6cbba64da51dc1', class: "separator" })), h("ir-input-text", { key: 'c45fbaff2a68093cb6167a3296e9a9bddba7b69d', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '932671c6c1c7fe6feab9b44012a7492b76316764', name: "user", slot: "icon" })), h("div", { key: 'd29e12ea2d17e1ab6f5d5d6beff0bcd4fc0e5017', class: 'position-relative' }, h("ir-input-text", { key: '7dfa1c1e20fd0ebf02606de5ea1b885c4f0c7bb1', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '7bd724bb9554c6908ce91d03e18f63ff27c1dd8e', name: "key", slot: "icon" })), h("button", { key: '1d7cf199dd5a2a72d1f329cf05b0a1d9fd466245', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'ab572e8e312f8a7e66a98e195d3309e6408800c7', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: 'ba263a7194cb5634f2d44d73d6b5897b317aa972', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: 'a17aa58e911ab0d67d22c5613421d9bb50b64cb2', class: "card-body text-center p-0 app_links" }, h("a", { key: '86db85d5181ae88b52757ac743322ce980e4d603', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: 'df20d4163aca43a87a806c3ecf7147a5126f6341', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: '993ee07c9ef405e250c57e3af73349857a2430cb', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '4f6a6febc5c12d8f61c81b57353de9f39887de3b', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: 'c8245dd2ded9e5d2ee979bf35d1aed43a6ed8651', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: '9ba5978630903a892c063f3729af727ca98771e8', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: 'f8c67c3c4581a5120c302e5f60306e38e8b3cb24' }, h("a", { key: '89f92b85cb8c06fa054063347abe1feb06a81975', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
