import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
import axios from "axios";
export class IrAuth {
    constructor() {
        // @Event() onSignIn: EventEmitter;
        // @Event() onSignOut: EventEmitter;
        this.authService = new AuthService();
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
        this.loadGoogleSignInScript();
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
    loadGoogleSignInScript() {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => this.initializeGoogleSignIn();
        document.head.appendChild(script);
    }
    initializeGoogleSignIn() {
        // Initialization logic here
        window.google.accounts.id.initialize({
            client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
            callback: this.handleCredentialResponse,
            auto_select: true,
            itp_support: true,
            ux_mode: true,
            context: 'popup',
        });
        window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), { text: 'continue_with', theme: 'outline', size: 'large', width: '240px' });
    }
    async handleCredentialResponse(response) {
        console.log(response);
        const { data } = await axios.post('https://gateway.igloorooms.com/IR/Exposed_Guest_SignIn?Ticket=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTY0NzAzMjYsIkNMQUlNLTAxIjoiZE1TL0hDV21NdW89IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThITHBnTWQvOWV5aSJ9.9hKPGjcvmTuRMAOE8BmXUY1NT3DDqSYDKgEokUV2N6U', { google_token: response.credential });
        console.log(data);
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
        return (h(Host, { key: '828c536fbda584682460af8f2a03adba37615d7b' }, h("div", { key: '5d75c8cfbb24260de5619bac88f3bb345d041b43', class: `auth-container ${this.animationDirection} p-4 sm:p-6` }, this.authState === 'login' ? (h("ir-signin", {
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
            } })), h("div", { key: '9425b08eb55f850a9911be24be14456dfa42a856', class: "flex flex-col" }, h("div", { key: '41bcb2ecdae49959a957a6d95e157625eac7709b', class: "flex w-full items-center justify-center" }, h("div", { key: '66060d6588a9ef119438d60c1eaa649694709d45', id: "buttonDiv" })), h("ir-social-button", { key: '56bfe4aa2806939f4c8b490e796e7a9dc28ef91f', class: "w-full outline", label: "Continue with Facebook" }, h("svg", { key: 'fb6d3440ac979b723942d15192cae44b09b5884e', slot: "icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '6ff1c7a39c80f86ffed1ee2988deffc5fcf5b686', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'e88bccbc0952d5981fd29a77c6ad85bda10bc37d', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: 'af453dff141ac38fd34ba5ea8275a3c757a4e096', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: 'd8a2a13c9874dbde854b306f6dfef71941197a54' }, h("clipPath", { key: '71ec4bd642109a9eb7ee5b8d27b9d0d35584ad08', id: "clip0_1256_132001" }, h("rect", { key: '0a7afcd863ec634b9ac60dde2ca36a40aa1a98e0', width: "24", height: "24", fill: "white" })))))))));
    }
    static get is() { return "ir-auth"; }
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
