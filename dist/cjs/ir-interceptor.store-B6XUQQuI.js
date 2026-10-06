'use strict';

var localeScope = require('./locale-scope-C7rmpwuA.js');

const initialState = {};
const { state: interceptor_requests} = localeScope.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;
