import { c as createStore } from './index-f100e9d2.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=ir-interceptor.store-b1961d27.js.map