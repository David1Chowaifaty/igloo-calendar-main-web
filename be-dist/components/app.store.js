import { c as createStore } from './index2.js';
import { l as locale } from './locale.js';

const initialState = {
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
    },
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

export { app_store as a, changeLocale as c, onAppDataChange as o, updateUserPreference as u };

//# sourceMappingURL=app.store.js.map