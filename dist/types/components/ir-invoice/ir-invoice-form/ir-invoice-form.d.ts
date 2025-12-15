import { Booking } from "../../../models/booking.dto";
import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
import { BookingInvoiceInfo, InvoiceableItem, ViewMode } from '../types';
import { IssueInvoiceProps } from "../../../services/booking-service/types";
export declare class IrInvoiceForm {
    /**
     * Controls how the invoice form behaves (e.g., "invoice", "proforma", "preview").
     */
    viewMode: ViewMode;
    /**
     * Unique ID applied to the underlying <form> element.
     */
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
    invoiceInfo: BookingInvoiceInfo;
    selectedRecipient: string;
    isLoading: boolean;
    selectedItemKeys: Set<number>;
    invoicableKey: Map<InvoiceableItem['key'], InvoiceableItem>;
    toBeInvoicedItems: InvoiceableItem[];
    invoiceDate: Moment;
    notInvoiceableItemKeys: Set<number>;
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
    invoiceCreated: EventEmitter<IssueInvoiceProps>;
    previewProformaInvoice: EventEmitter<IssueInvoiceProps>;
    loadingChange: EventEmitter<boolean>;
    private room;
    private splitDisabledKeys;
    private confirmButtonRef;
    private bookingService;
    private invoiceTarget;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleViewModeChange(): void;
    handleBookingChange(): void;
    handleInvoiceInfoChange(): void;
    private setUpDisabledItems;
    private enforceNonInvoiceableSelections;
    private syncSelectedItems;
    private canInvoiceRoom;
    private hasInvoiceableRooms;
    private getInvoiceableRoomIds;
    private init;
    private setupInvoicables;
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
    private getDateView;
    private renderRooms;
    private handleCheckChange;
    private isSelected;
    private isDisabled;
    private renderPickup;
    private renderCancellationPenalty;
    render(): any;
}
