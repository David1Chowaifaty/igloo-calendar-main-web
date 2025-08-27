import { EventEmitter } from '../../../../../stencil-public-runtime';
import { IPaymentAction } from "../../../../../services/payment.service";
export declare class IrPaymentAction {
    paymentAction: IPaymentAction;
    generatePayment: EventEmitter<IPaymentAction>;
    render(): any;
}
