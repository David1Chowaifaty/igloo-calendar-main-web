import { TExposedBookingAvailability } from "../../components/ir-booking-engine/ir-booking-page/ir-availability-header/availability";
import { Booking } from "../../models/booking.dto";
import { AllowedPaymentMethod, ISetupEntries } from "../../models/property";
import app_store from "../../stores/app.store";
import { Colors } from '../app/colors.service';
import { TGuest } from "../../models/user_form";
import { DataStructure } from "../../models/common";
export declare class PropertyService {
    private propertyHelpers;
    private static initialized;
    colors: Colors;
    getExposedProperty(params: {
        id: number;
        language: string;
        aname: string | null;
        perma_link: string | null;
    }, initTheme?: boolean): Promise<any>;
    getExposedNonBookableNights(params: {
        from_date: string;
        to_date: string;
        porperty_id: number;
        aname: string;
        perma_link: string;
    }): Promise<any>;
    getExposedBookingAvailability(props: TExposedBookingAvailability): Promise<DataStructure>;
    getExposedBooking(params: {
        booking_nbr: string;
        language: string;
        currency: string;
    }, withExtras?: boolean): Promise<Booking>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    /**
     * Builds the array of room payloads for reservation based on the user's current selections.
     *
     * For each reserved entry in `booking_store.ratePlanSelections`, this method:
     *  1) Resolves the effective `RoomType` and `RatePlan` (preferring the provided `roomTypes`
     *     argument if available, otherwise falling back to `booking_store.roomTypes`).
     *  2) Detects currency context differences between the user's currency and the property's currency.
     *  3) Locates a base variation for each reserved unit (matching adult/child/infant counts). When
     *     in a different-currency context, variations are taken from the effective rate plan instead of
     *     the selection object. If no exact variation is found, the checkout variation is used.
     *  4) Adjusts the variation with infants via `VariationService.getVariationBasedOnInfants`.
     *  5) Produces a normalized "room" object used by the booking API.
     *
     * @private
     * @param {RoomType[] | null} roomTypes - Room types in the effective currency context; falls back to `booking_store.roomTypes` if `null`.
     * @returns {Room[]} Array of normalized `Room` payloads ready for `/DoReservation`.
     *
     * @example
     * // Use effective availability (e.g., after currency switch) to build reservation rooms:
     * const rooms = this.filterRooms(freshAvailabilityRoomTypes);
     * // Send in booking body: { booking: { rooms }, ... }
     */
    private filterRooms;
    editExposedGuest(guest: TGuest, book_nbr: string): Promise<any>;
    private getMostEffectiveCurrency;
    /**
     * Collects the IDs of room types and rate plans that have at least one room reserved
     * in the current `booking_store.ratePlanSelections`.
     *
     * Iterates over the nested selection map and includes only entries where
     * `reserved > 0`.
     *
     * @private
     * @returns {{ roomTypeIds: number[]; ratePlanIds: number[] }}
     * An object containing:
     *  - `roomTypeIds`: unique room type IDs with reservations.
     *  - `ratePlanIds`: unique rate plan IDs with reservations.
     *
     * @example
     * const { roomTypeIds, ratePlanIds } = this.collectBookedRoomsId();
     * // Use these arrays to build availability or pricing payloads.
     */
    private collectBookedRoomsId;
    /**
     * Recalculates the total prepayment amount for the currently selected rooms.
     *
     * Walks through the provided `roomTypes`, finds the matching user-selected
     * rate plans/variations from `booking_store.ratePlanSelections`, and sums
     * each stay’s `prepayment_amount_gross`. If an exact base variation is not
     * found (by adult/child/infant counts), the checkout variation is used as a fallback.
     * Infant counts are applied via `VariationService.getVariationBasedOnInfants`.
     *
     * @private
     * @param {RoomType[]} roomTypes - The room types returned from availability (in the currency context used for recalculation).
     * @returns {number} Total prepayment amount (sum of `prepayment_amount_gross`) for all reserved rooms.
     *
     * @example
     * // After fetching availability in a different currency:
     * const total = this.recalculatePrepaymentAmount(data.My_Result);
     * console.log('New prepayment amount:', total);
     */
    private recalculatePrepaymentAmount;
    bookUser(paymentMethod: AllowedPaymentMethod): Promise<{
        booking: Booking;
        prepaymentAmount: number;
        mostEffectiveCurrency: (typeof app_store.currencies)[number] | null;
    }>;
    getExposedGuest(): Promise<void>;
}
