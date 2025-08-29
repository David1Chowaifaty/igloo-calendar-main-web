import { EventEmitter } from '../../../../stencil-public-runtime';
import { IPayment } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/IBooking";
import { FolioEntryMode } from '../../types';
export declare class IrPaymentFolio {
    paymentTypes: IEntries[];
    bookingNumber: string;
    payment: IPayment;
    mode: FolioEntryMode;
    isLoading: boolean;
    errors: any;
    autoValidate: boolean;
    folioData: IPayment;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    private folioSchema;
    private paymentService;
    componentWillLoad(): void;
    handlePaymentChange(newValue: IPayment, oldValue: IPayment): void;
    private updateFolioData;
    private savePayment;
    private handleDropdownChange;
    private renderDropdownItems;
    render(): any;
}
