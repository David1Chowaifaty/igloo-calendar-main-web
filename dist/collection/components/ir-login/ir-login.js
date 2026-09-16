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
        return (h(Host, { key: '53e984f94994299e7ae6a428412414002d34d96f' }, h("ir-interceptor", { key: 'e3b44bee19931b43bd917d6704b1923ec5d7e904' }), h("ir-toast", { key: 'cc1c8a65a083b6dc137c4de37f605e1bb90f00e7' }), h("form", { key: '6fc69be16a73bc99006f8be72a376ceb1497da4a', onSubmit: this.handleSignIn.bind(this), class: "card form-container px-2" }, h("img", { key: 'c912503b3ebb4378079165a2a9f8a5de2759ef9e', class: "logo", src: "https://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: t('Lcz_LoginToIglooroomsExtranet', { fallback: 'Login to igloorooms extranet' }) }), h("div", { key: '8126d332243043e62c02c02c7791553b1e6c5915', class: "separator-container" }, h("div", { key: '56d0afccfbd07407dcb904996ad073f4e7985efa', class: "separator" }), h("p", { key: '0f144af04c350dbb0676688cecb04c8fb3e47354' }, t('Lcz_SignInToManageYourProperty', { fallback: 'Sign in to manage your property' })), h("div", { key: '875bd61e0e71540d8aa961cd781082a0f49a34ef', class: "separator" })), h("ir-input-text", { key: '9d6941f8fb1c8522d6807223208080db2a02caee', value: this.username, onTextChange: e => (this.username = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Username', { fallback: 'Username' }) }, h("ir-icons", { key: '8f5253b5defbb0da8411b266b782a1058a426b24', name: "user", slot: "icon" })), h("div", { key: '51d004fd27fcb3643648f8ab3e731b0779ad8b72', class: 'position-relative' }, h("ir-input-text", { key: 'a8d3acc2461214013985c49392aa69a85f2b3dda', value: this.password, onTextChange: e => (this.password = e.detail), variant: "icon", label: "", placeholder: t('Lcz_Password', { fallback: 'Password' }), type: this.showPassword ? 'text' : 'password' }, h("ir-icons", { key: '6bfc45abf3ce77e403399ab92f3365e725aa9437', name: "key", slot: "icon" })), h("button", { key: '7e690fc708cfcf03037b438f3ec76194f4b0a6c9', type: "button", class: "password_toggle", onClick: () => (this.showPassword = !this.showPassword) }, h("ir-icons", { key: 'e0cd7d1d7749f63fc3392a3b8928a9d3ca43fdf9', name: !this.showPassword ? 'open_eye' : 'closed_eye' }))), h("ir-button", { key: '4e72233027dc574957741faf23dec2b18f156cf8', isLoading: isRequestPending('/Authenticate'), btn_type: "submit", iconPosition: "left", icon_name: "unlock", text: t('Lcz_Login', { fallback: 'Login' }), size: "md", class: "login-btn" }), h("div", { key: '2ba767acc99bfb1b58ee301607050d18755da4f5', class: "card-body text-center p-0 app_links" }, h("a", { key: 'c2eb90a2662569ca518c65406cc5f94f05a05fcf', href: "https://apps.apple.com/lb/app/igloorooms/id1607846173", target: "_new" }, h("img", { key: '32d20450313f14b7d920a9df8746cbda266918d8', src: "https://x.igloorooms.com/assets/images/svg/AppStore_ios.svg", alt: t('Lcz_InstallIglooroomsIosApp', { fallback: 'Install igloorooms iOS App' }) })), h("a", { key: '7910f2e2b4829f399d6f56b9351240f0d030a24c', href: "https://play.google.com/store/apps/details?id=com.iglooroomsapp", target: "_new" }, h("img", { key: '9bbfd2694eafa26843d7217ee96db87697cd997a', src: "https://x.igloorooms.com/assets/images/svg/AppStore_android.svg", alt: t('Lcz_InstallIglooroomsAndroidApp', { fallback: 'Install igloorooms Android App' }) }))), h("a", { key: '7af8113f37fd43429d141bfdbafaceb47401756c', href: "https://info.igloorooms.com/signup", class: "btn btn-outline-danger btn-block btn-md mt-2", target: "_new" }, t('Lcz_NewToIgloorooms', { fallback: 'New to igloorooms?' })), h("p", { key: '497bf635b5e3f3e727664c2bc5bc7312c4e62358', class: 'font-small-3  my-1' }, t('Lcz_ByLoggingInYouAccept', { fallback: 'By logging in, you accept our' }), ' ', h("span", { key: '360960573e120c6c32d30515c8b14c7ca6d14a9a' }, h("a", { key: 'a9c84abf7b4d4c01702f45351126e653d2e88cf7', href: "https://info.igloorooms.com/privacy/", target: "_new" }, t('Lcz_PrivacyAndCookiesPolicies', { fallback: 'Privacy and Cookies Policies' }))), ' ', t('Lcz_NeedHelpContactSupport', { fallback: 'Need help? support@igloorooms.com' })))));
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
