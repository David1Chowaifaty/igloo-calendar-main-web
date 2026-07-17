'use strict';

var index = require('./index-KxiFTvIk.js');

const initialState = {};
const { state: interceptor_requests} = index.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;
