import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: '10f8bc338b4982befe096c3d2f9e892a8b72e763', class: "progress-main" }, h("span", { key: '3840efe89e481eaf36a225df139cbdcb3c1b7195', class: "progress-totle" }, this.percentage), h("div", { key: 'b31c12270dea9ff805acc2ad656c878f48cde8d7', class: "progress-line" }, h("div", { key: '7368b9169f6ee45c56279bb15a6e1fed090a1763', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map