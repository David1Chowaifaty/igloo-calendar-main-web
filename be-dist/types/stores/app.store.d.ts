import { IExposedProperty } from "../components";
import { TCurrency, TDirection } from "../models/common";
import { IEntries } from "../models/property";
import { Locale } from 'date-fns/locale';
export type UserPreference = {
    language_id: string;
    currency_id: string;
};
export interface ILocalizationStore {
    currencies: TCurrency[];
    localizedWords: string[];
    dir: TDirection;
    selectedLocale: Locale;
    userPreferences: UserPreference;
    app_data: {
        token: string;
        property_id: number;
    };
    property: IExposedProperty;
    setup_entries: {
        arrivalTime: IEntries[];
        ratePricingMode: IEntries[];
        bedPreferenceType: IEntries[];
    };
}
declare const app_store: ILocalizationStore, onAppDataChange: import("@stencil/store/dist/types").OnChangeHandler<ILocalizationStore>;
export declare function changeLocale(dir: TDirection, locale: Locale): void;
export declare function updateUserPreference(params: Partial<UserPreference>): void;
export { onAppDataChange };
export default app_store;
