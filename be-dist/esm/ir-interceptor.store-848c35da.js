import { c as createStore } from './index-a8bcd484.js';

const initialState = {};
const { state: interceptor_requests, onChange: onInterceptorStateChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=ir-interceptor.store-848c35da.js.map