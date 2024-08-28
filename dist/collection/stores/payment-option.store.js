import { createStore } from "@stencil/store";
const initialState = {
    selectedOption: null,
    token: null,
    languages: null,
};
export const { state: payment_option_store } = createStore(initialState);
export default payment_option_store;
//# sourceMappingURL=payment-option.store.js.map
