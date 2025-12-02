import { EventEmitter } from '../../../../stencil-public-runtime';
import { IPayment } from "../../../../models/booking.dto";
export declare class IrPaymentsFolio {
    payments: IPayment[];
    addPayment: EventEmitter<void>;
    editPayment: EventEmitter<IPayment>;
    deletePayment: EventEmitter<IPayment>;
    issueReceipt: EventEmitter<IPayment>;
    private handleAddPayment;
    private handleEditPayment;
    private handleDeletePayment;
    private handleIssueReceipt;
    private hasPayments;
    private renderPaymentItem;
    private renderEmptyState;
    render(): any;
}
