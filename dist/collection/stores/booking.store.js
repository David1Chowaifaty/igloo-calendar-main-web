import { createStore } from "@stencil/store";
import moment from "moment";
const initialState = {
    bookingDraft: {
        dates: {
            checkIn: moment().startOf('day'),
            checkOut: moment().add(1, 'day'),
        },
        occupancy: {
            adults: null,
            children: null,
        },
        source: null,
    },
    selects: {
        sources: [],
    },
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
    selectedPaymentMethod: null,
    isInFreeCancelationZone: false,
    bookingAvailabilityParams: {
        from_date: null,
        to_date: null,
        adult_nbr: 0,
        child_nbr: 0,
        infant_nbr: 0,
    },
    booking: null,
    fictus_booking_nbr: null,
    event_type: { type: 'PLUS_BOOKING' },
};
export let { state: booking_store, onChange: onRoomTypeChange, reset } = createStore(initialState);
export function resetBookingStore(closeModal) {
    const { bookingDraft, selects } = booking_store;
    reset();
    if (!closeModal) {
        setBookingDraft(bookingDraft);
        setBookingSelectOptions(selects);
    }
}
export function setBookingDraft(params) {
    booking_store.bookingDraft = {
        ...booking_store.bookingDraft,
        ...params,
        dates: {
            ...booking_store.bookingDraft.dates,
            ...params.dates,
        },
        occupancy: {
            ...booking_store.bookingDraft.occupancy,
            ...params.occupancy,
        },
    };
}
export function setBookingSelectOptions(params) {
    booking_store.selects = {
        ...booking_store.selects,
        ...params,
    };
}
function checkVariation(variations, selected_variation) {
    if (!variations) {
        return null;
    }
    if (!selected_variation || booking_store.resetBooking) {
        return variations[0];
    }
    return variations?.find(v => v.adult_nbr === selected_variation.adult_nbr && v.child_nbr === selected_variation.child_nbr) ?? null;
}
onRoomTypeChange('roomTypes', (newValue) => {
    const currentSelections = booking_store.ratePlanSelections;
    const ratePlanSelections = {};
    newValue.forEach(roomType => {
        if (!roomType.is_active)
            return;
        ratePlanSelections[roomType.id] = ratePlanSelections[roomType.id] || {};
        roomType.rateplans.forEach(ratePlan => {
            if (!ratePlan.is_active || !ratePlan?.variations?.length)
                return;
            let lastVariation = ratePlan.variations[ratePlan.variations.length - 1];
            lastVariation = ratePlan.selected_variation ?? lastVariation;
            const currentRatePlanSelection = currentSelections[roomType.id]?.[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? {
                        ...currentRatePlanSelection,
                        ratePlan,
                        selected_variation: checkVariation(ratePlan.variations, currentRatePlanSelection.selected_variation) ?? null,
                        visibleInventory: roomType.inventory,
                        reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved,
                        checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations,
                        checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection,
                        checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection,
                        guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName,
                        roomtype: {
                            ...currentRatePlanSelection.roomtype,
                        },
                    }
                    : {
                        reserved: 0,
                        rp_amount: 0,
                        view_mode: '001',
                        guest: null,
                        visibleInventory: roomType.inventory,
                        selected_variation: ratePlan?.variations[0] ?? null,
                        ratePlan,
                        guestName: [],
                        is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
                        roomtype: {
                            ...roomType,
                            physicalrooms: null,
                            rateplans: null,
                            availabilities: null,
                        },
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
        const availableRooms = roomTypeData ? roomTypeData.inventory - totalSelectedRoomsExcludingCurrent : 0;
        return [
            ratePlanId,
            {
                ...ratePlan,
                visibleInventory: availableRooms > 0 ? availableRooms : 0,
            },
        ];
    }));
    if (JSON.stringify(roomTypeSelection) !== JSON.stringify(newRatePlans)) {
        booking_store.ratePlanSelections = {
            ...booking_store.ratePlanSelections,
            [roomTypeId]: newRatePlans,
        };
    }
}
export function updateRoomParams({ ratePlanId, roomTypeId, params }) {
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                ...params,
            },
        },
    };
}
export function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
    if (!booking_store.ratePlanSelections[roomTypeId]) {
        booking_store.ratePlanSelections[roomTypeId] = {};
    }
    const roomType = booking_store.roomTypes?.find(r => r.id === roomTypeId);
    if (!roomType) {
        throw new Error('Invalid room type id');
    }
    const ratePlan = roomType.rateplans.find(r => r.id === ratePlanId);
    if (!ratePlan) {
        throw new Error('Invalid rate plan');
    }
    let newGuest = Array.from({ length: rooms }, () => ({ first_name: '', last_name: '', unit: null, bed_preference: null, infant_nbr: null }));
    if (guest) {
        newGuest = guest;
    }
    if (!booking_store.ratePlanSelections[roomTypeId][ratePlanId]) {
        booking_store.ratePlanSelections[roomTypeId][ratePlanId] = {
            guestName: null,
            reserved: 0,
            view_mode: '001',
            rp_amount: 0,
            guest: newGuest,
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
                is_bed_configuration_enabled: roomType.is_bed_configuration_enabled,
            },
        };
    }
    booking_store.ratePlanSelections = {
        ...booking_store.ratePlanSelections,
        [Number(roomTypeId)]: {
            ...booking_store.ratePlanSelections[Number(roomTypeId)],
            [ratePlanId]: {
                ...booking_store.ratePlanSelections[roomTypeId][ratePlanId],
                reserved: rooms,
                checkoutVariations: [],
                guest: newGuest,
            },
        },
    };
    updateInventory(roomTypeId);
}
export function getVisibleInventory(roomTypeId, ratePlanId) {
    if (!booking_store.ratePlanSelections || !booking_store.ratePlanSelections[roomTypeId]) {
        return {
            reserved: 0,
            guest: null,
            visibleInventory: 0,
            selected_variation: null,
            ratePlan: null,
            guestName: [],
            is_bed_configuration_enabled: false,
            checkoutVariations: [],
            checkoutBedSelection: [],
            checkoutSmokingSelection: [],
            rp_amount: 0,
            view_mode: '001',
            roomtype: null,
        };
    }
    return booking_store.ratePlanSelections[roomTypeId][ratePlanId];
}
export function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
export function calculateTotalCost(gross = false) {
    let prePaymentAmount = 0;
    let totalAmount = 0;
    const calculateCost = (ratePlan, isPrePayment = false) => {
        if (ratePlan.checkoutVariations.length > 0 && ratePlan.reserved > 0) {
            if (isPrePayment) {
                return ratePlan.reserved * ratePlan.ratePlan.pre_payment_amount || 0;
            }
            return ratePlan.checkoutVariations.reduce((sum, variation) => {
                return sum + Number(variation[gross ? 'discounted_gross_amount' : 'discounted_amount']);
            }, 0);
        }
        else if (ratePlan.reserved > 0) {
            const amount = isPrePayment ? ratePlan.ratePlan.pre_payment_amount ?? 0 : ratePlan.selected_variation[gross ? 'discounted_gross_amount' : 'discounted_amount'];
            return ratePlan.reserved * (amount ?? 0);
        }
        return 0;
    };
    Object.values(booking_store.ratePlanSelections).forEach(value => {
        Object.values(value).forEach(ratePlan => {
            totalAmount += calculateCost(ratePlan);
            prePaymentAmount += calculateCost(ratePlan, true);
        });
    });
    return { totalAmount, prePaymentAmount };
}
export function validateBooking() {
    return Object.values(booking_store.ratePlanSelections).every(roomTypeSelection => Object.values(roomTypeSelection).every(ratePlan => ratePlan.guestName.every(name => name.trim() !== '')));
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
export function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            rpAcc[ratePlanId] = { ...ratePlan, reserved: 0, visibleInventory: roomType?.inventory ?? ratePlan.visibleInventory };
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = { ...updatedSelections };
}
export default booking_store;
//# sourceMappingURL=booking.store.js.map
