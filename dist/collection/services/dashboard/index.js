import { DASHBOARD_PAGE_SIZE } from "../../components/ir-dashboard/dashboard.data";
import { countRooms, filterInHouse, sumUnits } from "../../components/ir-dashboard/dashboard.helpers";
import { BookingService } from "../booking-service/booking.service";
import { BookingListingService } from "../booking-listing/index";
import { PropertyService } from "../property/index";
import { mockCancellations } from "./mocks";
export * from './types';
/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
export class DashboardService {
    bookingService = new BookingService();
    bookingListingService = new BookingListingService();
    propertyService = new PropertyService();
    async getDayPerformance({ property_id, date }) {
        const { DailyStats } = await this.propertyService.getMonthlyStats({ property_id, from_date: date, to_date: date });
        const day = DailyStats?.[0];
        return {
            occupancy: day?.Occupancy ?? 0,
            bookedUnits: day?.Units_booked ?? 0,
            roomRevenue: day?.Rooms_Revenue ?? 0,
            adr: day?.ADR ?? 0,
        };
    }
    async getUnitsSummary({ property_id, date, language }) {
        const days = await this.bookingService.fetchExposedCalendarDays({ propertyid: property_id, from_date: date, to_date: date, language });
        const day = days.find(d => d.value === date) ?? days[0];
        return sumUnits(day?.room_types ?? [], date);
    }
    /** Rooms checked in whose stay covers `date`. */
    async getInHouse({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '5', booking_status: '002', language });
        return filterInHouse(bookings, date);
    }
    /** Bookings created on `date`. */
    async getNewBookings({ property_id, date, language }) {
        return this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '', language });
    }
    /**
     * Units (rooms) in bookings made on `date` that still await confirmation.
     * Only meaningful when the property's booking criteria list the pending status (001).
     */
    async getPendingUnits({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '001', language });
        return countRooms(bookings);
    }
    // TODO: replace with real endpoint (bookings cancelled on `date`).
    async getCancellations(params) {
        return mockCancellations(params.date);
    }
    async getExposedBookings(property_id, date, filters) {
        const result = await this.bookingListingService.getExposedBookings({
            property_id,
            from: date,
            to: date,
            balance_filter: '0',
            start_row: 0,
            end_row: DASHBOARD_PAGE_SIZE,
            total_count: 0,
            name: '',
            book_nbr: '',
            affiliate_id: 0,
            is_mpo_managed: false,
            is_mpo_used: false,
            is_for_mobile: false,
            is_combined_view: false,
            is_to_export: false,
            channel: '',
            ...filters,
        }, { skipStore: true });
        return (result ?? []).map(b => ({ ...b, rooms: b.rooms ?? [] }));
    }
}
