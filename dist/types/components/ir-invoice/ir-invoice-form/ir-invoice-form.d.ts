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
    invoiceCreated: EventEmitter<BookingInvoiceInfo>;
    previewProformaInvoice: EventEmitter<IssueInvoiceProps>;
    loadingChange: EventEmitter<boolean>;
    private room;
    private confirmButtonRef;
    private bookingService;
    private invoiceTarget;
    private apiDisabledItemKeys;
    private alreadyInvoicedItemKeys;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleViewModeChange(): void;
    handleBookingChange(): void;
    handleInvoiceInfoChange(): void;
    /**
     * Builds the list of invoice items that cannot yet be invoiced based on dates, splits and API-provided flags.
     */
    private setUpDisabledItems;
    /**
     * Removes selections that correspond to disabled invoice items unless in proforma mode.
     */
    private enforceNonInvoiceableSelections;
    /**
     * Returns the union of API-disabled keys and client-calculated non-invoiceable keys.
     */
    private getCombinedDisabledKeys;
    /**
     * Indicates whether an item was already invoiced, used to disable it in invoice mode.
     */
    private isAlreadyInvoiced;
    /**
     * Synchronizes the selected keys set with derived arrays and button states.
     */
    private syncSelectedItems;
    /**
     * Indicates whether a room has an invoiceable entry.
     */
    private canInvoiceRoom;
    /**
     * Checks if any rooms in a collection are invoiceable.
     */
    private hasInvoiceableRooms;
    /**
     * Returns the system IDs for rooms that can be invoiced.
     */
    private getInvoiceableRoomIds;
    /**
     * Loads booking/invoice data and ancillary metadata required to render the form.
     */
    private init;
    /**
     * Converts API invoiceable items into lookup maps/sets and applies default selections.
     */
    private setupInvoicables;
    /**
     * Selects invoiceable items by default, or all items in proforma mode.
     */
    private applyDefaultSelections;
    /**
     * Resolves the correct checkbox key to use for a given invoiceable item.
     */
    private getSelectableKey;
    /**
     * Handles confirming/creating the invoice.
     *
     * Emits the `invoiceCreated` event with invoice context, and if
     * `autoPrint` is `true`, triggers `window.print()` afterwards.
     */
    private handleConfirmInvoice;
    /**
     * Opens the most recently created invoice in a new window using the booking service.
     */
    private openLastInvoice;
    /**
     * Provides the minimum selectable invoice date depending on booking vs. room mode.
     */
    private getMinDate;
    /**
     * Returns today's date as the maximum invoice date.
     */
    private getMaxDate;
    /**
     * Groups rooms so that linked/split rooms can be invoiced together and ordered consistently.
     */
    private computeRoomGroups;
    /**
     * Renders the visual date range for a given service entry.
     */
    private getDateView;
    /**
     * Outputs the non-invoiceable reason text for a given system ID when in invoice mode.
     */
    private renderReasonDescription;
    /**
     * Renders a price/value column along with any reason description for the given system ID.
     */
    private renderPriceColumn;
    /**
     * Handles toggling checkbox selections for invoiceable items.
     */
    private handleCheckChange;
    /**
     * Determines if any ID in a collection is currently selected.
     */
    private isSelected;
    /**
     * Determines if any member of a checkbox group should be disabled.
     */
    private isDisabled;
    /**
     * Renders the room checkboxes, grouping split rooms when necessary.
     */
    private renderRooms;
    /**
     * Renders the pickup service row when invoiceable.
     */
    private renderPickup;
    /**
     * Renders the cancellation penalty checkbox when the booking contains one.
     */
    private renderCancellationPenalty;
    render(): any;
}
