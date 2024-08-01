'use strict';

const index = require('./index-5e99a1fe.js');

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-ddd4cdfb.js.map