import { c as createStore } from './index-U7zaiBri.js';

const initialState = {};
const { state: interceptor_requests} = createStore(initialState);
function isRequestPending(url) {
    return interceptor_requests[url] === 'pending';
}

export { interceptor_requests as a, isRequestPending as i };
