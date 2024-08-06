'use strict';

const payment_service = require('./payment.service-cc0881b8.js');
const app_store = require('./app.store-52efa6e0.js');
const property_service = require('./property.service-deaf629e.js');
const utils = require('./utils-a25582f0.js');
const common_service = require('./common.service-e0453fee.js');
const index = require('./index-42419b2e.js');

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
class AuthService extends payment_service.Token {
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
        app_store.app_store.is_signed_in = false;
        property_service.checkout_store.userFormData = {
            firstName: null,
            lastName: null,
            email: null,
            mobile_number: null,
            country_phone_prefix: null,
        };
        utils.manageAnchorSession({ login: null }, 'remove');
        if (!['booking', 'checkout'].includes(app_store.app_store.currentPage)) {
            app_store.app_store.currentPage = 'booking';
        }
        const token = await new common_service.CommonService().getBEToken();
        app_store.app_store.app_data = Object.assign(Object.assign({}, app_store.app_store.app_data), { token });
    }
    async login(params, signIn = true) {
        const token = this.getToken();
        const { option } = params, rest = __rest(params, ["option"]);
        if (!token) {
            throw new payment_service.MissingTokenError();
        }
        const { data } = await payment_service.axios.post(`/Exposed_Guest_SignIn?Ticket=${token}`, option === 'direct' ? rest.params : Object.assign({}, rest));
        if (data['ExceptionMsg'] !== '') {
            this.notifySubscribers({
                state: 'failed',
                error: data['ExceptionMsg'],
            });
            throw new Error(data['ExceptionMsg']);
        }
        const loginToken = data['My_Result'];
        if (signIn) {
            app_store.app_store.app_data.token = loginToken;
            app_store.app_store.is_signed_in = true;
            utils.manageAnchorSession({ login: Object.assign(Object.assign({ method: option }, rest), { isLoggedIn: true, token: loginToken }) });
        }
        const propertyService = new property_service.PropertyService();
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
            throw new payment_service.MissingTokenError();
        }
        const { data } = await payment_service.axios.post(`/Exposed_Guest_SignUp?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        app_store.app_store.app_data.token = data['My_Result'];
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

const IrUserFormData = index.z.object({
    firstName: index.z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    lastName: index.z.string().min(2, {
        message: 'LastNameCannotBeEmpty',
    }),
    email: index.z.string().email({ message: 'InvalidEmail' }),
    mobile_number: index.z.coerce.number().min(5),
    arrival_time: index.z.string(),
    message: index.z.string().optional(),
    bookingForSomeoneElse: index.z.boolean().default(false),
    country_id: index.z.coerce.number(),
    country_phone_prefix: index.z.coerce.string().min(1),
    id: index.z.coerce.number().nullable().default(null),
});
const IrGuest = index.z.object({
    address: index.z.string().nullable().default(null),
    city: index.z.string().nullable().default(null),
    country_id: index.z.coerce.number().min(1),
    dob: index.z.string().nullable().default(null),
    email: index.z.string().email(),
    first_name: index.z.string().min(2, {
        message: 'FullNameCannotBeEmpty',
    }),
    id: index.z.coerce.number().nullable().default(null),
    last_name: index.z.string().min(3),
    mobile: index.z.coerce.number().min(5),
    subscribe_to_news_letter: index.z.boolean().default(false),
    country_phone_prefix: index.z.string().min(1), // cci?: ICCI | null;
    alternative_email: index.z.string().email().optional().nullable(),
});

exports.AuthService = AuthService;
exports.IrGuest = IrGuest;
exports.IrUserFormData = IrUserFormData;

//# sourceMappingURL=user_form-b8fa3cb6.js.map