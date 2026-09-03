import { createStore } from "@stencil/store";
const initialState = {
    selectedOption: null,
    ApiClient: null,
    mode: 'create',
    languages: null,
};
export const { state: payment_option_store } = createStore(initialState);
export default payment_option_store;
