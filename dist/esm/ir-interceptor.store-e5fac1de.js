import { c as createStore } from './index-c4cf83be.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };

//# sourceMappingURL=ir-interceptor.store-e5fac1de.js.map