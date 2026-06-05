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
    private bookingService;
    componentWillLoad(): Promise<void>;
    handleRoomChange(): void;
    private initNights;
    private checkInvoiceStatus;
    private isValid;
    private updateNight;
    private handleSubmit;
    render(): any;
}
export {};
