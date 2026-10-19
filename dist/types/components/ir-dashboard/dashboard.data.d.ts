import type { ISODate } from "../../utils/calendar-dates";
export { DASHBOARD_PAGE_SIZE } from './dashboard.helpers';
export declare function loadArrivals(propertyId: number, date: ISODate, ready?: Promise<unknown>): Promise<void>;
export declare function loadDepartures(propertyId: number, date: ISODate, ready?: Promise<unknown>): Promise<void>;
