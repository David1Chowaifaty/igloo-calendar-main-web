import IBooking, { ICountry, PhysicalRoomType } from '../models/IBooking';
export declare function convertDateToCustomFormat(dayWithWeekday: string, monthWithYear: string, format?: string): string;
export declare function convertDateToTime(dayWithWeekday: string, monthWithYear: string): number;
export declare function dateDifference(FROM_DATE: string, TO_DATE: string): number;
export declare const getBrowserLanguage: () => string;
export declare const transformBooking: (physicalRoom: PhysicalRoomType[]) => IBooking[];
export declare function dateToFormattedString(date: Date): string;
export declare function formatLegendColors(legendData: any): any;
export declare function isBlockUnit(status_code: any): boolean;
export declare function getCurrencySymbol(currencyCode: any): string;
export declare const findCountry: (id: number, countries: ICountry[]) => ICountry;
export declare function getReleaseHoursString(releaseDate: number): {
    BLOCKED_TILL_DATE: string;
    BLOCKED_TILL_HOUR: string;
    BLOCKED_TILL_MINUTE: string;
};
export declare function computeEndDate(startDate: string, numberOfDays: number): string;
export declare function convertDMYToISO(date: string): string;
export declare function addTwoMonthToDate(date: Date): string;
export declare function formatDate(dateString: any, option?: string): string;
export declare function getNextDay(date: Date): string;
export declare function convertDatePrice(date: string): string;
export declare function getDaysArray(date1: string, date2: string): any[];
export declare function renderTime(time: number): string;
export declare function validateEmail(email: string): boolean;
export declare function formatAmount(currency: string, amount: number): string;
/**
 * Determines whether the given user has privileged (global or elevated) access.
 *
 * Privileged users are typically system administrators or MPO users
 * who can access data across all properties rather than being restricted
 * to a specific property.
 *
 * @param userTypeCode - Numeric code representing the user's role.
 *   - `1` → Super Admin
 *   - `4` → MPO (Multi-Property Operator)
 *
 * @returns `true` if the user has elevated/global access, otherwise `false`.
 *
 * @example
 * ```ts
 * isPrivilegedUser(1); // true (Super Admin)
 * isPrivilegedUser(4); // true (MPO)
 * isPrivilegedUser(2); // false
 * ```
 */
export declare const isPrivilegedUser: (userTypeCode: number) => boolean;
export declare const extras: ({
    key: string;
    value: string;
} | {
    key: string;
    value: boolean;
})[];
export declare function manageAnchorSession(data: Record<string, unknown>, mode?: 'add' | 'remove'): void;
export declare function checkUserAuthState(): any;
export interface CheckInParams {
    from_date: string;
    to_date: string;
    isCheckedIn?: boolean;
}
/**
 * Determines whether a booking is eligible for check-in.
 *
 * @param params - An object containing the booking event, calendar data, current check-in status, and a flag indicating if check-in or checkout is allowed.
 * @returns True if check-in is allowed; otherwise, false.
 */
export declare function canCheckIn({ from_date, to_date, isCheckedIn }: CheckInParams): boolean;
/**
 * Downloads a file from a given URL.
 *
 * @param url - The URL of the file to download.
 * @param filename - The name of the file to save. If not provided, the URL will be used as the filename.
 */
export declare function downloadFile(url: string, filename?: string): void;
/**
 * Converts an integer value into a float by shifting the decimal point.
 *
 * @param value - The integer value to convert (e.g. 29016).
 * @param decimalPlaces - The number of decimal places to shift (e.g. 2 results in 290.16).
 * @returns The converted floating point number.
 */
export declare function toFloat(value: number, decimalPlaces: number): number;
export declare function sleep(time?: number): Promise<unknown>;
export declare function handleBodyOverflow(open: boolean): void;
export declare function generatePassword(length?: number): string;
/**
 * Generates a list of time strings in military time (24-hour format) between two specified times,
 * incremented by a given number of minutes.
 *
 * @param from - Start time in "HH:mm" (24-hour/military) format (e.g., "04:00").
 * @param to - End time in "HH:mm" (24-hour/military) format (e.g., "18:00").
 * @param stepMinutes - The interval step in minutes between time slots (default is 60).
 * @returns An array of time strings in "HH:mm" format representing each step between the start and end times.
 */
export declare function generateTimeSlotsMilitary(from: string, to: string, stepMinutes?: number): string[];
