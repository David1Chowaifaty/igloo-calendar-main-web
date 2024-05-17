import { Host, h } from "@stencil/core";
import { AuthService } from "../../../../services/api/auth.service";
import app_store from "../../../../stores/app.store";
import axios from "axios";
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
        this.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.loadGoogleSignInScript();
        }
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
        window.google.accounts.id.initialize({
            client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
            callback: this.handleCredentialResponse.bind(this),
            auto_select: true,
            ux_mode: 'popup',
        });
        this.googleButtonWrapper = this.createFakeGoogleWrapper();
        window.handleGoogleLogin = () => {
            this.googleButtonWrapper.click();
        };
    }
    initializeFacebookSignIn() {
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
    async handleCredentialResponse(response) {
        try {
            const { data } = await axios.post('https://gateway.igloorooms.com/IR/Exposed_Guest_SignIn?Ticket=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTY0NzAzMjYsIkNMQUlNLTAxIjoiZE1TL0hDV21NdW89IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThITHBnTWQvOWV5aSJ9.9hKPGjcvmTuRMAOE8BmXUY1NT3DDqSYDKgEokUV2N6U', { token: response.credential });
            this.authFinish.emit({ state: 'success', token: data.token });
        }
        catch (error) {
            this.authFinish.emit({ state: 'failed', token: '' });
            console.error('Error during Google Sign-In:', error);
        }
    }
    async loginWithFacebook() {
        FB.login(response => {
            if (response.authResponse) {
                FB.api('/me', userInfo => {
                    console.log('Good to see you, ' + userInfo.name + '.', userInfo);
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
            console.error('Error during sign-up:', error);
        }
    }
    createFakeGoogleWrapper() {
        const googleLoginWrapper = document.createElement('div');
        googleLoginWrapper.style.display = 'none';
        googleLoginWrapper.classList.add('custom-google-button');
        document.body.appendChild(googleLoginWrapper);
        window.google.accounts.id.renderButton(googleLoginWrapper, {
            type: 'icon',
            width: '200',
        });
        const googleLoginWrapperButton = googleLoginWrapper.querySelector('div[role=button]');
        return {
            click: () => {
                googleLoginWrapperButton.click();
            },
        };
    }
    render() {
        return (h(Host, { key: '0d3de15cd1ab22cbd8476466ad2a830ded939f3c' }, h("div", { key: '7d660f027a51c6640424ef2c183490a2c0af7a1f', class: `auth-container  ${this.animationDirection}` }, this.authState === 'login' ? (h("ir-signin", { enableSignUp: this.enableSignUp, onSignIn: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'fb') {
                    this.loginWithFacebook();
                }
            } })) : (h("ir-signup", { onSignUp: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.trigger === 'be') {
                    this.signUp(e.detail.params);
                }
                else if (e.detail.trigger === 'fb') {
                    this.loginWithFacebook();
                }
            } })), h("div", { key: '1c354e9d856e778a0bbf78c7cc26efa679ede21d', class: "flex-container" }, h("div", { key: '68cf74cdfae13581a6f12702033cbea41d42baa0', class: "flex-center" }, h("div", { key: 'cf74fa57e7492d76d28b70bce5c52133771775f1', id: "googleSignInButton" })), h("div", { key: 'f29dea2b043d5e3707e309a554fe3e4baa504eb7', class: "social-container" }, h("ir-social-button", { key: 'e0649fe4c68cae378e5b1fd3426b75b4f7824c21', class: "full-width", onSocialButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '3feda462968c52d5bfd794022dbe692d88c5518b', slot: "icon" }, h("svg", { key: '3e276e335e068ee49bca987667ab1e33ad70dcb3', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '9b310af5ed39e2975cb7c074543880885c1a4122', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '03e6920740f1ded9c1b10d8df962c3f58cde1cbe', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '97954567a05e6d95b263b359250c856be6575a0d', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'c3a518cb33e2064545243b97e9409a1a161af91c', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '0b8edf7e7283b4fb032efa9d72fde60071a49d40', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '3bc5d89b5d26e7b7510c1aca65753b05ec488bd3' }, h("clipPath", { key: '65555fdc9d979e1414d6ee94142880d05184db8f', id: "clip0_6707_5591" }, h("rect", { key: '8e0a0e77e2d9c3be83fde54d97f6df2e5ca8770f', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-social-button", { key: 'dc5794beb69fb2dd6875d61a739628e656ddff70', class: "full-width", label: "Continue with Facebook" }, h("svg", { key: '1aaa0aa4dfc197169e21df430ad209f706482824', slot: "icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'e3373d30dc02a0a1f44d6c38192a6ab00fd472a8', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'ca34b9be11d04cdf86517ee21547b17aed0bcc27', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '46826f38c86b56798f57468e8423a72dda84ae5e', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '0acd4ec7e58b4ae785437890a9dff12d08540caf' }, h("clipPath", { key: '40ee8a6467d032d8c14623a1e438133fd8b5a290', id: "clip0_1256_132001" }, h("rect", { key: '4a7a0b2469dac44708b19602e5b61d5f70cd9627', width: "24", height: "24", fill: "white" }))))))))));
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
