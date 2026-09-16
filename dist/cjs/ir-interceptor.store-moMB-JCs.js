'use strict';

var locales_store = require('./locales.store-BMTss6fG.js');

const initialState = {};
const { state: interceptor_requests} = locales_store.createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

exports.interceptor_requests = interceptor_requests;
exports.isRequestPending = isRequestPending;
