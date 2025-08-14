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
        return (h(Host, { key: '8ed3bf57edcd5e43b51ea96721840a183341cea1', class: "progress-main" }, h("span", { key: 'f87fb3173aa106b4bf72e8c50c78b8440dd6d948', class: "progress-totle" }, this.percentage), h("div", { key: 'ce1e771ad0967be96fbd50bff7d0c665a435bb55', class: "progress-line" }, h("div", { key: '396c91ea2d929e78ddeab146260b4c56d1decf38', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map