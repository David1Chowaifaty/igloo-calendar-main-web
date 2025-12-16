import { r as registerInstance, h } from './index-b3dce66a.js';

const irLoadingScreenCss = ".loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:white;margin:0 !important;padding:0 !important}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (h("div", { key: '544c0f8270624dacc47c207287ac9b30c4fd54c6', class: "loader__container" }, h("wa-spinner", { key: '80f2512fec82da58dc3b1df4b3e85c31c5837bdb', style: { fontSize: '2.5rem' } })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

export { IrLoadingScreen as ir_loading_screen };

//# sourceMappingURL=ir-loading-screen.entry.js.map