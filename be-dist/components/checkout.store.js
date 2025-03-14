import { c as createStore } from './index2.js';
import { b as booking_store } from './utils.js';
import { h as hooks } from './moment.js';

const initialState = {
    userFormData: {},
    prepaymentAmount: 0,
    modifiedGuestName: false,
    pickup: {
        arrival_date: hooks(booking_store.bookingAvailabilityParams.from_date),
    },
    payment: null,
    agreed_to_services: true,
};
const { state: checkout_store, onChange: onCheckoutDataChange } = createStore(initialState);
function updateUserFormData(key, value) {
    checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { [key]: value });
}
function updatePickupFormData(key, value) {
    if (key === 'location' && value === null) {
        checkout_store.pickup = {
            arrival_date: hooks(booking_store.bookingAvailabilityParams.from_date),
            location: null,
        };
    }
    else {
        checkout_store.pickup = Object.assign(Object.assign({}, checkout_store.pickup), { [key]: value });
    }
}
function updatePartialPickupFormData(params) {
    checkout_store.pickup = Object.assign(Object.assign({}, checkout_store.pickup), params);
}

export { updatePickupFormData as a, updatePartialPickupFormData as b, checkout_store as c, onCheckoutDataChange as o, updateUserFormData as u };

//# sourceMappingURL=checkout.store.js.map