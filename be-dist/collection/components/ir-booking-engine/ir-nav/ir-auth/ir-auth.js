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
    onAuthFinish(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        console.log('auth finish');
        this.closeDialog.emit(null);
    }
    render() {
        return (h(Host, { key: 'f9bd56be4da08b1b78b6a5ca78f73478dfd22ff5' }, h("div", { key: 'c8186486e9615c86fa49872277ef6d64716645e9', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), h("div", { key: 'd3ebfd8c46c25fed7834d79d16dd6d5877ba2038', class: "flex-container" }, h("div", { key: '3fe2e29e73ccb4e5cf4fd78d97682975f895aac2', class: "flex-center" }, h("div", { key: 'e936b875d55440f62280ce70bd000bfe628b4b89', id: "googleSignInButton" })), h("div", { key: '3d5f9d702dcaed897c715f82b4345aa4abdcdbef', class: "social-container" }, h("ir-button", { key: '61d8912b086b06dee8a3a43d466c2871ced87918', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: 'bea540f287e1e4943418f7d37ac04c775155a2c9', slot: "left-icon" }, h("svg", { key: 'e6dbead6fffae22d4c150735a02f440807a304b6', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '86f89e6e80a7257ed49e12e98f45822931bcc93b', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '8786821c56ec7fc9bfe045387d353d2498135e09', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'afbdf9435e442c84c442dbdaaf1a2531c4f2840b', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '874e8a4b4e558289decbe9eb31e327d0c474bd70', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '45bf9e3e80fedfcf1632df864c2a343da4eaf3aa', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'f17a89aaf7f9aeaaa6c8a7b9d5d1598c2672f3ef' }, h("clipPath", { key: 'cf821144ad33aba292b73f00d6fa70fc45dddcf9', id: "clip0_6707_5591" }, h("rect", { key: '40faf4859d0e16f8b3bf12415b0a28b8b6de9b80', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))))))));
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
            }, {
                "name": "authFinish",
                "method": "onAuthFinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-auth.js.map
