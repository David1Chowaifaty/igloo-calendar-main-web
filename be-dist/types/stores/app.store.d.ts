import { ICurrency, IExposedLanguages, pages, TCurrency, TDirection } from "../models/common";
import { Affiliate, IEntries, IExposedProperty } from "../models/property";
import { Locale } from 'date-fns/locale';
export type UserPreference = {
    language_id: string;
    currency_id: string;
};
interface IUserDefaultCountry {
    cities: [];
    currency: ICurrency;
    flag: string;
    id: number;
    name: string;
    phone_prefix: string;
}
export type TSource = {
    code: string;
    description: string;
};
export interface IAppStore {
    currencies: TCurrency[];
    localizedWords: string[];
    dir: TDirection;
    selectedLocale: Locale;
    userPreferences: UserPreference;
    app_data: {
        token: string;
        property_id: number;
        injected: boolean;
        roomtype_id: number | null;
        redirect_url: string;
        affiliate: Affiliate;
        tag: string | null;
        source: TSource | null;
        hideGoogleSignIn: boolean;
    };
    property: IExposedProperty;
    setup_entries: {
        arrivalTime: IEntries[];
        ratePricingMode: IEntries[];
        bedPreferenceType: IEntries[];
    };
    userDefaultCountry: IUserDefaultCountry;
    fetchedBooking: boolean;
    currentPage: pages;
    languages: IExposedLanguages[];
    is_signed_in: boolean;
    email: string | null;
    invoice: {
        booking_number: string;
        email: string;
    } | null;
}
declare const app_store: IAppStore, onAppDataChange: import("@stencil/store/dist/types").OnChangeHandler<IAppStore>;
export declare function changeLocale(dir: TDirection, locale: Locale): void;
export declare function updateUserPreference(params: Partial<UserPreference>): void;
export { onAppDataChange };
export default app_store;
