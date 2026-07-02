import { EventEmitter } from '../../../../stencil-public-runtime';
import { IPayment } from "../../../../models/booking.dto";
export declare class IrPaymentItem {
    payment: IPayment;
    editPayment: EventEmitter<IPayment>;
    deletePayment: EventEmitter<IPayment>;
    issueReceipt: EventEmitter<IPayment>;
    voidReceipt: EventEmitter<IPayment>;
    private _id;
    render(): any;
}
