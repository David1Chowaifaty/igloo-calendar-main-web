'use strict';

const localization_store = require('./localization.store-19c9046c.js');

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = localization_store.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-43d2838f.js.map