import { c as createStore } from './localization.store-7e4dc18e.js';

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };

//# sourceMappingURL=ir-interceptor.store-04534ab6.js.map