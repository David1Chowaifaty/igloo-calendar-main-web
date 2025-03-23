'use strict';

var index = require('./index-PIkoJJtF.js');

const initialState = {};
const { state: interceptor_requests} = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;
//# sourceMappingURL=ir-interceptor.store-CcYE4FKe.js.map

//# sourceMappingURL=ir-interceptor.store-CcYE4FKe.js.map