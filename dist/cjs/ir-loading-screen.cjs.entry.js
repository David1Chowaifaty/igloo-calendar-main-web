'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (index.h(index.Host, { key: '41292f0c417c96dce7e85298b4ceb7d67d10002c' }, index.h("span", { key: 'd9b3a46402a684baf833b1c3c6c43fa5b7f952f7', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

exports.ir_loading_screen = IrLoadingScreen;

//# sourceMappingURL=ir-loading-screen.cjs.entry.js.map