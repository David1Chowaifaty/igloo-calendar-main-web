import { b as booking_store, d as dateFns, n as normalize, g as getCurrencyByCode, i as injectHTML, V as VariationService } from './utils.js';
import { a as axios } from './axios.js';
import { b as app_store } from './app.store.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store.js';

class PropertyHelpers {
    convertPickup(pickup) {
        let res = {};
        const [hour, minute] = pickup.arrival_time.split(':');
        res = {
            booking_nbr: null,
            is_remove: false,
            currency: pickup.currency,
            date: pickup.arrival_date.format('YYYY-MM-DD'),
            details: pickup.flight_details || null,
            hour: Number(hour),
            minute: Number(minute),
            nbr_of_units: pickup.number_of_vehicles,
            selected_option: pickup.selected_option,
            total: Number(pickup.due_upon_booking),
        };
        return res;
    }
    updateBookingStore(data) {
        try {
            const newRoomtypes = data.My_Result;
            const { adult_nbr, child_nbr } = data.My_Params_Check_Availability;
            const sortedRoomTypes = this.sortRoomTypes(newRoomtypes, { adult_nbr, child_nbr });
            booking_store.roomTypes = [...sortedRoomTypes.map(rt => { var _a; return (Object.assign(Object.assign({}, rt), { rateplans: (_a = rt.rateplans) === null || _a === void 0 ? void 0 : _a.map(rp => { var _a; return (Object.assign(Object.assign({}, rp), { variations: this.sortVariations((_a = rp === null || rp === void 0 ? void 0 : rp.variations) !== null && _a !== void 0 ? _a : []) })); }) })); })];
            booking_store.enableBooking = true;
        }
        catch (error) {
            console.error(error);
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
    async fetchAvailabilityData(props, roomtypeIds, rateplanIds) {
        const response = await axios.post(`/Check_Availability`, Object.assign(Object.assign({}, props), { from_date: props.from_date.locale('en').format('YYYY-MM-DD'), to_date: props.to_date.locale('en').format('YYYY-MM-DD'), room_type_ids: roomtypeIds, rate_plan_ids: rateplanIds, skip_getting_assignable_units: true, is_specific_variation: true, is_backend: false }));
        const result = response.data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result;
    }
    sortRoomTypes(roomTypes, userCriteria) {
        const getRatePlanPrices = (rateplan) => {
            var _a;
            return (_a = rateplan.flatMap(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.map(variation => { var _a; return (_a = variation.discounted_amount) !== null && _a !== void 0 ? _a : 0; }); })) === null || _a === void 0 ? void 0 : _a.filter(Boolean);
        };
        return roomTypes.sort((a, b) => {
            var _a, _b;
            // Priority to available rooms
            if (a.is_available_to_book && !b.is_available_to_book)
                return -1;
            if (!a.is_available_to_book && b.is_available_to_book)
                return 1;
            // Check for exact matching variations based on user criteria
            const matchA = (_a = a.rateplans) === null || _a === void 0 ? void 0 : _a.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            const matchB = (_b = b.rateplans) === null || _b === void 0 ? void 0 : _b.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation amount
            const maxVariationA = Math.max(...getRatePlanPrices(a.rateplans));
            const maxVariationB = Math.max(...getRatePlanPrices(b.rateplans));
            if (maxVariationA < maxVariationB)
                return -1;
            if (maxVariationA > maxVariationB)
                return 1;
            //Sort by roomtype name
            const rtName1 = a.name.toLowerCase();
            const rtName2 = b.name.toLowerCase();
            if (rtName1 < rtName2) {
                return -1;
            }
            if (rtName1 > rtName2) {
                return 1;
            }
            return 0;
        });
    }
    // private sortRoomTypes(roomTypes: RoomType[], userCriteria: { adult_nbr: number; child_nbr: number }): RoomType[] {
    //   return roomTypes.sort((a, b) => {
    //     // Priority to available rooms
    //     if (a.is_available_to_book && !b.is_available_to_book) return -1;
    //     if (!a.is_available_to_book && b.is_available_to_book) return 1;
    //     // Check for variations where is_calculated is true and amount is 0 or null
    //     const zeroCalculatedA = a.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
    //     const zeroCalculatedB = b.rateplans?.some(plan => plan.variations?.some(variation => variation.discounted_amount === 0 || variation.discounted_amount === null));
    //     // Prioritize these types to be before inventory 0 but after all available ones
    //     if (zeroCalculatedA && !zeroCalculatedB) return 1;
    //     if (!zeroCalculatedA && zeroCalculatedB) return -1;
    //     // Check for exact matching variations based on user criteria
    //     const matchA = a.rateplans?.some(plan =>
    //       plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr),
    //     );
    //     const matchB = b.rateplans?.some(plan =>
    //       plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr),
    //     );
    //     if (matchA && !matchB) return -1;
    //     if (!matchA && matchB) return 1;
    //     // Sort by the highest variation amount
    //     const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
    //     const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan.variations?.map(variation => variation.discounted_amount ?? 0)));
    //     if (maxVariationA < maxVariationB) return -1;
    //     if (maxVariationA > maxVariationB) return 1;
    //     return 0;
    //   });
    // }
    sortVariations(variations) {
        return variations.sort((a, b) => {
            // Sort by adult_nbr in descending order first
            if (b.adult_nbr !== a.adult_nbr) {
                return b.adult_nbr - a.adult_nbr;
            }
            // If adult_nbr is the same, sort by child_nbr in descending order
            return b.child_nbr - a.child_nbr;
        });
    }
}

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
        let base_theme_color = '#e93e57';
        let radius = null;
        if (property.space_theme) {
            base_theme_color = property.space_theme.button_bg_color;
            radius = property.space_theme.button_border_radius;
        }
        const root = document.documentElement;
        const shades = this.generateColorShades(base_theme_color);
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
        if (!radius) {
            return;
        }
        root.style.setProperty('--radius', radius + 'px');
    }
}

class PropertyService {
    constructor() {
        this.propertyHelpers = new PropertyHelpers();
        this.colors = new Colors();
        // Returns a Currency object from app_store.currencies or null if no change is needed.
        // Priority: user's currency (if allowed) → hotel's currency (if allowed) → first allowed currency.
        // If the chosen currency equals the user's currency, returns null to indicate no switch is needed.
        this.getMostEffectiveCurrency = (paymentMethod) => {
            var _a, _b, _c;
            const allowed = normalize((paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.allowed_currencies) || '');
            if (!allowed)
                return null;
            const allowedList = allowed
                .split(',')
                .map(c => normalize(c))
                .filter(Boolean);
            if (allowedList.length === 0)
                return null;
            // Resolve user + hotel currency objects (fall back to 'usd' only if needed)
            const userCode = normalize((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.currency_id) || 'usd';
            const hotelCode = normalize((_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.currency) === null || _c === void 0 ? void 0 : _c.code);
            const hotelCurrency = hotelCode ? getCurrencyByCode(hotelCode) : null;
            // 1) If the user's currency is allowed → no change.
            if (allowedList.includes(userCode))
                return null;
            // 2) If the hotel's currency is allowed → switch to hotel currency.
            if (hotelCode && allowedList.includes(hotelCode) && hotelCurrency)
                return hotelCurrency;
            // 3) Otherwise, pick the first allowed currency we can resolve from the store.
            for (const code of allowedList) {
                const cur = getCurrencyByCode(code);
                if (cur) {
                    // If this equals user currency (rare: user not in allowedList but store normalization mismatch), treat as no change.
                    if (normalize(cur.code) === userCode)
                        return null;
                    return cur;
                }
            }
            // If none of the allowed codes exist in app_store.currencies, don't switch.
            return null;
        };
    }
    async getExposedProperty(params, initTheme = true) {
        var _a, _b, _c, _d;
        const { data } = await axios.post(`/Get_Exposed_Property`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: true }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.tags && !PropertyService.initialized) {
            PropertyService.initialized = true;
            result.My_Result.tags.map(({ key, value }) => {
                if (!value) {
                    return;
                }
                switch (key) {
                    case 'header':
                        return injectHTML(value, 'head', 'first');
                    case 'body':
                        return injectHTML(value, 'body', 'first');
                    case 'footer':
                        return injectHTML(value, 'body', 'last');
                }
            });
        }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...((_b = (_a = result.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) !== null && _b !== void 0 ? _b : [])];
        }
        // } else {
        //   const oldBookingStoreRoomTypes = [...booking_store.roomTypes];
        //   booking_store.roomTypes = result.My_Result.roomtypes?.map(rt => {
        //     const selectedRt = oldBookingStoreRoomTypes.find(r => r.id === rt.id);
        //     return {
        //       ...rt,
        //       rateplans: rt.rateplans.map(rp => {
        //         const currentRp = selectedRt.rateplans.find(s => s.id === rp.id);
        //         if (currentRp) {
        //           return { ...currentRp, short_name: rp.short_name };
        //         }
        //         return null;
        //       }),
        //     };
        //   });
        // }
        if (!app_store.fetchedBooking) {
            booking_store.roomTypes = [...((_d = (_c = result.My_Result) === null || _c === void 0 ? void 0 : _c.roomtypes) !== null && _d !== void 0 ? _d : [])];
        }
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        // if (!app_store.app_data.geoTimezone) {
        //   const { data } = await axios.get(
        //     `https://api.geotimezone.com/public/timezone?latitude=${result.My_Result.location.latitude}&longitude=${result.My_Result.location.longitude}`,
        //   );
        //   app_store.app_data.geoTimezone = data;
        // }
        app_store.app_data.displayMode = result.My_Result.be_listing_mode === 'grid' ? 'grid' : 'default';
        app_store.property = Object.assign({}, result.My_Result);
        app_store.app_data.property_id = result.My_Result.id;
        booking_store.tax_statement = { message: data.My_Result.tax_statement };
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
        }
        return result.My_Result;
    }
    async getExposedNonBookableNights(params) {
        var _a;
        const { data } = await axios.post(`/Get_Exposed_Non_Bookable_Nights`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        const nights = {};
        (_a = data.My_Result) === null || _a === void 0 ? void 0 : _a.forEach(nbn => {
            nights[nbn.night] = true;
        });
        app_store.nonBookableNights = nights;
        return data.My_Result;
    }
    async getExposedBookingAvailability(props) {
        const roomtypeIds = props.room_type_ids || this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = props.rate_plan_ids || this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(props, roomtypeIds, rateplanIds);
        if (props.update_store) {
            this.propertyHelpers.updateBookingStore(data);
        }
        return data;
    }
    async getExposedBooking(params, withExtras = true) {
        const { data } = await axios.post(`/Get_Exposed_Booking`, Object.assign(Object.assign({}, params), { extras: withExtras
                ? [
                    { key: 'payment_code', value: '' },
                    {
                        key: 'prepayment_amount',
                        value: '',
                    },
                    { key: 'payment_code', value: '' },
                    { key: 'agent_payment_mode', value: '' },
                ]
                : null }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result.My_Result;
    }
    async fetchSetupEntries() {
        if (app_store.setup_entries) {
            return app_store.setup_entries;
        }
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, {
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
    // private async filterRooms(roomTypes: RoomType[] | null) {
    //   let rooms = [];
    //   const hasDifferentCurrency = app_store.userPreferences.currency_id.toLocaleLowerCase() !== app_store.property?.currency?.code.toLocaleLowerCase();
    //   if (app_store.userPreferences.currency_id.toLocaleLowerCase() !== app_store.property?.currency?.code.toLocaleLowerCase()) {
    //     // const data = await this.getExposedBookingAvailability({ ...checkAvailabilityPayload, currency_ref: app_store.property.currency.code });
    //     // roomTypes = data.My_Result as RoomType[];
    //   }
    //   const variationService = new VariationService();
    //   Object.values(booking_store.ratePlanSelections).map(rt => {
    //     Object.values(rt).map((rp: IRatePlanSelection) => {
    //       if (rp.reserved > 0) {
    //         const roomType = roomTypes?.find(rt => rt === rp.roomtype);
    //         const ratePlan = roomType?.rateplans.find(r => rp.ratePlan.id === r.id);
    //         [...new Array(rp.reserved)].map((_, index) => {
    //           const { first_name, last_name } = this.propertyHelpers.extractFirstNameAndLastName(index, rp.guestName);
    //           const variation = variationService.getVariationBasedOnInfants({
    //             baseVariation: hasDifferentCurrency
    //               ? ratePlan?.variations.find(
    //                   v =>
    //                     v.adult_nbr === rp.checkoutVariations[index].adult_nbr &&
    //                     v.child_nbr === rp.checkoutVariations[index].child_nbr &&
    //                     v.infant_nbr === rp.checkoutVariations[index].infant_nbr,
    //                 )
    //               : rp.checkoutVariations[index],
    //             variations: hasDifferentCurrency ? ratePlan?.variations : rp.ratePlan.variations,
    //             infants: rp.infant_nbr[index],
    //           });
    //           rooms.push({
    //             identifier: null,
    //             roomtype: rp.roomtype,
    //             rateplan: rp.ratePlan,
    //             prepayment_amount_gross: hasDifferentCurrency ? variation?.prepayment_amount_gross : rp?.selected_variation?.prepayment_amount_gross,
    //             unit: null,
    //             smoking_option: rp.checkoutSmokingSelection[index],
    //             occupancy: {
    //               adult_nbr: rp.checkoutVariations[index].adult_nbr,
    //               children_nbr: rp.checkoutVariations[index].child_nbr - rp.infant_nbr[index],
    //               infant_nbr: rp.infant_nbr[index],
    //             },
    //             bed_preference: rp.is_bed_configuration_enabled ? rp.checkoutBedSelection[index] : null,
    //             from_date: booking_store.bookingAvailabilityParams.from_date.locale('en').format('YYYY-MM-DD'),
    //             to_date: booking_store.bookingAvailabilityParams.to_date.locale('en').format('YYYY-MM-DD'),
    //             notes: null,
    //             days: variation.nights.map(n => ({
    //               date: n.night,
    //               amount: n.discounted_amount,
    //               cost: null,
    //             })),
    //             guest: {
    //               email: null,
    //               first_name,
    //               last_name,
    //               country_id: null,
    //               city: null,
    //               mobile: null,
    //               address: null,
    //               dob: null,
    //               subscribe_to_news_letter: null,
    //               cci: null,
    //             },
    //           });
    //         });
    //       }
    //     });
    //   });
    //   return rooms;
    // }
    /**
     * Builds the array of room payloads for reservation based on the user's current selections.
     *
     * For each reserved entry in `booking_store.ratePlanSelections`, this method:
     *  1) Resolves the effective `RoomType` and `RatePlan` (preferring the provided `roomTypes`
     *     argument if available, otherwise falling back to `booking_store.roomTypes`).
     *  2) Detects currency context differences between the user's currency and the property's currency.
     *  3) Locates a base variation for each reserved unit (matching adult/child/infant counts). When
     *     in a different-currency context, variations are taken from the effective rate plan instead of
     *     the selection object. If no exact variation is found, the checkout variation is used.
     *  4) Adjusts the variation with infants via `VariationService.getVariationBasedOnInfants`.
     *  5) Produces a normalized "room" object used by the booking API.
     *
     * @private
     * @param {RoomType[] | null} roomTypes - Room types in the effective currency context; falls back to `booking_store.roomTypes` if `null`.
     * @returns {Room[]} Array of normalized `Room` payloads ready for `/DoReservation`.
     *
     * @example
     * // Use effective availability (e.g., after currency switch) to build reservation rooms:
     * const rooms = this.filterRooms(freshAvailabilityRoomTypes);
     * // Send in booking body: { booking: { rooms }, ... }
     */
    filterRooms(roomTypes) {
        var _a, _b, _c;
        const rooms = [];
        const variationService = new VariationService();
        const hasDifferentCurrency = normalize(app_store.userPreferences.currency_id) !== normalize((_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.currency) === null || _b === void 0 ? void 0 : _b.code);
        const effectiveRoomTypes = (_c = roomTypes !== null && roomTypes !== void 0 ? roomTypes : booking_store.roomTypes) !== null && _c !== void 0 ? _c : [];
        const roomTypeLookup = new Map();
        effectiveRoomTypes.forEach(rt => {
            if (rt)
                roomTypeLookup.set(rt.id, rt);
        });
        Object.values(booking_store.ratePlanSelections).forEach(ratePlanSelections => {
            Object.values(ratePlanSelections).forEach((rp) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
                if (!(rp === null || rp === void 0 ? void 0 : rp.reserved))
                    return;
                const selectedRoomType = (_a = roomTypeLookup.get(rp.roomtype.id)) !== null && _a !== void 0 ? _a : null;
                const selectedRatePlan = (_c = (_b = selectedRoomType === null || selectedRoomType === void 0 ? void 0 : selectedRoomType.rateplans) === null || _b === void 0 ? void 0 : _b.find(plan => plan.id === rp.ratePlan.id)) !== null && _c !== void 0 ? _c : rp.ratePlan;
                const currencyVariations = hasDifferentCurrency ? ((_d = selectedRatePlan === null || selectedRatePlan === void 0 ? void 0 : selectedRatePlan.variations) !== null && _d !== void 0 ? _d : []) : ((_e = rp.ratePlan.variations) !== null && _e !== void 0 ? _e : []);
                for (let index = 0; index < rp.reserved; index += 1) {
                    const checkoutVariation = (_f = rp.checkoutVariations) === null || _f === void 0 ? void 0 : _f[index];
                    if (!checkoutVariation)
                        continue;
                    const infants = (_h = (_g = rp.infant_nbr) === null || _g === void 0 ? void 0 : _g[index]) !== null && _h !== void 0 ? _h : 0;
                    const baseVariation = hasDifferentCurrency
                        ? ((_j = currencyVariations.find(v => { var _a, _b; return v.adult_nbr === checkoutVariation.adult_nbr && v.child_nbr === checkoutVariation.child_nbr && ((_a = v.infant_nbr) !== null && _a !== void 0 ? _a : 0) === ((_b = checkoutVariation.infant_nbr) !== null && _b !== void 0 ? _b : 0); })) !== null && _j !== void 0 ? _j : checkoutVariation)
                        : checkoutVariation;
                    const resolvedVariation = (_l = variationService.getVariationBasedOnInfants({
                        baseVariation,
                        variations: currencyVariations.length ? currencyVariations : ((_k = rp.ratePlan.variations) !== null && _k !== void 0 ? _k : []),
                        infants,
                    })) !== null && _l !== void 0 ? _l : baseVariation;
                    const { first_name, last_name } = this.propertyHelpers.extractFirstNameAndLastName(index, rp.guestName);
                    const nights = (_o = (_m = resolvedVariation === null || resolvedVariation === void 0 ? void 0 : resolvedVariation.nights) !== null && _m !== void 0 ? _m : checkoutVariation === null || checkoutVariation === void 0 ? void 0 : checkoutVariation.nights) !== null && _o !== void 0 ? _o : [];
                    rooms.push({
                        identifier: null,
                        roomtype: selectedRoomType !== null && selectedRoomType !== void 0 ? selectedRoomType : rp.roomtype,
                        rateplan: selectedRatePlan,
                        prepayment_amount_gross: hasDifferentCurrency
                            ? ((_p = resolvedVariation === null || resolvedVariation === void 0 ? void 0 : resolvedVariation.prepayment_amount_gross) !== null && _p !== void 0 ? _p : 0)
                            : ((_s = (_r = (_q = rp.selected_variation) === null || _q === void 0 ? void 0 : _q.prepayment_amount_gross) !== null && _r !== void 0 ? _r : resolvedVariation === null || resolvedVariation === void 0 ? void 0 : resolvedVariation.prepayment_amount_gross) !== null && _s !== void 0 ? _s : 0),
                        unit: null,
                        smoking_option: (_u = (_t = rp.checkoutSmokingSelection) === null || _t === void 0 ? void 0 : _t[index]) !== null && _u !== void 0 ? _u : null,
                        occupancy: {
                            adult_nbr: checkoutVariation.adult_nbr,
                            children_nbr: Math.max(0, ((_v = checkoutVariation.child_nbr) !== null && _v !== void 0 ? _v : 0) - infants),
                            infant_nbr: infants,
                        },
                        bed_preference: rp.is_bed_configuration_enabled ? ((_x = (_w = rp.checkoutBedSelection) === null || _w === void 0 ? void 0 : _w[index]) !== null && _x !== void 0 ? _x : null) : null,
                        from_date: booking_store.bookingAvailabilityParams.from_date.locale('en').format('YYYY-MM-DD'),
                        to_date: booking_store.bookingAvailabilityParams.to_date.locale('en').format('YYYY-MM-DD'),
                        notes: null,
                        days: nights.map(n => ({
                            date: n.night,
                            amount: n.discounted_amount,
                            cost: null,
                        })),
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
                            cci: null,
                        },
                    });
                }
            });
        });
        return rooms;
    }
    async editExposedGuest(guest, book_nbr) {
        const { data } = await axios.post(`/Edit_Exposed_Guest`, Object.assign(Object.assign({}, guest), { book_nbr }));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    /**
     * Collects the IDs of room types and rate plans that have at least one room reserved
     * in the current `booking_store.ratePlanSelections`.
     *
     * Iterates over the nested selection map and includes only entries where
     * `reserved > 0`.
     *
     * @private
     * @returns {{ roomTypeIds: number[]; ratePlanIds: number[] }}
     * An object containing:
     *  - `roomTypeIds`: unique room type IDs with reservations.
     *  - `ratePlanIds`: unique rate plan IDs with reservations.
     *
     * @example
     * const { roomTypeIds, ratePlanIds } = this.collectBookedRoomsId();
     * // Use these arrays to build availability or pricing payloads.
     */
    collectBookedRoomsId() {
        const roomTypeIds = new Set();
        const ratePlanIds = new Set();
        for (const roomtypeId in booking_store.ratePlanSelections) {
            for (const rateplanId in booking_store.ratePlanSelections[roomtypeId]) {
                const rateplan = booking_store.ratePlanSelections[roomtypeId][rateplanId];
                if (rateplan.reserved > 0) {
                    roomTypeIds.add(Number(roomtypeId));
                    ratePlanIds.add(Number(rateplanId));
                }
            }
        }
        return { ratePlanIds: Array.from(ratePlanIds), roomTypeIds: Array.from(roomTypeIds) };
    }
    /**
     * Recalculates the total prepayment amount for the currently selected rooms.
     *
     * Walks through the provided `roomTypes`, finds the matching user-selected
     * rate plans/variations from `booking_store.ratePlanSelections`, and sums
     * each stay’s `prepayment_amount_gross`. If an exact base variation is not
     * found (by adult/child/infant counts), the checkout variation is used as a fallback.
     * Infant counts are applied via `VariationService.getVariationBasedOnInfants`.
     *
     * @private
     * @param {RoomType[]} roomTypes - The room types returned from availability (in the currency context used for recalculation).
     * @returns {number} Total prepayment amount (sum of `prepayment_amount_gross`) for all reserved rooms.
     *
     * @example
     * // After fetching availability in a different currency:
     * const total = this.recalculatePrepaymentAmount(data.My_Result);
     * console.log('New prepayment amount:', total);
     */
    recalculatePrepaymentAmount(roomTypes) {
        let total = 0;
        const variationService = new VariationService();
        for (const roomType of roomTypes) {
            const selectedRoomType = booking_store.ratePlanSelections[roomType.id];
            if (!selectedRoomType)
                continue;
            for (const ratePlan of roomType.rateplans) {
                const selectedRatePlan = selectedRoomType[ratePlan.id];
                if (!selectedRatePlan)
                    continue;
                const { checkoutVariations, infant_nbr } = selectedRatePlan;
                checkoutVariations.forEach((checkoutVariation, index) => {
                    var _a, _b, _c;
                    const baseVariation = (_a = ratePlan.variations.find(v => v.adult_nbr === checkoutVariation.adult_nbr && v.child_nbr === checkoutVariation.child_nbr && v.infant_nbr === checkoutVariation.infant_nbr)) !== null && _a !== void 0 ? _a : checkoutVariation;
                    if (!baseVariation)
                        return;
                    const variation = variationService.getVariationBasedOnInfants({
                        baseVariation,
                        variations: ratePlan.variations,
                        infants: (_b = infant_nbr === null || infant_nbr === void 0 ? void 0 : infant_nbr[index]) !== null && _b !== void 0 ? _b : 0,
                    });
                    total += (_c = variation === null || variation === void 0 ? void 0 : variation.prepayment_amount_gross) !== null && _c !== void 0 ? _c : 0;
                });
            }
        }
        return total;
    }
    async bookUser(paymentMethod) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        let prePaymentAmount = checkout_store.prepaymentAmount;
        const mostEffectiveCurrency = this.getMostEffectiveCurrency(paymentMethod);
        const { ratePlanIds, roomTypeIds } = this.collectBookedRoomsId();
        let checkAvailabilityPayload = {
            propertyid: app_store.app_data.property_id,
            from_date: booking_store.bookingAvailabilityParams.from_date,
            to_date: booking_store.bookingAvailabilityParams.to_date,
            room_type_ids: roomTypeIds,
            rate_plan_ids: ratePlanIds,
            adult_nbr: booking_store.bookingAvailabilityParams.adult_nbr,
            child_nbr: booking_store.bookingAvailabilityParams.child_nbr,
            language: app_store.userPreferences.language_id,
            is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
            promo_key: booking_store.bookingAvailabilityParams.coupon || '',
            is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
            agent_id: ((_a = booking_store.bookingAvailabilityParams.agent) === null || _a === void 0 ? void 0 : _a.id) || 0,
            is_in_affiliate_mode: !!app_store.app_data.affiliate,
            affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null,
            update_store: false,
        };
        let roomTypes = null;
        const normalizedUserCurrency = normalize((_b = app_store.userPreferences) === null || _b === void 0 ? void 0 : _b.currency_id) || 'usd';
        const normalizedMethodCurrency = mostEffectiveCurrency ? normalize(mostEffectiveCurrency.code) : null;
        const normalizedPropertyCurrency = normalize((_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.currency) === null || _d === void 0 ? void 0 : _d.code);
        const hasDifferentCurrency = normalizedUserCurrency !== normalizedPropertyCurrency;
        const wantsMethodCurrency = prePaymentAmount > 0 && normalizedMethodCurrency && normalizedMethodCurrency !== normalizedUserCurrency;
        const needsPropertyAvailability = hasDifferentCurrency && (!wantsMethodCurrency || normalizedMethodCurrency !== normalizedPropertyCurrency);
        let methodAvailability = null;
        let propertyAvailability = null;
        const availabilityCalls = [];
        if (wantsMethodCurrency && mostEffectiveCurrency) {
            availabilityCalls.push(this.getExposedBookingAvailability(Object.assign(Object.assign({}, checkAvailabilityPayload), { currency_ref: mostEffectiveCurrency.code })).then(data => {
                methodAvailability = data;
                if (normalizedMethodCurrency === normalizedPropertyCurrency) {
                    roomTypes = [...data.My_Result];
                }
            }));
        }
        if (needsPropertyAvailability) {
            availabilityCalls.push(this.getExposedBookingAvailability(Object.assign(Object.assign({}, checkAvailabilityPayload), { currency_ref: '' })).then(data => {
                propertyAvailability = data;
                if (!roomTypes) {
                    roomTypes = [...data.My_Result];
                }
            }));
        }
        if (availabilityCalls.length) {
            await Promise.all(availabilityCalls);
        }
        if (methodAvailability && wantsMethodCurrency && mostEffectiveCurrency) {
            prePaymentAmount = this.recalculatePrepaymentAmount(methodAvailability.My_Result);
        }
        if (!roomTypes && propertyAvailability) {
            roomTypes = [...propertyAvailability.My_Result];
        }
        try {
            let guest = {
                email: checkout_store.userFormData.email,
                first_name: checkout_store.userFormData.firstName,
                last_name: checkout_store.userFormData.lastName,
                country_id: checkout_store.userFormData.country_id,
                city: null,
                mobile: checkout_store.userFormData.mobile_number,
                address: '',
                country_phone_prefix: checkout_store.userFormData.country_phone_prefix,
                dob: null,
                subscribe_to_news_letter: true,
                cci: booking_store.bookingAvailabilityParams.agent && ((_f = (_e = booking_store.bookingAvailabilityParams.agent) === null || _e === void 0 ? void 0 : _e.payment_mode) === null || _f === void 0 ? void 0 : _f.code) === '001'
                    ? null
                    : ((_g = checkout_store.payment) === null || _g === void 0 ? void 0 : _g.code) === '001'
                        ? {
                            nbr: (_j = (_h = checkout_store.payment) === null || _h === void 0 ? void 0 : _h.cardNumber) === null || _j === void 0 ? void 0 : _j.replace(/ /g, ''),
                            holder_name: (_k = checkout_store.payment) === null || _k === void 0 ? void 0 : _k.cardHolderName,
                            expiry_month: (_l = checkout_store.payment) === null || _l === void 0 ? void 0 : _l.expiry_month.split('/')[0],
                            expiry_year: (_m = checkout_store.payment) === null || _m === void 0 ? void 0 : _m.expiry_year.split('/')[1],
                            cvc: checkout_store.payment.cvc,
                        }
                        : null,
            };
            // const now = moment();
            const rooms = this.filterRooms(roomTypes);
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                language: (_p = (_o = app_store === null || app_store === void 0 ? void 0 : app_store.userPreferences) === null || _o === void 0 ? void 0 : _o.language_id) !== null && _p !== void 0 ? _p : 'en',
                agent: booking_store.bookingAvailabilityParams.agent ? { id: (_q = booking_store.bookingAvailabilityParams.agent) === null || _q === void 0 ? void 0 : _q.id } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_r = booking_store.bookingAvailabilityParams.coupon) !== null && _r !== void 0 ? _r : null,
                booking: {
                    booking_nbr: '',
                    from_date: booking_store.bookingAvailabilityParams.from_date.locale('en').format('YYYY-MM-DD'),
                    to_date: booking_store.bookingAvailabilityParams.to_date.locale('en').format('YYYY-MM-DD'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    // booked_on: {
                    //   date: now.format('YYYY-MM-DD'),
                    //   hour: now.hour(),
                    //   minute: now.minute(),
                    // },
                    source: { code: app_store.app_data.isFromGhs ? 'ghs' : new URL(window.location.href).origin, tag: app_store.app_data.stag, description: '' },
                    referrer_site: app_store.app_data.affiliate ? `https://${app_store.app_data.affiliate.sites[0].url}` : 'www.igloorooms.com',
                    // currency: app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase()),
                    currency: app_store.property.currency,
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms,
                },
                extras: [
                    {
                        key: 'payment_code',
                        value: checkout_store.payment.code,
                    },
                    prePaymentAmount > 0
                        ? {
                            key: 'prepayment_amount',
                            value: prePaymentAmount,
                        }
                        : null,
                    booking_store.bookingAvailabilityParams.agent
                        ? {
                            key: 'agent_payment_mode',
                            value: booking_store.bookingAvailabilityParams.agent.payment_mode.code,
                        }
                        : null,
                    {
                        key: 'selected_currency',
                        value: app_store.property.currency.code,
                    },
                ].filter(f => f !== null),
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
            };
            // if (f) {
            //   throw new Error('');
            // }
            const { data } = await axios.post(`/DoReservation`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return { booking: data['My_Result'], prepaymentAmount: prePaymentAmount, mostEffectiveCurrency: mostEffectiveCurrency };
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getExposedGuest() {
        const { data } = await axios.post(`/Get_Exposed_Guest`, {
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
        // app_store.is_signed_in = true;
        checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_id: res.country_id, email: res.email, firstName: res.first_name, lastName: res.last_name, mobile_number: res.mobile, country_phone_prefix: res.country_phone_prefix, id: res.id });
    }
}
PropertyService.initialized = false;

export { PropertyService as P };

//# sourceMappingURL=property.service.js.map