import { Booking, Room } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/IBooking";
import { EventEmitter } from '../../../../stencil-public-runtime';
/**
 * Dialog that lets staff set or change the expected arrival time for a single room.
 * Persists the choice via BookingService.setArrivalTime and emits `arrivalTimeClose`
 * when it closes so the parent can refresh the booking.
 *
 * Usage:
 *   <ir-arrival-time-dialog
 *     room={room}
 *     open={isOpen}
 *     property_id={propertyId}
 *     arrivalTime={arrivalTimeEntries}
 *     onArrivalTimeClose={e => { isOpen = false; if (e.detail.saved) refresh(); }}
 *   />
 */
export declare class IrArrivalTimeDialog {
    /** Room whose expected arrival time is being changed. */
    room: Room;
    /** Needed to look up whether this room already has an early-check-in extra service charge. */
    booking: Booking;
    /** Controls dialog visibility. */
    open: boolean;
    property_id: number;
    arrivalTime: IEntries[];
    language: string;
    /** Needed to create an early-check-in extra service charge alongside the arrival time. */
    booking_nbr: string;
    currency_id: number;
    currencySymbol: string;
    selectedValue: string | null;
    isLoading: boolean;
    createExtraService: boolean;
    extraServicePrice: number | null;
    /**
     * Fired when the dialog closes.
     * `saved: true` → arrival time was persisted; `saved: false` → user cancelled.
     */
    arrivalTimeClose: EventEmitter<{
        saved: boolean;
    }>;
    private bookingService;
    private dialogRef;
    private closedBySave;
    handleOpenChange(next: boolean): void;
    /** The room's already-persisted early-check-in extra service charge, if any — its price becomes the field's default instead of the property's generic default. */
    private get existingEarlyCheckInService();
    /** Whether an arrival-time option (e.g. "10 AM") falls before the property's standard check-in start time, in hotel-local time. */
    private isEarlyCheckIn;
    /** Whether the currently selected arrival time is an early check-in. */
    private get selectedIsEarlyCheckIn();
    private handleConfirm;
    render(): any;
}
