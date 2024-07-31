'use strict';

const index$1 = require('./index-10c552bd.js');
require('./index-e2246344.js');
const index = require('./index-505d795c.js');

const initialState = {
    userFormData: {},
    modifiedGuestName: false,
    pickup: {
        arrival_date: index.dateFns.format(new Date(), 'yyyy-MM-dd'),
    },
    payment: null,
    agreed_to_services: false,
};
const { state: checkout_store, onChange: onCheckoutDataChange } = index$1.createStore(initialState);
function updateUserFormData(key, value) {
    checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { [key]: value });
}
function updatePickupFormData(key, value) {
    if (key === 'location' && value === null) {
        checkout_store.pickup = {
            arrival_date: index.dateFns.format(new Date(), 'yyyy-MM-dd'),
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

exports.checkout_store = checkout_store;
exports.onCheckoutDataChange = onCheckoutDataChange;
exports.updatePartialPickupFormData = updatePartialPickupFormData;
exports.updatePickupFormData = updatePickupFormData;
exports.updateUserFormData = updateUserFormData;

//# sourceMappingURL=checkout.store-c57806bb.js.map