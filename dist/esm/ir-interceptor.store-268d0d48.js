import { c as createStore } from './index-1d7b1ff2.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=ir-interceptor.store-268d0d48.js.map