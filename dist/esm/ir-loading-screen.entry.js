import { r as registerInstance, h, H as Host } from './index-1d2aa5ad.js';

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (h(Host, { key: '5fd3fe4fe29c193ff2abfbbc89356f4b242319e6' }, h("span", { key: 'ed88bf2faef53c5e6f573645a8eca2b88df30fd1', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

export { IrLoadingScreen as ir_loading_screen };

//# sourceMappingURL=ir-loading-screen.entry.js.map