import type { Booking } from "../../models/booking.dto";
import type { DashboardDayParams, DashboardPerformance, DashboardUnits } from './types';
export * from './types';
/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
export declare class DashboardService {
    private bookingService;
    private bookingListingService;
    private propertyService;
    getDayPerformance({ property_id, date }: DashboardDayParams): Promise<DashboardPerformance>;
    getUnitsSummary({ property_id, date, language }: DashboardDayParams): Promise<DashboardUnits>;
    /** Rooms checked in whose stay covers `date`. */
    getInHouse({ property_id, date, language }: DashboardDayParams): Promise<Booking[]>;
    /** Bookings arriving on `date`, for properties without the front desk (the PMS uses Get_Rooms_To_Check_In). */
    getArrivals({ property_id, date, language }: DashboardDayParams): Promise<Booking[]>;
    /** Bookings departing on `date`, for properties without the front desk (the PMS uses Get_Rooms_To_Check_Out). */
    getDepartures({ property_id, date, language }: DashboardDayParams): Promise<Booking[]>;
    /** Bookings created on `date`. */
    getNewBookings({ property_id, date, language }: DashboardDayParams): Promise<Booking[]>;
    /**
     * Units (rooms) in bookings made on `date` that still await confirmation.
     * Only meaningful when the property's booking criteria list the pending status (001).
     */
    getPendingUnits({ property_id, date, language }: DashboardDayParams): Promise<number>;
    /** Bookings cancelled (deleted) on `date`. */
    getCancellations({ property_id, date }: DashboardDayParams): Promise<Booking[]>;
    private getExposedBookings;
}
