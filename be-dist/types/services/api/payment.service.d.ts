import { Booking } from "../../models/booking.dto";
import { IBrackets, IExposedApplicablePolicies } from "../../models/property";
import { Token } from "../../models/Token";
type TExposedApplicablePolicies = {
    data: IExposedApplicablePolicies[];
    amount: number;
};
export declare class PaymentService extends Token {
    processBookingPayment(): void;
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
    RequestBookingCancelation(booking_nbr: string): Promise<any>;
    GetExposedApplicablePolicies({ token, params, book_date, }: {
        token: string;
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
    processAlicablePolicies(policies: IExposedApplicablePolicies[], book_date: Date): {
        amount: number;
        isInFreeCancelationZone: boolean;
    };
    fetchCancelationMessage(id: number, roomTypeId: number, booking_nbr?: string, showCancelation?: boolean, data?: IExposedApplicablePolicies[] | null): Promise<{
        message: string;
        data: IExposedApplicablePolicies[];
    }>;
    getBookingPrepaymentAmount(booking: Booking): Promise<{
        amount: number;
        cancelation_message: string;
        guarantee_message: string;
    }>;
    private setUpBooking;
    findClosestDate(data: IBrackets[]): IBrackets;
}
export {};
