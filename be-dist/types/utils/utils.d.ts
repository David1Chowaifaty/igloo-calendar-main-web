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
export declare const formatAmount: (amount: any, currency?: string) => string;
type HSLColor = {
    h: number;
    s: number;
    l: number;
};
export declare function hexToHSL(hex: string): HSLColor;
export declare function generateColorShades(baseHex: string): string[];
export declare function getDateDifference(date1: Date, date2: Date): number;
export declare function renderTime(time: number): string;
export declare function getUserPrefernce(): void;
export declare function setDefaultLocale({ currency }: {
    currency: ICurrency;
}): void;
export {};
