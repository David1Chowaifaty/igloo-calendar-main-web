'use strict';

const index = require('./index-10c552bd.js');

const { state, onChange } = index.createStore({
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

exports.addOverlay = addOverlay;
exports.removeOverlay = removeOverlay;

//# sourceMappingURL=overlay.store-07ac004b.js.map