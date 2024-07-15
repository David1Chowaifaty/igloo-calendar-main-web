import { T as Token, M as MissingTokenError } from './Token.js';
import { a as app_store } from './app.store.js';
import { a as axios } from './axios.js';
import { P as PropertyHelpers, C as Colors } from './colors.service.js';
import { b as booking_store, c as calculateTotalCost } from './booking.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store.js';
import { i as injectHTML, d as dateFns, g as getDateDifference, m as manageAnchorSession } from './utils.js';
import { T as Token$1, M as MissingTokenError$1 } from './Token2.js';
import { l as localizedWords } from './localization.store.js';

class PropertyService extends Token {
    constructor() {
        super(...arguments);
        this.propertyHelpers = new PropertyHelpers();
        this.colors = new Colors();
    }
    async getExposedProperty(params, initTheme = true) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Property?Ticket=${token}`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: !!booking_store.bookingAvailabilityParams.agent }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.tags) {
            result.My_Result.tags.map(({ key, value }) => {
                if (!value) {
                    return;
                }
                switch (key) {
                    case 'header':
                        return injectHTML(value, 'head', 'first');
                    case 'body':
                        return injectHTML(value, 'body', 'first');
                    case 'footer':
                        return injectHTML(value, 'body', 'last');
                }
            });
        }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...result.My_Result.roomtypes];
        }
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        app_store.property = Object.assign({}, result.My_Result);
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
        }
        return result.My_Result;
    }
    async getExposedBookingAvailability(props) {
        const token = this.getToken();
        this.propertyHelpers.validateToken(token);
        this.propertyHelpers.validateModeProps(props);
        const roomtypeIds = this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(token, props, roomtypeIds, rateplanIds);
        this.propertyHelpers.updateBookingStore(data, props);
        return data;
    }
    async getExposedBooking(params, withExtras = true) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Booking?Ticket=${token}`, Object.assign(Object.assign({}, params), { extras: withExtras
                ? [
                    { key: 'payment_code', value: '' },
                    {
                        key: 'prepayment_amount',
                        value: '',
                    },
                ]
                : null }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result.My_Result;
    }
    async fetchSetupEntries() {
        try {
            const token = this.getToken();
            if (token) {
                if (app_store.setup_entries) {
                    return app_store.setup_entries;
                }
                const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI?Ticket=${token}`, {
                    TBL_NAMES: ['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE'],
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                const res = data.My_Result;
                const setupEntries = {
                    arrivalTime: res.filter(e => e.TBL_NAME === '_ARRIVAL_TIME'),
                    ratePricingMode: res.filter(e => e.TBL_NAME === '_RATE_PRICING_MODE'),
                    bedPreferenceType: res.filter(e => e.TBL_NAME === '_BED_PREFERENCE_TYPE'),
                };
                app_store.setup_entries = setupEntries;
                updateUserFormData('arrival_time', setupEntries.arrivalTime[0].CODE_NAME);
                return setupEntries;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    filterRooms() {
        let rooms = [];
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
                        var _a;
                        const { first_name, last_name } = this.propertyHelpers.extractFirstNameAndLastName(index, rp.guestName);
                        rooms.push({
                            identifier: null,
                            roomtype: rp.roomtype,
                            rateplan: rp.ratePlan,
                            unit: null,
                            smoking_option: rp.checkoutSmokingSelection[index],
                            occupancy: {
                                adult_nbr: rp.checkoutVariations[index].adult_nbr,
                                children_nbr: rp.checkoutVariations[index].child_nbr,
                                infant_nbr: null,
                            },
                            bed_preference: rp.is_bed_configuration_enabled ? rp.checkoutBedSelection[index] : null,
                            from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                            to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                            notes: null,
                            days: this.propertyHelpers.generateDays(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date, +rp.checkoutVariations[index].amount / getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date)),
                            guest: {
                                email: null,
                                first_name,
                                last_name,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                                cci: ['001', '004'].includes((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code)
                                    ? () => {
                                        const payment = checkout_store.payment;
                                        return {
                                            nbr: payment === null || payment === void 0 ? void 0 : payment.cardNumber,
                                            holder_name: payment === null || payment === void 0 ? void 0 : payment.cardHolderName,
                                            expiry_month: payment === null || payment === void 0 ? void 0 : payment.expiry_month.split('/')[0],
                                            expiry_year: payment === null || payment === void 0 ? void 0 : payment.expiry_year.split('/')[1],
                                            cvc: (payment === null || payment === void 0 ? void 0 : payment.code) === '001' ? payment.cvc : null,
                                        };
                                    }
                                    : null,
                            },
                        });
                    });
                }
            });
        });
        return rooms;
    }
    async editExposedGuest(guest, book_nbr) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.post(`/Edit_Exposed_Guest?Ticket=${token}`, Object.assign(Object.assign({}, guest), { book_nbr }));
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async bookUser() {
        var _a;
        const { prePaymentAmount } = calculateTotalCost();
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError();
            }
            let guest = {
                email: checkout_store.userFormData.email,
                first_name: checkout_store.userFormData.firstName,
                last_name: checkout_store.userFormData.lastName,
                country_id: checkout_store.userFormData.country_id,
                city: null,
                mobile: checkout_store.userFormData.mobile_number,
                address: '',
                country_phone_prefix: checkout_store.userFormData.country_phone_prefix,
                dob: null,
                subscribe_to_news_letter: true,
                cci: null,
            };
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                agent: booking_store.bookingAvailabilityParams.agent ? { id: booking_store.bookingAvailabilityParams.agent } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_a = booking_store.bookingAvailabilityParams.coupon) !== null && _a !== void 0 ? _a : null,
                booking: {
                    booking_nbr: '',
                    from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                    to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    source: app_store.app_data.source,
                    referrer_site: app_store.app_data.affiliate ? window.location.href : 'www.igloorooms.com',
                    currency: app_store.property.currency,
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                extras: [
                    {
                        key: 'payment_code',
                        value: checkout_store.payment.code,
                    },
                    {
                        key: 'prepayment_amount',
                        value: prePaymentAmount,
                    },
                ],
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
            };
            const { data } = await axios.post(`/DoReservation?Ticket=${token}`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedGuest() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Guest?Ticket=${token}`, {
            email: null,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result;
        if (res === null) {
            app_store.is_signed_in = false;
            return;
        }
        app_store.is_signed_in = true;
        checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_id: res.country_id, email: res.email, firstName: res.first_name, lastName: res.last_name, mobile_number: res.mobile, country_phone_prefix: res.country_phone_prefix, id: res.id });
    }
}

class CommonService extends Token$1 {
    async getCurrencies() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError$1();
        }
        const { data } = await axios.post(`/Get_Exposed_Currencies?Ticket=${token}`);
        app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError$1();
        }
        const { data } = await axios.post(`/Get_Exposed_Languages?Ticket=${token}`);
        app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        try {
            const token = this.getToken();
            if (token) {
                const { data } = await axios.post(`/Get_Exposed_Countries?Ticket=${token}`, {
                    language,
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getUserDefaultCountry() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError$1();
            }
            const { data } = await axios.post(`/Get_Country_By_IP?Ticket=${token}`, {
                IP: '',
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedCountryByIp() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError$1();
            }
            const { data } = await axios.post(`/Get_Exposed_Country_By_IP?Ticket=${token}`, {
                IP: '',
                lang: 'en',
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            app_store.userDefaultCountry = data['My_Result'];
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getBEToken() {
        try {
            const { data } = await axios.post(`/Get_BE_Token`, {});
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedLanguage() {
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError$1();
            }
            const { data } = await axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code: app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            let entries = this.transformArrayToObject(data.My_Result.entries);
            localizedWords.entries = Object.assign(Object.assign({}, localizedWords.entries), entries);
            localizedWords.direction = data.My_Result.direction;
            return { entries, direction: data.My_Result.direction };
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    checkUserAuthState() {
        const anchor = JSON.parse(sessionStorage.getItem('anchor'));
        if (anchor) {
            if (anchor.login) {
                app_store.is_signed_in = true;
            }
            return anchor.login || null;
        }
        return null;
    }
    transformArrayToObject(data) {
        let object = {};
        for (const d of data) {
            object[d.code] = d.description;
        }
        return object;
    }
}

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
            const token = await this.login({ option: 'google', token: response.credential });
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

export { AuthService as A };

//# sourceMappingURL=auth.service.js.map