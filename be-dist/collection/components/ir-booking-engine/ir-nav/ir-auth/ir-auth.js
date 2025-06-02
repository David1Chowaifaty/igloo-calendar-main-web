import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
export class IrAuth {
    constructor() {
        this.enableSignUp = true;
        this.authState = 'login';
        this.animationDirection = '';
        this.signedIn = false;
        this.authService = new AuthService();
    }
    componentWillLoad() {
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
        return (h(Host, { key: '682ca31a30704f09fbefa09f88bd2a2f122462a7' }, h("div", { key: '900a5a77ae45006ac14d980c3bd6c13386361c66', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), !app_store.app_data.hideGoogleSignIn && (h("div", { key: 'a515c1d28a2d6863d56d302654f10d20945e9a95', class: "flex-container" }, h("div", { key: '858606e267557ea600c2022c9bead9eb29b1174c', class: "flex-center" }, h("div", { key: '9b2bd4aabce07059447bc9d5da5557fe012f7b34', id: "googleSignInButton" })), h("div", { key: '8e9868a1ffd6e147aa6f3624c3a1c40dae049b06', class: "social-container" }, h("ir-button", { key: '4cacd13ef0de113ab1e5063e0af69421dcb5eedd', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: '9e82aa09ff3c4c4557285749a6c29e098d6a476a', slot: "left-icon" }, h("svg", { key: '385c8ecf36f050839d7c6fecc01e41f1ec82a619', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'cb054aa63c1127522bd8f8f1d4ab0a573544738a', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: 'a66f263842fef4021999f63af3877529c3d37381', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '0d257c262ce58a1a0f6f1531c934bcb1ec946dd5', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'ca7d88fe69c47adb9600b28d618c2f8323cde2f7', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '10094d7d3a06f15be3b3ff618e418c018ec3d8ae', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '1b19d34b682524c3e90d19df8ca4463c73a86927' }, h("clipPath", { key: '1c5abc22bddfa7468347360a418dba0b33e8fdcc', id: "clip0_6707_5591" }, h("rect", { key: '8660bb1f17c007b4b04eade86c1b200f3526c470', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))))));
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
                "getter": false,
                "setter": false,
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
