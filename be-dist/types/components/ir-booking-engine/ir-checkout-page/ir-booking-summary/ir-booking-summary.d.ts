import { CheckoutErrors, pages } from "../../../../models/commun";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingSummary {
    isLoading: boolean;
    prepaymentAmount: any;
    routing: EventEmitter<pages>;
    bookingClicked: EventEmitter<null>;
    error: CheckoutErrors;
    handleBooking(): void;
    render(): any;
}
