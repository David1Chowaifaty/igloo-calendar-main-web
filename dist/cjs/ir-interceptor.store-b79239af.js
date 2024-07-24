'use strict';

const index = require('./index-104877f7.js');

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-b79239af.js.map