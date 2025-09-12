import { EventEmitter } from '../../../stencil-public-runtime';
import { Booking } from "../../../models/booking.dto";
import { IEntries } from "../../../models/property";
import { PaymentEntries } from "../../ir-booking-details/types";
export declare class IrListingModal {
    modalTitle: string;
    editBooking: {
        booking: Booking;
        cause: 'edit' | 'payment' | 'delete' | 'guest';
    };
    paymentEntries: PaymentEntries;
    isOpen: boolean;
    deletionStage: number;
    selectedDesignation: IEntries;
    loadingBtn: 'confirm' | 'just_delete' | 'recover_and_delete' | null;
    private bookingListingsService;
    private paymentService;
    componentWillLoad(): void;
    modalClosed: EventEmitter<null>;
    resetData: EventEmitter<string>;
    closeModal(): Promise<void>;
    openModal(): Promise<void>;
    filterBookings(): void;
    btnClickHandler(event: CustomEvent): Promise<void>;
    renderTitle(): string;
    renderConfirmationTitle(): string;
    renderCancellationTitle(): string;
    private handleDropdownChange;
    render(): any[];
}
