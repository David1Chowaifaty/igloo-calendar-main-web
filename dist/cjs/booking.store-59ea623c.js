'use strict';

const moment = require('./moment-1780b03a.js');
const calendarDates_store = require('./calendar-dates.store-1cc2d53b.js');
const axios = require('./axios-6e678d52.js');
const locales_store = require('./locales.store-0cac7e5d.js');
require('./calendar-data-004d3283.js');
const index = require('./index-467172e1.js');

async function getMyBookings(months) {
    const myBookings = [];
    const stayStatus = await getStayStatus();
    for (const month of months) {
        for (const day of month.days) {
            for (const room of day.room_types) {
                assignBooking(room.physicalrooms, myBookings, stayStatus);
            }
        }
    }
    return myBookings;
}
function assignBooking(physicalRoom, myBookings, stayStatus) {
    for (const room of physicalRoom) {
        for (const key in room.calendar_cell) {
            if (room.calendar_cell[key].Is_Available === false) {
                addOrUpdateBooking(room.calendar_cell[key], myBookings, stayStatus);
            }
        }
    }
}
const status = {
    '004': 'BLOCKED',
    '003': 'BLOCKED-WITH-DATES',
    '002': 'BLOCKED',
};
const bookingStatus = {
    '000': 'IN-HOUSE',
    '001': 'PENDING-CONFIRMATION',
    '002': 'CONFIRMED',
    '003': 'CHECKED-OUT',
};
function formatName(firstName, lastName) {
    if (firstName === null && lastName === null)
        return '';
    if (lastName !== null && lastName !== '') {
        return `${firstName !== null && firstName !== void 0 ? firstName : ''} , ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
    }
    return firstName;
}
async function getStayStatus() {
    try {
        const { data } = await axios.axios.post(`/Get_Setup_Entries_By_TBL_NAME_Multi`, {
            TBL_NAMES: ['_STAY_STATUS'],
        });
        return data.My_Result.map(d => ({
            code: d.CODE_NAME,
            value: d.CODE_VALUE_EN,
        }));
    }
    catch (error) {
        console.log(error);
    }
}
function renderBlock003Date(date, hour, minute) {
    const dt = new Date(date);
    dt.setHours(hour);
    dt.setMinutes(minute);
    return `${locales_store.locales.entries.Lcz_BlockedTill} ${moment.hooks(dt).format('MMM DD, HH:mm')}`;
}
function getDefaultData(cell, stayStatus) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (calendarDates_store.isBlockUnit(cell.STAY_STATUS_CODE)) {
        const blockedFromDate = moment.hooks(cell.My_Block_Info.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.from_date : cell.DATE;
        const blockedToDate = moment.hooks(cell.My_Block_Info.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.My_Block_Info.to_date : cell.DATE;
        return {
            ID: cell.POOL,
            NOTES: '',
            BALANCE: '',
            NAME: cell.My_Block_Info.NOTES !== ''
                ? cell.My_Block_Info.NOTES
                : cell.STAY_STATUS_CODE === '003'
                    ? renderBlock003Date(cell.My_Block_Info.BLOCKED_TILL_DATE, cell.My_Block_Info.BLOCKED_TILL_HOUR, cell.My_Block_Info.BLOCKED_TILL_MINUTE)
                    : stayStatus.find(st => st.code === cell.STAY_STATUS_CODE).value || '',
            RELEASE_AFTER_HOURS: cell.My_Block_Info.DESCRIPTION,
            PR_ID: cell.My_Block_Info.pr_id,
            ENTRY_DATE: cell.My_Block_Info.BLOCKED_TILL_DATE,
            ENTRY_HOUR: cell.My_Block_Info.BLOCKED_TILL_HOUR,
            ENTRY_MINUTE: cell.My_Block_Info.BLOCKED_TILL_MINUTE,
            OPTIONAL_REASON: cell.My_Block_Info.NOTES,
            FROM_DATE: blockedFromDate,
            TO_DATE: blockedToDate,
            NO_OF_DAYS: calendarDates_store.dateDifference(blockedFromDate, blockedToDate),
            STATUS: status[cell.STAY_STATUS_CODE],
            POOL: cell.POOL,
            STATUS_CODE: cell.STAY_STATUS_CODE,
            OUT_OF_SERVICE: cell.STAY_STATUS_CODE === '004',
            FROM_DATE_STR: cell.My_Block_Info.format.from_date,
            TO_DATE_STR: cell.My_Block_Info.format.to_date,
            defaultDates: {
                from_date: cell.My_Block_Info.from_date,
                to_date: cell.My_Block_Info.to_date,
            },
        };
    }
    if (cell.booking.booking_nbr.toString() === '77054273380') {
        console.log('booking', cell);
    }
    // if (cell.booking.booking_nbr === '61249849') {
    //   console.log('cell');
    //   console.log(moment(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE);
    //   console.log(cell);
    // }
    const bookingFromDate = moment.hooks(cell.room.from_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.from_date : cell.DATE;
    const bookingToDate = moment.hooks(cell.room.to_date, 'YYYY-MM-DD').isAfter(cell.DATE) ? cell.room.to_date : cell.DATE;
    const mainGuest = (_a = cell.room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
    return {
        ID: cell.POOL,
        FROM_DATE: bookingFromDate,
        TO_DATE: bookingToDate,
        NO_OF_DAYS: calendarDates_store.dateDifference(bookingFromDate, bookingToDate),
        STATUS: bookingStatus[(_b = cell.booking) === null || _b === void 0 ? void 0 : _b.status.code],
        NAME: formatName(mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.first_name, mainGuest === null || mainGuest === void 0 ? void 0 : mainGuest.last_name),
        IDENTIFIER: cell.room.identifier,
        PR_ID: cell.pr_id,
        POOL: cell.POOL,
        BOOKING_NUMBER: cell.booking.booking_nbr,
        NOTES: cell.booking.is_direct ? cell.booking.remark : null,
        PRIVATE_NOTE: getPrivateNote(cell.booking.extras),
        is_direct: cell.booking.is_direct,
        BALANCE: (_c = cell.booking.financial) === null || _c === void 0 ? void 0 : _c.due_amount,
        channel_booking_nbr: cell.booking.channel_booking_nbr,
        ARRIVAL_TIME: cell.booking.arrival.description,
        defaultDates: {
            from_date: cell.room.from_date,
            to_date: cell.room.to_date,
        },
        ///from here
        ENTRY_DATE: cell.booking.booked_on.date,
        PHONE_PREFIX: cell.booking.guest.country_phone_prefix,
        IS_EDITABLE: cell.booking.is_editable,
        ARRIVAL: cell.booking.arrival,
        PHONE: (_d = cell.booking.guest.mobile_without_prefix) !== null && _d !== void 0 ? _d : '',
        RATE: cell.room.total,
        RATE_PLAN: cell.room.rateplan.name,
        SPLIT_BOOKING: false,
        RATE_PLAN_ID: cell.room.rateplan.id,
        RATE_TYPE: (_f = (_e = cell.room) === null || _e === void 0 ? void 0 : _e.roomtype) === null || _f === void 0 ? void 0 : _f.id,
        ADULTS_COUNT: cell.room.occupancy.adult_nbr,
        CHILDREN_COUNT: cell.room.occupancy.children_nbr,
        origin: cell.booking.origin,
        GUEST: cell.booking.guest,
        ROOMS: cell.booking.rooms,
        cancelation: cell.room.rateplan.cancelation,
        guarantee: cell.room.rateplan.guarantee,
        TOTAL_PRICE: (_g = cell.booking.financial) === null || _g === void 0 ? void 0 : _g.gross_total,
        COUNTRY: cell.booking.guest.country_id,
        FROM_DATE_STR: cell.booking.format.from_date,
        TO_DATE_STR: cell.booking.format.to_date,
        adult_child_offering: cell.room.rateplan.selected_variation.adult_child_offering,
        SOURCE: { code: cell.booking.source.code, description: cell.booking.source.description, tag: cell.booking.source.tag },
        //TODO:Implement checkin-checkout
        CHECKIN: ((_h = cell.room.in_out) === null || _h === void 0 ? void 0 : _h.code) === '001',
        CHECKOUT: ((_j = cell.room.in_out) === null || _j === void 0 ? void 0 : _j.code) === '002',
        ROOM_INFO: {
            occupancy: cell.room.occupancy,
            sharing_persons: cell.room.sharing_persons,
            unit: cell.room.unit,
            in_out: cell.room.in_out,
        },
        BASE_STATUS_CODE: (_k = cell.booking.status) === null || _k === void 0 ? void 0 : _k.code,
    };
}
function addOrUpdateBooking(cell, myBookings, stayStatus) {
    const index = myBookings.findIndex(booking => booking.POOL === cell.POOL);
    if (index === -1) {
        const newData = getDefaultData(cell, stayStatus);
        myBookings.push(newData);
    }
    //else {
    //   const updatedData = updateBookingWithStayData(myBookings[index], cell);
    //   myBookings[index] = updatedData;
    // }
}
function getPrivateNote(extras) {
    var _a;
    if (!extras) {
        return null;
    }
    return ((_a = extras.find(e => e.key === 'private_note')) === null || _a === void 0 ? void 0 : _a.value) || null;
}

const initialState = {
    checkout_guest: null,
    guest: null,
    tax_statement: null,
    roomTypes: [],
    enableBooking: false,
    resetBooking: false,
    ratePlanSelections: {},
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
let { state: booking_store, onChange: onRoomTypeChange, reset } = index.createStore(initialState);
function resetBookingStore() {
    reset();
}
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
            var _a, _c, _d, _e;
            if (!ratePlan.is_active || !((_a = ratePlan === null || ratePlan === void 0 ? void 0 : ratePlan.variations) === null || _a === void 0 ? void 0 : _a.length))
                return;
            const currentRatePlanSelection = (_c = currentSelections[roomType.id]) === null || _c === void 0 ? void 0 : _c[ratePlan.id];
            ratePlanSelections[roomType.id][ratePlan.id] =
                currentRatePlanSelection && Object.keys(currentRatePlanSelection).length > 0
                    ? Object.assign(Object.assign({}, currentRatePlanSelection), { ratePlan, selected_variation: (_d = checkVariation(ratePlan.variations, currentRatePlanSelection.selected_variation)) !== null && _d !== void 0 ? _d : null, visibleInventory: roomType.inventory, reserved: roomType.inventory === 0 ? 0 : booking_store.resetBooking ? 0 : currentRatePlanSelection.reserved, checkoutVariations: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutVariations, checkoutBedSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutBedSelection, checkoutSmokingSelection: roomType.inventory === 0 ? [] : currentRatePlanSelection.checkoutSmokingSelection, guestName: roomType.inventory === 0 ? [] : currentRatePlanSelection.guestName, roomtype: Object.assign({}, currentRatePlanSelection.roomtype) }) : {
                    reserved: 0,
                    rp_amount: 0,
                    view_mode: '001',
                    guest: null,
                    visibleInventory: roomType.inventory,
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
        const availableRooms = roomTypeData ? roomTypeData.inventory - totalSelectedRoomsExcludingCurrent : 0;
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
function reserveRooms({ ratePlanId, roomTypeId, rooms, guest }) {
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
    booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [Number(roomTypeId)]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[Number(roomTypeId)]), { [ratePlanId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId][ratePlanId]), { reserved: rooms, checkoutVariations: [], guest: newGuest }) }) });
    updateInventory(roomTypeId);
}
function getVisibleInventory(roomTypeId, ratePlanId) {
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
function modifyBookingStore(key, value) {
    booking_store[key] = value;
}
function calculateTotalRooms() {
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
function resetReserved() {
    const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
        const roomType = booking_store.roomTypes.find(rt => rt.id.toString() === roomTypeId.toString());
        acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
            var _a;
            rpAcc[ratePlanId] = Object.assign(Object.assign({}, ratePlan), { reserved: 0, visibleInventory: (_a = roomType === null || roomType === void 0 ? void 0 : roomType.inventory) !== null && _a !== void 0 ? _a : ratePlan.visibleInventory });
            return rpAcc;
        }, {});
        return acc;
    }, {});
    booking_store.ratePlanSelections = Object.assign({}, updatedSelections);
}

exports.booking_store = booking_store;
exports.calculateTotalRooms = calculateTotalRooms;
exports.getMyBookings = getMyBookings;
exports.getVisibleInventory = getVisibleInventory;
exports.modifyBookingStore = modifyBookingStore;
exports.reserveRooms = reserveRooms;
exports.resetBookingStore = resetBookingStore;
exports.resetReserved = resetReserved;
exports.updateRoomParams = updateRoomParams;

//# sourceMappingURL=booking.store-59ea623c.js.map