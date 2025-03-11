import { c as createStore } from './locales.store-eb2a5c52.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };

//# sourceMappingURL=ir-interceptor.store-247ea933.js.map