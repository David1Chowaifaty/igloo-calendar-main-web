'use strict';

const index = require('./index-08156e03.js');

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-a34e4608.js.map