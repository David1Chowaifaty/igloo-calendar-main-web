import { Booking, Room } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/IBooking";
import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * Dialog that lets staff set or change the expected departure time for a single room.
 * Persists the choice via BookingService.setDepartureTime and emits `departureTimeClose`
 * when it closes so the parent can refresh the booking.
 *
 * Usage:
 *   <ir-departure-time-dialog
 *     room={room}
 *     open={isOpen}
 *     property_id={propertyId}
 *     departureTime={departureTimeEntries}
 *     onDepartureTimeClose={e => { isOpen = false; if (e.detail.saved) refresh(); }}
 *   />
 */
export declare class IrDepartureTimeDialog {
    /** Room whose expected departure time is being changed. */
    room: Room;
    /** Needed to look up whether this room already has a late-checkout extra service charge. */
    booking: Booking;
    /** Controls dialog visibility. */
    open: boolean;
    property_id: number;
    departureTime: IEntries[];
    language: string;
    /** Needed to create a late-checkout extra service charge alongside the departure time. */
    booking_nbr: string;
    currency_id: number;
    currencySymbol: string;
    selectedValue: string | null;
    isLoading: boolean;
    createExtraService: boolean;
    extraServicePrice: number | null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → departure time was persisted; `saved: false` → user cancelled.
     */
    departureTimeClose: EventEmitter<{
        saved: boolean;
    }>;
    private bookingService;
    private dialogRef;
    private closedBySave;
    handleOpenChange(next: boolean): void;
    /** The room's already-persisted late-checkout extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    private get existingLateCheckoutService();
    /** Whether a departure-time option (e.g. "14:00") falls after the property's standard checkout time, in hotel-local time. */
    private isLateCheckout;
    /** Whether the currently selected departure time is a late checkout. */
    private get selectedIsLateCheckout();
    private handleConfirm;
    render(): any;
}
