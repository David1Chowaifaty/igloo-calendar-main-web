import { createStore } from "@stencil/store";
const initialState = {
    adultChildConstraints: {
        adult_max_nbr: 0,
        child_max_nbr: 0,
        child_max_age: 0,
    },
    allowedBookingSources: [],
    currency: undefined,
    endingDate: 0,
    formattedLegendData: undefined,
    is_vacation_rental: false,
    legendData: [],
    roomsInfo: [],
    startingDate: 0,
    language: '',
    toBeAssignedEvents: [],
    allowed_payment_methods: [],
    pickup_service: undefined,
    checkin_enabled: true,
    max_nights: 0,
    is_frontdesk_enabled: false,
    taxes: [],
    id: null,
    name: '',
    token: '',
    tax_statement: '',
    country: undefined,
    is_pms_enabled: false,
    roomHistory: {},
    is_automatic_check_in_out: false,
};
export const { state: calendar_data, onChange: onCalendarDatesChange } = createStore(initialState);
export function isSingleUnit(id) {
    var _a;
    if (calendar_data.roomHistory[id]) {
        return calendar_data.roomHistory[id];
    }
    const roomtype = calendar_data.roomsInfo.find(r => r.id === id);
    if (!roomtype) {
        console.warn(`Room type not found for ID: ${id}`);
        return false;
    }
    const result = ((_a = roomtype.physicalrooms) === null || _a === void 0 ? void 0 : _a.length) <= 1;
    calendar_data.roomHistory[id] = result;
    return result;
}
export default calendar_data;
//# sourceMappingURL=calendar-data.js.map
