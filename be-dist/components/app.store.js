import { c as createStore } from './index2.js';

var locale = {};

const initialState = {
    nonBookableNights: null,
    childrenStartAge: 3,
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
        origin: null,
        override_rp: false,
        displayMode: 'default',
        affiliate: null,
        stag: null,
        token: '',
        property_id: null,
        injected: false,
        roomtype_id: null,
        tag: null,
        source: null,
        hideGoogleSignIn: false,
        isFromGhs: false,
        isAgentMode: false,
        aName: null,
        perma_link: null,
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
const { state: app_store, onChange: onAppDataChange } = createStore(initialState);
function changeLocale(dir, locale) {
    document.body.dir = dir;
    app_store.dir = dir;
    app_store.selectedLocale = locale;
}
function updateUserPreference(params) {
    app_store.userPreferences = Object.assign(Object.assign({}, app_store.userPreferences), params);
}

export { app_store as a, changeLocale as c, locale as l, onAppDataChange as o, updateUserPreference as u };

//# sourceMappingURL=app.store.js.map