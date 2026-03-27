import { r as registerInstance, h } from './index-7e96440e.js';

const irLoadingScreenCss = ".loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:white;margin:0 !important;padding:0 !important}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (h("div", { key: '59f8f6f5f4f03649471fe00553d1d8d861ea6b5d', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: 'cdf62bc531edf84777a233d83f606b1eb5b8b394', style: { fontSize: '2.5rem' } })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

export { IrLoadingScreen as ir_loading_screen };

//# sourceMappingURL=ir-loading-screen.entry.js.map