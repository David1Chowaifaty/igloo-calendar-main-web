import { createStore } from "@stencil/store";
import moment from "moment/min/moment-with-locales";
const initialState = {
    nonBookableNights: null,
    childrenStartAge: 3,
    currentPage: 'booking',
    dir: 'LTR',
    selectedLocale: 'en',
    localizedWords: [],
    userPreferences: {
        currency_id: 'usd',
        language_id: 'en',
    },
    invoice: null,
    app_data: {
        view: 'default',
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
export function changeLocale(dir, locale) {
    document.body.dir = dir;
    app_store.dir = dir;
    app_store.selectedLocale = locale;
    moment.locale(locale);
}
export function updateUserPreference(params) {
    app_store.userPreferences = Object.assign(Object.assign({}, app_store.userPreferences), params);
}
export { onAppDataChange };
export default app_store;
//# sourceMappingURL=app.store.js.map
