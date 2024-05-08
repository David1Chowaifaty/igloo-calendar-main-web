import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
export class IrAuth {
    constructor() {
        // @Event() onSignIn: EventEmitter;
        // @Event() onSignOut: EventEmitter;
        this.authService = new AuthService();
        this.initGoogleAuth = () => {
            window.gapi.load('auth2', () => {
                if (!window.gapi.auth2.getAuthInstance()) {
                    window.gapi.auth2
                        .init({
                        client_id: process.env.GOOGLE_API_KEY,
                    })
                        .then(() => {
                        console.log('Google Auth initialized');
                    });
                }
            });
        };
        this.handleSignIn = () => {
            // if (window.gapi && window.gapi.auth2) {
            //   const auth2 = window.gapi.auth2.getAuthInstance();
            //   if (auth2) {
            //     this.signInDiv.style.display = 'block';
            //     auth2
            //       .signIn()
            //       .then(googleUser => {
            //         this.signedIn = true;
            //         this.onSignIn.emit(googleUser.getBasicProfile());
            //         this.signInDiv.style.display = 'none';
            //       })
            //       .catch(error => {
            //         console.error('Error signing in', error);
            //         this.signInDiv.style.display = 'none';
            //       });
            //   } else {
            //     console.error('Google Auth instance not available.');
            //   }
            // } else {
            //   console.error('Google API not loaded.');
            // }
        };
        this.handleSignOut = () => {
            const auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                this.signedIn = false;
                // this.onSignOut.emit();
            });
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
        this.loadGoogleApi();
        // window.fbAsyncInit = () => {
        //   FB.init({
        //     appId: process.env.FB_APP_ID,
        //     xfbml: true,
        //     version: 'v19.0',
        //   });
        //   FB.AppEvents.logPageView();
        // };
        // (function (d, s, id) {
        //   var js,
        //     fjs = d.getElementsByTagName(s)[0];
        //   if (d.getElementById(id)) {
        //     return;
        //   }
        //   js = d.createElement(s);
        //   js.id = id;
        //   js.src = 'https://connect.facebook.net/en_US/sdk.js';
        //   fjs.parentNode.insertBefore(js, fjs);
        // })(document, 'script', 'facebook-jssdk');
    }
    loadGoogleApi() {
        // const script = document.createElement('script');
        // script.src = 'https://accounts.google.com/gsi/client';
        // script.async;
        // script.defer;
        // script.onload = () => {
        //   window.gapi.load('auth2', () => {
        //     window.gapi.auth2
        //       .init({
        //         client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
        //       })
        //       .catch(error => {
        //         console.error('Error initializing Google Auth:', error);
        //       });
        //   });
        // };
        // const div1 = document.createElement('div');
        // div1.id = 'g_id_onload';
        // div1.setAttribute('data-client_id', '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com');
        // div1.setAttribute('data-callback', 'handleCredentialResponse');
        // div1.setAttribute('data-auto_prompt', 'false');
        // this.signInDiv = document.createElement('div');
        // this.signInDiv.className = 'g_id_signin';
        // // this.signInDiv.style.display = 'none'; // Initially hidden
        // this.signInDiv.setAttribute('data-type', 'standard');
        // this.el.appendChild(script);
        // this.el.appendChild(div1);
        // this.el.appendChild(this.signInDiv);
        // (window as any).google.accounts.id.initialize({
        //   client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
        //   // callback: handleCredentialResponse
        // });
        // (window as any).google.accounts.id.renderButton(
        //   this.googleTrigger,
        //   { theme: 'outline', size: 'large' }, // customization attributes
        // );
        // (window as any).google.accounts.id.prompt();
        window.onload = function () {
            // also display the One Tap dialog
        };
        // window.onload = function () {
        //   google.accounts.id.initialize({
        //     client_id: 'YOUR_GOOGLE_CLIENT_ID',
        //     callback: handleCredentialResponse
        //   });
        //   google.accounts.id.prompt();
        // };
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
        return (h(Host, { key: '2b6b336b109ce1c317a37309c1dec69ab71ab2c8' }, h("div", { key: 'b739a52a220ee01652c42e59e121c317c4d6650b', class: `auth-container ${this.animationDirection} p-4 sm:p-6` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
                if (e.detail.trigger === 'fb') {
                    return this.loginWithFacebook();
                }
                else if (e.detail.trigger === 'google') {
                    return this.handleSignIn();
                }
            } })) : (h("ir-signup", { onSignUp: e => {
                if (e.detail.trigger === 'be') {
                    return this.signUp(e.detail.params);
                }
                else if (e.detail.trigger === 'fb') {
                    return this.loginWithFacebook();
                }
                return this.handleSignIn();
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
