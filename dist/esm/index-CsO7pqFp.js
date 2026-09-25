import { c as createStore } from './locales.store-CXJn6ls-.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { L as LanguageSchema, P as PropertyIdSchema, B as BookingNumberSchema, D as DateSchema } from './commonSchemas-Cx9w9d8l.js';
import { o as objectType, s as stringType, b as booleanType, n as numberType, d as arrayType, u as unionType } from './types-CB66a07H.js';
import { n as isPrivilegedUser, e as extras } from './utils-CKFOUZvS.js';
import { a as axios } from './axios-B50ozOIF.js';

// ---------------------------------------------------------------------------
// Exposed bookings criteria (Get_Exposed_Bookings_Criteria)
// ---------------------------------------------------------------------------
const GetExposedBookingsCriteriaParamsSchema = LanguageSchema.extend({
    // null for privileged users (criteria across all properties)
    property_id: PropertyIdSchema.nullable(),
});
const CriteriaChannelSchema = objectType({
    is_direct: booleanType(),
    name: stringType(),
    value: stringType(),
});
const CriteriaIdentifierSchema = objectType({
    code: stringType(),
    name: stringType(),
});
const SettlementMethodSchema = CriteriaIdentifierSchema;
const CriteriaStatusSchema = CriteriaIdentifierSchema;
const CriteriaTypeSchema = objectType({
    id: numberType(),
    name: stringType(),
});
const BalanceFilterSchema = objectType({
    name: stringType(),
    value: stringType(),
});
objectType({
    channels: arrayType(CriteriaChannelSchema),
    settlement_methods: arrayType(SettlementMethodSchema),
    statuses: arrayType(CriteriaStatusSchema),
    types: arrayType(CriteriaTypeSchema),
    balance_filter: arrayType(BalanceFilterSchema),
});
// ---------------------------------------------------------------------------
// Exposed bookings (Get_Exposed_Bookings)
// ---------------------------------------------------------------------------
const ExposedBookingsParamsSchema = LanguageSchema.extend({
    channel: stringType(),
    // These are null in your initialState, so allow nulls
    property_id: PropertyIdSchema.nullable(),
    balance_filter: stringType().nullable(),
    filter_type: unionType([numberType(), stringType()]).nullable(),
    // null when searching by name / booking number regardless of dates (ir-pms-search)
    from: DateSchema.nullable(),
    to: DateSchema.nullable(),
    name: stringType().nullable(),
    book_nbr: BookingNumberSchema.nullable(),
    booking_status: stringType(),
    userTypeCode: numberType().optional(),
    // In the interface these were literal 0/false, but you treat them like values.
    affiliate_id: numberType().int().default(0),
    is_mpo_managed: booleanType().default(false),
    is_mpo_used: booleanType().default(false),
    is_for_mobile: booleanType().default(false),
    is_combined_view: booleanType().default(false),
    start_row: numberType().int(),
    end_row: numberType().int(),
    total_count: numberType().int(),
    is_to_export: booleanType(),
    property_ids: arrayType(PropertyIdSchema).nullable().optional(),
});
objectType({
    /** Append results to the stored bookings instead of replacing them (infinite scroll). */
    append: booleanType().optional(),
    /** Return the results without touching the booking listing store. */
    skipStore: booleanType().optional(),
});
objectType({
    total_count: numberType(),
    exported_data_url: stringType().nullable(),
});
// ---------------------------------------------------------------------------
// Remove exposed booking (Remove_Exposed_Booking)
// ---------------------------------------------------------------------------
const RemoveExposedBookingParamsSchema = objectType({
    booking_nbr: BookingNumberSchema,
    is_to_revover: booleanType(),
});

const initialState = {
    channels: [],
    settlement_methods: [],
    statuses: [],
    types: [],
    ApiClient: '',
    rowCount: 10,
    bookings: [],
    balance_filter: [],
    pagination: {
        currentPage: 1,
        totalPages: 0,
        totalRecords: 0,
        pageSize: 10,
        showing: {
            from: 0,
            to: 0,
        },
    },
    userSelection: {
        from: hooks().add(-7, 'days').format('YYYY-MM-DD'),
        to: hooks().format('YYYY-MM-DD'),
        channel: '',
        balance_filter: null,
        property_id: null,
        start_row: 0,
        end_row: 20,
        total_count: 0,
        filter_type: null,
        name: '',
        book_nbr: '',
        booking_status: '',
        affiliate_id: 0,
        is_mpo_managed: false,
        is_mpo_used: false,
        is_for_mobile: false,
        is_combined_view: false,
        is_to_export: false,
    },
    download_url: null,
};
const { state: booking_listing, onChange: onBookingListingChange } = createStore(initialState);
function initializeUserSelection() {
    //booking_listing.channels[0].name
    booking_listing.userSelection = {
        ...booking_listing.userSelection,
        channel: '',
        booking_status: booking_listing.statuses[0].code,
        filter_type: booking_listing.types[0].id,
        book_nbr: '',
        name: '',
        from: hooks().add(-7, 'days').format('YYYY-MM-DD'),
        to: hooks().format('YYYY-MM-DD'),
        start_row: 0,
        end_row: booking_listing.rowCount,
        balance_filter: booking_listing.balance_filter[0].value,
    };
}
function updateUserSelections(params) {
    booking_listing.userSelection = {
        ...booking_listing.userSelection,
        ...params,
    };
}
function updateUserSelection(key, value) {
    booking_listing.userSelection = {
        ...booking_listing.userSelection,
        [key]: value,
    };
}
const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};
const calculateShowing = (page, pageSize, totalRecords) => {
    if (totalRecords === 0) {
        return { from: 0, to: 0 };
    }
    const startRow = (page - 1) * pageSize;
    return {
        from: startRow + 1,
        to: Math.min(startRow + pageSize, totalRecords),
    };
};
const calculateTotalPages = (totalRecords, pageSize) => {
    if (totalRecords === 0) {
        return 0;
    }
    return Math.ceil(totalRecords / pageSize);
};
const getRowBounds = (page, pageSize) => {
    const startRow = (page - 1) * pageSize;
    return {
        startRow,
        endRow: startRow + pageSize,
    };
};
function updatePaginationFromSelection(selection) {
    const nextPageSize = selection.end_row - selection.start_row || booking_listing.pagination.pageSize || booking_listing.rowCount;
    const totalRecords = selection.total_count;
    const totalPages = calculateTotalPages(totalRecords, nextPageSize);
    const currentPage = totalPages === 0 ? 1 : Math.floor(selection.start_row / nextPageSize) + 1;
    booking_listing.rowCount = nextPageSize;
    booking_listing.pagination = {
        ...booking_listing.pagination,
        pageSize: nextPageSize,
        currentPage,
        totalPages,
        totalRecords,
        showing: calculateShowing(currentPage, nextPageSize, totalRecords),
    };
}
function setPaginationPage(page) {
    const pageSize = booking_listing.pagination.pageSize || booking_listing.rowCount;
    const totalPages = booking_listing.pagination.totalPages || Math.max(calculateTotalPages(booking_listing.pagination.totalRecords, pageSize), 1);
    const nextPage = clamp(page, 1, Math.max(totalPages, 1));
    const { startRow, endRow } = getRowBounds(nextPage, pageSize);
    updateUserSelections({
        start_row: startRow,
        end_row: endRow,
    });
    booking_listing.pagination = {
        ...booking_listing.pagination,
        currentPage: nextPage,
        showing: calculateShowing(nextPage, pageSize, booking_listing.pagination.totalRecords),
    };
    return { startRow, endRow };
}
function setPaginationPageSize(pageSize) {
    const normalizedPageSize = Math.max(pageSize, 1);
    booking_listing.rowCount = normalizedPageSize;
    const totalRecords = booking_listing.pagination.totalRecords;
    const totalPages = calculateTotalPages(totalRecords, normalizedPageSize);
    const nextPage = totalPages === 0 ? 1 : clamp(booking_listing.pagination.currentPage, 1, Math.max(totalPages, 1));
    const { startRow, endRow } = getRowBounds(nextPage, normalizedPageSize);
    booking_listing.pagination = {
        ...booking_listing.pagination,
        pageSize: normalizedPageSize,
        currentPage: nextPage,
        totalPages,
        showing: calculateShowing(nextPage, normalizedPageSize, totalRecords),
    };
    updateUserSelections({
        start_row: startRow,
        end_row: endRow,
    });
    return { startRow, endRow };
}

class BookingListingService {
    async getExposedBookingsCriteria(params) {
        const payload = GetExposedBookingsCriteriaParamsSchema.parse(params);
        const { data } = await axios.post(`/Get_Exposed_Bookings_Criteria`, payload);
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        booking_listing.balance_filter = result.balance_filter;
        initializeUserSelection();
        return result;
    }
    /** Returns the fetched bookings only when `options.skipStore` is set; otherwise writes them to the booking listing store. */
    async getExposedBookings(params, options) {
        const { property_id, userTypeCode, channel, property_ids, ...rest } = ExposedBookingsParamsSchema.parse(params);
        const havePrivilege = isPrivilegedUser(userTypeCode);
        const { data } = await axios.post(`/Get_Exposed_Bookings`, {
            ...rest,
            extras,
            property_id: havePrivilege ? undefined : property_id,
            property_ids: havePrivilege ? property_ids : null,
            channel: havePrivilege ? '' : channel,
        });
        const result = data.My_Result;
        const header = data.My_Params_Get_Exposed_Bookings;
        if (options?.skipStore) {
            return result;
        }
        if (options?.append) {
            booking_listing.bookings = [...booking_listing.bookings, ...result].map(b => ({ ...b, rooms: b.rooms ?? [] }));
        }
        else {
            booking_listing.bookings = [...result].map(b => ({ ...b, rooms: b.rooms ?? [] }));
        }
        booking_listing.userSelection = {
            ...booking_listing.userSelection,
            total_count: header.total_count,
        };
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(params) {
        const payload = RemoveExposedBookingParamsSchema.parse(params);
        await axios.post(`/Remove_Exposed_Booking`, payload);
    }
}

export { BookingListingService as B, updatePaginationFromSelection as a, booking_listing as b, updateUserSelections as c, setPaginationPage as d, initializeUserSelection as i, onBookingListingChange as o, setPaginationPageSize as s, updateUserSelection as u };
