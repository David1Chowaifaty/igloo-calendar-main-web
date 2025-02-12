import { a as axios } from './axios-ab377903.js';
import { e as extras, p as convertDateToCustomFormat, q as convertDateToTime, d as dateToFormattedString } from './utils-dd6c418e.js';
import { e as getMyBookings } from './booking-b6392140.js';
import { c as createStore } from './index-1d7b1ff2.js';
import { c as calendar_data } from './calendar-data-2333f282.js';

const initialState = {
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
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
let { state: booking_store, onChange: onRoomTypeChange, reset } = createStore(initialState);
function resetBookingStore() {
    reset();
}
function checkVariation(variations, selected_variation) {
    var _a;
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return variations[0];
    }
    return (_a = variations === null || variations === void 0 ? void 0 : variations.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr)) !== null && _a !== void 0 ? _a : null;
}
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (!roomType.is_active)
            return;
        ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
        roomType.rateplans.forEach(ratePlan => {
            var _a, _c, _d, _e;
            if (!ratePlan.is_active || !((_a = ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations) === null || _a === void 0 ? void 0 : _a.length))
                return;
            const currentRatePlanSelection = (_c = currentSelections[roomType.id]) === null || _c === void 0 ? void 0 : _c[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? Object.assign(Object.assign({}, currentRatePlanSelection), { ratePlan, selected_variation: (_d = checkVariation(ratePlan.variations, currentRatePlanSelection.selected_variation)) !== null && _d !== void 0 ? _d : null, visibleInventory: roomType.inventory, reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved, checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations, checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection, checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection, guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName, roomtype: Object.assign({}, currentRatePlanSelection.roomtype) }) : {
                    reserved: 0,
                    rp_amount: 0,
                    view_mode: '001',
                    guest: null,
                    visibleInventory: roomType.inventory,
                    selected_variation: (_e = ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations[0]) !== null && _e !== void 0 ? _e : null,
                    ratePlan,
                    guestName: [],
                    is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                    roomtype: Object.assign(Object.assign({}, roomType), { physicalrooms: null, rateplans: null, availabilities: null }),
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
            Object.assign(Object.assign({}, ratePlan), { visibleInventory: availableRooms > 0 ? availableRooms : 0 }),
        ];
    }));
    if (JSON.stringify(roomTypeSelection) !== JSON.stringify(newRatePlans)) {
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: newRatePlans });
    }
}
function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    console.log(ratePlanId, roomTypeId, params);
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), params) }) });
    console.log(booking_store.ratePlanSelections);
}
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    var _a;
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error('Invalid room type id');
    }
    const ratePlan = roomType.rateplans.find(r => r.id === ratePlanId);
    if (!ratePlan) {
        throw new Error('Invalid rate plan');
    }
    let newGuest = Array.from({ length: rooms }, () => ({ name: '', unit: null, bed_preference: null, infant_nbr: null }));
    console.log('guest', guest);
    if (guest) {
        newGuest = guest;
    }
    console.log('newGuest', newGuest);
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        console.log('new guest', newGuest);
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
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), { reserved: rooms, checkoutVariations: [], guest: newGuest }) }) });
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
class BookingService {
    async getCalendarData(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const months = data.My_Result.months;
            const customMonths = [];
            const myBooking = await getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                });
                return month.days.map(day => ({
                    day: convertDateToCustomFormat(day.description, month.description),
                    currentDate: convertDateToTime(day.description, month.description),
                    dayDisplayName: day.description,
                    rate: day.room_types,
                    unassigned_units_nbr: day.unassigned_units_nbr,
                    occupancy: day.occupancy,
                }));
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
    async fetchGuest(email) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Guest`, { email });
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
            const { data } = await axios.post(`/Change_Exposed_Booking_Status`, props);
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
            const { data } = await axios.post(`/Get_Exposed_PMS_Logs`, { booking_nbr });
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
            const { data } = await axios.post(`/Get_Exposed_Booking_Events`, { booking_nbr });
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
            const { data } = await axios.post(`/Edit_Exposed_Guest`, Object.assign(Object.assign({}, guest), { book_nbr }));
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
            const { adultChildCount, currency } = props, rest = __rest(props, ["adultChildCount", "currency"]);
            const { data } = await axios.post(`/Check_Availability`, Object.assign(Object.assign({}, rest), { adult_nbr: adultChildCount.adult, child_nbr: adultChildCount.child, currency_ref: currency.code, skip_getting_assignable_units: !calendar_data.is_frontdesk_enabled, is_backend: true }));
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
            var _a, _b, _c, _d;
            // Priority to available rooms
            if (a.is_available_to_book && !b.is_available_to_book)
                return -1;
            if (!a.is_available_to_book && b.is_available_to_book)
                return 1;
            // Check for variations where is_calculated is true and amount is 0 or null
            const zeroCalculatedA = (_a = a.rateplans) === null || _a === void 0 ? void 0 : _a.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null); });
            const zeroCalculatedB = (_b = b.rateplans) === null || _b === void 0 ? void 0 : _b.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null); });
            // Prioritize these types to be before inventory 0 but after all available ones
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations based on user criteria
            const matchA = (_c = a.rateplans) === null || _c === void 0 ? void 0 : _c.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            const matchB = (_d = b.rateplans) === null || _d === void 0 ? void 0 : _d.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation amount
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.map(variation => { var _a; return (_a = variation.discounted_amount) !== null && _a !== void 0 ? _a : 0; }); }));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.map(variation => { var _a; return (_a = variation.discounted_amount) !== null && _a !== void 0 ? _a : 0; }); }));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            return 0;
        });
    }
    modifyRateplans(roomTypes) {
        return roomTypes === null || roomTypes === void 0 ? void 0 : roomTypes.map(rt => { var _a; return (Object.assign(Object.assign({}, rt), { rateplans: (_a = rt.rateplans) === null || _a === void 0 ? void 0 : _a.map(rp => { var _a; return (Object.assign(Object.assign({}, rp), { variations: this.sortVariations((_a = rp === null || rp === void 0 ? void 0 : rp.variations) !== null && _a !== void 0 ? _a : []) })); }) })); });
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
            const { data } = await axios.post(`/Get_Exposed_Countries`, {
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
    async getBedPreferences() {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME`, {
            TBL_NAME: '_BED_PREFERENCE_TYPE',
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result;
        return res;
    }
    async fetchSetupEntries() {
        try {
            const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, {
                TBL_NAMES: ['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE'],
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const res = data.My_Result;
            return {
                arrivalTime: res.filter(e => e.TBL_NAME === '_ARRIVAL_TIME'),
                ratePricingMode: res.filter(e => e.TBL_NAME === '_RATE_PRICING_MODE'),
                bedPreferenceType: res.filter(e => e.TBL_NAME === '_BED_PREFERENCE_TYPE'),
            };
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async doBookingExtraService({ booking_nbr, service, is_remove }) {
        const { data } = await axios.post(`/Do_Booking_Extra_Service`, Object.assign(Object.assign({}, service), { booking_nbr, is_remove }));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getBlockedInfo() {
        try {
            const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: ['_CALENDAR_BLOCKED_TILL'] });
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
    async getUserDefaultCountry() {
        try {
            const { data } = await axios.post(`/Get_Country_By_IP`, {
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
            const { data } = await axios.post(`/Block_Exposed_Unit`, params);
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
    async getUserInfo(email) {
        try {
            const { data } = await axios.post(`/GET_EXPOSED_GUEST`, {
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
            const { data } = await axios.post(`/Get_Exposed_Booking`, {
                booking_nbr,
                language,
                extras: withExtras ? extras : null,
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
            const { data } = await axios.post(`/Fetch_Exposed_Guests`, {
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
            const { data } = await axios.post(`/Fetch_Exposed_Bookings`, {
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
            const { data } = await axios.post(`/Get_PCI_Card_Info_URL`, {
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
        const { data } = await axios.post(`/DoReservation`, Object.assign(Object.assign({}, body), { extras: body.extras ? body.extras : extras }));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        console.log(data['My_Result']);
        return data['My_Result'];
    }
    async bookUser({ bookedByInfoData, check_in, currency, extras = null, fromDate, guestData, pickup_info, propertyid, rooms, source, toDate, totalNights, arrivalTime, bookingNumber, defaultGuest, identifier, pr_id, }) {
        try {
            const fromDateStr = dateToFormattedString(fromDate);
            const toDateStr = dateToFormattedString(toDate);
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
                guest = Object.assign(Object.assign({}, defaultGuest), { email: defaultGuest.email === '' ? null : defaultGuest.email });
            }
            if (bookedByInfoData.id) {
                guest = Object.assign(Object.assign({}, guest), { id: bookedByInfoData.id });
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
}

export { BookingService as B, resetBookingStore as a, booking_store as b, calculateTotalRooms as c, getVisibleInventory as g, modifyBookingStore as m, reserveRooms as r, updateRoomParams as u };

//# sourceMappingURL=booking.service-035ed2bc.js.map