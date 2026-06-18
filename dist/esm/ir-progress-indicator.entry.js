import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';

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
        return (h(Host, { key: '426ef798faccb74256dd93075895bd1ff4e38994', class: "progress-main" }, h("span", { key: '23be34ca514392d989a49467d6b09b2e162a3d61', class: "progress-totle" }, this.percentage), h("div", { key: '43d311a51e103364bc5f58f64c203ae2aa2645a8', class: "progress-line" }, h("div", { key: 'c1a94bc32fd346748220d1d20f99350b42ffe1a5', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
