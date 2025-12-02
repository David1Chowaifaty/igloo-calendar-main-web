import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookedBySourceCell {
    /**
     * Guest associated with this booking.
     */
    guest: Booking['guest'];
    /**
     * Source of the booking (e.g. website, channel).
     */
    source: Booking['source'];
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin: Booking['origin'];
    /**
     * Unique identifier for this cell. Used for tooltip scoping.
     */
    identifier: string;
    /**
     * Total number of persons staying (adults + children).
     */
    totalPersons: string;
    /**
     * Promo key if a promo/coupon was applied.
     */
    promoKey: string;
    /**
     * Show pink heart icon if guest has repeated bookings.
     */
    showRepeatGuestBadge: boolean;
    /**
     * Show total persons count (e.g. "3P").
     */
    showPersons: boolean;
    /**
     * Show yellow dot indicating the booking has a private note.
     */
    showPrivateNoteDot: boolean;
    /**
     * Show loyalty discount icon (pink heart-outline).
     */
    showLoyaltyIcon: boolean;
    /**
     * Show promo/coupon icon.
     */
    showPromoIcon: boolean;
    /**
     * Makes the guest name clickable.
     * Emits `openGuestDetails` when clicked.
     */
    clickableGuest: boolean;
    /**
     * Emitted when the guest name is clicked.
     * Sends the `identifier` for parent lookup.
     */
    guestSelected: EventEmitter<string>;
    private handleGuestClick;
    render(): any;
}
