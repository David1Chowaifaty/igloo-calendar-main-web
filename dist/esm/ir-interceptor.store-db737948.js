import { c as createStore } from './index-c1c77241.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };

//# sourceMappingURL=ir-interceptor.store-db737948.js.map