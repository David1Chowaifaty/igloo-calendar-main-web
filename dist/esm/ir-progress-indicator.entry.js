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
        return (h(Host, { key: '36f53f62dd720f03152384f4822321c0ef69e482', class: "progress-main" }, h("span", { key: '9a9a944dc4ed872d2c3f54629dda2a7e7bcad12e', class: "progress-totle" }, this.percentage), h("div", { key: 'f857efb055dbf270ed9e5d07706d52dec27cd820', class: "progress-line" }, h("div", { key: '428dfa061fea181a1d9c6015bbe1417296ec6a9a', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map