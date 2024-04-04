import { createStore } from "@stencil/store";
const initialState = {
    roomTypes: undefined,
    enableBooking: false,
    ratePlanSelections: {},
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 1,
        child_nbr: 0,
    },
};
export const { state: booking_store, onChange: onRoomTypeChange } = createStore(initialState);
onRoomTypeChange('roomTypes', (newValue) => {
    booking_store.ratePlanSelections = {};
    let ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (roomType.is_active) {
            ratePlanSelections[roomType.id] = {};
            roomType.rateplans.forEach(ratePlan => {
                if (ratePlan.is_active && ratePlan.variations) {
                    ratePlanSelections[roomType.id][ratePlan.id] = {
                        reserved: 0,
                        visibleInventory: roomType.inventory === 1 ? 2 : roomType.inventory,
                    };
                }
            });
        }
    });
    booking_store.ratePlanSelections = Object.assign({}, ratePlanSelections);
    console.log(booking_store.ratePlanSelections);
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
export function reserveRooms(roomTypeId, ratePlanId, rooms) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = { reserved: 0, visibleInventory: 0 };
    }
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), { reserved: rooms }) }) });
    updateInventory(roomTypeId);
}
export function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return { reserved: 0, visibleInventory: 0 };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
export function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
export default booking_store;
//# sourceMappingURL=booking.js.map
