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
        return (h(Host, { key: '9dd71e3ec8ee22845bc8256b33ff489d730fb557', class: "progress-main" }, h("span", { key: 'b5eefc367d97b187047623dfc3374c918110d558', class: "progress-totle" }, this.percentage), h("div", { key: '23202ba5762ce7ae8205449f22292aa7da89c79e', class: "progress-line" }, h("div", { key: '941aa0308328de89e47cd9ddc883d82fd1b7c5e2', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map