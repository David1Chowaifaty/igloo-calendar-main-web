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
        // this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button') && !app_store.app_data.hideGoogleSignIn) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
        this.authService.subscribe(this.handleAuthStateChange.bind(this));
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
    handleAuthFinished(e) {
        const { state } = e.detail;
        if (state === 'success') {
            this.closeDialog.emit(null);
        }
    }
    signUp(params) {
        try {
            this.authService.signUp(params);
        }
        catch (error) {
            console.error('Error during sign-up:', error);
        }
    }
    handleAuthStateChange(result) {
        if (result.state === 'success' && result.payload.method === 'google') {
            this.closeDialog.emit(null);
        }
    }
    disconnectedCallback() {
        this.authService.unsubscribe(this.handleAuthStateChange.bind(this));
    }
    render() {
        return (h(Host, { key: 'dfcf8c723b325c8981c5d3ccb22af571f625208a' }, h("div", { key: '950d89e62f1bc6b336d5a74dffcf02f56927e3b2', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), !app_store.app_data.hideGoogleSignIn && (h("div", { key: 'e2979feccc4ef6f0d69b84d4df776727a66e0596', class: "flex-container" }, h("div", { key: 'f4d4d674a979b2f0d9a9a6e95a6a636e1bccd3ea', class: "flex-center" }, h("div", { key: '720f2cd7a1e9177e5bc37d2c8e9d5e53a92650db', id: "googleSignInButton" })), h("div", { key: 'ee36ee606bada9a04dba7854183d551076118c8f', class: "social-container" }, h("ir-button", { key: '577a0053d8bd60cf7b64b7280521b688ceca6ea8', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: '3edb0f05468eeab08f166fff9501385490e597ca', slot: "left-icon" }, h("svg", { key: 'ce566802def6e8ff7e59cd4164e1faaf7250cc51', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '3f9633d9ede63ce52ee28a0dec0c36d6bfcf1126', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '7f43efe2ee03b3a1abd528911a3bb01ac0459ec4', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '6038734f60ec229719aa8a6370da5dbe4c297616', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '3bedd2958dc9d96a1035c539da1fe20e225a440b', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '37eec1e931e5b540c077497e9bb0312ece9ffad0', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'ae8190e2b1746f3df303bd7df777a0c7f50b1274' }, h("clipPath", { key: 'a0cc48fd28b6acd5ce9914532d3ed5e3a7632c09', id: "clip0_6707_5591" }, h("rect", { key: '9719a5f832670a4a39a68da5a3ac2d044441ddef', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))))));
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
                "method": "handleAuthFinished",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-auth.js.map
