'use strict';

const locales_store = require('./locales.store-e17228d2.js');

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = locales_store.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-dcef31c1.js.map