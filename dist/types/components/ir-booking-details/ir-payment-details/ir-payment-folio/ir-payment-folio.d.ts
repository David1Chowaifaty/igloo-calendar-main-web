import { EventEmitter } from '../../../../stencil-public-runtime';
import { IPayment } from "../../../../models/booking.dto";
import { IEntries } from "../../../../models/IBooking";
export declare class IrPaymentFolio {
    paymentTypes: IEntries[];
    bookingNumber: string;
    payment: IPayment;
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
    render(): any;
}
