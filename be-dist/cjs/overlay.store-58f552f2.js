'use strict';

const localization_store = require('./localization.store-874cf51c.js');

const { state, onChange } = localization_store.createStore({
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

//# sourceMappingURL=overlay.store-58f552f2.js.map