import { T as Token, M as MissingTokenError } from './Token.js';
import { a as app_store } from './app.store.js';
import { b as booking_store } from './booking.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store.js';
import { d as dateFns, g as getDateDifference } from './utils.js';
import { a as axios } from './axios.js';

class PropertyService extends Token {
    async getExposedProperty(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        // const { data } = await axios.post(`/Get_Exposed_Property?Ticket=${token}`, params);
        const res = await fetch(`https://gateway.igloorooms.com/IR/Get_Exposed_Property?Ticket=${token}`, {
            body: JSON.stringify(params),
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...result.My_Result.roomtypes];
        }
        app_store.property = Object.assign({}, result.My_Result);
        return result.My_Result;
    }
    async getExposedBookingAvailability(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        let roomtypeIds = [];
        const { injected, roomtype_id } = app_store.app_data;
        if (injected) {
            roomtypeIds.push(roomtype_id);
        }
        const { data } = await axios.post(`/Get_Exposed_Booking_Availability?Ticket=${token}`, Object.assign(Object.assign({}, params), { room_type_ids: roomtypeIds, skip_getting_assignable_units: true }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        booking_store.roomTypes = [...result.My_Result.roomtypes];
        booking_store.tax_statement = { message: result.My_Result.tax_statement };
        booking_store.enableBooking = true;
        return result;
    }
    async fetchSetupEntries() {
        try {
            const token = this.getToken();
            if (token) {
                if (app_store.setup_entries) {
                    return app_store.setup_entries;
                }
                const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI?Ticket=${token}`, {
                    TBL_NAMES: ['_ARRIVAL_TIME', '_RATE_PRICING_MODE', '_BED_PREFERENCE_TYPE'],
                });
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                const res = data.My_Result;
                const setupEntries = {
                    arrivalTime: res.filter(e => e.TBL_NAME === '_ARRIVAL_TIME'),
                    ratePricingMode: res.filter(e => e.TBL_NAME === '_RATE_PRICING_MODE'),
                    bedPreferenceType: res.filter(e => e.TBL_NAME === '_BED_PREFERENCE_TYPE'),
                };
                app_store.setup_entries = setupEntries;
                updateUserFormData('arrival_time', setupEntries.arrivalTime[0].CODE_NAME);
                return setupEntries;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    generateDays(from_date, to_date, amount) {
        const endDate = to_date;
        let currentDate = from_date;
        const days = [];
        while (currentDate < endDate) {
            days.push({
                date: dateFns.format(currentDate, 'yyyy-MM-dd'),
                amount: amount,
                cost: null,
            });
            currentDate = dateFns.addDays(currentDate, 1);
        }
        return days;
    }
    filterRooms() {
        let rooms = [];
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
                        var _a, _b, _c;
                        rooms.push({
                            identifier: null,
                            roomtype: rp.roomtype,
                            rateplan: rp.ratePlan,
                            unit: null,
                            smoking_option: rp.checkoutSmokingSelection[index],
                            occupancy: {
                                adult_nbr: rp.checkoutVariations[index].adult_nbr,
                                children_nbr: rp.checkoutVariations[index].child_nbr,
                                infant_nbr: null,
                            },
                            bed_preference: rp.is_bed_configuration_enabled ? rp.checkoutBedSelection[index] : null,
                            from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                            to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                            notes: null,
                            days: this.generateDays(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date, +rp.checkoutVariations[index].amount / getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date)),
                            guest: {
                                email: null,
                                first_name: ((_a = checkout_store.userFormData) === null || _a === void 0 ? void 0 : _a.bookingForSomeoneElse)
                                    ? rp.guestName[index]
                                    : (((_b = checkout_store.userFormData) === null || _b === void 0 ? void 0 : _b.firstName) || '') + ' ' + (((_c = checkout_store.userFormData) === null || _c === void 0 ? void 0 : _c.lastName) || ''),
                                last_name: null,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                            },
                        });
                    });
                }
            });
        });
        return rooms;
    }
    convertPickup(pickup) {
        let res = {};
        const [hour, minute] = pickup.arrival_time.split(':');
        res = {
            booking_nbr: null,
            is_remove: false,
            currency: pickup.currency,
            date: pickup.arrival_date,
            details: pickup.flight_details || null,
            hour: Number(hour),
            minute: Number(minute),
            nbr_of_units: pickup.number_of_vehicles,
            selected_option: pickup.selected_option,
            total: Number(pickup.due_upon_booking),
        };
        return res;
    }
    async bookUser() {
        var _a;
        try {
            const token = this.getToken();
            if (!token) {
                throw new MissingTokenError();
            }
            let guest = {
                email: checkout_store.userFormData.email,
                first_name: checkout_store.userFormData.firstName,
                last_name: checkout_store.userFormData.lastName,
                country_id: checkout_store.userFormData.country_id,
                city: null,
                mobile: checkout_store.userFormData.country_code + checkout_store.userFormData.mobile_number,
                address: '',
                dob: null,
                subscribe_to_news_letter: true,
                cci: null,
            };
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                agent: booking_store.bookingAvailabilityParams.agent ? { id: booking_store.bookingAvailabilityParams.agent } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_a = booking_store.bookingAvailabilityParams.coupon) !== null && _a !== void 0 ? _a : null,
                booking: {
                    booking_nbr: '',
                    from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                    to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    source: null,
                    referrer_site: 'www.igloorooms.com',
                    currency: app_store.property.currency,
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                pickup_info: checkout_store.pickup.location ? this.convertPickup(checkout_store.pickup) : null,
            };
            const { data } = await axios.post(`/DoReservation?Ticket=${token}`, body);
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
}

export { PropertyService as P };

//# sourceMappingURL=property.service.js.map