import { Booking } from "../../../../models/booking.dto";
import { EventEmitter } from '../../../../stencil-public-runtime';
import { CancellationStatement } from '../../types';
import { IPaymentAction } from "../../../../services/payment.service";
export declare class IrApplicablePolicies {
    booking: Booking;
    propertyId: number;
    language: string;
    cancellationStatements: CancellationStatement[];
    isLoading: boolean;
    guaranteeAmount: number;
    generatePayment: EventEmitter<IPaymentAction>;
    componentWillLoad(): void;
    handleBookingChange(): void;
    private loadApplicablePolicies;
    private formatPreviousBracketDueOn;
    private getBracketLabelsAndArrowState;
    private handleSingleBracket;
    private handleMultipleBrackets;
    private getCurrentBracket;
    private generateCancellationStatement;
    private _getCurrentBracket;
    render(): any;
}
