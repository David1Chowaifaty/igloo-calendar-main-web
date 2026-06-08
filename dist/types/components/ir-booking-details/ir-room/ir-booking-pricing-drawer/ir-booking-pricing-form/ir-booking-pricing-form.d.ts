import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Booking, Room } from "../../../../../models/booking.dto";
import { ClTx } from "../../../../../services/city-ledger/types";
import { Agent } from "../../../../../services/agents/type";
type NightEntry = {
    date: string;
    amount: string;
    cost: number | null;
    isLocked: boolean;
};
export declare class IrBookingPricingForm {
    formId: string;
    booking: Booking;
    room: Room;
    agent: Agent | null;
    folioEntries: ClTx[];
    currencySymbol: string;
    nights: NightEntry[];
    isSubmitting: boolean;
    invoiceLocked: boolean;
    isCheckingInvoice: boolean;
    pricingSaved: EventEmitter<void>;
    submitDisabledChange: EventEmitter<boolean>;
    allDisabled: EventEmitter<boolean>;
    private bookingService;
    private isAgent;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleRoomChange(): void;
    /** True when nothing in the form is editable (invoice-locked, or every night is locked). */
    private get areAllItemsDisabled();
    private emitAllDisabled;
    private initNights;
    private checkInvoiceStatus;
    private isValid;
    private get acmTxByDate();
    private updateNight;
    private handleSubmit;
    render(): any;
}
export {};
