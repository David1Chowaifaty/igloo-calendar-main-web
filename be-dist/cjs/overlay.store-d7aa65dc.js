'use strict';

const index = require('./index-ab6de843.js');

const { state, onChange } = index.createStore({
    activeOverlays: 0,
});
const addOverlay = () => {
    console.log('first');
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

//# sourceMappingURL=overlay.store-d7aa65dc.js.map