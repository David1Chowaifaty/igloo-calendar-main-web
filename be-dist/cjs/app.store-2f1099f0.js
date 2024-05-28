'use strict';

const index = require('./index-08156e03.js');

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
    app_data: {
        token: '',
        property_id: null,
        injected: false,
        roomtype_id: null,
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

//# sourceMappingURL=app.store-2f1099f0.js.map