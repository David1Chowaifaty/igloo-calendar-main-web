import { c as createStore } from './localization.store-7da5fafc.js';

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };

//# sourceMappingURL=ir-interceptor.store-8e81b558.js.map