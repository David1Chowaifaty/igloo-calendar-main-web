import VariationService from "../services/app/variation.service";
import { createStore } from "@stencil/store";
const initialState = {
    tax_statement: null,
    roomTypes: undefined,
    childrenAges: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
    isInFreeCancelationZone: false,
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
    },
    booking: null,
    fictus_booking_nbr: null,
};
export const { state: booking_store, onChange: onRoomTypeChange } = createStore(initialState);
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
            var _a, _b, _c, _d, _e;
            if (!ratePlan.is_active || !((_a = ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations) === null || _a === void 0 ? void 0 : _a.length))
                return;
            let lastVariation = ratePlan.variations[ratePlan.variations.length - 1];
            lastVariation = (_b = ratePlan.selected_variation) !== null && _b !== void 0 ? _b : lastVariation;
            const currentRatePlanSelection = (_c = currentSelections[roomType.id]) === null || _c === void 0 ? void 0 : _c[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? Object.assign(Object.assign({}, currentRatePlanSelection), { ratePlan, selected_variation: (_d = checkVariation(ratePlan.variations, currentRatePlanSelection.selected_variation)) !== null && _d !== void 0 ? _d : null, visibleInventory: roomType.inventory === 1 ? 2 : roomType.inventory, reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved, checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations, checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection, checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection, guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName, roomtype: Object.assign({}, currentRatePlanSelection.roomtype) }) : {
                    reserved: 0,
                    infant_nbr: [],
                    visibleInventory: roomType.inventory === 1 ? 2 : roomType.inventory,
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
export function updateInventory(roomTypeId) {
    const roomTypeSelection = booking_store.ratePlanSelections[roomTypeId];
    const calculateTotalSelectedRoomsExcludingIndex = (excludedRatePlanId) => {
        return Object.entries(roomTypeSelection).reduce((acc, [ratePlanId, ratePlan]) => {
            return Number(ratePlanId) !== excludedRatePlanId ? acc + ratePlan.reserved : acc;
        }, 0);
    };
    const newRatePlans = Object.fromEntries(Object.entries(roomTypeSelection).map(([ratePlanId, ratePlan]) => {
        const totalSelectedRoomsExcludingCurrent = calculateTotalSelectedRoomsExcludingIndex(Number(ratePlanId));
        const roomTypeData = booking_store.roomTypes.find(rt => rt.id === roomTypeId);
        const availableRooms = roomTypeData ? (roomTypeData.inventory === 1 ? 2 : roomTypeData.inventory) - totalSelectedRoomsExcludingCurrent : 0;
        return [
            ratePlanId,
            Object.assign(Object.assign({}, ratePlan), { visibleInventory: availableRooms > 0 ? availableRooms : 0 }),
        ];
    }));
    if (JSON.stringify(roomTypeSelection) !== JSON.stringify(newRatePlans)) {
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: newRatePlans });
    }
}
export function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), params) }) });
}
export function reserveRooms(roomTypeId, ratePlanId, rooms) {
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
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: null,
            reserved: 0,
            infant_nbr: [],
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
            },
        };
    }
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), { reserved: rooms, checkoutVariations: [] }) }) });
    updateInventory(roomTypeId);
}
export function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return { reserved: 0, visibleInventory: 0, selected_variation: null };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
export function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
export function calculateTotalCost(config = { gross: false, infants: false }) {
    let totalAmount = 0;
    const variationService = new VariationService();
    // Helper to calculate cost for a single rate plan
    const calculateCost = (ratePlan) => {
        var _a;
        if (ratePlan.checkoutVariations.length > 0 && ratePlan.reserved > 0) {
            let variations = ratePlan.checkoutVariations;
            if (config.infants) {
                variations = [
                    ...ratePlan.checkoutVariations.map((variation, index) => variationService.getVariationBasedOnInfants({
                        variations: ratePlan.ratePlan.variations,
                        baseVariation: variation,
                        infants: ratePlan.infant_nbr[index],
                    })),
                ];
            }
            return variations.reduce((sum, infantBasedVariation) => {
                const amount = infantBasedVariation[config.gross ? 'discounted_gross_amount' : 'discounted_amount'] || 0;
                return sum + amount;
            }, 0);
        }
        else if (ratePlan.reserved > 0) {
            const amount = ((_a = ratePlan.selected_variation) === null || _a === void 0 ? void 0 : _a[config.gross ? 'discounted_gross_amount' : 'discounted_amount']) || 0;
            return amount * ratePlan.reserved;
        }
        return 0;
    };
    // Iterate through rate plan selections
    Object.values(booking_store.ratePlanSelections).forEach(roomTypeSelection => {
        Object.values(roomTypeSelection).forEach(ratePlan => {
            totalAmount += calculateCost(ratePlan);
        });
    });
    return { totalAmount };
}
// export function validateBooking() {
//   return Object.values(booking_store.ratePlanSelections).every(roomTypeSelection =>
//     Object.values(roomTypeSelection).every(ratePlan => ratePlan.guestName.every(name => name.trim() !== '')),
//   );
// }
// export function validateBooking() {
//   return Object.values(booking_store.ratePlanSelections).every(roomTypeSelection =>
//     Object.values(roomTypeSelection).every(ratePlan => {
//       console.log(ratePlan);
//       return (
//         (ratePlan.guestName.every(name => name.trim() !== '') &&
//           (!ratePlan.is_bed_configuration_enabled || ratePlan.checkoutBedSelection.every(selection => selection !== '-1'))) ||
//         Number(ratePlan.infant_nbr) !== -1
//       );
//     }),
//   );
// }
export function validateBooking() {
    return Object.values(booking_store.ratePlanSelections).every(roomTypeSelection => Object.values(roomTypeSelection).every(ratePlan => {
        // console.log(ratePlan);
        console.log({
            ratePlan,
            'Check guestName: All names must be non-empty': ratePlan.guestName.every(name => name.trim() !== ''),
            'Check bed configuration: If enabled, all selections must be valid': !ratePlan.is_bed_configuration_enabled || ratePlan.checkoutBedSelection.every(selection => selection !== '-1'),
            'Check infant_nbr: Must be greater than -1': ratePlan.infant_nbr.every(nb => Number(nb) > -1),
        });
        return (
        // Check guestName: All names must be non-empty
        ratePlan.guestName.every(name => name.trim() !== '') &&
            // Check bed configuration: If enabled, all selections must be valid
            (!ratePlan.is_bed_configuration_enabled || ratePlan.checkoutBedSelection.every(selection => selection !== '-1')) &&
            // Check infant_nbr: Must be greater than -1
            ratePlan.infant_nbr.every(nb => Number(nb) > -1));
    }));
}
export function calculateTotalRooms() {
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
export function clearCheckoutRooms() {
    booking_store.ratePlanSelections = Object.fromEntries(Object.entries(booking_store.ratePlanSelections).map(([roomTypeId, roomTypeSelection]) => [
        roomTypeId,
        Object.fromEntries(Object.entries(roomTypeSelection).map(([ratePlanId, ratePlan]) => [
            ratePlanId,
            Object.assign(Object.assign({}, ratePlan), { checkoutVariations: [], checkoutBedSelection: [], checkoutSmokingSelection: [] }),
        ])),
    ]));
}
export default booking_store;
//# sourceMappingURL=booking.js.map
