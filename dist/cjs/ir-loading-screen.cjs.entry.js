'use strict';

var index = require('./index-CJa_TWt0.js');

const irLoadingScreenCss = () => `.loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-default, white);margin:0 !important;padding:0 !important;box-sizing:border-box}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--wa-color-surface-default, white);display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (index.h("div", { key: 'b628b8eeb1af9e23990aced2a4e5caecce1f6a23', class: "loader__container", "data-testid": "loading-screen" }, index.h("wa-spinner", { key: 'a313cc9f1a278f72194c4527831a244cf35c4df2', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
    }
};
IrLoadingScreen.style = irLoadingScreenCss();

exports.ir_loading_screen = IrLoadingScreen;
