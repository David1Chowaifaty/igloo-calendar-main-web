import { ExposedApplicablePolicy, ExposedBookingEvent, HandleExposedRoomGuestsRequest } from './../models/booking.dto';
import { BookingDetails, IBlockUnit, ICountry, IEntries, ISetupEntries } from '../models/IBooking';
import { Booking, ExtraService, Guest, IBookingPickupInfo, IPmsLog, RoomInOut } from '../models/booking.dto';
import { PaymentEntries } from "../components/ir-booking-details/types";
import { BookingInvoiceInfo } from "../components/ir-invoice/types";
export interface IBookingParams {
    bookedByInfoData: any;
    check_in: boolean;
    fromDate: Date;
    toDate: Date;
    guestData: any;
    totalNights: number;
    source: {
        code: string;
        description: string;
    };
    propertyid: number;
    rooms: any[];
    currency: {
        id: number;
        code: string;
    };
    pickup_info: IBookingPickupInfo | null;
    bookingNumber?: string;
    defaultGuest?: any;
    arrivalTime?: any;
    pr_id?: number;
    identifier?: string;
    extras: {
        key: string;
        value: string;
    }[] | null;
}
export type TableEntries = '_CALENDAR_BLOCKED_TILL' | '_DEPARTURE_TIME' | '_ARRIVAL_TIME' | '_RATE_PRICING_MODE' | '_BED_PREFERENCE_TYPE' | '_PAY_TYPE' | '_PAY_TYPE_GROUP' | '_PAY_METHOD' | (string & {});
export type GroupedTableEntries = {
    [K in TableEntries as K extends `_${infer Rest}` ? Lowercase<Rest> : never]: IEntries[];
};
/**
 * Builds a grouped payment types record from raw entries and groups.
 *
 * @param paymentEntries - The flat list of all available payment  entries.
 * @returns A record where each key is a group CODE_NAME and the value is the
 *          ordered array of payment type entries belonging to that group.
 *
 * @example
 * const result = buildPaymentTypes(paymentEntries);
 * // {
 * //   PAYMENTS: [ { CODE_NAME: "001", CODE_VALUE_EN: "Cash", ... }, ... ],
 * //   ADJUSTMENTS: [ ... ],
 * //   ...
 * // }
 */
export declare function buildPaymentTypes(paymentEntries: PaymentEntries): Record<string, IEntries[]>;
export declare class BookingService {
    unBlockUnitByPeriod(props: {
        unit_id: number;
        from_date: string;
        to_date: string;
    }): Promise<any>;
    getNextValue(props: {
        starter: string;
    }): Promise<any>;
    getExposedApplicablePolicies(props: {
        booking_nbr: string;
        currency_id: number;
        language?: string;
        rate_plan_id: number;
        room_type_id: number;
        property_id: number;
        is_preserve_history?: boolean;
        room_identifier?: string;
    }): Promise<ExposedApplicablePolicy[] | null>;
    handleExposedRoomInOut(props: {
        booking_nbr: string;
        room_identifier: string;
        status: RoomInOut['code'];
    }): Promise<any>;
    GetPenaltyStatement(params: {
        booking_nbr: string;
        currency_id: number;
        language: string;
    }): Promise<any>;
    setExposedRestrictionPerRoomType(params: {
        is_closed: boolean;
        restrictions: {
            room_type_id: number | string;
            night: string;
        }[];
        operation_type?: string;
    }): Promise<any>;
    getLov(): Promise<any>;
    sendBookingConfirmationEmail(booking_nbr: string, language: string): Promise<any>;
    getCalendarData(propertyid: number, from_date: string, to_date: string): Promise<{
        [key: string]: any;
    }>;
    handleExposedRoomGuests(props: HandleExposedRoomGuestsRequest): Promise<any>;
    fetchGuest(email: string): Promise<Guest>;
    changeExposedBookingStatus(props: {
        book_nbr: string;
        status: string;
    }): Promise<any>;
    fetchPMSLogs(booking_nbr: string | number): Promise<IPmsLog>;
    getExposedBookingEvents(booking_nbr: string | number): Promise<ExposedBookingEvent[] | null>;
    editExposedGuest(guest: Guest, book_nbr: string): Promise<any>;
    getBookingInvoiceInfo(props: {
        booking_nbr: string;
    }): Promise<BookingInvoiceInfo>;
    getBookingAvailability(props: {
        from_date: string;
        to_date: string;
        propertyid: number;
        adultChildCount: {
            adult: number;
            child: number;
        };
        language: string;
        room_type_ids: number[];
        room_type_ids_to_update?: number[];
        rate_plan_ids?: number[];
        currency: {
            id: number;
            code: string;
        };
        is_in_agent_mode?: boolean;
        agent_id?: string | number;
    }): Promise<BookingDetails>;
    private sortRoomTypes;
    private modifyRateplans;
    private sortVariations;
    getCountries(language: string): Promise<ICountry[]>;
    getSetupEntriesByTableName(TBL_NAME: string): Promise<IEntries[]>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    doBookingExtraService({ booking_nbr, service, is_remove }: {
        service: ExtraService;
        booking_nbr: number | string;
        is_remove: boolean;
    }): Promise<any>;
    groupEntryTablesResult(entries: IEntries[]): GroupedTableEntries;
    getSetupEntriesByTableNameMulti(entries: TableEntries[]): Promise<IEntries[]>;
    getBlockedInfo(): Promise<IEntries[]>;
    getUserDefaultCountry(): Promise<any>;
    blockUnit(params: IBlockUnit): Promise<any>;
    blockAvailabilityForBrackets(params: {
        unit_id: number;
        block_status_code?: '003' | '004' | '002';
        description?: string;
        property_id: number;
        brackets: {
            from_date: string;
            to_date: string;
        }[];
    }): Promise<any>;
    setDepartureTime(params: {
        property_id: number;
        room_identifier: string;
        code: string;
    }): Promise<any>;
    getUserInfo(email: string): Promise<any>;
    getExposedBooking(booking_nbr: string, language: string, withExtras?: boolean): Promise<Booking>;
    private generateDays;
    private calculateTotalRate;
    fetchExposedGuest(email: string, property_id: number): Promise<any>;
    fetchExposedBookings(booking_nbr: string, property_id: number, from_date: string, to_date: string): Promise<any>;
    getPCICardInfoURL(BOOK_NBR: string): Promise<any>;
    doReservation(body: any): Promise<any>;
    bookUser({ bookedByInfoData, check_in, currency, extras, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }: IBookingParams): Promise<void>;
}
