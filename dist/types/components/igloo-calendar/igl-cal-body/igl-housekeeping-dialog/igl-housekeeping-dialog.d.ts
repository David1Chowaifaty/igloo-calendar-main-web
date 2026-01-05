import { EventEmitter } from '../../../../stencil-public-runtime';
import { PhysicalRoom } from "../../../../models/booking.dto";
export declare class IglHousekeepingDialog {
    /**
     * Controls whether the dialog is open.
     * The parent component is responsible for toggling this value.
     */
    open: boolean;
    /**
     * Currently selected room for housekeeping actions.
     * When null or undefined, the dialog will not render.
     */
    selectedRoom: PhysicalRoom;
    /**
     * Booking number associated with the selected room (if any).
     * Used for housekeeping action tracking.
     */
    bookingNumber: number;
    /**
     * Current property identifier.
     * Required for housekeeping service requests.
     */
    propertyId: number;
    isLoading: 'hk-toggle-clean-dirty' | 'hk-clean-inspect' | null;
    /** Fired after dialog is fully closed */
    irAfterClose: EventEmitter<void>;
    private dialogRef;
    private housekeepingService;
    private getStatusLabel;
    private middleButtonLabel;
    private rightButtonLabel;
    private updateHousekeeping;
    render(): any;
}
