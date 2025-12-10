'use strict';

const axios = require('./axios-6e678d52.js');
const index$1 = require('./index-ffd50e35.js');
const utils = require('./utils-bca29761.js');
const index = require('./index-6299b0f7.js');
const calendarData = require('./calendar-data-e7cdcfec.js');

const initialState = {
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
    selectedPaymentMethod: null,
    isInFreeCancelationZone: false,
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
        infant_nbr: 0,
    },
    booking: null,
    fictus_booking_nbr: null,
    event_type: { type: 'PLUS_BOOKING' },
};
let { state: booking_store, onChange: onRoomTypeChange, reset } = index.createStore(initialState);
function resetBookingStore() {
    reset();
}
function checkVariation(variations, selected_variation) {
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return variations[0];
    }
    return variations?.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr) ?? null;
}
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (!roomType.is_active)
            return;
        ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
        roomType.rateplans.forEach(ratePlan => {
            if (!ratePlan.is_active || !ratePlan?.variations?.length)
                return;
            const currentRatePlanSelection = currentSelections[roomType.id]?.[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? {
                        ...currentRatePlanSelection,
                        ratePlan,
                        selected_variation: checkVariation(ratePlan.variations, currentRatePlanSelection.selected_variation) ?? null,
                        visibleInventory: roomType.inventory,
                        reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved,
                        checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations,
                        checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection,
                        checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection,
                        guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName,
                        roomtype: {
                            ...currentRatePlanSelection.roomtype,
                        },
                    }
                    : {
                        reserved: 0,
                        rp_amount: 0,
                        view_mode: '001',
                        guest: null,
                        visibleInventory: roomType.inventory,
                        selected_variation: ratePlan?.variations[0] ?? null,
                        ratePlan,
                        guestName: [],
                        is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                        roomtype: {
                            ...roomType,
                            physicalrooms: null,
                            rateplans: null,
                            availabilities: null,
                        },
                        checkoutVariations: [],
                        checkoutBedSelection: [],
                        checkoutSmokingSelection: [],
                    };
        });
    });
    booking_store.ratePlanSelections = ratePlanSelections;
    booking_store.resetBooking = false;
});
function updateInventory(roomTypeId) {
    const roomTypeSelection = booking_store.ratePlanSelections[roomTypeId];
    const calculateTotalSelectedRoomsExcludingIndex = (excludedRatePlanId) => {
        return Object.entries(roomTypeSelection).reduce((acc, [ratePlanId, ratePlan]) => {
            return Number(ratePlanId) !== excludedRatePlanId ? acc + ratePlan.reserved : acc;
        }, 0);
    };
    const newRatePlans = Object.fromEntries(Object.entries(roomTypeSelection).map(([ratePlanId, ratePlan]) => {
        const totalSelectedRoomsExcludingCurrent = calculateTotalSelectedRoomsExcludingIndex(Number(ratePlanId));
        const roomTypeData = booking_store.roomTypes.find(rt => rt.id === roomTypeId);
        const availableRooms = roomTypeData ? roomTypeData.inventory - totalSelectedRoomsExcludingCurrent : 0;
        return [
            ratePlanId,
            {
                ...ratePlan,
                visibleInventory: availableRooms > 0 ? availableRooms : 0,
            },
        ];
    }));
    if (JSON.stringify(roomTypeSelection) !== JSON.stringify(newRatePlans)) {
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: newRatePlans,
        };
    }
}
function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                ...params,
            },
        },
    };
}
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes?.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error('Invalid room type id');
    }
    const ratePlan = roomType.rateplans.find(r => r.id === ratePlanId);
    if (!ratePlan) {
        throw new Error('Invalid rate plan');
    }
    let newGuest = Array.from({ length: rooms }, () => ({ first_name: '', last_name: '', unit: null, bed_preference: null, infant_nbr: null }));
    if (guest) {
        newGuest = guest;
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: null,
            reserved: 0,
            view_mode: '001',
            rp_amount: 0,
            guest: newGuest,
            is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            roomtype: {
                id: roomType.id,
                name: roomType.name,
                physicalrooms: null,
                rateplans: null,
                availabilities: null,
                inventory: roomType.inventory,
                rate: roomType.rate,
                bedding_setup: roomType.bedding_setup,
                smoking_option: roomType.smoking_option,
                is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            },
        };
    }
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                reserved: rooms,
                checkoutVariations: [],
                guest: newGuest,
            },
        },
    };
    updateInventory(roomTypeId);
}
function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return {
            reserved: 0,
            guest: null,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan: null,
            guestName: [],
            is_bed_configuration_enabled: false,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            rp_amount: 0,
            view_mode: '001',
            roomtype: null,
        };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
function calculateTotalRooms() {
    return Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
        return (total +
            Object.values(value).reduce((innerTotal, ratePlan) => {
                if (ratePlan.reserved === 0) {
                    return innerTotal;
                }
                return innerTotal + ratePlan.reserved;
            }, 0));
    }, 0);
}
function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            rpAcc[ratePlanId] = { ...ratePlan, reserved: 0, visibleInventory: roomType?.inventory ?? ratePlan.visibleInventory };
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = { ...updatedSelections };
}

const ZIEntrySchema = index$1.z.object({
    CODE_NAME: index$1.z.string(),
    CODE_VALUE_AR: index$1.z.string().nullable(),
    CODE_VALUE_DE: index$1.z.string().nullable(),
    CODE_VALUE_EL: index$1.z.string().nullable(),
    CODE_VALUE_EN: index$1.z.string().nullable(),
    CODE_VALUE_FR: index$1.z.string().nullable(),
    CODE_VALUE_HE: index$1.z.string().nullable(),
    CODE_VALUE_PL: index$1.z.string().nullable(),
    CODE_VALUE_RU: index$1.z.string().nullable(),
    CODE_VALUE_UA: index$1.z.string().nullable(),
    DISPLAY_ORDER: index$1.z.number().nullable(),
    ENTRY_DATE: index$1.z.string().nullable(),
    ENTRY_USER_ID: index$1.z.number().nullable(),
    INVARIANT_VALUE: index$1.z.string().nullable(),
    ISDELETEABLE: index$1.z.boolean(),
    ISDELETED: index$1.z.boolean(),
    ISSYSTEM: index$1.z.boolean(),
    ISUPDATEABLE: index$1.z.boolean(),
    ISVISIBLE: index$1.z.boolean(),
    NOTES: index$1.z.string().nullable(),
    OWNER_ID: index$1.z.number().nullable(),
    TBL_NAME: index$1.z.string(),
});
var AmenityType;
(function (AmenityType) {
    AmenityType["Room"] = "room";
})(AmenityType || (AmenityType = {}));
var Name;
(function (Name) {
    Name["Penthouse"] = "Penthouse";
    Name["PremiumSuites"] = "Premium Suites";
    Name["StandardRooms"] = "Standard Rooms";
})(Name || (Name = {}));
var Code;
(function (Code) {
    Code["Empty"] = "";
    Code["The001"] = "001";
    Code["The002"] = "002";
})(Code || (Code = {}));

const NumberOrStringSchema = index$1.unionType([index$1.numberType(), index$1.stringType().optional()]);
const CurrencySchema$1 = index$1.objectType({
    id: index$1.numberType(),
});
const CurrencyWithCodeSchema = CurrencySchema$1.extend({
    code: index$1.stringType().optional(),
});
const ItemSchema$1 = index$1.objectType({
    amount: index$1.numberType(),
    type: index$1.stringType().optional(),
    key: index$1.unionType([index$1.numberType(), index$1.stringType().optional()]),
    description: index$1.stringType().optional().optional().default(''),
});
const TargetSchema = index$1.objectType({
    code: index$1.stringType().optional(),
    description: index$1.stringType().optional(),
});
index$1.objectType({
    unit_id: index$1.numberType(),
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
});
index$1.objectType({
    starter: index$1.stringType().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency_id: index$1.numberType(),
    language: index$1.stringType().optional().optional(),
    rate_plan_id: index$1.numberType(),
    room_type_id: index$1.numberType(),
    property_id: index$1.numberType(),
    is_preserve_history: index$1.booleanType().optional(),
    room_identifier: index$1.stringType().optional().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    room_identifier: index$1.stringType().optional(),
    status: index$1.stringType().optional(),
});
index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency_id: index$1.numberType(),
    language: index$1.stringType().optional(),
});
const RestrictionSchema = index$1.objectType({
    room_type_id: NumberOrStringSchema,
    night: index$1.stringType().optional(),
});
index$1.objectType({
    is_closed: index$1.booleanType(),
    restrictions: index$1.arrayType(RestrictionSchema),
    operation_type: index$1.stringType().optional().optional(),
});
index$1.objectType({
    book_nbr: index$1.stringType().optional(),
    status: index$1.stringType().optional(),
});
const AdultChildCountSchema = index$1.objectType({
    adult: index$1.numberType(),
    child: index$1.numberType(),
});
index$1.objectType({
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
    propertyid: index$1.numberType(),
    adultChildCount: AdultChildCountSchema,
    language: index$1.stringType().optional(),
    room_type_ids: index$1.arrayType(index$1.numberType()),
    room_type_ids_to_update: index$1.arrayType(index$1.numberType()).optional(),
    rate_plan_ids: index$1.arrayType(index$1.numberType()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: index$1.booleanType().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = index$1.objectType({
    from_date: index$1.stringType().optional(),
    to_date: index$1.stringType().optional(),
});
index$1.objectType({
    unit_id: index$1.numberType(),
    block_status_code: index$1.enumType(['003', '004', '002']).optional(),
    description: index$1.stringType().optional().optional(),
    property_id: index$1.numberType(),
    brackets: index$1.arrayType(AvailabilityBracketSchema),
});
index$1.objectType({
    property_id: index$1.numberType(),
    room_identifier: index$1.stringType().optional(),
    code: index$1.stringType().optional(),
});
index$1.objectType({
    service: index$1.custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: index$1.booleanType(),
});
/* INVOICE TYPES */
const GetBookingInvoiceInfoPropsSchema = index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
});
const VoidInvoicePropsSchema = index$1.objectType({
    invoice_nbr: index$1.stringType().optional(),
    reason: index$1.stringType().optional(),
});
const InvoiceSchema$1 = index$1.objectType({
    booking_nbr: index$1.stringType().optional(),
    currency: CurrencySchema$1,
    target: TargetSchema,
    Date: index$1.stringType().optional(),
    nbr: index$1.stringType().optional(),
    remark: index$1.stringType().optional(),
    billed_to_name: index$1.stringType().optional(),
    billed_to_tax: index$1.stringType().optional(),
    items: index$1.arrayType(ItemSchema$1),
});
const IssueInvoicePropsSchema = index$1.objectType({
    is_proforma: index$1.booleanType().optional().default(false),
    invoice: InvoiceSchema$1,
});
const PrintInvoicePropsSchema = index$1.objectType({
    invoice_nbr: index$1.stringType().optional(),
});

const CurrencySchema = index$1.objectType({
    code: index$1.stringType(),
    id: index$1.numberType(),
    symbol: index$1.stringType(),
});
const StatusSchema = index$1.objectType({
    code: index$1.stringType(),
    description: index$1.anyType(),
});
const ItemSchema = index$1.objectType({
    amount: index$1.numberType(),
    booking_nbr: index$1.stringType(),
    currency: CurrencySchema,
    description: index$1.anyType(),
    invoice_nbr: index$1.stringType(),
    is_invoiceable: index$1.booleanType(),
    key: index$1.numberType(),
    status: StatusSchema,
    system_id: index$1.numberType(),
    type: index$1.stringType(),
});
const CreditNoteSchema = index$1.objectType({
    date: index$1.stringType(),
    nbr: index$1.stringType(),
    reason: index$1.stringType(),
    system_id: index$1.stringType().nullable(),
});
const InvoiceSchema = index$1.objectType({
    billed_to_name: index$1.anyType(),
    billed_to_tax: index$1.anyType(),
    booking_nbr: index$1.stringType(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: index$1.stringType(),
    items: index$1.arrayType(ItemSchema),
    nbr: index$1.stringType(),
    pdf_url: index$1.anyType(),
    remark: index$1.stringType(),
    status: StatusSchema,
    system_id: index$1.numberType(),
    target: index$1.anyType(),
    total_amount: index$1.anyType(),
});
const InvoiceableItemReasonSchema = index$1.objectType({
    code: index$1.enumType(['001', '002', '003']),
    description: index$1.stringType().nullable(),
});
const InvoiceableItemSchema = index$1.objectType({
    amount: index$1.numberType(),
    booking_nbr: index$1.stringType(),
    currency: CurrencySchema,
    invoice_nbr: index$1.stringType().nullable(),
    is_invoiceable: index$1.booleanType(),
    key: index$1.numberType(),
    status: index$1.anyType(),
    system_id: index$1.anyType(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: index$1.enumType(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
const BookingInvoiceInfoSchema = index$1.objectType({
    invoiceable_items: index$1.arrayType(InvoiceableItemSchema),
    invoices: index$1.arrayType(InvoiceSchema).nullable(),
});

// import { ExposedApplicablePolicy, ExposedBookingEvent, HandleExposedRoomGuestsRequest } from '../../models/booking.dto';
class BookingService {
    async unBlockUnitByPeriod(props) {
        const { data } = await axios.axios.post(`/Unblock_Unit_By_Period`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getNextValue(props) {
        const { data } = await axios.axios.post(`/Get_Next_Value`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getExposedApplicablePolicies(props) {
        const { data } = await axios.axios.post(`/Get_Exposed_Applicable_Policies`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result ?? [];
    }
    async handleExposedRoomInOut(props) {
        const { data } = await axios.axios.post(`/Handle_Exposed_Room_InOut`, props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async GetPenaltyStatement(params) {
        const { data } = await axios.axios.post('/Get_Penalty_Statement', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setExposedRestrictionPerRoomType(params) {
        const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IRBE/Set_Exposed_Restriction_Per_Room_Type`, {
            operation_type: params.operation_type ?? 'close_open',
            ...params,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getLov() {
        const { data } = await axios.axios.post(`/Get_LOV`, {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async sendBookingConfirmationEmail(booking_nbr, language) {
        const { data } = await axios.axios.post(`/Send_Booking_Confirmation_Email`, {
            booking_nbr,
            language,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getCalendarData(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras: utils.extras,
                include_sales_rate_plans: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const months = data.My_Result.months;
            const customMonths = [];
            const myBooking = await utils.getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                });
                return month.days.map(day => {
                    if (day['value'] === '2025-05-30') {
                        console.log(day);
                    }
                    return {
                        day: utils.convertDateToCustomFormat(day.description, month.description),
                        value: day.value,
                        currentDate: utils.convertDateToTime(day.description, month.description),
                        dayDisplayName: day.description,
                        rate: day.room_types,
                        unassigned_units_nbr: day.unassigned_units_nbr,
                        occupancy: day.occupancy,
                    };
                });
            })
                .flat();
            return Promise.resolve({
                ExceptionCode: null,
                ExceptionMsg: '',
                My_Params_Get_Rooming_Data: {
                    AC_ID: propertyid,
                    FROM: data.My_Params_Get_Exposed_Calendar.from_date,
                    TO: data.My_Params_Get_Exposed_Calendar.to_date,
                },
                days,
                months: customMonths,
                myBookings: myBooking,
                defaultMonths: months,
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async handleExposedRoomGuests(props) {
        const { data } = await axios.axios.post('/Handle_Exposed_Room_Guests', props);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async fetchGuest(email) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Guest`, { email });
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
    async changeExposedBookingStatus(props) {
        try {
            const { data } = await axios.axios.post(`/Change_Exposed_Booking_Status`, props);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async fetchPMSLogs(booking_nbr) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_PMS_Logs`, { booking_nbr });
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
    async getExposedBookingEvents(booking_nbr) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Booking_Events`, { booking_nbr });
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
    async editExposedGuest(guest, book_nbr) {
        try {
            const { data } = await axios.axios.post(`/Edit_Exposed_Guest`, { ...guest, book_nbr });
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
    async getBookingAvailability(props) {
        try {
            const { adultChildCount, currency, ...rest } = props;
            const { data } = await axios.axios.post(`/Check_Availability`, {
                ...rest,
                adult_nbr: adultChildCount.adult,
                child_nbr: adultChildCount.child,
                currency_ref: currency.code,
                skip_getting_assignable_units: !calendarData.calendar_data.is_frontdesk_enabled,
                is_backend: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = this.modifyRateplans(this.sortRoomTypes(data['My_Result'], { adult_nbr: Number(adultChildCount.adult), child_nbr: Number(adultChildCount.child) }));
            booking_store.roomTypes = [...results];
            booking_store.tax_statement = { message: data.My_Result.tax_statement };
            return results;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            // Priority to available rooms
            if (a.is_available_to_book && !b.is_available_to_book)
                return -1;
            if (!a.is_available_to_book && b.is_available_to_book)
                return 1;
            // Check for variations where is_calculated is true and amount is 0 or null
            const zeroCalculatedA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            const zeroCalculatedB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
            // Prioritize these types to be before inventory 0 but after all available ones
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations based on user criteria
            const matchA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            const matchB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation amount
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            return 0;
        });
    }
    modifyRateplans(roomTypes) {
        return roomTypes?.map(rt => ({ ...rt, rateplans: rt.rateplans?.map(rp => ({ ...rp, variations: this.sortVariations(rp?.variations ?? []) })) }));
    }
    sortVariations(variations) {
        return variations.sort((a, b) => {
            if (a.adult_nbr !== b.adult_nbr) {
                return b.adult_nbr - a.adult_nbr;
            }
            return b.child_nbr - a.child_nbr;
        });
    }
    async getCountries(language) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Countries`, {
                language,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getSetupEntriesByTableName(TBL_NAME) {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME`, {
            TBL_NAME,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result ?? [];
        return res;
    }
    async fetchSetupEntries() {
        try {
            const data = await this.getSetupEntriesByTableNameMulti(['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE']);
            const { arrival_time, rate_pricing_mode, bed_preference_type } = this.groupEntryTablesResult(data);
            return {
                arrivalTime: arrival_time,
                ratePricingMode: rate_pricing_mode,
                bedPreferenceType: bed_preference_type,
            };
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doBookingExtraService({ booking_nbr, service, is_remove }) {
        const { data } = await axios.axios.post(`/Do_Booking_Extra_Service`, { ...service, booking_nbr, is_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    groupEntryTablesResult(entries) {
        let result = {};
        for (const entry of entries) {
            const key = entry.TBL_NAME.substring(1, entry.TBL_NAME.length).toLowerCase();
            if (!result[key]) {
                result[key] = [];
            }
            result[key] = [...result[key], entry];
        }
        return result;
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getBlockedInfo() {
        return await this.getSetupEntriesByTableNameMulti(['_CALENDAR_BLOCKED_TILL']);
    }
    async getUserDefaultCountry() {
        try {
            const { data } = await axios.axios.post(`/Get_Country_By_IP`, {
                IP: '',
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockUnit(params) {
        try {
            const { data } = await axios.axios.post(`/Block_Exposed_Unit`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data['My_Params_Block_Exposed_Unit'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async blockAvailabilityForBrackets(params) {
        try {
            const { data } = await axios.axios.post(`/Block_Availability_For_Brackets`, params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async setDepartureTime(params) {
        const { data } = await axios.axios.post('/Set_Departure_Time', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getUserInfo(email) {
        try {
            const { data } = await axios.axios.post(`/GET_EXPOSED_GUEST`, {
                email,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedBooking(booking_nbr, language, withExtras = true) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                extras: withExtras ? utils.extras : null,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.error(error);
        }
    }
    generateDays(from_date, to_date, amount) {
        const startDate = new Date(from_date);
        const endDate = new Date(to_date);
        const days = [];
        while (startDate < endDate) {
            days.push({
                date: startDate.toISOString().split('T')[0],
                amount: amount,
                cost: null,
            });
            startDate.setDate(startDate.getDate() + 1);
        }
        return days;
    }
    calculateTotalRate(rate, totalNights, isRateModified, preference) {
        if (isRateModified && preference === 2) {
            return +rate;
        }
        return +rate / +totalNights;
    }
    async fetchExposedGuest(email, property_id) {
        try {
            const { data } = await axios.axios.post(`/Fetch_Exposed_Guests`, {
                email,
                property_id,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async fetchExposedBookings(booking_nbr, property_id, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Fetch_Exposed_Bookings`, {
                booking_nbr,
                property_id,
                from_date,
                to_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getPCICardInfoURL(BOOK_NBR) {
        try {
            const { data } = await axios.axios.post(`/Get_PCI_Card_Info_URL`, {
                BOOK_NBR,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doReservation(body) {
        const { data } = await axios.axios.post(`/DoReservation`, { ...body, extras: body.extras ? body.extras : utils.extras });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        console.log(data['My_Result']);
        return data['My_Result'];
    }
    async bookUser({ bookedByInfoData, check_in, currency, extras = null, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }) {
        try {
            const fromDateStr = utils.dateToFormattedString(fromDate);
            const toDateStr = utils.dateToFormattedString(toDate);
            let guest = {
                email: bookedByInfoData.email === '' ? null : bookedByInfoData.email || null,
                first_name: bookedByInfoData.firstName,
                last_name: bookedByInfoData.lastName,
                country_id: bookedByInfoData.countryId === '' ? null : bookedByInfoData.countryId,
                city: null,
                mobile: bookedByInfoData.contactNumber === null ? '' : bookedByInfoData.contactNumber,
                phone_prefix: null,
                address: '',
                dob: null,
                subscribe_to_news_letter: bookedByInfoData.emailGuest || false,
                cci: bookedByInfoData.cardNumber
                    ? {
                        nbr: bookedByInfoData.cardNumber,
                        holder_name: bookedByInfoData.cardHolderName,
                        expiry_month: bookedByInfoData.expiryMonth,
                        expiry_year: bookedByInfoData.expiryYear,
                    }
                    : null,
            };
            if (defaultGuest) {
                guest = { ...defaultGuest, email: defaultGuest.email === '' ? null : defaultGuest.email };
            }
            if (bookedByInfoData.id) {
                guest = { ...guest, id: bookedByInfoData.id };
            }
            const body = {
                assign_units: true,
                check_in,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                extras,
                booking: {
                    booking_nbr: bookingNumber || '',
                    from_date: fromDateStr,
                    to_date: toDateStr,
                    remark: bookedByInfoData.message || null,
                    property: {
                        id: propertyid,
                    },
                    source,
                    currency,
                    arrival: { code: arrivalTime ? arrivalTime : bookedByInfoData.selectedArrivalTime },
                    guest,
                    rooms: [
                        ...guestData.map(data => ({
                            identifier: identifier || null,
                            roomtype: {
                                id: data.roomCategoryId,
                                name: data.roomCategoryName,
                                physicalrooms: null,
                                rateplans: null,
                                availabilities: null,
                                inventory: data.inventory,
                                rate: data.rate / totalNights,
                            },
                            rateplan: {
                                id: data.ratePlanId,
                                name: data.ratePlanName,
                                rate_restrictions: null,
                                variations: null,
                                cancelation: data.cancelation,
                                guarantee: data.guarantee,
                            },
                            unit: typeof pr_id === 'undefined' && data.roomId === '' ? null : { id: +pr_id || +data.roomId },
                            occupancy: {
                                adult_nbr: data.adultCount,
                                children_nbr: data.childrenCount,
                                infant_nbr: null,
                            },
                            bed_preference: data.preference,
                            from_date: fromDateStr,
                            to_date: toDateStr,
                            notes: null,
                            days: this.generateDays(fromDateStr, toDateStr, this.calculateTotalRate(data.rate, totalNights, data.isRateModified, data.rateType)),
                            guest: {
                                email: null,
                                first_name: data.guestName,
                                last_name: null,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                            },
                        })),
                        ...rooms,
                    ],
                },
                pickup_info,
            };
            console.log('book user payload', body);
            // const result = await this.doReservation(body);
            // return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    /* INVOICE */
    async getBookingInvoiceInfo(props) {
        const payload = GetBookingInvoiceInfoPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Get_Booking_Invoice_Info', payload);
        return BookingInvoiceInfoSchema.parse(data.My_Result);
    }
    async issueInvoice(props) {
        const p = IssueInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Issue_Invoice', p);
        return data;
    }
    async voidInvoice(props) {
        const payload = VoidInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Void_Invoice', payload);
        return data;
    }
    async printInvoice(props) {
        const payload = PrintInvoicePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Print_Invoice', payload);
        return data;
    }
}

exports.BookingService = BookingService;
exports.ZIEntrySchema = ZIEntrySchema;
exports.booking_store = booking_store;
exports.calculateTotalRooms = calculateTotalRooms;
exports.getVisibleInventory = getVisibleInventory;
exports.modifyBookingStore = modifyBookingStore;
exports.reserveRooms = reserveRooms;
exports.resetBookingStore = resetBookingStore;
exports.resetReserved = resetReserved;
exports.updateRoomParams = updateRoomParams;

//# sourceMappingURL=booking.service-233704b3.js.map