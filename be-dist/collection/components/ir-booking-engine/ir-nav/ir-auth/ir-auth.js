import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
export class IrAuth {
    constructor() {
        this.authService = new AuthService();
        this.enableSignUp = true;
        this.authState = 'login';
        this.animationDirection = '';
        this.signedIn = false;
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    handleNavigation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.authState === 'login' && e.detail !== 'login') {
            this.animationDirection = 'slide-right';
        }
        else if (this.authState !== 'login' && e.detail === 'login') {
            this.animationDirection = 'slide-left';
        }
        this.authState = e.detail;
    }
    signUp(params) {
        try {
            const res = this.authService.signUp(params);
            console.log(res);
        }
        catch (error) {
            console.error('Error during sign-up:', error);
        }
    }
    render() {
        return (h(Host, { key: '924a74430f30e878d7f6985bd2f4dac97518eabc' }, h("div", { key: '068a72defc452c82ef5786e2e40a1789cb79fbbb', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'fb') {
                    this.authService.loginWithFacebook();
                }
            } })) : (h("ir-signup", { onSignUp: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'be') {
                    this.signUp(e.detail.params);
                }
                else if (e.detail.trigger === 'fb') {
                    this.authService.loginWithFacebook();
                }
            } })), h("div", { key: '318f53e31dd5b8abc8c075de72011b50dd34be3d', class: "flex-container" }, h("div", { key: '60a3ebd8ea8cc873bf7bcbcee26f3c41460314c9', class: "flex-center" }, h("div", { key: '4228a2fb5b105a1052c20f3bf533596c0a83ec2f', id: "googleSignInButton" })), h("div", { key: '7d0e430519ab3d50de075f8fe8bf6a3aeec78944', class: "social-container" }, h("ir-social-button", { key: '83ad856e8be03bea002a7b37726988fbc45f7cdc', ref: el => (this.googleButtonWrapper = el), class: "full-width", onSocialButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '7edbfd918ccee7a2719ee17015973dc66946c1ff', slot: "icon" }, h("svg", { key: 'b5f6c1e11c5c9661a1767268a8d7ae502c7d4115', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '611f50053ef0a10102c7655026816ea53292423a', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'de1b45c9948dc86e9cf5389f9886b7c752dd3f5d', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '05257b21033deef1e3068e7a3048a915a527c5b7', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'f0197e78ced5b4c1478273f749b0e5a6ce4b203c', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '23c60b87fa612c96b94c1cbab71c722d8adb2c73', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'deda79f38695b2d61d6739030c8d8fffafe79ea9' }, h("clipPath", { key: '284dfde298065b448b93185ff008f9d3f92c97a8', id: "clip0_6707_5591" }, h("rect", { key: 'ad61ee20c1be6933c48395d3b933ac5e6e52787d', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-social-button", { key: '3ec231a0e4d0166c3cb7163fbee95991fdd0d602', class: "full-width", label: "Continue with Facebook", onSocialButtonClick: () => this.authService.loginWithFacebook() }, h("svg", { key: '49d1a64dd8c9c0769cd54b882c76c2280b285d62', slot: "icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '7dd0c6616eaffee4b27b56e455608d641872c2f9', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'dc81301893106fccf1ce352bf670dc0b20e2fada', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'd3f624a9cc8c37b2ab770fb597910a35d3c6c528', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '98b4845beef45a7424a71e54f6c99b258cad9e42' }, h("clipPath", { key: '9819d7879338a55a635ebaa35e995dcfe96fa8cd', id: "clip0_1256_132001" }, h("rect", { key: '62481a4d806f46b739daad2ab8a7f4c42c03f02e', width: "24", height: "24", fill: "white" }))))))))));
    }
    static get is() { return "ir-auth"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-auth.css"]
        };
    }
    static get properties() {
        return {
            "enableSignUp": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "enable-sign-up",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "authState": {},
            "animationDirection": {},
            "signedIn": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDialog",
                "name": "closeDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
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
                    "original": "{ state: 'success' | 'failed'; token: string }",
                    "resolved": "{ state: \"success\" | \"failed\"; token: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "navigate",
                "method": "handleNavigation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-auth.js.map
