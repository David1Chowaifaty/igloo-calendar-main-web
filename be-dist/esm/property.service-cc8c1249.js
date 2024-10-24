import { b as booking_store, m as modifyBookingStore, i as injectHTML, d as getDateDifference } from './utils-6b176e77.js';
import { a as axios } from './axios-2aba0cfc.js';
import { P as PaymentService } from './payment.service-cbe49517.js';
import { b as app_store } from './localization.store-7e4dc18e.js';
import { d as dateFns } from './index-2217e605.js';
import { u as updateUserFormData, c as checkout_store } from './checkout.store-a3da01ce.js';

class PropertyHelpers {
    constructor() {
        this.paymentService = new PaymentService();
    }
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
        const response = await axios.post(`/Get_Exposed_Booking_Availability`, Object.assign(Object.assign({}, props.params), { identifier: props.identifier, room_type_ids: roomtypeIds, rate_plan_ids: rateplanIds, skip_getting_assignable_units: true, is_specific_variation: true, is_backend: false }));
        const result = response.data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.booking_nbr) {
            modifyBookingStore('fictus_booking_nbr', {
                nbr: result.My_Result.booking_nbr,
            });
            this.validateFreeCancelationZone(result.My_Result.booking_nbr);
        }
        return result;
    }
    async validateFreeCancelationZone(booking_nbr) {
        // console.log(app_store.currencies.find(c => c.code.toLowerCase() === app_store.userPreferences.currency_id?.toLowerCase()));
        const result = await this.paymentService.GetExposedApplicablePolicies({
            book_date: new Date(),
            params: {
                booking_nbr,
                currency_id: app_store.currencies.find(c => c.code.toLowerCase() === (app_store.userPreferences.currency_id.toLowerCase() || 'usd')).id,
                language: app_store.userPreferences.language_id,
                property_id: app_store.app_data.property_id,
                rate_plan_id: 0,
                room_type_id: 0,
            },
        });
        console.log('applicable policies', result);
        if (!result) {
            booking_store.isInFreeCancelationZone = true;
        }
        if (result) {
            const { isInFreeCancelationZone } = this.paymentService.processAlicablePolicies(result.data, new Date());
            booking_store.isInFreeCancelationZone = isInFreeCancelationZone;
        }
    }
    updateInventory(roomtypes, newRoomtypes) {
        const newRoomtypesMap = new Map(newRoomtypes.map(rt => [rt.id, rt]));
        return roomtypes.reduce((updatedRoomtypes, rt) => {
            const newRoomtype = newRoomtypesMap.get(rt.id);
            if (!newRoomtype) {
                return updatedRoomtypes;
            }
            // console.log('new roomtypes', newRoomtypes);
            const updatedRoomtype = Object.assign(Object.assign({}, rt), { inventory: newRoomtype.inventory, pre_payment_amount: newRoomtype.pre_payment_amount, rateplans: this.updateRatePlan(rt.rateplans, newRoomtype) });
            updatedRoomtypes.push(updatedRoomtype);
            return updatedRoomtypes;
        }, []);
    }
    // private updateRatePlan(ratePlans: RatePlan[], newRoomtype: RoomType) {
    //   return ratePlans.reduce((updatedRatePlans, rp) => {
    //     const newRatePlan = newRoomtype.rateplans.find(newRP => newRP.id === rp.id);
    //     if (!newRatePlan || !newRatePlan.is_active || !newRatePlan.is_booking_engine_enabled) {
    //       return updatedRatePlans;
    //     }
    //     updatedRatePlans.push({
    //       ...newRatePlan,
    //       is_targeting_travel_agency: newRatePlan.is_targeting_travel_agency,
    //       variations: rp.variations,
    //       // variations: rp.variations.map(v => {
    //       //   if (!newRatePlan.variations) {
    //       //     return v;
    //       //   }
    //       //   if (v.adult_child_offering === newRatePlan.variations[0].adult_child_offering) {
    //       //     return newRatePlan.variations[0];
    //       //   }
    //       //   return v;
    //       // }),
    //       selected_variation: newRatePlan.variations ? newRatePlan.variations[0] : null,
    //       // selected_variation: newRatePlan.variations ? rp.variations.find(v => v.adult_child_offering === newRatePlan.variations[0].adult_child_offering) : null,
    //     });
    //     return updatedRatePlans;
    //   }, []);
    // }
    updateRatePlan(ratePlans, newRoomtype) {
        const agentExists = !!booking_store.bookingAvailabilityParams.agent;
        return ratePlans.reduce((updatedRatePlans, rp) => {
            var _a, _b;
            const newRP = (_a = newRoomtype.rateplans) === null || _a === void 0 ? void 0 : _a.find(newRatePlan => newRatePlan.id === rp.id);
            if (!newRP || !newRP.is_active || !newRP.is_booking_engine_enabled) {
                return updatedRatePlans;
            }
            // console.log('terst selected variation', newRP, newRP.variations, 'res', newRP.variations?.length > 0 ? newRP.variations[0] : null);
            updatedRatePlans.push(Object.assign(Object.assign({}, newRP), { variations: agentExists ? newRP.variations : rp.variations, selected_variation: ((_b = newRP.variations) === null || _b === void 0 ? void 0 : _b.length) > 0 ? newRP.variations[0] : null }));
            return updatedRatePlans;
        }, []);
    }
    // private updateRatePlan(ratePlans: RatePlan[], newRoomtype: RoomType): RatePlan[] {
    //   const agentExists = !!booking_store.bookingAvailabilityParams.agent;
    //   return ratePlans.reduce((updatedRatePlans: RatePlan[], rp: RatePlan) => {
    //     const newRP = newRoomtype.rateplans?.find(newRP => newRP.id === rp.id);
    //     const newRatePlan = agentExists ? newRoomtype.rateplans?.find(newRP => newRP.id === rp.id) : ratePlans.find(newRP => newRP.id === rp.id);
    //     if (!newRatePlan || !newRP || !newRatePlan.is_active || !newRatePlan.is_booking_engine_enabled) {
    //       return updatedRatePlans;
    //     }
    //     updatedRatePlans.push({
    //       ...newRatePlan,
    //       short_name: newRP.short_name,
    //       is_targeting_travel_agency: newRatePlan.is_targeting_travel_agency,
    //       variations: agentExists ? newRatePlan.variations : rp.variations,
    //       selected_variation: newRatePlan.variations ? newRatePlan.variations[0] : null,
    //     });
    //     return updatedRatePlans;
    //   }, []);
    // }
    //---------------------------
    //         SORTING
    //---------------------------
    // private sortRoomTypes(roomTypes: RoomType[], userCriteria: { adult_nbr: number; child_nbr: number }): RoomType[] {
    //   return roomTypes.sort((a, b) => {
    //     // Move room types with zero inventory to the end
    //     if (a.inventory === 0 && b.inventory !== 0) return 1;
    //     if (a.inventory !== 0 && b.inventory === 0) return -1;
    //     // Check for variations where is_calculated is true and amount is 0
    //     const zeroCalculatedA = a.rateplans?.some(plan => plan?.variations?.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)));
    //     const zeroCalculatedB = b.rateplans?.some(plan => plan?.variations?.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)));
    //     // Prioritize these types to be before inventory 0 but after all others
    //     if (zeroCalculatedA && !zeroCalculatedB) return 1;
    //     if (!zeroCalculatedA && zeroCalculatedB) return -1;
    //     // Check for exact matching variations
    //     const matchA = a.rateplans?.some(plan =>
    //       plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr),
    //     );
    //     const matchB = b.rateplans?.some(plan =>
    //       plan.variations?.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr),
    //     );
    //     if (matchA && !matchB) return -1;
    //     if (!matchA && matchB) return 1;
    //     // Sort by the highest variation in any attribute, for example `amount`
    //     const maxVariationA = Math.max(...a.rateplans.flatMap(plan => plan?.variations?.map(variation => variation.amount)));
    //     const maxVariationB = Math.max(...b.rateplans.flatMap(plan => plan?.variations?.map(variation => variation.amount)));
    //     if (maxVariationA < maxVariationB) return -1;
    //     if (maxVariationA > maxVariationB) return 1;
    //     return 0;
    //   });
    // }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            var _a, _b, _c, _d, _e, _f;
            // Move room types with zero inventory to the end
            if (a.inventory === 0 && b.inventory !== 0)
                return 1;
            if (a.inventory !== 0 && b.inventory === 0)
                return -1;
            // Move room types with all rate plans closed to the end
            const allRateplansClosedA = (_a = a.rateplans) === null || _a === void 0 ? void 0 : _a.every(plan => plan.is_closed);
            const allRateplansClosedB = (_b = b.rateplans) === null || _b === void 0 ? void 0 : _b.every(plan => plan.is_closed);
            if (allRateplansClosedA && !allRateplansClosedB)
                return 1;
            if (!allRateplansClosedA && allRateplansClosedB)
                return -1;
            // Check for variations where is_calculated is true and amount is 0
            const zeroCalculatedA = (_c = a.rateplans) === null || _c === void 0 ? void 0 : _c.some(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)); });
            const zeroCalculatedB = (_d = b.rateplans) === null || _d === void 0 ? void 0 : _d.some(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.is_calculated && (variation.amount === 0 || variation.amount === null)); });
            // Prioritize these types to be before inventory 0 but after all others
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations
            const matchA = (_e = a.rateplans) === null || _e === void 0 ? void 0 : _e.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            const matchB = (_f = b.rateplans) === null || _f === void 0 ? void 0 : _f.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            if (matchA && !matchB)
                return -1;
            if (!matchA && matchB)
                return 1;
            // Sort by the highest variation in any attribute, for example `amount`
            const maxVariationA = Math.max(...a.rateplans.flatMap(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.map(variation => variation.amount); }));
            const maxVariationB = Math.max(...b.rateplans.flatMap(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.map(variation => variation.amount); }));
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
    }
    async getExposedProperty(params, initTheme = true) {
        var _a, _b;
        const { data } = await axios.post(`/Get_Exposed_Property`, Object.assign(Object.assign({}, params), { currency: app_store.userPreferences.currency_id, include_sales_rate_plans: true }));
        const result = data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        if (result.My_Result.tags) {
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
        if (params.aname || params.perma_link) {
            app_store.app_data = Object.assign(Object.assign({}, app_store.app_data), { property_id: result.My_Result.id });
        }
        app_store.app_data.displayMode = result.My_Result.be_listing_mode === 'grid' ? 'grid' : 'default';
        app_store.property = Object.assign({}, result.My_Result);
        app_store.app_data.property_id = result.My_Result.id;
        if (initTheme) {
            this.colors.initTheme(result.My_Result);
            // app_store.app_data.displayMode = 'grid';
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
        this.propertyHelpers.validateModeProps(props);
        const roomtypeIds = this.propertyHelpers.collectRoomTypeIds(props);
        const rateplanIds = this.propertyHelpers.collectRatePlanIds(props);
        const data = await this.propertyHelpers.fetchAvailabilityData(props, roomtypeIds, rateplanIds);
        this.propertyHelpers.updateBookingStore(data, props);
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
    filterRooms() {
        let rooms = [];
        Object.values(booking_store.ratePlanSelections).map(rt => {
            Object.values(rt).map((rp) => {
                if (rp.reserved > 0) {
                    [...new Array(rp.reserved)].map((_, index) => {
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
                                cci: null,
                            },
                        });
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
    async bookUser() {
        var _a, _b, _c, _d, _e, _f;
        const prePaymentAmount = checkout_store.prepaymentAmount;
        try {
            console.log('payment', checkout_store.payment);
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
                cci: ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code) === '001'
                    ? {
                        nbr: (_b = checkout_store.payment) === null || _b === void 0 ? void 0 : _b.cardNumber.replace(/ /g, ''),
                        holder_name: (_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.cardHolderName,
                        expiry_month: (_d = checkout_store.payment) === null || _d === void 0 ? void 0 : _d.expiry_month.split('/')[0],
                        expiry_year: (_e = checkout_store.payment) === null || _e === void 0 ? void 0 : _e.expiry_year.split('/')[1],
                        cvc: checkout_store.payment.cvc,
                    }
                    : null,
            };
            const body = {
                assign_units: false,
                check_in: false,
                is_pms: false,
                is_direct: true,
                agent: booking_store.bookingAvailabilityParams.agent ? { id: booking_store.bookingAvailabilityParams.agent } : null,
                is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty,
                promo_key: (_f = booking_store.bookingAvailabilityParams.coupon) !== null && _f !== void 0 ? _f : null,
                booking: {
                    booking_nbr: '',
                    from_date: dateFns.format(booking_store.bookingAvailabilityParams.from_date, 'yyyy-MM-dd'),
                    to_date: dateFns.format(booking_store.bookingAvailabilityParams.to_date, 'yyyy-MM-dd'),
                    remark: checkout_store.userFormData.message || null,
                    property: {
                        id: app_store.app_data.property_id,
                    },
                    source: { code: app_store.app_data.isFromGhs ? 'ghs' : window.location.href, tag: app_store.app_data.stag, description: '' },
                    referrer_site: app_store.app_data.affiliate ? `https://${app_store.app_data.affiliate.sites[0].url}` : 'www.igloorooms.com',
                    currency: app_store.currencies.find(currency => currency.code.toString().toLowerCase() === app_store.userPreferences.currency_id.toLowerCase()),
                    arrival: { code: checkout_store.userFormData.arrival_time },
                    guest,
                    rooms: this.filterRooms(),
                },
                extras: [
                    prePaymentAmount > 0
                        ? {
                            key: 'payment_code',
                            value: checkout_store.payment.code,
                        }
                        : null,
                    prePaymentAmount > 0
                        ? {
                            key: 'prepayment_amount',
                            value: prePaymentAmount,
                        }
                        : null,
                    {
                        key: 'selected_currency',
                        value: app_store.userPreferences.currency_id,
                    },
                ].filter(f => f !== null),
                pickup_info: checkout_store.pickup.location ? this.propertyHelpers.convertPickup(checkout_store.pickup) : null,
            };
            console.log('body');
            const { data } = await axios.post(`/DoReservation`, body);
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

export { PropertyService as P };

//# sourceMappingURL=property.service-cc8c1249.js.map