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
            booking_store.roomTypes = [...sortedRoomTypes.map(rt => (Object.assign(Object.assign({}, rt), { rateplans: rt.rateplans.map(rp => (Object.assign(Object.assign({}, rp), { variations: this.sortVariations(rp.variations) }))) })))];
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
//# sourceMappingURL=property-helpers.service.js.map
