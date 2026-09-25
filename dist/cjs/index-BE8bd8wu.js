'use strict';

var locales_store = require('./locales.store-BMTss6fG.js');
var moment = require('./moment-CdViwxPQ.js');
var commonSchemas = require('./commonSchemas-D4iFLV5-.js');
var types = require('./types-BVJQZ50e.js');
var utils = require('./utils-CVHsag7R.js');
var axios = require('./axios-EresIryl.js');

// ---------------------------------------------------------------------------
// Exposed bookings criteria (Get_Exposed_Bookings_Criteria)
// ---------------------------------------------------------------------------
const GetExposedBookingsCriteriaParamsSchema = commonSchemas.LanguageSchema.extend({
    // null for privileged users (criteria across all properties)
    property_id: commonSchemas.PropertyIdSchema.nullable(),
});
const CriteriaChannelSchema = types.objectType({
    is_direct: types.booleanType(),
    name: types.stringType(),
    value: types.stringType(),
});
const CriteriaIdentifierSchema = types.objectType({
    code: types.stringType(),
    name: types.stringType(),
});
const SettlementMethodSchema = CriteriaIdentifierSchema;
const CriteriaStatusSchema = CriteriaIdentifierSchema;
const CriteriaTypeSchema = types.objectType({
    id: types.numberType(),
    name: types.stringType(),
});
const BalanceFilterSchema = types.objectType({
    name: types.stringType(),
    value: types.stringType(),
});
types.objectType({
    channels: types.arrayType(CriteriaChannelSchema),
    settlement_methods: types.arrayType(SettlementMethodSchema),
    statuses: types.arrayType(CriteriaStatusSchema),
    types: types.arrayType(CriteriaTypeSchema),
    balance_filter: types.arrayType(BalanceFilterSchema),
});
// ---------------------------------------------------------------------------
// Exposed bookings (Get_Exposed_Bookings)
// ---------------------------------------------------------------------------
const ExposedBookingsParamsSchema = commonSchemas.LanguageSchema.extend({
    channel: types.stringType(),
    // These are null in your initialState, so allow nulls
    property_id: commonSchemas.PropertyIdSchema.nullable(),
    balance_filter: types.stringType().nullable(),
    filter_type: types.unionType([types.numberType(), types.stringType()]).nullable(),
    // null when searching by name / booking number regardless of dates (ir-pms-search)
    from: commonSchemas.DateSchema.nullable(),
    to: commonSchemas.DateSchema.nullable(),
    name: types.stringType().nullable(),
    book_nbr: commonSchemas.BookingNumberSchema.nullable(),
    booking_status: types.stringType(),
    userTypeCode: types.numberType().optional(),
    // In the interface these were literal 0/false, but you treat them like values.
    affiliate_id: types.numberType().int().default(0),
    is_mpo_managed: types.booleanType().default(false),
    is_mpo_used: types.booleanType().default(false),
    is_for_mobile: types.booleanType().default(false),
    is_combined_view: types.booleanType().default(false),
    start_row: types.numberType().int(),
    end_row: types.numberType().int(),
    total_count: types.numberType().int(),
    is_to_export: types.booleanType(),
    property_ids: types.arrayType(commonSchemas.PropertyIdSchema).nullable().optional(),
});
types.objectType({
    /** Append results to the stored bookings instead of replacing them (infinite scroll). */
    append: types.booleanType().optional(),
    /** Return the results without touching the booking listing store. */
    skipStore: types.booleanType().optional(),
});
types.objectType({
    total_count: types.numberType(),
    exported_data_url: types.stringType().nullable(),
});
// ---------------------------------------------------------------------------
// Remove exposed booking (Remove_Exposed_Booking)
// ---------------------------------------------------------------------------
const RemoveExposedBookingParamsSchema = types.objectType({
    booking_nbr: commonSchemas.BookingNumberSchema,
    is_to_revover: types.booleanType(),
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
        from: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        to: moment.hooks().format('YYYY-MM-DD'),
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
const { state: booking_listing, onChange: onBookingListingChange } = locales_store.createStore(initialState);
function initializeUserSelection() {
    //booking_listing.channels[0].name
    booking_listing.userSelection = {
        ...booking_listing.userSelection,
        channel: '',
        booking_status: booking_listing.statuses[0].code,
        filter_type: booking_listing.types[0].id,
        book_nbr: '',
        name: '',
        from: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        to: moment.hooks().format('YYYY-MM-DD'),
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
        const { data } = await axios.axios.post(`/Get_Exposed_Bookings_Criteria`, payload);
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
        const havePrivilege = utils.isPrivilegedUser(userTypeCode);
        const { data } = await axios.axios.post(`/Get_Exposed_Bookings`, {
            ...rest,
            extras: utils.extras,
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
        await axios.axios.post(`/Remove_Exposed_Booking`, payload);
    }
}

exports.BookingListingService = BookingListingService;
exports.booking_listing = booking_listing;
exports.initializeUserSelection = initializeUserSelection;
exports.onBookingListingChange = onBookingListingChange;
exports.setPaginationPage = setPaginationPage;
exports.setPaginationPageSize = setPaginationPageSize;
exports.updatePaginationFromSelection = updatePaginationFromSelection;
exports.updateUserSelection = updateUserSelection;
exports.updateUserSelections = updateUserSelections;
