import { c as createStore } from './index-c1c77241.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=ir-interceptor.store-e96f5930.js.map