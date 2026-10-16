import type { ISODate } from "../../utils/calendar-dates";
/**
 * Page size the dashboard requests. Card counts are computed from the loaded page,
 * so it's large enough to hold a normal property's arrivals / departures for one day.
 */
export declare const DASHBOARD_PAGE_SIZE = 100;
export declare function loadArrivals(propertyId: number, date: ISODate, ready?: Promise<unknown>): Promise<void>;
export declare function loadDepartures(propertyId: number, date: ISODate, ready?: Promise<unknown>): Promise<void>;
