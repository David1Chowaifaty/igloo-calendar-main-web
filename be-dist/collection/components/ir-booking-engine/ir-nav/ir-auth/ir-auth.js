import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
export class IrAuth {
    constructor() {
        // @Event() onSignIn: EventEmitter;
        // @Event() onSignOut: EventEmitter;
        this.authService = new AuthService();
        this.handleSignOut = () => {
            const auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                this.signedIn = false;
                // this.onSignOut.emit();
            });
        };
        this.onSignIn = googleUser => {
            var profile = googleUser.getBasicProfile();
            console.log(profile);
            // Access profile information (e.g., profile.getId(), profile.getName(), etc.)
        };
        this.enableSignUp = true;
        this.authState = 'login';
        this.animationDirection = '';
        this.signedIn = false;
    }
    // private signInDiv: HTMLDivElement;
    //private googleTrigger: HTMLDivElement;
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
    }
    componentDidLoad() {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '1630011277802654',
                xfbml: true,
                version: 'v19.0',
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }
    handleCredentialResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
    }
    async loginWithFacebook() {
        FB.login(response => {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', response => {
                    console.log('Good to see you, ' + response.name + '.', response);
                });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
        FB.getLoginStatus(response => {
            console.log('login status', response);
        });
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
            console.log(error);
        }
    }
    render() {
        return (h(Host, { key: 'cf2370f66da633863463ade3cf8b0085e8e17afa' }, h("div", { key: '9b568c6fb3f525758c8e5f2d032acc1fbcedb397', class: `auth-container ${this.animationDirection} p-4 sm:p-6` }, this.authState === 'login' ? (h("ir-signin", {
            // onAuthFinish={e => {
            //   console.log(e.detail);
            //   this.authFinish.emit(e.detail);
            // }}
            enableSignUp: this.enableSignUp, onSignIn: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'fb') {
                    return this.loginWithFacebook();
                }
                else if (e.detail.trigger === 'google') {
                    return;
                }
            }
        })) : (h("ir-signup", { onSignUp: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'be') {
                    return this.signUp(e.detail.params);
                }
                else if (e.detail.trigger === 'fb') {
                    return this.loginWithFacebook();
                }
                return;
            } })))));
    }
    static get is() { return "ir-auth"; }
    static get encapsulation() { return "shadow"; }
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
