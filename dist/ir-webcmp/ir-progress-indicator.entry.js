import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The percentage value to display and fill the progress bar.
     * Example: "75%"
     */
    percentage;
    /**
     * The color variant of the progress bar.
     * Options:
     * - 'primary' (default)
     * - 'secondary'
     */
    color = 'primary';
    render() {
        return (h(Host, { key: 'bf244f79ad172930703967afd89f5b5e7addfb56', class: "progress-main" }, h("span", { key: '8b45024ca5e1d858ba495a7571f69fad4fa5103c', class: "progress-totle" }, this.percentage), h("div", { key: '1d3cb3ac4fb5a154e95bd6e436def0003adcb6e9', class: "progress-line" }, h("div", { key: '9eb323fdc8089dfc5ee6ee5d8e8fcd0eba301ecd', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map