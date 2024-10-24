'use strict';

const localization_store = require('./localization.store-874cf51c.js');

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = localization_store.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;

//# sourceMappingURL=ir-interceptor.store-47551ef3.js.map