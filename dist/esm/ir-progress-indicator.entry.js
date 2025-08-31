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
        return (h(Host, { key: '59ff84ff9bfe60ca4eb6fb4487f3cb9cbfeea613', class: "progress-main" }, h("span", { key: '1439530d3ed5cd5fb07bd08e8c008b6df2b62eae', class: "progress-totle" }, this.percentage), h("div", { key: '9f6cef1ed8991d1fa0f3bae35f418e9f98f0f9fb', class: "progress-line" }, h("div", { key: 'bf9d92cca90e3eacfe674034a12d1571d38348ae', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map