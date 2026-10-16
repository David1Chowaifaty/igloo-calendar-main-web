import { BookingService } from "../../services/booking-service/booking.service";
import { arrivalsStore, initializeArrivalsStore, setArrivalsReferenceDate, setArrivalsTotal } from "../../stores/arrivals.store";
import { departuresStore, initializeDeparturesStore, setDepartureTotal, setDeparturesPage, setDeparturesReferenceDate } from "../../stores/departures.store";
/*
 * Loaders for the dashboard panels backed by existing endpoints. They write into the same global
 * stores `ir-arrivals-table` / `ir-departures-table` render from, so the root (date change, refresh)
 * and the departures panel (after a check-out) share one code path.
 *
 * `ready` lets the request go out before `calendar_data.property` has loaded: the store initialisers
 * (canCheckIn / canCheckout) read it, so the response is only stored once `ready` settles.
 */
const bookingService = new BookingService();
/**
 * Page size the dashboard requests. Card counts are computed from the loaded page,
 * so it's large enough to hold a normal property's arrivals / departures for one day.
 */
export const DASHBOARD_PAGE_SIZE = 100;
export async function loadArrivals(propertyId, date, ready) {
    if (arrivalsStore.today !== date) {
        setArrivalsReferenceDate(date);
    }
    const { bookings, total_count } = await bookingService.getRoomsToCheckIn({
        property_id: propertyId?.toString(),
        check_in_date: date,
        page_index: arrivalsStore.pagination.currentPage,
        page_size: arrivalsStore.pagination.pageSize,
    });
    await ready;
    // A newer day was requested while this one was in flight.
    if (arrivalsStore.today !== date) {
        return;
    }
    setArrivalsTotal(total_count ?? 0);
    initializeArrivalsStore(bookings);
}
export async function loadDepartures(propertyId, date, ready) {
    if (departuresStore.today !== date) {
        // Unlike the arrivals setter, the departures one keeps the current page.
        setDeparturesReferenceDate(date);
        setDeparturesPage(1);
    }
    const { bookings, total_count } = await bookingService.getRoomsToCheckout({
        property_id: propertyId?.toString(),
        check_out_date: date,
        page_index: departuresStore.pagination.currentPage,
        page_size: departuresStore.pagination.pageSize,
    });
    await ready;
    if (departuresStore.today !== date) {
        return;
    }
    setDepartureTotal(total_count ?? 0);
    initializeDeparturesStore(bookings);
}
