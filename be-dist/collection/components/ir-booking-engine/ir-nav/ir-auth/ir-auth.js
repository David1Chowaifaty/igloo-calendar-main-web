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
        this.authService.subscribe(this.handleAuthFinished.bind(this));
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
        return (h(Host, { key: 'a792388f4f72af3915a556539ac30ca058237723' }, h("div", { key: '979d79ac7e2eddc88fac8df00ece17e298ef59a4', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
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
            } })), h("div", { key: 'c59c30b1b8a2f9369e892e7f4fb863ddb1df3cbd', class: "flex-container" }, h("div", { key: '44634ee6f3ece9736f07ce72e395d863100f746c', class: "flex-center" }, h("div", { key: '82d08a59ca7f0d79d682c229b09c695e3ab7eb94', id: "googleSignInButton" })), h("div", { key: '673d104e99413d56359d9f652099df7793a84797', class: "social-container" }, h("ir-button", { key: '959f9b173a05d3fb70b623c3aa9cc85b7d924211', ref: el => (this.googleButtonWrapper = el), class: "full-width", onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google", variants: "outline", haveLeftIcon: true }, h("span", { key: 'c1b9b88b0ed0cacd580ec3816f0f5fdf73910426', slot: "left-icon" }, h("svg", { key: 'e1bf96ae0dc9d5d8c2aeed167ad21d6d5fc41027', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'bcfa39c1b719e83eef0f96cf0589d19495082104', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '494cedc9512cc563b53d4fa5bd39ae49d4eb9864', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: 'dfe562d76d6961717fc99e3c00db4c5e39072400', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '25c680e462843dace5b86bac64cbdd770c8180b9', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '763a381b1d8202f7f7db102631fbb81693cc2939', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '73a7e1f55277c7b3a7a37fd217f241eac42b93ea' }, h("clipPath", { key: 'c3d159aef88130945d792876b851cc70081e56e9', id: "clip0_6707_5591" }, h("rect", { key: '7695e7e4d66e54606350e4c597267148feb002af', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))))))));
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
