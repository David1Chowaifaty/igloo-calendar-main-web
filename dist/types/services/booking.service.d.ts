import { HandleExposedRoomGuestsRequest } from './../models/booking.dto';
import { BookingDetails, IBlockUnit, ICountry, IEntries, ISetupEntries } from '../models/IBooking';
import { Booking, ExtraService, Guest, IBookingPickupInfo, IPmsLog, RoomInOut } from '../models/booking.dto';
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
export interface ExposedBookingEvent {
    date: string;
    hour: number;
    id: number;
    minute: number;
    second: number;
    user: string;
    type: string;
}
export declare class BookingService {
    handleExposedRoomInOut(props: {
        booking_nbr: string;
        room_identifier: string;
        status: RoomInOut['code'];
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
    getBlockedInfo(): Promise<IEntries[]>;
    getUserDefaultCountry(): Promise<any>;
    blockUnit(params: IBlockUnit): Promise<any>;
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
