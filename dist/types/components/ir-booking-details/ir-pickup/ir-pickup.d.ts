import { EventEmitter } from '../../../stencil-public-runtime';
import { IBookingPickupInfo } from "../../../models/booking.dto";
export declare class IrPickup {
    /**
     * Pre-filled pickup information coming from the booking.
     * When provided, the pickup form initializes with this data and
     * the user may update or remove it.
     */
    defaultPickupData: IBookingPickupInfo | null;
    /**
     * Total number of persons included in the booking.
     * Used to compute vehicle capacity and validate pickup options.
     */
    numberOfPersons: number;
    /**
     * Unique booking reference number used to associate pickup updates
     * with a specific reservation.
     */
    bookingNumber: string;
    /**
     * The date range of the booking (check-in and check-out).
     * Determines allowed pickup dates and validation rules.
     */
    bookingDates: {
        from: string;
        to: string;
    };
    /**
     * Controls whether the pickup drawer/modal is open.
     * When true, the drawer becomes visible and initializes the form.
     */
    open: boolean;
    isLoading: boolean;
    canSubmitPickup: boolean;
    /**
     * Emitted when the pickup drawer should be closed.
     * Triggered when the user dismisses the drawer or when the
     * inner pickup form requests the modal to close.
     */
    closeModal: EventEmitter<null>;
    private _id;
    render(): any;
}
