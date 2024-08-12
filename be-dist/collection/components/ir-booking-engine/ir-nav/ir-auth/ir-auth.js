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
        return (h(Host, { key: 'b24f8919ac7098f989c043ae4869f4b9727e3a54' }, h("div", { key: '01f521cd971d57259e0d1bfa59ac9a2539407f33', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), !app_store.app_data.hideGoogleSignIn && (h("div", { key: '9727e05a870382788798a05f00be208abaa6c436', class: "flex-container" }, h("div", { key: '3bdfb0f8fcfe51a32ce00db676528e60fce91c27', class: "flex-center" }, h("div", { key: '46382f3a9d896119a01b23b7bda3466a0a2a1c77', id: "googleSignInButton" })), h("div", { key: '41dd588ba45e5379b3b14d85a0de874f809edbb1', class: "social-container" }, h("ir-button", { key: '38b67680b7e591ace0cf271097eed02c87b67ffd', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: 'f640d0c7280c54f673684638fd5f4d13ee00c7d5', slot: "left-icon" }, h("svg", { key: 'fc4cc08be04df686c61dc8f741d5717e0220de0f', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'c8ad90deb99fb54c101ea48aee3c57e4bbff311c', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '0255c4a4d718a6590cade706dc5b105c34a711e7', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '2d583ab3cdb0be20def1d51cd4a11bfacc0ee7dc', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'd1bf27599b708aac895216db880f0163a4a10cca', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: 'b7929cec53a66d6cad390355174b9face4805003', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '8afd327f4f5c01202d3c989bf459e6ff76f358b1' }, h("clipPath", { key: 'eabf828a65e4e1714714557f7241999795d5ae0c', id: "clip0_6707_5591" }, h("rect", { key: 'ef6be502d0fd2ec73ca0dd58aa0362b784289449', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))))));
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
