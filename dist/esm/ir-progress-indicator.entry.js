import { r as registerInstance, h, H as Host } from './index-JbQjGrUG.js';

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
        return (h(Host, { key: '80a8b47a0ef910d5289b3073a2fa8046c8371a4c', class: "progress-main" }, h("span", { key: 'c961ee78dbd503cf7565cba689572508c819e1b1', class: "progress-totle" }, this.percentage), h("div", { key: '4c779a7b99cc2510247aef832a27b4b80c728ca8', class: "progress-line" }, h("div", { key: 'e3fdad24a79a1b5540ed22497830b22e39bc984f', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
