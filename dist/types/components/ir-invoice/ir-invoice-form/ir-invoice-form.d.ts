import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { BookingInvoiceInfo } from '../types';
export declare class IrInvoiceForm {
    formId: string;
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open: boolean;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking: Booking;
    /**
     * Determines what should happen after creating the invoice.
     * - `"create"`: create an invoice normally
     * - `"check_in-create"`: create an invoice as part of the check-in flow
     */
    mode: 'create' | 'check_in-create';
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for: 'room' | 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier: string;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint: boolean;
    selectedRecipient: string;
    isLoading: boolean;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen: EventEmitter<void>;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose: EventEmitter<void>;
    /**
     * Emitted when an invoice is created/confirmed.
     *
     * The event `detail` contains:
     * - `booking`: the booking associated with the invoice
     * - `recipientId`: the selected billing recipient
     * - `for`: whether the invoice is for `"room"` or `"booking"`
     * - `roomIdentifier`: the room identifier when invoicing a specific room
     * - `mode`: the current invoice mode
     */
    invoiceCreated: EventEmitter<{
        booking: Booking;
        recipientId: string;
        for: 'room' | 'booking';
        roomIdentifier?: string;
        mode: 'create' | 'check_in-create';
    }>;
    private room;
    private bookingService;
    invoiceInfo: BookingInvoiceInfo;
    componentWillLoad(): void;
    handleBookingChange(): void;
    private init;
    /**
     * Handles confirming/creating the invoice.
     *
     * Emits the `invoiceCreated` event with invoice context, and if
     * `autoPrint` is `true`, triggers `window.print()` afterwards.
     */
    private handleConfirmInvoice;
    private getMinDate;
    private getMaxDate;
    private computeRoomGroups;
    private renderRooms;
    render(): any;
}
