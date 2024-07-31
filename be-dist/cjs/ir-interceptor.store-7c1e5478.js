'use strict';

const index = require('./index-10c552bd.js');

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-7c1e5478.js.map