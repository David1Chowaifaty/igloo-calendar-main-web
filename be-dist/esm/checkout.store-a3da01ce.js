import { c as createStore } from './localization.store-7e4dc18e.js';
import { d as dateFns } from './index-2217e605.js';

const initialState = {
    userFormData: {},
    prepaymentAmount: 0,
    modifiedGuestName: false,
    pickup: {
        arrival_date: dateFns.format(new Date(), 'yyyy-MM-dd'),
    },
    payment: null,
    agreed_to_services: false,
};
const { state: checkout_store, onChange: onCheckoutDataChange } = createStore(initialState);
function updateUserFormData(key, value) {
    checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { [key]: value });
}
function updatePickupFormData(key, value) {
    if (key === 'location' && value === null) {
        checkout_store.pickup = {
            arrival_date: dateFns.format(new Date(), 'yyyy-MM-dd'),
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

//# sourceMappingURL=checkout.store-a3da01ce.js.map