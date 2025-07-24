'use strict';

const locales_store = require('./locales.store-855b855e.js');

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = locales_store.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-6fd1b116.js.map