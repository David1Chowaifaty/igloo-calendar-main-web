import { c as createStore } from './index-C7eXIDl2.js';

const initialState = {};
const { state: interceptor_requests} = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };
//# sourceMappingURL=ir-interceptor.store-C5Y_S4JJ.js.map

//# sourceMappingURL=ir-interceptor.store-C5Y_S4JJ.js.map