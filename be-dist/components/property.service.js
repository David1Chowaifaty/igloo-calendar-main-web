import { M as MissingTokenError, T as Token } from './Token.js';
import { b as booking_store } from './booking.js';
import { a as axios } from './axios.js';
import { d as dateFns, g as getDateDifference } from './utils.js';
import { a as app_store } from './app.store.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store.js';

class PropertyHelpers {
    validateModeProps(props) {
        if (props.mode === PropertyHelpers.MODE_MODIFY_RT && (!props.rp_id || !props.rt_id)) {
            throw new Error('Missing property: rp_id or rt_id is required in modify_rt mode');
        }
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
    updateBookingStore(data, props) {
        try {
            let roomtypes = [...booking_store.roomTypes];
            const newRoomtypes = data.My_Result.roomtypes;
            if (props.mode === PropertyHelpers.MODE_DEFAULT) {
                roomtypes = this.updateInventory(roomtypes, newRoomtypes);
                roomtypes = this.sortRoomTypes(roomtypes, {
                    adult_nbr: props.params.adult_nbr,
                    child_nbr: props.params.child_nbr,
                });
            }
            else {
                roomtypes = this.updateRoomTypeRatePlans(roomtypes, newRoomtypes, props);
            }
            booking_store.roomTypes = roomtypes;
            booking_store.tax_statement = { message: data.My_Result.tax_statement };
            booking_store.enableBooking = true;
        }
        catch (error) {
            console.error(error);
        }
    }
    validateToken(token) {
        if (!token) {
            throw new MissingTokenError();
        }
    }
    collectRoomTypeIds(props) {
        return props.rt_id ? [props.rt_id] : [];
    }
    collectRatePlanIds(props) {
        return props.rp_id ? [props.rp_id] : [];
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
    extractFirstNameAndLastName(index, guestName) {
        const names = guestName[index].split(' ');
        return { first_name: names[0] || null, last_name: names[1] || null };
    }
    async fetchAvailabilityData(token, props, roomtypeIds, rateplanIds) {
        const response = await axios.post(`/Get_Exposed_Booking_Availability?Ticket=${token}`, Object.assign(Object.assign({}, props.params), { identifier: props.identifier, room_type_ids: roomtypeIds, rate_plan_ids: rateplanIds, skip_getting_assignable_units: true, is_specific_variation: true }));
        const result = response.data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result;
    }
    updateInventory(roomtypes, newRoomtypes) {
        const newRoomtypesMap = new Map(newRoomtypes.map(rt => [rt.id, rt]));
        return roomtypes.reduce((updatedRoomtypes, rt) => {
            const newRoomtype = newRoomtypesMap.get(rt.id);
            if (!newRoomtype) {
                return updatedRoomtypes;
            }
            const updatedRoomtype = Object.assign(Object.assign({}, rt), { inventory: newRoomtype.inventory, rateplans: rt.rateplans.reduce((updatedRatePlans, rp) => {
                    const newRatePlan = newRoomtype.rateplans.find(newRP => newRP.id === rp.id);
                    if (!newRatePlan || !newRatePlan.is_active || !newRatePlan.is_booking_engine_enabled) {
                        return updatedRatePlans;
                    }
                    console.log(rp.variations);
                    updatedRatePlans.push(Object.assign(Object.assign({}, newRatePlan), { variations: rp.variations, selected_variation: newRatePlan.variations ? newRatePlan.variations[0] : null }));
                    return updatedRatePlans;
                }, []) });
            updatedRoomtypes.push(updatedRoomtype);
            return updatedRoomtypes;
        }, []);
    }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            // Move room types with zero inventory to the end
            if (a.inventory === 0 && b.inventory !== 0)
                return 1;
            if (a.inventory !== 0 && b.inventory === 0)
                return -1;
            // Check for variations where is_calculated is true and amount is 0
            const zeroCalculatedA = a.rateplans.some(plan => plan.variations.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)));
            const zeroCalculatedB = b.rateplans.some(plan => plan.variations.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)));
            // Prioritize these types to be before inventory 0 but after all others
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations
            const matchA = a.rateplans.some(plan => plan.variations.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            const matchB = b.rateplans.some(plan => plan.variations.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr));
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation in any attribute, for example `amount`
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan.variations.map(variation => variation.amount)));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan.variations.map(variation => variation.amount)));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            return 0;
        });
    }
    updateRoomTypeRatePlans(roomtypes, newRoomtypes, props) {
        var _a;
        const selectedRoomTypeIdx = roomtypes.findIndex(rt => rt.id === props.rt_id);
        if (selectedRoomTypeIdx === -1) {
            throw new Error('Invalid RoomType');
        }
        const selectednewRoomTypeIdx = newRoomtypes.findIndex(rt => rt.id === props.rt_id);
        if (selectedRoomTypeIdx === -1) {
            throw new Error('Invalid RoomType');
        }
        if (selectednewRoomTypeIdx === -1) {
            throw new Error('Invalid New RoomType');
        }
        const newRatePlan = (_a = newRoomtypes[selectednewRoomTypeIdx].rateplans) === null || _a === void 0 ? void 0 : _a.find(rp => rp.id === props.rp_id);
        if (!newRatePlan) {
            throw new Error('Invalid New Rateplan');
        }
        const newVariation = newRatePlan.variations.find(v => v.adult_child_offering === props.adultChildConstraint);
        console.log(newRatePlan.variations, props.adultChildConstraint);
        if (!newVariation) {
            throw new Error('Missing variation');
        }
        roomtypes[selectedRoomTypeIdx] = Object.assign(Object.assign({}, roomtypes[selectedRoomTypeIdx]), { rateplans: roomtypes[selectedRoomTypeIdx].rateplans.map(rp => {
                return Object.assign(Object.assign({}, rp), { variations: rp.variations.map(v => {
                        if (v.adult_child_offering === props.adultChildConstraint && rp.id === props.rp_id) {
                            return newVariation;
                        }
                        return v;
                    }) });
            }) });
        return roomtypes;
    }
}
PropertyHelpers.MODE_MODIFY_RT = 'modify_rt';
PropertyHelpers.MODE_DEFAULT = 'default';

class Colors {
    hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    }
    rgbToHsl(rgb) {
        let r = parseInt(rgb.r);
        let g = parseInt(rgb.g);
        let b = parseInt(rgb.b);
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        return { h: Math.round(h), s: Math.round(s), l: Math.round(l) };
    }
    hexToHSL(hex) {
        const rgb = this.hexToRgb(hex);
        return this.rgbToHsl(rgb);
    }
    generateColorShades(baseHex) {
        const { h, s, l: baseL } = this.hexToHSL(baseHex);
        let shades = [];
        for (let i = -3; i <= 6; i++) {
            let l = baseL + i * 4;
            shades.push({ h, s, l: Math.min(Math.max(l, 0), 100) });
        }
        return shades;
    }
    initTheme(property) {
        if (property.space_theme) {
            const root = document.documentElement;
            const shades = this.generateColorShades(property.space_theme.button_bg_color);
            let shade_number = 900;
            shades.forEach((shade, index) => {
                root.style.setProperty(`--brand-${shade_number}`, `${shade.h}, ${shade.s}%, ${shade.l}%`);
                if (index === 9) {
                    shade_number = 25;
                }
                else if (index === 8) {
                    shade_number = 50;
                }
                else {
                    shade_number = shade_number - 100;
                }
            });
        }
    }
}

class PropertyService extends Token {
    constructor() {
        super(...arguments);
        this.propertyHelpers = new PropertyHelpers();
        this.colors = new Colors();
    }
    async getExposedProperty(params, initTheme = true) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Property?Ticket=${token}`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: !!booking_store.bookingAvailabilityParams.agent }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        // if (result.My_Result.tags) {
        //   result.My_Result.tags.map(({ key, value }) => {
        //     if (!value) {
        //       return;
        //     }
        //     switch (key) {
        //       case 'header':
        //         return injectHTML(value, 'head', 'first');
        //       case 'body':
        //         return injectHTML(value, 'body', 'first');
        //       case 'footer':
        //         return injectHTML(value, 'body', 'last');
        //     }
        //   });
        // }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...result.My_Result.roomtypes];
        }
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        app_store.property = Object.assign({}, result.My_Result);
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
        }
        return result.My_Result;
    }
    async getExposedBookingAvailability(props) {
        const token = this.getToken();
        this.propertyHelpers.validateToken(token);
        this.propertyHelpers.validateModeProps(props);
        const roomtypeIds = this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(token, props, roomtypeIds, rateplanIds);
        this.propertyHelpers.updateBookingStore(data, props);
        return data;
    }
    async getExposedBooking(params, withExtras = true) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Booking?Ticket=${token}`, Object.assign(Object.assign({}, params), { extras: withExtras ? [{ key: 'payment_code', value: '' }] : null }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result.My_Result;
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
    filterRooms() {
        let rooms = [];
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
                        var _a;
                        const { first_name, last_name } = this.propertyHelpers.extractFirstNameAndLastName(index, rp.guestName);
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
                            days: this.propertyHelpers.generateDays(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date, +rp.checkoutVariations[index].amount / getDateDifference(booking_store.bookingAvailabilityParams.from_date, booking_store.bookingAvailabilityParams.to_date)),
                            guest: {
                                email: null,
                                first_name,
                                last_name,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                                cci: ['001', '004'].includes((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code)
                                    ? () => {
                                        const payment = checkout_store.payment;
                                        return {
                                            nbr: payment === null || payment === void 0 ? void 0 : payment.cardNumber,
                                            holder_name: payment === null || payment === void 0 ? void 0 : payment.cardHolderName,
                                            expiry_month: payment === null || payment === void 0 ? void 0 : payment.expiry_month.split('/')[0],
                                            expiry_year: payment === null || payment === void 0 ? void 0 : payment.expiry_year.split('/')[1],
                                            cvc: (payment === null || payment === void 0 ? void 0 : payment.code) === '001' ? payment.cvc : null,
                                        };
                                    }
                                    : null,
                            },
                        });
                    });
                }
            });
        });
        return rooms;
    }
    async editExposedGuest(guest, book_nbr) {
        try {
            const token = this.getToken();
            if (token !== null) {
                const { data } = await axios.post(`/Edit_Exposed_Guest?Ticket=${token}`, Object.assign(Object.assign({}, guest), { book_nbr }));
                if (data.ExceptionMsg !== '') {
                    throw new Error(data.ExceptionMsg);
                }
                return data.My_Result;
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
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
                mobile: checkout_store.userFormData.mobile_number,
                address: '',
                phone_prefix: checkout_store.userFormData.country_code,
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
                    source: app_store.app_data.source,
                    referrer_site: app_store.app_data.affiliate ? window.location.href : 'www.igloorooms.com',
                    currency: app_store.property.currency,
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                extras: [
                    {
                        key: 'payment_code',
                        value: checkout_store.payment.code,
                    },
                ],
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
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
    async getExposedGuest() {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Guest?Ticket=${token}`, {
            email: null,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const res = data.My_Result;
        if (res === null) {
            app_store.is_signed_in = false;
            return;
        }
        app_store.is_signed_in = true;
        checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_id: res.country_id, email: res.email, firstName: res.first_name, lastName: res.last_name, mobile_number: res.mobile, country_code: res.country_id });
    }
}

export { PropertyService as P };

//# sourceMappingURL=property.service.js.map