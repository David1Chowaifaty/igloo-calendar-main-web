import { r as registerInstance, h, H as Host } from './index-CwWmK1sZ.js';

const irProgressIndicatorCss = () => `.sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}`;

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
        return (h(Host, { key: 'd11ad45cdc14d080fc3a641946d7b459506ec5a2', class: "progress-main" }, h("span", { key: 'e3f5b2f0bf85e836dd175bb626836c768e43924d', class: "progress-totle" }, this.percentage), h("div", { key: 'b5b195aff27a0a2ad318ad433c41dd26d3364c83', class: "progress-line" }, h("div", { key: '904e306aafbd9325e9e48e47f1a6de65ae08d50e', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
