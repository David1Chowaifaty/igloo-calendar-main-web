import { c as createStore } from './index-CR94o8Bs.js';

const initialState = {};
const { state: interceptor_requests} = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };
