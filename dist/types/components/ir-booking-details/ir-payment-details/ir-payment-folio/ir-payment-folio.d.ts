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
    _paymentTypes: IEntries[];
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    resetExposedCancellationDueAmount: EventEmitter<null>;
    private folioSchema;
    private paymentService;
    componentWillLoad(): void;
    handlePaymentChange(newValue: IPayment, oldValue: IPayment): void;
    handlePaymentTypesChange(newValue: IEntries[], oldValue: IEntries[]): void;
    private updateFolioData;
    private savePayment;
    private handleDropdownChange;
    private getPaymentTypes;
    private renderDropdownItems;
    render(): any;
}
