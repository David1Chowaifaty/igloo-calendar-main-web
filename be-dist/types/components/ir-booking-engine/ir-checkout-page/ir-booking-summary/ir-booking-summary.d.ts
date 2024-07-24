import { CheckoutErrors, pages } from "../../../../models/common";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingSummary {
    isLoading: boolean;
    routing: EventEmitter<pages>;
    bookingClicked: EventEmitter<null>;
    error: CheckoutErrors;
    handleBooking(): void;
    render(): any;
}
