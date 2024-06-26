import { ICurrency } from "../components";
import { Assignableunit } from "../models/property";
import { ClassValue } from 'clsx';
import { Locale } from 'date-fns';
export declare function matchLocale(locale: string): Locale;
export declare function getAbbreviatedWeekdays(locale: Locale): any[];
export declare function setLanguagePreference(language: string): void;
export declare function getLanguagePreference(): string | null;
export declare function getAvailableRooms(assignable_units: Assignableunit[]): any[];
export declare function cn(...inputs: ClassValue[]): string;
export declare const formatAmount: (amount: any, currency?: string, decimals?: number) => string;
export declare function getDateDifference(date1: Date, date2: Date): number;
export declare function renderTime(time: number): string;
export declare function getUserPrefernce(lang?: string | undefined): void;
export declare function setDefaultLocale({ currency }: {
    currency: ICurrency;
}): void;
export declare function getCookies(): {
    [key: string]: string;
};
export declare function getCookie(name: string): string | null;
export declare function manageAnchorSession(data: Record<string, unknown>, mode?: 'add' | 'remove'): void;
export declare function injectHTML(htmlContent: string, target?: 'head' | 'body', position?: 'first' | 'last'): void;
