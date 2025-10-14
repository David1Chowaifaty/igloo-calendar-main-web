import { c as createStore } from './index-c4cf83be.js';
import { h as hooks } from './moment-ab846cee.js';
import { z } from './index-6ecc32cd.js';
import { G as isPrivilegedUser, e as extras } from './utils-9ae6477f.js';
import { a as axios } from './axios-aa1335b8.js';

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
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { channel: '', booking_status: booking_listing.statuses[0].code, filter_type: booking_listing.types[0].id, book_nbr: '', name: '', from: hooks().add(-7, 'days').format('YYYY-MM-DD'), to: hooks().format('YYYY-MM-DD'), start_row: 0, end_row: booking_listing.rowCount, balance_filter: booking_listing.balance_filter[0].value });
}
function updateUserSelections(params) {
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), params);
}
function updateUserSelection(key, value) {
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { [key]: value });
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    async getExposedBookings(params) {
        const { property_id, userTypeCode, channel, property_ids } = params, rest = __rest(params, ["property_id", "userTypeCode", "channel", "property_ids"]);
        const havePrivilege = isPrivilegedUser(userTypeCode);
        const { data } = await axios.post(`/Get_Exposed_Bookings`, Object.assign(Object.assign({}, rest), { extras, property_id: havePrivilege ? undefined : property_id, property_ids: havePrivilege ? property_ids : null, channel: havePrivilege ? '' : channel }));
        const result = data.My_Result;
        const header = data.My_Params_Get_Exposed_Bookings;
        booking_listing.bookings = [...result];
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { total_count: header.total_count });
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(booking_nbr, is_to_revover) {
        await axios.post(`/Remove_Exposed_Booking`, {
            booking_nbr,
            is_to_revover,
        });
    }
}

export { BookingListingService as B, updateUserSelections as a, booking_listing as b, initializeUserSelection as i, onBookingListingChange as o, updateUserSelection as u };

//# sourceMappingURL=booking_listing.service-b52749ed.js.map