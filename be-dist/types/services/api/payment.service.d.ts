import { Booking } from "../../models/booking.dto";
import { IBrackets, IExposedApplicablePolicies } from "../../models/property";
type TExposedApplicablePolicies = {
    data: IExposedApplicablePolicies[];
    amount: number;
    room_type_id?: number;
    rate_plan_id?: number;
};
interface FetchCancellationMessageWithData {
    data: IExposedApplicablePolicies[];
    showCancelation?: boolean;
}
interface FetchCancellationMessageWithoutData {
    id: number;
    roomTypeId: number;
    bookingNbr?: string;
    showCancelation?: boolean;
    data?: null;
}
type FetchCancellationMessageParams = FetchCancellationMessageWithData | FetchCancellationMessageWithoutData;
export type TBookingInfo = {
    statement: string;
    rp_name: string;
    rt_name: string;
};
export declare class PaymentService {
    getExposedCancellationDueAmount(params: {
        booking_nbr: string;
        currency_id: number;
    }): Promise<any>;
    GeneratePaymentCaller({ token, params, onRedirect, onScriptRun, }: {
        token: string;
        params: {
            booking_nbr: string;
            amount: number;
            currency_id: string | number;
            email: string;
            pgw_id: string;
        };
        onRedirect: (url: string) => void;
        onScriptRun: (script: string) => void;
    }): Promise<any>;
    requestBookingCancellation(booking_nbr: string): Promise<any>;
    GetExposedApplicablePolicies({ params, book_date, }: {
        params: {
            booking_nbr: string;
            property_id: number;
            room_type_id: number;
            rate_plan_id: number;
            currency_id: number;
            language: number | string;
        };
        book_date: Date;
    }): Promise<TExposedApplicablePolicies>;
    processApplicablePolicies(policies: IExposedApplicablePolicies[], book_date: Date): {
        amount: number;
    };
    /**
     * Determines whether the current time falls within a "free cancellation" bracket.
     *
     * The method identifies which cancellation bracket (based on `due_on` date)
     * the current time is within. A bracket is defined by a start date (`due_on`)
     * and ends at the start of the next bracket (or continues indefinitely if it's the last one).
     *
     * If the current bracket has an `amount` or `gross_amount` equal to `0`,
     * the booking is considered to be in the free cancellation period.
     *
     * @param {IExposedApplicablePolicies[]} policies - List of applicable policies containing cancellation brackets.
     * @returns {boolean} Returns `true` if currently in a free cancellation bracket (amount = 0), otherwise `false`.
     *
     * @example
     * const isFree = paymentService.checkFreeCancellationZone(policies);
     * if (isFree) {
     *   console.log('You are within the free cancellation period.');
     * }
     */
    checkFreeCancellationZone(policies: IExposedApplicablePolicies[]): boolean;
    getCancellationMessage(applicablePolicies: IExposedApplicablePolicies[] | null, showCancellation?: boolean, includeGuarantee?: boolean): {
        message: string;
        data: IExposedApplicablePolicies[];
    };
    fetchCancellationMessage(params: FetchCancellationMessageParams): Promise<{
        message: string;
        data: IExposedApplicablePolicies[];
    }>;
    getBookingPrepaymentAmount(booking: Booking): Promise<{
        amount: number;
        cancelation_message: string;
        guarantee_message: string;
        cancelation_policies: {
            statement: string;
            rp_name: string;
            rt_name: string;
        }[];
    }>;
    private setUpBooking;
    findClosestDate(data: IBrackets[]): IBrackets;
}
export {};
