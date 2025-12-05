import { z } from 'zod';
import { IAllowedOptions, ICurrency, IPickupCurrency } from './calendarData';
import { TSourceOption } from './igl-book-property';
import { ICountry } from './IBooking';
import { IHouseKeepers } from './housekeeping';
interface IDType {
    code: string;
    description: string;
}
interface IDInfo {
    type: IDType;
    number: string;
}
export interface SharedPerson {
    address: null;
    alternative_email: null;
    cci: null;
    city: null;
    country: ICountry;
    country_id: string;
    country_phone_prefix: null;
    dob: string;
    email: null;
    first_name: string;
    full_name: string;
    id: number;
    id_info: IDInfo;
    is_main?: boolean;
    last_name: string;
    mobile: null;
    nbr_confirmed_bookings: number;
    notes: null;
    password: null;
    subscribe_to_news_letter: null;
}
/**
 * ZIdInfo schema:
 * - `type.code`: Validates a non-empty string must be at least 3 chars.
 *   If empty string or not provided, validation is skipped.
 * - `type.description`: Same pattern for description (but no min length).
 * - `number`: Validates if non-empty string it should be at least 2 chars.
 */
export declare const ZIdInfo: z.ZodObject<{
    type: z.ZodObject<{
        code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
        description: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    number: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
}, "strip", z.ZodTypeAny, {
    number?: string;
    type?: {
        code?: string;
        description?: string;
    };
}, {
    number?: string;
    type?: {
        code?: string;
        description?: string;
    };
}>;
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
export declare const ZSharedPerson: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    first_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    last_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
    country_id: z.ZodOptional<z.ZodNumber>;
    dob: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string>, string, string>;
    id_info: z.ZodOptional<z.ZodObject<{
        type: z.ZodObject<{
            code: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
            description: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        number: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    }, "strip", z.ZodTypeAny, {
        number?: string;
        type?: {
            code?: string;
            description?: string;
        };
    }, {
        number?: string;
        type?: {
            code?: string;
            description?: string;
        };
    }>>;
    is_main: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id?: number;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: string;
    id_info?: {
        number?: string;
        type?: {
            code?: string;
            description?: string;
        };
    };
    is_main?: boolean;
}, {
    id?: number;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: string;
    id_info?: {
        number?: string;
        type?: {
            code?: string;
            description?: string;
        };
    };
    is_main?: boolean;
}>;
export declare function validateSharedPerson(data: any): void;
export interface HandleExposedRoomGuestsRequest {
    booking_nbr: string;
    identifier: string;
    guests: SharedPerson[];
}
export interface OtaGuarantee {
    card_number: string;
    card_type: string;
    cardholder_name: string;
    cvv: string;
    expiration_date: string;
    is_virtual: boolean;
    meta: Meta;
    token: string;
}
interface Meta {
    virtual_card_currency_code: string;
    virtual_card_current_balance: string;
    virtual_card_decimal_places: string;
    virtual_card_effective_date: string;
    virtual_card_expiration_date: string;
}
export interface OtaService {
    name: string;
    nights: number;
    persons: number;
    price_mode: string;
    price_per_unit: number;
    total_price: number;
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
export type OTAManipulations = {
    user: string;
    date: string;
    hour: string;
    minute: string;
};
export type BypassedOtaRevisions = {
    revision_nbr: number;
    date: string;
    revision_type: string;
};
export interface Booking {
    agent: {
        code: string;
        id: number;
        name: string;
        verification_mode: null;
    } | null;
    events: ExposedBookingEvent[];
    company_name: string | null;
    company_tax_nbr: string | null;
    ota_manipulations: OTAManipulations[];
    bypassed_ota_revisions: BypassedOtaRevisions[];
    ota_services: OtaService[];
    is_requested_to_cancel: boolean;
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
    ota_guarante: OtaGuarantee;
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
    financial: IFinancial;
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
    end_date: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    start_date: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    price: z.ZodNumber;
    system_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    cost?: number;
    description?: string;
    booking_system_id?: number;
    currency_id?: number;
    end_date?: string;
    start_date?: string;
    price?: number;
    system_id?: number;
}, {
    cost?: number;
    description?: string;
    booking_system_id?: number;
    currency_id?: number;
    end_date?: string;
    start_date?: string;
    price?: number;
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
export interface IFinancial {
    cancelation_penality_as_if_today: number;
    due_amount: number;
    due_dates: IDueDate[];
    payments: IPayment[] | null;
    total_amount: number;
    collected: number;
    gross_total: number;
    gross_cost: number;
    refunds: number;
    invoice_nbr: string;
    gross_total_with_extras: number;
}
export interface IPayment {
    id: number | null;
    date: string;
    amount: number;
    currency: ICurrency;
    designation: string;
    reference: string;
    book_nbr?: string;
    payment_gateway_code?: number;
    payment_type?: PaymentType;
    payment_method?: PaymentType;
    receipt_nbr?: string;
    is_receipt_issued?: boolean;
    time_stamp: {
        date: string;
        hour: number;
        minute: number;
        second: number;
        user: string;
    };
}
interface PaymentType {
    code: string;
    description: string;
    operation: string;
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
    company_name: string | null;
    company_tax_nbr: string | null;
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
    mobile_without_prefix: string;
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
export interface BookingColor {
    color: string | null;
    design: 'skew';
    name: string | null;
}
export interface Property {
    address: string;
    adult_child_constraints: Adultchildconstraints;
    affiliates: any[];
    agents: Agent[];
    allowed_booking_sources: Allowedbookingsource[];
    allowed_cards: Allowedcard[];
    allowed_payment_methods: AllowedPaymentMethod[];
    amenities: Amenity[];
    aname: string;
    area: string;
    baby_cot_offering: Babycotoffering;
    be_listing_mode: string;
    calendar_extra: CalendarExtra | null;
    calendar_legends: Calendarlegend[];
    city: City;
    cleaning_frequency: Paymentmode;
    contacts: Contact[];
    country: Country;
    currency: Currency;
    description: Description;
    extra_info: Extrainfo[];
    id: number;
    images: Image[];
    internet_offering: Internetoffering;
    is_automatic_check_in_out: boolean;
    is_be_enabled: boolean;
    is_frontdesk_enabled: boolean;
    is_multi_property: boolean;
    is_pms_enabled: boolean;
    is_vacation_rental: boolean;
    location: Location;
    max_nights: number;
    name: string;
    parking_offering: Parkingoffering;
    payment_methods: null;
    perma_link: string;
    pets_acceptance: Petsacceptance;
    phone: string;
    pickup_service: Pickupservice;
    postal: null;
    privacy_policy: string;
    promotions: Promotion[];
    registered_name: string;
    roomtypes: any[];
    social_media: Socialmedia[];
    sources: Paymentmode[];
    space_theme: Spacetheme;
    tags: Extrainfo[];
    tax_nbr: string;
    tax_statement: string;
    taxation_strategy: Paymentmode;
    taxes: Tax[];
    time_constraints: Timeconstraints;
}
interface Timeconstraints {
    booking_cutoff: string;
    check_in_from: string;
    check_in_till: string;
    check_out_till: string;
}
interface Tax {
    is_exlusive: boolean;
    name: string;
    pct: number;
}
interface Spacetheme {
    background_image: string;
    button_bg_color: string;
    button_border_radius: string;
    favicon: string;
    heading_bar_color: string;
    heading_font_color: string;
    logo: string;
    website: string;
}
interface Socialmedia {
    code: string;
    link: string;
    name: string;
}
interface Promotion {
    from: string;
    id: number;
    is_last_minute_discount: boolean;
    is_loyalty: boolean;
    key: string;
    mode: null;
    to: string;
    type: null;
    value: null;
}
interface Pickupservice {
    allowed_locations: Allowedlocation[];
    allowed_options: Allowedoption[];
    allowed_pricing_models: Paymentmode[];
    allowed_vehicle_types: Vehicle[];
    is_enabled: boolean;
    is_not_allowed_on_same_day: boolean;
    pickup_cancelation_prepayment: Paymentmode;
    pickup_instruction: Paymentmode;
}
interface Allowedoption {
    amount: number;
    currency: Currency;
    id: number;
    location: Allowedlocation;
    pricing_model: Paymentmode;
    vehicle: Vehicle;
}
interface Vehicle {
    capacity: number;
    code: string;
    description: string;
}
interface Allowedlocation {
    description: string;
    id: number;
}
interface Petsacceptance {
    title: string;
}
interface Parkingoffering {
    pricing: number;
    schedule: string;
    title: string;
}
interface Location {
    latitude: number;
    longitude: number;
}
interface Internetoffering {
    is_public_internet_free: boolean;
    is_room_internet_free: boolean;
    public_internet_statement: string;
    room_internet_statement: string;
    room_rate_per_24_hour: number;
    room_rate_per_hour: number;
}
interface Image {
    thumbnail: string;
    tooltip: null | string;
    url: string;
}
interface Extrainfo {
    key: string;
    value: string;
}
interface Description {
    food_and_beverage: string;
    important_info: string;
    location_and_intro: string;
    non_standard_conditions: string;
    rooming: string;
}
interface Country {
    cities: null;
    code: null;
    currency: null;
    flag: null;
    gmt_offset: number;
    id: number;
    name: string;
    phone_prefix: string;
}
interface Contact {
    email: string;
    mobile: null;
    name: string;
    phone: string;
    type: string;
}
interface City {
    gmt_offset: number;
    id: number;
    name: string;
}
interface Calendarlegend {
    color: string;
    design: string;
    id: string;
    name: string;
}
interface Babycotoffering {
    rate_per_night: number;
    title: string;
}
interface Amenity {
    amenity_type: string;
    code: string;
    description: string;
}
export interface AllowedPaymentMethod {
    allowed_currencies: null | string;
    code: string;
    data: null;
    description: string;
    display_order: null;
    id: null | number;
    img_url: null | string;
    is_active: boolean;
    is_payment_gateway: boolean;
    localizables: Localizable[] | null;
    property_id: number;
}
interface Localizable {
    code: string;
    description: string;
    id: number;
    language: Language;
}
interface Language {
    code: string;
    culture: null;
    description: string;
    direction: null;
    entries: null;
    flag: null;
    id: number;
}
interface Allowedcard {
    id: number;
    name: string;
}
interface Allowedbookingsource {
    code: string;
    description: string;
    id: string;
    tag: string;
    type: string;
}
interface Agent {
    code: string;
    id: number;
    is_active: boolean;
    name: string;
    payment_mode: Paymentmode;
    verification_mode: string;
}
interface Paymentmode {
    code: string;
    description: string;
}
interface Adultchildconstraints {
    adult_max_nbr: number;
    child_max_age: number;
    child_max_nbr: number;
}
export interface CalendarExtra {
    booking_colors: BookingColor[] | null;
}
export type DepartureTime = {
    code: string;
    description: string;
};
export interface ExposedApplicablePolicy {
    brackets: Bracket[];
    combined_statement: string;
    type: 'cancelation' | 'guarantee';
}
export interface Bracket {
    amount: number;
    amount_formatted: string;
    code: string;
    currency_id: number;
    due_on: string;
    due_on_formatted: null | string;
    gross_amount: number;
    gross_amount_formatted: string;
    statement: string;
}
/**
 * Indicates the guest's **arrival/departure status** for a room.
 *
 * Codes:
 * - `'000'` — **No show** (guest didn't arrive).
 * - `'001'` — **Check-in** (guest has arrived / is occupying the room).
 * - `'002'` — **Check-out** (guest has departed).
 *
 * @property code - Three-digit status code. See codes list above.
 * @property description - Human-readable label for the status (e.g., "Check-in").
 *
 * @remarks
 * - In {@link Room.in_out}, this type may be `null` if the status is unknown or not applicable.
 * - The `description` is intended for display; rely on `code` for logic.
 *
 * @example
 * const arriving: RoomInOut = { code: '001', description: 'Check-in' };
 * const leaving: RoomInOut  = { code: '002', description: 'Check-out' };
 * const noShow: RoomInOut   = { code: '000', description: "Didn't arrive" };
 */
export type RoomInOut = {
    code: '001' | '002' | '000';
    description: string;
};
export interface Room {
    days: Day[];
    applicable_policies: ExposedApplicablePolicy[];
    from_date: string;
    calendar_extra: string;
    parent_room_identifier: string | null;
    is_split: boolean;
    guest: Guest;
    occupancy_default: number;
    notes: string | null;
    occupancy: Occupancy;
    physicalroom: null;
    in_out: RoomInOut | null;
    sharing_persons: SharedPerson[] | null;
    bed_preference: number | null;
    rateplan: RatePlan;
    roomtype: RoomType;
    departure_time: DepartureTime;
    to_date: string;
    total: number;
    smoking_option: string;
    identifier: string;
    unit: string | number | IUnit | null;
    ota_taxes: IOtaTax[];
    ota_meta: OtaMeta;
    cost: number | null;
    gross_cost: number;
    gross_total: number;
    guarantee: number;
    gross_guarantee: number;
}
interface OtaMeta {
    bed_preferences: string | null;
    meal_plan: string | null;
    parent_rate_plan_id: string | null;
    policies: string | null;
    smoking_preferences: string | null;
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
    short_name: string;
    meal_plan: {
        code: string;
        description: string | null;
    } | null;
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
    physicalrooms: PhysicalRoom[];
    rate: number;
    rateplans: null;
    is_active: boolean;
}
export type RoomHkStatus = '001' | '002' | '003' | '004';
export interface PhysicalRoom {
    calendar_cell: null;
    housekeeper: IHouseKeepers;
    id: number;
    is_active: boolean;
    name: string;
    hk_status: RoomHkStatus;
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
export {};
