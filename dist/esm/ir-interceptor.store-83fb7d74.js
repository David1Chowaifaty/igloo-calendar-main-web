import { c as createStore } from './index-ca81f1d9.js';

const initialState = {};
const { state: interceptor_requests, onChange: onCalendarDatesChange } = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { isRequestPending as a, interceptor_requests as i };

//# sourceMappingURL=ir-interceptor.store-83fb7d74.js.map