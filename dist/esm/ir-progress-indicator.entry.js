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
        return (h(Host, { key: '7bacbd6c8e710b273cdadffe01d5c951258876f0', class: "progress-main" }, h("span", { key: '8bc9c5987920a7fa3990f8b415dedc4aa7aa1fed', class: "progress-totle" }, this.percentage), h("div", { key: '673e66e77c883b65946b18b31c03478dac736a14', class: "progress-line" }, h("div", { key: 'bee1977bd851309e25c647facbb1b9492aadcc20', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map