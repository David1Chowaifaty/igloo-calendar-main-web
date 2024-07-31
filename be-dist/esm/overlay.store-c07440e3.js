import { c as createStore } from './index-6014a5e7.js';

const { state, onChange } = createStore({
    activeOverlays: 0,
});
const addOverlay = () => {
    state.activeOverlays++;
};
const removeOverlay = () => {
    state.activeOverlays = Math.max(0, state.activeOverlays - 1);
};
onChange('activeOverlays', value => {
    document.body.style.overflow = value > 0 ? 'hidden' : '';
});

export { addOverlay as a, removeOverlay as r };

//# sourceMappingURL=overlay.store-c07440e3.js.map