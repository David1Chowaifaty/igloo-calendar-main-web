import { createStore } from "@stencil/store";
import booking_store from "./booking";
import moment from "moment";
const initialState = {
    userFormData: {},
    prepaymentAmount: 0,
    modifiedGuestName: false,
    pickup: {
        arrival_date: moment(booking_store.bookingAvailabilityParams.from_date),
    },
    payment: null,
    agreed_to_services: true,
};
export const { state: checkout_store, onChange: onCheckoutDataChange } = createStore(initialState);
export function updateUserFormData(key, value) {
    checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { [key]: value });
}
export function updatePickupFormData(key, value) {
    if (key === 'location' && value === null) {
        checkout_store.pickup = {
            arrival_date: moment(booking_store.bookingAvailabilityParams.from_date),
            location: null,
        };
    }
    else {
        checkout_store.pickup = Object.assign(Object.assign({}, checkout_store.pickup), { [key]: value });
    }
}
export function updatePartialPickupFormData(params) {
    checkout_store.pickup = Object.assign(Object.assign({}, checkout_store.pickup), params);
}
//# sourceMappingURL=checkout.store.js.map
