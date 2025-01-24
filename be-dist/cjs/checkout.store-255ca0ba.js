'use strict';

const localization_store = require('./localization.store-19c9046c.js');
const index = require('./index-ac85ebdb.js');

const initialState = {
    userFormData: {},
    prepaymentAmount: 0,
    modifiedGuestName: false,
    pickup: {
        arrival_date: index.dateFns.format(new Date(), 'yyyy-MM-dd'),
    },
    payment: null,
    agreed_to_services: true,
};
const { state: checkout_store, onChange: onCheckoutDataChange } = localization_store.createStore(initialState);
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

//# sourceMappingURL=checkout.store-255ca0ba.js.map