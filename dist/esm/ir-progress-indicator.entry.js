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
        return (h(Host, { key: 'aad599f2b52fd7da97de6ac512434ba113e5e979', class: "progress-main" }, h("span", { key: 'efbef3870548c4b3c0e5ba4ccfc42b59f8dcb422', class: "progress-totle" }, this.percentage), h("div", { key: '6b85d6219ad79e0032b38719dac49be731592f7a', class: "progress-line" }, h("div", { key: '5e18cdf9ef3b90c78a20500aded676cbf14b5e0c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map