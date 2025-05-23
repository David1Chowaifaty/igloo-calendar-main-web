import { ICurrency, IExposedLanguages, pages, TCurrency, TDirection } from "../models/common";
import { Affiliate, IEntries, IExposedProperty } from "../models/property";
export type UserPreference = {
    language_id: string;
    currency_id: string;
};
export type NonBookableNights = {
    night: string;
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
    childrenStartAge?: number;
    nonBookableNights: Record<string, null>;
    currencies: TCurrency[];
    localizedWords: string[];
    dir: TDirection;
    selectedLocale: string;
    userPreferences: UserPreference;
    app_data: {
        view: 'extended' | 'default';
        override_rp?: boolean;
        token: string;
        property_id: number;
        injected: boolean;
        roomtype_id: number | null;
        affiliate: Affiliate;
        tag: string | null;
        source: TSource | null;
        hideGoogleSignIn: boolean;
        isFromGhs: boolean;
        stag: string | null;
        displayMode: 'default' | 'grid';
        isAgentMode?: boolean;
        aName: string;
        perma_link: string;
        origin: string | null;
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
export declare function changeLocale(dir: TDirection, locale: string): void;
export declare function updateUserPreference(params: Partial<UserPreference>): void;
export { onAppDataChange };
export default app_store;
