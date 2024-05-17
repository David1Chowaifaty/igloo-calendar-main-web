import { c as createStore } from './index2.js';

const initialState = {
    tax_statement: null,
    roomTypes: undefined,
    enableBooking: false,
    ratePlanSelections: {},
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
    },
};
const { state: booking_store, onChange: onRoomTypeChange } = createStore(initialState);
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (roomType.is_active) {
            ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
            roomType.rateplans.forEach(ratePlan => {
                if (ratePlan.is_active && ratePlan.variations && ratePlan.variations.length > 0) {
                    const currentRatePlanSelection = currentSelections[roomType.id] && currentSelections[roomType.id][ratePlan.id];
                    ratePlanSelections[roomType.id][ratePlan.id] = currentRatePlanSelection
                        ? Object.assign(Object.assign({}, currentRatePlanSelection), { ratePlan, visibleInventory: currentRatePlanSelection.visibleInventory, selected_variation: ratePlan.variations[ratePlan.variations.length - 1], guestName: currentRatePlanSelection.guestName, roomtype: {
                                id: roomType.id,
                                name: roomType.name,
                                physicalrooms: null,
                                rateplans: null,
                                availabilities: null,
                                inventory: roomType.inventory,
                                rate: roomType.rate,
                                smoking_option: roomType.smoking_option,
                                bedding_setup: roomType.bedding_setup,
                                pre_payment_amount: roomType.pre_payment_amount,
                            } }) : {
                        reserved: 0,
                        visibleInventory: roomType.inventory === 1 ? 2 : roomType.inventory,
                        selected_variation: ratePlan.variations[ratePlan.variations.length - 1],
                        ratePlan,
                        guestName: [],
                        is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                        roomtype: {
                            id: roomType.id,
                            name: roomType.name,
                            physicalrooms: null,
                            rateplans: null,
                            availabilities: null,
                            inventory: roomType.inventory,
                            rate: roomType.rate,
                            smoking_option: roomType.smoking_option,
                            bedding_setup: roomType.bedding_setup,
                            pre_payment_amount: roomType.pre_payment_amount,
                        },
                        checkoutVariations: [],
                        checkoutBedSelection: [],
                        checkoutSmokingSelection: [],
                    };
                }
            });
        }
    });
    booking_store.ratePlanSelections = ratePlanSelections;
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
function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), params) }) });
}
function reserveRooms(roomTypeId, ratePlanId, rooms) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes.find(r => r.id === roomTypeId);
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
                pre_payment_amount: roomType.pre_payment_amount,
            },
        };
    }
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), { reserved: rooms }) }) });
    updateInventory(roomTypeId);
}
function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return { reserved: 0, visibleInventory: 0, selected_variation: null };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
function calculateTotalCost() {
    let prePaymentAmount = 0;
    let totalAmount = 0;
    totalAmount = Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
        return (total +
            Object.values(value).reduce((innerTotal, ratePlan) => {
                var _a;
                let cost = 0;
                if (ratePlan.checkoutVariations.length > 0) {
                    cost = ratePlan.checkoutVariations.reduce((old, v) => old + v.amount, 0);
                }
                else {
                    cost = ratePlan.reserved > 0 ? ratePlan.reserved * ((_a = ratePlan.selected_variation.amount) !== null && _a !== void 0 ? _a : 0) : 0;
                }
                return innerTotal + cost;
            }, 0));
    }, 0);
    prePaymentAmount = Object.values(booking_store.ratePlanSelections).reduce((total, value) => {
        return (total +
            Object.values(value).reduce((innerTotal, ratePlan) => {
                var _a;
                let cost = 0;
                if (ratePlan.checkoutVariations.length > 0) {
                    cost = ratePlan.checkoutVariations.reduce((old, v) => old + v.amount, 0);
                }
                else {
                    cost = ratePlan.reserved > 0 ? ratePlan.reserved * ((_a = ratePlan.roomtype.pre_payment_amount) !== null && _a !== void 0 ? _a : 0) : 0;
                }
                return innerTotal + cost;
            }, 0));
    }, 0);
    return { totalAmount, prePaymentAmount };
}

export { booking_store as b, calculateTotalCost as c, getVisibleInventory as g, modifyBookingStore as m, reserveRooms as r, updateRoomParams as u };

//# sourceMappingURL=booking.js.map