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
        return (h(Host, { key: '888fe177b171a3168373201baa210087ffad84f1' }, h("div", { key: '987658ca21938900b200536331fa56be7f443092', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), !app_store.app_data.hideGoogleSignIn && (h("div", { key: '56ee3c65ab1314259d90741f669b7dbcd7d5afc9', class: "flex-container" }, h("div", { key: 'c953fdff9dee14968403479ba44ae02b47f109e1', class: "flex-center" }, h("div", { key: '205b3a2326146c59a7daf06724e8d93a2003328a', id: "googleSignInButton" })), h("div", { key: '4348d29826f7039e37a63e787a357647890fd98d', class: "social-container" }, h("ir-button", { key: 'b3df84a6b00bac67990136c30bc37f94beb5fe0f', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: 'a3b5d01ec59134b756515ecc36e37ee937fde256', slot: "left-icon" }, h("svg", { key: 'e51cccc5817b5f38268d4151da2b6d91f229ed5b', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '8061fb48c3abb69203d669293909d714e37a792f', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '5612d92e514e7a1a1b1eb65ee9c7ee44bfc8050b', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'd3e60da6133b131a070330af1f7e28d7012c2bf7', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'a631cb735f83f7e2434096272dc3edb476aa0185', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '9fbdc33ca579cd6983f5a99662003dc030348759', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: 'e494c43ae904122e282951658af4d945e9a2bc48' }, h("clipPath", { key: '4568eb4ffdf7db2c287da408788b459642544f24', id: "clip0_6707_5591" }, h("rect", { key: '6e7a77310fd510df1f95e20c4ebd7b213921d71e', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))))));
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
