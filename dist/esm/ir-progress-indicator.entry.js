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
        return (h(Host, { key: 'a2550ad8e162133afadbcb1b747bb74e7e6669d3', class: "progress-main" }, h("span", { key: '02f94708bf1fdab0f723ee6977bc917cd493cee0', class: "progress-totle" }, this.percentage), h("div", { key: 'b6db1461e0a76c4739c5ee69578cac8aef801750', class: "progress-line" }, h("div", { key: 'eeba92f60a555dce3ec48fc10c73c50a9b693882', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map