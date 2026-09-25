'use strict';

var axios = require('./axios-EresIryl.js');
require('./IBooking-hDE_y33g.js');
var utils = require('./utils-CVHsag7R.js');
var booking = require('./booking-CTTU8QIq.js');
var locales_store = require('./locales.store-BMTss6fG.js');
var moment = require('./moment-CdViwxPQ.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
var t = require('./t-C54QV4_c.js');
var commonSchemas = require('./commonSchemas-D4iFLV5-.js');
var types = require('./types-BVJQZ50e.js');

const NumberOrStringSchema = types.unionType([types.numberType(), types.stringType().optional()]);
const CurrencySchema$1 = types.objectType({
    id: types.numberType(),
});
const CurrencyWithCodeSchema = CurrencySchema$1.extend({
    code: types.stringType().optional(),
});
const ItemSchema$1 = types.objectType({
    amount: types.numberType(),
    type: types.stringType().optional(),
    key: types.unionType([types.numberType(), types.stringType().optional()]),
    description: types.stringType().optional().optional().default(''),
});
const TargetSchema = types.objectType({
    code: types.stringType().optional(),
    description: types.stringType().optional(),
});
types.objectType({
    unit_id: types.numberType(),
    from_date: types.stringType().optional(),
    to_date: types.stringType().optional(),
});
types.objectType({
    starter: types.stringType().optional(),
});
commonSchemas.LanguageSchema.extend({
    booking_nbr: types.stringType().optional(),
    currency_id: types.numberType(),
    rate_plan_id: types.numberType(),
    room_type_id: types.numberType(),
    property_id: types.numberType(),
    is_preserve_history: types.booleanType().optional(),
    room_identifier: types.stringType().optional().optional(),
});
types.objectType({
    booking_nbr: types.stringType().optional(),
    room_identifier: types.stringType().optional(),
    status: types.stringType().optional(),
});
commonSchemas.LanguageSchema.extend({
    booking_nbr: types.stringType().optional(),
    currency_id: types.numberType(),
});
const RestrictionSchema = types.objectType({
    room_type_id: NumberOrStringSchema,
    night: types.stringType().optional(),
});
types.objectType({
    is_closed: types.booleanType(),
    restrictions: types.arrayType(RestrictionSchema),
    operation_type: types.stringType().optional().optional(),
});
types.objectType({
    book_nbr: types.stringType().optional(),
    status: types.stringType().optional(),
});
const AdultChildCountSchema = types.objectType({
    adult: types.numberType(),
    child: types.numberType(),
});
commonSchemas.LanguageSchema.extend({
    from_date: types.stringType().optional(),
    to_date: types.stringType().optional(),
    propertyid: types.numberType(),
    adultChildCount: AdultChildCountSchema,
    room_type_ids: types.arrayType(types.numberType()),
    room_type_ids_to_update: types.arrayType(types.numberType()).optional(),
    rate_plan_ids: types.arrayType(types.numberType()).optional(),
    currency: CurrencyWithCodeSchema,
    is_in_agent_mode: types.booleanType().optional(),
    agent_id: NumberOrStringSchema.optional(),
});
const AvailabilityBracketSchema = types.objectType({
    from_date: types.stringType().optional(),
    to_date: types.stringType().optional(),
});
types.objectType({
    unit_id: types.numberType(),
    block_status_code: types.enumType(['003', '004', '002']).optional(),
    description: types.stringType().optional().optional(),
    property_id: types.numberType(),
    brackets: types.arrayType(AvailabilityBracketSchema),
});
const SetDepartureTimePropsSchema = types.objectType({
    property_id: types.numberType(),
    room_identifier: types.stringType().optional(),
    code: types.stringType().optional(),
});
types.objectType({
    service: types.custom(),
    booking_nbr: NumberOrStringSchema,
    is_remove: types.booleanType(),
});
/*Arrivals */
const GetRoomsToCheckInPropsSchema = types.objectType({
    property_id: types.stringType(),
    check_in_date: types.stringType(),
    page_index: types.numberType().default(1),
    page_size: types.numberType().default(10),
});
/*Departures */
const GetRoomsToCheckOutPropsSchema = types.objectType({
    property_id: types.stringType(),
    check_out_date: types.stringType(),
    page_index: types.numberType().default(1),
    page_size: types.numberType().default(10),
});
/* INVOICE TYPES */
const GetBookingInvoiceInfoPropsSchema = commonSchemas.LanguageSchema.extend({
    booking_nbr: types.stringType().optional(),
});
const VoidInvoicePropsSchema = types.objectType({
    invoice_nbr: types.stringType().optional(),
    reason: types.stringType().optional(),
    property_id: commonSchemas.PropertyIdSchema,
});
const InvoiceSchema$1 = types.objectType({
    booking_nbr: types.stringType().optional(),
    currency: CurrencySchema$1,
    target: TargetSchema,
    Date: types.stringType().optional(),
    nbr: types.stringType().optional(),
    remark: types.stringType().optional(),
    billed_to_name: types.stringType().optional(),
    billed_to_tax: types.stringType().optional(),
    items: types.arrayType(ItemSchema$1),
});
const IssueInvoicePropsSchema = types.objectType({
    is_proforma: types.booleanType().optional().default(false),
    property_id: types.numberType(),
    invoice: InvoiceSchema$1,
});
const PrintInvoicePropsSchema = types.objectType({
    invoice_nbr: types.stringType().optional(),
    property_id: types.numberType(),
    mode: types.enumType(['invoice', 'creditnote', 'proforma']),
    invoice: InvoiceSchema$1.optional(),
});
const ExposedGuestSchema = types.objectType({
    address: types.nullType(),
    alternative_email: types.nullType(),
    cci: types.nullType(),
    city: types.nullType(),
    country: types.nullType(),
    country_id: types.numberType(),
    country_phone_prefix: types.stringType(),
    dob: types.nullType(),
    email: types.stringType(),
    first_name: types.stringType(),
    id: types.numberType(),
    id_info: types.nullType(),
    is_main: types.booleanType(),
    last_name: types.stringType(),
    mobile: types.stringType(),
    mobile_without_prefix: types.stringType(),
    nbr_confirmed_bookings: types.numberType(),
    notes: types.nullType(),
    password: types.nullType(),
    subscribe_to_news_letter: types.nullType(),
});
types.arrayType(ExposedGuestSchema);
const SetHbPreferencePropsSchema = types.objectType({
    property_id: types.numberType(),
    room_identifier: types.stringType(),
    code: types.unionType([types.literalType('001'), types.literalType('002')]),
});
const CalculateExclusiveTaxPropsSchema = types.objectType({
    property_id: types.numberType().min(1),
    amount: types.numberType(),
    taxes_to_include: commonSchemas.TaxTypesSchema,
});
const AckExposedRevisionPropsSchema = types.objectType({
    revision_id: types.numberType(),
});
const VoidPaymentPropsSchema = types.objectType({
    receipt_nbr: types.stringType(),
    booking_nbr: types.stringType(),
});
const CalculateOptimBaseGrossAmountParamsSchema = types.objectType({
    booking_nbr: types.stringType(),
});
const SimulateDirectBookingParamsSchema = types.objectType({
    booking_nbr: types.stringType(),
});
const DoDayUseParamsSchema = commonSchemas.LanguageSchema.extend({
    is_to_block: types.booleanType().optional().default(false),
    booking: types.objectType({
        property: types.objectType({
            id: types.numberType(),
        }),
        occupancy: types.objectType({
            adult_nbr: types.numberType().nullable(),
            children_nbr: types.numberType().nullable(),
            infant_nbr: types.numberType().nullable(),
        })
            .optional()
            .nullable(),
        currency: types.objectType({
            id: types.numberType(),
        }),
        source: types.objectType({
            code: types.stringType().min(1),
        }),
        guest: types.objectType({
            first_name: types.stringType().min(1),
            last_name: types.stringType().min(1),
            email: types.unionType([types.stringType().trim().email(), types.literalType('')]),
            mobile: types.stringType(),
        }),
        from_date: types.stringType().min(1),
        to_date: types.stringType().min(1),
        status: types.objectType({
            code: types.stringType().min(1),
        }),
        remark: types.stringType(),
    }),
    extra_service: types.objectType({
        pr_id: types.numberType(),
        category: types.objectType({
            code: types.stringType().min(1),
        }),
        description: types.stringType().optional().default(''),
        start_date: types.stringType().min(1),
        end_date: types.stringType().min(1),
        from_time: types.stringType().min(1),
        to_time: types.stringType().min(1),
        net_amount: types.numberType(),
        tax_amount: types.numberType(),
        gross_amount: types.numberType(),
        currency_id: types.numberType(),
        price: types.numberType(),
    }),
});
const SetArrivalTimePropsSchema = types.objectType({
    property_id: commonSchemas.PropertyIdSchema,
    room_identifier: types.stringType(),
    code: types.stringType(),
});

const CurrencySchema = types.objectType({
    code: types.stringType(),
    id: types.numberType(),
    symbol: types.stringType(),
});
const StatusSchema = types.objectType({
    code: types.stringType(),
    description: types.anyType(),
});
const ItemSchema = types.objectType({
    amount: types.numberType(),
    booking_nbr: types.stringType(),
    currency: CurrencySchema,
    description: types.anyType(),
    invoice_nbr: types.stringType(),
    is_invoiceable: types.booleanType(),
    key: types.numberType(),
    status: StatusSchema,
    system_id: types.numberType(),
    type: types.stringType(),
});
const CreditNoteSchema = types.objectType({
    date: types.stringType(),
    nbr: types.stringType(),
    reason: types.stringType(),
    system_id: types.stringType().nullable(),
    user: types.stringType().nullable(),
});
const InvoiceSchema = types.objectType({
    billed_to_name: types.anyType(),
    billed_to_tax: types.anyType(),
    booking_nbr: types.stringType(),
    credit_note: CreditNoteSchema.nullable(),
    currency: CurrencySchema,
    date: types.stringType(),
    items: types.arrayType(ItemSchema),
    nbr: types.stringType(),
    pdf_url: types.anyType(),
    remark: types.stringType(),
    status: StatusSchema,
    system_id: types.numberType(),
    target: types.anyType(),
    user: types.stringType().nullable(),
    total_amount: types.anyType(),
});
const InvoiceableItemReasonSchema = types.objectType({
    code: types.enumType(['001', '002', '003']),
    description: types.stringType().nullable(),
});
const InvoiceableItemSchema = types.objectType({
    amount: types.numberType(),
    booking_nbr: types.stringType(),
    currency: CurrencySchema,
    invoice_nbr: types.stringType().nullable(),
    is_invoiceable: types.booleanType(),
    key: types.numberType(),
    status: types.anyType(),
    system_id: types.anyType(),
    reason: InvoiceableItemReasonSchema.nullable(),
    type: types.enumType(['BSA', 'BSP', 'BSE', 'PAYMENT']),
});
const BookingInvoiceInfoSchema = types.objectType({
    invoiceable_items: types.arrayType(InvoiceableItemSchema),
    invoices: types.arrayType(InvoiceSchema).nullable(),
});

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
    async handleRoomCheckout(props) {
        const { data } = await axios.axios.post(`/Handle_Room_Checkout`, props);
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
            const v4Candidates = new Set([373, 1221, 42, 26]);
            let route = 'Get_Exposed_Calendar';
            const isCandidate = v4Candidates.has(Number(propertyid));
            if (isCandidate) {
                route += '_V4';
            }
            const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IR/${route}`, {
                propertyid,
                from_date,
                to_date,
                extras: utils.extras,
                include_sales_rate_plans: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            // const months: MonthType[] = data.My_Result.months;
            const customMonths = [];
            const res = isCandidate ? JSON.parse(data.My_Result) : data.My_Result;
            const months = res.months;
            // const customMonths: { daysCount: number; monthName: string }[] = [];
            const myBooking = await booking.getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                    firstDayValue: month.days[0]?.value,
                });
                return month.days.map(day => {
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
                    FROM: data[`My_Params_${route}`].from_date,
                    TO: data[`My_Params_${route}`].to_date,
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
    async setHbPreference(props) {
        const payload = SetHbPreferencePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Set_HB_Preference', payload);
        return data;
    }
    async ackExposedRevision(props) {
        const payload = AckExposedRevisionPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Ack_Exposed_Revision', payload);
        return data;
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
            const { adultChildCount, currency, is_backend = true, skip_store, ...rest } = props;
            const { data } = await axios.axios.post(`/Check_Availability`, {
                ...rest,
                adult_nbr: adultChildCount.adult,
                child_nbr: adultChildCount.child,
                currency_ref: currency.code,
                skip_getting_assignable_units: !calendarData.calendar_data.is_frontdesk_enabled,
                is_backend: is_backend,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = this.modifyRateplans(this.sortRoomTypes(data['My_Result'], { adult_nbr: Number(adultChildCount.adult), child_nbr: Number(adultChildCount.child) }));
            if (!skip_store) {
                booking_store.roomTypes = [...results];
                booking_store.tax_statement = { message: data.My_Result.tax_statement };
            }
            return results;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async calculateExclusiveTax(props) {
        const payload = CalculateExclusiveTaxPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Calculate_Exclusive_Tax', payload);
        return data.My_Result ?? 0;
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
    async doBookingExtraService({ booking_nbr, service, is_remove }) {
        const { data } = await axios.axios.post(`/Do_Booking_Extra_Service`, { ...service, booking_nbr, is_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async setArrivalTime(props) {
        const payload = SetArrivalTimePropsSchema.parse(props);
        const { data } = await axios.axios.post(`/Set_Arrival_Time`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getUserDefaultCountry() {
        try {
            let payload = { IP: '' };
            if (calendarData.calendar_data?.property?.id) {
                payload = { ...payload, id: calendarData.calendar_data.property.id };
            }
            const { data } = await axios.axios.post(`/Get_Country_By_IP`, payload);
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
    async setDepartureTime(props) {
        const payload = SetDepartureTimePropsSchema.parse(props);
        const { data } = await axios.axios.post('/Set_Departure_Time', payload);
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
    async getExposedBooking({ booking_nbr, language, withExtras = true, include_dp_pricing, extras: _extras = utils.extras, }) {
        try {
            const { data } = await axios.axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                is_check_invoice_info: calendarData.calendar_data?.property?.is_frontdesk_enabled,
                extras: withExtras ? _extras : null,
                is_calculate_dp_effect: include_dp_pricing,
                is_get_financial_snapshot: true,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return { ...data.My_Result, rooms: data.My_Result.rooms ?? [] };
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
    async voidPayment(props) {
        const payload = VoidPaymentPropsSchema.parse(props);
        const { data } = await axios.axios.post('/Void_Payment', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
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
    /*Arrivals*/
    async getRoomsToCheckIn(props) {
        const payload = GetRoomsToCheckInPropsSchema.parse(props);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_In', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_In?.total_count };
    }
    async getRoomsToCheckout(props) {
        const payload = GetRoomsToCheckOutPropsSchema.parse(props);
        const { data } = await axios.axios.post('https://gateway.igloorooms.com/IRBE/Get_Rooms_To_Check_Out', payload);
        return { bookings: data.My_Result, total_count: data.My_Params_Get_Rooms_To_Check_Out?.total_count };
    }
    /*Departures */
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
    async calculateOptimBaseGrossAmount(params) {
        const payload = CalculateOptimBaseGrossAmountParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Calculate_Optim_Base_Gross_Amount`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async simulateDirectBooking(params) {
        const payload = SimulateDirectBookingParamsSchema.parse(params);
        const { data } = await axios.axios.post(`/Simulate_Direct_Booking`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async doDayUse(params) {
        const payload = DoDayUseParamsSchema.parse(params);
        const { data } = await axios.axios.post('/Do_Day_Use', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

class VariationService {
    /**
     * Formats a variation based on the number of infants and returns a formatted string.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust the variation for.
     * @returns {string} A formatted string describing the variation adjusted for infants.
     */
    formatVariationBasedOnInfants(params) {
        const variation = this.getVariationBasedOnInfants(params);
        if (!variation) {
            return '';
        }
        return this.formatVariation(variation, params.infants);
    }
    /**
     * Calculates the discounted amount for a variation adjusted for the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to consider for adjustments.
     * @returns {number} The discounted amount for the selected variation, or 0 if no discounted amount is available.
     */
    calculateVariationAmount(params) {
        return this.getVariationBasedOnInfants(params)?.discounted_amount || 0;
    }
    /**
     * Finds the appropriate variation from a list of variations based on the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust for.
     * @returns {Variation} The matching variation or the base variation if no match is found.
     */
    getVariationBasedOnInfants({ variations, baseVariation, infants }) {
        if (!baseVariation) {
            return null;
        }
        const { adult_nbr, child_nbr } = baseVariation;
        return variations?.find(v => v.adult_nbr === adult_nbr && v.child_nbr === Math.max(0, child_nbr - Math.max(0, infants))) || baseVariation;
    }
    /**
     * Formats a variation object into a human-readable string, adjusted for the number of infants.
     * @param {Variation} variation - The variation object to format.
     * @param {number} infant_nbr - The number of infants to adjust for.
     * @returns {string} A formatted string representing the variation.
     * @private
     */
    formatVariation({ child_nbr, adult_nbr }, infant_nbr) {
        const adultNumber = Number(adult_nbr) || 0;
        const infantNumber = Math.max(Number(infant_nbr) || 0, 0);
        const adultLabel = adultNumber > 1 ? t.t('Lcz_Adults').toLowerCase() : t.t('Lcz_Adult').toLowerCase();
        const childLabel = child_nbr > 1 ? t.t('Lcz_Children').toLowerCase() : t.t('Lcz_Child').toLowerCase();
        const infantLabel = infantNumber > 1 ? t.t('Lcz_Infants', { fallback: 'infants' })?.toLowerCase() : t.t('Lcz_Infant', { fallback: 'infant' })?.toLowerCase();
        const parts = [`${adultNumber} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infantNumber ? `${infantNumber} ${infantLabel}` : ''];
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
}

const bookedByGuestBaseData = {
    id: -1,
    email: '',
    company: '',
    agent_booking_nbr: null,
    firstName: '',
    lastName: '',
    countryId: '',
    phone_prefix: '',
    mobile: '',
    selectedArrivalTime: '',
    emailGuest: true,
    note: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
};
// -----------------------------------------------------------------------------
// Store Initialization
// -----------------------------------------------------------------------------
const initialState = {
    bookedByGuest: bookedByGuestBaseData,
    bookedByGuestManuallyEdited: false,
    bookingDraft: {
        agent: null,
        dates: {
            checkIn: moment.hooks().startOf('day'),
            checkOut: moment.hooks().add(1, 'day'),
        },
        occupancy: {
            adults: null,
            children: null,
        },
        source: null,
        dayUse: false,
        dayUseHours: {
            from: '',
            to: '',
        },
    },
    selects: {
        sources: [],
        ratePricingMode: [],
        arrivalTime: [],
        bedPreferences: [],
        countries: [],
    },
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
    dayUseSelection: null,
};
let { state: booking_store, onChange: onRoomTypeChange, reset } = locales_store.createStore(initialState);
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
/**
 * Clears the booking store. Optionally rehydrates dropdowns and guest info when keeping the modal open.
 */
function resetBookingStore(closeModal) {
    const { bookingDraft, selects, bookedByGuest } = booking_store;
    reset();
    if (!closeModal) {
        setBookingDraft(bookingDraft);
        updateBookedByGuest(bookedByGuest);
        setBookingSelectOptions(selects);
    }
}
/**
 * Convenience helper that resets shared state while keeping the modal visible.
 */
function resetAvailability() {
    resetBookingStore(false);
}
/**
 * Updates booking draft pieces (dates, occupancy, source) while keeping unrelated keys intact.
 */
function setBookingDraft(params) {
    booking_store.bookingDraft = {
        ...booking_store.bookingDraft,
        ...params,
        dates: {
            ...booking_store.bookingDraft.dates,
            ...params.dates,
        },
        occupancy: {
            ...booking_store.bookingDraft.occupancy,
            ...params.occupancy,
        },
        dayUseHours: {
            ...booking_store.bookingDraft.dayUseHours,
            ...params.dayUseHours,
        },
    };
    if (params.source) {
        setBookingDraft({ agent: resolveAgentFromBookingSource(params.source) });
    }
}
/**
 * Returns the linked travel agent if the source type is TRAVEL_AGENCY.
 */
function resolveAgentFromBookingSource(source) {
    const matchedSource = calendarData.calendar_data.property?.allowed_booking_sources?.find(s => s.id.toString() === source.id.toString());
    if (matchedSource?.type === 'TRAVEL_AGENCY') {
        const agent = calendarData.calendar_data.property.agents?.find(a => a.id.toString() === matchedSource.tag);
        return agent ?? null;
    }
    return null;
}
/**
 * Updates dropdown lookup datasets (sources, bed preferences, etc.).
 */
function setBookingSelectOptions(params) {
    booking_store.selects = {
        ...booking_store.selects,
        ...params,
    };
}
/**
 * Ensures the selected variation still exists on the server payload.
 */
function resolveSelectedVariation(variations, selected_variation) {
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return getDefaultVariation(variations);
    }
    return variations?.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr) ?? getDefaultVariation(variations);
}
/**
 * Returns the best matching variation for a rate plan.
 *
 * - For **EDIT_BOOKING** events, attempts to match the variation that corresponds
 *   to the booking's original occupancy (`bookingDraft.defaultOccupancy`).
 *   Falls back to `variations[0]` if no match is found.
 * - For all other event types, returns `variations[0]`.
 *
 * @param variations - The list of available variations for the rate plan.
 * @returns The matched `Variation`, or `null` if the list is empty/undefined.
 */
function getDefaultVariation(variations) {
    if (!variations) {
        return null;
    }
    if (booking_store.event_type?.type === 'EDIT_BOOKING') {
        const { defaultOccupancy } = booking_store.bookingDraft;
        if (defaultOccupancy) {
            return variations.find(v => v.adult_nbr === defaultOccupancy.adults && v.child_nbr === defaultOccupancy.children) ?? variations[0];
        }
    }
    return variations[0];
}
/**
 * Keeps `ratePlanSelections` in sync when backend refreshes available room types.
 */
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
                        selected_variation: resolveSelectedVariation(ratePlan.variations, currentRatePlanSelection.selected_variation) ?? null,
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
                        selected_variation: getDefaultVariation(ratePlan?.variations),
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
// -----------------------------------------------------------------------------
// State Mutators
// -----------------------------------------------------------------------------
/**
 * Partially updates the booked-by guest snapshot, preserving other properties.
 */
function updateBookedByGuest(params) {
    booking_store.bookedByGuest = {
        ...booking_store.bookedByGuest,
        ...params,
    };
}
/**
 * Updates the guest list assigned to a specific rate plan selection.
 */
function updateRoomGuest({ guest, ratePlanId, roomTypeId, ratePlanSelection, }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [roomTypeId]: {
            ...booking_store.ratePlanSelections[roomTypeId],
            [ratePlanId]: { ...ratePlanSelection, guest: [...guest] },
        },
    };
}
/**
 * Recomputes remaining visible inventory for a room type whenever selections change.
 */
function updateInventory(roomTypeId) {
    const roomTypeSelection = booking_store.ratePlanSelections[roomTypeId];
    if (!roomTypeSelection) {
        return;
    }
    const roomTypeData = booking_store.roomTypes.find(rt => rt.id === roomTypeId);
    if (!roomTypeData) {
        return;
    }
    const totalReserved = Object.values(roomTypeSelection).reduce((acc, ratePlan) => acc + ratePlan.reserved, 0);
    let hasChanges = false;
    const newRatePlans = Object.entries(roomTypeSelection).reduce((acc, [ratePlanId, ratePlan]) => {
        const roomsExcludingCurrent = totalReserved - ratePlan.reserved;
        const availableRooms = Math.max(roomTypeData.inventory - roomsExcludingCurrent, 0);
        if (ratePlan.visibleInventory !== availableRooms) {
            hasChanges = true;
            acc[ratePlanId] = { ...ratePlan, visibleInventory: availableRooms };
        }
        else {
            acc[ratePlanId] = ratePlan;
        }
        return acc;
    }, {});
    if (hasChanges) {
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: newRatePlans,
        };
    }
}
/**
 * Returns true when any room type currently has at least one reservation selected.
 */
function hasAtLeastOneRoomSelected() {
    return Object.values(booking_store.ratePlanSelections).some(roomTypeSelection => Object.values(roomTypeSelection).some(ratePlan => ratePlan.reserved > 0));
}
/**
 * Applies a patch of values to the given room type & rate plan combination.
 */
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
/**
 * Reserves a number of rooms for a rate plan and bootstraps its selection entry if needed.
 */
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes?.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error(`Invalid room type id ${roomTypeId}`);
    }
    const ratePlan = roomType.rateplans.find(r => r.id?.toString() === ratePlanId.toString());
    if (!ratePlan) {
        throw new Error(`Invalid rate plan ${ratePlanId},${roomTypeId}:${JSON.stringify(roomType.rateplans?.map(d => d.id))}`);
    }
    let newGuest = Array.from({ length: rooms }, () => ({ first_name: '', last_name: '', unit: null, bed_preference: null, infant_nbr: null }));
    if (guest) {
        newGuest = guest;
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: [],
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
// -----------------------------------------------------------------------------
// Selectors & Derived Data
// -----------------------------------------------------------------------------
/**
 * Safely retrieves the selection payload for a specific room type/rate plan pair.
 */
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
/**
 * Generic setter for store keys when more specific helpers are unnecessary.
 */
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
/**
 * Sets (or clears) the physical unit + price chosen in the day-use step-1 unit list.
 */
function setDayUseSelection(selection) {
    booking_store.dayUseSelection = selection;
}
/**
 * Returns the amount displayed for a rate plan, honoring overrides and nightly view.
 */
async function getRatePlanDisplayAmount({ rateplanSelection, totalNights, index, bookingService, variationService, }) {
    if (rateplanSelection.is_amount_modified) {
        const net = rateplanSelection.view_mode === '001' ? rateplanSelection.rp_amount : rateplanSelection.rp_amount * totalNights;
        const tax = await bookingService.calculateExclusiveTax({
            property_id: calendarData.calendar_data?.property?.id,
            amount: net,
        });
        return net + tax;
    }
    const guestInfo = rateplanSelection.guest ? rateplanSelection.guest[index] : null;
    let variation = rateplanSelection.selected_variation;
    if (guestInfo?.infant_nbr) {
        variation = variationService.getVariationBasedOnInfants({
            variations: rateplanSelection.ratePlan.variations,
            baseVariation: rateplanSelection.selected_variation,
            infants: guestInfo?.infant_nbr,
        });
    }
    return variation?.discounted_gross_amount ?? 0;
}
/**
 * Aggregates the total booking price combining all selected rate plans.
 */
async function getBookingTotalPrice() {
    const dateDiff = booking.calculateDaysBetweenDates(booking_store.bookingDraft.dates.checkIn.format('YYYY-MM-DD'), booking_store.bookingDraft.dates.checkOut.format('YYYY-MM-DD'));
    const bookingService = new BookingService();
    const variationService = new VariationService();
    let totalPrice = 0;
    for (const roomTypeSelection of Object.values(booking_store.ratePlanSelections)) {
        for (const ratePlan of Object.values(roomTypeSelection)) {
            if (ratePlan.reserved === 0)
                continue;
            if (ratePlan.is_amount_modified) {
                // Modified amounts don't vary per room; avoid repeating the tax request for each room.
                const rateAmount = await getRatePlanDisplayAmount({
                    bookingService,
                    variationService,
                    index: 0,
                    rateplanSelection: ratePlan,
                    totalNights: dateDiff,
                });
                totalPrice += rateAmount * ratePlan.reserved;
                continue;
            }
            for (let roomIndex = 0; roomIndex < ratePlan.reserved; roomIndex++) {
                totalPrice += await getRatePlanDisplayAmount({
                    bookingService,
                    variationService,
                    index: roomIndex,
                    rateplanSelection: ratePlan,
                    totalNights: dateDiff,
                });
            }
        }
    }
    return Number(totalPrice.toFixed(2));
}
/**
 * Counts the number of reserved rooms across all rate plans.
 */
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
/**
 * Clears all reserved rooms and resets per-rate-plan metadata.
 */
function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            const initialInventory = roomType?.inventory ?? ratePlan.roomtype?.inventory ?? ratePlan.visibleInventory;
            rpAcc[ratePlanId] = {
                ...ratePlan,
                reserved: 0,
                guest: null,
                guestName: [],
                checkoutVariations: [],
                checkoutBedSelection: [],
                checkoutSmokingSelection: [],
                visibleInventory: initialInventory ?? 0,
            };
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = { ...updatedSelections };
}
/**
 * Flags whether the booked-by guest fields were manually edited (for UX hints elsewhere).
 */
function setBookedByGuestManualEditState(isEdited) {
    booking_store.bookedByGuestManuallyEdited = isEdited;
}
/**
 * Returns a flat array of each reserved room along with its guest/context.
 */
function getReservedRooms() {
    const reservedRooms = [];
    Object.entries(booking_store.ratePlanSelections).forEach(([roomTypeId, ratePlans]) => {
        Object.entries(ratePlans).forEach(([ratePlanId, ratePlanSelection]) => {
            if (!ratePlanSelection.reserved) {
                return;
            }
            const guests = ratePlanSelection.guest ?? [];
            for (let reservationIndex = 0; reservationIndex < ratePlanSelection.reserved; reservationIndex++) {
                reservedRooms.push({
                    roomTypeId: Number(roomTypeId),
                    ratePlanId: Number(ratePlanId),
                    reservationIndex,
                    guest: guests[reservationIndex] ?? null,
                    ratePlanSelection,
                });
            }
        });
    });
    return reservedRooms;
}
/**
 * Syncs the primary guest's first or last name to the first reserved room,
 * but only if that field has not already been filled.
 */
function syncFirstRoomGuestName(field, value) {
    const firstRoom = getReservedRooms()[0];
    if (!firstRoom || !firstRoom.guest || firstRoom.guest[field]) {
        return;
    }
    const guests = [...(firstRoom.ratePlanSelection.guest ?? [])];
    guests[firstRoom.reservationIndex] = {
        ...guests[firstRoom.reservationIndex],
        [field]: value,
    };
    updateRoomGuest({
        ratePlanSelection: firstRoom.ratePlanSelection,
        ratePlanId: firstRoom.ratePlanId,
        roomTypeId: firstRoom.roomTypeId,
        guest: guests,
    });
}
/**
 * Fills empty first/last names on reserved rooms with a placeholder.
 * Meant to run right before validating/submitting a reservation with multiple rooms.
 */
function fillMissingReservedGuestNames(placeholder = 'tba') {
    Object.entries(booking_store.ratePlanSelections).forEach(([roomTypeId, ratePlans]) => {
        Object.entries(ratePlans).forEach(([ratePlanId, ratePlanSelection]) => {
            if (!ratePlanSelection.reserved || !ratePlanSelection.guest) {
                return;
            }
            let hasChanges = false;
            const guests = ratePlanSelection.guest.map((guest, index) => {
                if (index >= ratePlanSelection.reserved || !guest) {
                    return guest;
                }
                const needsFirstName = !guest.first_name?.trim();
                const needsLastName = !guest.last_name?.trim();
                if (!needsFirstName && !needsLastName) {
                    return guest;
                }
                hasChanges = true;
                return {
                    ...guest,
                    first_name: needsFirstName ? placeholder : guest.first_name,
                    last_name: needsLastName ? placeholder : guest.last_name,
                };
            });
            if (hasChanges) {
                updateRoomGuest({
                    ratePlanSelection,
                    ratePlanId: Number(ratePlanId),
                    roomTypeId: Number(roomTypeId),
                    guest: guests,
                });
            }
        });
    });
}

exports.BookingService = BookingService;
exports.VariationService = VariationService;
exports.bookedByGuestBaseData = bookedByGuestBaseData;
exports.booking_store = booking_store;
exports.calculateTotalRooms = calculateTotalRooms;
exports.fillMissingReservedGuestNames = fillMissingReservedGuestNames;
exports.getBookingTotalPrice = getBookingTotalPrice;
exports.getReservedRooms = getReservedRooms;
exports.getVisibleInventory = getVisibleInventory;
exports.hasAtLeastOneRoomSelected = hasAtLeastOneRoomSelected;
exports.modifyBookingStore = modifyBookingStore;
exports.reserveRooms = reserveRooms;
exports.resetAvailability = resetAvailability;
exports.resetBookingStore = resetBookingStore;
exports.resetReserved = resetReserved;
exports.setBookedByGuestManualEditState = setBookedByGuestManualEditState;
exports.setBookingDraft = setBookingDraft;
exports.setBookingSelectOptions = setBookingSelectOptions;
exports.setDayUseSelection = setDayUseSelection;
exports.syncFirstRoomGuestName = syncFirstRoomGuestName;
exports.updateBookedByGuest = updateBookedByGuest;
exports.updateRoomGuest = updateRoomGuest;
exports.updateRoomParams = updateRoomParams;
