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
        return (h(Host, { key: 'ab1785bd7785d2c574c393be52ddd57788dc86d9', class: "progress-main" }, h("span", { key: '6231dfe6c51c05c93d9cb25bfe190b7e467ac84d', class: "progress-totle" }, this.percentage), h("div", { key: '1f5da21c4e4b40336bbdf3825b74d6b50f1a4f49', class: "progress-line" }, h("div", { key: '8eb26dfdf4bca0ef028570b0298692b09d782ef0', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map