var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import app_store from "../../stores/app.store";
import axios from "axios";
import { PropertyService } from "./property.service";
import { manageAnchorSession } from "../../utils/utils";
import { checkout_store } from "../../stores/checkout.store";
import { CommonService } from "./common.service";
export class AuthService {
    constructor() {
        this.subscribers = [];
    }
    // public onLoginCompleted(listener: (result: LoginEventPayload) => void) {
    //   this.loginResylt.emit('loginCompleted', listener);
    // }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
    notifySubscribers(payload) {
        this.subscribers.forEach(callback => callback(payload));
    }
    async signOut() {
        app_store.is_signed_in = false;
        checkout_store.userFormData = {
            firstName: null,
            lastName: null,
            email: null,
            mobile_number: null,
            country_phone_prefix: null,
        };
        manageAnchorSession({ login: null }, 'remove');
        if (!['booking', 'checkout'].includes(app_store.currentPage)) {
            app_store.currentPage = 'booking';
        }
        const token = await new CommonService().getBEToken();
        app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { token });
    }
    async login(params, signIn = true) {
        const { option } = params, rest = __rest(params, ["option"]);
        const { data } = await axios.post(`/Exposed_Guest_SignIn`, option === 'direct' ? rest.params : Object.assign({}, rest));
        if (data['ExceptionMsg'] !== '') {
            this.notifySubscribers({
                state: 'failed',
                error: data['ExceptionMsg'],
            });
            throw new Error(data['ExceptionMsg']);
        }
        const loginToken = data['My_Result'];
        if (signIn) {
            app_store.app_data.token = loginToken;
            app_store.is_signed_in = true;
            manageAnchorSession({ login: Object.assign(Object.assign({ method: option }, rest), { isLoggedIn: true, token: loginToken }) });
            const propertyService = new PropertyService();
            propertyService.getExposedGuest();
        }
        console.count('auth called');
        this.notifySubscribers({
            state: 'success',
            token: loginToken,
            payload: Object.assign({ method: option }, rest),
        });
        return data['My_Result'];
    }
    async signUp(params) {
        const { data } = await axios.post(`/Exposed_Guest_SignUp`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        app_store.app_data.token = data['My_Result'];
    }
    initializeFacebookSignIn() {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '1630011277802654',
                cookie: true,
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
            const token = await this.login({ option: 'google', google_token: response.credential });
            return { state: 'success', token };
        }
        catch (error) {
            console.error('Error during Google Sign-In:', error);
            return { state: 'failed', token: '' };
        }
    }
    async loginWithFacebook() {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', { fields: 'name, email, id' }, function (response) {
                    console.log(response);
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
    loadGoogleSignInScript(element) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => this.initializeGoogleSignIn(element);
        document.head.appendChild(script);
    }
    initializeGoogleSignIn(element) {
        window.google.accounts.id.initialize({
            client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
            callback: async (response) => {
                this.handleCredentialResponse(response);
            },
            auto_select: true,
            ux_mode: 'popup',
        });
        element = this.createFakeGoogleWrapper();
        window.handleGoogleLogin = () => {
            element.click();
        };
    }
}
//# sourceMappingURL=auth.service.js.map
