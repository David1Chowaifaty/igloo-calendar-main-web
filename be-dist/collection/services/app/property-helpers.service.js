import booking_store from "../../stores/booking";
import axios from "axios";
import { addDays, format } from "date-fns";
export class PropertyHelpers {
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
    updateBookingStore(data) {
        try {
            const newRoomtypes = data.My_Result;
            const { adult_nbr, child_nbr } = data.My_Params_Check_Availability;
            const sortedRoomTypes = this.sortRoomTypes(newRoomtypes, { adult_nbr, child_nbr });
            booking_store.roomTypes = [...sortedRoomTypes.map(rt => (Object.assign(Object.assign({}, rt), { rateplans: rt.rateplans.map(rp => { var _a; return (Object.assign(Object.assign({}, rp), { variations: (_a = rp.variations) === null || _a === void 0 ? void 0 : _a.reverse() })); }) })))];
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
                date: format(currentDate, 'yyyy-MM-dd'),
                amount: amount,
                cost: null,
            });
            currentDate = addDays(currentDate, 1);
        }
        return days;
    }
    extractFirstNameAndLastName(index, guestName) {
        const names = guestName[index].split(' ');
        return { first_name: names[0] || null, last_name: names[1] || null };
    }
    async fetchAvailabilityData(props, roomtypeIds, rateplanIds) {
        const response = await axios.post(`/Check_Availability`, Object.assign(Object.assign({}, props), { room_type_ids: roomtypeIds, rate_plan_ids: rateplanIds, skip_getting_assignable_units: true, is_specific_variation: true, is_backend: false }));
        const result = response.data;
        if (result.ExceptionMsg !== '') {
            throw new Error(result.ExceptionMsg);
        }
        return result;
    }
    sortRoomTypes(roomTypes, userCriteria) {
        return roomTypes.sort((a, b) => {
            var _a, _b, _c, _d;
            const isNotAvailableA = a.rateplans.every(plan => !plan.is_active || plan.is_closed || !plan.variations);
            const isNotAvailableB = b.rateplans.every(plan => !plan.is_active || plan.is_closed || !plan.variations);
            if (isNotAvailableA && !isNotAvailableB)
                return 1;
            if (!isNotAvailableA && isNotAvailableB)
                return -1;
            // Move room types with zero inventory to the end
            if (a.inventory === 0 && b.inventory !== 0)
                return 1;
            if (a.inventory !== 0 && b.inventory === 0)
                return -1;
            // Check for variations where is_calculated is true and amount is 0
            const zeroCalculatedA = (_a = a.rateplans) === null || _a === void 0 ? void 0 : _a.some(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.amount === 0 || variation.amount === null); });
            const zeroCalculatedB = (_b = b.rateplans) === null || _b === void 0 ? void 0 : _b.some(plan => { var _a; return (_a = plan === null || plan === void 0 ? void 0 : plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.amount === 0 || variation.amount === null); });
            // Prioritize these types to be before inventory 0 but after all others
            if (zeroCalculatedA && !zeroCalculatedB)
                return 1;
            if (!zeroCalculatedA && zeroCalculatedB)
                return -1;
            // Check for exact matching variations
            const matchA = (_c = a.rateplans) === null || _c === void 0 ? void 0 : _c.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
            const matchB = (_d = b.rateplans) === null || _d === void 0 ? void 0 : _d.some(plan => { var _a; return (_a = plan.variations) === null || _a === void 0 ? void 0 : _a.some(variation => variation.adult_nbr === userCriteria.adult_nbr && variation.child_nbr === userCriteria.child_nbr); });
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
}
//# sourceMappingURL=property-helpers.service.js.map
