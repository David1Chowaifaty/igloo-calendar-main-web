import { z } from 'zod';
import { IAllowedOptions, ICurrency, IPickupCurrency } from './calendarData';
import { TSourceOption } from './igl-book-property';
export interface Booking {
    agent: {
        code: string;
        id: number;
        name: string;
        verification_mode: null;
    } | null;
    arrival: Arrival;
    allowed_actions: IAllowedActions[];
    system_id: number;
    booked_on: DateTime;
    booking_nbr: string;
    currency: Currency;
    extra_services: ExtraService[] | null;
    from_date: string;
    guest: Guest;
    extras: Extras[] | null;
    occupancy: Occupancy;
    origin: Origin;
    property: Property;
    remark: string;
    ota_notes: IOtaNotes[];
    rooms: Room[];
    source: Source;
    status: Status;
    to_date: string;
    total: number;
    is_editable: boolean;
    format: IFormat;
    channel_booking_nbr: string | null;
    is_direct: boolean;
    financial: IFinancials;
    pickup_info: IBookingPickupInfo | null;
    cost: number | null;
    is_pms_enabled: boolean;
    promo_key: string | null;
    is_in_loyalty_mode: boolean;
}
export declare const ExtraServiceSchema: z.ZodObject<{
    booking_system_id: z.ZodOptional<z.ZodNumber>;
    cost: z.ZodNullable<z.ZodNumber>;
    currency_id: z.ZodNumber;
    description: z.ZodString;
    end_date: z.ZodNullable<z.ZodString>;
    price: z.ZodNumber;
    start_date: z.ZodNullable<z.ZodString>;
    system_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    description?: string;
    booking_system_id?: number;
    cost?: number;
    currency_id?: number;
    end_date?: string;
    price?: number;
    start_date?: string;
    system_id?: number;
}, {
    description?: string;
    booking_system_id?: number;
    cost?: number;
    currency_id?: number;
    end_date?: string;
    price?: number;
    start_date?: string;
    system_id?: number;
}>;
export type ExtraService = z.infer<typeof ExtraServiceSchema>;
export interface Extras {
    key: string;
    value: any;
}
export interface IOtaNotes {
    statement: string;
}
export interface IBookingPickupInfo {
    currency: IPickupCurrency;
    date: string;
    details: string;
    hour: number;
    minute: number;
    nbr_of_units: number;
    selected_option: IAllowedOptions;
    total: number;
}
export interface IAllowedActions {
    code: string;
    description: string;
}
export interface IFinancials {
    due_amount: number;
    due_dates: IDueDate[];
    payments: IPayment[] | null;
    total_amount: number;
    gross_total: number;
    gross_cost: number;
    invoice_nbr: string;
}
export interface IPayment {
    id: number | null;
    date: string;
    amount: number;
    currency: ICurrency;
    designation: string;
    reference: string;
}
export interface IDueDate {
    amount: number;
    currencysymbol: string;
    date: string;
    description: string;
    room: string;
}
export interface IFormat {
    from_date: string;
    to_date: string;
}
export interface Arrival {
    code: string;
    description: string;
}
export interface DateTime {
    date: string;
    hour: number;
    minute: number;
}
export interface Currency {
    code: string;
    id: number;
    symbol: string;
}
export interface Guest {
    address: string | null;
    city: string | null;
    country_id: number | null;
    dob: string | null;
    email: string | null;
    first_name: string;
    id: number;
    last_name: string | null;
    mobile: string | null;
    country_phone_prefix: string | null;
    subscribe_to_news_letter: boolean | null;
    cci?: ICCI | null;
    alternative_email?: string;
    nbr_confirmed_bookings: number;
    notes: string;
}
export interface ICCI {
    nbr: string | number;
    holder_name: string | number;
    expiry_month: string | number;
    expiry_year: string | number;
    cvc?: string | null;
}
export interface Occupancy {
    adult_nbr: number;
    children_nbr: number;
    infant_nbr: number | null;
}
export interface DoReservationProps {
    assign_units: boolean;
    check_in: boolean;
    is_pms: boolean;
    is_direct: boolean;
    is_in_loyalty_mode: boolean;
    promo_key: string | null;
    extras: any;
    booking: {
        from_date: string;
        to_date: string;
        remark: string | null;
        booking_nbr: string;
        property: {
            id: string | number;
        };
        booked_on: {
            date: string;
            hour: number;
            minute: number;
        };
        source: TSourceOption;
        rooms: Room[];
        currency: string;
        arrival: {
            code: string;
        };
        guest: {
            email: string | null;
            first_name: string;
            last_name: string;
            country_id: string | number | null;
            city: string | null;
            mobile: string;
            phone_prefix: string | null;
            address: string;
            dob: string | null;
            subscribe_to_news_letter: boolean;
            cci: {
                nbr: string;
                holder_name: string;
                expiry_month: string;
                expiry_year: string;
            } | null;
        };
    };
    pickup_info: any | null;
}
export interface Origin {
    Icon: string;
    Label: string;
}
export interface Property {
    calendar_legends: null;
    currency: null;
    id: number;
    name: string;
    roomtypes: null;
}
export interface Room {
    days: Day[];
    from_date: string;
    guest: Guest;
    occupancy_default: number;
    notes: string | null;
    occupancy: Occupancy;
    physicalroom: null;
    bed_preference: number | null;
    rateplan: RatePlan;
    roomtype: RoomType;
    to_date: string;
    total: number;
    identifier: string;
    unit: string | number | IUnit | null;
    ota_taxes: IOtaTax[];
    cost: number | null;
    gross_cost: number;
    gross_total: number;
    guarantee: number;
    gross_guarantee: number;
}
export interface IOtaTax {
    amount: number;
    currency: IOtaTaxCurrency;
    is_exlusive: boolean;
    name: string;
}
export interface IOtaTaxCurrency {
    code: string;
    id: number;
    symbol: string;
}
export interface IUnit {
    calendar_cell: null;
    id: 2;
    name: '402';
}
export interface Day {
    amount: number;
    date: string;
    cost: number | null;
}
export interface RatePlan {
    cancelation: string | null;
    guarantee: null;
    id: number;
    name: string;
    rate_restrictions: null;
    variations: null;
    selected_variation: IVariations;
    is_non_refundable: boolean;
    custom_text: string | null;
    is_active: boolean;
}
export interface IVariations {
    adult_child_offering: string;
    adult_nbr: number;
    amount: number | null;
    child_nbr: number;
}
export interface RoomType {
    availabilities: null;
    id: number;
    inventory: number;
    name: string;
    physicalrooms: null;
    rate: number;
    rateplans: null;
    is_active: boolean;
}
export interface Source {
    code: string | null;
    description: string;
    tag: string | null;
}
export interface Status {
    code: string;
    description: string;
}
export interface IPmsLog {
    is_acknowledged: boolean;
    is_sent: boolean;
    sent_date: string;
    sent_hour: number;
    sent_minute: number;
}
