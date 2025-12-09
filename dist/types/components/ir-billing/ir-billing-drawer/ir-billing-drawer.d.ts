import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBillingDrawer {
    /**
     * Controls whether the billing drawer is open or closed.
     *
     * When `true`, the drawer becomes visible.
     * When `false`, it is hidden.
     *
     * This prop is reflected to the host element.
     *
     * @type {boolean}
     */
    open: boolean;
    /**
     * The booking object containing reservation and guest details
     * that will be used to populate the billing view.
     *
     * @type {Booking}
     */
    booking: Booking;
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose: EventEmitter<void>;
    render(): any;
}
