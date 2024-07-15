import { M as MissingTokenError } from './Token.js';
import { b as booking_store } from './booking.js';
import { a as axios } from './axios.js';
import { d as dateFns } from './utils.js';

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
                    updatedRatePlans.push(Object.assign(Object.assign({}, newRatePlan), { variations: rp.variations, 
                        // variations: rp.variations.map(v => {
                        //   if (!newRatePlan.variations) {
                        //     return v;
                        //   }
                        //   if (v.adult_child_offering === newRatePlan.variations[0].adult_child_offering) {
                        //     return newRatePlan.variations[0];
                        //   }
                        //   return v;
                        // }),
                        selected_variation: newRatePlan.variations ? newRatePlan.variations[0] : null }));
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

export { Colors as C, PropertyHelpers as P };

//# sourceMappingURL=colors.service.js.map