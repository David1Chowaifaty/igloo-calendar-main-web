import { T as Token, M as MissingTokenError, a as axios } from './payment.service-f303f1be.js';
import { a as app_store } from './app.store-8e486326.js';
import { c as checkout_store, P as PropertyService } from './property.service-50142fc7.js';
import { b as manageAnchorSession } from './utils-5755d37e.js';
import { C as CommonService } from './common.service-ac1789c0.js';
import { z } from './index-1e9e0a3e.js';

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class AuthService extends Token {
    constructor() {
        super(...arguments);
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
        const token = this.getToken();
        const { option } = params, rest = __rest(params, ["option"]);
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Exposed_Guest_SignIn?Ticket=${token}`, option === 'direct' ? rest.params : Object.assign({}, rest));
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
        }
        const propertyService = new PropertyService();
        propertyService.setToken(loginToken);
        propertyService.getExposedGuest();
        this.notifySubscribers({
            state: 'success',
            token: loginToken,
            payload: Object.assign({ method: option }, rest),
        });
        return data['My_Result'];
    }
    async signUp(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Exposed_Guest_SignUp?Ticket=${token}`, params);
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

const IrUserFormData = z.object({
    firstName: z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    lastName: z.string().min(2, {
        message: 'LastNameCannotBeEmpty',
    }),
    email: z.string().email({ message: 'InvalidEmail' }),
    mobile_number: z.coerce.number().min(5),
    arrival_time: z.string(),
    message: z.string().optional(),
    bookingForSomeoneElse: z.boolean().default(false),
    country_id: z.coerce.number(),
    country_phone_prefix: z.coerce.string().min(1),
    id: z.coerce.number().nullable().default(null),
});
const IrGuest = z.object({
    address: z.string().nullable().default(null),
    city: z.string().nullable().default(null),
    country_id: z.coerce.number().min(1),
    dob: z.string().nullable().default(null),
    email: z.string().email(),
    first_name: z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    id: z.coerce.number().nullable().default(null),
    last_name: z.string().min(3),
    mobile: z.coerce.number().min(5),
    subscribe_to_news_letter: z.boolean().default(false),
    country_phone_prefix: z.string().min(1), // cci?: ICCI | null;
    alternative_email: z.string().email().optional().nullable(),
});

export { AuthService as A, IrGuest as I, IrUserFormData as a };

//# sourceMappingURL=user_form-0cb9f87b.js.map