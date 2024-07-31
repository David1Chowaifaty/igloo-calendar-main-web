'use strict';

const index = require('./index-10c552bd.js');

var locale = {};

const initialState = {
    currentPage: 'booking',
    dir: 'LTR',
    selectedLocale: locale.enUS,
    localizedWords: [],
    userPreferences: {
        currency_id: 'usd',
        language_id: 'en',
    },
    invoice: null,
    app_data: {
        affiliate: null,
        token: '',
        property_id: null,
        injected: false,
        roomtype_id: null,
        tag: null,
        source: null,
        hideGoogleSignIn: false,
    },
    property: undefined,
    setup_entries: undefined,
    currencies: [],
    userDefaultCountry: undefined,
    fetchedBooking: false,
    languages: [],
    is_signed_in: false,
    email: null,
};
const { state: app_store, onChange: onAppDataChange } = index.createStore(initialState);
function changeLocale(dir, locale) {
    document.body.dir = dir;
    app_store.dir = dir;
    app_store.selectedLocale = locale;
}
function updateUserPreference(params) {
    app_store.userPreferences = Object.assign(Object.assign({}, app_store.userPreferences), params);
}

exports.app_store = app_store;
exports.changeLocale = changeLocale;
exports.locale = locale;
exports.onAppDataChange = onAppDataChange;
exports.updateUserPreference = updateUserPreference;

//# sourceMappingURL=app.store-52efa6e0.js.map