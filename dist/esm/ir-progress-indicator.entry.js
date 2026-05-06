import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The percentage value to display and fill the progress bar.
     * Example: "75%"
     */
    percentage;
    /**
     * The color variant of the progress bar.
     * Options:
     * - 'primary' (default)
     * - 'secondary'
     */
    color = 'primary';
    render() {
        return (h(Host, { key: 'e2e89a70e07f8ddc400747c44adecca7c744a4c5', class: "progress-main" }, h("span", { key: 'a9841b3a7ecb500a1d8f6aad6d0b85f53f850b58', class: "progress-totle" }, this.percentage), h("div", { key: 'bc0ae2950aeac1c414cef9d308fcbfcdb9df9e24', class: "progress-line" }, h("div", { key: '6c5af52a0a87577d45b016202de4ec9b39b06953', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map