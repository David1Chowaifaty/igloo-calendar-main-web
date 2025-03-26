import IBooking, { ICountry, PhysicalRoomType } from '../models/IBooking';
export declare function convertDateToCustomFormat(dayWithWeekday: string, monthWithYear: string): string;
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
