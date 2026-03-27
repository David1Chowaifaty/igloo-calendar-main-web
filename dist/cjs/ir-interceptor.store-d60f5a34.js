'use strict';

const index = require('./index-fbf1fe1d.js');

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-d60f5a34.js.map