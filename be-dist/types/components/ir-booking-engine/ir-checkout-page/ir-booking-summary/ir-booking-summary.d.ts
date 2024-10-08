import { CheckoutErrors, pages } from "../../../../models/commun";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingSummary {
    prepaymentAmount: any;
    isBookingConfirmed: boolean;
    routing: EventEmitter<pages>;
    bookingClicked: EventEmitter<null>;
    openPrivacyPolicy: EventEmitter<null>;
    error: CheckoutErrors;
    handleBooking(): void;
    render(): any;
}
