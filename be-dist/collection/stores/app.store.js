import { createStore } from "@stencil/store";
import { enUS } from "date-fns/locale";
const initialState = {
    dir: 'LTR',
    selectedLocale: enUS,
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
