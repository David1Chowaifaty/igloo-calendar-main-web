import { a as app_store } from './app.store.js';
import { a as axios } from './axios.js';
import { P as PropertyHelpers, C as Colors } from './colors.service.js';
import { i as injectHTML, b as booking_store, d as dateFns, g as getDateDifference, m as manageAnchorSession } from './utils.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store.js';
import { l as localizedWords } from './localization.store.js';

class PropertyService {
    constructor() {
        this.propertyHelpers = new PropertyHelpers();
        this.colors = new Colors();
    }
    async getExposedProperty(params, initTheme = true) {
        var _a, _b, _c, _d;
        const { data } = await axios.post(`/Get_Exposed_Property`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: true }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.tags && !PropertyService.initialized) {
            PropertyService.initialized = true;
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
            booking_store.roomTypes = [...((_b = (_a = result.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) !== null && _b !== void 0 ? _b : [])];
        }
        // } else {
        //   const oldBookingStoreRoomTypes = [...booking_store.roomTypes];
        //   booking_store.roomTypes = result.My_Result.roomtypes?.map(rt => {
        //     const selectedRt = oldBookingStoreRoomTypes.find(r => r.id === rt.id);
        //     return {
        //       ...rt,
        //       rateplans: rt.rateplans.map(rp => {
        //         const currentRp = selectedRt.rateplans.find(s => s.id === rp.id);
        //         if (currentRp) {
        //           return { ...currentRp, short_name: rp.short_name };
        //         }
        //         return null;
        //       }),
        //     };
        //   });
        // }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...((_d = (_c = result.My_Result) === null || _c === void 0 ? void 0 : _c.roomtypes) !== null && _d !== void 0 ? _d : [])];
        }
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        app_store.app_data.displayMode = result.My_Result.be_listing_mode === 'grid' ? 'grid' : 'default';
        app_store.property = Object.assign({}, result.My_Result);
        app_store.app_data.property_id = result.My_Result.id;
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
        }
        return result.My_Result;
    }
    async getExposedNonBookableNights(params) {
        var _a;
        const { data } = await axios.post(`/Get_Exposed_Non_Bookable_Nights`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const nights = {};
        (_a = data.My_Result) === null || _a === void 0 ? void 0 : _a.forEach(nbn => {
            nights[nbn.night] = true;
        });
        app_store.nonBookableNights = nights;
        return data.My_Result;
    }
    async getExposedBookingAvailability(props) {
        const roomtypeIds = this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(props, roomtypeIds, rateplanIds);
        this.propertyHelpers.updateBookingStore(data);
        return data;
    }
    async getExposedBooking(params, withExtras = true) {
        const { data } = await axios.post(`/Get_Exposed_Booking`, Object.assign(Object.assign({}, params), { extras: withExtras
                ? [
                    { key: 'payment_code', value: '' },
                    {
                        key: 'prepayment_amount',
                        value: '',
                    },
                    { key: 'payment_code', value: '' },
                ]
                : null }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result.My_Result;
    }
    async fetchSetupEntries() {
        if (app_store.setup_entries) {
            return app_store.setup_entries;
        }
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, {
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
    filterRooms() {
        let rooms = [];
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
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
                                cci: null,
                            },
                        });
                    });
                }
            });
        });
        return rooms;
    }
    async editExposedGuest(guest, book_nbr) {
        const { data } = await axios.post(`/Edit_Exposed_Guest`, Object.assign(Object.assign({}, guest), { book_nbr }));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async bookUser() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const prePaymentAmount = checkout_store.prepaymentAmount;
        try {
            console.log('payment', checkout_store.payment);
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
                cci: ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code) === '001'
                    ? {
                        nbr: (_b = checkout_store.payment) === null || _b === void 0 ? void 0 : _b.cardNumber.replace(/ /g, ''),
                        holder_name: (_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.cardHolderName,
                        expiry_month: (_d = checkout_store.payment) === null || _d === void 0 ? void 0 : _d.expiry_month.split('/')[0],
                        expiry_year: (_e = checkout_store.payment) === null || _e === void 0 ? void 0 : _e.expiry_year.split('/')[1],
                        cvc: checkout_store.payment.cvc,
                    }
                    : null,
            };
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                language: (_g = (_f = app_store === null || app_store === void 0 ? void 0 : app_store.userPreferences) === null || _f === void 0 ? void 0 : _f.language_id) !== null && _g !== void 0 ? _g : 'en',
                agent: booking_store.bookingAvailabilityParams.agent ? { id: booking_store.bookingAvailabilityParams.agent } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_h = booking_store.bookingAvailabilityParams.coupon) !== null && _h !== void 0 ? _h : null,
                booking: {
                    booking_nbr: '',
                    from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                    to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    source: { code: app_store.app_data.isFromGhs ? 'ghs' : new URL(window.location.href).origin, tag: app_store.app_data.stag, description: '' },
                    referrer_site: app_store.app_data.affiliate ? `https://${app_store.app_data.affiliate.sites[0].url}` : 'www.igloorooms.com',
                    currency: app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase()),
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                extras: [
                    prePaymentAmount > 0
                        ? {
                            key: 'payment_code',
                            value: checkout_store.payment.code,
                        }
                        : null,
                    prePaymentAmount > 0
                        ? {
                            key: 'prepayment_amount',
                            value: prePaymentAmount,
                        }
                        : null,
                    {
                        key: 'selected_currency',
                        value: app_store.userPreferences.currency_id,
                    },
                ].filter(f => f !== null),
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
            };
            console.log('body');
            const { data } = await axios.post(`/DoReservation`, body);
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
        const { data } = await axios.post(`/Get_Exposed_Guest`, {
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
        // app_store.is_signed_in = true;
        checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_id: res.country_id, email: res.email, firstName: res.first_name, lastName: res.last_name, mobile_number: res.mobile, country_phone_prefix: res.country_phone_prefix, id: res.id });
    }
}
PropertyService.initialized = false;

class CommonService {
    async getCurrencies() {
        const { data } = await axios.post(`/Get_Exposed_Currencies`);
        app_store.currencies = [...data['My_Result']];
        return data['My_Result'];
    }
    async getExposedLanguages() {
        const { data } = await axios.post(`/Get_Exposed_Languages`);
        app_store.languages = [...data.My_Result];
        return data['My_Result'];
    }
    async getCountries(language) {
        const { data } = await axios.post(`/Get_Exposed_Countries`, {
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getUserDefaultCountry(params) {
        try {
            const { data } = await axios.post(`/Get_Country_By_IP`, Object.assign({ IP: '' }, params));
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
    async getExposedCountryByIp(params) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Country_By_IP`, Object.assign({ IP: '', lang: 'en' }, params));
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
            const { data } = await axios.post(`/Get_Exposed_Language`, { code: app_store.userPreferences.language_id, sections: ['_BE_FRONT'] });
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
            object[d.code] = `${d.description}`;
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
class AuthService {
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

export { AuthService as A };

//# sourceMappingURL=auth.service.js.map