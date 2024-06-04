import { AuthService } from "../../../../../services/api/auth.service";
import app_store from "../../../../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrQuickAuth {
    constructor() {
        this.authService = new AuthService();
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    render() {
        return (h(Host, { key: 'fe1db2253ba13d7acf98f3c0467ac83130173f4f' }, h("div", { key: '36f9bc619b6a2e335c08e7ea8d1b88722747547e', class: 'quick-auth-container' }, h("div", { key: 'ef9d72be163045a5cfe2c9c46595f4014e174126', class: "booking-reminder" }, h("ir-icons", { key: 'bd99d7abbf5da72cb3ce9060d95053f88626c61c', name: "arrow_right" }), h("p", { key: '539311d02bedb2a97206fd7a55a5ef66f9c331be', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '636ef299d6f30c4373ceb277926b67bad34128fc', class: "social-container" }, h("ir-button", { key: '0c8651e4bc158746491ce3d47fccc7dd238d5046', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '094df86a673a71a5f7e642609c058a45e586901f', slot: "left-icon" }, h("svg", { key: 'f45d5326952ab431d039aea82c0e51f44ffd6074', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '19260cde56a02429915a464cf34295f125df5cdc', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '1e1e7810a183d576d7144e8aba95dda0ef196396', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'ad253bbf9d3e1abb162049feff15bfb446c1dd77', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'be895b29144fe1de082e306df5e5e98c669fdaa8', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '99a44b485baabdc6bcba206e323621d2aaef86bc', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'cf959444722718ca8f333d6aa777981804972da6' }, h("clipPath", { key: '41af0c24701148285fa1130caf5ac468ab623af8', id: "clip0_6707_5591" }, h("rect", { key: '0f0dad3b539efdf95172a4c99addaaf6ce6ebedb', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: '17c0970c27fbc2f9e203d94ec6f2e2aa544700f0', variants: "outline", haveLeftIcon: true, label: "Continue with Facebook" }, h("svg", { key: '5fbaf8342b6742428242c5b9d8e340b162289ecd', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'f4943fcd198a795047b113f3c36a78986ed5709d', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: '391f58e1a14e182e34fc0347b70f09d0885fe0ab', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '362aa4deade549a1e0afde39f454c6b367d9fe7b', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'ea79f5b4ec5999abfbd4beddf6d31c9c32822e49' }, h("clipPath", { key: '42f1e77e05ead7eeebc5c937e00ec2433488cc0b', id: "clip0_1256_132001" }, h("rect", { key: 'c44a91f5468e3dbf43d6220fdc0d8a6690405d7f', width: "24", height: "24", fill: "white" })))))))));
    }
    static get is() { return "ir-quick-auth"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
}
//# sourceMappingURL=ir-quick-auth.js.map
