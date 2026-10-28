import { r as registerInstance, h } from './index-DKZeCK8T.js';

const irLoadingScreenCss = () => `.loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-default, white);margin:0 !important;padding:0 !important;box-sizing:border-box}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--wa-color-surface-default, white);display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (h("div", { key: 'd41d18392591a3a5b64ccdd0a60b9adb7f76ec68', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '4c80fc2289e91098c043776ef3915cb7c156131d', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
    }
};
IrLoadingScreen.style = irLoadingScreenCss();

export { IrLoadingScreen as ir_loading_screen };
