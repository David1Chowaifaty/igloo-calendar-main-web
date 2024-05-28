import { createStore } from "@stencil/store";
import { format } from "date-fns";
const initialState = {
    userFormData: {},
    modifiedGuestName: false,
    pickup: {
        arrival_date: format(new Date(), 'yyyy-MM-dd'),
    },
    payment: null,
};
export const { state: checkout_store, onChange: onCheckoutDataChange } = createStore(initialState);
export function updateUserFormData(key, value) {
    checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { [key]: value });
}
export function updatePickupFormData(key, value) {
    if (key === 'location' && value === null) {
        checkout_store.pickup = {
            arrival_date: format(new Date(), 'yyyy-MM-dd'),
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
