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
        return (h(Host, { key: 'f9cf0d1dd0113996dfd63288f43b5ac8a103077f', class: "progress-main" }, h("span", { key: '21b9ea8e70eb7d4be5a501cd4747afa773bf57bb', class: "progress-totle" }, this.percentage), h("div", { key: 'd375d39a50268a50c8ebb0e28388ee3d3a47a8fa', class: "progress-line" }, h("div", { key: 'dadbcc9d511060d28f5c289082de0b68fa1ba117', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map