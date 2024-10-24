'use strict';

const axios = require('./axios-b86c5465.js');
const utils = require('./utils-34705107.js');
const booking = require('./booking-c11bc999.js');

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
            const { data } = await axios.axios.post(`/Get_Exposed_Calendar`, {
                propertyid,
                from_date,
                to_date,
                extras: utils.extras,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const months = data.My_Result.months;
            const customMonths = [];
            const myBooking = await booking.getMyBookings(months);
            const days = months
                .map(month => {
                customMonths.push({
                    daysCount: month.days.length,
                    monthName: month.description,
                });
                return month.days.map(day => ({
                    day: utils.convertDateToCustomFormat(day.description, month.description),
                    currentDate: utils.convertDateToTime(day.description, month.description),
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
    async editExposedGuest(guest, book_nbr) {
        try {
            const { data } = await axios.axios.post(`/Edit_Exposed_Guest`, Object.assign(Object.assign({}, guest), { book_nbr }));
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
            const { data } = await axios.axios.post(`/Get_Exposed_Booking_Availability`, Object.assign(Object.assign({}, rest), { adult_nbr: adultChildCount.adult, child_nbr: adultChildCount.child, currency_ref: currency.code, is_backend: true }));
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
    async fetchSetupEntries() {
        try {
            const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, {
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
    async getBlockedInfo() {
        try {
            const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: ['_CALENDAR_BLOCKED_TILL'] });
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
        const { data } = await axios.axios.post(`/DoReservation`, Object.assign(Object.assign({}, body), { extras: body.extras ? body.extras : utils.extras }));
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
            const result = await this.doReservation(body);
            return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}

exports.BookingService = BookingService;

//# sourceMappingURL=booking.service-8141fe8e.js.map