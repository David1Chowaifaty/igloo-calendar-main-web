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
        return (h(Host, { key: 'ffd0d1e027efeb16cbaf4836f0e1997ba87de138', class: "progress-main" }, h("span", { key: 'fab27c32f3064d96e3e08226ff04618c66d456fd', class: "progress-totle" }, this.percentage), h("div", { key: '2d47c1729f64ea638227d0d9056aea0a6ad5c6da', class: "progress-line" }, h("div", { key: '2db23409fb1e5da59c0d131053da65ba9c65ba1a', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map