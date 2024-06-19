import { createStore } from "@stencil/store";
import { enUS } from "date-fns/locale";
const initialState = {
    currentPage: 'booking',
    dir: 'LTR',
    selectedLocale: enUS,
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
        redirect_url: null,
        tag: null,
        source: null,
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
}
export function updateUserPreference(params) {
    app_store.userPreferences = Object.assign(Object.assign({}, app_store.userPreferences), params);
}
export { onAppDataChange };
export default app_store;
//# sourceMappingURL=app.store.js.map
