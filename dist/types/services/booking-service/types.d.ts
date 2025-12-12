import * as z from 'zod';
import { Booking, IBookingPickupInfo, RoomInOut } from "../../models/booking.dto";
import { IEntries } from "../../models/IBooking";
export declare const CurrencySchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id?: number;
}, {
    id?: number;
}>;
export type Currency = z.infer<typeof CurrencySchema>;
export declare const CurrencyWithCodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
}, {
    code: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id?: number;
    code?: string;
}, {
    id?: number;
    code?: string;
}>;
export type CurrencyWithCode = z.infer<typeof CurrencyWithCodeSchema>;
export declare const ItemSchema: z.ZodObject<{
    amount: z.ZodNumber;
    type: z.ZodOptional<z.ZodString>;
    key: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
    description: z.ZodDefault<z.ZodOptional<z.ZodOptional<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    key?: string | number;
    amount?: number;
    type?: string;
    description?: string;
}, {
    key?: string | number;
    amount?: number;
    type?: string;
    description?: string;
}>;
export type Item = z.infer<typeof ItemSchema>;
export declare const TargetSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code?: string;
    description?: string;
}, {
    code?: string;
    description?: string;
}>;
export type Target = z.infer<typeof TargetSchema>;
export declare const UnblockUnitByPeriodPropsSchema: z.ZodObject<{
    unit_id: z.ZodNumber;
    from_date: z.ZodOptional<z.ZodString>;
    to_date: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    from_date?: string;
    to_date?: string;
    unit_id?: number;
}, {
    from_date?: string;
    to_date?: string;
    unit_id?: number;
}>;
export type UnblockUnitByPeriodProps = z.infer<typeof UnblockUnitByPeriodPropsSchema>;
export declare const GetNextValuePropsSchema: z.ZodObject<{
    starter: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    starter?: string;
}, {
    starter?: string;
}>;
export type GetNextValueProps = z.infer<typeof GetNextValuePropsSchema>;
export declare const GetExposedApplicablePoliciesPropsSchema: z.ZodObject<{
    booking_nbr: z.ZodOptional<z.ZodString>;
    currency_id: z.ZodNumber;
    language: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    rate_plan_id: z.ZodNumber;
    room_type_id: z.ZodNumber;
    property_id: z.ZodNumber;
    is_preserve_history: z.ZodOptional<z.ZodBoolean>;
    room_identifier: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    currency_id?: number;
    booking_nbr?: string;
    language?: string;
    rate_plan_id?: number;
    room_type_id?: number;
    is_preserve_history?: boolean;
    room_identifier?: string;
}, {
    property_id?: number;
    currency_id?: number;
    booking_nbr?: string;
    language?: string;
    rate_plan_id?: number;
    room_type_id?: number;
    is_preserve_history?: boolean;
    room_identifier?: string;
}>;
export type GetExposedApplicablePoliciesProps = z.infer<typeof GetExposedApplicablePoliciesPropsSchema>;
export declare const HandleExposedRoomInOutPropsSchema: z.ZodObject<{
    booking_nbr: z.ZodOptional<z.ZodString>;
    room_identifier: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: string;
    booking_nbr?: string;
    room_identifier?: string;
}, {
    status?: string;
    booking_nbr?: string;
    room_identifier?: string;
}>;
export type HandleExposedRoomInOutProps = z.infer<typeof HandleExposedRoomInOutPropsSchema> & {
    status: RoomInOut['code'];
};
export declare const GetPenaltyStatementPropsSchema: z.ZodObject<{
    booking_nbr: z.ZodOptional<z.ZodString>;
    currency_id: z.ZodNumber;
    language: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currency_id?: number;
    booking_nbr?: string;
    language?: string;
}, {
    currency_id?: number;
    booking_nbr?: string;
    language?: string;
}>;
export type GetPenaltyStatementProps = z.infer<typeof GetPenaltyStatementPropsSchema>;
export declare const SetExposedRestrictionPerRoomTypePropsSchema: z.ZodObject<{
    is_closed: z.ZodBoolean;
    restrictions: z.ZodArray<z.ZodObject<{
        room_type_id: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
        night: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        room_type_id?: string | number;
        night?: string;
    }, {
        room_type_id?: string | number;
        night?: string;
    }>, "many">;
    operation_type: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    is_closed?: boolean;
    restrictions?: {
        room_type_id?: string | number;
        night?: string;
    }[];
    operation_type?: string;
}, {
    is_closed?: boolean;
    restrictions?: {
        room_type_id?: string | number;
        night?: string;
    }[];
    operation_type?: string;
}>;
export type SetExposedRestrictionPerRoomTypeProps = z.infer<typeof SetExposedRestrictionPerRoomTypePropsSchema>;
export declare const ChangeExposedBookingStatusPropsSchema: z.ZodObject<{
    book_nbr: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    book_nbr?: string;
    status?: string;
}, {
    book_nbr?: string;
    status?: string;
}>;
export type ChangeExposedBookingStatusProps = z.infer<typeof ChangeExposedBookingStatusPropsSchema>;
export declare const GetBookingAvailabilityPropsSchema: z.ZodObject<{
    from_date: z.ZodOptional<z.ZodString>;
    to_date: z.ZodOptional<z.ZodString>;
    propertyid: z.ZodNumber;
    adultChildCount: z.ZodObject<{
        adult: z.ZodNumber;
        child: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        adult?: number;
        child?: number;
    }, {
        adult?: number;
        child?: number;
    }>;
    language: z.ZodOptional<z.ZodString>;
    room_type_ids: z.ZodArray<z.ZodNumber, "many">;
    room_type_ids_to_update: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    rate_plan_ids: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    currency: z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
    }, {
        code: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        id?: number;
        code?: string;
    }, {
        id?: number;
        code?: string;
    }>;
    is_in_agent_mode: z.ZodOptional<z.ZodBoolean>;
    agent_id: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>>;
}, "strip", z.ZodTypeAny, {
    currency?: {
        id?: number;
        code?: string;
    };
    from_date?: string;
    to_date?: string;
    language?: string;
    propertyid?: number;
    adultChildCount?: {
        adult?: number;
        child?: number;
    };
    room_type_ids?: number[];
    room_type_ids_to_update?: number[];
    rate_plan_ids?: number[];
    is_in_agent_mode?: boolean;
    agent_id?: string | number;
}, {
    currency?: {
        id?: number;
        code?: string;
    };
    from_date?: string;
    to_date?: string;
    language?: string;
    propertyid?: number;
    adultChildCount?: {
        adult?: number;
        child?: number;
    };
    room_type_ids?: number[];
    room_type_ids_to_update?: number[];
    rate_plan_ids?: number[];
    is_in_agent_mode?: boolean;
    agent_id?: string | number;
}>;
export type GetBookingAvailabilityProps = z.infer<typeof GetBookingAvailabilityPropsSchema>;
export declare const BlockAvailabilityForBracketsPropsSchema: z.ZodObject<{
    unit_id: z.ZodNumber;
    block_status_code: z.ZodOptional<z.ZodEnum<["003", "004", "002"]>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    property_id: z.ZodNumber;
    brackets: z.ZodArray<z.ZodObject<{
        from_date: z.ZodOptional<z.ZodString>;
        to_date: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        from_date?: string;
        to_date?: string;
    }, {
        from_date?: string;
        to_date?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    description?: string;
    unit_id?: number;
    block_status_code?: "004" | "003" | "002";
    brackets?: {
        from_date?: string;
        to_date?: string;
    }[];
}, {
    property_id?: number;
    description?: string;
    unit_id?: number;
    block_status_code?: "004" | "003" | "002";
    brackets?: {
        from_date?: string;
        to_date?: string;
    }[];
}>;
export type BlockAvailabilityForBracketsProps = z.infer<typeof BlockAvailabilityForBracketsPropsSchema>;
export declare const SetDepartureTimePropsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    room_identifier: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    code?: string;
    room_identifier?: string;
}, {
    property_id?: number;
    code?: string;
    room_identifier?: string;
}>;
export type SetDepartureTimeProps = z.infer<typeof SetDepartureTimePropsSchema>;
export declare const DoBookingExtraServicePropsSchema: z.ZodObject<{
    service: z.ZodType<{
        cost?: number;
        system_id?: number;
        description?: string;
        booking_system_id?: number;
        currency_id?: number;
        end_date?: string;
        start_date?: string;
        price?: number;
    }, z.ZodTypeDef, {
        cost?: number;
        system_id?: number;
        description?: string;
        booking_system_id?: number;
        currency_id?: number;
        end_date?: string;
        start_date?: string;
        price?: number;
    }>;
    booking_nbr: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
    is_remove: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    booking_nbr?: string | number;
    service?: {
        cost?: number;
        system_id?: number;
        description?: string;
        booking_system_id?: number;
        currency_id?: number;
        end_date?: string;
        start_date?: string;
        price?: number;
    };
    is_remove?: boolean;
}, {
    booking_nbr?: string | number;
    service?: {
        cost?: number;
        system_id?: number;
        description?: string;
        booking_system_id?: number;
        currency_id?: number;
        end_date?: string;
        start_date?: string;
        price?: number;
    };
    is_remove?: boolean;
}>;
export type DoBookingExtraServiceProps = z.infer<typeof DoBookingExtraServicePropsSchema>;
export interface IBookingProps {
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
export type TableEntries = '_CALENDAR_BLOCKED_TILL' | '_DEPARTURE_TIME' | '_ARRIVAL_TIME' | '_RATE_PRICING_MODE' | '_BED_PREFERENCE_TYPE' | '_PAY_TYPE' | '_PAY_TYPE_GROUP' | '_PAY_METHOD' | '_INVOICE_TARGET' | (string & {});
export type GroupedTableEntries = {
    [K in TableEntries as K extends `_${infer Rest}` ? Lowercase<Rest> : never]: IEntries[];
};
export declare const GetRoomsToCheckInPropsSchema: z.ZodObject<{
    property_id: z.ZodString;
    check_in_date: z.ZodString;
    page_index: z.ZodDefault<z.ZodNumber>;
    page_size: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    property_id?: string;
    check_in_date?: string;
    page_index?: number;
    page_size?: number;
}, {
    property_id?: string;
    check_in_date?: string;
    page_index?: number;
    page_size?: number;
}>;
export type GetRoomsToCheckInProps = z.infer<typeof GetRoomsToCheckInPropsSchema>;
export declare const GetRoomsToCheckOutPropsSchema: z.ZodObject<{
    property_id: z.ZodString;
    check_out_date: z.ZodString;
    page_index: z.ZodDefault<z.ZodNumber>;
    page_size: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    property_id?: string;
    page_index?: number;
    page_size?: number;
    check_out_date?: string;
}, {
    property_id?: string;
    page_index?: number;
    page_size?: number;
    check_out_date?: string;
}>;
export type GetRoomsToCheckOutProps = z.infer<typeof GetRoomsToCheckOutPropsSchema>;
export interface RoomsToProcessResult {
    bookings: Booking[];
    total_count: number;
}
export declare const GetBookingInvoiceInfoPropsSchema: z.ZodObject<{
    booking_nbr: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    booking_nbr?: string;
}, {
    booking_nbr?: string;
}>;
export type GetBookingInvoiceInfoProps = z.infer<typeof GetBookingInvoiceInfoPropsSchema>;
export declare const VoidInvoicePropsSchema: z.ZodObject<{
    invoice_nbr: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    invoice_nbr?: string;
    reason?: string;
}, {
    invoice_nbr?: string;
    reason?: string;
}>;
export declare const InvoiceSchema: z.ZodObject<{
    booking_nbr: z.ZodOptional<z.ZodString>;
    currency: z.ZodObject<{
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id?: number;
    }, {
        id?: number;
    }>;
    target: z.ZodObject<{
        code: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code?: string;
        description?: string;
    }, {
        code?: string;
        description?: string;
    }>;
    Date: z.ZodOptional<z.ZodString>;
    nbr: z.ZodOptional<z.ZodString>;
    remark: z.ZodOptional<z.ZodString>;
    billed_to_name: z.ZodOptional<z.ZodString>;
    billed_to_tax: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        amount: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
        key: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
        description: z.ZodDefault<z.ZodOptional<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        key?: string | number;
        amount?: number;
        type?: string;
        description?: string;
    }, {
        key?: string | number;
        amount?: number;
        type?: string;
        description?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    currency?: {
        id?: number;
    };
    booking_nbr?: string;
    target?: {
        code?: string;
        description?: string;
    };
    Date?: string;
    nbr?: string;
    remark?: string;
    billed_to_name?: string;
    billed_to_tax?: string;
    items?: {
        key?: string | number;
        amount?: number;
        type?: string;
        description?: string;
    }[];
}, {
    currency?: {
        id?: number;
    };
    booking_nbr?: string;
    target?: {
        code?: string;
        description?: string;
    };
    Date?: string;
    nbr?: string;
    remark?: string;
    billed_to_name?: string;
    billed_to_tax?: string;
    items?: {
        key?: string | number;
        amount?: number;
        type?: string;
        description?: string;
    }[];
}>;
export type Invoice = z.infer<typeof InvoiceSchema>;
export declare const IssueInvoicePropsSchema: z.ZodObject<{
    is_proforma: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    invoice: z.ZodObject<{
        booking_nbr: z.ZodOptional<z.ZodString>;
        currency: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
        }, {
            id?: number;
        }>;
        target: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        Date: z.ZodOptional<z.ZodString>;
        nbr: z.ZodOptional<z.ZodString>;
        remark: z.ZodOptional<z.ZodString>;
        billed_to_name: z.ZodOptional<z.ZodString>;
        billed_to_tax: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            amount: z.ZodNumber;
            type: z.ZodOptional<z.ZodString>;
            key: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
            description: z.ZodDefault<z.ZodOptional<z.ZodOptional<z.ZodString>>>;
        }, "strip", z.ZodTypeAny, {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }, {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    }, {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    invoice?: {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    };
    is_proforma?: boolean;
}, {
    invoice?: {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    };
    is_proforma?: boolean;
}>;
export type IssueInvoiceProps = z.infer<typeof IssueInvoicePropsSchema>;
export type VoidInvoiceProps = z.infer<typeof VoidInvoicePropsSchema>;
export declare const PrintInvoicePropsSchema: z.ZodObject<{
    invoice_nbr: z.ZodOptional<z.ZodString>;
    mode: z.ZodEnum<["invoice", "creditnote", "proforma"]>;
    invoice: z.ZodOptional<z.ZodObject<{
        booking_nbr: z.ZodOptional<z.ZodString>;
        currency: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
        }, {
            id?: number;
        }>;
        target: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string;
            description?: string;
        }, {
            code?: string;
            description?: string;
        }>;
        Date: z.ZodOptional<z.ZodString>;
        nbr: z.ZodOptional<z.ZodString>;
        remark: z.ZodOptional<z.ZodString>;
        billed_to_name: z.ZodOptional<z.ZodString>;
        billed_to_tax: z.ZodOptional<z.ZodString>;
        items: z.ZodArray<z.ZodObject<{
            amount: z.ZodNumber;
            type: z.ZodOptional<z.ZodString>;
            key: z.ZodUnion<[z.ZodNumber, z.ZodOptional<z.ZodString>]>;
            description: z.ZodDefault<z.ZodOptional<z.ZodOptional<z.ZodString>>>;
        }, "strip", z.ZodTypeAny, {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }, {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    }, {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    }>>;
}, "strip", z.ZodTypeAny, {
    invoice?: {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    };
    invoice_nbr?: string;
    mode?: "invoice" | "proforma" | "creditnote";
}, {
    invoice?: {
        currency?: {
            id?: number;
        };
        booking_nbr?: string;
        target?: {
            code?: string;
            description?: string;
        };
        Date?: string;
        nbr?: string;
        remark?: string;
        billed_to_name?: string;
        billed_to_tax?: string;
        items?: {
            key?: string | number;
            amount?: number;
            type?: string;
            description?: string;
        }[];
    };
    invoice_nbr?: string;
    mode?: "invoice" | "proforma" | "creditnote";
}>;
export type PrintInvoiceProps = z.infer<typeof PrintInvoicePropsSchema>;
export declare const ExposedGuestSchema: z.ZodObject<{
    address: z.ZodNull;
    alternative_email: z.ZodNull;
    cci: z.ZodNull;
    city: z.ZodNull;
    country: z.ZodNull;
    country_id: z.ZodNumber;
    country_phone_prefix: z.ZodString;
    dob: z.ZodNull;
    email: z.ZodString;
    first_name: z.ZodString;
    id: z.ZodNumber;
    id_info: z.ZodNull;
    is_main: z.ZodBoolean;
    last_name: z.ZodString;
    mobile: z.ZodString;
    mobile_without_prefix: z.ZodString;
    nbr_confirmed_bookings: z.ZodNumber;
    notes: z.ZodNull;
    password: z.ZodNull;
    subscribe_to_news_letter: z.ZodNull;
}, "strip", z.ZodTypeAny, {
    email?: string;
    id?: number;
    mobile?: string;
    password?: null;
    notes?: null;
    address?: null;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: null;
    id_info?: null;
    is_main?: boolean;
    alternative_email?: null;
    cci?: null;
    city?: null;
    country?: null;
    country_phone_prefix?: string;
    mobile_without_prefix?: string;
    nbr_confirmed_bookings?: number;
    subscribe_to_news_letter?: null;
}, {
    email?: string;
    id?: number;
    mobile?: string;
    password?: null;
    notes?: null;
    address?: null;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: null;
    id_info?: null;
    is_main?: boolean;
    alternative_email?: null;
    cci?: null;
    city?: null;
    country?: null;
    country_phone_prefix?: string;
    mobile_without_prefix?: string;
    nbr_confirmed_bookings?: number;
    subscribe_to_news_letter?: null;
}>;
export type ExposedGuest = z.infer<typeof ExposedGuestSchema>;
export declare const ExposedGuestsSchema: z.ZodArray<z.ZodObject<{
    address: z.ZodNull;
    alternative_email: z.ZodNull;
    cci: z.ZodNull;
    city: z.ZodNull;
    country: z.ZodNull;
    country_id: z.ZodNumber;
    country_phone_prefix: z.ZodString;
    dob: z.ZodNull;
    email: z.ZodString;
    first_name: z.ZodString;
    id: z.ZodNumber;
    id_info: z.ZodNull;
    is_main: z.ZodBoolean;
    last_name: z.ZodString;
    mobile: z.ZodString;
    mobile_without_prefix: z.ZodString;
    nbr_confirmed_bookings: z.ZodNumber;
    notes: z.ZodNull;
    password: z.ZodNull;
    subscribe_to_news_letter: z.ZodNull;
}, "strip", z.ZodTypeAny, {
    email?: string;
    id?: number;
    mobile?: string;
    password?: null;
    notes?: null;
    address?: null;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: null;
    id_info?: null;
    is_main?: boolean;
    alternative_email?: null;
    cci?: null;
    city?: null;
    country?: null;
    country_phone_prefix?: string;
    mobile_without_prefix?: string;
    nbr_confirmed_bookings?: number;
    subscribe_to_news_letter?: null;
}, {
    email?: string;
    id?: number;
    mobile?: string;
    password?: null;
    notes?: null;
    address?: null;
    first_name?: string;
    last_name?: string;
    country_id?: number;
    dob?: null;
    id_info?: null;
    is_main?: boolean;
    alternative_email?: null;
    cci?: null;
    city?: null;
    country?: null;
    country_phone_prefix?: string;
    mobile_without_prefix?: string;
    nbr_confirmed_bookings?: number;
    subscribe_to_news_letter?: null;
}>, "many">;
export type ExposedGuests = z.infer<typeof ExposedGuestsSchema>;
