import { a as axios } from './axios-aa1335b8.js';
import { c as createStore } from './index-f100e9d2.js';
import { h as hooks } from './moment-ab846cee.js';
import { z } from './index-1e1f097b.js';
import { i as isPrivilegedUser, e as extras } from './utils-f69a3563.js';

class PaymentService {
    async AddPayment(payment, book_nbr) {
        try {
            const { data } = await axios.post(`/Do_Payment`, { payment: { ...payment, book_nbr } });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async CancelPayment(id) {
        try {
            const { data } = await axios.post(`/Cancel_Payment`, { id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async GetExposedCancellationDueAmount(params) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Cancelation_Due_Amount`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

const ymdDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected date in YYYY-MM-DD format');
z.object({
    channel: z.string(),
    // These are null in your initialState, so allow nulls
    property_id: z.number().int().nullable(),
    balance_filter: z.string().nullable(),
    filter_type: z.union([z.number(), z.string()]).nullable(),
    from: ymdDate,
    to: ymdDate,
    name: z.string(),
    book_nbr: z.string(),
    booking_status: z.string(),
    userTypeCode: z.number().optional(),
    // In the interface these were literal 0/false, but you treat them like values.
    affiliate_id: z.number().int().default(0),
    is_mpo_managed: z.boolean().default(false),
    is_mpo_used: z.boolean().default(false),
    is_for_mobile: z.boolean().default(false),
    is_combined_view: z.boolean().default(false),
    start_row: z.number().int(),
    end_row: z.number().int(),
    total_count: z.number().int(),
    is_to_export: z.boolean(),
    property_ids: z.array(z.number().int()).optional(),
});
const initialState = {
    channels: [],
    settlement_methods: [],
    statuses: [],
    types: [],
    token: '',
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
    async getExposedBookingsCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_Bookings_Criteria`, {
            property_id,
        });
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        booking_listing.balance_filter = result.balance_filter;
        initializeUserSelection();
    }
    async getExposedBookings(params, options) {
        const { property_id, userTypeCode, channel, property_ids, ...rest } = params;
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
        if (options?.append) {
            booking_listing.bookings = [...booking_listing.bookings, ...result];
        }
        else {
            booking_listing.bookings = [...result];
        }
        booking_listing.userSelection = {
            ...booking_listing.userSelection,
            total_count: header.total_count,
        };
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(booking_nbr, is_to_revover) {
        await axios.post(`/Remove_Exposed_Booking`, {
            booking_nbr,
            is_to_revover,
        });
    }
}

export { BookingListingService as B, PaymentService as P, updatePaginationFromSelection as a, booking_listing as b, updateUserSelections as c, setPaginationPage as d, initializeUserSelection as i, onBookingListingChange as o, setPaginationPageSize as s, updateUserSelection as u };

//# sourceMappingURL=booking_listing.service-d0b1e881.js.map