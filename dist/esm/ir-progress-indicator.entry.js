import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

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
        return (h(Host, { key: '41ccf31f8eca9e80a0d925a279d5491cb051368a', class: "progress-main" }, h("span", { key: '0f719254adff952f00afddf0d81f6bd72c560be6', class: "progress-totle" }, this.percentage), h("div", { key: '4d1e76696d96e1c0ad21202d04aea03fdf0aabc2', class: "progress-line" }, h("div", { key: '108b0ac96ceccfb4f70517dea408b705dda7347c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
