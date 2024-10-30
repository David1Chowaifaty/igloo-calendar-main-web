import { Booking } from "../../models/booking.dto";
import { IBrackets, IExposedApplicablePolicies } from "../../models/property";
type TExposedApplicablePolicies = {
    data: IExposedApplicablePolicies[];
    amount: number;
    room_type_id?: number;
    rate_plan_id?: number;
};
interface FetchCancelationMessageWithData {
    data: IExposedApplicablePolicies[];
    showCancelation?: boolean;
}
interface FetchCancelationMessageWithoutData {
    id: number;
    roomTypeId: number;
    bookingNbr?: string;
    showCancelation?: boolean;
    data?: null;
}
type FetchCancelationMessageParams = FetchCancelationMessageWithData | FetchCancelationMessageWithoutData;
export type TBookingInfo = {
    statement: string;
    rp_name: string;
    rt_name: string;
};
export declare class PaymentService {
    getExposedCancelationDueAmount(params: {
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
    RequestBookingCancelation(booking_nbr: string): Promise<any>;
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
    processAlicablePolicies(policies: IExposedApplicablePolicies[], book_date: Date): {
        amount: number;
        isInFreeCancelationZone: boolean;
    };
    getCancelationMessage(applicablePolicies: IExposedApplicablePolicies[] | null, showCancelation?: boolean, includeGuarentee?: boolean): {
        message: string;
        data: IExposedApplicablePolicies[];
    };
    fetchCancelationMessage(params: FetchCancelationMessageParams): Promise<{
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
