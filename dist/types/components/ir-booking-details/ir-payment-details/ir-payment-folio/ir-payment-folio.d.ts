import { EventEmitter } from '../../../../stencil-public-runtime';
import { IEntries } from "../../../../models/IBooking";
import { FolioEntryMode, Payment, PaymentEntries } from '../../types';
export declare class IrPaymentFolio {
    paymentEntries: PaymentEntries;
    bookingNumber: string;
    payment: Payment;
    mode: FolioEntryMode;
    isLoading: boolean;
    errors: any;
    autoValidate: boolean;
    folioData: Payment;
    _paymentTypes: Record<string, IEntries[]>;
    closeModal: EventEmitter<null>;
    resetBookingEvt: EventEmitter<null>;
    resetExposedCancellationDueAmount: EventEmitter<null>;
    private folioSchema;
    private paymentService;
    componentWillLoad(): void;
    handlePaymentChange(newValue: Payment, oldValue: Payment): void;
    handlePaymentTypesChange(newValue: IEntries[], oldValue: IEntries[]): void;
    private updateFolioData;
    private savePayment;
    private handleDropdownChange;
    private handlePaymentMethodDropdownChange;
    private getPaymentTypes;
    private renderDropdownItems;
    render(): any;
}
