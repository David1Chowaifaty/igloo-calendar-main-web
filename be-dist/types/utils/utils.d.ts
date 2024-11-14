import { ICurrency } from "../components";
import { Assignableunit, IExposedProperty } from "../models/property";
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
export declare function getUserPreference(lang?: string | undefined): void;
export declare function runScriptAndRemove(scriptContent: string): void;
export declare function injectHTMLAndRunScript(htmlContent: string, uniqueId: string, target?: 'head' | 'body', position?: 'first' | 'last'): void;
export declare function setDefaultLocale({ currency }: {
    currency: ICurrency;
}): void;
export declare function getCookies(): {
    [key: string]: string;
};
export declare function getCookie(name: string): string | null;
export declare function manageAnchorSession(data: Record<string, unknown>, mode?: 'add' | 'remove'): void;
export declare function injectHTML(htmlContent: string, target?: 'head' | 'body', position?: 'first' | 'last'): void;
export declare function checkAffiliate(afName: string): import("@/models/property").Affiliate;
export declare function formatFullLocation(property: IExposedProperty): string;
export declare function formatImageAlt(alt: string | null, roomTypeName?: string | null): string;
export declare function validateCoupon(coupon: string): boolean;
export declare function validateAgentCode(code: string): boolean;
export declare function renderPropertyLocation(): string;
export declare function destroyBookingCookie(): void;
export declare function checkGhs(source_code: string, stag: string): boolean;
export declare function detectCardType(value: string): "" | "VISA" | "Mastercard" | "AMEX";
type ModifyQueryOptions = {
    reload?: boolean;
    replaceState?: boolean;
};
/**
 * Utility to modify query string parameters.
 *
 * @param param - The query parameter key to modify
 * @param value - The value to set for the query parameter. If null, the parameter will be removed.
 * @param options - Options to control whether the page should reload or replace the current history state.
 */
export declare function modifyQueryParam(param: string, value: string | null, options?: ModifyQueryOptions): void;
export declare function calculateInfantNumber(ages: string[]): number;
export {};
